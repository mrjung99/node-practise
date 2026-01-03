const projects = [
  "ecommerce",
  "school management",
  "hospital management",
  "Inventory mangement system",
];

export async function getProjects() {
  const projectsList = projects
    .map((project) => `<li>${project}</li>`)
    .join("");

  const html = `  
      <!DOCTYPE html>
      <html>
        <head>
          <title>Projects</title>
        </head>
        <body>
          <h1>My Projects</h1>
          <ul>
            ${projectsList}
          </ul>
        </body>
      </html>
    `;

  return html;
}
