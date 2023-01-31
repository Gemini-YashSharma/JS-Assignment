(function() {
    const personalData = [
      {
        name: "ABC",
        age: 21,
        dob: "1/01/2001",
        email: "ABC@geminisolution.com",
        company: "Gemini Solution"
      },
      {
        name: "JKL",
        age: 22,
        dob: "1/02/1999",
        email: "JKL@geminisolution.com",
        company: "Gemini Solution"
      },
      {
        name: "MNO",
        age: 20,
        dob: "1/03/2002",
        email: "MNO@geminisolution.com",
        company: "Gemini Solution"
      },
      {
        name: "PQR",
        age: 21,
        dob: "1/04/2001",
        email: "PQR@geminisolution.com",
        company: "Gemini Solution"
      },
      {
        name: "XYZ",
        age: 23,
        dob: "1/05/1998",
        email: "XYZ@geminisolution.com",
        company: "Gemini Solution"
      }
    ];
  
    function createTable() {
      const table = document.createElement("table");
      table.style.width = "100%";
      table.setAttribute("border", "1");
  
      const headerRow = document.createElement("tr");
      const headerData = ["Name", "Age", "DOB", "Email", "Company"];
      headerData.forEach(header => {
        const th = document.createElement("th");
        const boldText = document.createElement("b");
        boldText.innerText = header;
        th.appendChild(boldText);
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
  
      personalData.forEach(data => {
        const row = document.createElement("tr");
        const name = document.createElement("td");
        name.innerText = data.name;
        row.appendChild(name);
        const age = document.createElement("td");
        age.innerText = data.age;
        row.appendChild(age);
        const dob = document.createElement("td");
        dob.innerText = data.dob;
        row.appendChild(dob);
        const email = document.createElement("td");
        email.innerText = data.email;
        row.appendChild(email);
        const company = document.createElement("td");
        company.innerText = data.company;
        row.appendChild(company);
        table.appendChild(row);
      });
      document.body.appendChild(table);
    }
  
    createTable();
  })();
  