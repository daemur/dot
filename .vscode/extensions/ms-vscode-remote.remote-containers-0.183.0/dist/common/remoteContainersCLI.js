var m=Object.create,i=Object.defineProperty,h=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,x=Object.getOwnPropertyNames,E=Object.getOwnPropertyDescriptor;var d=e=>i(e,"__esModule",{value:!0});var P=(e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})},O=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of x(t))!C.call(e,o)&&o!=="default"&&i(e,o,{get:()=>t[o],enumerable:!(n=E(t,o))||n.enumerable});return e},R=e=>O(d(i(e!=null?m(h(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);d(exports);P(exports,{getCredential:()=>u});var p=R(require("http")),a=process.env.REMOTE_CONTAINERS_IPC;function u(e){let t={get:"fill",store:"approve",erase:"reject"}[e];if(t===void 0){console.log("Expected get, store or erase.");return}let n="";process.stdin.setEncoding("utf8"),process.stdin.on("data",o=>{n+=o,(n===`
`||n.indexOf(`

`,n.length-2)!==-1)&&(process.stdin.pause(),f(t,n).catch(console.error))}),process.stdin.on("end",()=>{f(t,n).catch(console.error)})}async function f(e,t){let n=await j({command:e,stdin:t});n||process.exit(-1);let{stdout:o,stderr:s,code:r}=JSON.parse(n);o&&process.stdout.write(o),s&&process.stderr.write(s),r&&process.exit(r)}function j(e){return new Promise(t=>{let n=JSON.stringify(e);if(!a){console.error("Remote-Containers CLI: RPC pipe not configured. Message: "+n),t(void 0);return}let s=p.request({socketPath:a,path:"/",method:"POST"},r=>{let c=[];r.setEncoding("utf8"),r.on("data",l=>{c.push(l)}),r.on("error",()=>g("Error in response")),r.on("end",()=>{t(c.join(""))})});s.on("error",()=>g("Error in request")),s.write(n),s.end()})}function g(e){console.error("Unable to connect to VS Code Remote-Containers extension."),console.error(e),process.exit(1)}u(process.argv[2]);0&&(module.exports={getCredential});
//# sourceMappingURL=remoteContainersCLI.js.map