
const students = [
    { name: "Alice", class: "JSS1", score: 75 },
    { name: "Bob", class: "JSS1", score: 62 },
    { name: "Charlie", class: "JSS2", score: 48 },
    { name: "Diana", class: "JSS2", score: 85 },
    { name: "Evan", class: "JSS3", score: 33 },
    { name: "Fiona", class: "JSS3", score: 55 }
  ];
  
  
  function groupByClass(students) {
    const classes = {};
    students.forEach(student => {
      if (!classes[student.class]) {
        classes[student.class] = [];
      }
      classes[student.class].push(student);
    });
    return classes;
  }
  

  function getGrade(score) {
    if (score >= 70) return "A";
    if (score >= 60) return "B";
    if (score >= 50) return "C";
    if (score >= 40) return "D";
    return "F";
  }
  
  
  function groupByGrade(students) {
    const grades = { A: [], B: [], C: [], D: [], F: [] };
    students.forEach(student => {
      const grade = getGrade(student.score);
      grades[grade].push(student);
    });
    return grades;
  }
  
  
  function displayStudentsByClass() {
    const container = document.getElementById('students-by-class');
    const grouped = groupByClass(students);
  
    for (let cls in grouped) {
      const div = document.createElement('div');
      div.className = 'container';
      const title = document.createElement('h3');
      title.textContent = cls;
      div.appendChild(title);
  
      const ul = document.createElement('ul');
      grouped[cls].forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - Score: ${student.score}`;
        ul.appendChild(li);
      });
  
      div.appendChild(ul);
      container.appendChild(div);
    }
  }
  
  
  function displayStudentsByGrade() {
    const container = document.getElementById('students-by-grade');
    const grouped = groupByGrade(students);
  
    for (let grade in grouped) {
      const div = document.createElement('div');
      div.className = 'container';
      const title = document.createElement('h3');
      title.textContent = `Grade ${grade}`;
      div.appendChild(title);
  
      const ul = document.createElement('ul');
      grouped[grade].forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name} (${student.class}) - Score: ${student.score}`;
        ul.appendChild(li);
      });
  
      div.appendChild(ul);
      container.appendChild(div);
    }
  }
  
  
  displayStudentsByClass();
  displayStudentsByGrade();
  