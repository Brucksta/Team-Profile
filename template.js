const generateHtml = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Staff</title>
</head>
<body>
    <header class="main-header">
        <h1>My Team</h1>
    </header> 
    
    <div class='cards'>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Employee Name: ${answers[0].fullName}
                </p>
            </header>
            <div class="card-content">
              <div class="content">
             <p>Employee ID: ${answers[0].id}</p>
               <p>Employee email: ${answers[0].email}</p>
               <p>Employee OfficeNumber: ${answers[0].officeNumber} </p>
            
              </div>
            </div>
          </div>
`

module.exports = generateHtml
