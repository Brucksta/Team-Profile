const internHtml = (answers) => {
return `<div class='cards'>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Employee Name: ${answers.fullName}
                </p>
            </header>
            <div class="card-content">
              <div class="content">
             <p>Employee ID: ${answers.id}</p>
               <p>Employee email: ${answers.email}</p>
               <p>Employee OfficeNumber: ${answers.officeNumber} </p>
            
              </div>
            </div>
          </div>
`
}

module.exports = internHtml
