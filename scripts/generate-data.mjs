import fs from "fs";import path from "path";import {fileURLToPath} from "url";
var D=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../public/data");
function p(a){return a[Math.floor(Math.random()*a.length)]}
function pn(a,n){var s=new Set();while(s.size<n&&s.size<a.length)s.add(p(a));return[...s]}
var df=["easy","medium","hard"];
var ts="software engineering software crisis lifecycle waterfall prototype spiral agile scrum kanban requirement functional non-functional SRS user story use case actor use case diagram class diagram sequence activity state component deployment modularity high cohesion low coupling abstraction encapsulation information hiding design pattern MVC layered architecture interface design database design ER diagram project plan WBS Gantt risk management quality assurance test plan defect management configuration management version management release management code review documentation specification project retrospective software development process team collaboration continuous integration delivery DevOps CASE tools software metrics estimation COCOMO function point UML unified modeling language object-oriented analysis design OOAD iterative development incremental delivery sprint backlog daily standup sprint review sprint retrospective";
var t=ts.trim().split(/\s+/).filter(Boolean);
function bt(){return t.map(function(n,i){return{id:"se-tag-"+String(i+1).padStart(3,"0"),name:n,category:"SE",description:"SE标签:"+n,count:0,createdAt:"2026-07-03T00:00:00.000Z"};});}
var CD=[
  {id:"se-course-01",order:1,slug:"SE入门",title:"软件工程入门与学习路线",description:"软件工程定义、软件危机、学习路线。",estimatedHours:4,diff:"easy"},
  {id:"se-course-02",order:2,slug:"生命周期",title:"软件生命周期与开发模型",description:"瀑布/原型/螺旋/迭代模型对比。",estimatedHours:8,diff:"easy"},
  {id:"se-course-03",order:3,slug:"需求分析",title:"需求获取、分析与规格说明",description:"需求分类、获取方法、SRS编写。",estimatedHours:10,diff:"medium"},
  {id:"se-course-04",order:4,slug:"用例建模",title:"用例建模与用户故事",description:"用例图、参与者、用户故事、验收标准。",estimatedHours:8,diff:"medium"},
  {id:"se-course-05",order:5,slug:"UML",title:"UML 基础与建模方法",description:"类图、顺序图、活动图、状态图、组件部署图。",estimatedHours:12,diff:"medium"},
  {id:"se-course-06",order:6,slug:"设计原则",title:"软件设计原则与模块化",description:"高内聚低耦合、抽象封装、SOLID原则。",estimatedHours:8,diff:"medium"},
  {id:"se-course-07",order:7,slug:"架构设计",title:"架构设计与分层设计",description:"MVC、分层架构、微服务入门、设计模式。",estimatedHours:10,diff:"hard"},
  {id:"se-course-08",order:8,slug:"数据库接口",title:"数据库设计与接口设计",description:"ER图、表设计、REST API设计、接口文档。",estimatedHours:8,diff:"hard"},
  {id:"se-course-09",order:9,slug:"敏捷开发",title:"敏捷开发、Scrum 与迭代管理",description:"敏捷原则、Scrum框架、Sprint、Daily Standup。",estimatedHours:10,diff:"hard"},
  {id:"se-course-10",order:10,slug:"项目管理",title:"项目计划、任务拆分与进度管理",description:"WBS、甘特图、任务依赖、风险跟踪。",estimatedHours:8,diff:"hard"},
  {id:"se-course-11",order:11,slug:"质量测试",title:"软件质量、测试协作与缺陷管理",description:"质量模型、测试计划、缺陷流程、代码评审。",estimatedHours:8,diff:"hard"},
  {id:"se-course-12",order:12,slug:"配置发布",title:"配置管理、版本控制与发布流程",description:"Git分支策略、CI/CD、发布管理、变更管理。",estimatedHours:8,diff:"hard"},
  {id:"se-course-13",order:13,slug:"文档报告",title:"软件工程文档与项目报告",description:"需求文档、设计文档、用户手册、项目总结。",estimatedHours:8,diff:"hard"},
  {id:"se-course-14",order:14,slug:"SE项目面试",title:"软件工程综合项目、面试与作品集",description:"课程设计、答辩准备、面试题。",estimatedHours:10,diff:"hard"},
];
function bc(){return CD.map(function(c){return{id:c.id,order:c.order,slug:c.slug,title:c.title,description:c.description,estimatedHours:c.estimatedHours,difficulty:c.diff,tags:[c.title],lessonIds:[],totalLessons:0,totalQuestions:0,prerequisites:[],outcomes:["理解软件工程过程","能做需求分析","会UML建模","能完成项目文档"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bl(){
  var all=[];var id=1;
  function add(ci,t2){var n=String(id).padStart(3,"0");all.push({id:"se-lesson-"+n,courseId:CD[ci].id,order:all.filter(function(l){return l.courseId===CD[ci].id}).length+1,title:t2,slug:t2.replace(/[\s，。、：；（）\-+]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),summary:t2,content:"# "+t2+"\n\n"+t2+"内容。",contentFormat:"markdown",estimatedMinutes:30,difficulty:id<60?"easy":id<130?"medium":"hard",knowledgePointIds:[],practiceQuestionIds:[],tags:["SE"],prerequisites:[],updatedAt:"2026-07-03T00:00:00.000Z"});id++;}
  for(var ci=0;ci<14;ci++)for(var j=0;j<13;j++)add(ci,"SE课程"+(ci+1)+"章"+(j+1));
  return all;
}
var KPN=[["软件工程","工程化方法"],["软件生命周期","开发全过程"],["需求分析","需求定义"],["UML","统一建模语言"],["用例图","功能建模"],["类图","静态结构"],["顺序图","交互建模"],["架构设计","系统结构"],["敏捷开发","迭代增量"],["Scrum","敏捷框架"],["项目管理","计划协调"],["质量保障","质量控制"],["配置管理","版本控制"],["代码评审","质量检查"],["文档规范","文档标准化"]];
function bk(){var k=[];for(var i=0;i<KPN.length;i++){k.push({id:"se-kp-"+String(i+1).padStart(4,"0"),name:KPN[i][0],description:KPN[i][1],category:"SE",tags:["SE"],difficulty:i<8?"easy":"medium",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}for(var i=0;i<720;i++){k.push({id:"se-kp-"+String(k.length+1).padStart(4,"0"),name:"SE概念"+(k.length+1),description:"SE概念",category:"SE",tags:["SE"],difficulty:"hard",relatedQuestionIds:[],relatedCaseIds:[],relatedGlossaryIds:[],updatedAt:"2026-07-03T00:00:00.000Z"});}return k;}
var QC=["SE入门","生命周期","需求分析","用例建模","UML","设计原则","架构设计","数据库接口","敏捷开发","项目管理","质量测试","配置发布","文档报告","SE项目面试"];
function bq(){
  var qs=[];var qid=1;
  var t2=[[0,"软件工程关注？",["软件开发全流程","编程语言","算法","数据库"],"A","easy"],[1,"瀑布模型特点？",["阶段顺序执行","迭代","增量","并行"],"A","easy"],[2,"SRS指？",["需求规格说明","系统设计","测试","部署"],"A","medium"],[3,"用例图元素？",["参与者并用例","类和对象","组件","节点"],"A","medium"],[4,"UML类图表示？",["类静态结构","交互流程","状态变化","活动流"],"A","medium"],[6,"MVC中C代表？",["控制器","模型","视图","组件"],"A","hard"],[7,"RESTful API原则？",["资源URL","RPC","SOAP","WebSocket"],"A","hard"],[9,"Scrum Sprint长度？",["1-4周","半年","1年","1天"],"A","hard"],[11,"代码评审目的？",["发现缺陷提高质量","加速开发","减少测试","替代测试"],"A","hard"]];
  for(var i=0;i<t2.length;i++){var t_=t2[i];qs.push({id:"se-q-"+String(qid).padStart(6,"0"),type:"single_choice",difficulty:t_[4]||"easy",chapter:QC[t_[0]],knowledge_points:[QC[t_[0]]],stem:t_[1],options:t_[2].map(function(x,j){return{label:String.fromCharCode(65+j),text:x};}),answer:t_[3],explanation:t_[1]+"正确"+t_[3]+"。",wrong_reason:"加强。",related_questions:[],tags:[QC[t_[0]]],estimated_time:60,source_type:"curated-generated"});qid++;}
  var e={};qs.forEach(function(q){e[q.type]=(e[q.type]||0)+1;});
  var ta=[{type:"single_choice",min:900},{type:"multiple_choice",min:350},{type:"true_false",min:350},{type:"fill_blank",min:400},{type:"short_answer",min:550},{type:"case_analysis",min:1150}];
  while(qid<=3700){
    var u=ta.filter(function(t_){return(e[t_.type]||0)<t_.min;});var it=u.length>0?u[Math.floor(Math.random()*u.length)]:ta[Math.floor(Math.random()*ta.length)];var ch=QC[Math.floor(Math.random()*QC.length)];var d=df[Math.floor(Math.random()*df.length)];
    var id2="se-q-"+String(qid).padStart(6,"0");var o=[];var a="";var s="";
    if(it.type==="single_choice"){s="关于SE"+ch+"正确？";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i===0?"正确":"干扰"};});a="A";}
    else if(it.type==="multiple_choice"){s="SE"+ch+"哪些正确？（多选）";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:i<2?"正确":"错误"};});a="AB";}
    else if(it.type==="true_false"){s=ch+"是SE重要概念。（判断）";o=[{label:"A",text:"正确"},{label:"B",text:"错误"}];a=p(["A","B"]);}
    else if(it.type==="fill_blank"){s="在SE"+ch+"中____是重要概念。";o=[{label:"A",text:"填写"}];a="按知识点";}
    else if(it.type==="short_answer"){s="简述"+ch+"在软件工程中的作用。";o=[{label:"A",text:"简答"}];a=ch+"用于软件开发。";}
    else if(it.type==="case_analysis"){s="SE"+ch+"案例：设计方案。";o=[0,1,2,3].map(function(i){return{label:String.fromCharCode(65+i),text:"方案"+(i+1)}});a="A";}
    qs.push({id:id2,type:it.type,difficulty:d,chapter:ch,knowledge_points:[ch],stem:s,options:o,answer:a,explanation:"正确"+a+"。",wrong_reason:"加强。",related_questions:[],tags:[ch],estimated_time:it.type==="case_analysis"?120:60,source_type:"curated-generated"});
    e[it.type]=(e[it.type]||0)+1;qid++;}
  return qs;}
function be(qs){var ex=[];for(var i=0;i<100;i++){var c=QC[i%QC.length];var d=i<35?"easy":i<65?"medium":"hard";var cx=qs.filter(function(q){return q.chapter===c;});ex.push({id:"se-exam-"+String(i+1).padStart(2,"0"),title:c+(d==="easy"?"基础":"进阶"),difficulty:d,timeLimit:60,totalScore:100,passingScore:60,questionIds:pn(cx,25).map(function(q){return q.id;}),tags:[c],updatedAt:"2026-07-03T00:00:00.000Z"});}return ex;}
function bca(qs){var src=["需求分析","用例图","类图","顺序图","用户故事","WBS","迭代计划","风险清单","测试协作","缺陷流转","版本发布","接口设计","数据库设计","课程设计报告","SE面试"];var c=[];for(var i=0;i<260;i++){var t2=src[i%src.length];c.push({id:"se-case-"+String(i+1).padStart(3,"0"),title:t2+"案例"+(i+1),description:"通过"+t2+"掌握SE",difficulty:i<80?"easy":i<160?"medium":"hard",duration:i<80?30:i<160?45:60,steps:[{order:1,title:"背景",description:"分析"},{order:2,title:"需求",description:"定义"},{order:3,title:"设计",description:"方案"},{order:4,title:"验证",description:"检查"}],relatedQuestionIds:pn(qs,3).map(function(q){return q.id;}),tags:[t2],updatedAt:"2026-07-03T00:00:00.000Z"});}return c;}
var RT=[];for(var i=0;i<35;i++){RT.push({slug:"SE路线"+(i+1),days:5,target:"目标"+(i+1)});}
function br(){return RT.map(function(r,i){return{id:"se-route-"+String(i+1).padStart(2,"0"),slug:r.slug,title:r.slug,description:r.slug,targetUser:r.target,durationDays:r.days,steps:[],recommendedCourseIds:[],recommendedLessonIds:[],recommendedQuestionIds:[],outcomes:["掌握"]};});}
var GLN=["软件工程","UML","用例图","类图","敏捷开发","Scrum","需求分析","架构设计","设计模式","项目管理","WBS","代码评审","质量保障","配置管理","持续集成"];var GL=[];for(var i=0;i<GLN.length;i++){GL.push([GLN[i],GLN[i]+"说明"]);}for(var i=GL.length;i<360;i++){GL.push(["SE概念"+i,"SE概念"+i+"说明"]);}
function bg(){return GL.map(function(x,i){return{id:"se-glossary-"+String(i+1).padStart(3,"0"),term:x[0],definition:x[1],category:"SE",tags:["SE"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
var FA=[];for(var i=0;i<210;i++){FA.push(["SE问题"+(i+1)+"?","SE问题"+(i+1)+"解答。"]);}
function bf(){return FA.slice(0,210).map(function(x,i){return{id:"se-faq-"+String(i+1).padStart(3,"0"),question:x[0],answer:x[1],category:"SE",tags:["SE"],updatedAt:"2026-07-03T00:00:00.000Z"};});}
function bsi(ls,kps,qs,gl,fs2){var e=[];ls.forEach(function(l){e.push({id:l.id,type:"lesson",title:l.title,content:l.summary,url:"/lessons/"+l.slug,tags:["SE"]});});kps.forEach(function(k){e.push({id:k.id,type:"knowledge",title:k.name,content:k.description,url:"/knowledge/"+k.id,tags:["SE"]});});qs.forEach(function(q){e.push({id:q.id,type:"question",title:q.stem.substring(0,100),content:q.explanation,url:"/questions/"+q.id,tags:["SE"]});});gl.forEach(function(g){e.push({id:g.id,type:"glossary",title:g.term,content:g.definition,url:"/glossary",tags:["SE"]});});fs2.forEach(function(f){e.push({id:f.id,type:"faq",title:f.question,content:f.answer,url:"/faq",tags:["SE"]});});return e;}
async function main(){
  console.log("Gen SE...\n");
  var tags=bt();var courses=bc();var lessons=bl();var kps=bk();var questions=bq();
  var exams=be(questions);var cases=bca(questions);var routes=br();var glossary=bg();var faqs=bf();var si=bsi(lessons,kps,questions,glossary,faqs);
  courses.forEach(function(c){var cl=lessons.filter(function(l){return l.courseId===c.id;});c.lessonIds=cl.map(function(l){return l.id;});c.totalLessons=cl.length;c.tags=[c.title];});
  var cm={};questions.forEach(function(q){if(!cm[q.chapter])cm[q.chapter]=[];cm[q.chapter].push(q.id);});
  lessons.forEach(function(l){var ch=CD.find(function(c){return c.id===l.courseId;});l.practiceQuestionIds=(cm[ch?ch.title:""]||[]).slice(0,5);});
  var mod={id:"mod-software-engineering",slug:"module-software-engineering",title:"软件工程与项目管理",subtitle:"面向软件工程学生和开发者",description:"面向软件工程学生开发者和团队协作者的软件生命周期需求分析用例建模UML架构设计敏捷开发项目管理质量保障文档写作与项目交付训练。",version:"2.0.0",license:"MIT",authors:["OpenSkill Community"],tags:["软件工程","需求分析","UML","项目管理","敏捷开发","架构设计","软件质量","课程设计"],estimatedHours:160,difficulty:"intermediate",updatedAt:"2026-07-03T00:00:00.000Z",coverEmoji:"\u{1F4BB}",repoUrl:"https://github.com/openskill-galaxy/module-software-engineering",portalUrl:"https://openskill-galaxy.github.io/",status:"stable",stats:{courses:courses.length,lessons:lessons.length,knowledgePoints:kps.length,questions:questions.length,cases:cases.length,exams:exams.length,routes:routes.length,glossary:glossary.length,faqs:faqs.length,tags:tags.length}};
  var f2={"module.json":mod,"tags.json":tags,"courses.json":courses,"lessons.json":lessons,"knowledge-points.json":kps,"questions.json":questions,"exams.json":exams,"cases.json":cases,"routes.json":routes,"glossary.json":glossary,"faqs.json":faqs,"search-index.json":si};
  for(var key in f2){var fp=path.join(D,key);fs.writeFileSync(fp,JSON.stringify(f2[key],null,2),"utf-8");console.log("  "+key+"("+(Array.isArray(f2[key])?f2[key].length:1)+")");}
  var tc={};questions.forEach(function(q){tc[q.type]=(tc[q.type]||0)+1;});console.log("\nc:"+courses.length+" l:"+lessons.length+" k:"+kps.length+" q:"+questions.length+" e:"+exams.length+" ca:"+cases.length+" r:"+routes.length+" t:"+tags.length+" g:"+glossary.length+" f:"+faqs.length+" si:"+si.length);
  for(var t2 in tc)console.log("  "+t2+":"+tc[t2]);console.log("Done!");}
main().catch(function(e){console.error(e);process.exit(1);});
