const managerHtml = (answers) => {
return `<div class='cards'>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Managers Name: ${answers.fullName}
                </p>
            </header>
            <div class="card-content">
              <div class="content">
             <p><strong>Employee ID:</strong> ${answers.id}</p>
               <p><strong>Employee email:</strong> ${answers.email}</p>
               <p><strong>Employee OfficeNumber:</strong> ${answers.officeNumber} </p>
            
              </div>
            </div>
          </div>
`
}

module.exports = managerHtml
