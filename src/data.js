/* ---------- content: edit these ---------- */
export const PROFILE = { photo:'/Images/avatar.png', name:'Tanmoy Chakraborty', email:'tanmoyc834@gmail.com', github:'https://github.com/Tanmoycode99', linkedin:'https://www.linkedin.com/in/tanmoy-chakraborty-78708b1b3?utm_source=share_via&utm_content=profile&utm_medium=member_ios', phone: '+91-8910133006'};
import nirmanMitra from './Images/nirman-mitra.jpeg';
import sambandh from './Images/sambandh+.jpeg';
import Shreemati from './Images/Shreemti.jpeg';

export const STACK = [
  { t:'Mobile', d:'Native first, cross-platform when it pays off.', span:'s4 hl', tags:['Kotlin','Jetpack Compose','Coroutines & Flow','Room','Hilt','React Native','iOS (Swift)'] },
  { t:'Cybersecurity', d:'Protecting data on device and in transit.', span:'s2', tags:['OWASP MASVS','Keystore','Cert pinning','OAuth 2.0'] },
  { t:'API development', d:'Designing and consuming fast, reliable APIs.', span:'s3 hl', tags:['REST','GraphQL','gRPC','WebSockets','Retrofit','OkHttp'] },
  { t:'Networking', d:'Understanding what happens on the wire.', span:'s3', tags:['Networking protocols','HTTP','TCP/IP'] },
  { t:'GenAI & agents', d:'LLM features grounded in real data.', span:'s3 hl', tags:['LLMs','RAG','Agentic AI','Embeddings','Vector search'] },
  { t:'Cloud & DevOps', d:'Automated builds, releases and infrastructure.', span:'s3', tags:['AWS','Lambda','S3','CI/CD','GitHub Actions','Docker'] },
  { t:'Data', d:'Flexible NoSQL stores and offline-first message caching.', span:'s6', tags:['NoSQL','DynamoDB','Firestore','MongoDB','Message caching'] },
];

export const ARCH = {
  MVVM:{ nodes:[['View','Compose screen'],['ViewModel','StateFlow<UiState>'],['Repository','single source of truth'],['Data','Room · REST · DynamoDB']],
    pts:['My default for Compose apps, with one immutable UI state per screen.','The ViewModel survives rotation and is simple to unit test.','Works well with unidirectional data flow and dependency injection.'] },
  MVC:{ nodes:[['View','XML / UIKit view'],['Controller','Activity / ViewController'],['Model','Entities + services']],
    pts:['A good fit for small apps and UIKit-style iOS codebases.','I split controllers early to avoid the “massive controller” trap.','Handy for migrating legacy code to MVVM one screen at a time.'] },
};

export const REDUX = {
  nodes:[['View','React component'],['Action','dispatch({ type, payload })'],['Reducer','pure (state, action) → state'],['Store','single global state tree']],
  pts:['I reach for Redux (Redux Toolkit) when many screens share complex state.','Strict one-way data flow makes every state change traceable and predictable.','Redux DevTools give time-travel debugging, and reducers are easy to unit test.'],
};

export const CONTEXT = {
  nodes:[['Provider','wraps the component tree'],['Context','createContext + useReducer'],['Consumer','useContext hook'],['View','component re-renders on change']],
  pts:['My pick for light, app-wide state like theme, auth, or locale.','Built into React, so there are no extra dependencies or boilerplate.','I split contexts by concern to avoid unnecessary re-renders, and move to Redux when state grows.'],
};

// Only needed if you want a toggle that switches between them
export const STATE = { Redux: REDUX, 'Context API': CONTEXT };
export const PROJECTS = [
  {
    t: 'Bangur Cement Nirman Mitra',
    d: 'Cross-platform app published on both stores.',
    tags: ['React Native', 'TypeScript', 'Redux', 'FireBase', 'Context API'],
    logo: nirmanMitra, // same name as the import, no curly braces
    play: 'https://play.google.com/store/apps/details?id=com.bangurcement.nirmanmitra&pcampaignid=web_share',
  },

  {
    t: 'Hiedelberg Sambandh+',
    d: 'Native Android app built with Jetpack Compose.',
    tags: ['Kotlin', 'Compose', 'MVVM'],
    logo: sambandh,
    play: 'https://play.google.com/store/apps/details?id=com.sambandh.plus&pcampaignid=web_share',    // Android only, so no apple field
  },
  {
    t: 'Shreemati Nirman Mitra',
    d: 'Another React Native app live on both stores.',
    tags: ['React Native', 'Context API',  'AsyncStorage'],
    logo: Shreemati,
    play: 'https://play.google.com/store/apps/details?id=com.shree.mati&pcampaignid=web_share',
  },
];

export const JOBS = [
  ['2022 – 2023','Software Engineer · Alten India','Techstack- Linux, RedHat, Ci/CD, C/C++, Gui Development , Qt/Qml, Networking(TCP/IP, UDP), DevOps, API- Web Sockets, GRPc, REST, Cloud-AWS'],
  ['2025(january) – 2025(September)','Mobile Developer · Beas Consultancy and Services Pvt Ltd','Techstack- Android developement, React-Native, Redux Toolkit, FireBase, Kotlin , Jetpack, iOS Developement, Hybrid Apps'],
  ['2025(October) – Present','Freelance Mobile and Web/ Backend Developer - Fiver' ,'Skills- Node.js, SpringBoot, React.js, Android, Rag(LLMs) integration ,Agentic Ai , MLops, Python Developer, Product Developement,  Online Bidding'],
];

export const QA = [
  { k:['mvvm','architecture','pattern'], a:'Most of my apps use MVVM: a Compose screen observes a ViewModel’s StateFlow, and a repository decides between cache and network.', s:['arch.md'] },
  { k:['secure','security','safe'], a:'Secrets live in the Android Keystore, traffic uses certificate pinning, and builds are checked against OWASP MASVS.', s:['security.md','masvs.pdf'] },
  { k:['ai','rag','llm','agent'], a:'I embed documents, retrieve the top matches, and ask the LLM to answer only from them, returning the sources with the reply.', s:['rag.py','notes.md'] },
  { k:['cloud','aws','devops','deploy'], a:'Backends run on AWS Lambda and DynamoDB, and GitHub Actions builds, tests and ships each release.', s:['infra.tf'] },
];
export const SUGGEST = ['How is it built?','How is it secured?','Do you use RAG?'];
export const MAP = {'How is it built?':'architecture','How is it secured?':'security','Do you use RAG?':'rag'};

