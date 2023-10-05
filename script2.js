
// const taskList= document.getElementById("task-list")

// document.getElementById("add-task-form").addEventListener("submit",(e)=>{
//     e.preventDefault()

//     const title= document.getElementById("task-title").value
//     const desc= document.getElementById("task-desc").value
//    const li = document.createElement("li")
//    li.innerHTML = `${title} - ${desc}`
//     taskList.appendChild(li)
//     title.value =""
//     desc.value=""
// })
// console.log(taskList.textContent)

// function* randomGenerators() {
//     while (true) {
//       yield Math.random();
//     }
//   }
  
//   const randoGenerator = randomGenerators();
  
//   console.log(randoGenerator.next().value);
//   console.log(randoGenerator.next().value);
//   console.log(randoGenerator.next().value);
//   console.log(randoGenerator.next().value);

//<===============================================>
// class Student {
//     constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.subject = [];
//     }
//     addSubject(subject){
//     if(typeof(subject) !== 'string'){
//     throw new Error("Subject must be of string type!");
//     }
//     this.subject.push(subject);
//     }
//     }
//     const student1 = new Student("Kabir", "Kumar", 25);
//     try{
//     student1.addSubject("Maths");
//     student1.addSubject("Physics");
//     student1.addSubject("chemistry");
//     student1.addSubject(123);
//     }
//     catch(error){
//     console.error(error.message)
//     }
//     console.log(student1)

    async function fetchDataWithRetry(url, maxAttempts) {
        let attempt = 1;
        let delay = 1000; // Initial delay in milliseconds (1 second)
    
        while (attempt <= maxAttempts) {
            try {
                const response = await fetch(url);
    
                if (response.ok) {
                    // If the response is successful (status code 200-299), return the data
                    return await response.json();
                }
    
                // If the response is not successful, increase the delay and retry
                console.log(`Attempt ${attempt} failed. Retrying in ${delay / 1000} seconds...`);
            } catch (error) {
                // If an error occurred during the fetch, retry with the current delay
                console.error(`Attempt ${attempt} failed with error: ${error.message}. Retrying in ${delay / 1000} seconds...`);
            }
    
            // Increase the delay exponentially (you can adjust the factor as needed)
            delay *= 2;
    
            // Wait for the specified delay before the next retry
            await new Promise(resolve => setTimeout(resolve, delay));
    
            attempt++;
        }
    
        console.error(`Max retry attempts (${maxAttempts}) reached. Could not fetch data from ${url}`);
    }
    
    // Example usage:
    const url = 'https://example.com/api/data';
    const maxAttempts = 3; // Set the maximum number of retry attempts
    (fetchDataWithRetry(url, maxAttempts)).then(data=>console.log(data));
    
    