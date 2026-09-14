(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Jo="186",xr={ROTATE:0,DOLLY:1,PAN:2},gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bh=0,Jl=1,Eh=2,Bs=1,su=2,Xr=3,Hi=0,cn=1,Pn=2,oi=0,Kr=1,Ql=2,jl=3,tc=4,Th=5,pr=100,Ah=101,wh=102,Rh=103,Ch=104,Ph=200,Dh=201,Lh=202,Ih=203,au=204,ou=205,Uh=206,Nh=207,Fh=208,Oh=209,Bh=210,zh=211,kh=212,Gh=213,Hh=214,io=0,ro=1,so=2,Qr=3,ao=4,oo=5,lo=6,co=7,lu=0,Vh=1,Wh=2,Xn=0,cu=1,uu=2,hu=3,Qo=4,du=5,fu=6,pu=7,mu=300,Vi=301,Er=302,ma=303,ga=304,aa=306,uo=1e3,ai=1001,ho=1002,We=1003,Xh=1004,ds=1005,Je=1006,_a=1007,Bi=1008,dn=1009,gu=1010,_u=1011,jr=1012,jo=1013,Yn=1014,Hn=1015,qn=1016,tl=1017,el=1018,ts=1020,xu=35902,vu=35899,Mu=1021,Su=1022,Ln=1023,di=1026,zi=1027,yu=1028,nl=1029,Wi=1030,il=1031,rl=1033,zs=33776,ks=33777,Gs=33778,Hs=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,xo=37492,vo=37496,Mo=37488,So=37489,Ks=37490,yo=37491,bo=37808,Eo=37809,To=37810,Ao=37811,wo=37812,Ro=37813,Co=37814,Po=37815,Do=37816,Lo=37817,Io=37818,Uo=37819,No=37820,Fo=37821,Oo=36492,Bo=36494,zo=36495,ko=36283,Go=36284,Zs=36285,Ho=36286,Yh=3200,Vo=0,qh=1,wi="",nn="srgb",Js="srgb-linear",Qs="linear",se="srgb",xa=7680,$h=519,Kh=512,Zh=513,Jh=514,sl=515,Qh=516,jh=517,al=518,td=519,bu=35044,ec="300 es",Vn=2e3,es=2001;function ed(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nd(){const n=js("canvas");return n.style.display="block",n}const nc={};function ta(...n){const t="THREE."+n.shift();console.log(t,...n)}function Eu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function It(...n){n=Eu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Jt(...n){n=Eu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function vr(...n){const t=n.join(" ");t in nc||(nc[t]=!0,It(...n))}function id(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const rd={[io]:ro,[so]:lo,[ao]:co,[Qr]:oo,[ro]:io,[lo]:so,[co]:ao,[oo]:Qr};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ic=1234567;const Zr=Math.PI/180,ns=180/Math.PI;function li(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]).toLowerCase()}function Gt(n,t,e){return Math.max(t,Math.min(e,n))}function ol(n,t){return(n%t+t)%t}function sd(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ad(n,t,e){return n!==t?(e-n)/(t-n):0}function Jr(n,t,e){return(1-e)*n+e*t}function od(n,t,e,i){return Jr(n,t,1-Math.exp(-e*i))}function ld(n,t=1){return t-Math.abs(ol(n,t*2)-t)}function cd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ud(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dd(n,t){return n+Math.random()*(t-n)}function fd(n){return n*(.5-Math.random())}function pd(n){n!==void 0&&(ic=n);let t=ic+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(n){return n*Zr}function gd(n){return n*ns}function _d(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function vd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Md(n,t,e,i,r){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),f=s((t-i)/2),u=a((t-i)/2),d=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*d,o*h,o*l);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Me={DEG2RAD:Zr,RAD2DEG:ns,generateUUID:li,clamp:Gt,euclideanModulo:ol,mapLinear:sd,inverseLerp:ad,lerp:Jr,damp:od,pingpong:ld,smoothstep:cd,smootherstep:ud,randInt:hd,randFloat:dd,randFloatSpread:fd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:_d,ceilPowerOfTwo:xd,floorPowerOfTwo:vd,setQuaternionFromProperEuler:Md,normalize:ae,denormalize:Dn},Fl=class Fl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fl.prototype.isVector2=!0;let Rt=Fl;class fi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],d=s[a+1],_=s[a+2],M=s[a+3];if(f!==M||c!==u||l!==d||h!==_){let m=c*u+l*d+h*_+f*M;m<0&&(u=-u,d=-d,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),C=Math.sin(y);p=Math.sin(p*y)/C,o=Math.sin(o*y)/C,c=c*p+u*o,l=l*p+d*o,h=h*p+_*o,f=f*p+M*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+_*o,f=f*p+M*o;const y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*f+c*d-l*u,t[e+1]=c*_+h*u+l*f-o*d,t[e+2]=l*_+h*d+o*u-c*f,t[e+3]=h*_-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),u=c(i/2),d=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"YZX":this._x=u*h*f+l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f-u*d*_;break;case"XZY":this._x=u*h*f-l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f+u*d*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ol=class Ol{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Gt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ol.prototype.isVector3=!0;let w=Ol;const va=new w,rc=new fi,Bl=class Bl{constructor(t,e,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],_=i[8],M=r[0],m=r[3],p=r[6],y=r[1],C=r[4],S=r[7],E=r[2],b=r[5],R=r[8];return s[0]=a*M+o*y+c*E,s[3]=a*m+o*C+c*b,s[6]=a*p+o*S+c*R,s[1]=l*M+h*y+f*E,s[4]=l*m+h*C+f*b,s[7]=l*p+h*S+f*R,s[2]=u*M+d*y+_*E,s[5]=u*m+d*C+_*b,s[8]=u*p+d*S+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*s,d=l*s-a*c,_=e*f+i*u+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=f*M,t[1]=(r*l-h*i)*M,t[2]=(o*i-r*a)*M,t[3]=u*M,t[4]=(h*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=d*M,t[7]=(i*c-l*e)*M,t[8]=(a*e-i*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ma.makeScale(t,e)),this}rotate(t){return vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ma.makeRotation(-t)),this}translate(t,e){return vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bl.prototype.isMatrix3=!0;let Nt=Bl;const Ma=new Nt,sc=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Qs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:t,whitePoint:i,transfer:Qs,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:i,transfer:se,toXYZ:sc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const qt=Sd();function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class yd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ki===void 0&&(Ki=js("canvas")),Ki.width=t.width,Ki.height=t.height;const r=Ki.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ki}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ci(e[i]/255)*255):e[i]=ci(e[i]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bd=0;class ll{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Sa(r[a].image)):s.push(Sa(r[a]))}else s=Sa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let Ed=0;const ya=new w;class Qe extends Di{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,i=ai,r=ai,s=Je,a=Bi,o=Ln,c=dn,l=Qe.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=li(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=mu;Qe.DEFAULT_ANISOTROPY=1;const zl=class zl{constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],_=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(l+1)/2,S=(d+1)/2,E=(p+1)/2,b=(h+u)/4,R=(f+M)/4,x=(_+m)/4;return C>S&&C>E?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=b/i,s=R/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=x/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=x/s),this.set(i,r,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-M)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Gt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zl.prototype.isVector4=!0;let Ee=zl;class Td extends Di{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:i.depth},s=new Qe(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ll(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Td{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Tu extends Qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const sa=class sa{constructor(t,e,i,r,s,a,o,c,l,h,f,u,d,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,f,u,d,_,M,m)}set(t,e,i,r,s,a,o,c,l,h,f,u,d,_,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Zi.setFromMatrixColumn(t,0).length(),s=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*h,d=a*f,_=o*h,M=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+_*l,e[5]=u-M*l,e[9]=-o*c,e[2]=M-u*l,e[6]=_+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,_=l*h,M=l*f;e[0]=u+M*o,e[4]=_*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=M+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,_=l*h,M=l*f;e[0]=u-M*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,d=a*f,_=o*h,M=o*f;e[0]=c*h,e[4]=_*l-d,e[8]=u*l+M,e[1]=c*f,e[5]=M*l+u,e[9]=d*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,_=o*c,M=o*l;e[0]=c*h,e[4]=M-u*f,e[8]=_*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+_,e[10]=u-M*f}else if(t.order==="XZY"){const u=a*c,d=a*l,_=o*c,M=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wd,t,Rd)}lookAt(t,e,i){const r=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Si.crossVectors(i,un),Si.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Si.crossVectors(i,un)),Si.normalize(),fs.crossVectors(un,Si),r[0]=Si.x,r[4]=fs.x,r[8]=un.x,r[1]=Si.y,r[5]=fs.y,r[9]=un.y,r[2]=Si.z,r[6]=fs.z,r[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],_=i[2],M=i[6],m=i[10],p=i[14],y=i[3],C=i[7],S=i[11],E=i[15],b=r[0],R=r[4],x=r[8],T=r[12],P=r[1],N=r[5],O=r[9],V=r[13],F=r[2],G=r[6],Z=r[10],X=r[14],rt=r[3],q=r[7],et=r[11],it=r[15];return s[0]=a*b+o*P+c*F+l*rt,s[4]=a*R+o*N+c*G+l*q,s[8]=a*x+o*O+c*Z+l*et,s[12]=a*T+o*V+c*X+l*it,s[1]=h*b+f*P+u*F+d*rt,s[5]=h*R+f*N+u*G+d*q,s[9]=h*x+f*O+u*Z+d*et,s[13]=h*T+f*V+u*X+d*it,s[2]=_*b+M*P+m*F+p*rt,s[6]=_*R+M*N+m*G+p*q,s[10]=_*x+M*O+m*Z+p*et,s[14]=_*T+M*V+m*X+p*it,s[3]=y*b+C*P+S*F+E*rt,s[7]=y*R+C*N+S*G+E*q,s[11]=y*x+C*O+S*Z+E*et,s[15]=y*T+C*V+S*X+E*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],M=t[7],m=t[11],p=t[15],y=c*d-l*u,C=o*d-l*f,S=o*u-c*f,E=a*d-l*h,b=a*u-c*h,R=a*f-o*h;return e*(M*y-m*C+p*S)-i*(_*y-m*E+p*b)+r*(_*C-M*E+p*R)-s*(_*S-M*b+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],M=t[13],m=t[14],p=t[15],y=e*o-i*a,C=e*c-r*a,S=e*l-s*a,E=i*c-r*o,b=i*l-s*o,R=r*l-s*c,x=h*M-f*_,T=h*m-u*_,P=h*p-d*_,N=f*m-u*M,O=f*p-d*M,V=u*p-d*m,F=y*V-C*O+S*N+E*P-b*T+R*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/F;return t[0]=(o*V-c*O+l*N)*G,t[1]=(r*O-i*V-s*N)*G,t[2]=(M*R-m*b+p*E)*G,t[3]=(u*b-f*R-d*E)*G,t[4]=(c*P-a*V-l*T)*G,t[5]=(e*V-r*P+s*T)*G,t[6]=(m*S-_*R-p*C)*G,t[7]=(h*R-u*S+d*C)*G,t[8]=(a*O-o*P+l*x)*G,t[9]=(i*P-e*O-s*x)*G,t[10]=(_*b-M*S+p*y)*G,t[11]=(f*S-h*b-d*y)*G,t[12]=(o*T-a*N-c*x)*G,t[13]=(e*N-i*T+r*x)*G,t[14]=(M*C-_*E-m*y)*G,t[15]=(h*E-f*C+u*y)*G,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,u=s*l,d=s*h,_=s*f,M=a*h,m=a*f,p=o*f,y=c*l,C=c*h,S=c*f,E=i.x,b=i.y,R=i.z;return r[0]=(1-(M+p))*E,r[1]=(d+S)*E,r[2]=(_-C)*E,r[3]=0,r[4]=(d-S)*b,r[5]=(1-(u+p))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(_+C)*R,r[9]=(m-y)*R,r[10]=(1-(u+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=Zi.set(r[0],r[1],r[2]).length();const o=Zi.set(r[4],r[5],r[6]).length(),c=Zi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Tn.copy(this);const l=1/a,h=1/o,f=1/c;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,e.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=Vn,c=!1){const l=this.elements,h=2*s/(e-t),f=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r);let _,M;if(c)_=s/(a-s),M=a*s/(a-s);else if(o===Vn)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===es)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Vn,c=!1){const l=this.elements,h=2/(e-t),f=2/(i-r),u=-(e+t)/(e-t),d=-(i+r)/(i-r);let _,M;if(c)_=1/(a-s),M=a/(a-s);else if(o===Vn)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===es)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};sa.prototype.isMatrix4=!0;let Ae=sa;const Zi=new w,Tn=new Ae,wd=new w(0,0,0),Rd=new w(1,1,1),Si=new w,fs=new w,un=new w,oc=new Ae,lc=new fi;class pi{constructor(t=0,e=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cd=0;const cc=new w,Ji=new fi,Jn=new Ae,ps=new w,Ur=new w,Pd=new w,Dd=new fi,uc=new w(1,0,0),hc=new w(0,1,0),dc=new w(0,0,1),fc={type:"added"},Ld={type:"removed"},Qi={type:"childadded",child:null},ba={type:"childremoved",child:null};class Ve extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new w,e=new pi,i=new fi,r=new w(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Nt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ps.copy(t):ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ur,ps,this.up):Jn.lookAt(ps,Ur,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ld),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Pd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Dd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ve.DEFAULT_UP=new w(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _e extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Id={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),p=this._getHandJoint(l,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&u>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Id)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _e;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=qt.workingColorSpace){if(t=ol(t,1),e=Gt(e,0,1),i=Gt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ta(a,s,t+1/3),this.g=Ta(a,s,t),this.b=Ta(a,s,t-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(t,e=nn){function i(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const i=wu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return qt.workingToColorSpace(Ke.copy(this),t),Math.round(Gt(Ke.r*255,0,255))*65536+Math.round(Gt(Ke.g*255,0,255))*256+Math.round(Gt(Ke.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ke.copy(this),e);const i=Ke.r,r=Ke.g,s=Ke.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=nn){qt.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,r=Ke.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(ms);const i=Jr(yi.h,ms.h,e),r=Jr(yi.s,ms.s,e),s=Jr(yi.l,ms.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Wt;Wt.NAMES=wu;class cl{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ud extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new w,Qn=new w,Aa=new w,jn=new w,ji=new w,tr=new w,pc=new w,wa=new w,Ra=new w,Ca=new w,Pa=new Ee,Da=new Ee,La=new Ee;class Mn{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),An.subVectors(t,e),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){An.subVectors(r,e),Qn.subVectors(i,e),Aa.subVectors(t,e);const a=An.dot(An),o=An.dot(Qn),c=An.dot(Aa),l=Qn.dot(Qn),h=Qn.dot(Aa),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,_=(a*h-o*c)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return Pa.setScalar(0),Da.setScalar(0),La.setScalar(0),Pa.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,i),La.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Pa,s.x),a.addScaledVector(Da,s.y),a.addScaledVector(La,s.z),a}static isFrontFacing(t,e,i,r){return An.subVectors(i,e),Qn.subVectors(t,e),An.cross(Qn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Mn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;ji.subVectors(r,i),tr.subVectors(s,i),wa.subVectors(t,i);const c=ji.dot(wa),l=tr.dot(wa);if(c<=0&&l<=0)return e.copy(i);Ra.subVectors(t,r);const h=ji.dot(Ra),f=tr.dot(Ra);if(h>=0&&f<=h)return e.copy(r);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(ji,a);Ca.subVectors(t,s);const d=ji.dot(Ca),_=tr.dot(Ca);if(_>=0&&d<=_)return e.copy(s);const M=d*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(tr,o);const m=h*_-d*f;if(m<=0&&f-h>=0&&d-_>=0)return pc.subVectors(s,r),o=(f-h)/(f-h+(d-_)),e.copy(r).addScaledVector(pc,o);const p=1/(m+M+u);return a=M*p,o=u*p,e.copy(i).addScaledVector(ji,a).addScaledVector(tr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Cr{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(s,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),_s.subVectors(this.max,Nr),er.subVectors(t.a,Nr),nr.subVectors(t.b,Nr),ir.subVectors(t.c,Nr),bi.subVectors(nr,er),Ei.subVectors(ir,nr),Ii.subVectors(er,ir);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Ii.z,Ii.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Ii.z,0,-Ii.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Ii.y,Ii.x,0];return!Ia(e,er,nr,ir,_s)||(e=[1,0,0,0,1,0,0,0,1],!Ia(e,er,nr,ir,_s))?!1:(xs.crossVectors(bi,Ei),e=[xs.x,xs.y,xs.z],Ia(e,er,nr,ir,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ti=[new w,new w,new w,new w,new w,new w,new w,new w],wn=new w,gs=new Cr,er=new w,nr=new w,ir=new w,bi=new w,Ei=new w,Ii=new w,Nr=new w,_s=new w,xs=new w,Ui=new w;function Ia(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ui.fromArray(n,s);const o=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),c=t.dot(Ui),l=e.dot(Ui),h=i.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Le=new w,vs=new Rt;let Nd=0;class Un extends Di{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bu,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vs.fromBufferAttribute(this,e),vs.applyMatrix3(t),this.setXY(e,vs.x,vs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ru extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Cu extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xe extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Fd=new Cr,Fr=new w,Ua=new w;class ul{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Fd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Fr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Ua)),this.expandByPoint(Fr.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Od=0;const xn=new Ae,Na=new Ve,rr=new w,hn=new Cr,Or=new Cr,Ge=new w;class Xe extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ed(t)?Cu:Ru)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Nt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(hn.min,Or.min),hn.expandByPoint(Ge),Ge.addVectors(hn.max,Or.max),hn.expandByPoint(Ge)):(hn.expandByPoint(Or.min),hn.expandByPoint(Or.max))}hn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ge));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ge.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(t,l),Ge.add(rr)),r=Math.max(r,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Un(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new w,c[x]=new w;const l=new w,h=new w,f=new w,u=new Rt,d=new Rt,_=new Rt,M=new w,m=new w;function p(x,T,P){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),h.sub(l),f.sub(l),d.sub(u),_.sub(u);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(N),o[x].add(M),o[T].add(M),o[P].add(M),c[x].add(m),c[T].add(m),c[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,T=y.length;x<T;++x){const P=y[x],N=P.start,O=P.count;for(let V=N,F=N+O;V<F;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const C=new w,S=new w,E=new w,b=new w;function R(x){E.fromBufferAttribute(r,x),b.copy(E);const T=o[x];C.copy(T),C.sub(E.multiplyScalar(E.dot(T))).normalize(),S.crossVectors(b,T);const N=S.dot(c[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,N)}for(let x=0,T=y.length;x<T;++x){const P=y[x],N=P.start,O=P.count;for(let V=N,F=N+O;V<F;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const r=new w,s=new w,a=new w,o=new w,c=new w,l=new w,h=new w,f=new w;if(t)for(let u=0,d=t.count;u<d;u+=3){const _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,M),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*h;for(let p=0;p<h;p++)u[_++]=l[d++]}return new Un(u,h,f)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],f=s[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bu,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const tn=new w;class ea{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Dn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),i=ae(i,this.array),r=ae(r,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ea(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fa=new w,zd=new w,kd=new Nt;class ni{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Fa.subVectors(i,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const r=t.delta(Fa),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||kd.getNormalMatrix(t),r=this.coplanarPoint(Fa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Gd=0;class Pr extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Kr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=ou,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ni().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Rt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pu extends Pr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let sr;const Br=new w,ar=new w,or=new w,lr=new Rt,zr=new Rt,Du=new Ae,Ms=new w,kr=new w,Ss=new w,mc=new Rt,Oa=new Rt,gc=new Rt;class Lu extends Ve{constructor(t=new Pu){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Bd(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new ea(i,3,0,!1)),sr.setAttribute("uv",new ea(i,2,3,!1))}this.geometry=sr,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ys(Ms.set(-.5,-.5,0),or,a,ar,r,s),ys(kr.set(.5,-.5,0),or,a,ar,r,s),ys(Ss.set(.5,.5,0),or,a,ar,r,s),mc.set(0,0),Oa.set(1,0),gc.set(1,1);let o=t.ray.intersectTriangle(Ms,kr,Ss,!1,Br);if(o===null&&(ys(kr.set(-.5,.5,0),or,a,ar,r,s),Oa.set(0,1),o=t.ray.intersectTriangle(Ms,Ss,kr,!1,Br),o===null))return;const c=t.ray.origin.distanceTo(Br);c<t.near||c>t.far||e.push({distance:c,point:Br.clone(),uv:Mn.getInterpolation(Br,Ms,kr,Ss,mc,Oa,gc,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ys(n,t,e,i,r,s){lr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(zr.x=s*lr.x-r*lr.y,zr.y=r*lr.x+s*lr.y):zr.copy(lr),n.copy(t),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(Du)}const ei=new w,Ba=new w,bs=new w,Es=new w;class Iu{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ba.copy(t).add(e).multiplyScalar(.5),bs.copy(e).sub(t).normalize(),Es.copy(this.origin).sub(Ba);const s=t.distanceTo(e)*.5,a=-this.direction.dot(bs),o=Es.dot(this.direction),c=-Es.dot(bs),l=Es.lengthSq(),h=Math.abs(1-a*a);let f,u,d,_;if(h>0)if(f=a*c-o,u=a*o-c,_=s*h,f>=0)if(u>=-_)if(u<=_){const M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ba).addScaledVector(bs,u),d}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,_=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=i.x-a.x,y=i.y-a.y,C=i.z-a.z,S=Math.abs(c),E=Math.abs(l),b=Math.abs(h);let R,x,T,P,N,O,V,F,G,Z,X,rt;if(S>=E&&S>=b?(T=c,O=f,G=_,rt=p,c>=0?(R=l,x=h,P=u,N=d,V=M,F=m,Z=y,X=C):(R=h,x=l,P=d,N=u,V=m,F=M,Z=C,X=y)):E>=b?(T=l,O=u,G=M,rt=y,l>=0?(R=h,x=c,P=d,N=f,V=m,F=_,Z=C,X=p):(R=c,x=h,P=f,N=d,V=_,F=m,Z=p,X=C)):(T=h,O=d,G=m,rt=C,h>=0?(R=c,x=l,P=f,N=u,V=_,F=M,Z=p,X=y):(R=l,x=c,P=u,N=f,V=M,F=_,Z=y,X=p)),T===0)return null;const q=R/T,et=x/T,it=1/T,Dt=P-q*O,Ct=N-et*O,he=V-q*G,$t=F-et*G,te=Z-q*rt,$=X-et*rt,tt=te*$t-$*he,Mt=Dt*$-Ct*te,Ut=he*Ct-$t*Dt;if(r){if(tt<0||Mt<0||Ut<0)return null}else if((tt<0||Mt<0||Ut<0)&&(tt>0||Mt>0||Ut>0))return null;const xt=tt+Mt+Ut;if(xt===0)return null;const zt=it*(tt*O+Mt*G+Ut*rt);return(xt>0?zt<0:zt>0)?null:this.at(zt/xt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dr extends Pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=lu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _c=new Ae,Ni=new Iu,Ts=new ul,xc=new w,As=new w,ws=new w,Rs=new w,za=new w,Cs=new w,vc=new w,Ps=new w;class ee extends Ve{constructor(t=new Xe,e=new Dr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Cs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(za.fromBufferAttribute(f,t),a?Cs.addScaledVector(za,h):Cs.addScaledVector(za.sub(e),h))}e.add(Cs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!(Ts.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Ts,xc)===null||Ni.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(_c.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(_c),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),C=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,E=C;S<E;S+=3){const b=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);r=Ds(this,p,t,i,l,h,f,b,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const y=o.getX(m),C=o.getX(m+1),S=o.getX(m+2);r=Ds(this,a,t,i,l,h,f,y,C,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],y=Math.max(m.start,d.start),C=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,E=C;S<E;S+=3){const b=S,R=S+1,x=S+2;r=Ds(this,p,t,i,l,h,f,b,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const y=m,C=m+1,S=m+2;r=Ds(this,a,t,i,l,h,f,y,C,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Hd(n,t,e,i,r,s,a,o){let c;if(t.side===cn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Hi,o),c===null)return null;Ps.copy(o),Ps.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ps);return l<e.near||l>e.far?null:{distance:l,point:Ps.clone(),object:n}}function Ds(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,As),n.getVertexPosition(c,ws),n.getVertexPosition(l,Rs);const h=Hd(n,t,e,i,As,ws,Rs,vc);if(h){const f=new w;Mn.getBarycoord(vc,As,ws,Rs,f),r&&(h.uv=Mn.getInterpolatedAttribute(r,o,c,l,f,new Rt)),s&&(h.uv1=Mn.getInterpolatedAttribute(s,o,c,l,f,new Rt)),a&&(h.normal=Mn.getInterpolatedAttribute(a,o,c,l,f,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new w,materialIndex:0};Mn.getNormal(As,ws,Rs,u.normal),h.face=u,h.barycoord=f}return h}class Vd extends Qe{constructor(t=null,e=1,i=1,r,s,a,o,c,l=We,h=We,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fi=new ul,Wd=new Rt(.5,.5),Ls=new w;class hl{constructor(t=new ni,e=new ni,i=new ni,r=new ni,s=new ni,a=new ni){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],d=s[7],_=s[8],M=s[9],m=s[10],p=s[11],y=s[12],C=s[13],S=s[14],E=s[15];if(r[0].setComponents(l-a,d-h,p-_,E-y).normalize(),r[1].setComponents(l+a,d+h,p+_,E+y).normalize(),r[2].setComponents(l+o,d+f,p+M,E+C).normalize(),r[3].setComponents(l-o,d-f,p-M,E-C).normalize(),i)r[4].setComponents(c,u,m,S).normalize(),r[5].setComponents(l-c,d-u,p-m,E-S).normalize();else if(r[4].setComponents(l-c,d-u,p-m,E-S).normalize(),e===Vn)r[5].setComponents(l+c,d+u,p+m,E+S).normalize();else if(e===es)r[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=Wd.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ls.x=r.normal.x>0?t.max.x:t.min.x,Ls.y=r.normal.y>0?t.max.y:t.min.y,Ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uu extends Qe{constructor(t=[],e=Vi,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dl extends Qe{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class is extends Qe{constructor(t,e,i=Yn,r,s,a,o=We,c=We,l,h=di,f=1){if(h!==di&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Xd extends is{constructor(t,e=Yn,i=Vi,r,s,a=We,o=We,c,l=di){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nu extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _i extends Xe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2));function _(M,m,p,y,C,S,E,b,R,x,T){const P=S/R,N=E/x,O=S/2,V=E/2,F=b/2,G=R+1,Z=x+1;let X=0,rt=0;const q=new w;for(let et=0;et<Z;et++){const it=et*N-V;for(let Dt=0;Dt<G;Dt++){const Ct=Dt*P-O;q[M]=Ct*y,q[m]=it*C,q[p]=F,l.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(Dt/R),f.push(1-et/x),X+=1}}for(let et=0;et<x;et++)for(let it=0;it<R;it++){const Dt=u+it+G*et,Ct=u+it+G*(et+1),he=u+(it+1)+G*(et+1),$t=u+(it+1)+G*et;c.push(Dt,Ct,$t),c.push(Ct,he,$t),rt+=6}o.addGroup(d,rt,T),d+=rt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class $n extends Xe{constructor(t=1,e=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],d=[];let _=0;const M=[],m=i/2;let p=0;y(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new xe(f,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function y(){const S=new w,E=new w;let b=0;const R=(e-t)/i;for(let x=0;x<=s;x++){const T=[],P=x/s,N=P*(e-t)+t;for(let O=0;O<=r;O++){const V=O/r,F=V*c+o,G=Math.sin(F),Z=Math.cos(F);E.x=N*G,E.y=-P*i+m,E.z=N*Z,f.push(E.x,E.y,E.z),S.set(G,R,Z).normalize(),u.push(S.x,S.y,S.z),d.push(V,1-P),T.push(_++)}M.push(T)}for(let x=0;x<r;x++)for(let T=0;T<s;T++){const P=M[T][x],N=M[T+1][x],O=M[T+1][x+1],V=M[T][x+1];(t>0||T!==0)&&(h.push(P,N,V),b+=3),(e>0||T!==s-1)&&(h.push(N,O,V),b+=3)}l.addGroup(p,b,0),p+=b}function C(S){const E=_,b=new Rt,R=new w;let x=0;const T=S===!0?t:e,P=S===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),_++;const N=_;for(let O=0;O<=r;O++){const F=O/r*c+o,G=Math.cos(F),Z=Math.sin(F);R.x=T*Z,R.y=m*P,R.z=T*G,f.push(R.x,R.y,R.z),u.push(0,P,0),b.x=G*.5+.5,b.y=Z*.5*P+.5,d.push(b.x,b.y),_++}for(let O=0;O<r;O++){const V=E+O,F=N+O;S===!0?h.push(F,F+1,V):h.push(F+1,F,V),x+=3}l.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oa extends $n{constructor(t=1,e=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new oa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fl extends Xe{constructor(t=[],e=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new xe(s,3)),this.setAttribute("normal",new xe(s.slice(),3)),this.setAttribute("uv",new xe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const C=new w,S=new w,E=new w;for(let b=0;b<e.length;b+=3)d(e[b+0],C),d(e[b+1],S),d(e[b+2],E),c(C,S,E,y)}function c(y,C,S,E){const b=E+1,R=[];for(let x=0;x<=b;x++){R[x]=[];const T=y.clone().lerp(S,x/b),P=C.clone().lerp(S,x/b),N=b-x;for(let O=0;O<=N;O++)O===0&&x===b?R[x][O]=T:R[x][O]=T.clone().lerp(P,O/N)}for(let x=0;x<b;x++)for(let T=0;T<2*(b-x)-1;T++){const P=Math.floor(T/2);T%2===0?(u(R[x][P+1]),u(R[x+1][P]),u(R[x][P])):(u(R[x][P+1]),u(R[x+1][P+1]),u(R[x+1][P]))}}function l(y){const C=new w;for(let S=0;S<s.length;S+=3)C.x=s[S+0],C.y=s[S+1],C.z=s[S+2],C.normalize().multiplyScalar(y),s[S+0]=C.x,s[S+1]=C.y,s[S+2]=C.z}function h(){const y=new w;for(let C=0;C<s.length;C+=3){y.x=s[C+0],y.y=s[C+1],y.z=s[C+2];const S=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;a.push(S,1-E)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){const C=a[y+0],S=a[y+2],E=a[y+4],b=Math.max(C,S,E),R=Math.min(C,S,E);b>.9&&R<.1&&(C<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function u(y){s.push(y.x,y.y,y.z)}function d(y,C){const S=y*3;C.x=t[S+0],C.y=t[S+1],C.z=t[S+2]}function _(){const y=new w,C=new w,S=new w,E=new w,b=new Rt,R=new Rt,x=new Rt;for(let T=0,P=0;T<s.length;T+=9,P+=6){y.set(s[T+0],s[T+1],s[T+2]),C.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),b.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),E.copy(y).add(C).add(S).divideScalar(3);const N=m(E);M(b,P+0,y,N),M(R,P+2,C,N),M(x,P+4,S,N)}}function M(y,C,S,E){E<0&&y.x===1&&(a[C]=y.x-1),S.x===0&&S.z===0&&(a[C]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.vertices,t.indices,t.radius,t.detail)}}class pl extends fl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new pl(t.radius,t.detail)}}class Yi extends Xe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=t/o,u=e/c,d=[],_=[],M=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let C=0;C<l;C++){const S=C*f-s;_.push(S,-y,0),M.push(0,0,1),m.push(C/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const C=y+l*p,S=y+l*(p+1),E=y+1+l*(p+1),b=y+1+l*p;d.push(C,S,b),d.push(S,E,b)}this.setIndex(d),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ml extends Xe{constructor(t=.5,e=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let f=t;const u=(e-t)/r,d=new w,_=new Rt;for(let M=0;M<=r;M++){for(let m=0;m<=i;m++){const p=s+m/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}f+=u}for(let M=0;M<r;M++){const m=M*(i+1);for(let p=0;p<i;p++){const y=p+m,C=y,S=y+i+1,E=y+i+2,b=y+1;o.push(C,S,b),o.push(S,E,b)}}this.setIndex(o),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gl extends Xe{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new w,u=new w,d=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const y=[],C=p/i,S=a+C*o,E=t*Math.cos(S),b=Math.sqrt(t*t-E*E);let R=0;p===0&&a===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=r+T*s;f.x=-b*Math.cos(P),f.y=E,f.z=b*Math.sin(P),_.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(T+R,1-C),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const C=h[p][y+1],S=h[p][y],E=h[p+1][y],b=h[p+1][y+1];(p!==0||a>0)&&d.push(C,S,b),(p!==i-1||c<Math.PI)&&d.push(S,E,b)}this.setIndex(d),this.setAttribute("position",new xe(_,3)),this.setAttribute("normal",new xe(M,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _l extends Xe{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],h=[],f=[],u=new w,d=new w,_=new w;for(let M=0;M<=i;M++){const m=a+M/i*o;for(let p=0;p<=r;p++){const y=p/r*s;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),_.subVectors(d,u).normalize(),h.push(_.x,_.y,_.z),f.push(p/r),f.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=r;m++){const p=(r+1)*M+m-1,y=(r+1)*(M-1)+m-1,C=(r+1)*(M-1)+m,S=(r+1)*M+m;c.push(p,y,S),c.push(y,C,S)}this.setIndex(c),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function Tr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];if(Mc(r))r.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Mc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function en(n){const t={};for(let e=0;e<n.length;e++){const i=Tr(n[e]);for(const r in i)t[r]=i[r]}return t}function Mc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const qd={clone:Tr,merge:en};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Wt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Rt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new w().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ee().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Nt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Ae().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Zd extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class as extends Pr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jd extends Pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qd extends Pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ou extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class jd extends Ou{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ka=new Ae,Sc=new w,yc=new w;class tf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ka,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===es||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Is=new w,Us=new fi,Bn=new w;class Bu extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Is,Us,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Us,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Is,Us,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Is,Us,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new w,bc=new Rt,Ec=new Rt;class Cn extends Bu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ec),e.subVectors(Ec,bc)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class la extends Bu{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ef extends tf{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nf extends Ou{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new ef}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const cr=-90,ur=1;class rf extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(cr,ur,t,e);r.layers=this.layers,this.add(r);const s=new Cn(cr,ur,t,e);s.layers=this.layers,this.add(s);const a=new Cn(cr,ur,t,e);a.layers=this.layers,this.add(a);const o=new Cn(cr,ur,t,e);o.layers=this.layers,this.add(o);const c=new Cn(cr,ur,t,e);c.layers=this.layers,this.add(c);const l=new Cn(cr,ur,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class sf extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Tc{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kl=class kl{constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};kl.prototype.isMatrix2=!0;let Ac=kl;class af extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function wc(n,t,e,i){const r=of(i);switch(e){case Mu:return n*t;case yu:return n*t/r.components*r.byteLength;case nl:return n*t/r.components*r.byteLength;case Wi:return n*t*2/r.components*r.byteLength;case il:return n*t*2/r.components*r.byteLength;case Su:return n*t*3/r.components*r.byteLength;case Ln:return n*t*4/r.components*r.byteLength;case rl:return n*t*4/r.components*r.byteLength;case zs:case ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(n,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(n,8)*Math.max(t,8)/2;case _o:case xo:case Mo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vo:case Ks:case yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Do:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Oo:case Bo:case zo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ko:case Go:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Zs:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(n){switch(n){case dn:case gu:return{byteLength:1,components:1};case jr:case _u:case qn:return{byteLength:2,components:1};case tl:case el:return{byteLength:2,components:4};case Yn:case jo:case Hn:return{byteLength:4,components:1};case xu:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);function zu(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function lf(n){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){const _=f[u],M=f[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){const M=f[d];n.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_f=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,If=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,op=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Um=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:cf,alphahash_pars_fragment:uf,alphamap_fragment:hf,alphamap_pars_fragment:df,alphatest_fragment:ff,alphatest_pars_fragment:pf,aomap_fragment:mf,aomap_pars_fragment:gf,batching_pars_vertex:_f,batching_vertex:xf,begin_vertex:vf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:yf,bumpmap_pars_fragment:bf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:wf,color_fragment:Rf,color_pars_fragment:Cf,color_pars_vertex:Pf,color_vertex:Df,common:Lf,cube_uv_reflection_fragment:If,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Ff,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,colorspace_fragment:zf,colorspace_pars_fragment:kf,envmap_fragment:Gf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Vf,envmap_pars_vertex:Wf,envmap_physical_pars_fragment:ep,envmap_vertex:Xf,fog_vertex:Yf,fog_pars_vertex:qf,fog_fragment:$f,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:jf,lights_pars_begin:tp,lights_toon_fragment:np,lights_toon_pars_fragment:ip,lights_phong_fragment:rp,lights_phong_pars_fragment:sp,lights_physical_fragment:ap,lights_physical_pars_fragment:op,lights_fragment_begin:lp,lights_fragment_maps:cp,lights_fragment_end:up,lightprobes_pars_fragment:hp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:_p,map_particle_fragment:xp,map_particle_pars_fragment:vp,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:yp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:Ap,normal_fragment_begin:wp,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Dp,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Gp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:Yp,shadowmap_vertex:qp,shadowmask_pars_fragment:$p,skinbase_vertex:Kp,skinning_pars_vertex:Zp,skinning_vertex:Jp,skinnormal_vertex:Qp,specularmap_fragment:jp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:rm,uv_pars_fragment:sm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:um,backgroundCube_vert:hm,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distance_vert:_m,distance_frag:xm,equirect_vert:vm,equirect_frag:Mm,linedashed_vert:Sm,linedashed_frag:ym,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:Am,meshmatcap_vert:wm,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Dm,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Gm,sprite_frag:Hm},dt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Gn={basic:{uniforms:en([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:en([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:en([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:en([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:en([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:en([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:en([dt.points,dt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:en([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:en([dt.common,dt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:en([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:en([dt.sprite,dt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:en([dt.common,dt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:en([dt.lights,dt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Gn.physical={uniforms:en([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Ns={r:0,b:0,g:0},Vm=new Ae,ku=new Nt;ku.set(-1,0,0,0,1,0,0,0,1);function Wm(n,t,e,i,r,s){const a=new Wt(0);let o=r===!0?0:1,c,l,h=null,f=0,u=null;function d(y){let C=y.isScene===!0?y.background:null;if(C&&C.isTexture){const S=y.backgroundBlurriness>0;C=t.get(C,S)}return C}function _(y){let C=!1;const S=d(y);S===null?m(a,o):S&&S.isColor&&(m(S,1),C=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(y,C){const S=d(C);S&&(S.isCubeTexture||S.mapping===aa)?(l===void 0&&(l=new ee(new _i(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Tr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ku),l.material.toneMapped=qt.getTransfer(S.colorSpace)!==se,(h!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ee(new Yi(2,2),new Kn({name:"BackgroundMaterial",uniforms:Tr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=qt.getTransfer(S.colorSpace)!==se,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,C){y.getRGB(Ns,Fu(n)),e.buffers.color.setClear(Ns.r,Ns.g,Ns.b,C,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,C=1){a.set(y),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:M,dispose:p}}function Xm(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(N,O,V,F,G){let Z=!1;const X=f(N,F,V,O);s!==X&&(s=X,l(s.object)),Z=d(N,F,V,G),Z&&_(N,F,V,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(N,O,V,F),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,O,V,F){const G=F.wireframe===!0;let Z=i[O.id];Z===void 0&&(Z={},i[O.id]=Z);const X=N.isInstancedMesh===!0?N.id:0;let rt=Z[X];rt===void 0&&(rt={},Z[X]=rt);let q=rt[V.id];q===void 0&&(q={},rt[V.id]=q);let et=q[G];return et===void 0&&(et=u(c()),q[G]=et),et}function u(N){const O=[],V=[],F=[];for(let G=0;G<e;G++)O[G]=0,V[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:F,object:N,attributes:{},index:null}}function d(N,O,V,F){const G=s.attributes,Z=O.attributes;let X=0;const rt=V.getAttributes();for(const q in rt)if(rt[q].location>=0){const it=G[q];let Dt=Z[q];if(Dt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Dt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Dt=N.instanceColor)),it===void 0||it.attribute!==Dt||Dt&&it.data!==Dt.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function _(N,O,V,F){const G={},Z=O.attributes;let X=0;const rt=V.getAttributes();for(const q in rt)if(rt[q].location>=0){let it=Z[q];it===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));const Dt={};Dt.attribute=it,it&&it.data&&(Dt.data=it.data),G[q]=Dt,X++}s.attributes=G,s.attributesNum=X,s.index=F}function M(){const N=s.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){const V=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;V[N]=1,F[N]===0&&(n.enableVertexAttribArray(N),F[N]=1),G[N]!==O&&(n.vertexAttribDivisor(N,O),G[N]=O)}function y(){const N=s.newAttributes,O=s.enabledAttributes;for(let V=0,F=O.length;V<F;V++)O[V]!==N[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function C(N,O,V,F,G,Z,X){X===!0?n.vertexAttribIPointer(N,O,V,G,Z):n.vertexAttribPointer(N,O,V,F,G,Z)}function S(N,O,V,F){M();const G=F.attributes,Z=V.getAttributes(),X=O.defaultAttributeValues;for(const rt in Z){const q=Z[rt];if(q.location>=0){let et=G[rt];if(et===void 0&&(rt==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),rt==="instanceColor"&&N.instanceColor&&(et=N.instanceColor)),et!==void 0){const it=et.normalized,Dt=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;const he=Ct.buffer,$t=Ct.type,te=Ct.bytesPerElement,$=$t===n.INT||$t===n.UNSIGNED_INT||et.gpuType===jo;if(et.isInterleavedBufferAttribute){const tt=et.data,Mt=tt.stride,Ut=et.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<q.locationSize;xt++)p(q.location+xt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt);n.bindBuffer(n.ARRAY_BUFFER,he);for(let xt=0;xt<q.locationSize;xt++)C(q.location+xt,Dt/q.locationSize,$t,it,Mt*te,(Ut+Dt/q.locationSize*xt)*te,$)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)p(q.location+tt,et.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);n.bindBuffer(n.ARRAY_BUFFER,he);for(let tt=0;tt<q.locationSize;tt++)C(q.location+tt,Dt/q.locationSize,$t,it,Dt*te,Dt/q.locationSize*tt*te,$)}}else if(X!==void 0){const it=X[rt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(q.location,it);break;case 3:n.vertexAttrib3fv(q.location,it);break;case 4:n.vertexAttrib4fv(q.location,it);break;default:n.vertexAttrib1fv(q.location,it)}}}}y()}function E(){T();for(const N in i){const O=i[N];for(const V in O){const F=O[V];for(const G in F){const Z=F[G];for(const X in Z)h(Z[X].object),delete Z[X];delete F[G]}}delete i[N]}}function b(N){if(i[N.id]===void 0)return;const O=i[N.id];for(const V in O){const F=O[V];for(const G in F){const Z=F[G];for(const X in Z)h(Z[X].object),delete Z[X];delete F[G]}}delete i[N.id]}function R(N){for(const O in i){const V=i[O];for(const F in V){const G=V[F];if(G[N.id]===void 0)continue;const Z=G[N.id];for(const X in Z)h(Z[X].object),delete Z[X];delete G[N.id]}}}function x(N){for(const O in i){const V=i[O],F=N.isInstancedMesh===!0?N.id:0,G=V[F];if(G!==void 0){for(const Z in G){const X=G[Z];for(const rt in X)h(X[rt].object),delete X[rt];delete G[Z]}delete V[F],Object.keys(V).length===0&&delete i[O]}}}function T(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function Ym(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function qm(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&R!==Hn&&!x&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(It("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:C,maxFragmentUniforms:S,maxSamples:E,samples:b}}function $m(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ni,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||r;return r=u,i=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const y=s?0:i,C=y*4;let S=p.clippingState||null;c.value=S,S=h(_,u,C,d);for(let E=0;E!==C;++E)S[E]=e[E];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const p=d+M*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,S=d;C!==M;++C,S+=4)a.copy(f[C]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const _r=4,Km=6,Zm=20,Jm=256,Gr=new la,Rc=new Wt;let Ga=null,Ha=0,Va=0,Wa=!1;const Qm=new w,Oi=new w;class Cc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=Qm}=s;Ga=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ga,Ha,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ga=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:qn,format:Ln,colorSpace:Js,depthBuffer:!1},r=Pc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pc(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jm(s)),this._blurMaterial=e0(s,t,e),this._ggxMaterial=t0(s,t,e)}return r}_compileMaterial(t){const e=new ee(new Xe,t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,i,r,s){const c=new Cn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Rc),f.toneMapping=Xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new _i,new Dr({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(Rc),p=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,l[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const E=this._cubeSize;hr(r,S*E,C>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(M,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Vi||t.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;hr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-_r?i-_+_r:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=_-e,hr(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(o,Gr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,hr(t,m,p,3*M,2*M),r.setRenderTarget(t),r.render(o,Gr)}_blur(t,e,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],f=3*h*(r>this._lodMax-_r?r-this._lodMax+_r:0),u=4*(this._cubeSize-h);hr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,Gr)}}function jm(n){const t=[],e=[];let i=n;const r=n-_r+1+Km;for(let s=0;s<r;s++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,_=new Float32Array(d*u*f),M=new Float32Array(d*u*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,C=p>2?0:-1,S=[y,C,0,y+2/3,C,0,y+2/3,C+1,0,y,C,0,y+2/3,C+1,0,y,C+1,0];_.set(S,d*u*p);for(let E=0;E<u;E++){const b=h[E*2]*2-1,R=h[E*2+1]*2-1;p===0?Oi.set(1,R,b):p===1?Oi.set(-b,1,-R):p===2?Oi.set(-b,R,1):p===3?Oi.set(-1,R,-b):p===4?Oi.set(-b,-1,R):Oi.set(b,R,-1),Oi.toArray(M,(p*u+E)*d)}}const m=new Xe;m.setAttribute("position",new Un(_,d)),m.setAttribute("outputDirection",new Un(M,d)),e.push(new ee(m,null)),i>_r&&i--}return{lodMeshes:e,sizeLods:t}}function Pc(n,t,e){const i=new In(n,t,e);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function t0(n,t,e){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function e0(n,t,e){return new Kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Zm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Dc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Lc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Uu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _i(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:oi});s.uniforms.tEquirect.value=e;const a=new ee(r,s),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Je),new rf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}function n0(n){let t=new WeakMap,e=new WeakMap,i=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===ma||d===ga)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Gu(_.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,_=d===ma||d===ga,M=d===Vi||d===Er;if(_||M){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Cc(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return _&&y&&y.height>0||M&&y&&c(y)?(i===null&&(i=new Cc(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===ma?u.mapping=Vi:d===ga&&(u.mapping=Er),u}function c(u){let d=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&d++;return d===_}function l(u){const d=u.target;d.removeEventListener("dispose",l);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function i0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&vr("WebGLRenderer: "+i+" extension not supported."),r}}}function r0(n,t,e,i){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],n.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(d!==null){const y=d.array;M=d.version;for(let C=0,S=y.length;C<S;C+=3){const E=y[C+0],b=y[C+1],R=y[C+2];u.push(E,b,b,R,R,E)}}else{const y=_.array;M=_.version;for(let C=0,S=y.length/3-1;C<S;C+=3){const E=C+0,b=C+1,R=C+2;u.push(E,b,b,R,R,E)}}const m=new(_.count>=65535?Cu:Ru)(u,1);m.version=M;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function s0(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,s,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,d);let M=0;for(let m=0;m<d;m++)M+=u[m];e.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function a0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function o0(n,t,e){const i=new WeakMap,r=new Ee;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var d=P;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let E=o.attributes.position.count*S,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*b*4*f),x=new Tu(R,E,b,f);x.type=Hn,x.needsUpdate=!0;const T=S*4;for(let N=0;N<f;N++){const O=p[N],V=y[N],F=C[N],G=E*b*4*N;for(let Z=0;Z<O.count;Z++){const X=Z*T;_===!0&&(r.fromBufferAttribute(O,Z),R[G+X+0]=r.x,R[G+X+1]=r.y,R[G+X+2]=r.z,R[G+X+3]=0),M===!0&&(r.fromBufferAttribute(V,Z),R[G+X+4]=r.x,R[G+X+5]=r.y,R[G+X+6]=r.z,R[G+X+7]=0),m===!0&&(r.fromBufferAttribute(F,Z),R[G+X+8]=r.x,R[G+X+9]=r.y,R[G+X+10]=r.z,R[G+X+11]=F.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new Rt(E,b)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const M=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function l0(n,t,e,i,r){let s=new WeakMap;function a(l){const h=r.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const c0={[cu]:"LINEAR_TONE_MAPPING",[uu]:"REINHARD_TONE_MAPPING",[hu]:"CINEON_TONE_MAPPING",[Qo]:"ACES_FILMIC_TONE_MAPPING",[fu]:"AGX_TONE_MAPPING",[pu]:"NEUTRAL_TONE_MAPPING",[du]:"CUSTOM_TONE_MAPPING"};function u0(n,t,e,i,r,s){const a=new In(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Xe;l.setAttribute("position",new xe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xe([0,2,0,0,2,0],2));const h=new Zd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ee(l,h),u=new la(-1,1,1,-1,0,1);let d=null,_=null,M=!1,m,p=null,y=[],C=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),c!==null&&c.setSize(S,E);for(let b=0;b<y.length;b++){const R=y[b];R.setSize&&R.setSize(S,E)}},this.setEffects=function(S){y=S,C=y.length>0&&y[0].isRenderPass===!0;const E=a.width,b=a.height;y.length>0&&o===null&&(o=new In(E,b,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new In(E,b,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const x=y[R];x.setSize&&x.setSize(E,b)}},this.begin=function(S,E){if(M||S.toneMapping===Xn&&y.length===0)return!1;if(p=E,E!==null){const b=E.width,R=E.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return C===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Xn,!0},this.hasRenderPass=function(){return C},this.end=function(S,E){S.toneMapping=m,M=!0;let b=a,R=o;for(let x=0;x<y.length;x++){const T=y[x];T.enabled!==!1&&(T.render(S,R,b,E),T.needsSwap!==!1&&(b=R,R=R===o?c:o))}if(d!==S.outputColorSpace||_!==S.toneMapping){d=S.outputColorSpace,_=S.toneMapping,h.defines={},qt.getTransfer(d)===se&&(h.defines.SRGB_TRANSFER="");const x=c0[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(f,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Hu=new Qe,Wo=new is(1,1),Vu=new Tu,Wu=new Ad,Xu=new Uu,Ic=[],Uc=[],Nc=new Float32Array(16),Fc=new Float32Array(9),Oc=new Float32Array(4);function Lr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Ic[r];if(s===void 0&&(s=new Float32Array(r),Ic[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ua(n,t){let e=Uc[t];e===void 0&&(e=new Int32Array(t),Uc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function h0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function d0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2fv(this.addr,t),ze(e,t)}}function f0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;n.uniform3fv(this.addr,t),ze(e,t)}}function p0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4fv(this.addr,t),ze(e,t)}}function m0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Oc.set(i),n.uniformMatrix2fv(this.addr,!1,Oc),ze(e,i)}}function g0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Fc.set(i),n.uniformMatrix3fv(this.addr,!1,Fc),ze(e,i)}}function _0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),ze(e,i)}}function x0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function v0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2iv(this.addr,t),ze(e,t)}}function M0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3iv(this.addr,t),ze(e,t)}}function S0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4iv(this.addr,t),ze(e,t)}}function y0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function b0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;n.uniform2uiv(this.addr,t),ze(e,t)}}function E0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;n.uniform3uiv(this.addr,t),ze(e,t)}}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;n.uniform4uiv(this.addr,t),ze(e,t)}}function A0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wo.compareFunction=e.isReversedDepthBuffer()?al:sl,s=Wo):s=Hu,e.setTexture2D(t||s,r)}function w0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Wu,r)}function R0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Xu,r)}function C0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Vu,r)}function P0(n){switch(n){case 5126:return h0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return y0;case 36294:return b0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function D0(n,t){n.uniform1fv(this.addr,t)}function L0(n,t){const e=Lr(t,this.size,2);n.uniform2fv(this.addr,e)}function I0(n,t){const e=Lr(t,this.size,3);n.uniform3fv(this.addr,e)}function U0(n,t){const e=Lr(t,this.size,4);n.uniform4fv(this.addr,e)}function N0(n,t){const e=Lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function F0(n,t){const e=Lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function O0(n,t){const e=Lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function B0(n,t){n.uniform1iv(this.addr,t)}function z0(n,t){n.uniform2iv(this.addr,t)}function k0(n,t){n.uniform3iv(this.addr,t)}function G0(n,t){n.uniform4iv(this.addr,t)}function H0(n,t){n.uniform1uiv(this.addr,t)}function V0(n,t){n.uniform2uiv(this.addr,t)}function W0(n,t){n.uniform3uiv(this.addr,t)}function X0(n,t){n.uniform4uiv(this.addr,t)}function Y0(n,t,e){const i=this.cache,r=t.length,s=ua(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Wo:a=Hu;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function q0(n,t,e){const i=this.cache,r=t.length,s=ua(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Wu,s[a])}function $0(n,t,e){const i=this.cache,r=t.length,s=ua(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Xu,s[a])}function K0(n,t,e){const i=this.cache,r=t.length,s=ua(e,r);Be(i,s)||(n.uniform1iv(this.addr,s),ze(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Vu,s[a])}function Z0(n){switch(n){case 5126:return D0;case 35664:return L0;case 35665:return I0;case 35666:return U0;case 35674:return N0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return B0;case 35667:case 35671:return z0;case 35668:case 35672:return k0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return K0}}class J0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}}class Q0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Bc(n,t){n.seq.push(t),n.map[t.id]=t}function tg(n,t,e){const i=n.name,r=i.length;for(Xa.lastIndex=0;;){const s=Xa.exec(i),a=Xa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Bc(e,l===void 0?new J0(o,n,t):new Q0(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new j0(o),Bc(e,f)),e=f}}}class Vs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);tg(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function zc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const eg=37297;let ng=0;function ig(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const kc=new Nt;function rg(n){qt._getMatrix(kc,qt.workingColorSpace,n);const t=`mat3( ${kc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(n)){case Qs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+ig(n.getShaderSource(t),o)}else return s}function sg(n,t){const e=rg(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ag={[cu]:"Linear",[uu]:"Reinhard",[hu]:"Cineon",[Qo]:"ACESFilmic",[fu]:"AgX",[pu]:"Neutral",[du]:"Custom"};function og(n,t){const e=ag[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fs=new w;function lg(){qt.getLuminanceCoefficients(Fs);const n=Fs.x.toFixed(4),t=Fs.y.toFixed(4),e=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function ug(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hg(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Yr(n){return n!==""}function Hc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(n){return n.replace(dg,pg)}const fg=new Map;function pg(n,t){let e=Bt[t];if(e===void 0){const i=fg.get(t);if(i!==void 0)e=Bt[i],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xo(e)}const mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wc(n){return n.replace(mg,gg)}function gg(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const _g={[Bs]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function xg(n){return _g[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vg={[Vi]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE_UV"};function Mg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":vg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Sg={[Er]:"ENVMAP_MODE_REFRACTION"};function yg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Sg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bg={[lu]:"ENVMAP_BLENDING_MULTIPLY",[Vh]:"ENVMAP_BLENDING_MIX",[Wh]:"ENVMAP_BLENDING_ADD"};function Eg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bg[n.combine]||"ENVMAP_BLENDING_NONE"}function Tg(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ag(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=xg(e),l=Mg(e),h=yg(e),f=Eg(e),u=Tg(e),d=cg(e),_=ug(s),M=r.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[Xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Xn?og("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Xo(a),a=Hc(a,e),a=Vc(a,e),o=Xo(o),o=Hc(o,e),o=Vc(o,e),a=Wc(a),o=Wc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=y+m+a,S=y+p+o,E=zc(r,r.VERTEX_SHADER,C),b=zc(r,r.FRAGMENT_SHADER,S);r.attachShader(M,E),r.attachShader(M,b),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(N){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(M)||"",V=r.getShaderInfoLog(E)||"",F=r.getShaderInfoLog(b)||"",G=O.trim(),Z=V.trim(),X=F.trim();let rt=!0,q=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,E,b);else{const et=Gc(r,E,"vertex"),it=Gc(r,b,"fragment");Jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+et+`
`+it)}else G!==""?It("WebGLProgram: Program Info Log:",G):(Z===""||X==="")&&(q=!1);q&&(N.diagnostics={runnable:rt,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(E),r.deleteShader(b),x=new Vs(r,M),T=hg(r,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,eg)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ng++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}let wg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Cg(t),e.set(t,i)),i}}class Cg{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}}function Pg(n){return n===Wi||n===Ks||n===Zs}function Dg(n,t,e,i,r,s){const a=new Au,o=new Rg,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,T,P,N,O,V){const F=N.fog,G=O.geometry,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,rt=t.get(x.envMap||Z,X),q=rt&&rt.mapping===aa?rt.image.height:null,et=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const it=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Dt=it!==void 0?it.length:0;let Ct=0;G.morphAttributes.position!==void 0&&(Ct=1),G.morphAttributes.normal!==void 0&&(Ct=2),G.morphAttributes.color!==void 0&&(Ct=3);let he,$t,te,$;if(et){const fe=Gn[et];he=fe.vertexShader,$t=fe.fragmentShader}else{he=x.vertexShader,$t=x.fragmentShader;const fe=o.getVertexShaderStage(x),ne=o.getFragmentShaderStage(x);o.update(x,fe,ne),te=fe.id,$=ne.id}const tt=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,xt=O.isBatchedMesh===!0,zt=!!x.map,Ue=!!x.matcap,Ht=!!rt,jt=!!x.aoMap,de=!!x.lightMap,Xt=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,ke=!!x.displacementMap,an=!!x.emissiveMap,Se=!!x.metalnessMap,Pe=!!x.roughnessMap,U=x.anisotropy>0,Ye=x.clearcoat>0,re=x.dispersion>0,A=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,H=x.transmission>0,Y=U&&!!x.anisotropyMap,st=Ye&&!!x.clearcoatMap,at=Ye&&!!x.clearcoatNormalMap,K=Ye&&!!x.clearcoatRoughnessMap,Q=g&&!!x.iridescenceMap,ot=g&&!!x.iridescenceThicknessMap,Tt=B&&!!x.sheenColorMap,ht=B&&!!x.sheenRoughnessMap,lt=!!x.specularMap,At=!!x.specularColorMap,Lt=!!x.specularIntensityMap,Ft=H&&!!x.transmissionMap,I=H&&!!x.thicknessMap,ct=!!x.gradientMap,J=!!x.alphaMap,ut=x.alphaTest>0,gt=!!x.alphaHash,nt=!!x.extensions;let Pt=Xn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Pt=n.toneMapping);const bt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:he,fragmentShader:$t,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xt,batchingColor:xt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:Ue,envMap:Ht,envMapMode:Ht&&rt.mapping,envMapCubeUVHeight:q,aoMap:jt,lightMap:de,bumpMap:Xt,normalMap:ve,displacementMap:ke,emissiveMap:an,normalMapObjectSpace:ve&&x.normalMapType===qh,normalMapTangentSpace:ve&&x.normalMapType===Vo,packedNormalMap:ve&&x.normalMapType===Vo&&Pg(x.normalMap.format),metalnessMap:Se,roughnessMap:Pe,anisotropy:U,anisotropyMap:Y,clearcoat:Ye,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:K,dispersion:re,retroreflection:A,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:ot,sheen:B,sheenColorMap:Tt,sheenRoughnessMap:ht,specularMap:lt,specularColorMap:At,specularIntensityMap:Lt,transmission:H,transmissionMap:Ft,thicknessMap:I,gradientMap:ct,opaque:x.transparent===!1&&x.blending===Kr&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:gt,combine:x.combine,mapUv:zt&&_(x.map.channel),aoMapUv:jt&&_(x.aoMap.channel),lightMapUv:de&&_(x.lightMap.channel),bumpMapUv:Xt&&_(x.bumpMap.channel),normalMapUv:ve&&_(x.normalMap.channel),displacementMapUv:ke&&_(x.displacementMap.channel),emissiveMapUv:an&&_(x.emissiveMap.channel),metalnessMapUv:Se&&_(x.metalnessMap.channel),roughnessMapUv:Pe&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:st&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(x.sheenRoughnessMap.channel),specularMapUv:lt&&_(x.specularMap.channel),specularColorMapUv:At&&_(x.specularColorMap.channel),specularIntensityMapUv:Lt&&_(x.specularIntensityMap.channel),transmissionMapUv:Ft&&_(x.transmissionMap.channel),thicknessMapUv:I&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ve||U),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(zt||J),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Mt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pt,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===se,decodeVideoTextureEmissive:an&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),y(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){const T=d[x.type];let P;if(T){const N=Gn[T];P=qd.clone(N.uniforms)}else P=x.uniforms;return P}function S(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Ag(n,T,x,r),l.push(P),h.set(T,P)),P}function E(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:C,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:l,dispose:R}}function Lg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Ig(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function qc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,M,m,p){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=_,y.materialVariant=a(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function c(u,d,_,M,m,p,y){y.reversedDepth===!0&&(m=-m);const C=o(u,d,_,M,m,p);_.transmission>0?i.push(C):_.transparent===!0?r.push(C):e.push(C)}function l(u,d,_,M,m,p){const y=o(u,d,_,M,m,p);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||Ig),i.length>1&&i.sort(d||Yc),r.length>1&&r.sort(d||Yc)}function f(){for(let u=t,d=n.length;u<d;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function Ug(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new qc,n.set(i,[a])):r>=s.length?(a=new qc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ng(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new w,color:new Wt};break;case"SpotLight":e={position:new w,direction:new w,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function Fg(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Og=0;function Bg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zg(n){const t=new Ng,e=Fg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);const r=new w,s=new Ae,a=new Ae;function o(l){let h=0,f=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,_=0,M=0,m=0,p=0,y=0,C=0,S=0,E=0,b=0,R=0,x=0,T=0,P=0;l.sort(Bg);for(let O=0,V=l.length;O<V;O++){const F=l[O],G=F.color,Z=F.intensity,X=F.distance;let rt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Wi?rt=F.shadow.map.texture:rt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=G.r*Z,f+=G.g*Z,u+=G.b*Z;else if(F.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(F.sh.coefficients[q],Z);P++}else if(F.isSunLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const et=F.shadow,it=e.get(F);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[_]=it,i.sunShadowMap[_]=rt;const Dt=et.getViewportCount();for(let Ct=0;Ct<Dt;Ct++)i.sunShadowMatrix[M+Ct]=et.getMatrix(Ct),i.sunShadowCascade[M+Ct]=et._cascadeData[Ct];M+=Dt,_++}i.sun[d]=q,d++}else if(F.isDirectionalLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const et=F.shadow,it=e.get(F);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=F.shadow.matrix,E++}i.directional[m]=q,m++}else if(F.isSpotLight){const q=t.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(G).multiplyScalar(Z),q.distance=X,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,i.spot[y]=q;const et=F.shadow;if(F.map&&(i.spotLightMap[x]=F.map,x++,et.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[y]=et.matrix,F.castShadow){const it=e.get(F);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.spotShadow[y]=it,i.spotShadowMap[y]=rt,R++}y++}else if(F.isRectAreaLight){const q=t.get(F);q.color.copy(G).multiplyScalar(Z),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),i.rectArea[C]=q,C++}else if(F.isPointLight){const q=t.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){const et=F.shadow,it=e.get(F);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=rt,i.pointShadowMatrix[p]=F.shadow.matrix,b++}i.point[p]=q,p++}else if(F.isHemisphereLight){const q=t.get(F);q.skyColor.copy(F.color).multiplyScalar(Z),q.groundColor.copy(F.groundColor).multiplyScalar(Z),i.hemi[S]=q,S++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==y||N.rectAreaLength!==C||N.hemiLength!==S||N.numSunShadows!==_||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==x||N.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=C,i.point.length=p,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=y,N.rectAreaLength=C,N.hemiLength=S,N.numSunShadows=_,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=x,N.numLightProbes=P,i.version=Og++)}function c(l,h){let f=0,u=0,d=0,_=0,M=0,m=0;const p=h.matrixWorldInverse;for(let y=0,C=l.length;y<C;y++){const S=l[y];if(S.isSunLight){const E=i.sun[f];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),u++}else if(S.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const E=i.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function $c(n){const t=new zg(n),e=[],i=[],r=[];function s(u){f.camera=u,e.length=0,i.length=0,r.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){r.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function kg(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new $c(n),t.set(r,[o])):s>=a.length?(o=new $c(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vg=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],Wg=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],Kc=new Ae,Hr=new w,Ya=new w;function Xg(n,t,e){let i=new hl;const r=new Rt,s=new Rt,a=new Ee,o=new Jd,c=new Qd,l={},h=e.maxTextureSize,f={[Hi]:cn,[cn]:Hi,[Pn]:Pn},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Gg,fragmentShader:Hg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new Xe;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ee(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bs;let p=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===su&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bs);const T=n.getRenderTarget(),P=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(oi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(G=>G.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,G=b.length;F<G;F++){const Z=b[F],X=Z.shadow;if(X===void 0){It("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const rt=X.getFrameExtents();r.multiply(rt),s.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/rt.x),r.x=s.x*rt.x,X.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/rt.y),r.y=s.y*rt.y,X.mapSize.y=s.y));const q=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Xr){if(Z.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new In(r.x,r.y,{format:Wi,type:qn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new is(r.x,r.y,Hn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=di,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We}else Z.isPointLight?(X.map=new Gu(r.x),X.map.depthTexture=new Xd(r.x,Yn)):(X.map=new In(r.x,r.y),X.map.depthTexture=new is(r.x,r.y,Yn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=di,this.type===Bs?(X.map.depthTexture.compareFunction=q?al:sl,X.map.depthTexture.minFilter=Je,X.map.depthTexture.magFilter=Je):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,x);for(let it=0;it<et;it++){const Dt=X.getCamera(it);if(Z.isPointLight){const Ct=X.camera,he=X.matrix,$t=Z.distance||Ct.far;$t!==Ct.far&&(Ct.far=$t,Ct.updateProjectionMatrix()),Hr.setFromMatrixPosition(Z.matrixWorld),Ct.position.copy(Hr),Ya.copy(Ct.position),Ya.add(Vg[it]),Ct.up.copy(Wg[it]),Ct.lookAt(Ya),Ct.updateMatrixWorld(),he.makeTranslation(-Hr.x,-Hr.y,-Hr.z),Kc.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Kc,Ct.coordinateSystem,Ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,it),n.clear();else{it===0&&(n.setRenderTarget(X.map),n.clear());const Ct=X.getViewport(it);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),O.viewport(a)}i=X.getFrustum(it),S(R,x,Dt,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Xr&&y(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,N)};function y(b,R){const x=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new In(r.x,r.y,{format:Wi,type:qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,x,u,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,x,d,M,null)}function C(b,R,x,T){let P=null;const N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?c:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=P.uuid,V=R.uuid;let F=l[O];F===void 0&&(F={},l[O]=F);let G=F[V];G===void 0&&(G=P.clone(),F[V]=G,R.addEventListener("dispose",E)),P=G}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Xr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=x}return P}function S(b,R,x,T,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Xr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const V=t.update(b),F=b.material;if(Array.isArray(F)){const G=V.groups;for(let Z=0,X=G.length;Z<X;Z++){const rt=G[Z],q=F[rt.materialIndex];if(q&&q.visible){const et=C(b,q,T,P);b.onBeforeShadow(n,b,R,x,V,et,rt),n.renderBufferDirect(x,null,V,et,b,rt),b.onAfterShadow(n,b,R,x,V,et,rt)}}}else if(F.visible){const G=C(b,F,T,P);b.onBeforeShadow(n,b,R,x,V,G,null),n.renderBufferDirect(x,null,V,G,b,null),b.onAfterShadow(n,b,R,x,V,G,null)}}const O=b.children;for(let V=0,F=O.length;V<F;V++)S(O[V],R,x,T,P)}function E(b){b.target.removeEventListener("dispose",E);for(const x in l){const T=l[x],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Yg(n,t){function e(){let I=!1;const ct=new Ee;let J=null;const ut=new Ee(0,0,0,0);return{setMask:function(gt){J!==gt&&!I&&(n.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){I=gt},setClear:function(gt,nt,Pt,bt,fe){fe===!0&&(gt*=bt,nt*=bt,Pt*=bt),ct.set(gt,nt,Pt,bt),ut.equals(ct)===!1&&(n.clearColor(gt,nt,Pt,bt),ut.copy(ct))},reset:function(){I=!1,J=null,ut.set(-1,0,0,0)}}}function i(){let I=!1,ct=!1,J=null,ut=null,gt=null;return{setReversed:function(nt){if(ct!==nt){const Pt=t.get("EXT_clip_control");nt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ct=nt;const bt=gt;gt=null,this.setClear(bt)}},getReversed:function(){return ct},setTest:function(nt){nt?tt(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(nt){J!==nt&&!I&&(n.depthMask(nt),J=nt)},setFunc:function(nt){if(ct&&(nt=rd[nt]),ut!==nt){switch(nt){case io:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case ao:n.depthFunc(n.EQUAL);break;case oo:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=nt}},setLocked:function(nt){I=nt},setClear:function(nt){gt!==nt&&(gt=nt,ct&&(nt=1-nt),n.clearDepth(nt))},reset:function(){I=!1,J=null,ut=null,gt=null,ct=!1}}}function r(){let I=!1,ct=null,J=null,ut=null,gt=null,nt=null,Pt=null,bt=null,fe=null;return{setTest:function(ne){I||(ne?tt(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(ne){ct!==ne&&!I&&(n.stencilMask(ne),ct=ne)},setFunc:function(ne,En,Fn){(J!==ne||ut!==En||gt!==Fn)&&(n.stencilFunc(ne,En,Fn),J=ne,ut=En,gt=Fn)},setOp:function(ne,En,Fn){(nt!==ne||Pt!==En||bt!==Fn)&&(n.stencilOp(ne,En,Fn),nt=ne,Pt=En,bt=Fn)},setLocked:function(ne){I=ne},setClear:function(ne){fe!==ne&&(n.clearStencil(ne),fe=ne)},reset:function(){I=!1,ct=null,J=null,ut=null,gt=null,nt=null,Pt=null,bt=null,fe=null}}}const s=new e,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},u={},d=new WeakMap,_=[],M=null,m=!1,p=null,y=null,C=null,S=null,E=null,b=null,R=null,x=new Wt(0,0,0),T=0,P=!1,N=null,O=null,V=null,F=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,rt=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=rt>=1):q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=rt>=2);let et=null,it={};const Dt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),he=new Ee().fromArray(Dt),$t=new Ee().fromArray(Ct);function te(I,ct,J,ut){const gt=new Uint8Array(4),nt=n.createTexture();n.bindTexture(I,nt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pt=0;Pt<J;Pt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ct+Pt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return nt}const $={};$[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(Qr),Xt(!1),ve(Jl),tt(n.CULL_FACE),jt(oi);function tt(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Mt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ut(I,ct){return u[I]!==ct?(n.bindFramebuffer(I,ct),u[I]=ct,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ct),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function xt(I,ct){let J=_,ut=!1;if(I){J=d.get(ct),J===void 0&&(J=[],d.set(ct,J));const gt=I.textures;if(J.length!==gt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,Pt=gt.length;nt<Pt;nt++)J[nt]=n.COLOR_ATTACHMENT0+nt;J.length=gt.length,ut=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ut=!0);ut&&n.drawBuffers(J)}function zt(I){return M!==I?(n.useProgram(I),M=I,!0):!1}const Ue={[pr]:n.FUNC_ADD,[Ah]:n.FUNC_SUBTRACT,[wh]:n.FUNC_REVERSE_SUBTRACT};Ue[Rh]=n.MIN,Ue[Ch]=n.MAX;const Ht={[Ph]:n.ZERO,[Dh]:n.ONE,[Lh]:n.SRC_COLOR,[au]:n.SRC_ALPHA,[Bh]:n.SRC_ALPHA_SATURATE,[Fh]:n.DST_COLOR,[Uh]:n.DST_ALPHA,[Ih]:n.ONE_MINUS_SRC_COLOR,[ou]:n.ONE_MINUS_SRC_ALPHA,[Oh]:n.ONE_MINUS_DST_COLOR,[Nh]:n.ONE_MINUS_DST_ALPHA,[zh]:n.CONSTANT_COLOR,[kh]:n.ONE_MINUS_CONSTANT_COLOR,[Gh]:n.CONSTANT_ALPHA,[Hh]:n.ONE_MINUS_CONSTANT_ALPHA};function jt(I,ct,J,ut,gt,nt,Pt,bt,fe,ne){if(I===oi){m===!0&&(Mt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),I!==Th){if(I!==p||ne!==P){if((y!==pr||E!==pr)&&(n.blendEquation(n.FUNC_ADD),y=pr,E=pr),ne)switch(I){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Jt("WebGLState: Invalid blending: ",I);break}else switch(I){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jl:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tc:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",I);break}C=null,S=null,b=null,R=null,x.set(0,0,0),T=0,p=I,P=ne}return}gt=gt||ct,nt=nt||J,Pt=Pt||ut,(ct!==y||gt!==E)&&(n.blendEquationSeparate(Ue[ct],Ue[gt]),y=ct,E=gt),(J!==C||ut!==S||nt!==b||Pt!==R)&&(n.blendFuncSeparate(Ht[J],Ht[ut],Ht[nt],Ht[Pt]),C=J,S=ut,b=nt,R=Pt),(bt.equals(x)===!1||fe!==T)&&(n.blendColor(bt.r,bt.g,bt.b,fe),x.copy(bt),T=fe),p=I,P=!1}function de(I,ct){I.side===Pn?Mt(n.CULL_FACE):tt(n.CULL_FACE);let J=I.side===cn;ct&&(J=!J),Xt(J),I.blending===Kr&&I.transparent===!1?jt(oi):jt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ut=I.stencilWrite;o.setTest(ut),ut&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),an(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(I){N!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),N=I)}function ve(I){I!==bh?(tt(n.CULL_FACE),I!==O&&(I===Jl?n.cullFace(n.BACK):I===Eh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),O=I}function ke(I){I!==V&&(X&&n.lineWidth(I),V=I)}function an(I,ct,J){I?(tt(n.POLYGON_OFFSET_FILL),(F!==ct||G!==J)&&(F=ct,G=J,a.getReversed()&&(ct=-ct),n.polygonOffset(ct,J))):Mt(n.POLYGON_OFFSET_FILL)}function Se(I){I?tt(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function Pe(I){I===void 0&&(I=n.TEXTURE0+Z-1),et!==I&&(n.activeTexture(I),et=I)}function U(I,ct,J){J===void 0&&(et===null?J=n.TEXTURE0+Z-1:J=et);let ut=it[J];ut===void 0&&(ut={type:void 0,texture:void 0},it[J]=ut),(ut.type!==I||ut.texture!==ct)&&(et!==J&&(n.activeTexture(J),et=J),n.bindTexture(I,ct||$[I]),ut.type=I,ut.texture=ct)}function Ye(){const I=it[et];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function g(){try{n.texSubImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function B(){try{n.texSubImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function st(){try{n.texStorage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function at(){try{n.texStorage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function K(){try{n.texImage2D(...arguments)}catch(I){Jt("WebGLState:",I)}}function Q(){try{n.texImage3D(...arguments)}catch(I){Jt("WebGLState:",I)}}function ot(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function Tt(I,ct){f[I]!==ct&&(n.pixelStorei(I,ct),f[I]=ct)}function ht(I){he.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function lt(I){$t.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),$t.copy(I))}function At(I,ct){let J=l.get(ct);J===void 0&&(J=new WeakMap,l.set(ct,J));let ut=J.get(I);ut===void 0&&(ut=n.getUniformBlockIndex(ct,I.name),J.set(I,ut))}function Lt(I,ct){const ut=l.get(ct).get(I);c.get(ct)!==ut&&(n.uniformBlockBinding(ct,ut,I.__bindingPointIndex),c.set(ct,ut))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},et=null,it={},u={},d=new WeakMap,_=[],M=null,m=!1,p=null,y=null,C=null,S=null,E=null,b=null,R=null,x=new Wt(0,0,0),T=0,P=!1,N=null,O=null,V=null,F=null,G=null,he.set(0,0,n.canvas.width,n.canvas.height),$t.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:Mt,bindFramebuffer:Ut,drawBuffers:xt,useProgram:zt,setBlending:jt,setMaterial:de,setFlipSided:Xt,setCullFace:ve,setLineWidth:ke,setPolygonOffset:an,setScissorTest:Se,activeTexture:Pe,bindTexture:U,unbindTexture:Ye,compressedTexImage2D:re,compressedTexImage3D:A,texImage2D:K,texImage3D:Q,pixelStorei:Tt,getParameter:ot,updateUBOMapping:At,uniformBlockBinding:Lt,texStorage2D:st,texStorage3D:at,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:ht,viewport:lt,reset:Ft}}function qg(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,g){return _?new OffscreenCanvas(A,g):js("canvas")}function m(A,g,B){let H=1;const Y=re(A);if((Y.width>B||Y.height>B)&&(H=B/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const st=Math.floor(H*Y.width),at=Math.floor(H*Y.height);u===void 0&&(u=M(st,at));const K=g?M(st,at):u;return K.width=st,K.height=at,K.getContext("2d").drawImage(A,0,0,st,at),It("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+at+")."),K}else return"data"in A&&It("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,g,B,H,Y,st=!1){if(A!==null){if(n[A]!==void 0)return n[A];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;H&&(at=t.get("EXT_texture_norm16"),at||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===n.RED&&(B===n.FLOAT&&(K=n.R32F),B===n.HALF_FLOAT&&(K=n.R16F),B===n.UNSIGNED_BYTE&&(K=n.R8),B===n.UNSIGNED_SHORT&&at&&(K=at.R16_EXT),B===n.SHORT&&at&&(K=at.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.R8UI),B===n.UNSIGNED_SHORT&&(K=n.R16UI),B===n.UNSIGNED_INT&&(K=n.R32UI),B===n.BYTE&&(K=n.R8I),B===n.SHORT&&(K=n.R16I),B===n.INT&&(K=n.R32I)),g===n.RG&&(B===n.FLOAT&&(K=n.RG32F),B===n.HALF_FLOAT&&(K=n.RG16F),B===n.UNSIGNED_BYTE&&(K=n.RG8),B===n.UNSIGNED_SHORT&&at&&(K=at.RG16_EXT),B===n.SHORT&&at&&(K=at.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RG8UI),B===n.UNSIGNED_SHORT&&(K=n.RG16UI),B===n.UNSIGNED_INT&&(K=n.RG32UI),B===n.BYTE&&(K=n.RG8I),B===n.SHORT&&(K=n.RG16I),B===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGB8UI),B===n.UNSIGNED_SHORT&&(K=n.RGB16UI),B===n.UNSIGNED_INT&&(K=n.RGB32UI),B===n.BYTE&&(K=n.RGB8I),B===n.SHORT&&(K=n.RGB16I),B===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),B===n.UNSIGNED_INT&&(K=n.RGBA32UI),B===n.BYTE&&(K=n.RGBA8I),B===n.SHORT&&(K=n.RGBA16I),B===n.INT&&(K=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&at&&(K=at.RGB16_EXT),B===n.SHORT&&at&&(K=at.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),g===n.RGBA){const Q=st?Qs:qt.getTransfer(Y);B===n.FLOAT&&(K=n.RGBA32F),B===n.HALF_FLOAT&&(K=n.RGBA16F),B===n.UNSIGNED_BYTE&&(K=Q===se?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&at&&(K=at.RGBA16_EXT),B===n.SHORT&&at&&(K=at.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function E(A,g){let B;return A?g===null||g===Yn||g===ts?B=n.DEPTH24_STENCIL8:g===Hn?B=n.DEPTH32F_STENCIL8:g===jr&&(B=n.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yn||g===ts?B=n.DEPTH_COMPONENT24:g===Hn?B=n.DEPTH_COMPONENT32F:g===jr&&(B=n.DEPTH_COMPONENT16),B}function b(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==Je?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),T(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function x(A){const g=A.target;g.removeEventListener("dispose",x),N(g)}function T(A){const g=i.get(A);if(g.__webglInit===void 0)return;const B=A.source,H=d.get(B);if(H){const Y=H[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(A),Object.keys(H).length===0&&d.delete(B)}i.remove(A)}function P(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const B=A.source,H=d.get(B);delete H[g.__cacheKey],a.memory.textures--}function N(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Y=0;Y<g.__webglFramebuffer[H].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[H][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=A.textures;for(let H=0,Y=B.length;H<Y;H++){const st=i.get(B[H]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),a.memory.textures--),i.remove(B[H])}i.remove(A)}let O=0;function V(){O=0}function F(){return O}function G(A){O=A}function Z(){const A=O;return A>=r.maxTextures&&It("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,A}function X(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function rt(A,g){const B=i.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const H=A.image;if(H===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(B,A,g);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function q(A,g){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Mt(B,A,g);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function et(A,g){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Mt(B,A,g);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function it(A,g){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Ut(B,A,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const Dt={[uo]:n.REPEAT,[ai]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},Ct={[We]:n.NEAREST,[Xh]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[_a]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},he={[Kh]:n.NEVER,[td]:n.ALWAYS,[Zh]:n.LESS,[sl]:n.LEQUAL,[Jh]:n.EQUAL,[al]:n.GEQUAL,[Qh]:n.GREATER,[jh]:n.NOTEQUAL};function $t(A,g){if(g.type===Hn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Je||g.magFilter===_a||g.magFilter===ds||g.magFilter===Bi||g.minFilter===Je||g.minFilter===_a||g.minFilter===ds||g.minFilter===Bi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Dt[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Dt[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Dt[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Ct[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Ct[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,he[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===We||g.minFilter!==ds&&g.minFilter!==Bi||g.type===Hn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function te(A,g){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const H=g.source;let Y=d.get(H);Y===void 0&&(Y={},d.set(H,Y));const st=X(g);if(st!==A.__cacheKey){Y[st]===void 0&&(Y[st]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[st].usedTimes++;const at=Y[A.__cacheKey];at!==void 0&&(Y[A.__cacheKey].usedTimes--,at.usedTimes===0&&P(g)),A.__cacheKey=st,A.__webglTexture=Y[st].texture}return B}function $(A,g,B){return Math.floor(Math.floor(A/B)/g)}function tt(A,g,B,H){const st=A.updateRanges;if(st.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,H,g.data);else{st.sort((Tt,ht)=>Tt.start-ht.start);let at=0;for(let Tt=1;Tt<st.length;Tt++){const ht=st[at],lt=st[Tt],At=ht.start+ht.count,Lt=$(lt.start,g.width,4),Ft=$(ht.start,g.width,4);lt.start<=At+1&&Lt===Ft&&$(lt.start+lt.count-1,g.width,4)===Lt?ht.count=Math.max(ht.count,lt.start+lt.count-ht.start):(++at,st[at]=lt)}st.length=at+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),ot=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Tt=0,ht=st.length;Tt<ht;Tt++){const lt=st[Tt],At=Math.floor(lt.start/4),Lt=Math.ceil(lt.count/4),Ft=At%g.width,I=Math.floor(At/g.width),ct=Lt,J=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Ft,I,ct,J,B,H,g.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function Mt(A,g,B){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const Y=te(A,g),st=g.source;e.bindTexture(H,A.__webglTexture,n.TEXTURE0+B);const at=i.get(st);if(st.version!==at.__version||Y===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=qt.getPrimaries(qt.workingColorSpace),ut=g.colorSpace===wi?null:qt.getPrimaries(g.colorSpace),gt=g.colorSpace===wi||J===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,r.maxTextureSize);Q=Ye(g,Q);const ot=s.convert(g.format,g.colorSpace),Tt=s.convert(g.type);let ht=S(g.internalFormat,ot,Tt,g.normalized,g.colorSpace,g.isVideoTexture);$t(H,g);let lt;const At=g.mipmaps,Lt=g.isVideoTexture!==!0,Ft=at.__version===void 0||Y===!0,I=st.dataReady,ct=b(g,Q);if(g.isDepthTexture)ht=E(g.format===zi,g.type),Ft&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,ht,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,ht,Q.width,Q.height,0,ot,Tt,null));else if(g.isDataTexture)if(At.length>0){Lt&&Ft&&e.texStorage2D(n.TEXTURE_2D,ct,ht,At[0].width,At[0].height);for(let J=0,ut=At.length;J<ut;J++)lt=At[J],Lt?I&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(n.TEXTURE_2D,J,ht,lt.width,lt.height,0,ot,Tt,lt.data);g.generateMipmaps=!1}else Lt?(Ft&&e.texStorage2D(n.TEXTURE_2D,ct,ht,Q.width,Q.height),I&&tt(g,Q,ot,Tt)):e.texImage2D(n.TEXTURE_2D,0,ht,Q.width,Q.height,0,ot,Tt,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Lt&&Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ht,At[0].width,At[0].height,Q.depth);for(let J=0,ut=At.length;J<ut;J++)if(lt=At[J],g.format!==Ln)if(ot!==null)if(Lt){if(I)if(g.layerUpdates.size>0){const gt=wc(lt.width,lt.height,g.format,g.type);for(const nt of g.layerUpdates){const Pt=lt.data.subarray(nt*gt/lt.data.BYTES_PER_ELEMENT,(nt+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,nt,lt.width,lt.height,1,ot,Pt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,Q.depth,ot,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ht,lt.width,lt.height,Q.depth,0,lt.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,lt.width,lt.height,Q.depth,ot,Tt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,ht,lt.width,lt.height,Q.depth,0,ot,Tt,lt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Lt&&Ft&&e.texStorage2D(n.TEXTURE_2D,ct,ht,At[0].width,At[0].height);for(let J=0,ut=At.length;J<ut;J++)lt=At[J],g.format!==Ln?ot!==null?Lt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,ht,lt.width,lt.height,0,lt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?I&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,lt.width,lt.height,ot,Tt,lt.data):e.texImage2D(n.TEXTURE_2D,J,ht,lt.width,lt.height,0,ot,Tt,lt.data)}else if(g.isDataArrayTexture)if(Lt){if(Ft&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,ht,Q.width,Q.height,Q.depth),I)if(g.layerUpdates.size>0){const J=wc(Q.width,Q.height,g.format,g.type);for(const ut of g.layerUpdates){const gt=Q.data.subarray(ut*J/Q.data.BYTES_PER_ELEMENT,(ut+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,ot,Tt,gt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ot,Tt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,ot,Tt,Q.data);else if(g.isData3DTexture)Lt?(Ft&&e.texStorage3D(n.TEXTURE_3D,ct,ht,Q.width,Q.height,Q.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ot,Tt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,ot,Tt,Q.data);else if(g.isFramebufferTexture){if(Ft)if(Lt)e.texStorage2D(n.TEXTURE_2D,ct,ht,Q.width,Q.height);else{let J=Q.width,ut=Q.height;for(let gt=0;gt<ct;gt++)e.texImage2D(n.TEXTURE_2D,gt,ht,J,ut,0,ot,Tt,null),J>>=1,ut>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const J=n.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),f.add(g),J.onpaint=ut=>{const gt=ut.changedElements;for(const nt of f)gt.includes(nt.image)&&(nt.needsUpdate=!0)},J.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{const gt=n.RGBA,nt=n.RGBA,Pt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,gt,nt,Pt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(At.length>0){if(Lt&&Ft){const J=re(At[0]);e.texStorage2D(n.TEXTURE_2D,ct,ht,J.width,J.height)}for(let J=0,ut=At.length;J<ut;J++)lt=At[J],Lt?I&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,ot,Tt,lt):e.texImage2D(n.TEXTURE_2D,J,ht,ot,Tt,lt);g.generateMipmaps=!1}else if(Lt){if(Ft){const J=re(Q);e.texStorage2D(n.TEXTURE_2D,ct,ht,J.width,J.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Tt,Q)}else e.texImage2D(n.TEXTURE_2D,0,ht,ot,Tt,Q);p(g)&&y(H),at.__version=st.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ut(A,g,B){if(g.image.length!==6)return;const H=te(A,g),Y=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const st=i.get(Y);if(Y.version!==st.__version||H===!0){e.activeTexture(n.TEXTURE0+B);const at=qt.getPrimaries(qt.workingColorSpace),K=g.colorSpace===wi?null:qt.getPrimaries(g.colorSpace),Q=g.colorSpace===wi||at===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ot=g.isCompressedTexture||g.image[0].isCompressedTexture,Tt=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let nt=0;nt<6;nt++)!ot&&!Tt?ht[nt]=m(g.image[nt],!0,r.maxCubemapSize):ht[nt]=Tt?g.image[nt].image:g.image[nt],ht[nt]=Ye(g,ht[nt]);const lt=ht[0],At=s.convert(g.format,g.colorSpace),Lt=s.convert(g.type),Ft=S(g.internalFormat,At,Lt,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,ct=st.__version===void 0||H===!0,J=Y.dataReady;let ut=b(g,lt);$t(n.TEXTURE_CUBE_MAP,g);let gt;if(ot){I&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ft,lt.width,lt.height);for(let nt=0;nt<6;nt++){gt=ht[nt].mipmaps;for(let Pt=0;Pt<gt.length;Pt++){const bt=gt[Pt];g.format!==Ln?At!==null?I?J&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,Ft,bt.width,bt.height,0,bt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,bt.width,bt.height,At,Lt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,Ft,bt.width,bt.height,0,At,Lt,bt.data)}}}else{if(gt=g.mipmaps,I&&ct){gt.length>0&&ut++;const nt=re(ht[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ft,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Tt){I?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,ht[nt].width,ht[nt].height,At,Lt,ht[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ft,ht[nt].width,ht[nt].height,0,At,Lt,ht[nt].data);for(let Pt=0;Pt<gt.length;Pt++){const fe=gt[Pt].image[nt].image;I?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,fe.width,fe.height,At,Lt,fe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,Ft,fe.width,fe.height,0,At,Lt,fe.data)}}else{I?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,Lt,ht[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Ft,At,Lt,ht[nt]);for(let Pt=0;Pt<gt.length;Pt++){const bt=gt[Pt];I?J&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,At,Lt,bt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,Ft,At,Lt,bt.image[nt])}}}p(g)&&y(n.TEXTURE_CUBE_MAP),st.__version=Y.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function xt(A,g,B,H,Y,st){const at=s.convert(B.format,B.colorSpace),K=s.convert(B.type),Q=S(B.internalFormat,at,K,B.normalized,B.colorSpace),ot=i.get(g),Tt=i.get(B);if(Tt.__renderTarget=g,!ot.__hasExternalTextures){const ht=Math.max(1,g.width>>st),lt=Math.max(1,g.height>>st);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,st,Q,ht,lt,g.depth,0,at,K,null):e.texImage2D(Y,st,Q,ht,lt,0,at,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Pe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,Y,Tt.__webglTexture,0,Se(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,Y,Tt.__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(A,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const H=g.depthTexture,Y=H&&H.isDepthTexture?H.type:null,st=E(g.stencilBuffer,Y),at=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(g),st,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(g),st,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,st,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,A)}else{const H=g.textures;for(let Y=0;Y<H.length;Y++){const st=H[Y],at=s.convert(st.format,st.colorSpace),K=s.convert(st.type),Q=S(st.internalFormat,at,K,st.normalized,st.colorSpace);Pe(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(g),Q,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(g),Q,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Q,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,g,B){const H=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),$t(n.TEXTURE_CUBE_MAP,g.depthTexture);const ot=s.convert(g.depthTexture.format),Tt=s.convert(g.depthTexture.type);let ht;g.depthTexture.format===di?ht=n.DEPTH_COMPONENT24:g.depthTexture.format===zi&&(ht=n.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ht,g.width,g.height,0,ot,Tt,null)}}else rt(g.depthTexture,0);const st=Y.__webglTexture,at=Se(g),K=H?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Q=g.depthTexture.format===zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===di)Pe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,st,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,st,0);else if(g.depthTexture.format===zi)Pe(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,K,st,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,Q,K,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(A){const g=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=H}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)Ue(g.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?Ue(g.__webglFramebuffer[0],A,0):Ue(g.__webglFramebuffer,A,0)}else if(B){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),zt(g.__webglDepthbuffer[H],A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,st)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),zt(g.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,st)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(A,g,B){const H=i.get(A);g!==void 0&&xt(H.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ht(A)}function de(A){const g=A.texture,B=i.get(A),H=i.get(g);A.addEventListener("dispose",x);const Y=A.textures,st=A.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,a.memory.textures++),st){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<g.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=n.createFramebuffer()}else B.__webglFramebuffer[K]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)B.__webglFramebuffer[K]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(at)for(let K=0,Q=Y.length;K<Q;K++){const ot=i.get(Y[K]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Pe(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){const Q=Y[K];B.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ot=s.convert(Q.format,Q.colorSpace),Tt=s.convert(Q.type),ht=S(Q.internalFormat,ot,Tt,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),lt=Se(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ht,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,B.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),$t(n.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)xt(B.__webglFramebuffer[K][Q],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else xt(B.__webglFramebuffer[K],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(g)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let K=0,Q=Y.length;K<Q;K++){const ot=Y[K],Tt=i.get(ot);let ht=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,Tt.__webglTexture),$t(ht,ot),xt(B.__webglFramebuffer,A,ot,n.COLOR_ATTACHMENT0+K,ht,0),p(ot)&&y(ht)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),$t(K,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)xt(B.__webglFramebuffer[Q],A,g,n.COLOR_ATTACHMENT0,K,Q);else xt(B.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,K,0);p(g)&&y(K),e.unbindTexture()}A.depthBuffer&&Ht(A)}function Xt(A){const g=A.textures;for(let B=0,H=g.length;B<H;B++){const Y=g[B];if(p(Y)){const st=C(A),at=i.get(Y).__webglTexture;e.bindTexture(st,at),y(st),e.unbindTexture()}}}const ve=[],ke=[];function an(A){if(A.samples>0){if(Pe(A)===!1){const g=A.textures,B=A.width,H=A.height;let Y=n.COLOR_BUFFER_BIT;const st=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(A),K=g.length>1;if(K)for(let ot=0;ot<g.length;ot++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<g.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=i.get(g[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,B,H,0,0,B,H,Y,n.NEAREST),c===!0&&(ve.length=0,ke.length=0,ve.push(n.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ve.push(st),ke.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ot=0;ot<g.length;ot++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);const Tt=i.get(g[ot]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Se(A){return Math.min(r.maxSamples,A.samples)}function Pe(A){const g=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(A){const g=a.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function Ye(A,g){const B=A.colorSpace,H=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Js&&B!==wi&&(qt.getTransfer(B)===se?(H!==Ln||Y!==dn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",B)),g}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.getTextureUnits=F,this.setTextureUnits=G,this.setTexture2D=rt,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=it,this.rebindTextures=jt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $g(n,t){function e(i,r=wi){let s;const a=qt.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===el)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gu)return n.BYTE;if(i===_u)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===jo)return n.INT;if(i===Yn)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===qn)return n.HALF_FLOAT;if(i===Mu)return n.ALPHA;if(i===Su)return n.RGB;if(i===Ln)return n.RGBA;if(i===di)return n.DEPTH_COMPONENT;if(i===zi)return n.DEPTH_STENCIL;if(i===yu)return n.RED;if(i===nl)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===il)return n.RG_INTEGER;if(i===rl)return n.RGBA_INTEGER;if(i===zs||i===ks||i===Gs||i===Hs)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===go)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===xo||i===vo||i===Mo||i===So||i===Ks||i===yo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_o||i===xo)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mo)return s.COMPRESSED_R11_EAC;if(i===So)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ks)return s.COMPRESSED_RG11_EAC;if(i===yo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bo||i===Eo||i===To||i===Ao||i===wo||i===Ro||i===Co||i===Po||i===Do||i===Lo||i===Io||i===Uo||i===No||i===Fo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===bo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===To)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ao)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ro)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Co)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Po)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Do)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Io)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===No)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===Bo||i===zo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Oo)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ko||i===Go||i===Zs||i===Ho)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Nu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Kn({vertexShader:Kg,fragmentShader:Zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qg extends Di{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Jg,p={},y=e.getContextAttributes();let C=null,S=null;const E=[],b=[],R=new Rt;let x=null,T=null;const P=new Cn;P.viewport=new Ee;const N=new Cn;N.viewport=new Ee;const O=[P,N],V=new sf;let F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=E[$];return tt===void 0&&(tt=new Ea,E[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=E[$];return tt===void 0&&(tt=new Ea,E[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=E[$];return tt===void 0&&(tt=new Ea,E[$]=tt),tt.getHandSpace()};function Z($){const tt=b.indexOf($.inputSource);if(tt===-1)return;const Mt=E[tt];Mt!==void 0&&(Mt.update($.inputSource,$.frame,l||a),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",rt);for(let $=0;$<E.length;$++){const tt=b[$];tt!==null&&(b[$]=null,E[$].disconnect(tt))}F=null,G=null,m.reset();for(const $ in p)delete p[$];if(t.setRenderTarget(C),d=null,u=null,f=null,r=null,S=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=y.stencil?zi:di,Ut=y.stencil?ts:Yn);const zt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(zt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new In(u.textureWidth,u.textureHeight,{format:Ln,type:dn,depthTexture:new is(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Mt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new In(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt($){for(let tt=0;tt<$.removed.length;tt++){const Mt=$.removed[tt],Ut=b.indexOf(Mt);Ut>=0&&(b[Ut]=null,E[Ut].disconnect(Mt))}for(let tt=0;tt<$.added.length;tt++){const Mt=$.added[tt];let Ut=b.indexOf(Mt);if(Ut===-1){for(let zt=0;zt<E.length;zt++)if(zt>=b.length){b.push(Mt),Ut=zt;break}else if(b[zt]===null){b[zt]=Mt,Ut=zt;break}if(Ut===-1)break}const xt=E[Ut];xt&&xt.connect(Mt)}}const q=new w,et=new w;function it($,tt,Mt){q.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);const Ut=q.distanceTo(et),xt=tt.projectionMatrix.elements,zt=Mt.projectionMatrix.elements,Ue=xt[14]/(xt[10]-1),Ht=xt[14]/(xt[10]+1),jt=(xt[9]+1)/xt[5],de=(xt[9]-1)/xt[5],Xt=(xt[8]-1)/xt[0],ve=(zt[8]+1)/zt[0],ke=Ue*Xt,an=Ue*ve,Se=Ut/(-Xt+ve),Pe=Se*-Xt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Pe),$.translateZ(Se),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const U=Ue+Se,Ye=Ht+Se,re=ke-Pe,A=an+(Ut-Pe),g=jt*Ht/Ye*U,B=de*Ht/Ye*U;$.projectionMatrix.makePerspective(re,A,g,B,U,Ye),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Dt($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let tt=$.near,Mt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),V.near=N.near=P.near=tt,V.far=N.far=P.far=Mt,(F!==V.near||G!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),F=V.near,G=V.far),V.layers.mask=$.layers.mask|6,P.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;const Ut=$.parent,xt=V.cameras;Dt(V,Ut);for(let zt=0;zt<xt.length;zt++)Dt(xt[zt],Ut);xt.length===2?it(V,P,N):V.projectionMatrix.copy(P.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Ct($,V,Ut)};function Ct($,tt,Mt){Mt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ns*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return p[$]};let he=null;function $t($,tt){if(h=tt.getViewerPose(l||a),_=tt,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Ut=!1;Mt.length!==V.cameras.length&&(V.cameras.length=0,Ut=!0);for(let Ht=0;Ht<Mt.length;Ht++){const jt=Mt[Ht];let de=null;if(d!==null)de=d.getViewport(jt);else{const ve=f.getViewSubImage(u,jt);de=ve.viewport,Ht===0&&(t.setRenderTargetTextures(S,ve.colorTexture,ve.depthStencilTexture),t.setRenderTarget(S))}let Xt=O[Ht];Xt===void 0&&(Xt=new Cn,Xt.layers.enable(Ht),Xt.viewport=new Ee,O[Ht]=Xt),Xt.matrix.fromArray(jt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(jt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(de.x,de.y,de.width,de.height),Ht===0&&(V.matrix.copy(Xt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ut===!0&&V.cameras.push(Xt)}const xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const Ht=f.getDepthInformation(Mt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,r.renderState)}if(xt&&xt.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let Ht=0;Ht<Mt.length;Ht++){const jt=Mt[Ht].camera;if(jt){let de=p[jt];de||(de=new Nu,p[jt]=de);const Xt=f.getCameraImage(jt);de.sourceTexture=Xt}}}}for(let Mt=0;Mt<E.length;Mt++){const Ut=b[Mt],xt=E[Mt];Ut!==null&&xt!==void 0&&xt.update(Ut,tt,l||a)}he&&he($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const te=new zu;te.setAnimationLoop($t),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}}const jg=new Ae,Yu=new Nt;Yu.set(-1,0,0,0,1,0,0,0,1);function t_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,C,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,C):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),C=y.envMap,S=y.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function e_(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,E){const b=E.program;i.uniformBlockBinding(S,b)}function l(S,E){let b=r[S.id];b===void 0&&(m(S),b=h(S),r[S.id]=b,S.addEventListener("dispose",y));const R=E.program;i.updateUBOMapping(S,R);const x=t.render.frame;s[S.id]!==x&&(u(S),s[S.id]=x)}function h(S){const E=f();S.__bindingPointIndex=E;const b=n.createBuffer(),R=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const E=r[S.id],b=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){const P=b[x];if(Array.isArray(P))for(let N=0,O=P.length;N<O;N++)d(P[N],x,N,R);else d(P,x,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,E,b,R){if(M(S,E,b,R)===!0){const x=S.__offset,T=S.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){const O=T[N],V=p(O);_(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,S.__data)}}function _(S,E,b){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,b)}function M(S,E,b,R){const x=S.value,T=E+"_"+b;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{const P=R[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(S){const E=S.uniforms;let b=0;const R=16;for(let T=0,P=E.length;T<P;T++){const N=Array.isArray(E[T])?E[T]:[E[T]];for(let O=0,V=N.length;O<V;O++){const F=N[O],G=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,X=G.length;Z<X;Z++){const rt=G[Z],q=p(rt),et=b%R,it=et%q.boundary,Dt=et+it;b+=it,Dt!==0&&R-Dt<q.storage&&(b+=R-Dt),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=q.storage}}}const x=b%R;return x>0&&(b+=R-x),S.__size=b,S.__cache={},this}function p(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):It("WebGLRenderer: Unsupported uniform value type.",S),E}function y(S){const E=S.target;E.removeEventListener("dispose",y);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function C(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:C}}const n_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function i_(){return zn===null&&(zn=new Vd(n_,16,16,Wi,qn),zn.name="DFG_LUT",zn.minFilter=Je,zn.magFilter=Je,zn.wrapS=ai,zn.wrapT=ai,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class r_{constructor(t={}){const{canvas:e=nd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=d,m=new Set([rl,il,nl]),p=new Set([dn,Yn,jr,ts,tl,el]),y=new Uint32Array(4),C=new Int32Array(4),S=new w;let E=null,b=null;const R=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,O=null,V=null,F=null,G=null;this._outputColorSpace=nn;let Z=0,X=0,rt=null,q=-1,et=null;const it=new Ee,Dt=new Ee;let Ct=null;const he=new Wt(0);let $t=0,te=e.width,$=e.height,tt=1,Mt=null,Ut=null;const xt=new Ee(0,0,te,$),zt=new Ee(0,0,te,$);let Ue=!1;const Ht=new hl;let jt=!1,de=!1;const Xt=new Ae,ve=new w,ke=new Ee,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Pe(){return rt===null?tt:1}let U=i;function Ye(v,D){return e.getContext(v,D)}let re,A,g,B,H,Y,st,at,K,Q,ot,Tt,ht,lt,At,Lt,Ft,I,ct,J,ut,gt,nt;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",En,!1),U===null){const D="webgl2";if(U=Ye(D,v),U===null)throw Ye(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(v){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Jt("WebGLRenderer: "+v.message),v}function Pt(){re=new i0(U),re.init(),ut=new $g(U,re),A=new qm(U,re,t,ut),g=new Yg(U,re),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),V=U.createFramebuffer(),F=U.createFramebuffer(),G=U.createFramebuffer(),B=new a0(U),H=new Lg,Y=new qg(U,re,g,H,A,ut,B),st=new n0(P),at=new lf(U),gt=new Xm(U,at),K=new r0(U,at,B,gt),Q=new l0(U,K,at,gt,B),I=new o0(U,A,Y),At=new $m(H),ot=new Dg(P,st,re,A,gt,At),Tt=new t_(P,H),ht=new Ug,lt=new kg(re),Ft=new Wm(P,st,g,Q,_,c),Lt=new Xg(P,Q,A),nt=new e_(U,B,A,g),ct=new Ym(U,re,B),J=new s0(U,re,B),B.programs=ot.programs,P.capabilities=A,P.extensions=re,P.properties=H,P.renderLists=ht,P.shadowMap=Lt,P.state=g,P.info=B}M!==dn&&(T=new u0(M,e.width,e.height,o,r,s));const bt=new Qg(P,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const v=re.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=re.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(v){v!==void 0&&(tt=v,this.setSize(te,$,!1))},this.getSize=function(v){return v.set(te,$)},this.setSize=function(v,D,W=!0){if(bt.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}te=v,$=D,e.width=Math.floor(v*tt),e.height=Math.floor(D*tt),W===!0&&(e.style.width=v+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(te*tt,$*tt).floor()},this.setDrawingBufferSize=function(v,D,W){te=v,$=D,tt=W,e.width=Math.floor(v*W),e.height=Math.floor(D*W),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(M===dn){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(xt)},this.setViewport=function(v,D,W,z){v.isVector4?xt.set(v.x,v.y,v.z,v.w):xt.set(v,D,W,z),g.viewport(it.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,D,W,z){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,D,W,z),g.scissor(Dt.copy(zt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(v){g.setScissorTest(Ue=v)},this.setOpaqueSort=function(v){Mt=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,W=!0){let z=0;if(v){let k=!1;if(rt!==null){const pt=rt.texture.format;k=m.has(pt)}if(k){const pt=rt.texture.type,vt=p.has(pt),ft=Ft.getClearColor(),St=Ft.getClearAlpha(),Et=ft.r,Ot=ft.g,Vt=ft.b;vt?(y[0]=Et,y[1]=Ot,y[2]=Vt,y[3]=St,U.clearBufferuiv(U.COLOR,0,y)):(C[0]=Et,C[1]=Ot,C[2]=Vt,C[3]=St,U.clearBufferiv(U.COLOR,0,C))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Ft.dispose(),ht.dispose(),lt.dispose(),H.dispose(),st.dispose(),Q.dispose(),gt.dispose(),nt.dispose(),ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Hl),bt.removeEventListener("sessionend",Vl),Li.stop()};function fe(v){v.preventDefault(),ta("WebGLRenderer: Context Lost."),N=!0}function ne(){ta("WebGLRenderer: Context Restored."),N=!1;const v=B.autoReset,D=Lt.enabled,W=Lt.autoUpdate,z=Lt.needsUpdate,k=Lt.type;Pt(),B.autoReset=v,Lt.enabled=D,Lt.autoUpdate=W,Lt.needsUpdate=z,Lt.type=k}function En(v){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Fn(v){const D=v.target;D.removeEventListener("dispose",Fn),gh(D)}function gh(v){_h(v),H.remove(v)}function _h(v){const D=H.get(v).programs;D!==void 0&&(D.forEach(function(W){ot.releaseProgram(W)}),v.isShaderMaterial&&ot.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,W,z,k,pt){D===null&&(D=an);const vt=k.isMesh&&k.matrixWorld.determinantAffine()<0,ft=Mh(v,D,W,z,k);g.setMaterial(z,vt);let St=W.index,Et=1;if(z.wireframe===!0){if(St=K.getWireframeAttribute(W),St===void 0)return;Et=2}const Ot=W.drawRange,Vt=W.attributes.position;let yt=Ot.start*Et,ie=(Ot.start+Ot.count)*Et;pt!==null&&(yt=Math.max(yt,pt.start*Et),ie=Math.min(ie,(pt.start+pt.count)*Et)),St!==null?(yt=Math.max(yt,0),ie=Math.min(ie,St.count)):Vt!=null&&(yt=Math.max(yt,0),ie=Math.min(ie,Vt.count));const De=ie-yt;if(De<0||De===1/0)return;gt.setup(k,z,ft,W,St);let ge,ue=ct;if(St!==null&&(ge=at.get(St),ue=J,ue.setIndex(ge)),k.isMesh)z.wireframe===!0?(g.setLineWidth(z.wireframeLinewidth*Pe()),ue.setMode(U.LINES)):ue.setMode(U.TRIANGLES);else if(k.isLine){let qe=z.linewidth;qe===void 0&&(qe=1),g.setLineWidth(qe*Pe()),k.isLineSegments?ue.setMode(U.LINES):k.isLineLoop?ue.setMode(U.LINE_LOOP):ue.setMode(U.LINE_STRIP)}else k.isPoints?ue.setMode(U.POINTS):k.isSprite&&ue.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ue.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const qe=k._multiDrawStarts,_t=k._multiDrawCounts,je=k._multiDrawCount,Zt=St?at.get(St).bytesPerElement:1,_n=H.get(z).currentProgram.getUniforms();for(let On=0;On<je;On++)_n.setValue(U,"_gl_DrawID",On),ue.render(qe[On]/Zt,_t[On])}else if(k.isInstancedMesh)ue.renderInstances(yt,De,k.count);else if(W.isInstancedBufferGeometry){const qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,qe);ue.renderInstances(yt,De,_t)}else ue.render(yt,De)};function Gl(v,D,W,z){O!==null&&v.isNodeMaterial&&O.setObject(z,v),jt===!0&&At.setState(v,W,!1),v.transparent===!0&&v.side===Pn&&v.forceSinglePass===!1?(v.side=cn,v.needsUpdate=!0,hs(v,D,z),v.side=Hi,v.needsUpdate=!0,hs(v,D,z),v.side=Pn):hs(v,D,z)}this.compile=function(v,D,W=null){W===null&&(W=v),O!==null&&O.renderStart(v,D,W),b=lt.get(W),b.init(D),x.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),v!==W&&v.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),de=this.localClippingEnabled,jt=At.init(this.clippingPlanes,de),jt===!0&&At.setGlobalState(this.clippingPlanes,D),O!==null&&Lt.render(b.state.shadowsArray,W,D);const z=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pt=k.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){const ft=pt[vt];Gl(ft,W,D,k),z.add(ft)}else Gl(pt,W,D,k),z.add(pt)}),b=x.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(v,D,W=null){const z=this.compile(v,D,W);return new Promise(k=>{function pt(){if(z.forEach(function(vt){const St=H.get(vt).currentProgram;(St===void 0||St.isReady())&&z.delete(vt)}),z.size===0){k(v);return}setTimeout(pt,10)}re.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let fa=null;function xh(v){fa&&fa(v)}function Hl(){Li.stop()}function Vl(){Li.start()}const Li=new zu;Li.setAnimationLoop(xh),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(v){fa=v,bt.setAnimationLoop(v),v===null?Li.stop():Li.start()},bt.addEventListener("sessionstart",Hl),bt.addEventListener("sessionend",Vl),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,D);const W=bt.enabled===!0&&bt.isPresenting===!0,z=T!==null&&(rt===null||W)&&T.begin(P,rt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,D,rt),b=lt.get(v,x.length),b.init(D),b.state.textureUnits=Y.getTextureUnits(),x.push(b),Xt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ht.setFromProjectionMatrix(Xt,Vn,D.reversedDepth),de=this.localClippingEnabled,jt=At.init(this.clippingPlanes,de),E=ht.get(v,R.length),E.init(),R.push(E),bt.enabled===!0&&bt.isPresenting===!0){const vt=P.xr.getDepthSensingMesh();vt!==null&&pa(vt,D,-1/0,P.sortObjects)}pa(v,D,0,P.sortObjects),E.finish(),O!==null&&O.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(Mt,Ut),Se=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Se&&Ft.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&At.beginShadows();const k=b.state.shadowsArray;if(Lt.render(k,v,D),jt===!0&&At.endShadows(),(z&&T.hasRenderPass())===!1){const vt=E.opaque,ft=E.transmissive;if(b.setupLights(),D.isArrayCamera){const St=D.cameras;if(ft.length>0)for(let Et=0,Ot=St.length;Et<Ot;Et++){const Vt=St[Et];Xl(vt,ft,v,Vt)}Se&&Ft.render(v);for(let Et=0,Ot=St.length;Et<Ot;Et++){const Vt=St[Et];Wl(E,v,Vt,Vt.viewport)}}else ft.length>0&&Xl(vt,ft,v,D),Se&&Ft.render(v),Wl(E,v,D)}rt!==null&&X===0&&(Y.updateMultisampleRenderTarget(rt),Y.updateRenderTargetMipmap(rt)),z&&T.end(P),v.isScene===!0&&v.onAfterRender(P,v,D),gt.resetDefaultState(),q=-1,et=null,x.pop(),x.length>0?(b=x[x.length-1],Y.setTextureUnits(b.state.textureUnits),jt===!0&&At.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,O!==null&&O.renderEnd()};function pa(v,D,W,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ht)){z&&ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Xt);const vt=Q.update(v),ft=v.material;ft.visible&&E.push(v,vt,ft,W,ke.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ht))){const vt=Q.update(v),ft=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ke.copy(v.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ke.copy(vt.boundingSphere.center)),ke.applyMatrix4(v.matrixWorld).applyMatrix4(Xt)),Array.isArray(ft)){const St=vt.groups;for(let Et=0,Ot=St.length;Et<Ot;Et++){const Vt=St[Et],yt=ft[Vt.materialIndex];yt&&yt.visible&&E.push(v,vt,yt,W,ke.z,Vt,D)}}else ft.visible&&E.push(v,vt,ft,W,ke.z,null,D)}}const pt=v.children;for(let vt=0,ft=pt.length;vt<ft;vt++)pa(pt[vt],D,W,z)}function Wl(v,D,W,z){const{opaque:k,transmissive:pt,transparent:vt}=v;b.setupLightsView(W),jt===!0&&At.setGlobalState(P.clippingPlanes,W),z&&g.viewport(it.copy(z)),k.length>0&&us(k,D,W),pt.length>0&&us(pt,D,W),vt.length>0&&us(vt,D,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xl(v,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const yt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:yt?qn:dn,minFilter:Bi,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const pt=b.state.transmissionRenderTarget[z.id],vt=z.viewport||it;pt.setSize(vt.z*P.transmissionResolutionScale,vt.w*P.transmissionResolutionScale);const ft=P.getRenderTarget(),St=P.getActiveCubeFace(),Et=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(he),$t=P.getClearAlpha(),$t<1&&P.setClearColor(16777215,.5),P.clear(),Se&&Ft.render(W);const Ot=P.toneMapping;P.toneMapping=Xn;const Vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),jt===!0&&At.setGlobalState(P.clippingPlanes,z),us(v,W,z),Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt),re.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let ie=0,De=D.length;ie<De;ie++){const ge=D[ie],{object:ue,geometry:qe,material:_t,group:je}=ge;if(_t.side===Pn&&ue.layers.test(z.layers)){const Zt=_t.side;_t.side=cn,_t.needsUpdate=!0,Yl(ue,W,z,qe,_t,je),_t.side=Zt,_t.needsUpdate=!0,yt=!0}}yt===!0&&(Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,St,Et),P.setClearColor(he,$t),Vt!==void 0&&(z.viewport=Vt),P.toneMapping=Ot}function us(v,D,W){const z=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pt=v.length;k<pt;k++){const vt=v[k],{object:ft,geometry:St,group:Et}=vt;let Ot=vt.material;Ot.allowOverride===!0&&z!==null&&(Ot=z),ft.layers.test(W.layers)&&Yl(ft,D,W,St,Ot,Et)}}function Yl(v,D,W,z,k,pt){O!==null&&k.isNodeMaterial&&O.setObject(v,k),v.onBeforeRender(P,D,W,z,k,pt),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(P,D,W,z,v,pt),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,P.renderBufferDirect(W,D,z,k,v,pt),k.side=Hi,k.needsUpdate=!0,P.renderBufferDirect(W,D,z,k,v,pt),k.side=Pn):P.renderBufferDirect(W,D,z,k,v,pt),v.onAfterRender(P,D,W,z,k,pt)}function hs(v,D,W){D.isScene!==!0&&(D=an);const z=H.get(v),k=b.state.lights,pt=b.state.shadowsArray,vt=k.state.version,ft=ot.getParameters(v,k.state,pt,D,W,b.state.lightProbeGridArray),St=ot.getProgramCacheKey(ft);let Et=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;const Ot=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=st.get(v.envMap||z.environment,Ot),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",Fn),Et=new Map,z.programs=Et);let Vt=Et.get(St);if(Vt!==void 0){if(z.currentProgram===Vt&&z.lightsStateVersion===vt)return $l(v,ft),Vt}else ft.uniforms=ot.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,W,ft),v.onBeforeCompile(ft,P),Vt=ot.acquireProgram(ft,St),Et.set(St,Vt),z.uniforms=ft.uniforms;const yt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=At.uniform),$l(v,ft),z.needsLights=yh(v),z.lightsStateVersion=vt,z.needsLights&&(yt.ambientLightColor.value=k.state.ambient,yt.lightProbe.value=k.state.probe,yt.sunLights.value=k.state.sun,yt.sunLightShadows.value=k.state.sunShadow,yt.directionalLights.value=k.state.directional,yt.directionalLightShadows.value=k.state.directionalShadow,yt.spotLights.value=k.state.spot,yt.spotLightShadows.value=k.state.spotShadow,yt.rectAreaLights.value=k.state.rectArea,yt.ltc_1.value=k.state.rectAreaLTC1,yt.ltc_2.value=k.state.rectAreaLTC2,yt.pointLights.value=k.state.point,yt.pointLightShadows.value=k.state.pointShadow,yt.hemisphereLights.value=k.state.hemi,yt.sunShadowMatrix.value=k.state.sunShadowMatrix,yt.sunShadowCascade.value=k.state.sunShadowCascade,yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,yt.spotLightMatrix.value=k.state.spotLightMatrix,yt.spotLightMap.value=k.state.spotLightMap,yt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Vt,z.uniformsList=null,Vt}function ql(v){if(v.uniformsList===null){const D=v.currentProgram.getUniforms();v.uniformsList=Vs.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function $l(v,D){const W=H.get(v);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function vh(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=v.length;W<z;W++){const k=v[W];if(k.texture!==null&&k.boundingBox.containsPoint(S))return k}return null}function Mh(v,D,W,z,k){D.isScene!==!0&&(D=an),Y.resetTextureUnits();const pt=D.fog,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,ft=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:qt.workingColorSpace,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Et=st.get(z.envMap||vt,St),Ot=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!W.morphAttributes.position,ie=!!W.morphAttributes.normal,De=!!W.morphAttributes.color;let ge=Xn;z.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ge=P.toneMapping);const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,qe=ue!==void 0?ue.length:0,_t=H.get(z),je=b.state.lights;if(jt===!0&&(de===!0||v!==et)){const pe=v===et&&z.id===q;At.setState(z,v,pe)}let Zt=!1;z.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==je.state.version||_t.outputColorSpace!==ft||k.isBatchedMesh&&_t.batching===!1||!k.isBatchedMesh&&_t.batching===!0||k.isBatchedMesh&&_t.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&_t.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&_t.instancing===!1||!k.isInstancedMesh&&_t.instancing===!0||k.isSkinnedMesh&&_t.skinning===!1||!k.isSkinnedMesh&&_t.skinning===!0||k.isInstancedMesh&&_t.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&_t.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&_t.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&_t.instancingMorph===!1&&k.morphTexture!==null||_t.envMap!==Et||z.fog===!0&&_t.fog!==pt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==At.numPlanes||_t.numIntersection!==At.numIntersection)||_t.vertexAlphas!==Ot||_t.vertexTangents!==Vt||_t.morphTargets!==yt||_t.morphNormals!==ie||_t.morphColors!==De||_t.toneMapping!==ge||_t.morphTargetsCount!==qe||!!_t.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Zt=!0):(Zt=!0,_t.__version=z.version);let _n=_t.currentProgram;Zt===!0&&(_n=hs(z,D,k),O&&z.isNodeMaterial&&O.onUpdateProgram(z,_n,_t));let On=!1,xi=!1,qi=!1;const le=_n.getUniforms(),Re=_t.uniforms;if(g.useProgram(_n.program)&&(On=!0,xi=!0,qi=!0),z.id!==q&&(q=z.id,xi=!0),_t.needsLights){const pe=vh(b.state.lightProbeGridArray,k);_t.lightProbeGrid!==pe&&(_t.lightProbeGrid=pe,xi=!0)}if(On||et!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),le.setValue(U,"projectionMatrix",v.projectionMatrix),le.setValue(U,"viewMatrix",v.matrixWorldInverse);const Mi=le.map.cameraPosition;Mi!==void 0&&Mi.setValue(U,ve.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&le.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),et!==v&&(et=v,xi=!0,qi=!0)}if(_t.needsLights&&(je.state.sunShadowMap.length>0&&le.setValue(U,"sunShadowMap",je.state.sunShadowMap,Y),je.state.directionalShadowMap.length>0&&le.setValue(U,"directionalShadowMap",je.state.directionalShadowMap,Y),je.state.spotShadowMap.length>0&&le.setValue(U,"spotShadowMap",je.state.spotShadowMap,Y),je.state.pointShadowMap.length>0&&le.setValue(U,"pointShadowMap",je.state.pointShadowMap,Y)),k.isSkinnedMesh){le.setOptional(U,k,"bindMatrix"),le.setOptional(U,k,"bindMatrixInverse");const pe=k.skeleton;pe&&(pe.boneTexture===null&&pe.computeBoneTexture(),le.setValue(U,"boneTexture",pe.boneTexture,Y))}k.isBatchedMesh&&(le.setOptional(U,k,"batchingTexture"),le.setValue(U,"batchingTexture",k._matricesTexture,Y),le.setOptional(U,k,"batchingIdTexture"),le.setValue(U,"batchingIdTexture",k._indirectTexture,Y),le.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&le.setValue(U,"batchingColorTexture",k._colorsTexture,Y));const vi=W.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&I.update(k,W,_n),(xi||_t.receiveShadow!==k.receiveShadow)&&(_t.receiveShadow=k.receiveShadow,le.setValue(U,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Re.envMapIntensity.value=D.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=i_()),xi){if(le.setValue(U,"toneMappingExposure",P.toneMappingExposure),_t.needsLights&&Sh(Re,qi),pt&&z.fog===!0&&Tt.refreshFogUniforms(Re,pt),Tt.refreshMaterialUniforms(Re,z,tt,$,b.state.transmissionRenderTarget[v.id]),_t.needsLights&&_t.lightProbeGrid){const pe=_t.lightProbeGrid;Re.probesSH.value=pe.texture,Re.probesMin.value.copy(pe.boundingBox.min),Re.probesMax.value.copy(pe.boundingBox.max),Re.probesResolution.value.copy(pe.resolution)}Vs.upload(U,ql(_t),Re,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vs.upload(U,ql(_t),Re,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(U,"center",k.center),le.setValue(U,"modelViewMatrix",k.modelViewMatrix),le.setValue(U,"normalMatrix",k.normalMatrix),le.setValue(U,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const pe=z.uniformsGroups;for(let Mi=0,$i=pe.length;Mi<$i;Mi++){const Zl=pe[Mi];nt.update(Zl,_n),nt.bind(Zl,_n)}}return _n}function Sh(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function yh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(v,D,W){const z=H.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=D,H.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){const W=H.get(v);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,W=0){rt=v,Z=D,X=W;let z=null,k=!1,pt=!1;if(v){const ft=H.get(v);if(ft.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(v.viewport),Dt.copy(v.scissor),Ct=v.scissorTest,g.viewport(it),g.scissor(Dt),g.setScissorTest(Ct),q=-1;return}else if(ft.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(ft.__hasExternalTextures)Y.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ot=v.depthTexture;if(ft.__boundDepthTexture!==Ot){if(Ot!==null&&H.has(Ot)&&(v.width!==Ot.image.width||v.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}const St=v.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(pt=!0);const Et=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[D])?z=Et[D][W]:z=Et[D],k=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?z=H.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?z=Et[W]:z=Et,it.copy(v.viewport),Dt.copy(v.scissor),Ct=v.scissorTest}else it.copy(xt).multiplyScalar(tt).floor(),Dt.copy(zt).multiplyScalar(tt).floor(),Ct=Ue;if(W!==0&&(z=V),g.bindFramebuffer(U.FRAMEBUFFER,z)&&g.drawBuffers(v,z),g.viewport(it),g.scissor(Dt),g.setScissorTest(Ct),k){const ft=H.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,W)}else if(pt){const ft=D;for(let St=0;St<v.textures.length;St++){const Et=H.get(v.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,Et.__webglTexture,W,ft)}}else if(v!==null&&W!==0){const ft=H.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ft.__webglTexture,W)}q=-1};function Kl(v){const D=H.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=A.textureFormatReadable(v.format),D.__typeReadable=A.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,W,z,k,pt,vt,ft=0){if(!(v&&v.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St){g.bindFramebuffer(U.FRAMEBUFFER,St);try{const Et=v.textures[ft],Ot=Et.format,Vt=Et.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const yt=Kl(Et);if(yt.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(yt.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&W>=0&&W<=v.height-k&&U.readPixels(D,W,z,k,ut.convert(Ot),ut.convert(Vt),pt)}finally{const Et=rt!==null?H.get(rt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,D,W,z,k,pt,vt,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&vt!==void 0&&(St=St[vt]),St)if(D>=0&&D<=v.width-z&&W>=0&&W<=v.height-k){g.bindFramebuffer(U.FRAMEBUFFER,St);const Et=v.textures[ft],Ot=Et.format,Vt=Et.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ft);const yt=Kl(Et);if(yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ie),U.bufferData(U.PIXEL_PACK_BUFFER,pt.byteLength,U.STREAM_READ),U.readPixels(D,W,z,k,ut.convert(Ot),ut.convert(Vt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const De=rt!==null?H.get(rt).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,De);const ge=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await id(U,ge,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ie),U.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,W=0){const z=Math.pow(2,-W),k=Math.floor(v.image.width*z),pt=Math.floor(v.image.height*z),vt=D!==null?D.x:0,ft=D!==null?D.y:0;Y.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,vt,ft,k,pt),g.unbindTexture()},this.copyTextureToTexture=function(v,D,W=null,z=null,k=0,pt=0){let vt,ft,St,Et,Ot,Vt,yt,ie,De;const ge=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(W!==null)vt=W.max.x-W.min.x,ft=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Ot=W.min.y,Vt=W.isBox3?W.min.z:0;else{const Re=Math.pow(2,-k);vt=Math.floor(ge.width*Re),ft=Math.floor(ge.height*Re),v.isDataArrayTexture?St=ge.depth:v.isData3DTexture?St=Math.floor(ge.depth*Re):St=1,Et=0,Ot=0,Vt=0}z!==null?(yt=z.x,ie=z.y,De=z.z):(yt=0,ie=0,De=0);const ue=ut.convert(D.format),qe=ut.convert(D.type);let _t;D.isData3DTexture?(Y.setTexture3D(D,0),_t=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),_t=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),_t=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const je=g.getParameter(U.UNPACK_ROW_LENGTH),Zt=g.getParameter(U.UNPACK_IMAGE_HEIGHT),_n=g.getParameter(U.UNPACK_SKIP_PIXELS),On=g.getParameter(U.UNPACK_SKIP_ROWS),xi=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,ge.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),g.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),g.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt);const qi=v.isDataArrayTexture||v.isData3DTexture,le=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){const Re=H.get(v),vi=H.get(D),pe=H.get(Re.__renderTarget),Mi=H.get(vi.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,pe.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let $i=0;$i<St;$i++)qi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(v).__webglTexture,k,Vt+$i),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(D).__webglTexture,pt,De+$i)),U.blitFramebuffer(Et,Ot,vt,ft,yt,ie,vt,ft,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||H.has(v)){const Re=H.get(v),vi=H.get(D);g.bindFramebuffer(U.READ_FRAMEBUFFER,F),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let pe=0;pe<St;pe++)qi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,k,Vt+pe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,k),le?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vi.__webglTexture,pt,De+pe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vi.__webglTexture,pt),k!==0?U.blitFramebuffer(Et,Ot,vt,ft,yt,ie,vt,ft,U.COLOR_BUFFER_BIT,U.NEAREST):le?U.copyTexSubImage3D(_t,pt,yt,ie,De+pe,Et,Ot,vt,ft):U.copyTexSubImage2D(_t,pt,yt,ie,Et,Ot,vt,ft);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else le?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(_t,pt,yt,ie,De,vt,ft,St,ue,qe,ge.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,pt,yt,ie,De,vt,ft,St,ue,ge.data):U.texSubImage3D(_t,pt,yt,ie,De,vt,ft,St,ue,qe,ge):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pt,yt,ie,vt,ft,ue,qe,ge.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pt,yt,ie,ge.width,ge.height,ue,ge.data):U.texSubImage2D(U.TEXTURE_2D,pt,yt,ie,vt,ft,ue,qe,ge);g.pixelStorei(U.UNPACK_ROW_LENGTH,je),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Zt),g.pixelStorei(U.UNPACK_SKIP_PIXELS,_n),g.pixelStorei(U.UNPACK_SKIP_ROWS,On),g.pixelStorei(U.UNPACK_SKIP_IMAGES,xi),pt===0&&D.generateMipmaps&&U.generateMipmap(_t),g.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){Z=0,X=0,rt=null,g.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Zc={type:"change"},xl={type:"start"},qu={type:"end"},Os=new Iu,Jc=new ni,s_=Math.cos(70*Me.DEG2RAD),Ne=new w,on=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qa=1e-6;class a_ extends af{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xr.ROTATE,MIDDLE:xr.DOLLY,RIGHT:xr.PAN},this.touches={ONE:gr.ROTATE,TWO:gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new fi,this._lastTargetPosition=new w,this._quat=new fi().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tc,this._sphericalDelta=new Tc,this._scale=1,this._panOffset=new w,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new w,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=l_.bind(this),this._onPointerDown=o_.bind(this),this._onPointerUp=c_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=f_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=u_.bind(this),this._onMouseMove=h_.bind(this),this._interceptControlDown=__.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=oe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zc),this.update(),this.state=oe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=on:i>Math.PI&&(i-=on),r<-Math.PI?r+=on:r>Math.PI&&(r-=on),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ne.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new w(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<s_?this.object.lookAt(this.target):(Jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(Jc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qa||this._lastTargetPosition.distanceToSquared(this.target)>qa?(this.dispatchEvent(Zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?on/60*this.autoRotateSpeed*t:on/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ne.copy(r).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(on*this._rotateDelta.x/e.clientHeight),this._rotateUp(on*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function o_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function l_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function c_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qu),this.state=oe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function u_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case xr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case xr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(xl)}function h_(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function d_(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qu))}function f_(n){this.enabled!==!1&&this._handleKeyDown(n)}function p_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case gr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case gr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case gr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case gr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(xl)}function m_(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function g_(n){this.enabled!==!1&&n.preventDefault()}function __(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vr=new w;function vn(n,t,e,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Vr.copy(t),Vr[i]=0,Vr.normalize();const l=.5*a/(a+o),h=1-Vr.angleTo(n)/c;return Math.sign(Vr[e])===1?h*l:o/(a+o)+l+l*(1-h)}class vl extends _i{constructor(t=1,e=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new w,l=new w,h=new w(t,e,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,_=f.length/6,M=new w,m=.5/a;for(let p=0,y=0;p<f.length;p+=3,y+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*s,f[p+1]=h.y*Math.sign(c.y)+l.y*s,f[p+2]=h.z*Math.sign(c.z)+l.z*s,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/_)){case 0:M.set(1,0,0),d[y+0]=vn(M,l,"z","y",s,i),d[y+1]=1-vn(M,l,"y","z",s,e);break;case 1:M.set(-1,0,0),d[y+0]=1-vn(M,l,"z","y",s,i),d[y+1]=1-vn(M,l,"y","z",s,e);break;case 2:M.set(0,1,0),d[y+0]=1-vn(M,l,"x","z",s,t),d[y+1]=vn(M,l,"z","x",s,i);break;case 3:M.set(0,-1,0),d[y+0]=1-vn(M,l,"x","z",s,t),d[y+1]=1-vn(M,l,"z","x",s,i);break;case 4:M.set(0,0,1),d[y+0]=1-vn(M,l,"x","y",s,t),d[y+1]=1-vn(M,l,"y","x",s,e);break;case 5:M.set(0,0,-1),d[y+0]=vn(M,l,"x","y",s,t),d[y+1]=1-vn(M,l,"y","x",s,e);break}}static fromJSON(t){return new vl(t.width,t.height,t.depth,t.segments,t.radius)}}function v_(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,c=new Xe;let l=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let _=0;_<d.count;++_)f.push(d.getX(_)+h);h+=n[u].attributes.position.count}c.setIndex(f)}for(const h in s){const f=Qc(s[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let M=0;M<a[h].length;++M)d.push(a[h][M][u]);const _=Qc(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}}return c}function Qc(n){let t,e,i,r=-1,s=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new Un(a,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let _=0;_<e;_++){const M=h.getComponent(u,_);o.setComponent(u+f,_,M)}}else a.set(h.array,c);c+=h.count*e}return r!==void 0&&(o.gpuType=r),o}const $a=new Map;function Sn(n){return $a.has(n)||$a.set(n,new as({color:n,roughness:.85})),$a.get(n)}function L(n,t,e,i,r,s,a,o,c=!1){const l=new ee(c?new vl(r,s,a,2,Math.min(.09,r/4,s/4,a/4)):new _i(r,s,a),Sn(o));return l.position.set(t,e,i),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function Rn(n,t,e,i,r,s,a=[1,1,1]){const o=new ee(new gl(r,12,10),Sn(s));return o.position.set(t,e,i),o.scale.set(...a),o.castShadow=!0,n.add(o),o}function M_(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,t.opacity=1,n.userData.dynamic=!0,n}function ri(n,t,e,i,r,s=3,a="#f2c65a"){const o=document.createElement("canvas");o.width=768,o.height=192;const c=o.getContext("2d");c.fillStyle=a,c.fillRect(0,0,768,192),c.fillStyle="#263f40",c.fillRect(0,0,768,20),c.fillRect(0,172,768,20);const l=Math.min(68,590/Math.max(5,t.length)*2.15);c.fillStyle="#233d42",c.font=`900 ${l}px Barlow, sans-serif`,c.textAlign="center",c.textBaseline="middle",c.fillText(t,376,90);const h=new dl(o);h.colorSpace=nn;const f=new _e;f.position.set(e,i,r),n.add(f),L(f,0,0,-.035,s,s/4,.1,2506560,!0);const u=new ee(new Yi(s*.94,s*.235),new Dr({map:h,side:Pn}));u.position.z=.022,f.add(u);for(const d of[-s*.43,s*.43])Rn(f,d,s*.085,.04,.035,16313807);return f}function S_(n,t,e=7391353,i=!1){const r=new _e,s=i?1.65:2.35,a=i?1.15:1.55,o=new as({color:e,emissive:e,emissiveIntensity:.16,transparent:!0,opacity:.86,roughness:.8}),c=new ee(new _i(s,.055,a),o);c.position.y=.04,c.receiveShadow=!0,c.userData.dynamic=!0,r.add(c);const l=(m,p,y,C)=>{L(r,m,.13,p,.38,.18,.12,16314847,!0).rotation.y=C<0?Math.PI:0,L(r,m+y*.13,.13,p+C*.13,.12,.18,.38,16314847,!0)};if(l(-s/2+.18,-a/2+.12,-1,-1),l(s/2-.18,-a/2+.12,1,-1),l(-s/2+.18,a/2-.12,-1,1),l(s/2-.18,a/2-.12,1,1),/truck|cargo|fleet/i.test(n)){L(r,0,.32,0,.95,.38,.55,4689056,!0),L(r,-.38,.34,0,.34,.44,.55,15645256,!0);for(const m of[-.32,.32])for(const p of[-.29,.29])Rn(r,m,.16,p,.12,3230043)}else if(/yard|grounds|production|home/i.test(n))L(r,0,.32,0,.74,.5,.62,8632491,!0),L(r,0,.61,0,.9,.12,.76,15842641,!0),L(r,0,.26,.33,.29,.36,.03,3562608);else if(/crew|strength/i.test(n))Rn(r,0,.62,0,.18,15449233),L(r,0,.3,0,.36,.38,.25,4427435,!0);else{L(r,0,.25,0,.66,.31,.5,4424559,!0);for(const m of[-.18,.18])L(r,m,.43,0,.13,.05,.46,16768136)}const h=document.createElement("canvas");h.width=640,h.height=210;const f=h.getContext("2d"),u=/LOCKED|MAX/.test(t),d=t==="FREE"||t==="ACCEPT";f.fillStyle="#203e50",f.beginPath(),f.roundRect(18,22,604,170,25),f.fill(),f.lineWidth=10,f.strokeStyle="#173344",f.stroke(),f.fillStyle=u?"#829295":d?"#70c895":"#f3bd4f",f.beginPath(),f.roundRect(29,33,582,48,[16,16,5,5]),f.fill(),f.fillStyle="#fff8e5",f.font="900 31px Nunito, sans-serif",f.textAlign="center",f.textBaseline="middle",f.fillText(n.toUpperCase().slice(0,25),320,57),f.fillStyle="#fff8e5",f.font="1000 60px Nunito, sans-serif",f.fillText(t,320,133),u||(f.fillStyle="#74d19a",f.beginPath(),f.arc(562,133,27,0,Math.PI*2),f.fill(),f.fillStyle="#173b4b",f.font="1000 31px Nunito",f.fillText(t.startsWith("$")?"$":"✓",562,134));for(const m of[40,600])f.fillStyle="#f8e5ab",f.beginPath(),f.arc(m,107,6,0,Math.PI*2),f.fill();const _=new dl(h);_.colorSpace=nn;const M=new Lu(new Pu({map:_,transparent:!0,depthTest:!0}));return M.position.set(0,i?1.16:1.38,0),M.scale.set(i?2.25:2.72,i?.74:.9,1),r.add(M),r}function y_(n,t,e,i,r,s=2){const a=document.createElement("canvas");a.width=512,a.height=150;const o=a.getContext("2d");o.fillStyle="#e9c65f",o.fillRect(0,0,512,150),o.fillStyle="#263f40",o.font="900 66px Barlow, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,256,78);const c=new dl(a);c.colorSpace=nn;const l=new ee(new Yi(s,s*150/512),new Dr({map:c}));l.position.set(e,i,r),n.add(l)}function $u(n=14983231,t=0){const e=new _e,i=new _e;e.add(i);const r=[15119758,10382672,13209191][t%3];L(i,0,1,0,.64,.66,.39,n,!0),L(i,0,.73,.02,.59,.25,.4,3296353,!0),L(i,0,1.08,.215,.08,.43,.025,16377270),L(i,-.18,1.13,.22,.13,.15,.025,16377270),Rn(i,0,1.65,.02,.36,r,[1,1.08,.93]),Rn(i,-.35,1.65,.02,.08,r),Rn(i,.35,1.65,.02,.08,r),Rn(i,0,1.61,.35,.08,r);for(const l of[-.13,.13])Rn(i,l,1.71,.324,.046,2435890),L(i,l,1.81,.32,.11,.035,.03,5323570,!0);L(i,0,1.485,.348,.085,.018,.018,11890529,!0),Rn(i,0,1.91,-.035,.35,t%2?5719095:2506572,[1.04,.43,1.03]),t%2===0&&L(i,0,1.91,.31,.49,.07,.29,3234931,!0),L(i,0,1.18,.225,.43,.34,.025,15721405,!0);for(const l of[-.27,.27])L(i,l,1.18,.233,.07,.55,.025,15721405,!0);const s=[],a=[],o=[],c=[];for(const l of[-1,1]){const h=new _e;h.position.set(l*.18,.7,0),i.add(h),L(h,0,-.14,0,.24,.3,.28,3296353,!0);const f=new _e;f.position.y=-.29,h.add(f),L(f,0,-.13,0,.23,.29,.27,3296353,!0),L(f,0,-.3,.07,.28,.18,.4,5132616,!0),o.push(f),s.push(h);const u=new _e;u.position.set(l*.39,1.24,0),i.add(u),L(u,0,-.13,0,.22,.36,.27,n,!0);const d=new _e;d.position.y=-.28,u.add(d),L(d,0,-.1,0,.18,.24,.2,r,!0),Rn(d,0,-.24,.015,.115,r),c.push(d),a.push(u)}return e.userData.rig={body:i,legs:s,arms:a},{root:e,animate(l,h,f=!1,u=!1){const d=u?13.5:8.4,_=u?.72:.42;i.position.y=h?Math.abs(Math.sin(l*d))*(u?.065:.035):Math.sin(l*1.8)*.008,i.rotation.z=h?Math.sin(l*d/2)*(u?.035:.018):0,i.rotation.x=u?.13:0,s.forEach((M,m)=>M.rotation.x=h?Math.sin(l*d+m*Math.PI)*_:0),o.forEach((M,m)=>M.rotation.x=h?Math.max(0,-Math.sin(l*d+m*Math.PI))*(u?.9:.4):0),c.forEach(M=>M.rotation.x=f?-.35:u?-.8:-.15),a.forEach((M,m)=>M.rotation.x=f?-1.12:h?-Math.sin(l*d+m*Math.PI)*(u?.62:.34):.02)}}}function Ml(n){const t=new _e;if(n===0||n===1){const e=n===0?2.28:1.44,i=n===0?13400401:6396560;L(t,0,.46,0,e,.5,1.4,i,!0),L(t,0,.95,-.57,e,.83,.24,i,!0);for(const s of[-1,1])L(t,s*(e/2-.12),.73,0,.22,.48,1.4,i,!0),L(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=n===0?2:1;for(let s=0;s<r;s++)L(t,(s-(r-1)/2)*.95,.76,.02,n===0?.91:1.05,.17,1.01,n===0?14721135:9287842,!0)}else if(n===2)L(t,0,.76,0,1.45,1.05,.17,2440008,!0),L(t,0,.77,.096,1.29,.89,.02,6655645),L(t,0,.18,0,.14,.3,.14,2440008),L(t,0,.05,0,.6,.1,.5,2440008);else if(n===3)L(t,0,.36,0,.71,.72,.71,12489310,!0),L(t,0,.726,0,.14,.015,.71,15324324),ri(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(n===4){const e=new ee(new $n(.29,.22,.49,12),Sn(14059109));e.position.y=.25,t.add(e);for(let i=0;i<7;i++){const r=i*2.4,s=Rn(t,Math.sin(r)*.18,.8+i%3*.11,Math.cos(r)*.18,.23,i%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(n===5){L(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)L(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),L(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(n===6){const e=new ee(new $n(.34,.4,.12,16),Sn(4215382));e.position.y=.06,t.add(e),L(t,0,.83,0,.08,1.55,.08,4215382);const i=new ee(new oa(.43,.62,16,1,!0),Sn(15321203));i.position.y=1.55,i.rotation.x=Math.PI,t.add(i)}else if(n===7)L(t,0,1.02,0,.95,1.95,.18,7756355,!0),L(t,0,1.02,.1,.76,1.7,.025,10207944,!0),L(t,0,.08,-.05,1.15,.16,.55,7756355,!0);else if(n===8){L(t,0,.78,0,2.35,1.42,1.22,3159611,!0),L(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),L(t,0,.92,.65,2.15,.13,.48,15526105);for(let e=0;e<10;e++)L(t,-1+e*.22,1.01,.76,.025,.12,.3,3225146);for(const e of[-.9,.9])L(t,e,.25,.2,.17,.5,.17,2435630)}else L(t,0,.42,0,.72,.82,.72,13081188,!0),ri(t,"FRAGILE",0,.45,.38,.72,"#efb36d");return t}const dr={front:.2,back:5.8,rampEnd:8.8,depth:7};function b_(n=7,t=0,e=0){const i=new _e;i.name="active-truck";const r=dr.front+n*.8,s=r-dr.front,a=(r+dr.front)/2,o=e?15777087:11437893,c=e>1?16052194:e?14935256:11448487;dr.back=r,dr.rampEnd=r+2.2,dr.depth=n,L(i,3,.55,a,3.3,.42,s+.2,3162186,!0),L(i,3,.735,a,3.2,.09,s,13350548),L(i,3,1.9,.15,3.3,2.65,.15,c);for(const d of[1.35,4.65]){L(i,d,.99,a,.1,.4,s+.2,c),L(i,d,2.8,a,.08,.1,s+.2,9808549);for(const _ of[.15,r+.05])L(i,d,1.95,_,.09,1.8,.09,12240831)}L(i,3,1.19,-1.05,3.2,1.65,2.1,o,!0),L(i,3,1.8,-2.12,2.82,.65,.04,6523029),L(i,3,2.03,-1.05,3.3,.14,2.2,16111479,!0),L(i,3,.63,-2.16,3.15,.28,.16,4150615,!0),L(i,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const d of[1.78,4.22])L(i,d,1.04,-2.23,.48,.24,.05,16770720,!0),L(i,d,1.58,-2.19,.19,.13,.06,14253140,!0);for(const d of[1.25,4.75])L(i,d,1.65,-1.25,.22,.15,.38,3164235,!0);for(const d of[1.37,4.63]){L(i,d,1.78,-1,.025,.55,1.5,6523029);for(const _ of[-1.2,r-.45]){const M=new ee(new $n(.46,.46,.28,16),Sn(2504510));M.rotation.z=Math.PI/2,M.position.set(d,.46,_),M.castShadow=!0,i.add(M);const m=new ee(new $n(.23,.23,.3,12),Sn(10203048));m.rotation.z=Math.PI/2,m.position.copy(M.position),i.add(m)}}for(const d of[1.8,4.2])L(i,d,.95,-2.13,.45,.22,.06,16772529,!0);if(e===0){L(i,1.34,1.18,1.25,.035,.42,.75,8281155,!0),L(i,4.66,2.18,2.7,.035,.3,.9,9658687,!0),L(i,2.35,2.08,-2.14,.55,.18,.025,8215107,!0),L(i,3.7,1.3,-2.205,.6,.1,.028,7296062,!0),L(i,1.38,1.95,3.25,.038,.7,1.1,9396293,!0),L(i,4.66,1.05,.8,.04,.3,.9,7493188,!0);const d=L(i,3,.58,-2.29,3.2,.2,.15,4740435,!0);d.rotation.z=.045;for(const[_,M,m]of[[2.45,1.82,.5],[3.48,1.78,-.45]]){const p=L(i,_,M,-2.149,.025,.55,.018,14279381);p.rotation.z=m}}if(e>=1){for(const d of[1.34,4.66])L(i,d,1.09,a,.035,.17,s,3768216);L(i,3,.61,-2.25,3.3,.18,.18,12965847,!0)}if(e>=2){L(i,3,2.16,-1.12,2.35,.2,1.2,4096407,!0);for(const d of[1.55,4.45])L(i,d,1.09,-2.27,.18,.35,.04,15334143,!0)}if(e>=3){for(const d of[1.6,4.4])L(i,d,.63,a,.13,.27,s-.2,15908675,!0);for(const d of[2.3,3.7])L(i,d,2.31,-1.25,.46,.12,.22,16758596,!0)}if(e>=4){L(i,3,.86,-2.28,1.3,.36,.09,2379623,!0);for(let d=0;d<4;d++)L(i,2.55+d*.3,.86,-2.34,.08,.25,.025,13624545);L(i,3,2.37,-.8,1.2,.08,.6,15850653,!0)}const l=new _e;l.position.set(3,.78,r),i.add(l),L(l,0,0,1.15,3.2,.09,2.3,8690328,!0);const h=new _e,f=new _e;if(h.position.set(1.4,1.75,r+.07),f.position.set(4.6,1.75,r+.07),i.add(h,f),L(h,.8,0,0,1.55,1.9,.08,c),L(f,-.8,0,0,1.55,1.9,.08,e?c:10001816),t){const d=new _e;d.name="shelf",L(d,1.7,1.55,1.35,.55,.08,2.1,7047042);for(const _ of[.35,2.35])L(d,1.7,.75,_,.08,1.6,.08,5402218);t>1&&L(d,1.7,2.2,1.35,.55,.08,2.1,7047042),i.add(d)}y_(i,e?"MOVECRAFT":"M • MOVING",3,1.18,-2.205,1.75);const u=M_(L(i,3,2.83,a,3.32,.09,s,e>1?14862703:10134942,!0));if(e>1)for(const d of[a-s*.32,a+s*.32])L(i,3,2.76,d,2.9,.08,.08,16044905);for(let d=0;d<=4;d++)L(i,1.4+d*.8,.788,a,.018,.008,s,15392707);for(let d=0;d<=n;d++)L(i,3,.79,.2+d*.8,3.2,.008,.018,15392707);return i.userData.rampPivot=l,i.userData.leftDoor=h,i.userData.rightDoor=f,i.userData.roof=u,i}const E_=4,T_=7,Qt=.8,jc=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17}];function A_(n){let t=n>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function w_(n=0){const t=A_(n*997+41),e=Math.min(6+Math.floor(n/2),9),i=n===0?[0,1,2,3,4,5]:Array.from({length:e},(s,a)=>(a+n*2)%jc.length);n>=2&&!i.includes(8)&&(i[i.length-1]=8);const r=[];return i.map((s,a)=>{const o=jc[s],c=o.w*Qt/2,l=o.d*Qt/2;let h=-3,f=2,u=!1;for(let d=0;d<250;d++){const _=-9.75+c+t()*(8.3-c*2),M=-4.75+l+t()*(8.7-l*2),m=(n+1)%2?Math.abs(M+.35)<l+.32:Math.abs(_+5.6)<c+.32,p=r.some(y=>Math.abs(_-y.x)<c+y.hw+.24&&Math.abs(M-y.z)<l+y.hd+.24);if(!m&&!p){h=Math.round(_*10)/10,f=Math.round(M*10)/10,u=!0;break}}if(!u)for(let d=-4.2+l;d<=4.1-l&&!u;d+=.45)for(let _=-9.7+c;_<=-1.5-c&&!u;_+=.45){const M=(n+1)%2?Math.abs(d+.35)<l+.24:Math.abs(_+5.6)<c+.24,m=r.some(p=>Math.abs(_-p.x)<c+p.hw+.16&&Math.abs(d-p.z)<l+p.hd+.16);!M&&!m&&(h=Math.round(_*10)/10,f=Math.round(d*10)/10,u=!0)}return r.push({x:h,z:f,hw:c,hd:l}),{...o,model:s,id:a,fragile:o.vulnerability>=7,vulnerability:o.vulnerability+Math.min(n*1.5,9),condition:100,secured:!1,fallen:!1,location:"pickup",x:0,z:0,pickupX:h,pickupZ:f,rotated:!1}})}function Ku(n=0){const t=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],e=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],i=["Linden District","Old Town","Market Square","Park Avenue","Harbor Quarter","Museum Island"],r=["Sunny Heights","Birch Road","New Town","Lake View","Warehouse District","Culture Yard"],s=w_(n),a=Math.round(s.reduce((o,c)=>o+c.value,0)*(1+Math.min(n,8)*.08));return{client:t[n%t.length],title:e[n%e.length],from:i[n%i.length],to:r[n%r.length],difficulty:n+1,items:s,reward:a}}function pn(n){return n.rotated?[n.d,n.w]:[n.w,n.d]}function Zu(n,t,e,i,r=E_,s=T_){const[a,o]=pn(t);return Number.isInteger(e)&&Number.isInteger(i)&&e>=0&&i>=0&&e+a<=r&&i+o<=s&&!n.some(c=>{if(c.id===t.id||c.location!=="truck")return!1;const[l,h]=pn(c);return e<c.x+l&&e+a>c.x&&i<c.z+h&&i+o>c.z})}const Pi=["supply","mill","assembly","paint","packing"],ki={supply:"Timber delivery",mill:"Wood processing",assembly:"Chair assembly",paint:"Paint booth",packing:"Pack & dispatch"},Ar={truck:"Truck restoration",cargo:"Longer cargo bay",gear:"Racks & tie-downs",worker:"Strength & stamina",yard:"Company grounds",hire:"Hire moving crew",fleet:"Buy fleet truck",factory:"Furniture production"},Sl={truck:4,cargo:3,gear:3,worker:4,yard:4,hire:8,fleet:6,factory:4};function Ju(){return{cash:450,jobs:0,earned:0,levels:{truck:0,cargo:0,gear:0,worker:0,yard:0,hire:0,fleet:0,factory:0},fleet:[],timber:0,parts:0,products:0,painted:0,packed:0,sold:0,production:0,supply:0,test:!0,contributions:{},stationLevels:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationProgress:{supply:0,mill:0,assembly:0,paint:0,packing:0},stationContributions:{}}}function R_(n){const t=Ju();return{...t,...n,levels:{...t.levels,...n?.levels},contributions:{...t.contributions,...n?.contributions},stationLevels:{...t.stationLevels,...n?.stationLevels},stationProgress:{...t.stationProgress,...n?.stationProgress},stationContributions:{...t.stationContributions,...n?.stationContributions}}}function yl(n,t){return Math.round({truck:650,cargo:800,gear:450,worker:400,yard:1e3,hire:700,fleet:1800,factory:3200}[t]*(1+n.levels[t]*.8))}function bl(n,t){return n.levels[t]>=Sl[t]?"Maximum level":t==="hire"&&n.levels.yard<1?"Build your first garage":t==="fleet"&&n.levels.yard<2?"Expand the yard to level 2":t==="fleet"&&n.levels.fleet>=n.levels.hire?"Hire a crew for the next truck":t==="factory"&&n.levels.yard<3?"Build the logistics hub (yard 3)":t==="factory"&&n.levels.hire<2?"Hire at least two crews":""}function C_(n,t){const e=bl(n,t);if(e)return e;const i=Math.max(0,yl(n,t)-(n.contributions?.[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.test&&(n.cash+=n.contributions?.[t]??0),n.contributions&&delete n.contributions[t],n.levels[t]++,t==="fleet"&&n.fleet.push({level:0,phase:0,completed:0}),"")}function Yo(n,t){n.cash+=Math.round(t),n.earned+=Math.round(t)}function P_(n,t){const e=n.fleet[t];if(!e||e.level>=4)return!1;const i=1e3*(e.level+1);return!n.test&&n.cash<i?!1:(n.test||(n.cash-=i),e.level++,!0)}function D_(n){return 48-n.level*5}function El(n,t){const e={supply:500,mill:700,assembly:950,paint:800,packing:850}[t];return Math.round(e*(1+n.stationLevels[t]*.9))}function Tl(n,t){return n.levels.factory<1?"Build the workshop first":n.stationLevels[t]>=3?"Maximum level":""}function L_(n,t){const e=Tl(n,t);if(e)return e;const i=Math.max(0,El(n,t)-(n.stationContributions[t]??0));return!n.test&&n.cash<i?`Need $${i}`:(n.test||(n.cash-=i),n.test&&(n.cash+=n.stationContributions[t]??0),delete n.stationContributions[t],n.stationLevels[t]++,"")}function Qu(n,t){return n.levels.factory<1?"Build the workshop first":t==="supply"?!n.test&&n.cash<24?"Need $24 for timber":"":t==="mill"?n.timber<1?"Collect timber first":"":t==="assembly"?n.parts<2?"Process two timber pieces first":"":t==="paint"?n.products<1?"Assemble a chair first":"":n.painted<1?"Paint a chair first":""}function ju(n,t){const e=Qu(n,t);return e||(t==="supply"?(n.test||(n.cash-=24),n.timber+=3,""):t==="mill"?(n.timber--,n.parts++,""):t==="assembly"?(n.parts-=2,n.products++,""):t==="paint"?(n.products--,n.painted++,""):(n.painted--,n.packed===0&&(n.supply=0),n.packed++,""))}function I_(n,t){let e=0;for(const i of n.fleet)for(i.phase+=t/D_(i);i.phase>=1;){i.phase--,i.completed++;const r=260+i.level*125;Yo(n,r),e+=r}if(n.levels.factory){const i={supply:8,mill:6,assembly:10,paint:7,packing:7};for(const r of Pi)if(n.stationLevels[r]>=2){const s=i[r]/(1+(n.stationLevels[r]-2)*.7+n.levels.factory*.08);if(n.stationProgress[r]+=t/s,n.stationProgress[r]>=1){const a=ju(n,r);n.stationProgress[r]=a?Math.min(.95,n.stationProgress[r]):n.stationProgress[r]-1}}if(n.packed>0?n.supply+=t:n.supply=0,n.supply>=10){n.supply=0,n.packed--,n.sold++;const r=190+n.levels.factory*35;Yo(n,r),e+=r}}return e}function U_(n){return n.levels.factory>=3?"FURNITURE EMPIRE":n.levels.factory?"FURNITURE MAKER":n.fleet.length?"FLEET OPERATOR":n.levels.yard?"LOCAL MOVERS":"ONE TRUCK. BIG DREAMS."}function N_(n){return n.levels.yard<1?"Build your first garage":n.levels.hire<1?"Hire your first moving crew":n.levels.yard<2?"Expand to a fleet yard":n.fleet.length<1?"Buy a truck for your crew":n.levels.yard<3?"Build your logistics hub":n.levels.factory<1?"Open your furniture workshop":Pi.some(t=>n.stationLevels[t]<2)?`Automate ${ki[Pi.find(t=>n.stationLevels[t]<2)]}`:n.levels.factory<4?"Grow your furniture production":"Build a six-truck furniture company"}const Wr=9,Ws=[50,80,122,150],tu=[...Ws,-42,198,242];function yn(n){n.removeFromParent(),n.traverse(t=>{t instanceof ee&&(t.geometry.dispose(),t.userData.owned&&t.material.dispose()),t instanceof Lu&&(t.material.map?.dispose(),t.material.dispose())})}function Sr(n){n.material=n.material.clone();const t=n.material;return t.transparent=!0,n.userData.owned=!0,n}function Al(n,t,e,i,r,s,a,o){const c=new Xe;c.setAttribute("position",new xe([-r/2,0,-s/2,r/2,0,-s/2,0,a,-s/2,-r/2,0,s/2,r/2,0,s/2,0,a,s/2],3)),c.setIndex([0,2,1,3,4,5,0,3,5,0,5,2,2,5,4,2,4,1]),c.computeVertexNormals();const l=new ee(c,Sn(o));return l.position.set(t,e,i),l.castShadow=!0,n.add(l),l}function Ka(n,t,e,i){L(n,t,.75,e,.2,1.5,.2,8411970);for(let r=0;r<3;r++){const s=i===1?new oa(1-r*.15,1.6,7):new pl(.9,1),a=new ee(s,Sn(i===2?15181958:i===1?3770233:r%2?7845223:5087096));a.position.set(t+(i===1?0:Math.sin(r*3)*.4),1.55+r*.4,e+Math.cos(r*3)*.2),a.castShadow=!0,n.add(a)}}function F_(n){n.updateMatrixWorld(!0);const t=new Map;n.traverse(e=>{if(e instanceof ee&&!e.userData.owned&&e.material instanceof as){const i=t.get(e.material)??[];i.push(e),t.set(e.material,i)}});for(const[e,i]of t){const r=i.map(o=>o.geometry.clone().applyMatrix4(o.matrixWorld)),s=v_(r);if(r.forEach(o=>o.dispose()),!s)continue;i.forEach(o=>{o.removeFromParent(),o.geometry.dispose()});const a=new ee(s,e);a.castShadow=a.receiveShadow=!0,n.add(a)}}function O_(){const n=new _e,t=[],e=[],i=new ee(new Yi(3e3,3e3),Sn(8959101));i.rotation.x=-Math.PI/2,i.position.set(72,-.08,0),i.receiveShadow=!0,n.add(i),L(n,72,-.01,12,520,.08,Wr,6649988);for(const r of[7,17])L(n,72,.04,r,520,.16,1,15130569);for(const r of[-37,39]){L(n,72,-.01,r,440,.08,Wr,7438987);for(const s of[-1,1])L(n,72,.035,r+s*5,440,.1,1,15130569);for(let s=-145;s<345;s+=5)L(n,s,.05,r,2,.02,.1,16116942)}for(const r of tu){L(n,r,-.005,1,Wr,.08,85,7438987);for(const s of[-1,1])L(n,r+s*5,.035,1,1,.1,85,15130569);for(let s=-35;s<40;s+=5)L(n,r,.05,s,.1,.02,2,15919055)}for(const r of tu)for(const s of[-37,12,39])L(n,r,.075,s,Wr+.25,.04,Wr+.25,6649988);for(let r=-150;r<350;r+=5)L(n,r,.05,12,2,.02,.1,16116942);for(const r of[36,108]){for(const a of[7.7,16.3]){L(n,r,2,a,18,4,.5,5666437,!0),t.push({x:r,z:a,w:18,d:.5});for(let o=-8;o<=8;o+=4)L(n,r+o,2.2,a,.5,4.4,.7,12634564,!0)}const s=Sr(L(n,r,4.35,12,19,.3,9.4,4218737,!0));e.push({mesh:s,bounds:{x:r,z:12,w:21,d:10}});for(let a=-6;a<=6;a+=3)L(n,r+a,3.7,8,1.2,.1,.12,16768138),L(n,r+a,3.7,16,1.2,.1,.12,16768138);ri(n,"CITY LINK",r-9,4.7,12,3.2,"#fbd477").rotation.y=-Math.PI/2}for(let r=-110;r<=270;r+=15)for(const s of[-45,-28,30,48]){if(s===-28&&r>-35&&r<38||Ws.some(l=>Math.abs(r-l)<9))continue;const a=Math.abs(r+s)%4,o=3.2+a*.6,c=[15979178,15132365,12638425,15121325][a];L(n,r,o/2,s,7,o,6,c,!0),Al(n,r,o,s,7.6,6.7,1.6,[5340808,11562577,6719369,7242391][a]);for(const l of[-2,2])L(n,r+l,1.7,s+3.02,1.25,1.1,.06,7649738),L(n,r+l,1.7,s+3.08,.08,1.1,.04,16380118);for(const l of[-1,1])for(const h of[-1.6,1.6])L(n,r+l*3.53,1.8,s+h,.08,1.25,1.15,16115917),L(n,r+l*3.58,1.8,s+h,.04,1.04,.94,7517382),L(n,r+l*3.61,1.8,s+h,.03,1.08,.055,16314327),L(n,r+h,1.8,s-3.04,1.2,1.25,.07,16115917),L(n,r+h,1.8,s-3.09,.97,1.04,.04,7517382),L(n,r+l*3.85,.38,s+h,.5,.5,1.4,5672306,!0);L(n,r+2,o+.7,s-1.3,.65,1.6,.7,10254435,!0),L(n,r+2,o+1.55,s-1.3,.85,.15,.9,14862759,!0);for(const l of[-1,1])L(n,r+l*3.7,o-.03,s,.14,.14,6.7,15325629);if(a===2){L(n,r,2.4,s+3.45,3.8,.18,1,4427402,!0);for(const l of[-1.7,1.7])L(n,r+l,1.2,s+3.7,.1,2.4,.1,15982275)}L(n,r,.9,s+3.02,.9,1.8,.08,4487041),Ka(n,r+4.6,s+2,a%3),L(n,r,0,s+4.3,7,.1,1.8,14996663),Math.abs(s)<35&&t.push({x:r,z:s,w:7.3,d:6.3})}for(let r=-100;r<270;r+=12)Ws.some(s=>Math.abs(r-s)<7)||Ka(n,r,22,Math.abs(r)%3),(r<-36||r>44)&&!Ws.some(s=>Math.abs(r-s)<7)&&Ka(n,r,-20,Math.abs(r+1)%3);for(let r=-18;r<175;r+=24)L(n,r,1.6,18.2,.12,3.2,.12,4744563),L(n,r,3.3,18,.65,.18,.4,16771506,!0);return F_(n),{root:n,barriers:t,roofs:e}}function wr(n,t,e=!1){const i=new _e,r=[],s=[],a=n-5.6,o=-.3,c=e?15259056:15656145;L(i,a,.015,o,10,.12,10.6,13807225);for(let u=0;u<20;u++)L(i,a-4.8+u*.5,.08,o,.016,.01,10.3,12557425);const l=(u,d,_,M)=>(r.push({x:u,z:d,w:_,d:M}),L(i,u,1.55,d,_,3.1,M,c,!0)),h=[l(a,-5.55,10,.22),l(a-5,o,.22,10.5),l(a+5,o,.22,10.5),l(a-3.15,4.95,3.7,.22),l(a+3.15,4.95,3.7,.22)];t%2?h.push(l(a-3.2,-.35,3.6,.15),l(a+3.2,-.35,3.6,.15)):h.push(l(a,-3.5,.15,3.8),l(a,3.3,.15,3.2));for(const u of[a-3,a+3])L(i,u,1.9,-5.4,1.5,1.3,.09,9291988),L(i,u,1.9,-5.32,.07,1.3,.05,16777215);const f=Sr(Al(i,a,3.2,o,10.6,11.1,2.05,e?5537671:12152400));h.forEach(Sr),s.push({mesh:f,bounds:{x:a,z:o,w:10.5,d:11},walls:h}),L(i,a,.04,6,2.5,.12,2.1,14731169);for(const u of[a-1.35,a+1.35])L(i,u,1.5,4.98,.18,3,.33,5406076);ri(i,e?"NEW HOME":"PICKUP",a,3,5.15,2.5,"#fff3d6"),L(i,a-2.6,.09,2.3,2.8,.025,2.3,14521975),L(i,a+2.7,.09,-3,2.8,.025,2.3,8241070);for(const u of[n+.6,n+5.4])L(i,u,.035,0,.12,.035,10,16511441);for(const u of[-5,5])L(i,n+3,.035,u,4.8,.035,.12,16511441);return{root:i,barriers:r,roofs:s}}function th(n){const t=new _e,e=[],i=[],r=n.levels.yard;if(L(t,r?3:-6,0,-5,r?44:22,.12,r?24:17,r?12699838:12101257),r){const s=12+r*3;L(t,-9,1.8,-14,s,3.6,.25,7444370);for(const o of[-9-s/2,-9+s/2])L(t,o,1.8,-9,.25,3.6,10,15064517),e.push({x:o,z:-9,w:.3,d:10});e.push({x:-9,z:-14,w:s,d:.3});const a=Sr(L(t,-9,3.75,-9,s+1,.25,11,4681087));i.push({mesh:a,bounds:{x:-9,z:-9,w:s+1,d:12}}),ri(t,r>2?"MOVECRAFT • LOGISTICS":"MOVECRAFT • GARAGE",-9,3.1,-3.8,7,"#ffe3a6");for(let o=0;o<3;o++)L(t,-15+o*5,.08,-9,.08,.03,8,16773836)}else{for(const a of[-15,-7])L(t,a,1.45,-8,.18,2.9,.18,8414796),L(t,a,1.45,-13,.18,2.9,.18,8414796);L(t,-11,1.35,-13,8,2.7,.12,7244672);const s=Sr(L(t,-11,2.95,-10.5,8.8,.15,6,10189148));s.rotation.z=.04,i.push({mesh:s,bounds:{x:-11,z:-10,w:9,d:7}});for(let a=0;a<5;a++)L(t,-14+a*1.6,3.05,-10,1.3,.06,5.2,a%2?7506307:11370587);for(let a=0;a<6;a++){const o=new ee(new _l(.32,.12,6,10),Sn(3688528));o.position.set(-16+a*.6,.2,-6),o.rotation.x=1.57,t.add(o)}ri(t,"A SMALL START",-11,2.15,-7.8,4,"#f5d28f")}if(L(t,-10,.55,-1,2.6,1.1,.8,5012609,!0),ri(t,"JOBS",-10,1.65,-.9,2,"#ffd168"),L(t,-23,1.3,-7,4.5,2.6,4,14860691,!0),Al(t,-23,2.6,-7,5,4.6,1.2,7903382),L(t,-23,1,-4.96,1,2,.08,5340547),e.push({x:-23,z:-7,w:4.6,d:4.1}),ri(t,"HOME",-23,2.3,-4.8,1.8,"#f7e5c3"),r>=2)for(let s=0;s<6;s++){const a=8+s*4.8;for(const o of[-2,2])L(t,a+o,.08,-8,.08,.03,10,16770480);L(t,a,.08,-13,4,.03,.08,16770480)}if(n.levels.factory){const s=[6,11.5,17,22.5,28],a=[12158291,5213853,15117902,14052959,6662540];L(t,17,.1,-23,34,.2,13,12175815),L(t,17,1.8,-29.5,34,3.6,.25,7444892);for(const l of[.1,33.9])L(t,l,1.8,-23,.22,3.6,13,7444892);const o=Sr(L(t,17,4,-23,35,.2,14,4615806));i.push({mesh:o,bounds:{x:17,z:-23,w:36,d:15}}),ri(t,"TIMBER  •  MILL  •  CHAIR  •  PAINT  •  SHIP",17,3.35,-29.35,13,"#fbd376"),L(t,17,.12,-20.2,31,.04,1,15327176);for(let l=0;l<5;l++){const h=s[l],f=n.stationLevels?.[["supply","mill","assembly","paint","packing"][l]]??0;L(t,h,.66,-23,4.1,1.2,3.5,3235696,!0),L(t,h,1.31,-23,4.15,.16,3.55,a[l],!0),L(t,h-1.65,.72,-20.75,.32,1.25,.4,2378846,!0),L(t,h-1.65,1.42,-20.75,.42,.14,.5,f>=2?7658653:15976542,!0);for(let u=0;u<f;u++)L(t,h-1.3+u*.42,1.55,-24.3,.28,.28,.28,7656352,!0)}for(let l=0;l<4;l++)L(t,6,.25+l*.18,-23,2.7,.15,.75,12158291,!0);for(const l of[5.2,6.8])L(t,l,.55,-21.9,.18,.75,1.6,15777100,!0);const c=new ee(new $n(.67,.67,.09,24),Sn(14477282));c.rotation.z=Math.PI/2,c.position.set(11.5,1.72,-23),t.add(c),L(t,11.5,1.77,-23.75,2.8,.1,.25,15777109,!0),L(t,11.5,2.18,-23,.18,.8,1.8,15320411,!0);for(const l of[15.5,18.5])L(t,l,2,-23,.22,1.45,.28,15250770,!0);L(t,17,2.7,-23,3.2,.28,.62,15250770,!0),L(t,17,2.25,-23,.32,.7,.32,7376278);for(const l of[21,24])L(t,l,2,-23,.25,1.55,2.8,14248798,!0);L(t,22.5,2.78,-23,3.25,.3,3,14248798,!0);for(let l=-24;l<-22;l+=.45)L(t,22.5,1.95,l,2.7,.035,.035,9426636);L(t,28,1.55,-23.5,3,.12,1.5,14272937,!0);for(const l of[27.2,28,28.8])L(t,l,1.72,-23.5,.65,.28,.65,13212513,!0);for(let l=26.5;l<29.8;l+=.45)L(t,l,1.48,-22.1,.12,.12,1.1,7903649);L(t,30.8,1.8,-28.9,4.2,3.2,.12,5666691,!0)}return{root:t,barriers:e,roofs:i}}function B_(n,t,e,i,r=7589002){const s=S_(n,t,r);return s.position.set(e,.08,i),s}function z_(n,t,e,i,r){if(Math.abs(n.x-t.x)<2.3)return 0;const s=(e.x-n.x)/(t.x-n.x),a=n.z+(t.z-n.z)*s;return s<0||s>1||Math.abs(a-e.z)>r/2+.1?0:Me.clamp(1-Math.abs(a-e.z)/Math.max(r,.5)*.65-Math.abs(n.z-t.z)*.08,.3,1)}function k_(n){return[1.4,1.4,1.4,.74,1.35,1.15,1.9,2.05,1.55,.9][n]??1}function fr(n,t,e){if(t<.7||e.now-n.hitAt<.3)return;n.hitAt=e.now;const i=Math.min(n.item.condition,Math.max(1,Math.round(t*(1+n.item.vulnerability*.075)/(1+e.gear*.15))));n.item.condition-=i,e.damage(n,i)}function qo(n,t){n.mesh.updateWorldMatrix(!0,!1),n.mesh.getWorldPosition(n.position);const e=n.mesh.getWorldQuaternion(new fi);t.truck.parent.attach(n.mesh),n.mesh.quaternion.copy(e);const i=n.velocity.clone();i.z-=t.speed,i.applyAxisAngle(new w(0,1,0),t.truck.rotation.y),n.velocity.copy(i),n.velocity.y=Math.max(1.8,Math.min(4,i.length()*.22)),n.angular.set(1.8,1.2,Math.sign(i.x||1)*2.4),n.mode="air",n.item.fallen=!0,n.item.secured=!1,n.ties=[],n.settled=!1}function G_(n,t,e){for(const r of n){if(r.mode==="air"){r.velocity.y-=9.81*t,r.position.addScaledVector(r.velocity,t),r.mesh.rotation.x+=r.angular.x*t,r.mesh.rotation.y+=r.angular.y*t,r.mesh.rotation.z+=r.angular.z*t,r.mesh.position.copy(r.position),r.mesh.updateMatrixWorld(!0);const M=new Cr().setFromObject(r.mesh),m=r.position.y-M.min.y+.08;r.position.y<=m&&(r.position.y=m,fr(r,Math.abs(r.velocity.y)*2,e),r.velocity.y=Math.abs(r.velocity.y)>.9?-r.velocity.y*.22:0,r.velocity.x*=Math.exp(-5*t),r.velocity.z*=Math.exp(-5*t),r.angular.multiplyScalar(Math.exp(-6*t)),r.velocity.length()<.2&&r.angular.length()<.1&&(r.velocity.set(0,0,0),r.angular.set(0,0,0),r.mode="ground",r.settled=!0)),r.mesh.position.copy(r.position);continue}if(r.mode!=="truck")continue;const[s,a]=pn(r.item),o=s*Qt/2,c=a*Qt/2,l=r.ties.reduce((M,m)=>M+m.quality,0),h=-e.yawRate*e.speed,f=e.acceleration,u=Math.hypot(h,f),d=1.3+e.gear*.2+l*9;u>d&&(r.velocity.x+=h*t*.65,r.velocity.z+=f*t*.65);for(const M of r.ties)M.rest&&(r.velocity.x+=(M.rest[0]-r.position.x)*M.quality*30*t,r.velocity.z+=(M.rest[2]-r.position.z)*M.quality*30*t);const _=(l?8:1.15)+e.gear*.2;r.velocity.multiplyScalar(Math.exp(-_*t)),r.position.addScaledVector(r.velocity,t);for(const M of[-1,1]){const m=M<0?1.4+o:4.6-o;if(M*(r.position.x-m)>0){const p=Math.abs(r.velocity.x);if(p>2.7&&!l){qo(r,e);break}r.position.x=m,r.velocity.x*=-.23,fr(r,p*2.8,e)}}if(r.mode==="truck"){if(r.position.z-c<.2){const M=Math.abs(r.velocity.z);r.position.z=.2+c,r.velocity.z=Math.abs(r.velocity.z)*.2,fr(r,M*2.5,e)}if(r.position.z+c>e.back){if(e.rearOpen&&!l){qo(r,e);continue}const M=Math.abs(r.velocity.z);r.position.z=e.back-c,r.velocity.z=-Math.abs(r.velocity.z)*.2,fr(r,M*2.5,e)}r.mesh.position.copy(r.position),r.mesh.rotation.x=Me.damp(r.mesh.rotation.x,Me.clamp(-r.velocity.z*.065,-.22,.22),9,t),r.mesh.rotation.z=Me.damp(r.mesh.rotation.z,Me.clamp(r.velocity.x*.065,-.22,.22),9,t)}}const i=n.filter(r=>r.mode==="truck");for(let r=0;r<i.length;r++)for(let s=r+1;s<i.length;s++){const a=i[r],o=i[s],[c,l]=pn(a.item),[h,f]=pn(o.item),u=o.position.x-a.position.x,d=o.position.z-a.position.z,_=(c+h)*Qt/2-Math.abs(u),M=(l+f)*Qt/2-Math.abs(d);if(_<=.001||M<=.001)continue;const m=_<M?"x":"z",p=m==="x"?_:M,y=Math.sign(m==="x"?u:d)||1,C=Math.abs(a.velocity[m]-o.velocity[m]),S=a.ties.length?0:1,E=o.ties.length?0:1,b=S+E;if(!b)continue;a.position[m]-=y*p*S/b,o.position[m]+=y*p*E/b;const R=(a.velocity[m]+o.velocity[m])*.25;a.velocity[m]=S?R:0,o.velocity[m]=E?R:0,fr(a,C*1.7,e),fr(o,C*1.7,e),a.mesh.position.copy(a.position),o.mesh.position.copy(o.position)}}function H_(n,t){const e=new w().fromArray(t.a),i=new w().fromArray(t.b),[r]=pn(n.item),s=Math.min(e.x,i.x),a=Math.max(e.x,i.x),o=n.position.x-r*Qt/2,c=n.position.x+r*Qt/2,l=n.position.y+k_(n.item.model)+.06,h=f=>new w(f,l,e.z+(i.z-e.z)*(f-e.x)/(i.x-e.x));return e.x<i.x?[e,h(Math.max(s,o)),h(Math.min(a,c)),i]:[e,h(Math.min(a,c)),h(Math.max(s,o)),i]}const wt=n=>document.querySelector(n);wt("#app").innerHTML=`<div id="world"></div><header><div class="brand"><b>M</b><span>MOVECRAFT<small>MOVING UP IN THE WORLD</small></span></div><div class="wallet"><small>COMPANY CASH</small><strong id="cash"></strong><span id="cash-mode"></span></div><button id="settings" title="Settings">⚙</button><button id="test-toggle" title="Test tools">🧪</button></header>
<div id="chapter"><span id="career"></span><strong id="milestone"></strong><div class="milestones"><i></i><i></i><i></i><i></i><i></i></div></div>
<aside id="job-card"><button id="job-toggle"><span class="job-icon">▣</span><span><small id="job-label">YOUR NEXT MOVE</small><strong id="job-title">Small beginnings</strong></span><b>⌄</b></button><div id="job-body"><div id="job-step"></div><div class="progress"><i id="job-progress"></i></div><div id="job-count"></div><div id="job-value"></div></div></aside>
<button id="company-toggle" class="side-button">▥ Company</button><aside id="company-panel" hidden><h2>Your company</h2><div id="company-stats"></div><div id="fleet-list"></div><p id="factory-stats"></p></aside>
<aside id="tests" hidden><h3>PLAYTEST WORKBENCH</h3><label><input id="free-money" type="checkbox"> Unlimited money</label><div class="test-grid"><button data-test="job">New job</button><button data-test="pack">Pack all</button><button data-test="secure">Secure all</button><button data-test="deliver">Deliver all</button><button data-test="home">Back to yard</button><button data-test="impact">Cargo drop test</button></div><h3>INSPECT EACH UPGRADE</h3><div id="upgrade-tests" class="test-grid"></div><h3>FURNITURE STATIONS</h3><div id="station-tests" class="test-grid"></div><button data-test="restart">Reset test career…</button></aside>
<div id="notice" role="status"></div><div id="nav"><b id="nav-arrow">▲</b><span><small>ROUTE</small><strong id="nav-label">Job board</strong></span><em id="nav-distance">0 m</em></div><div id="waypoint"></div><div id="purchase" hidden><strong id="purchase-name"></strong><div class="progress"><i id="purchase-progress"></i></div><small>STAND STILL TO BUILD</small></div><div id="hint"><b id="hint-key">E</b><span id="hint-text"></span></div><div id="vitals"><span>ENERGY</span><div class="progress"><i id="energy"></i></div><b id="strap-count"></b></div><nav id="camera-controls"><button id="camera-follow" title="Follow">◎</button><button id="zoom-in">＋</button><button id="zoom-out">−</button><button id="help">?</button></nav><footer><button data-action="interact"><b>E</b><span>Interact</span></button><button data-action="cab"><b>F</b><span>Cab</span></button><button data-action="strap"><b>Q</b><span>Tie down</span></button><button data-action="rotate"><b>R</b><span>Rotate</span></button><button data-action="rear"><b>G</b><span>Ramp</span></button></footer><div id="touch"><button data-key="KeyW">▲</button><button data-key="KeyA">◀</button><button data-key="KeyS">▼</button><button data-key="KeyD">▶</button><button data-key="ShiftLeft">RUN</button></div><dialog id="dialog"></dialog>`;let eh=!1,j=Ju(),He=null;try{He=JSON.parse(localStorage.getItem("movecraft-rewrite-v1")??"null"),He?.company&&(j=R_(He.company))}catch{}let $o=!0,Ko=.35,Za=!0,eu=null;const we=new Ud;we.background=new Wt(13032672);we.fog=new cl(13032672,115,215);const Zn=new r_({antialias:!0});Zn.setPixelRatio(Math.min(devicePixelRatio,1.5));Zn.shadowMap.enabled=!0;Zn.shadowMap.type=su;Zn.toneMapping=Qo;Zn.toneMappingExposure=1.15;wt("#world").appendChild(Zn.domElement);const be=new la(-18,18,12,-12,.1,450);be.position.set(22,29,26);be.zoom=1.45;const rn=new a_(be,Zn.domElement);rn.enablePan=!1;rn.enableDamping=!0;rn.minZoom=.55;rn.maxZoom=3.5;rn.minPolarAngle=.35;rn.maxPolarAngle=1.03;we.add(new jd(16775135,6588822,2));const mi=new nf(16772305,2.7);mi.position.set(-25,45,20);mi.castShadow=!0;mi.shadow.mapSize.set(2048,2048);Object.assign(mi.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:.1,far:100});mi.shadow.normalBias=.035;we.add(mi,mi.target);const wl=O_();we.add(wl.root);let yr=th(j),ui=wr(72,1),hi=wr(144,1,!0);we.add(yr.root,ui.root,hi.root);const Rl=$u(15313475),mt=Rl.root;mt.position.set(-6,0,1);we.add(mt);const Cl=new ee(new ml(.38,.46,32),new Dr({color:16773043,side:Pn}));Cl.rotation.x=-Math.PI/2;Cl.position.y=.04;mt.add(Cl);let kt,Ce=4.2,br=5,fn=Ku(0),Ze=!1,mn=!1,ce=null,me=!1,Fe=0,Ja=0,Xs=100,Gi=1,Xi=1,Zo=0,qr=0;const Kt=[],mr=new _e;we.add(mr);let Te=null,Ie=null,Rr=0,Ci=0,rs="",Ri=0,ln=0,Qa=0,ja=0,na=0,kn=0,to="",eo="",ia=-10,$r=!1,bn="";const ii=new w,ye=new Set,nh=new w(0,1,0),Ai=new ee(new _i(1,.04,1),new Dr({color:7460782,transparent:!0,opacity:.65}));we.add(Ai);Ai.visible=!1;let si=[],Ys=[],qs=[],$s=[],Wn=null;const ra={supply:6,mill:11.5,assembly:17,paint:22.5,packing:28},Oe=n=>kt.localToWorld(n.clone()),gi=n=>kt.worldToLocal(n.clone()),ih=()=>2+j.levels.gear*2,rh=()=>Kt.reduce((n,t)=>n+t.ties.length,0)+(Ie?1:0);function gn(n=500,t=.1){if($o)try{const e=eu??(eu=new AudioContext);e.resume();const i=e.createOscillator(),r=e.createGain();i.frequency.value=n,r.gain.setValueAtTime(Ko*.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+t),i.connect(r).connect(e.destination),i.start(),i.stop(e.currentTime+t)}catch{}}function Yt(n){wt("#notice").textContent=n,na=4,wt("#notice").classList.add("visible")}function Pl(n){ye.clear(),wt("#dialog").innerHTML=`<button class="close" aria-label="Close">×</button>${n}`,wt("#dialog").showModal(),wt("#dialog .close").onclick=()=>wt("#dialog").close()}function Dl(){const n=kt,t=n?.position.clone()??new w,e=n?.rotation.clone()??new pi;for(const r of Kt)r.mode==="truck"&&we.attach(r.mesh);n&&yn(n),br=5+j.levels.cargo*2,Ce=.2+br*.8,kt=b_(br,j.levels.gear,j.levels.truck),kt.position.copy(t),kt.rotation.copy(e),we.add(kt);for(const r of Kt)r.mode==="truck"&&(kt.add(r.mesh),r.mesh.position.copy(r.position));const i=new _e;i.position.set(4.68,1.2,-1.9),L(i,0,0,.65,.08,1.4,1.35,j.levels.truck?15777087:11437893,!0),L(i,.05,.45,.65,.03,.45,1.15,9091781),kt.add(i),kt.userData.cabDoor=i,bn="",sh()}function Ll(){yn(yr.root),yr=th(j),we.add(yr.root),Nl(),Nn()}function sh(){const n=i=>i*i*(3-2*i),t=n(Me.clamp((Gi-.5)*2,0,1)),e=n(Me.clamp(Gi*2,0,1));kt.userData.leftDoor.rotation.y=-t*2.6,kt.userData.rightDoor.rotation.y=t*2.6,kt.userData.rampPivot.rotation.x=Me.lerp(-Math.PI/2,Math.atan(.78/2.2),e),kt.userData.cabDoor&&(kt.userData.cabDoor.rotation.y=Zo*.95)}function os(n){n.mode==="truck"?(kt.add(n.mesh),n.mesh.position.copy(n.position)):n.mode==="hand"?(mt.add(n.mesh),n.mesh.position.set(0,.95,1)):(we.add(n.mesh),n.mesh.position.copy(n.position)),n.mesh.rotation.y=n.item.rotated?Math.PI/2:0}function ss(n=!1){if(Ze&&!mn&&!n)return Yt("Finish this move and collect payment first.");const t=Ze&&!mn;for(const e of Kt)yn(e.mesh);Kt.length=0,ce=null,Ie=null,Te=null,bn="",Rr=j.jobs,Ci=n&&t?(Ci+1)%3:Rr%3,rs="",Ri=0,fn=Ku(Math.max(j.jobs,Math.floor((j.levels.truck+j.levels.cargo+j.levels.worker)*.45))),Ze=!0,mn=!1,yn(ui.root),yn(hi.root),ui=wr(72,fn.difficulty),hi=wr(144,fn.difficulty,!0),we.add(ui.root,hi.root);for(const e of fn.items){const i={item:e,mesh:Ml(e.model),mode:"ground",position:new w(72+e.pickupX,.12,e.pickupZ),velocity:new w,angular:new w,ties:[],hitAt:-10,settled:!0};Kt.push(i),os(i)}Nn(),Yt("New move! Drive through the tunnel to the orange pickup house."),sn()}function ls(){return Ze&&Kt.length>0&&Kt.every(n=>n.mode==="delivered")}function ha(){return Math.round(fn.reward*Kt.reduce((n,t)=>n+t.item.condition,0)/(Math.max(1,Kt.length)*100)*(Kt.every(n=>n.item.condition===100)?1.1:1))}function ah(){if(!ls()||mn)return;const n=ha();Yo(j,n),j.jobs++,mn=!0,Nn(),gn(880,.3),Yt(`+$${n} · Move completed! Return to your yard.`),sn()}function Nn(){for(const e of si)yn(e.root);si=[];const n=(e,i,r,s,a,o,c)=>{const l=B_(i,r,0,0);l.position.copy(s),we.add(l),si.push({key:e,root:l,position:s,upgrade:a,fleet:o,station:c})};n("job","NEXT MOVE",Ze&&!mn?"ACTIVE":"ACCEPT",new w(-10,.06,1)),n("collect","COLLECT",`$${ha()}`,new w(137,.06,6.2)),si[si.length-1].root.visible=ls()&&!mn;const t={truck:Oe(new w(5.8,.05,-1)),cargo:Oe(new w(2.2,.84,1)),gear:Oe(new w(3.85,.84,1)),worker:new w(-23,.06,-2.5),yard:new w(-16,.06,-1),hire:new w(-4,.06,-3),fleet:new w(8,.06,-2),factory:new w(j.levels.factory?35:19,.06,-16)};for(const e of Object.keys(Ar)){const i=bl(j,e);n(e,Ar[e],i?j.levels[e]>=Sl[e]?"MAX":"LOCKED":j.test?"FREE":`$${Math.ceil(yl(j,e)-(j.contributions?.[e]??0))}`,t[e],e)}if(j.fleet.forEach((e,i)=>n(`fleet-${i}`,`TRUCK ${i+2} · LV ${e.level}`,e.level>=4?"MAX":j.test?"FREE":`$${(e.level+1)*1e3}`,new w(8+i*4.8,.05,-1),void 0,i)),j.levels.factory)for(const e of Pi){const i=Tl(j,e),r=j.stationLevels[e];n(`station-${e}`,`${ki[e]} · LV ${r}`,i?"MAX":j.test?"FREE":`$${Math.ceil(El(j,e)-(j.stationContributions[e]??0))}`,new w(ra[e],.06,-17.7),void 0,void 0,e)}}function oh(n){const t=C_(j,n);if(t)return Yt(t);["truck","cargo","gear"].includes(n)&&Dl(),["yard","hire","fleet","factory"].includes(n)?Ll():Nn(),gn(700,.2),Yt(`${Ar[n]} · Level ${j.levels[n]}`),sn()}function lh(n){const t=L_(j,n);if(t)return Yt(t);Ll(),gn(760,.2),Yt(`${ki[n]} · Level ${j.stationLevels[n]}${j.stationLevels[n]>=2?" · AUTOMATED":""}`),sn()}function Il(){if(!(me||Te||ce||Ie||Wn))return si.find(n=>n.root.visible&&Math.abs(mt.position.x-n.position.x)<.94&&Math.abs(mt.position.z-n.position.z)<.68&&Math.abs(mt.position.y-n.position.y)<.95)}function V_(n){for(const e of si)e.key==="truck"&&(e.position.copy(Oe(new w(5.8,.05,-1))),e.root.position.copy(e.position),e.root.visible=kt.position.x<32&&!me),(e.key==="cargo"||e.key==="gear")&&(e.position.copy(Oe(new w(e.key==="cargo"?2.2:3.85,.84,1))),e.root.position.copy(e.position),e.root.visible=kt.position.x<32&&Ir()&&!me);const t=Il();if(!t||ii.length()>.2){kn=0,to="",wt("#purchase").hidden=!0,t||(eo="");return}if(eo!==t.key&&(t.key!==to&&(kn=0,to=t.key),!(t.upgrade&&bl(j,t.upgrade))&&!(t.station&&Tl(j,t.station)))){if(kn+=n,t.upgrade&&!j.test){j.contributions??={};const e=yl(j,t.upgrade),i=j.contributions[t.upgrade]??0,r=Math.min(j.cash,e-i,e*n/1.8);j.cash-=r,j.contributions[t.upgrade]=i+r,kn=Math.min(kn,(i+r)/e*1.8)}if(t.station&&!j.test){const e=El(j,t.station),i=j.stationContributions[t.station]??0,r=Math.min(j.cash,e-i,e*n/1.8);j.cash-=r,j.stationContributions[t.station]=i+r,kn=Math.min(kn,(i+r)/e*1.8)}wt("#purchase").hidden=!1,wt("#purchase-name").textContent=t.key==="job"?"Accept the next move":t.key==="collect"?`Collect $${ha()}`:t.upgrade?Ar[t.upgrade]:t.station?ki[t.station]:"Upgrade fleet truck",wt("#purchase-progress").style.width=`${Math.min(100,kn/1.8*100)}%`,kn>=1.8&&(eo=t.key,kn=0,wt("#purchase").hidden=!0,t.key==="job"?ss():t.key==="collect"?ah():t.upgrade?oh(t.upgrade):t.station?lh(t.station):t.fleet!==void 0&&P_(j,t.fleet)&&(Nl(),Nn(),sn()))}}function Ir(){const n=gi(mt.position);return n.x>1.4&&n.x<4.6&&n.z>=.2&&n.z<=Ce&&mt.position.y>.6}function da(n){const t=gi(n);if(t.x>1.4&&t.x<4.6){if(t.z>=.2&&t.z<=Ce)return .78;if(Gi>.94&&t.z>Ce&&t.z<Ce+2.2)return .78*(Ce+2.2-t.z)/2.2}return 0}function Ul(){let n,t=1.8;for(const e of Kt){if(["hand","air","delivered"].includes(e.mode)||e.mode==="truck"&&!Ir())continue;const i=e.mesh.getWorldPosition(new w),r=Math.hypot(i.x-mt.position.x,i.z-mt.position.z);r<t&&Math.abs(i.y-mt.position.y)<1.5&&(n=e,t=r)}return n}function W_(n){const t=n.mesh.getWorldPosition(new w),[e,i]=pn(n.item),r=n.mode==="truck",s=r?n.position:t,a=[new w(s.x-e*Qt/2-.48,0,s.z),new w(s.x+e*Qt/2+.48,0,s.z),new w(s.x,0,s.z-i*Qt/2-.48),new w(s.x,0,s.z+i*Qt/2+.48)].map(h=>r?Oe(h.setY(.78)):h.setY(0)),o=a.filter(h=>!cs(h,.25)&&(!r||hh(h))),c=(o.length?o:a).sort((h,f)=>h.distanceToSquared(mt.position)-f.distanceToSquared(mt.position))[0];c.y=da(c);const l=Math.atan2(t.x-c.x,t.z-c.z);return{to:c,yaw:l,item:t}}function ch(){if(!(!j.levels.factory||me||Te||ce||Ie))return Pi.find(n=>Math.hypot(mt.position.x-ra[n],mt.position.z+20.2)<1.35)}function X_(n){const t=Qu(j,n);if(t)return Yt(t);Wn={key:n,time:0,duration:{supply:1.4,mill:2.4,assembly:3.2,paint:2.2,packing:2.4}[n]/(1+j.stationLevels[n]*.28)},mt.rotation.y=Math.PI,ii.set(0,0,0),gn(330)}function Y_(n){if(!Wn)return;const t=Wn;t.time+=n;const e=Math.min(1,t.time/t.duration),i=mt.userData.rig;if(i.body.position.y=Math.sin(e*Math.PI*6)*.025,i.body.rotation.x=.08+.08*Math.sin(e*Math.PI*4),i.arms.forEach((s,a)=>s.rotation.x=-.75-Math.sin(e*Math.PI*6+a*Math.PI)*.35),e<1)return;const r=ju(j,t.key);Wn=null,i.body.position.y=0,i.body.rotation.x=0,r?Yt(r):(Yt({supply:"Timber unloaded",mill:"Wood processed",assembly:"Simple chair assembled",paint:"Chair painted",packing:"Chair packed for dispatch"}[t.key]),gn(680,.18),sn())}function uh(){if(!ce)return null;const[n,t]=pn(ce.item),e=new w(0,0,.65+Math.max(n,t)*Qt/2).applyQuaternion(mt.quaternion).add(mt.position),i=gi(e),r=Math.round((i.x-1.4)/Qt-n/2),s=Math.round((i.z-.2)/Qt-t/2),a=Kt.map(l=>({...l.item,x:l.mode==="truck"?(l.position.x-1.4)/Qt-pn(l.item)[0]/2:l.item.x,z:l.mode==="truck"?(l.position.z-.2)/Qt-pn(l.item)[1]/2:l.item.z,location:l.mode==="truck"?"truck":"pickup"})),o=gi(mt.position),c=o.x>1.4+r*Qt-.18&&o.x<1.4+(r+n)*Qt+.18&&o.z>.2+s*Qt-.18&&o.z<.2+(s+t)*Qt+.18;return{x:r,z:s,w:n,d:t,valid:Zu(a,ce.item,r,s,4,br)&&!c}}function q_(){if(Te||me)return;const n=Il();if(n){n.key==="job"?ss():n.key==="collect"?ah():Yt("Stand inside the markers to build.");return}const t=ch();if(t){X_(t);return}if(ce){const o=ce,c=o.mesh.getWorldPosition(new w);let l,h;if(Ir()){const f=uh();if(!f.valid)return Yt("Leave room for yourself. Rotate or try another spot.");o.item.x=f.x,o.item.z=f.z,l=new w(1.4+(f.x+f.w/2)*Qt,.78,.2+(f.z+f.d/2)*Qt),h="truck"}else if(l=mt.position.clone().add(new w(0,0,1.1).applyQuaternion(mt.quaternion)),l.y=.12,h=mt.position.x>133.5&&mt.position.x<143.5&&mt.position.z>-5&&mt.position.z<4.9?"delivered":"ground",cs(l,.3))return Yt("There is a wall here. Step into the room.");we.attach(o.mesh),Te={kind:"drop",load:o,time:0,duration:.5,from:c,to:h==="truck"?Oe(l):l,mode:h},o.position.copy(l),ce=null;return}const e=Ul();if(!e)return Yt("Stand close to furniture.");if(e.ties.length)return Yt("Remove the tie-down with Q first.");const i=e.mesh.getWorldPosition(new w),r=W_(e),s=mt.position.clone(),a=Me.clamp(s.distanceTo(r.to)/3.8,.18,.55);we.attach(e.mesh),Te={kind:"lift",load:e,time:0,duration:a+(.62+e.item.weight*.34)/(1+j.levels.worker*.23),from:i,to:new w,mode:"hand",approachFrom:s,approachTo:r.to,approachYaw:r.yaw,approachDuration:a},e.mode="hand",e.item.fallen=!1,gn(260)}function $_(n){if(!Te)return;Te.time+=n;const t=Te,e=t.approachDuration??0,i=t.time<e,r=Math.min(1,Math.max(0,(t.time-e)/(t.duration-e))),s=r*r*(3-2*r),a=mt.userData.rig;if(i&&t.approachFrom&&t.approachTo){const c=Math.min(1,t.time/e),l=c*c*(3-2*c);if(mt.position.lerpVectors(t.approachFrom,t.approachTo,l),Rl.animate(ln,!0,!1,!1),t.approachYaw!==void 0){const h=Math.atan2(Math.sin(t.approachYaw-mt.rotation.y),Math.cos(t.approachYaw-mt.rotation.y));mt.rotation.y+=h*(1-Math.exp(-12*n))}t.load.mesh.position.copy(t.from);return}a.body.rotation.x=.42*Math.sin(r*Math.PI),a.body.position.y=-.19*Math.sin(r*Math.PI),a.arms.forEach(c=>c.rotation.x=-1.35*Math.sin(Math.min(1,r*1.35)*Math.PI/2));const o=t.kind==="lift"?Me.smoothstep(r,.18,.9):s;t.kind==="lift"&&t.to.copy(mt.position).add(new w(0,.95,1).applyQuaternion(mt.quaternion)),t.load.mesh.position.lerpVectors(t.from,t.to,o),t.load.mesh.rotation.x=Me.damp(t.load.mesh.rotation.x,0,8,n),t.load.mesh.rotation.z=Me.damp(t.load.mesh.rotation.z,0,8,n),t.time>=t.duration&&(t.load.mode=t.mode,t.kind==="lift"?(ce=t.load,mt.add(t.load.mesh),t.load.mesh.position.set(0,.95,1)):os(t.load),Te=null,a.body.rotation.x=0,a.body.position.y=0,gn(520),bn="",ls()&&(Nn(),Yt("Everything delivered. Collect payment outside!")),sn())}function nu(){const n=gi(mt.position);return new w(n.x<3?1.44:4.56,.92,Me.clamp(n.z,.3,Ce-.1))}function K_(){if(me||ce||Te||!Ir())return;if(Ie){const t=Ie.anchor,e=nu(),i=Ie.load,[r,s]=pn(i.item),a=z_(t,e,i.position,r*Qt,s*Qt);if(!a)return Yt("Hook the opposite wall so the strap crosses the furniture.");i.ties.push({a:t.toArray(),b:e.toArray(),quality:a,rest:i.position.toArray()}),i.item.secured=!0,Ie=null,bn="",gn(700),Yt(a>.75?"Tight and centered. Ready to travel.":"Angled tie-down: some movement is possible."),sn();return}const n=Ul();if(!n||n.mode!=="truck")return Yt("Stand beside the load near a side rail.");if(n.ties.length){n.ties.pop(),n.item.secured=n.ties.length>0,bn="",sn();return}if(rh()>=ih())return Yt("No straps left. Pack tightly or upgrade your gear.");Ie={load:n,anchor:nu()},gn(440),Yt("First hook attached. Carry the free end across and press Q."),bn=""}function Z_(){const n=[],t=(e,i)=>{for(let r=1;r<e.length;r++)n.push({a:e[r-1],b:e[r],color:i})};for(const e of Kt)if(e.mode==="truck")for(const i of e.ties)t(H_(e,i).map(Oe),i.quality>.75?16104771:15368273);for(Ie&&t([Oe(Ie.anchor),mt.position.clone().add(new w(.28,1.2,.1).applyQuaternion(mt.quaternion))],16303698);mr.children.length>n.length;)yn(mr.children[mr.children.length-1]);n.forEach(({a:e,b:i,color:r},s)=>{let a=mr.children[s];a||(a=new ee(new $n(.036,.036,1,6),new as),a.userData.owned=!0,mr.add(a));const o=i.clone().sub(e);a.scale.y=o.length(),a.position.copy(e).add(i).multiplyScalar(.5),a.quaternion.setFromUnitVectors(nh,o.normalize()),a.material.color.set(r)})}function J_(){if(me||Te||ce)return;const n=gi(mt.position);if(Math.hypot(n.x-3,n.z-Ce)>3)return Yt("Walk to the rear of your truck.");if(n.x>1.2&&n.x<4.8&&n.z>Ce-.2&&n.z<Ce+2.4)return Yt("Step to the side of the ramp.");Xi=Xi>.5?0:1,gn(300,.25)}function Q_(){if(!(Te||ce||Ie)){if(me){if(Math.abs(Fe)>.35)return Yt("Brake to a stop first.");me=!1,Fe=0,mt.visible=!0;let n=Oe(new w(5.5,0,-1));for(const t of[5.5,.5]){const e=Oe(new w(t,0,-1));if(!cs(e,.28)){n=e;break}}mt.position.copy(n),qr=1,window.setTimeout(()=>qr=0,850),sn();return}if(mt.position.distanceTo(Oe(new w(5.3,0,-1)))>2.2)return Yt("The driver door is at the front right.");me=!0,mt.visible=!1,qr=1,window.setTimeout(()=>qr=0,600),ii.set(0,0,0),Yt(Xi?"Rear open — cargo can fall out. Close it with G at the rear.":"W/S drive and brake. F exits when stopped.")}}function cs(n,t=.25){return[...wl.barriers,...yr.barriers,...ui.barriers,...hi.barriers].some(e=>Math.abs(n.x-e.x)<e.w/2+t&&Math.abs(n.z-e.z)<e.d/2+t)}function hh(n){if(n.x<-42||n.x>180||n.z<-34||n.z>25||cs(n))return!1;const t=gi(n);if(t.x>1.15&&t.x<4.85&&t.z>-2.4&&t.z<.2||Math.abs(da(n)-mt.position.y)>.22||t.z>=.2&&t.z<Ce&&(Math.abs(t.x-1.4)<.15||Math.abs(t.x-4.6)<.15))return!1;for(const e of Kt)if(e.mode==="truck"){const[i,r]=pn(e.item);if(Math.abs(t.x-e.position.x)<i*Qt/2+.08&&Math.abs(t.z-e.position.z)<r*Qt/2+.08)return!1}return!0}function j_(n){if(me||Te||Wn||wt("#dialog").open)return ii.set(0,0,0),$r=!1,!1;const t=Number(ye.has("KeyD")||ye.has("ArrowRight"))-Number(ye.has("KeyA")||ye.has("ArrowLeft")),e=Number(ye.has("KeyW")||ye.has("ArrowUp"))-Number(ye.has("KeyS")||ye.has("ArrowDown")),i=be.getWorldDirection(new w);i.y=0,i.normalize();const r=new w(-i.z,0,i.x).multiplyScalar(t).addScaledVector(i,e);$r=ye.has("ShiftLeft")&&!ce&&!Ie&&Xs>3&&r.lengthSq()>0,Xs=Me.clamp(Xs+n*($r?-27:16+j.levels.worker*2),0,100);const s=ce?Math.max(1.35,3.1-ce.item.weight*.25/(1+j.levels.worker*.3)):Ie?3:$r?6.7:3.9;r.normalize().multiplyScalar(s*(1+j.levels.worker*.07)),ii.lerp(r,1-Math.exp(-10*n));const a=mt.position.clone();for(let o=0;o<4;o++)for(const c of["x","z"]){const l=mt.position.clone();l[c]+=ii[c]*n/4,hh(l)&&(l.y=da(l),mt.position.copy(l))}if(ii.length()>.1){const o=Math.atan2(ii.x,ii.z),c=Math.atan2(Math.sin(o-mt.rotation.y),Math.cos(o-mt.rotation.y));mt.rotation.y+=c*(1-Math.exp(-14*n))}return a.distanceTo(mt.position)>.003}function tx(n){if(!me)return{acceleration:0,yawRate:0};const t=Number(ye.has("KeyW")||ye.has("ArrowUp"))-Number(ye.has("KeyS")||ye.has("ArrowDown")),e=Number(ye.has("KeyA")||ye.has("ArrowLeft"))-Number(ye.has("KeyD")||ye.has("ArrowRight")),i=Fe;Fe+=t*(t*Fe<0?10:4+j.levels.truck*.45)*n,t||(Fe*=Math.exp(-1.7*n)),!t&&Math.abs(Fe)<.04&&(Fe=0),Fe=Me.clamp(Fe,-4,8.5+j.levels.truck*1.3),Ja=Me.damp(Ja,e*.52,6,n);const r=Fe*Math.tan(Ja)/Math.max(3.1,Ce*.65),s=Oe(new w(3,0,(Ce-2.2)/2)),a=kt.position.clone(),o=kt.rotation.y;kt.rotation.y+=r*n,s.addScaledVector(new w(-Math.sin(kt.rotation.y),0,-Math.cos(kt.rotation.y)),Fe*n),kt.position.copy(s).sub(new w(3,0,(Ce-2.2)/2).applyAxisAngle(nh,kt.rotation.y)),kt.updateMatrixWorld(!0);let c=!1;for(const l of[1.25,4.75])for(const h of[-2.25,(Ce-2.2)/2,Ce])cs(Oe(new w(l,0,h)),.08)&&(c=!0);if((s.x<-35||s.x>177||s.z<-30||s.z>24)&&(c=!0),c&&(kt.position.copy(a),kt.rotation.y=o,Fe=0,ln-ia>.7)){ia=ln,gn(120,.18);for(const l of Kt)l.mode==="truck"&&!l.ties.length&&(l.velocity.z+=Math.abs(i)*.6)}return{acceleration:(Fe-i)/n,yawRate:r}}function Nl(){Ys.forEach(n=>yn(n.root)),Ys=[],qs.forEach(yn),qs=[],$s.forEach(yn),$s=[];for(let n=0;n<j.levels.hire;n++){const t=$u(n%2?4761009:15117649,n%3),e=Ml(3);e.scale.setScalar(.65),e.position.set(0,.9,.58),t.root.add(e),we.add(t.root),Ys.push(t)}if(j.fleet.forEach((n,t)=>{const e=new _e;e.name=`fleet-${t}`,L(e,0,1.05,0,2.7,1.7,2,15707460,!0),L(e,0,1.9,2.8,2.8,2.8,3.6,n.level>1?16048049:9221554,!0),L(e,0,1.65,-1.04,2.2,.55,.04,8501962),L(e,0,2.03,0,2.85,.18,2.1,16174952,!0),L(e,0,.53,-1.12,2.75,.2,.18,3626603,!0);for(const i of[-1,1])L(e,i*1.36,1.6,0,.04,.6,1.3,8501962),L(e,i*.95,.95,-1.06,.42,.2,.06,16772523,!0),L(e,i*1.43,1.05,2.8,.05,.23,3.3,15381834),L(e,i*1.1,1.35,4.63,.05,1.7,.04,7442072);L(e,0,1.45,4.64,.045,2,.035,7442072);for(const i of[-1.3,1.3])for(const r of[0,3.5]){const s=new ee(new $n(.4,.4,.25,12),new as({color:3163992}));s.rotation.z=Math.PI/2,s.position.set(i,.4,r),s.userData.owned=!0,e.add(s)}we.add(e),qs.push(e)}),j.levels.factory)for(let n=0;n<5;n++){const t=new _e;if(n<2)for(let e=0;e<3;e++)L(t,0,.12+e*.15,0,n?.8:1.2,.12,n?.35:.55,n?14202497:12158291,!0);if(n===2||n===3){const e=n===3?5810061:13146984;L(t,0,.62,0,.72,.12,.72,e,!0),L(t,0,.98,-.3,.72,.72,.12,e,!0);for(const i of[-.3,.3])for(const r of[-.28,.28])L(t,i,.3,r,.1,.6,.1,e,!0)}n===4&&(L(t,0,.42,0,.9,.82,.72,13212513,!0),L(t,0,.48,.365,.72,.08,.02,15913339)),we.add(t),$s.push(t)}}function ex(n){const t=I_(j,n);t&&na<=0&&Yt(`+$${t} · Your company is working`),Ys.forEach((e,i)=>{if(j.levels.factory&&i>=j.fleet.length){const r=Pi.filter(a=>j.stationLevels[a]>=2),s=r[(i-j.fleet.length)%Math.max(1,r.length)];if(e.root.visible=!!s,!s)return;e.root.position.set(ra[s],0,-20.2),e.root.rotation.y=Math.PI,e.animate(ln,!0,!1)}else{const r=j.fleet[i];e.root.visible=!r||r.phase<.15||r.phase>.85;const s=(Math.sin(ln*1.3+i)+1)/2;e.root.position.set(8+i*4.8,0,-3-s*6),e.root.rotation.y=Math.cos(ln*1.3+i)>0?Math.PI:0,e.animate(ln,!0,!0)}}),j.fleet.forEach((e,i)=>{const r=qs[i];if(!r)return;const s=8+i*4.8,a=e.phase;a<.15?(r.position.set(s,0,-9),r.rotation.y=0):a<.3?(r.position.set(s,0,-9+(a-.15)/.15*21),r.rotation.y=Math.PI):a<.55?(r.position.set(s+(a-.3)/.25*55,0,12),r.rotation.y=-Math.PI/2):a<.75?(r.position.set(s+55-(a-.55)/.2*55,0,14),r.rotation.y=Math.PI/2):a<.9?(r.position.set(s,0,14-(a-.75)/.15*23),r.rotation.y=0):(r.position.set(s,0,-9),r.rotation.y=0)}),$s.forEach((e,i)=>{const r=Pi[i],s=[j.timber,j.parts,j.products,j.painted,j.packed][i];e.position.set(ra[r],1.52+Math.sin(ln*3+i)*.025,-23),e.rotation.y=i>1?Math.sin(ln*1.4+i)*.04:0,e.visible=s>0})}function nx(n){const t=me?Oe(new w(3,0,2)):mt.position;for(const a of[...wl.roofs,...yr.roofs,...ui.roofs,...hi.roofs]){const o=Math.abs(t.x-a.bounds.x)<a.bounds.w/2+1&&Math.abs(t.z-a.bounds.z)<a.bounds.d/2+1;for(const c of[a.mesh,...a.walls??[]]){const l=c.material;l.opacity=Me.damp(l.opacity,o?.035:1,6,n),l.depthWrite=l.opacity>.5,c.castShadow=l.opacity>.5}}const e=gi(mt.position),i=!me&&e.x>1&&e.x<5&&e.z>-.1&&e.z<Ce+2.5,r=kt.userData.roof,s=r.material;s.opacity=Me.damp(s.opacity,i||me?.025:1,7,n),s.depthWrite=s.opacity>.5,r.castShadow=s.opacity>.5}function ix(){if(!Ze||mn)return{point:new w(-10,0,1),text:"Accept a move at your job board"};if(ls())return{point:new w(137,0,6.2),text:"Collect your payment"};const n=Kt.find(t=>t.mode==="ground"||t.mode==="air");return n?{point:n.position.clone(),text:n.item.fallen?"Recover the fallen furniture":"Pick up the furniture"}:{point:new w(138.4,0,1),text:"Unload inside the new home"}}function rx(n){if(!me)return n;const t=Oe(new w(3,0,(Ce-2.2)/2)),e=n.point.x>120?"delivery":n.point.x>55?"pickup":"";if(!e)return n;const i=e==="pickup"?75:147;if(Math.abs(t.x-i)<18)return{point:new w(i,0,7),text:`Park at the ${e} house`};rs!==e&&(rs=e,Ri=0);const r=e==="pickup"?50:122,s=e==="pickup"?80:150,a=Ci===1?-37:39,o=Ci===0?[new w(i,0,12),new w(i,0,7)]:[new w(r,0,12),new w(r,0,a),new w(s,0,a),new w(s,0,12),new w(i,0,7)];for(;Ri<o.length-1&&t.distanceTo(o[Ri])<6;)Ri++;return{point:o[Ri],text:Ci===0?`Follow the main road to ${e}`:`Follow route ${Ci===1?"B":"C"} to ${e}`}}function dh(){const n=ix(),t=rx(n),e=Kt.filter(d=>d.mode==="truck").length,i=Kt.filter(d=>d.mode==="delivered").length;wt("#cash").textContent=j.test?"∞":`$${Math.floor(j.cash).toLocaleString("en-US")}`,wt("#cash-mode").textContent=j.test?"TEST MONEY":`$${Math.floor(j.earned).toLocaleString("en-US")} earned`,wt("#career").textContent=U_(j),wt("#milestone").textContent=N_(j);const r=j.levels.factory?4:j.fleet.length?3:j.levels.hire?2:j.levels.yard?1:0;document.querySelectorAll(".milestones i").forEach((d,_)=>d.classList.toggle("done",_<=r)),wt("#job-title").textContent=mn?"Move completed!":Ze?fn.title:"Small beginnings",wt("#job-label").textContent=Ze?`MOVE ${Rr+1} · LEVEL ${fn.difficulty}`:"YOUR NEXT MOVE",wt("#job-step").textContent=t.text,wt("#job-progress").style.width=`${Ze?(e+i*2)/Kt.length/2*100:0}%`,wt("#job-count").textContent=Ze?`${e} in truck  ·  ${i}/${Kt.length} delivered`:"Your first customer is waiting",wt("#job-value").textContent=Ze?`${mn?"COLLECTED":"PAYDAY"}  $${ls()?ha():fn.reward}`:"Start with a job. Build an empire.",wt("#energy").style.width=`${Xs}%`,wt("#strap-count").textContent=`${rh()}/${ih()} STRAPS`;const s=me?Oe(new w(3,0,1)):mt.position,a=Math.round(s.distanceTo(t.point)),o=t.point.x-s.x,c=t.point.z-s.z,l=Math.atan2(o,c),h=me?Math.atan2(-Math.sin(kt.rotation.y),-Math.cos(kt.rotation.y)):mt.rotation.y;wt("#nav-arrow").style.transform=`rotate(${Me.radToDeg(l-h)}deg)`,wt("#nav-label").textContent=t.text,wt("#nav-distance").textContent=`${a} m`,wt("#waypoint").textContent=me?`${Math.round(Math.abs(Fe)*9)} km/h   ·   ${a} m to ${t.text.toLowerCase()}`:`${a} m · ${t.text}`;let f="E",u="Move with WASD · Hold Shift to sprint";if(Wn)u=`Working: ${ki[Wn.key]}`,f=`${Math.round(Wn.time/Wn.duration*100)}%`;else if(Te)u=`${Te.kind==="lift"?"Lifting":"Placing"} ${Te.load.item.name}`,f=`${Math.round(Te.time/Te.duration*100)}%`;else if(Ie)f="Q",u="Hook the free end on the opposite rail";else if(me)f="W S",u="Drive / brake · A D steer · F exit";else if(ce)u=Ir()?"Place furniture · R rotate":"Carry to the truck or into the delivery house";else if(Il())u="Stand inside the purchase markers",f="$";else{const d=ch();if(d)u=`Use ${ki[d]}`,f="E";else{const _=Ul(),M=gi(mt.position);_?(u=_.ties.length?`Untie ${_.item.name}`:`Lift ${_.item.name} · ${_.item.weight>=4?"HEAVY":_.item.fragile?"FRAGILE":"READY"}`,f=_.ties.length?"Q":"E"):Math.hypot(M.x-5.3,M.z+1)<2.2?(u="Enter your truck",f="F"):Math.hypot(M.x-3,M.z-Ce)<3&&(u=Xi?"Close doors & ramp":"Open doors & ramp",f="G")}}wt("#hint-key").textContent=f,wt("#hint-text").textContent=u,wt("#company-stats").innerHTML=`<div><b>${j.jobs}</b><span>YOUR MOVES</span></div><div><b>${j.levels.hire}</b><span>CREWS</span></div><div><b>${j.fleet.length}</b><span>FLEET TRUCKS</span></div><div><b>${j.sold}</b><span>FURNITURE SOLD</span></div>`,wt("#fleet-list").innerHTML=j.fleet.map((d,_)=>`<div class="fleet-row"><span>Truck ${_+2} · Level ${d.level}<small>${d.phase<.15?"Loading":d.phase<.75?"On a job":"Returning"} · ${d.completed} jobs</small></span><div class="progress"><i style="width:${d.phase*100}%"></i></div></div>`).join(""),wt("#factory-stats").textContent=j.levels.factory?`Timber ${j.timber} → Processed ${j.parts} → Chairs ${j.products} → Painted ${j.painted} → Packed ${j.packed}. ${j.sold} shipped.`:"Furniture production unlocks at yard level 3.",document.querySelectorAll("[data-upgrade]").forEach(d=>{const _=d.dataset.upgrade;d.textContent=`${Ar[_]} · ${j.levels[_]}/${Sl[_]}`}),document.querySelectorAll("[data-station]").forEach(d=>{const _=d.dataset.station;d.textContent=`${ki[_]} · ${j.stationLevels[_]}/3${j.stationLevels[_]>=2?" · AUTO":""}`})}function sn(){if(!eh)try{localStorage.setItem("movecraft-rewrite-v1",JSON.stringify({company:j,contract:fn,jobActive:Ze,jobPaid:mn,jobNumber:Rr,routeVariant:Ci,navLeg:rs,navIndex:Ri,truck:{position:kt.position.toArray(),yaw:kt.rotation.y,rear:Xi},player:mt.position.toArray(),loads:Kt.map(n=>({item:n.item,mode:n.mode==="hand"?"ground":n.mode,position:n.mode==="hand"?mt.position.toArray():n.position.toArray(),velocity:n.velocity.toArray(),rotation:n.mesh.rotation.toArray(),ties:n.ties,settled:n.settled}))}))}catch{}}function sx(){if(He)try{fn=He.contract??fn,Ze=!!He.jobActive,mn=!!He.jobPaid,Rr=He.jobNumber??0,Ci=He.routeVariant??Rr%3,rs=He.navLeg??"",Ri=He.navIndex??0,He.truck&&(kt.position.fromArray(He.truck.position),kt.rotation.y=He.truck.yaw,Gi=Xi=He.truck.rear),He.player&&mt.position.fromArray(He.player),Ze&&(yn(ui.root),yn(hi.root),ui=wr(72,fn.difficulty),hi=wr(144,fn.difficulty,!0),we.add(ui.root,hi.root));for(const n of He.loads??[]){const t={item:n.item,mesh:Ml(n.item.model),mode:n.mode,position:new w().fromArray(n.position),velocity:new w().fromArray(n.velocity??[0,0,0]),angular:new w,ties:n.ties??[],hitAt:-10,settled:n.settled};Kt.push(t),os(t),n.rotation&&t.mesh.rotation.fromArray(n.rotation)}}catch{Yt("Saved session could not be fully restored.")}}function iu(){(!Ze||mn)&&ss(!0),j.levels.cargo<3&&(j.levels.cargo=3,Dl()),ce=null,Te=null,Ie=null;for(const n of Kt)n.mode="ground",n.ties=[],n.item.secured=!1,n.item.rotated=!1;for(const n of Kt){let t=!1;for(const e of[!1,!0]){if(t)break;n.item.rotated=e;for(let i=0;i<br&&!t;i++)for(let r=0;r<4&&!t;r++){const s=Kt.map(a=>({...a.item,location:a.mode==="truck"?"truck":"pickup"}));if(Zu(s,n.item,r,i,4,br)){n.item.x=r,n.item.z=i;const[a,o]=pn(n.item);n.mode="truck",n.position.set(1.4+(r+a/2)*Qt,.78,.2+(i+o/2)*Qt),n.velocity.set(0,0,0),n.item.fallen=!1,t=!0}}}os(n)}bn="",Nn(),Yt(`${Kt.filter(n=>n.mode==="truck").length}/${Kt.length} packed. Test packing expands the cargo bay.`),sn()}function ax(n){if(Math.abs(Fe)>.35)return Yt("Stop before using test tools.");if(n==="job"&&ss(!0),n==="pack"&&iu(),n==="secure"){j.levels.gear=3;for(const t of Kt)t.mode==="truck"&&(t.ties=[{a:[1.44,.92,t.position.z],b:[4.56,.92,t.position.z],quality:1,rest:t.position.toArray()}],t.item.secured=!0);bn="",Nn()}if(n==="deliver"&&(Ze||ss(),Kt.forEach((t,e)=>{t.mode="delivered",t.ties=[],t.position.set(136+e%3*2.5,.12,-3+Math.floor(e/3)*2.5),os(t)}),ce=null,Te=null,Ie=null,Nn(),mt.position.set(138,0,6),me=!1,mt.visible=!0,Yt("Delivery complete. Step onto the payment field.")),n==="home"&&(mt.position.set(-6,0,1),me=!1,mt.visible=!0,Yt("Test teleport: player returned. Truck and cargo stay where they are.")),n==="impact"){Kt.some(e=>e.mode==="truck")||iu();const t=Kt.find(e=>e.mode==="truck");t&&(t.ties=[],t.velocity.set(6,0,1),qo(t,{truck:kt,speed:0}),bn="",Yt("Drop test: gravity, bounce, tumble, settle. Cargo stays where it lands."))}n==="restart"&&(Pl('<h2>Reset test career?</h2><p>This replaces your saved rewrite career with the shabby starting setup.</p><button id="confirm-reset">Reset career</button>'),wt("#confirm-reset").onclick=()=>{eh=!0,localStorage.removeItem("movecraft-rewrite-v1"),location.reload()}),sn()}const fh={interact:q_,cab:Q_,strap:K_,rotate:()=>{ce&&!Te&&(ce.item.rotated=!ce.item.rotated,gn(400))},rear:J_};document.querySelectorAll("[data-action]").forEach(n=>n.onclick=()=>fh[n.dataset.action]());document.querySelectorAll("[data-test]").forEach(n=>n.onclick=()=>ax(n.dataset.test));wt("#upgrade-tests").innerHTML=Object.keys(Ar).map(n=>`<button data-upgrade="${n}"></button>`).join("");wt("#station-tests").innerHTML=Pi.map(n=>`<button data-station="${n}"></button>`).join("");document.querySelectorAll("[data-upgrade]").forEach(n=>n.onclick=()=>{if(Math.abs(Fe)>.35)return Yt("Stop before upgrading.");const t=n.dataset.upgrade;oh(t);const e=si.find(i=>i.key===t);e&&(me=!1,mt.visible=!0,mt.position.copy(e.position).add(new w(0,0,2)),mt.position.y=da(mt.position),be.zoom=t==="yard"||t==="factory"||t==="fleet"?.9:1.6,be.updateProjectionMatrix())});document.querySelectorAll("[data-station]").forEach(n=>n.onclick=()=>{if(Math.abs(Fe)>.35)return Yt("Stop before upgrading.");const t=n.dataset.station;j.levels.factory||(j.levels.yard=Math.max(3,j.levels.yard),j.levels.hire=Math.max(2,j.levels.hire),j.levels.factory=1,Ll()),lh(t);const e=si.find(i=>i.station===t);e&&(me=!1,mt.visible=!0,mt.position.copy(e.position).add(new w(0,0,1.8)),be.zoom=.95,be.updateProjectionMatrix())});wt("#test-toggle").onclick=()=>{wt("#tests").hidden=!wt("#tests").hidden};wt("#company-toggle").onclick=()=>{wt("#company-panel").hidden=!wt("#company-panel").hidden};wt("#job-toggle").onclick=()=>wt("#job-body").classList.toggle("collapsed");wt("#free-money").checked=j.test;wt("#free-money").onchange=n=>{j.test=n.target.checked,Nn(),sn()};wt("#camera-follow").onclick=()=>{be.zoom=1.45,be.updateProjectionMatrix()};for(const[n,t]of[["zoom-in",1.2],["zoom-out",1/1.2]])wt(`#${n}`).onclick=()=>{be.zoom=Me.clamp(be.zoom*t,rn.minZoom,rn.maxZoom),be.updateProjectionMatrix()};wt("#settings").onclick=()=>{Pl(`<h2>Make yourself comfortable</h2><label>Sound effects <input id="sound" type="checkbox" ${$o?"checked":""}></label><label>Volume <input id="volume" type="range" min="0" max="1" step=".05" value="${Ko}"></label><label>Soft shadows <input id="shadows" type="checkbox" ${Za?"checked":""}></label><p>Progress saves automatically. Switch off test money in the workbench for career costs.</p>`),wt("#sound").onchange=n=>$o=n.target.checked,wt("#volume").oninput=n=>Ko=+n.target.value,wt("#shadows").onchange=n=>{Za=n.target.checked,Zn.shadowMap.enabled=Za}};wt("#help").onclick=()=>Pl("<h2>From mover to maker</h2><p>WASD / arrows move. Shift sprints. Drag to orbit, scroll or pinch to zoom.</p><p>E lifts and places. R rotates. F enters/exits the cab. W/S drives/brakes; A/D steers. G opens the rear; stand to its side.</p><p>Q hooks a strap at your position. Walk across the load and press Q again. A centered strap holds better.</p><p>Stand inside purchase markers to upgrade. Build a garage, hire crews, buy fleet trucks, then open the workshop. Timber costs money; finished furniture earns it back.</p>");window.addEventListener("keydown",n=>{if(wt("#dialog").open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft"].includes(n.code)&&(ye.add(n.code),n.preventDefault()),n.repeat))return;const t={KeyE:"interact",KeyF:"cab",KeyQ:"strap",KeyR:"rotate",KeyG:"rear"};t[n.code]&&fh[t[n.code]](),n.code==="Escape"&&(Ie=null,bn="")});window.addEventListener("keyup",n=>ye.delete(n.code));window.addEventListener("blur",()=>ye.clear());document.querySelectorAll("[data-key]").forEach(n=>{n.onpointerdown=t=>{n.setPointerCapture(t.pointerId),ye.add(n.dataset.key)},n.onpointerup=n.onpointercancel=()=>ye.delete(n.dataset.key)});function ph(){Zn.setSize(innerWidth,innerHeight);const n=innerWidth/innerHeight;be.left=-12*n,be.right=12*n,be.top=12,be.bottom=-12,rn.minZoom=Math.max(.55,n/4),be.zoom=Math.max(be.zoom,rn.minZoom),be.updateProjectionMatrix()}window.addEventListener("resize",ph);Dl();sx();Nl();Nn();ph();dh();rn.target.copy(mt.position);be.position.add(mt.position);rn.update();let ru=performance.now(),no=0;function mh(n){const t=Math.min((n-ru)/1e3,.1);ru=n,ln+=t,Gi=Me.damp(Gi,Xi,3,t),Zo=Me.damp(Zo,qr,8,t),sh();const e=j_(t);for(Rl.animate(ln,e,!!ce||!!Te||!!Ie,$r),$_(t),Y_(t),ce&&(ce.mesh.rotation.y=Me.damp(ce.mesh.rotation.y,ce.item.rotated?Math.PI/2:0,12,t)),no+=t;no>=1/60;){const a=tx(.016666666666666666);G_(Kt,1/60,{truck:kt,back:Ce,speed:Fe,yawRate:a.yawRate,acceleration:a.acceleration,rearOpen:Gi>.9,gear:j.levels.gear,now:ln,damage:(o,c)=>{ln-ia>.4&&(Yt(`${o.item.name} · −${c}% condition`),gn(150),ia=ln)}}),no-=1/60}ex(t),V_(t),nx(t);const i=me?Oe(new w(3,.6,(Ce-2)/2)):mt.position.clone().add(new w(0,.6,0)),r=i.clone().sub(rn.target);rn.target.copy(i),be.position.add(r),mi.position.copy(i).add(new w(-25,45,20)),mi.target.position.copy(i),rn.update();const s=JSON.stringify(Kt.map(a=>[a.mode,a.ties,a.mode==="truck"?a.position.toArray():null]));if((Ie||s!==bn||me)&&(Z_(),bn=s),Ai.visible=!!ce&&Ir(),Ai.visible){const a=uh();Ai.scale.set(a.w*Qt,1,a.d*Qt),Ai.position.copy(Oe(new w(1.4+(a.x+a.w/2)*Qt,.82,.2+(a.z+a.d/2)*Qt))),Ai.rotation.y=kt.rotation.y,Ai.material.color.set(a.valid?7529651:15822181)}na-=t,na<=0&&wt("#notice").classList.remove("visible"),ja+=t,Qa+=t,ja>.18&&(dh(),ja=0),Qa>5&&(sn(),Qa=0),Zn.render(we,be),requestAnimationFrame(mh)}requestAnimationFrame(mh);window.addEventListener("pagehide",sn);
