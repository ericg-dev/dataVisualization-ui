# dataVisualization-ui Project Outline

### **Visualized NFL Standings (WIP)**

- [ ] Use json data to temporarily display information
- [ ] Find a way to script NFL standings off Google
- [ ] Store it in a PostreSQL database with format equivalent to UI json code
- [ ] Display it with different region team filters with top 5 - 15 options
- [ ] Enable different chart options (pie/line)
- [ ] Bug test
- [ ] (*Optional*) Write test cases for your components with Jasmine framework


### **How to Use Github & Open Angular Project on VSCode**

1. Need to install Git Bash for Windows or MAC: [Git Bash](https://www.git-scm.com/downloads)
2. Log in with Git Credentials onto your laptop/computer on Git Bash
3. Click on Code button and copy HTTPS link 
4. Go to you folders and create a new folder where you want to keep the angular project
5. Direct into that folder through Git Bash, ex (~/source/repos/dataVisualization-ui (main))
6. Launch Git Bash and write: `git clone <https-link>`
7. Now open Visual Studio Code and open that folder
8. This will require you to install nodeJS and other packages I list below

### **Required Downloads & Launch - Steps**

- [nodeJS](https://nodejs.org/en/download/): Follow all steps and install Chocolatey as well, it will automatically ask you to.
- [Virtual Studio Code](https://code.visualstudio.com/Download): If you don't have it already, accept all default steps except make Windows terminal default
- Then direct into your project folder from previous steps, open in VSCode and run `npm install -g @angular/cli` then `npm install` then `ng serve` or `npm start`


