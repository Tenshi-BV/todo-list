(()=>{"use strict";const e=(()=>{class e{constructor(e){this.name=e,this.todosArray=[]}}class t{constructor(e,t,n,o,r){this.name=e,this.description=t,this.dueDate=n,this.priority=o,this.creatonDate=new Date,this.project=r,this.completion=0}}const n=[],o={createProject:()=>{let t=prompt("New project name:");if(""==t)return;const o=new e(t);n.push(o)},deleteProject:e=>{if(e===r)return;let t=n.indexOf(e);n.splice(t,1)},renameProject:e=>{e.name=prompt("New name:")}},r=new e("Default project");return n.push(r),{projectArray:n,projectMethods:o,todosMethods:{createTodo:e=>{let n=prompt("New todo name:"),o=prompt("Describe todo:"),r=prompt("Set due date;"),d=prompt("Set priority:");if(""==n||""==o||""==r||""==d)return;const c=new t(n,o,r,d,e);e.todosArray.push(c)},deleteTodo:(e,t)=>{let n=e.todosArray.indexOf(t);e.todosArray.splice(n,1)},renameTodo:e=>{e.name=prompt("New todo name:")},reDescribeTodo:e=>{e.description=prompt("Describe todo:")},reDateTodo:e=>{e.dueDate=prompt("Set due date;")},rePrioritiseTodo:e=>{e.priority=prompt("Set priority:")},setCompletionTodo:e=>{0==e.completion?e.completion=1:e.completion=0}}}})();(()=>{const e=document.querySelector("div#content");e.innerHTML="";const t=document.createElement("div");t.setAttribute("id","headerContainer"),e.appendChild(t);const n=document.createElement("h1");n.setAttribute("id","headerTitle"),n.textContent="Todo list",t.appendChild(n);const o=document.createElement("div");o.setAttribute("id","headerLine"),t.appendChild(o)})(),((e,t)=>{e=e||0,t=t||0;const n=document.querySelector("div#content"),o=document.createElement("div");if(o.setAttribute("id","directoryContainer"),n.appendChild(o),0==e&&0==t){const e=document.createElement("p");e.setAttribute("id","directoryParagraph"),e.textContent="Projects",o.appendChild(e)}else if(0!=e){const t=document.createElement("p");t.setAttribute("id","directoryParagraph"),t.textContent=`Projects > ${e.name}`,o.appendChild(t)}else if(0!=t){const e=document.createElement("p");e.setAttribute("id","directoryParagraph"),e.textContent=`Projects > ${t.project.name} > ${t.name}`,o.appendChild(e)}const r=document.createElement("div");r.setAttribute("id","directoryLine"),o.appendChild(r)})(0,0),(()=>{const e=document.querySelector("div#content"),t=document.createElement("div");t.setAttribute("id","bodyContainer"),e.appendChild(t)})(),((e,t)=>{const n=document.querySelector("div#bodyContainer"),o=document.createElement("div");o.setAttribute("id","sidebarContainer"),n.appendChild(o);const r=document.createElement("button");r.classList.add("sidebar"),r.textContent="create project",r.addEventListener("click",(()=>{e.createProject(),s()})),o.appendChild(r);const d=document.createElement("button");d.classList.add("sidebar"),d.textContent="delete project",d.addEventListener("click",(()=>{let t=p();e.deleteProject(t),s()})),o.appendChild(d);const c=document.createElement("button");c.classList.add("sidebar"),c.textContent="rename project",c.addEventListener("click",(()=>{e.renameProject(project),s()})),o.appendChild(c);const i=document.createElement("div");i.setAttribute("id","sidebarLine"),n.appendChild(i);const a=document.createElement("div");a.setAttribute("id","projectsContainer"),n.appendChild(a);for(let e=0;e<t.length;e++){const n=document.createElement("div");n.classList.add("projectContainer");let o=t[e];n.textContent=o.name,a.appendChild(n)}const s=()=>{a.innerHTML="";for(let e=0;e<t.length;e++){const n=document.createElement("div");n.classList.add("projectContainer");let o=t[e];n.textContent=o.name,a.appendChild(n)}},p=()=>{const e=document.createElement("div");e.setAttribute("id","selectProject"),n.appendChild(e);for(let e=0;e<t.length;e++){const e=document.createElement("button");e.classList.add("projectButtpm"),e.addEventListener("click",(()=>{}))}}})(e.projectMethods,e.projectArray)})();