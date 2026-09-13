(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ko="186",Sr={ROTATE:0,DOLLY:1,PAN:2},vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uh=0,kl=1,hh=2,Hs=1,Zc=2,Yr=3,qi=0,cn=1,zn=2,li=0,Kr=1,Hl=2,Gl=3,Vl=4,dh=5,xr=100,fh=101,ph=102,mh=103,gh=104,_h=200,xh=201,vh=202,Mh=203,$c=204,Jc=205,Sh=206,yh=207,Eh=208,bh=209,Th=210,Ah=211,wh=212,Rh=213,Ch=214,Qa=0,ja=1,to=2,Jr=3,eo=4,no=5,io=6,ro=7,Qc=0,Ph=1,Dh=2,Vn=0,jc=1,tu=2,eu=3,Zo=4,nu=5,iu=6,ru=7,su=300,Ki=301,Tr=302,xa=303,va=304,ua=306,so=1e3,ai=1001,ao=1002,We=1003,Lh=1004,ms=1005,$e=1006,Ma=1007,Hi=1008,pn=1009,au=1010,ou=1011,Qr=1012,$o=1013,Yn=1014,kn=1015,qn=1016,Jo=1017,Qo=1018,jr=1020,lu=35902,cu=35899,uu=1021,hu=1022,Rn=1023,di=1026,Gi=1027,du=1028,jo=1029,Zi=1030,tl=1031,el=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,oo=35840,lo=35841,co=35842,uo=35843,ho=36196,fo=37492,po=37496,mo=37488,go=37489,Js=37490,_o=37491,xo=37808,vo=37809,Mo=37810,So=37811,yo=37812,Eo=37813,bo=37814,To=37815,Ao=37816,wo=37817,Ro=37818,Co=37819,Po=37820,Do=37821,Lo=36492,Io=36494,Uo=36495,No=36283,Fo=36284,Qs=36285,Oo=36286,Ih=3200,Bo=0,Uh=1,Ti="",en="srgb",js="srgb-linear",ta="linear",ee="srgb",Sa=7680,Nh=519,Fh=512,Oh=513,Bh=514,nl=515,zh=516,kh=517,il=518,Hh=519,fu=35044,Wl="300 es",Hn=2e3,ts=2001;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ea(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){const i=ea("canvas");return i.style.display="block",i}const Xl={};function na(...i){const t="THREE."+i.shift();console.log(t,...i)}function pu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=pu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Zt(...i){i=pu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function yr(...i){const t=i.join(" ");t in Xl||(Xl[t]=!0,It(...i))}function Wh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Xh={[Qa]:ja,[to]:io,[eo]:ro,[Jr]:no,[ja]:Qa,[io]:to,[ro]:eo,[no]:Jr};class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Zr=Math.PI/180,es=180/Math.PI;function ci(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function kt(i,t,e){return Math.max(t,Math.min(e,i))}function rl(i,t){return(i%t+t)%t}function Yh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function qh(i,t,e){return i!==t?(e-i)/(t-i):0}function $r(i,t,e){return(1-e)*i+e*t}function Kh(i,t,e,n){return $r(i,t,1-Math.exp(-e*n))}function Zh(i,t=1){return t-Math.abs(rl(i,t*2)-t)}function $h(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jh(i,t){return i+Math.random()*(t-i)}function td(i){return i*(.5-Math.random())}function ed(i){i!==void 0&&(Yl=i);let t=Yl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nd(i){return i*Zr}function id(i){return i*es}function rd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function od(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),d=a((t+n)/2),u=s((t-n)/2),h=a((t-n)/2),f=s((n-t)/2),_=a((n-t)/2);switch(r){case"XYX":i.set(o*d,l*u,l*h,o*c);break;case"YZY":i.set(l*h,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*h,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*d,o*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ne={DEG2RAD:Zr,RAD2DEG:es,generateUUID:ci,clamp:kt,euclideanModulo:rl,mapLinear:Yh,inverseLerp:qh,lerp:$r,damp:Kh,pingpong:Zh,smoothstep:$h,smootherstep:Jh,randInt:Qh,randFloat:jh,randFloatSpread:td,seededRandom:ed,degToRad:nd,radToDeg:id,isPowerOfTwo:rd,ceilPowerOfTwo:sd,floorPowerOfTwo:ad,setQuaternionFromProperEuler:od,normalize:ne,denormalize:wn},Tl=class Tl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;let Rt=Tl;class Ci{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3],h=s[a+0],f=s[a+1],_=s[a+2],M=s[a+3];if(u!==M||l!==h||c!==f||d!==_){let m=l*h+c*f+d*_+u*M;m<0&&(h=-h,f=-f,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const A=Math.acos(m),I=Math.sin(A);p=Math.sin(p*A)/I,o=Math.sin(o*A)/I,l=l*p+h*o,c=c*p+f*o,d=d*p+_*o,u=u*p+M*o}else{l=l*p+h*o,c=c*p+f*o,d=d*p+_*o,u=u*p+M*o;const A=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=A,c*=A,d*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[a],h=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+d*u+l*f-c*h,t[e+1]=l*_+d*h+c*u-o*f,t[e+2]=c*_+d*f+o*h-l*u,t[e+3]=d*_-o*u-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(r/2),u=o(s/2),h=l(n/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*f*_,this._y=c*f*u-h*d*_,this._z=c*d*_+h*f*u,this._w=c*d*u-h*f*_;break;case"YXZ":this._x=h*d*u+c*f*_,this._y=c*f*u-h*d*_,this._z=c*d*_-h*f*u,this._w=c*d*u+h*f*_;break;case"ZXY":this._x=h*d*u-c*f*_,this._y=c*f*u+h*d*_,this._z=c*d*_+h*f*u,this._w=c*d*u-h*f*_;break;case"ZYX":this._x=h*d*u-c*f*_,this._y=c*f*u+h*d*_,this._z=c*d*_-h*f*u,this._w=c*d*u+h*f*_;break;case"YZX":this._x=h*d*u+c*f*_,this._y=c*f*u+h*d*_,this._z=c*d*_-h*f*u,this._w=c*d*u-h*f*_;break;case"XZY":this._x=h*d*u-c*f*_,this._y=c*f*u-h*d*_,this._z=c*d*_+h*f*u,this._w=c*d*u+h*f*_;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],h=n+o+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(d-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-n*c,this._z=s*d+a*c+n*l-r*o,this._w=a*d-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Al=class Al{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),d=2*(o*e-s*r),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*d,this.y=n+l*d+o*c-s*u,this.z=r+l*u+s*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Al.prototype.isVector3=!0;let R=Al;const ya=new R,ql=new Ci,wl=class wl{constructor(t,e,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],_=n[8],M=r[0],m=r[3],p=r[6],A=r[1],I=r[4],S=r[7],E=r[2],b=r[5],w=r[8];return s[0]=a*M+o*A+l*E,s[3]=a*m+o*I+l*b,s[6]=a*p+o*S+l*w,s[1]=c*M+d*A+u*E,s[4]=c*m+d*I+u*b,s[7]=c*p+d*S+u*w,s[2]=h*M+f*A+_*E,s[5]=h*m+f*I+_*b,s[8]=h*p+f*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*s*d+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,h=o*l-d*s,f=c*s-a*l,_=e*u+n*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=u*M,t[1]=(r*c-d*n)*M,t[2]=(o*n-r*a)*M,t[3]=h*M,t[4]=(d*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return yr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return yr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return yr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wl.prototype.isMatrix3=!0;let Nt=wl;const Ea=new Nt,Kl=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ld(){const i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ee&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(r.r=Er(r.r),r.g=Er(r.g),r.b=Er(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?ta:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:t,whitePoint:n,transfer:ta,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const Yt=ld();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let er;class cd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{er===void 0&&(er=ea("canvas")),er.width=t.width,er.height=t.height;const r=er.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=er}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ea("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ud=0;class sl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ba(r[a].image)):s.push(ba(r[a]))}else s=ba(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}let hd=0;const Ta=new R;class Je extends Ui{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=ai,r=ai,s=$e,a=Hi,o=Rn,l=pn,c=Je.DEFAULT_ANISOTROPY,d=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=ci(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=su;Je.DEFAULT_ANISOTROPY=1;const Rl=class Rl{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const I=(c+1)/2,S=(f+1)/2,E=(p+1)/2,b=(d+h)/4,w=(u+M)/4,x=(_+m)/4;return I>S&&I>E?I<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(I),r=b/n,s=w/n):S>E?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=b/r,s=x/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=w/s,r=x/s),this.set(n,r,s,e),this}let A=Math.sqrt((m-_)*(m-_)+(u-M)*(u-M)+(h-d)*(h-d));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(u-M)/A,this.z=(h-d)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rl.prototype.isVector4=!0;let ye=Rl;class dd extends Ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Je(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new sl(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mu extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ca=class ca{constructor(t,e,n,r,s,a,o,l,c,d,u,h,f,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,d,u,h,f,_,M,m)}set(t,e,n,r,s,a,o,l,c,d,u,h,f,_,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ca().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const h=a*d,f=a*u,_=o*d,M=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*d,f=l*u,_=c*d,M=c*u;e[0]=h+M*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=f*o-_,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*d,f=l*u,_=c*d,M=c*u;e[0]=h-M*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*d,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*d,f=a*u,_=o*d,M=o*u;e[0]=l*d,e[4]=_*c-f,e[8]=h*c+M,e[1]=l*u,e[5]=M*c+h,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,f=a*c,_=o*l,M=o*c;e[0]=l*d,e[4]=M-h*u,e[8]=_*u+f,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=f*u+_,e[10]=h-M*u}else if(t.order==="XZY"){const h=a*l,f=a*c,_=o*l,M=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=h*u+M,e[5]=a*d,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*d,e[10]=M*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){const r=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(n,dn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(n,dn)),Mi.normalize(),gs.crossVectors(dn,Mi),r[0]=Mi.x,r[4]=gs.x,r[8]=dn.x,r[1]=Mi.y,r[5]=gs.y,r[9]=dn.y,r[2]=Mi.z,r[6]=gs.z,r[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],_=n[2],M=n[6],m=n[10],p=n[14],A=n[3],I=n[7],S=n[11],E=n[15],b=r[0],w=r[4],x=r[8],T=r[12],P=r[1],N=r[5],O=r[9],G=r[13],U=r[2],k=r[6],$=r[10],X=r[14],it=r[3],q=r[7],tt=r[11],nt=r[15];return s[0]=a*b+o*P+l*U+c*it,s[4]=a*w+o*N+l*k+c*q,s[8]=a*x+o*O+l*$+c*tt,s[12]=a*T+o*G+l*X+c*nt,s[1]=d*b+u*P+h*U+f*it,s[5]=d*w+u*N+h*k+f*q,s[9]=d*x+u*O+h*$+f*tt,s[13]=d*T+u*G+h*X+f*nt,s[2]=_*b+M*P+m*U+p*it,s[6]=_*w+M*N+m*k+p*q,s[10]=_*x+M*O+m*$+p*tt,s[14]=_*T+M*G+m*X+p*nt,s[3]=A*b+I*P+S*U+E*it,s[7]=A*w+I*N+S*k+E*q,s[11]=A*x+I*O+S*$+E*tt,s[15]=A*T+I*G+S*X+E*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],h=t[10],f=t[14],_=t[3],M=t[7],m=t[11],p=t[15],A=l*f-c*h,I=o*f-c*u,S=o*h-l*u,E=a*f-c*d,b=a*h-l*d,w=a*u-o*d;return e*(M*A-m*I+p*S)-n*(_*A-m*E+p*b)+r*(_*I-M*E+p*w)-s*(_*S-M*b+m*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-n*(s*d-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],h=t[10],f=t[11],_=t[12],M=t[13],m=t[14],p=t[15],A=e*o-n*a,I=e*l-r*a,S=e*c-s*a,E=n*l-r*o,b=n*c-s*o,w=r*c-s*l,x=d*M-u*_,T=d*m-h*_,P=d*p-f*_,N=u*m-h*M,O=u*p-f*M,G=h*p-f*m,U=A*G-I*O+S*N+E*P-b*T+w*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return t[0]=(o*G-l*O+c*N)*k,t[1]=(r*O-n*G-s*N)*k,t[2]=(M*w-m*b+p*E)*k,t[3]=(h*b-u*w-f*E)*k,t[4]=(l*P-a*G-c*T)*k,t[5]=(e*G-r*P+s*T)*k,t[6]=(m*S-_*w-p*I)*k,t[7]=(d*w-h*S+f*I)*k,t[8]=(a*O-o*P+c*x)*k,t[9]=(n*P-e*O-s*x)*k,t[10]=(_*b-M*S+p*A)*k,t[11]=(u*S-d*b-f*A)*k,t[12]=(o*T-a*N-l*x)*k,t[13]=(e*N-n*T+r*x)*k,t[14]=(M*I-_*E-m*A)*k,t[15]=(d*E-u*I+h*A)*k,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,d=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+n,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,d=a+a,u=o+o,h=s*c,f=s*d,_=s*u,M=a*d,m=a*u,p=o*u,A=l*c,I=l*d,S=l*u,E=n.x,b=n.y,w=n.z;return r[0]=(1-(M+p))*E,r[1]=(f+S)*E,r[2]=(_-I)*E,r[3]=0,r[4]=(f-S)*b,r[5]=(1-(h+p))*b,r[6]=(m+A)*b,r[7]=0,r[8]=(_+I)*w,r[9]=(m-A)*w,r[10]=(1-(h+M))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=nr.set(r[0],r[1],r[2]).length();const o=nr.set(r[4],r[5],r[6]).length(),l=nr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yn.copy(this);const c=1/a,d=1/o,u=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=Hn,l=!1){const c=this.elements,d=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===Hn)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===ts)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Hn,l=!1){const c=this.elements,d=2/(e-t),u=2/(n-r),h=-(e+t)/(e-t),f=-(n+r)/(n-r);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===Hn)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===ts)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ca.prototype.isMatrix4=!0;let Ee=ca;const nr=new R,yn=new Ee,pd=new R(0,0,0),md=new R(1,1,1),Mi=new R,gs=new R,dn=new R,$l=new Ee,Jl=new Ci;class Pi{constructor(t=0,e=0,n=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],f=r[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jl.setFromEuler(this),this.setFromQuaternion(Jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class gu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gd=0;const Ql=new R,ir=new Ci,Jn=new Ee,_s=new R,Nr=new R,_d=new R,xd=new Ci,jl=new R(1,0,0),tc=new R(0,1,0),ec=new R(0,0,1),nc={type:"added"},vd={type:"removed"},rr={type:"childadded",child:null},Aa={type:"childremoved",child:null};class Ge extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new R,e=new Pi,n=new Ci,r=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new Nt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Ql.copy(t).applyQuaternion(this.quaternion),this.position.add(Ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_s.copy(t):_s.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Nr,_s,this.up):Jn.lookAt(_s,Nr,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(Jn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),rr.child=t,this.dispatchEvent(rr),rr.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vd),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),h=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.DEFAULT_UP=new R(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class He extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Md={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=rl(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ra(a,s,t+1/3),this.g=Ra(a,s,t),this.b=Ra(a,s,t-1/3)}return Yt.colorSpaceToWorking(this,r),this}setStyle(t,e=en){function n(s){s!==void 0&&parseFloat(s)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){const n=_u[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Yt.workingToColorSpace(Ze.copy(this),t),Math.round(kt(Ze.r*255,0,255))*65536+Math.round(kt(Ze.g*255,0,255))*256+Math.round(kt(Ze.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,r=Ze.g,s=Ze.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=en){Yt.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,r=Ze.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(xs);const n=$r(Si.h,xs.h,e),r=$r(Si.s,xs.s,e),s=$r(Si.l,xs.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Xt;Xt.NAMES=_u;class Sd extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const En=new R,Qn=new R,Ca=new R,jn=new R,sr=new R,ar=new R,ic=new R,Pa=new R,Da=new R,La=new R,Ia=new ye,Ua=new ye,Na=new ye;class vn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),En.subVectors(t,e),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){En.subVectors(r,e),Qn.subVectors(n,e),Ca.subVectors(t,e);const a=En.dot(En),o=En.dot(Qn),l=En.dot(Ca),c=Qn.dot(Qn),d=Qn.dot(Ca),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Ia.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Ia.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Na.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ia,s.x),a.addScaledVector(Ua,s.y),a.addScaledVector(Na,s.z),a}static isFrontFacing(t,e,n,r){return En.subVectors(n,e),Qn.subVectors(t,e),En.cross(Qn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;sr.subVectors(r,n),ar.subVectors(s,n),Pa.subVectors(t,n);const l=sr.dot(Pa),c=ar.dot(Pa);if(l<=0&&c<=0)return e.copy(n);Da.subVectors(t,r);const d=sr.dot(Da),u=ar.dot(Da);if(d>=0&&u<=d)return e.copy(r);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(sr,a);La.subVectors(t,s);const f=sr.dot(La),_=ar.dot(La);if(_>=0&&f<=_)return e.copy(s);const M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ar,o);const m=d*_-f*u;if(m<=0&&u-d>=0&&f-_>=0)return ic.subVectors(s,r),o=(u-d)/(u-d+(f-_)),e.copy(r).addScaledVector(ic,o);const p=1/(m+M+h);return a=M*p,o=h*p,e.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ls{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Ms.subVectors(this.max,Fr),or.subVectors(t.a,Fr),lr.subVectors(t.b,Fr),cr.subVectors(t.c,Fr),yi.subVectors(lr,or),Ei.subVectors(cr,lr),Fi.subVectors(or,cr);let e=[0,-yi.z,yi.y,0,-Ei.z,Ei.y,0,-Fi.z,Fi.y,yi.z,0,-yi.x,Ei.z,0,-Ei.x,Fi.z,0,-Fi.x,-yi.y,yi.x,0,-Ei.y,Ei.x,0,-Fi.y,Fi.x,0];return!Fa(e,or,lr,cr,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Fa(e,or,lr,cr,Ms))?!1:(Ss.crossVectors(yi,Ei),e=[Ss.x,Ss.y,Ss.z],Fa(e,or,lr,cr,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ti=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,vs=new ls,or=new R,lr=new R,cr=new R,yi=new R,Ei=new R,Fi=new R,Fr=new R,Ms=new R,Ss=new R,Oi=new R;function Fa(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Oi.fromArray(i,s);const o=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),d=n.dot(Oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Pe=new R,ys=new Rt;let yd=0;class Ln extends Ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fu,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class xu extends Ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vu extends Ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Ed=new ls,Or=new R,Oa=new R;class al{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);const e=Or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Or,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(Oa)),this.expandByPoint(Or.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let bd=0;const _n=new Ee,Ba=new Ge,ur=new R,fn=new ls,Br=new ls,ke=new R;class hn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?vu:xu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ur).negate(),this.translate(ur.x,ur.y,ur.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new al);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(fn.min,Br.min),fn.expandByPoint(ke),ke.addVectors(fn.max,Br.max),fn.expandByPoint(ke)):(fn.expandByPoint(Br.min),fn.expandByPoint(Br.max))}fn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)ke.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ke));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)ke.fromBufferAttribute(o,c),l&&(ur.fromBufferAttribute(t,c),ke.add(ur)),r=Math.max(r,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ln(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new R,l[x]=new R;const c=new R,d=new R,u=new R,h=new Rt,f=new Rt,_=new Rt,M=new R,m=new R;function p(x,T,P){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),_.fromBufferAttribute(s,P),d.sub(c),u.sub(c),f.sub(h),_.sub(h);const N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(N),o[x].add(M),o[T].add(M),o[P].add(M),l[x].add(m),l[T].add(m),l[P].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let x=0,T=A.length;x<T;++x){const P=A[x],N=P.start,O=P.count;for(let G=N,U=N+O;G<U;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const I=new R,S=new R,E=new R,b=new R;function w(x){E.fromBufferAttribute(r,x),b.copy(E);const T=o[x];I.copy(T),I.sub(E.multiplyScalar(E.dot(T))).normalize(),S.crossVectors(b,T);const N=S.dot(l[x])<0?-1:1;a.setXYZW(x,I.x,I.y,I.z,N)}for(let x=0,T=A.length;x<T;++x){const P=A[x],N=P.start,O=P.count;for(let G=N,U=N+O;G<U;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,d=new R,u=new R;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){const c=o.array,d=o.itemSize,u=o.normalized,h=new c.constructor(l.length*d);let f=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*d;for(let p=0;p<d;p++)h[_++]=c[f++]}return new Ln(h,d,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(t.data))}d.length>0&&(r[l]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(e))}const s=t.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Td{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fu,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const je=new R;class ia{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),r=ne(r,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ia(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const za=new R,Ad=new R,wd=new Nt;class ri{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=za.subVectors(n,e).cross(Ad.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(za),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wd.getNormalMatrix(t),r=this.coplanarPoint(za).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Rd=0;class Lr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Kr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Jc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ol extends Lr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hr;const zr=new R,dr=new R,fr=new R,pr=new Rt,kr=new Rt,Mu=new Ee,Es=new R,Hr=new R,bs=new R,rc=new Rt,ka=new Rt,sc=new Rt;class Su extends Ge{constructor(t=new ol){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new hn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Td(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new ia(n,3,0,!1)),hr.setAttribute("uv",new ia(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new Rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),Mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-fr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Ts(Es.set(-.5,-.5,0),fr,a,dr,r,s),Ts(Hr.set(.5,-.5,0),fr,a,dr,r,s),Ts(bs.set(.5,.5,0),fr,a,dr,r,s),rc.set(0,0),ka.set(1,0),sc.set(1,1);let o=t.ray.intersectTriangle(Es,Hr,bs,!1,zr);if(o===null&&(Ts(Hr.set(-.5,.5,0),fr,a,dr,r,s),ka.set(0,1),o=t.ray.intersectTriangle(Es,bs,Hr,!1,zr),o===null))return;const l=t.ray.origin.distanceTo(zr);l<t.near||l>t.far||e.push({distance:l,point:zr.clone(),uv:vn.getInterpolation(zr,Es,Hr,bs,rc,ka,sc,new Rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ts(i,t,e,n,r,s){pr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(kr.x=s*pr.x-r*pr.y,kr.y=r*pr.x+s*pr.y):kr.copy(pr),i.copy(t),i.x+=kr.x,i.y+=kr.y,i.applyMatrix4(Mu)}const ei=new R,Ha=new R,As=new R,ws=new R;class yu{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ha.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),ws.copy(this.origin).sub(Ha);const s=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=ws.dot(this.direction),l=-ws.dot(As),c=ws.lengthSq(),d=Math.abs(1-a*a);let u,h,f,_;if(d>0)if(u=a*l-o,h=a*o-l,_=s*d,u>=0)if(h>=-_)if(h<=_){const M=1/d;u*=M,h*=M,f=u*(u+a*h+2*o)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;else h<=-_?(u=Math.max(0,-(-a*s+o)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=_?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(a*s+o)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+o)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ha).addScaledVector(As,h),f}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),r=ei.dot(ei)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),d>=0?(s=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(o=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=t.x-a.x,h=t.y-a.y,f=t.z-a.z,_=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,A=n.y-a.y,I=n.z-a.z,S=Math.abs(l),E=Math.abs(c),b=Math.abs(d);let w,x,T,P,N,O,G,U,k,$,X,it;if(S>=E&&S>=b?(T=l,O=u,k=_,it=p,l>=0?(w=c,x=d,P=h,N=f,G=M,U=m,$=A,X=I):(w=d,x=c,P=f,N=h,G=m,U=M,$=I,X=A)):E>=b?(T=c,O=h,k=M,it=A,c>=0?(w=d,x=l,P=f,N=u,G=m,U=_,$=I,X=p):(w=l,x=d,P=u,N=f,G=_,U=m,$=p,X=I)):(T=d,O=f,k=m,it=I,d>=0?(w=l,x=c,P=u,N=h,G=_,U=M,$=p,X=A):(w=c,x=l,P=h,N=u,G=M,U=_,$=A,X=p)),T===0)return null;const q=w/T,tt=x/T,nt=1/T,Ct=P-q*O,At=N-tt*O,de=G-q*k,qt=U-tt*k,Jt=$-q*it,K=X-tt*it,j=Jt*qt-K*de,xt=Ct*K-At*Jt,Ut=de*At-qt*Ct;if(r){if(j<0||xt<0||Ut<0)return null}else if((j<0||xt<0||Ut<0)&&(j>0||xt>0||Ut>0))return null;const gt=j+xt+Ut;if(gt===0)return null;const zt=nt*(j*O+xt*k+Ut*it);return(gt>0?zt<0:zt>0)?null:this.at(zt/gt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cs extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ac=new Ee,Bi=new yu,Rs=new al,oc=new R,Cs=new R,Ps=new R,Ds=new R,Ga=new R,Ls=new R,lc=new R,Is=new R;class ue extends Ge{constructor(t=new hn,e=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ls.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],u=s[l];d!==0&&(Ga.fromBufferAttribute(u,t),a?Ls.addScaledVector(Ga,d):Ls.addScaledVector(Ga.sub(e),d))}e.add(Ls)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!(Rs.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Rs,oc)===null||Bi.origin.distanceToSquared(oc)>(t.far-t.near)**2))&&(ac.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(ac),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],A=Math.max(m.start,f.start),I=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=A,E=I;S<E;S+=3){const b=o.getX(S),w=o.getX(S+1),x=o.getX(S+2);r=Us(this,p,t,n,c,d,u,b,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const A=o.getX(m),I=o.getX(m+1),S=o.getX(m+2);r=Us(this,a,t,n,c,d,u,A,I,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],A=Math.max(m.start,f.start),I=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=A,E=I;S<E;S+=3){const b=S,w=S+1,x=S+2;r=Us(this,p,t,n,c,d,u,b,w,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const A=m,I=m+1,S=m+2;r=Us(this,a,t,n,c,d,u,A,I,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Cd(i,t,e,n,r,s,a,o){let l;if(t.side===cn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===qi,o),l===null)return null;Is.copy(o),Is.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:i}}function Us(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Cs),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Ds);const d=Cd(i,t,e,n,Cs,Ps,Ds,lc);if(d){const u=new R;vn.getBarycoord(lc,Cs,Ps,Ds,u),r&&(d.uv=vn.getInterpolatedAttribute(r,o,l,c,u,new Rt)),s&&(d.uv1=vn.getInterpolatedAttribute(s,o,l,c,u,new Rt)),a&&(d.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new R),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new R,materialIndex:0};vn.getNormal(Cs,Ps,Ds,h.normal),d.face=h,d.barycoord=u}return d}class Pd extends Je{constructor(t=null,e=1,n=1,r,s,a,o,l,c=We,d=We,u,h){super(null,a,o,l,c,d,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zi=new al,Dd=new Rt(.5,.5),Ns=new R;class ll{constructor(t=new ri,e=new ri,n=new ri,r=new ri,s=new ri,a=new ri){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],d=s[4],u=s[5],h=s[6],f=s[7],_=s[8],M=s[9],m=s[10],p=s[11],A=s[12],I=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-a,f-d,p-_,E-A).normalize(),r[1].setComponents(c+a,f+d,p+_,E+A).normalize(),r[2].setComponents(c+o,f+u,p+M,E+I).normalize(),r[3].setComponents(c-o,f-u,p-M,E-I).normalize(),n)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,f-h,p-m,E-S).normalize();else if(r[4].setComponents(c-l,f-h,p-m,E-S).normalize(),e===Hn)r[5].setComponents(c+l,f+h,p+m,E+S).normalize();else if(e===ts)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=Dd.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ns.x=r.normal.x>0?t.max.x:t.min.x,Ns.y=r.normal.y>0?t.max.y:t.min.y,Ns.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Eu extends Je{constructor(t=[],e=Ki,n,r,s,a,o,l,c,d){super(t,e,n,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cl extends Je{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ns extends Je{constructor(t,e,n=Yn,r,s,a,o=We,l=We,c,d=di,u=1){if(d!==di&&d!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:u};super(h,r,s,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ld extends ns{constructor(t,e=Yn,n=Ki,r,s,a=We,o=We,l,c=di){const d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,n,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class bu extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class mi extends hn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(u,2));function _(M,m,p,A,I,S,E,b,w,x,T){const P=S/w,N=E/x,O=S/2,G=E/2,U=b/2,k=w+1,$=x+1;let X=0,it=0;const q=new R;for(let tt=0;tt<$;tt++){const nt=tt*N-G;for(let Ct=0;Ct<k;Ct++){const At=Ct*P-O;q[M]=At*A,q[m]=nt*I,q[p]=U,c.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[p]=b>0?1:-1,d.push(q.x,q.y,q.z),u.push(Ct/w),u.push(1-tt/x),X+=1}}for(let tt=0;tt<x;tt++)for(let nt=0;nt<w;nt++){const Ct=h+nt+k*tt,At=h+nt+k*(tt+1),de=h+(nt+1)+k*(tt+1),qt=h+(nt+1)+k*tt;l.push(Ct,At,qt),l.push(At,de,qt),it+=6}o.addGroup(f,it,T),f+=it,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class fi extends hn{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],h=[],f=[];let _=0;const M=[],m=n/2;let p=0;A(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(d),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(f,2));function A(){const S=new R,E=new R;let b=0;const w=(e-t)/n;for(let x=0;x<=s;x++){const T=[],P=x/s,N=P*(e-t)+t;for(let O=0;O<=r;O++){const G=O/r,U=G*l+o,k=Math.sin(U),$=Math.cos(U);E.x=N*k,E.y=-P*n+m,E.z=N*$,u.push(E.x,E.y,E.z),S.set(k,w,$).normalize(),h.push(S.x,S.y,S.z),f.push(G,1-P),T.push(_++)}M.push(T)}for(let x=0;x<r;x++)for(let T=0;T<s;T++){const P=M[T][x],N=M[T+1][x],O=M[T+1][x+1],G=M[T][x+1];(t>0||T!==0)&&(d.push(P,N,G),b+=3),(e>0||T!==s-1)&&(d.push(N,O,G),b+=3)}c.addGroup(p,b,0),p+=b}function I(S){const E=_,b=new Rt,w=new R;let x=0;const T=S===!0?t:e,P=S===!0?1:-1;for(let O=1;O<=r;O++)u.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),_++;const N=_;for(let O=0;O<=r;O++){const U=O/r*l+o,k=Math.cos(U),$=Math.sin(U);w.x=T*$,w.y=m*P,w.z=T*k,u.push(w.x,w.y,w.z),h.push(0,P,0),b.x=k*.5+.5,b.y=$*.5*P+.5,f.push(b.x,b.y),_++}for(let O=0;O<r;O++){const G=E+O,U=N+O;S===!0?d.push(U,U+1,G):d.push(U+1,U,G),x+=3}c.addGroup(p,x,S===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class is extends fi{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new is(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class us extends hn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,d=l+1,u=t/o,h=e/l,f=[],_=[],M=[],m=[];for(let p=0;p<d;p++){const A=p*h-a;for(let I=0;I<c;I++){const S=I*u-s;_.push(S,-A,0),M.push(0,0,1),m.push(I/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const I=A+c*p,S=A+c*(p+1),E=A+1+c*(p+1),b=A+1+c*p;f.push(I,S,b),f.push(S,E,b)}this.setIndex(f),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(M,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}class ul extends hn{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let u=t;const h=(e-t)/r,f=new R,_=new Rt;for(let M=0;M<=r;M++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,d.push(_.x,_.y)}u+=h}for(let M=0;M<r;M++){const m=M*(n+1);for(let p=0;p<n;p++){const A=p+m,I=A,S=A+n+1,E=A+n+2,b=A+1;o.push(I,S,b),o.push(S,E,b)}}this.setIndex(o),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hl extends hn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const d=[],u=new R,h=new R,f=[],_=[],M=[],m=[];for(let p=0;p<=n;p++){const A=[],I=p/n,S=a+I*o,E=t*Math.cos(S),b=Math.sqrt(t*t-E*E);let w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let x=0;x<=e;x++){const T=x/e,P=r+T*s;u.x=-b*Math.cos(P),u.y=E,u.z=b*Math.sin(P),_.push(u.x,u.y,u.z),h.copy(u).normalize(),M.push(h.x,h.y,h.z),m.push(T+w,1-I),A.push(c++)}d.push(A)}for(let p=0;p<n;p++)for(let A=0;A<e;A++){const I=d[p][A+1],S=d[p][A],E=d[p+1][A],b=d[p+1][A+1];(p!==0||a>0)&&f.push(I,S,b),(p!==n-1||l<Math.PI)&&f.push(S,E,b)}this.setIndex(f),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(M,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ar(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(cc(r))r.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(cc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=Ar(i[e]);for(const r in n)t[r]=n[r]}return t}function cc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Ud={clone:Ar,merge:tn};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Rt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new R().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ee().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Od extends Kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ha extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bd extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zd extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Au extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class kd extends Au{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Va=new Ee,uc=new R,hc=new R;class Hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ll,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,r){Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Va,t.coordinateSystem,t.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===ts||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fs=new R,Os=new Ci,Fn=new R;class wu extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fs,Os,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fs,Os,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fs,Os,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bi=new R,dc=new Rt,fc=new Rt;class An extends wu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,dc,fc),e.subVectors(fc,dc)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class da extends wu{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gd extends Hd{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vd extends Au{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Gd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const mr=-90,gr=1;class Wd extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(mr,gr,t,e);r.layers=this.layers,this.add(r);const s=new An(mr,gr,t,e);s.layers=this.layers,this.add(s);const a=new An(mr,gr,t,e);a.layers=this.layers,this.add(a);const o=new An(mr,gr,t,e);o.layers=this.layers,this.add(o);const l=new An(mr,gr,t,e);l.layers=this.layers,this.add(l);const c=new An(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Xd extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cl=class Cl{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Cl.prototype.isMatrix2=!0;let mc=Cl;class Yd extends Ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function gc(i,t,e,n){const r=qd(n);switch(e){case uu:return i*t;case du:return i*t/r.components*r.byteLength;case jo:return i*t/r.components*r.byteLength;case Zi:return i*t*2/r.components*r.byteLength;case tl:return i*t*2/r.components*r.byteLength;case hu:return i*t*3/r.components*r.byteLength;case Rn:return i*t*4/r.components*r.byteLength;case el:return i*t*4/r.components*r.byteLength;case Gs:case Vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case uo:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case ho:case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case Js:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Io:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case No:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qs:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qd(i){switch(i){case pn:case au:return{byteLength:1,components:1};case Qr:case ou:case qn:return{byteLength:2,components:1};case Jo:case Qo:return{byteLength:2,components:4};case Yn:case $o:case kn:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);function Ru(){let i=null,t=!1,e=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Kd(i){const t=new WeakMap;function e(o,l){const c=o.array,d=o.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<u.length;f++){const _=u[h],M=u[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,u[h]=M)}u.length=h+1;for(let f=0,_=u.length;f<_;f++){const M=u[f];i.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ef=`#ifdef USE_AOMAP
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
#endif`,nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rf=`#ifdef USE_BATCHING
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
#endif`,sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cf=`#ifdef USE_IRIDESCENCE
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
#endif`,uf=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vf=`#define PI 3.141592653589793
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
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Af="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Of=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Kf=`uniform sampler2D dfgLUT;
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
}`,Zf=`
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
#endif`,$f=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Np=`float getShadowMask() {
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
}`,Fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,rm=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,Em=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,wm=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:Zd,alphahash_pars_fragment:$d,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:jd,alphatest_pars_fragment:tf,aomap_fragment:ef,aomap_pars_fragment:nf,batching_pars_vertex:rf,batching_vertex:sf,begin_vertex:af,beginnormal_vertex:of,bsdfs:lf,iridescence_fragment:cf,bumpmap_pars_fragment:uf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:df,clipping_planes_pars_vertex:ff,clipping_planes_vertex:pf,color_fragment:mf,color_pars_fragment:gf,color_pars_vertex:_f,color_vertex:xf,common:vf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:yf,displacementmap_vertex:Ef,emissivemap_fragment:bf,emissivemap_pars_fragment:Tf,colorspace_fragment:Af,colorspace_pars_fragment:wf,envmap_fragment:Rf,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Pf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Gf,envmap_vertex:Lf,fog_vertex:If,fog_pars_vertex:Uf,fog_fragment:Nf,fog_pars_fragment:Ff,gradientmap_pars_fragment:Of,lightmap_pars_fragment:Bf,lights_lambert_fragment:zf,lights_lambert_pars_fragment:kf,lights_pars_begin:Hf,lights_toon_fragment:Vf,lights_toon_pars_fragment:Wf,lights_phong_fragment:Xf,lights_phong_pars_fragment:Yf,lights_physical_fragment:qf,lights_physical_pars_fragment:Kf,lights_fragment_begin:Zf,lights_fragment_maps:$f,lights_fragment_end:Jf,lightprobes_pars_fragment:Qf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:rp,map_particle_fragment:sp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphinstance_vertex:cp,morphcolor_vertex:up,morphnormal_vertex:hp,morphtarget_pars_vertex:dp,morphtarget_vertex:fp,normal_fragment_begin:pp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:xp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Sp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:wp,dithering_fragment:Rp,dithering_pars_fragment:Cp,roughnessmap_fragment:Pp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Ip,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Fp,skinning_pars_vertex:Op,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Hp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Vp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:Yp,uv_pars_vertex:qp,uv_vertex:Kp,worldpos_vertex:Zp,background_vert:$p,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:jp,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:rm,distance_frag:sm,equirect_vert:am,equirect_frag:om,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:um,meshbasic_frag:hm,meshlambert_vert:dm,meshlambert_frag:fm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:xm,meshphong_frag:vm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:ym,meshtoon_frag:Em,points_vert:bm,points_frag:Tm,shadow_vert:Am,shadow_frag:wm,sprite_vert:Rm,sprite_frag:Cm},ht={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Bn={basic:{uniforms:tn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:tn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:tn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:tn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:tn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:tn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:tn([ht.points,ht.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:tn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:tn([ht.common,ht.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:tn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:tn([ht.sprite,ht.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:tn([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:tn([ht.lights,ht.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Bn.physical={uniforms:tn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Bs={r:0,b:0,g:0},Pm=new Ee,Cu=new Nt;Cu.set(-1,0,0,0,1,0,0,0,1);function Dm(i,t,e,n,r,s){const a=new Xt(0);let o=r===!0?0:1,l,c,d=null,u=0,h=null;function f(A){let I=A.isScene===!0?A.background:null;if(I&&I.isTexture){const S=A.backgroundBlurriness>0;I=t.get(I,S)}return I}function _(A){let I=!1;const S=f(A);S===null?m(a,o):S&&S.isColor&&(m(S,1),I=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(A,I){const S=f(I);S&&(S.isCubeTexture||S.mapping===ua)?(c===void 0&&(c=new ue(new mi(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ar(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cu),c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==ee,(d!==S||u!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,u=S.version,h=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ue(new us(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ar(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(S.colorSpace)!==ee,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||u!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,u=S.version,h=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function m(A,I){A.getRGB(Bs,Tu(i)),e.buffers.color.setClear(Bs.r,Bs.g,Bs.b,I,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,I=1){a.set(A),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,m(a,o)},render:_,addToRenderList:M,dispose:p}}function Lm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(N,O,G,U,k){let $=!1;const X=u(N,U,G,O);s!==X&&(s=X,c(s.object)),$=f(N,U,G,k),$&&_(N,U,G,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(N,O,G,U),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function d(N){return i.deleteVertexArray(N)}function u(N,O,G,U){const k=U.wireframe===!0;let $=n[O.id];$===void 0&&($={},n[O.id]=$);const X=N.isInstancedMesh===!0?N.id:0;let it=$[X];it===void 0&&(it={},$[X]=it);let q=it[G.id];q===void 0&&(q={},it[G.id]=q);let tt=q[k];return tt===void 0&&(tt=h(l()),q[k]=tt),tt}function h(N){const O=[],G=[],U=[];for(let k=0;k<e;k++)O[k]=0,G[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:U,object:N,attributes:{},index:null}}function f(N,O,G,U){const k=s.attributes,$=O.attributes;let X=0;const it=G.getAttributes();for(const q in it)if(it[q].location>=0){const nt=k[q];let Ct=$[q];if(Ct===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(Ct=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(Ct=N.instanceColor)),nt===void 0||nt.attribute!==Ct||Ct&&nt.data!==Ct.data)return!0;X++}return s.attributesNum!==X||s.index!==U}function _(N,O,G,U){const k={},$=O.attributes;let X=0;const it=G.getAttributes();for(const q in it)if(it[q].location>=0){let nt=$[q];nt===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));const Ct={};Ct.attribute=nt,nt&&nt.data&&(Ct.data=nt.data),k[q]=Ct,X++}s.attributes=k,s.attributesNum=X,s.index=U}function M(){const N=s.newAttributes;for(let O=0,G=N.length;O<G;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){const G=s.newAttributes,U=s.enabledAttributes,k=s.attributeDivisors;G[N]=1,U[N]===0&&(i.enableVertexAttribArray(N),U[N]=1),k[N]!==O&&(i.vertexAttribDivisor(N,O),k[N]=O)}function A(){const N=s.newAttributes,O=s.enabledAttributes;for(let G=0,U=O.length;G<U;G++)O[G]!==N[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function I(N,O,G,U,k,$,X){X===!0?i.vertexAttribIPointer(N,O,G,k,$):i.vertexAttribPointer(N,O,G,U,k,$)}function S(N,O,G,U){M();const k=U.attributes,$=G.getAttributes(),X=O.defaultAttributeValues;for(const it in $){const q=$[it];if(q.location>=0){let tt=k[it];if(tt===void 0&&(it==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),it==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor)),tt!==void 0){const nt=tt.normalized,Ct=tt.itemSize,At=t.get(tt);if(At===void 0)continue;const de=At.buffer,qt=At.type,Jt=At.bytesPerElement,K=qt===i.INT||qt===i.UNSIGNED_INT||tt.gpuType===$o;if(tt.isInterleavedBufferAttribute){const j=tt.data,xt=j.stride,Ut=tt.offset;if(j.isInstancedInterleavedBuffer){for(let gt=0;gt<q.locationSize;gt++)p(q.location+gt,j.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<q.locationSize;gt++)m(q.location+gt);i.bindBuffer(i.ARRAY_BUFFER,de);for(let gt=0;gt<q.locationSize;gt++)I(q.location+gt,Ct/q.locationSize,qt,nt,xt*Jt,(Ut+Ct/q.locationSize*gt)*Jt,K)}else{if(tt.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)p(q.location+j,tt.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let j=0;j<q.locationSize;j++)m(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,de);for(let j=0;j<q.locationSize;j++)I(q.location+j,Ct/q.locationSize,qt,nt,Ct*Jt,Ct/q.locationSize*j*Jt,K)}}else if(X!==void 0){const nt=X[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(q.location,nt);break;case 3:i.vertexAttrib3fv(q.location,nt);break;case 4:i.vertexAttrib4fv(q.location,nt);break;default:i.vertexAttrib1fv(q.location,nt)}}}}A()}function E(){T();for(const N in n){const O=n[N];for(const G in O){const U=O[G];for(const k in U){const $=U[k];for(const X in $)d($[X].object),delete $[X];delete U[k]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;const O=n[N.id];for(const G in O){const U=O[G];for(const k in U){const $=U[k];for(const X in $)d($[X].object),delete $[X];delete U[k]}}delete n[N.id]}function w(N){for(const O in n){const G=n[O];for(const U in G){const k=G[U];if(k[N.id]===void 0)continue;const $=k[N.id];for(const X in $)d($[X].object),delete $[X];delete k[N.id]}}}function x(N){for(const O in n){const G=n[O],U=N.isInstancedMesh===!0?N.id:0,k=G[U];if(k!==void 0){for(const $ in k){const X=k[$];for(const it in X)d(X[it].object),delete X[it];delete k[$]}delete G[U],Object.keys(G).length===0&&delete n[O]}}}function T(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:A}}function Im(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Um(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==pn&&w!==kn&&!x&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(It("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:I,maxFragmentUniforms:S,maxSamples:E,samples:b}}function Nm(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new ri,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||r;return r=h,n=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=d(u,h,0)},this.setState=function(u,h,f){const _=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const A=s?0:n,I=A*4;let S=p.clippingState||null;l.value=S,S=d(_,h,I,f);for(let E=0;E!==I;++E)S[E]=e[E];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,h,f,_){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=f+M*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,S=f;I!==M;++I,S+=4)a.copy(u[I]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Mr=4,Fm=6,Om=20,Bm=256,Gr=new da,_c=new Xt;let Wa=null,Xa=0,Ya=0,qa=!1;const zm=new R,ki=new R;class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=zm}=s;Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,Xa,Ya),this._renderer.xr.enabled=qa,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:qn,format:Rn,colorSpace:js,depthBuffer:!1},r=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(s)),this._blurMaterial=Gm(s,t,e),this._ggxMaterial=Hm(s,t,e)}return r}_compileMaterial(t){const e=new ue(new hn,t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,r,s){const l=new An(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(_c),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new mi,new cs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const A=t.background;A?A.isColor&&(m.color.copy(A),t.background=null,p=!0):(m.color.copy(_c),p=!0);for(let I=0;I<6;I++){const S=I%3;S===0?(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[I],s.y,s.z)):S===1?(l.up.set(0,0,c[I]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[I],s.z)):(l.up.set(0,c[I],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[I]));const E=this._cubeSize;_r(r,S*E,I>2?E:0,E,E),u.setRenderTarget(r),p&&u.render(M,l),u.render(t,l)}u.toneMapping=f,u.autoClear=h,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ki||t.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;_r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=c*1.25,f=u*h,{_lodMax:_}=this,M=this._sizeLods[n],m=3*M*(n>_-Mr?n-_+Mr:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,_r(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(o,Gr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,_r(t,m,p,3*M,2*M),r.setRenderTarget(t),r.render(o,Gr)}_blur(t,e,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[r],u=3*d*(r>this._lodMax-Mr?r-this._lodMax+Mr:0),h=4*(this._cubeSize-d);_r(e,u,h,3*d,2*d),a.setRenderTarget(e),a.render(l,Gr)}}function km(i){const t=[],e=[];let n=i;const r=i-Mr+1+Fm;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,f=3,_=new Float32Array(f*h*u),M=new Float32Array(f*h*u);for(let p=0;p<u;p++){const A=p%3*2/3-1,I=p>2?0:-1,S=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];_.set(S,f*h*p);for(let E=0;E<h;E++){const b=d[E*2]*2-1,w=d[E*2+1]*2-1;p===0?ki.set(1,w,b):p===1?ki.set(-b,1,-w):p===2?ki.set(-b,w,1):p===3?ki.set(-1,w,-b):p===4?ki.set(-b,-1,w):ki.set(b,w,-1),ki.toArray(M,(p*h+E)*f)}}const m=new hn;m.setAttribute("position",new Ln(_,f)),m.setAttribute("outputDirection",new Ln(M,f)),e.push(new ue(m,null)),n>Mr&&n--}return{lodMeshes:e,sizeLods:t}}function vc(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Hm(i,t,e){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){return new Kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Mc(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Sc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pu extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Eu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mi(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:li});s.uniforms.tEquirect.value=e;const a=new ue(r,s),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=$e),new Wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function Vm(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===xa||f===va)if(t.has(h)){const _=t.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new Pu(_.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,_=f===xa||f===va,M=f===Ki||f===Tr;if(_||M){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new xc(i)),m=_?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const A=h.image;return _&&A&&A.height>0||M&&A&&l(A)?(n===null&&(n=new xc(i)),m=_?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===xa?h.mapping=Ki:f===va&&(h.mapping=Tr),h}function l(h){let f=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&f++;return f===_}function c(h){const f=h.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function Wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&yr("WebGLRenderer: "+n+" extension not supported."),r}}}function Xm(i,t,e,n){const r={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,_=u.attributes.position;let M=0;if(_===void 0)return;if(f!==null){const A=f.array;M=f.version;for(let I=0,S=A.length;I<S;I+=3){const E=A[I+0],b=A[I+1],w=A[I+2];h.push(E,b,b,w,w,E)}}else{const A=_.array;M=_.version;for(let I=0,S=A.length/3-1;I<S;I+=3){const E=I+0,b=I+1,w=I+2;h.push(E,b,b,w,w,E)}}const m=new(_.count>=65535?vu:xu)(h,1);m.version=M;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function Ym(i,t,e){let n;function r(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,h){i.drawElements(n,h,s,u*a),e.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,s,u*a,f),e.update(h,n,f))}function d(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,f);let M=0;for(let m=0;m<f;m++)M+=h[m];e.update(M,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:Zt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Km(i,t,e){const n=new WeakMap,r=new ye;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==u){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var f=P;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],I=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),m===!0&&(S=3);let E=o.attributes.position.count*S,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*b*4*u),x=new mu(w,E,b,u);x.type=kn,x.needsUpdate=!0;const T=S*4;for(let N=0;N<u;N++){const O=p[N],G=A[N],U=I[N],k=E*b*4*N;for(let $=0;$<O.count;$++){const X=$*T;_===!0&&(r.fromBufferAttribute(O,$),w[k+X+0]=r.x,w[k+X+1]=r.y,w[k+X+2]=r.z,w[k+X+3]=0),M===!0&&(r.fromBufferAttribute(G,$),w[k+X+4]=r.x,w[k+X+5]=r.y,w[k+X+6]=r.z,w[k+X+7]=0),m===!0&&(r.fromBufferAttribute(U,$),w[k+X+8]=r.x,w[k+X+9]=r.y,w[k+X+10]=r.z,w[k+X+11]=U.itemSize===4?r.w:1)}}h={count:u,texture:x,size:new Rt(E,b)},n.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Zm(i,t,e,n,r){let s=new WeakMap;function a(c){const d=r.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==d&&(t.update(h),s.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==d&&(f.update(),s.set(f,d))}return h}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}const $m={[jc]:"LINEAR_TONE_MAPPING",[tu]:"REINHARD_TONE_MAPPING",[eu]:"CINEON_TONE_MAPPING",[Zo]:"ACES_FILMIC_TONE_MAPPING",[iu]:"AGX_TONE_MAPPING",[ru]:"NEUTRAL_TONE_MAPPING",[nu]:"CUSTOM_TONE_MAPPING"};function Jm(i,t,e,n,r,s){const a=new Dn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new hn;c.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ve([0,2,0,0,2,0],2));const d=new Od({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ue(c,d),h=new da(-1,1,1,-1,0,1);let f=null,_=null,M=!1,m,p=null,A=[],I=!1;this.setSize=function(S,E){a.setSize(S,E),o!==null&&o.setSize(S,E),l!==null&&l.setSize(S,E);for(let b=0;b<A.length;b++){const w=A[b];w.setSize&&w.setSize(S,E)}},this.setEffects=function(S){A=S,I=A.length>0&&A[0].isRenderPass===!0;const E=a.width,b=a.height;A.length>0&&o===null&&(o=new Dn(E,b,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(E,b,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){const x=A[w];x.setSize&&x.setSize(E,b)}},this.begin=function(S,E){if(M||S.toneMapping===Vn&&A.length===0)return!1;if(p=E,E!==null){const b=E.width,w=E.height;(a.width!==b||a.height!==w)&&this.setSize(b,w)}return I===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Vn,!0},this.hasRenderPass=function(){return I},this.end=function(S,E){S.toneMapping=m,M=!0;let b=a,w=o;for(let x=0;x<A.length;x++){const T=A[x];T.enabled!==!1&&(T.render(S,w,b,E),T.needsSwap!==!1&&(b=w,w=w===o?l:o))}if(f!==S.outputColorSpace||_!==S.toneMapping){f=S.outputColorSpace,_=S.toneMapping,d.defines={},Yt.getTransfer(f)===ee&&(d.defines.SRGB_TRANSFER="");const x=$m[_];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(p),S.render(u,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const Du=new Je,zo=new ns(1,1),Lu=new mu,Iu=new fd,Uu=new Eu,yc=[],Ec=[],bc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function Ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=yc[r];if(s===void 0&&(s=new Float32Array(r),yc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pa(i,t){let e=Ec[t];e===void 0&&(e=new Int32Array(t),Ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function n0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Be(e,n)}}function i0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Be(e,n)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;bc.set(n),i.uniformMatrix4fv(this.addr,!1,bc),Be(e,n)}}function s0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function c0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function f0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zo.compareFunction=e.isReversedDepthBuffer()?il:nl,s=zo):s=Du,e.setTexture2D(t||s,r)}function p0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Iu,r)}function m0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Uu,r)}function g0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Lu,r)}function _0(i){switch(i){case 5126:return Qm;case 35664:return jm;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,t){i.uniform1fv(this.addr,t)}function v0(i,t){const e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){const e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function S0(i,t){const e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function y0(i,t){const e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function E0(i,t){const e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function b0(i,t){const e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T0(i,t){i.uniform1iv(this.addr,t)}function A0(i,t){i.uniform2iv(this.addr,t)}function w0(i,t){i.uniform3iv(this.addr,t)}function R0(i,t){i.uniform4iv(this.addr,t)}function C0(i,t){i.uniform1uiv(this.addr,t)}function P0(i,t){i.uniform2uiv(this.addr,t)}function D0(i,t){i.uniform3uiv(this.addr,t)}function L0(i,t){i.uniform4uiv(this.addr,t)}function I0(i,t,e){const n=this.cache,r=t.length,s=pa(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=zo:a=Du;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function U0(i,t,e){const n=this.cache,r=t.length,s=pa(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Iu,s[a])}function N0(i,t,e){const n=this.cache,r=t.length,s=pa(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Uu,s[a])}function F0(i,t,e){const n=this.cache,r=t.length,s=pa(e,r);Oe(n,s)||(i.uniform1iv(this.addr,s),Be(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Lu,s[a])}function O0(i){switch(i){case 5126:return x0;case 35664:return v0;case 35665:return M0;case 35666:return S0;case 35674:return y0;case 35675:return E0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return w0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return D0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}class B0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}}class k0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function wc(i,t){i.seq.push(t),i.map[t.id]=t}function H0(i,t,e){const n=i.name,r=n.length;for(Ka.lastIndex=0;;){const s=Ka.exec(n),a=Ka.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wc(e,c===void 0?new B0(o,i,t):new z0(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new k0(o),wc(e,u)),e=u}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);H0(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const G0=37297;let V0=0;function W0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Cc=new Nt;function X0(i){Yt._getMatrix(Cc,Yt.workingColorSpace,i);const t=`mat3( ${Cc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case ta:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+W0(i.getShaderSource(t),o)}else return s}function Y0(i,t){const e=X0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const q0={[jc]:"Linear",[tu]:"Reinhard",[eu]:"Cineon",[Zo]:"ACESFilmic",[iu]:"AgX",[ru]:"Neutral",[nu]:"Custom"};function K0(i,t){const e=q0[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new R;function Z0(){Yt.getLuminanceCoefficients(zs);const i=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function J0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function qr(i){return i!==""}function Dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(j0,eg)}const tg=new Map;function eg(i,t){let e=Bt[t];if(e===void 0){const n=tg.get(t);if(n!==void 0)e=Bt[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ko(e)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(i){return i.replace(ng,ig)}function ig(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rg={[Hs]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function sg(i){return rg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ag={[Ki]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function og(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ag[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lg={[Tr]:"ENVMAP_MODE_REFRACTION"};function cg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ug={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[Ph]:"ENVMAP_BLENDING_MIX",[Dh]:"ENVMAP_BLENDING_ADD"};function hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ug[i.combine]||"ENVMAP_BLENDING_NONE"}function dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fg(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sg(e),c=og(e),d=cg(e),u=hg(e),h=dg(e),f=$0(e),_=J0(s),M=r.createProgram();let m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(m=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[Uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?K0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Y0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),a=ko(a),a=Dc(a,e),a=Lc(a,e),o=ko(o),o=Dc(o,e),o=Lc(o,e),a=Ic(a),o=Ic(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const I=A+m+a,S=A+p+o,E=Rc(r,r.VERTEX_SHADER,I),b=Rc(r,r.FRAGMENT_SHADER,S);r.attachShader(M,E),r.attachShader(M,b),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function w(N){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(M)||"",G=r.getShaderInfoLog(E)||"",U=r.getShaderInfoLog(b)||"",k=O.trim(),$=G.trim(),X=U.trim();let it=!0,q=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,E,b);else{const tt=Pc(r,E,"vertex"),nt=Pc(r,b,"fragment");Zt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+tt+`
`+nt)}else k!==""?It("WebGLProgram: Program Info Log:",k):($===""||X==="")&&(q=!1);q&&(N.diagnostics={runnable:it,programLog:k,vertexShader:{log:$,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(E),r.deleteShader(b),x=new Ys(r,M),T=Q0(r,M)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,G0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=b,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gg(t),e.set(t,n)),n}}class gg{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}}function _g(i){return i===Zi||i===Js||i===Qs}function xg(i,t,e,n,r,s){const a=new gu,o=new mg,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,P,N,O,G){const U=N.fog,k=O.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||$,X),q=it&&it.mapping===ua?it.image.height:null,tt=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&It("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=nt!==void 0?nt.length:0;let At=0;k.morphAttributes.position!==void 0&&(At=1),k.morphAttributes.normal!==void 0&&(At=2),k.morphAttributes.color!==void 0&&(At=3);let de,qt,Jt,K;if(tt){const pe=Bn[tt];de=pe.vertexShader,qt=pe.fragmentShader}else{de=x.vertexShader,qt=x.fragmentShader;const pe=o.getVertexShaderStage(x),Qt=o.getFragmentShaderStage(x);o.update(x,pe,Qt),Jt=pe.id,K=Qt.id}const j=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,gt=O.isBatchedMesh===!0,zt=!!x.map,De=!!x.matcap,Ht=!!it,$t=!!x.aoMap,fe=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,ze=!!x.displacementMap,sn=!!x.emissiveMap,Me=!!x.metalnessMap,Re=!!x.roughnessMap,L=x.anisotropy>0,Ye=x.clearcoat>0,te=x.dispersion>0,y=x.retroreflectivity>0,g=x.iridescence>0,F=x.sheen>0,H=x.transmission>0,Y=L&&!!x.anisotropyMap,rt=Ye&&!!x.clearcoatMap,st=Ye&&!!x.clearcoatNormalMap,Z=Ye&&!!x.clearcoatRoughnessMap,Q=g&&!!x.iridescenceMap,at=g&&!!x.iridescenceThicknessMap,bt=F&&!!x.sheenColorMap,ut=F&&!!x.sheenRoughnessMap,ot=!!x.specularMap,Tt=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Ft=H&&!!x.transmissionMap,D=H&&!!x.thicknessMap,lt=!!x.gradientMap,J=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,et=!!x.extensions;let wt=Vn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(wt=i.toneMapping);const St={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:de,fragmentShader:qt,defines:x.defines,customVertexShaderID:Jt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:gt,batchingColor:gt&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:De,envMap:Ht,envMapMode:Ht&&it.mapping,envMapCubeUVHeight:q,aoMap:$t,lightMap:fe,bumpMap:Vt,normalMap:_e,displacementMap:ze,emissiveMap:sn,normalMapObjectSpace:_e&&x.normalMapType===Uh,normalMapTangentSpace:_e&&x.normalMapType===Bo,packedNormalMap:_e&&x.normalMapType===Bo&&_g(x.normalMap.format),metalnessMap:Me,roughnessMap:Re,anisotropy:L,anisotropyMap:Y,clearcoat:Ye,clearcoatMap:rt,clearcoatNormalMap:st,clearcoatRoughnessMap:Z,dispersion:te,retroreflection:y,iridescence:g,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:F,sheenColorMap:bt,sheenRoughnessMap:ut,specularMap:ot,specularColorMap:Tt,specularIntensityMap:Dt,transmission:H,transmissionMap:Ft,thicknessMap:D,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Kr&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:zt&&_(x.map.channel),aoMapUv:$t&&_(x.aoMap.channel),lightMapUv:fe&&_(x.lightMap.channel),bumpMapUv:Vt&&_(x.bumpMap.channel),normalMapUv:_e&&_(x.normalMap.channel),displacementMapUv:ze&&_(x.displacementMap.channel),emissiveMapUv:sn&&_(x.emissiveMap.channel),metalnessMapUv:Me&&_(x.metalnessMap.channel),roughnessMapUv:Re&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:rt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(x.sheenRoughnessMap.channel),specularMapUv:ot&&_(x.specularMap.channel),specularColorMapUv:Tt&&_(x.specularColorMap.channel),specularIntensityMapUv:Dt&&_(x.specularIntensityMap.channel),transmissionMapUv:Ft&&_(x.transmissionMap.channel),thicknessMapUv:D&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(_e||L),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(zt||J),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:sn&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),A(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function A(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function I(x){const T=f[x.type];let P;if(T){const N=Bn[T];P=Ud.clone(N.uniforms)}else P=x.uniforms;return P}function S(x,T){let P=d.get(T);return P!==void 0?++P.usedTimes:(P=new fg(i,T,x,r),c.push(P),d.set(T,P)),P}function E(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function w(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:I,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:w}}function vg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,M,m,p){let A=i[t];return A===void 0?(A={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[t]=A):(A.id=h.id,A.object=h,A.geometry=f,A.material=_,A.materialVariant=a(h),A.groupOrder=M,A.renderOrder=h.renderOrder,A.z=m,A.group=p),t++,A}function l(h,f,_,M,m,p,A){A.reversedDepth===!0&&(m=-m);const I=o(h,f,_,M,m,p);_.transmission>0?n.push(I):_.transparent===!0?r.push(I):e.push(I)}function c(h,f,_,M,m,p){const A=o(h,f,_,M,m,p);_.transmission>0?n.unshift(A):_.transparent===!0?r.unshift(A):e.unshift(A)}function d(h,f){e.length>1&&e.sort(h||Mg),n.length>1&&n.sort(f||Nc),r.length>1&&r.sort(f||Nc)}function u(){for(let h=t,f=i.length;h<f;h++){const _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:d}}function Sg(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Fc,i.set(n,[a])):r>=s.length?(a=new Fc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new Xt};break;case"SpotLight":e={position:new R,direction:new R,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let bg=0;function Tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ag(i){const t=new yg,e=Eg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const r=new R,s=new Ee,a=new Ee;function o(c){let d=0,u=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,A=0,I=0,S=0,E=0,b=0,w=0,x=0,T=0,P=0;c.sort(Tg);for(let O=0,G=c.length;O<G;O++){const U=c[O],k=U.color,$=U.intensity,X=U.distance;let it=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Zi?it=U.shadow.map.texture:it=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=k.r*$,u+=k.g*$,h+=k.b*$;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],$);P++}else if(U.isSunLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const tt=U.shadow,nt=e.get(U);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[_]=nt,n.sunShadowMap[_]=it;const Ct=tt.getViewportCount();for(let At=0;At<Ct;At++)n.sunShadowMatrix[M+At]=tt.getMatrix(At),n.sunShadowCascade[M+At]=tt._cascadeData[At];M+=Ct,_++}n.sun[f]=q,f++}else if(U.isDirectionalLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const tt=U.shadow,nt=e.get(U);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=U.shadow.matrix,E++}n.directional[m]=q,m++}else if(U.isSpotLight){const q=t.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=X,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[A]=q;const tt=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,tt.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[A]=tt.matrix,U.castShadow){const nt=e.get(U);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,n.spotShadow[A]=nt,n.spotShadowMap[A]=it,w++}A++}else if(U.isRectAreaLight){const q=t.get(U);q.color.copy(k).multiplyScalar($),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[I]=q,I++}else if(U.isPointLight){const q=t.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const tt=U.shadow,nt=e.get(U);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,n.pointShadow[p]=nt,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=U.shadow.matrix,b++}n.point[p]=q,p++}else if(U.isHemisphereLight){const q=t.get(U);q.skyColor.copy(U.color).multiplyScalar($),q.groundColor.copy(U.groundColor).multiplyScalar($),n.hemi[S]=q,S++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==A||N.rectAreaLength!==I||N.hemiLength!==S||N.numSunShadows!==_||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==w||N.numSpotMaps!==x||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=A,n.rectArea.length=I,n.point.length=p,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=A,N.rectAreaLength=I,N.hemiLength=S,N.numSunShadows=_,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=w,N.numSpotMaps=x,N.numLightProbes=P,n.version=bg++)}function l(c,d){let u=0,h=0,f=0,_=0,M=0,m=0;const p=d.matrixWorldInverse;for(let A=0,I=c.length;A<I;A++){const S=c[A];if(S.isSunLight){const E=n.sun[u];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),u++}else if(S.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(S.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const E=n.rectArea[M];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Oc(i){const t=new Ag(i),e=[],n=[],r=[];function s(h){u.camera=h,e.length=0,n.length=0,r.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function d(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function wg(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Oc(i),t.set(r,[o])):s>=a.length?(o=new Oc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`,Pg=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Dg=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Bc=new Ee,Vr=new R,Za=new R;function Lg(i,t,e){let n=new ll;const r=new Rt,s=new Rt,a=new ye,o=new Bd,l=new zd,c={},d=e.maxTextureSize,u={[qi]:cn,[cn]:qi,[zn]:zn},h=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Rg,fragmentShader:Cg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new hn;_.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ue(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hs;let p=this.type;this.render=function(b,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Zc&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hs);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==this.type;G&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=b.length;U<k;U++){const $=b[U],X=$.shadow;if(X===void 0){It("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const it=X.getFrameExtents();r.multiply(it),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/it.x),r.x=s.x*it.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/it.y),r.y=s.y*it.y,X.mapSize.y=s.y));const q=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=q,X.map===null||G===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Yr){if($.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Dn(r.x,r.y,{format:Zi,type:qn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new ns(r.x,r.y,kn),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=di,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We}else $.isPointLight?(X.map=new Pu(r.x),X.map.depthTexture=new Ld(r.x,Yn)):(X.map=new Dn(r.x,r.y),X.map.depthTexture=new ns(r.x,r.y,Yn)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=di,this.type===Hs?(X.map.depthTexture.compareFunction=q?il:nl,X.map.depthTexture.minFilter=$e,X.map.depthTexture.magFilter=$e):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=We,X.map.depthTexture.magFilter=We);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();$.isPointLight!==!0&&X.updateMatrices($,x);for(let nt=0;nt<tt;nt++){const Ct=X.getCamera(nt);if($.isPointLight){const At=X.camera,de=X.matrix,qt=$.distance||At.far;qt!==At.far&&(At.far=qt,At.updateProjectionMatrix()),Vr.setFromMatrixPosition($.matrixWorld),At.position.copy(Vr),Za.copy(At.position),Za.add(Pg[nt]),At.up.copy(Dg[nt]),At.lookAt(Za),At.updateMatrixWorld(),de.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Bc.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Bc,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(X.map),i.clear());const At=X.getViewport(nt);a.set(s.x*At.x,s.y*At.y,s.x*At.z,s.y*At.w),O.viewport(a)}n=X.getFrustum(nt),S(w,x,Ct,$,this.type)}X.isPointLightShadow!==!0&&this.type===Yr&&A(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,N)};function A(b,w){const x=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Dn(r.x,r.y,{format:Zi,type:qn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,x,h,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,x,f,M,null)}function I(b,w,x,T){let P=null;const N=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=x.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=P.uuid,G=w.uuid;let U=c[O];U===void 0&&(U={},c[O]=U);let k=U[G];k===void 0&&(k=P.clone(),U[G]=k,w.addEventListener("dispose",E)),P=k}if(P.visible=w.visible,P.wireframe=w.wireframe,T===Yr?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:u[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=i.properties.get(P);O.light=x}return P}function S(b,w,x,T,P){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Yr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const G=t.update(b),U=b.material;if(Array.isArray(U)){const k=G.groups;for(let $=0,X=k.length;$<X;$++){const it=k[$],q=U[it.materialIndex];if(q&&q.visible){const tt=I(b,q,T,P);b.onBeforeShadow(i,b,w,x,G,tt,it),i.renderBufferDirect(x,null,G,tt,b,it),b.onAfterShadow(i,b,w,x,G,tt,it)}}}else if(U.visible){const k=I(b,U,T,P);b.onBeforeShadow(i,b,w,x,G,k,null),i.renderBufferDirect(x,null,G,k,b,null),b.onAfterShadow(i,b,w,x,G,k,null)}}const O=b.children;for(let G=0,U=O.length;G<U;G++)S(O[G],w,x,T,P)}function E(b){b.target.removeEventListener("dispose",E);for(const x in c){const T=c[x],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Ig(i,t){function e(){let D=!1;const lt=new ye;let J=null;const ct=new ye(0,0,0,0);return{setMask:function(pt){J!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),J=pt)},setLocked:function(pt){D=pt},setClear:function(pt,et,wt,St,pe){pe===!0&&(pt*=St,et*=St,wt*=St),lt.set(pt,et,wt,St),ct.equals(lt)===!1&&(i.clearColor(pt,et,wt,St),ct.copy(lt))},reset:function(){D=!1,J=null,ct.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,J=null,ct=null,pt=null;return{setReversed:function(et){if(lt!==et){const wt=t.get("EXT_clip_control");et?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),lt=et;const St=pt;pt=null,this.setClear(St)}},getReversed:function(){return lt},setTest:function(et){et?j(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(et){J!==et&&!D&&(i.depthMask(et),J=et)},setFunc:function(et){if(lt&&(et=Xh[et]),ct!==et){switch(et){case Qa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case Jr:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=et}},setLocked:function(et){D=et},setClear:function(et){pt!==et&&(pt=et,lt&&(et=1-et),i.clearDepth(et))},reset:function(){D=!1,J=null,ct=null,pt=null,lt=!1}}}function r(){let D=!1,lt=null,J=null,ct=null,pt=null,et=null,wt=null,St=null,pe=null;return{setTest:function(Qt){D||(Qt?j(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!D&&(i.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,Sn,Un){(J!==Qt||ct!==Sn||pt!==Un)&&(i.stencilFunc(Qt,Sn,Un),J=Qt,ct=Sn,pt=Un)},setOp:function(Qt,Sn,Un){(et!==Qt||wt!==Sn||St!==Un)&&(i.stencilOp(Qt,Sn,Un),et=Qt,wt=Sn,St=Un)},setLocked:function(Qt){D=Qt},setClear:function(Qt){pe!==Qt&&(i.clearStencil(Qt),pe=Qt)},reset:function(){D=!1,lt=null,J=null,ct=null,pt=null,et=null,wt=null,St=null,pe=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let d={},u={},h={},f=new WeakMap,_=[],M=null,m=!1,p=null,A=null,I=null,S=null,E=null,b=null,w=null,x=new Xt(0,0,0),T=0,P=!1,N=null,O=null,G=null,U=null,k=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,it=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=it>=2);let tt=null,nt={};const Ct=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),de=new ye().fromArray(Ct),qt=new ye().fromArray(At);function Jt(D,lt,J,ct){const pt=new Uint8Array(4),et=i.createTexture();i.bindTexture(D,et),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<J;wt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return et}const K={};K[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Jr),Vt(!1),_e(kl),j(i.CULL_FACE),$t(li);function j(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function xt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ut(D,lt){return h[D]!==lt?(i.bindFramebuffer(D,lt),h[D]=lt,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function gt(D,lt){let J=_,ct=!1;if(D){J=f.get(lt),J===void 0&&(J=[],f.set(lt,J));const pt=D.textures;if(J.length!==pt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let et=0,wt=pt.length;et<wt;et++)J[et]=i.COLOR_ATTACHMENT0+et;J.length=pt.length,ct=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ct=!0);ct&&i.drawBuffers(J)}function zt(D){return M!==D?(i.useProgram(D),M=D,!0):!1}const De={[xr]:i.FUNC_ADD,[fh]:i.FUNC_SUBTRACT,[ph]:i.FUNC_REVERSE_SUBTRACT};De[mh]=i.MIN,De[gh]=i.MAX;const Ht={[_h]:i.ZERO,[xh]:i.ONE,[vh]:i.SRC_COLOR,[$c]:i.SRC_ALPHA,[Th]:i.SRC_ALPHA_SATURATE,[Eh]:i.DST_COLOR,[Sh]:i.DST_ALPHA,[Mh]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[Ah]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Rh]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(D,lt,J,ct,pt,et,wt,St,pe,Qt){if(D===li){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),D!==dh){if(D!==p||Qt!==P){if((A!==xr||E!==xr)&&(i.blendEquation(i.FUNC_ADD),A=xr,E=xr),Qt)switch(D){case Kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Zt("WebGLState: Invalid blending: ",D);break}else switch(D){case Kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gl:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",D);break}I=null,S=null,b=null,w=null,x.set(0,0,0),T=0,p=D,P=Qt}return}pt=pt||lt,et=et||J,wt=wt||ct,(lt!==A||pt!==E)&&(i.blendEquationSeparate(De[lt],De[pt]),A=lt,E=pt),(J!==I||ct!==S||et!==b||wt!==w)&&(i.blendFuncSeparate(Ht[J],Ht[ct],Ht[et],Ht[wt]),I=J,S=ct,b=et,w=wt),(St.equals(x)===!1||pe!==T)&&(i.blendColor(St.r,St.g,St.b,pe),x.copy(St),T=pe),p=D,P=!1}function fe(D,lt){D.side===zn?xt(i.CULL_FACE):j(i.CULL_FACE);let J=D.side===cn;lt&&(J=!J),Vt(J),D.blending===Kr&&D.transparent===!1?$t(li):$t(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ct=D.stencilWrite;o.setTest(ct),ct&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),sn(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){N!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),N=D)}function _e(D){D!==uh?(j(i.CULL_FACE),D!==O&&(D===kl?i.cullFace(i.BACK):D===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),O=D}function ze(D){D!==G&&(X&&i.lineWidth(D),G=D)}function sn(D,lt,J){D?(j(i.POLYGON_OFFSET_FILL),(U!==lt||k!==J)&&(U=lt,k=J,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,J))):xt(i.POLYGON_OFFSET_FILL)}function Me(D){D?j(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Re(D){D===void 0&&(D=i.TEXTURE0+$-1),tt!==D&&(i.activeTexture(D),tt=D)}function L(D,lt,J){J===void 0&&(tt===null?J=i.TEXTURE0+$-1:J=tt);let ct=nt[J];ct===void 0&&(ct={type:void 0,texture:void 0},nt[J]=ct),(ct.type!==D||ct.texture!==lt)&&(tt!==J&&(i.activeTexture(J),tt=J),i.bindTexture(D,lt||K[D]),ct.type=D,ct.texture=lt)}function Ye(){const D=nt[tt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function g(){try{i.texSubImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function F(){try{i.texSubImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function rt(){try{i.texStorage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function st(){try{i.texStorage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function Z(){try{i.texImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function at(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function bt(D,lt){u[D]!==lt&&(i.pixelStorei(D,lt),u[D]=lt)}function ut(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function ot(D){qt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),qt.copy(D))}function Tt(D,lt){let J=c.get(lt);J===void 0&&(J=new WeakMap,c.set(lt,J));let ct=J.get(D);ct===void 0&&(ct=i.getUniformBlockIndex(lt,D.name),J.set(D,ct))}function Dt(D,lt){const ct=c.get(lt).get(D);l.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,D.__bindingPointIndex),l.set(lt,ct))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},tt=null,nt={},h={},f=new WeakMap,_=[],M=null,m=!1,p=null,A=null,I=null,S=null,E=null,b=null,w=null,x=new Xt(0,0,0),T=0,P=!1,N=null,O=null,G=null,U=null,k=null,de.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:xt,bindFramebuffer:Ut,drawBuffers:gt,useProgram:zt,setBlending:$t,setMaterial:fe,setFlipSided:Vt,setCullFace:_e,setLineWidth:ze,setPolygonOffset:sn,setScissorTest:Me,activeTexture:Re,bindTexture:L,unbindTexture:Ye,compressedTexImage2D:te,compressedTexImage3D:y,texImage2D:Z,texImage3D:Q,pixelStorei:bt,getParameter:at,updateUBOMapping:Tt,uniformBlockBinding:Dt,texStorage2D:rt,texStorage3D:st,texSubImage2D:g,texSubImage3D:F,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:ut,viewport:ot,reset:Ft}}function Ug(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,d=new WeakMap,u=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,g){return _?new OffscreenCanvas(y,g):ea("canvas")}function m(y,g,F){let H=1;const Y=te(y);if((Y.width>F||Y.height>F)&&(H=F/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const rt=Math.floor(H*Y.width),st=Math.floor(H*Y.height);h===void 0&&(h=M(rt,st));const Z=g?M(rt,st):h;return Z.width=rt,Z.height=st,Z.getContext("2d").drawImage(y,0,0,rt,st),It("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+rt+"x"+st+")."),Z}else return"data"in y&&It("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),y;return y}function p(y){return y.generateMipmaps}function A(y){i.generateMipmap(y)}function I(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(y,g,F,H,Y,rt=!1){if(y!==null){if(i[y]!==void 0)return i[y];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let st;H&&(st=t.get("EXT_texture_norm16"),st||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8),F===i.UNSIGNED_SHORT&&st&&(Z=st.R16_EXT),F===i.SHORT&&st&&(Z=st.R16_SNORM_EXT)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8),F===i.UNSIGNED_SHORT&&st&&(Z=st.RG16_EXT),F===i.SHORT&&st&&(Z=st.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_SHORT&&st&&(Z=st.RGB16_EXT),F===i.SHORT&&st&&(Z=st.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const Q=rt?ta:Yt.getTransfer(Y);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=Q===ee?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&st&&(Z=st.RGBA16_EXT),F===i.SHORT&&st&&(Z=st.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(y,g){let F;return y?g===null||g===Yn||g===jr?F=i.DEPTH24_STENCIL8:g===kn?F=i.DEPTH32F_STENCIL8:g===Qr&&(F=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yn||g===jr?F=i.DEPTH_COMPONENT24:g===kn?F=i.DEPTH_COMPONENT32F:g===Qr&&(F=i.DEPTH_COMPONENT16),F}function b(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==We&&y.minFilter!==$e?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){const g=y.target;g.removeEventListener("dispose",w),T(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&u.delete(g)}function x(y){const g=y.target;g.removeEventListener("dispose",x),N(g)}function T(y){const g=n.get(y);if(g.__webglInit===void 0)return;const F=y.source,H=f.get(F);if(H){const Y=H[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(y),Object.keys(H).length===0&&f.delete(F)}n.remove(y)}function P(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const F=y.source,H=f.get(F);delete H[g.__cacheKey],a.memory.textures--}function N(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let Y=0;Y<g.__webglFramebuffer[H].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[H][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let H=0,Y=F.length;H<Y;H++){const rt=n.get(F[H]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(F[H])}n.remove(y)}let O=0;function G(){O=0}function U(){return O}function k(y){O=y}function $(){const y=O;return y>=r.maxTextures&&It("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function it(y,g){const F=n.get(y);if(y.isVideoTexture&&L(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const H=y.image;if(H===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(F,y,g);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function q(y,g){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){xt(F,y,g);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function tt(y,g){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){xt(F,y,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function nt(y,g){const F=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&F.__version!==y.version){Ut(F,y,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const Ct={[so]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},At={[We]:i.NEAREST,[Lh]:i.NEAREST_MIPMAP_NEAREST,[ms]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},de={[Fh]:i.NEVER,[Hh]:i.ALWAYS,[Oh]:i.LESS,[nl]:i.LEQUAL,[Bh]:i.EQUAL,[il]:i.GEQUAL,[zh]:i.GREATER,[kh]:i.NOTEQUAL};function qt(y,g){if(g.type===kn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===$e||g.magFilter===Ma||g.magFilter===ms||g.magFilter===Hi||g.minFilter===$e||g.minFilter===Ma||g.minFilter===ms||g.minFilter===Hi)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ct[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ct[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ct[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,At[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,At[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,de[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===We||g.minFilter!==ms&&g.minFilter!==Hi||g.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Jt(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",w));const H=g.source;let Y=f.get(H);Y===void 0&&(Y={},f.set(H,Y));const rt=X(g);if(rt!==y.__cacheKey){Y[rt]===void 0&&(Y[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Y[rt].usedTimes++;const st=Y[y.__cacheKey];st!==void 0&&(Y[y.__cacheKey].usedTimes--,st.usedTimes===0&&P(g)),y.__cacheKey=rt,y.__webglTexture=Y[rt].texture}return F}function K(y,g,F){return Math.floor(Math.floor(y/F)/g)}function j(y,g,F,H){const rt=y.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,H,g.data);else{rt.sort((bt,ut)=>bt.start-ut.start);let st=0;for(let bt=1;bt<rt.length;bt++){const ut=rt[st],ot=rt[bt],Tt=ut.start+ut.count,Dt=K(ot.start,g.width,4),Ft=K(ut.start,g.width,4);ot.start<=Tt+1&&Dt===Ft&&K(ot.start+ot.count-1,g.width,4)===Dt?ut.count=Math.max(ut.count,ot.start+ot.count-ut.start):(++st,rt[st]=ot)}rt.length=st+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let bt=0,ut=rt.length;bt<ut;bt++){const ot=rt[bt],Tt=Math.floor(ot.start/4),Dt=Math.ceil(ot.count/4),Ft=Tt%g.width,D=Math.floor(Tt/g.width),lt=Dt,J=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Ft,D,lt,J,F,H,g.data)}y.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function xt(y,g,F){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const Y=Jt(y,g),rt=g.source;e.bindTexture(H,y.__webglTexture,i.TEXTURE0+F);const st=n.get(rt);if(rt.version!==st.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=Yt.getPrimaries(Yt.workingColorSpace),ct=g.colorSpace===Ti?null:Yt.getPrimaries(g.colorSpace),pt=g.colorSpace===Ti||J===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let Q=m(g.image,!1,r.maxTextureSize);Q=Ye(g,Q);const at=s.convert(g.format,g.colorSpace),bt=s.convert(g.type);let ut=S(g.internalFormat,at,bt,g.normalized,g.colorSpace,g.isVideoTexture);qt(H,g);let ot;const Tt=g.mipmaps,Dt=g.isVideoTexture!==!0,Ft=st.__version===void 0||Y===!0,D=rt.dataReady,lt=b(g,Q);if(g.isDepthTexture)ut=E(g.format===Gi,g.type),Ft&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,ut,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ut,Q.width,Q.height,0,at,bt,null));else if(g.isDataTexture)if(Tt.length>0){Dt&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ut,Tt[0].width,Tt[0].height);for(let J=0,ct=Tt.length;J<ct;J++)ot=Tt[J],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,at,bt,ot.data):e.texImage2D(i.TEXTURE_2D,J,ut,ot.width,ot.height,0,at,bt,ot.data);g.generateMipmaps=!1}else Dt?(Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ut,Q.width,Q.height),D&&j(g,Q,at,bt)):e.texImage2D(i.TEXTURE_2D,0,ut,Q.width,Q.height,0,at,bt,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Dt&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ut,Tt[0].width,Tt[0].height,Q.depth);for(let J=0,ct=Tt.length;J<ct;J++)if(ot=Tt[J],g.format!==Rn)if(at!==null)if(Dt){if(D)if(g.layerUpdates.size>0){const pt=gc(ot.width,ot.height,g.format,g.type);for(const et of g.layerUpdates){const wt=ot.data.subarray(et*pt/ot.data.BYTES_PER_ELEMENT,(et+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,et,ot.width,ot.height,1,at,wt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,Q.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ut,ot.width,ot.height,Q.depth,0,ot.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,Q.depth,at,bt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,ut,ot.width,ot.height,Q.depth,0,at,bt,ot.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Dt&&Ft&&e.texStorage2D(i.TEXTURE_2D,lt,ut,Tt[0].width,Tt[0].height);for(let J=0,ct=Tt.length;J<ct;J++)ot=Tt[J],g.format!==Rn?at!==null?Dt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,J,ut,ot.width,ot.height,0,ot.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?D&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,at,bt,ot.data):e.texImage2D(i.TEXTURE_2D,J,ut,ot.width,ot.height,0,at,bt,ot.data)}else if(g.isDataArrayTexture)if(Dt){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,ut,Q.width,Q.height,Q.depth),D)if(g.layerUpdates.size>0){const J=gc(Q.width,Q.height,g.format,g.type);for(const ct of g.layerUpdates){const pt=Q.data.subarray(ct*J/Q.data.BYTES_PER_ELEMENT,(ct+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,Q.width,Q.height,1,at,bt,pt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,at,bt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,Q.width,Q.height,Q.depth,0,at,bt,Q.data);else if(g.isData3DTexture)Dt?(Ft&&e.texStorage3D(i.TEXTURE_3D,lt,ut,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,at,bt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ut,Q.width,Q.height,Q.depth,0,at,bt,Q.data);else if(g.isFramebufferTexture){if(Ft)if(Dt)e.texStorage2D(i.TEXTURE_2D,lt,ut,Q.width,Q.height);else{let J=Q.width,ct=Q.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,ut,J,ct,0,at,bt,null),J>>=1,ct>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),u.add(g),J.onpaint=ct=>{const pt=ct.changedElements;for(const et of u)pt.includes(et.image)&&(et.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const pt=i.RGBA,et=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,et,wt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Dt&&Ft){const J=te(Tt[0]);e.texStorage2D(i.TEXTURE_2D,lt,ut,J.width,J.height)}for(let J=0,ct=Tt.length;J<ct;J++)ot=Tt[J],Dt?D&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,at,bt,ot):e.texImage2D(i.TEXTURE_2D,J,ut,at,bt,ot);g.generateMipmaps=!1}else if(Dt){if(Ft){const J=te(Q);e.texStorage2D(i.TEXTURE_2D,lt,ut,J.width,J.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,bt,Q)}else e.texImage2D(i.TEXTURE_2D,0,ut,at,bt,Q);p(g)&&A(H),st.__version=rt.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ut(y,g,F){if(g.image.length!==6)return;const H=Jt(y,g),Y=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const rt=n.get(Y);if(Y.version!==rt.__version||H===!0){e.activeTexture(i.TEXTURE0+F);const st=Yt.getPrimaries(Yt.workingColorSpace),Z=g.colorSpace===Ti?null:Yt.getPrimaries(g.colorSpace),Q=g.colorSpace===Ti||st===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const at=g.isCompressedTexture||g.image[0].isCompressedTexture,bt=g.image[0]&&g.image[0].isDataTexture,ut=[];for(let et=0;et<6;et++)!at&&!bt?ut[et]=m(g.image[et],!0,r.maxCubemapSize):ut[et]=bt?g.image[et].image:g.image[et],ut[et]=Ye(g,ut[et]);const ot=ut[0],Tt=s.convert(g.format,g.colorSpace),Dt=s.convert(g.type),Ft=S(g.internalFormat,Tt,Dt,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,lt=rt.__version===void 0||H===!0,J=Y.dataReady;let ct=b(g,ot);qt(i.TEXTURE_CUBE_MAP,g);let pt;if(at){D&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,ot.width,ot.height);for(let et=0;et<6;et++){pt=ut[et].mipmaps;for(let wt=0;wt<pt.length;wt++){const St=pt[wt];g.format!==Rn?Tt!==null?D?J&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Ft,St.width,St.height,0,St.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,0,0,St.width,St.height,Tt,Dt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt,Ft,St.width,St.height,0,Tt,Dt,St.data)}}}else{if(pt=g.mipmaps,D&&lt){pt.length>0&&ct++;const et=te(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ft,et.width,et.height)}for(let et=0;et<6;et++)if(bt){D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,ut[et].width,ut[et].height,Tt,Dt,ut[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ft,ut[et].width,ut[et].height,0,Tt,Dt,ut[et].data);for(let wt=0;wt<pt.length;wt++){const pe=pt[wt].image[et].image;D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,pe.width,pe.height,Tt,Dt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Ft,pe.width,pe.height,0,Tt,Dt,pe.data)}}else{D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Tt,Dt,ut[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ft,Tt,Dt,ut[et]);for(let wt=0;wt<pt.length;wt++){const St=pt[wt];D?J&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,0,0,Tt,Dt,St.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,wt+1,Ft,Tt,Dt,St.image[et])}}}p(g)&&A(i.TEXTURE_CUBE_MAP),rt.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function gt(y,g,F,H,Y,rt){const st=s.convert(F.format,F.colorSpace),Z=s.convert(F.type),Q=S(F.internalFormat,st,Z,F.normalized,F.colorSpace),at=n.get(g),bt=n.get(F);if(bt.__renderTarget=g,!at.__hasExternalTextures){const ut=Math.max(1,g.width>>rt),ot=Math.max(1,g.height>>rt);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,rt,Q,ut,ot,g.depth,0,st,Z,null):e.texImage2D(Y,rt,Q,ut,ot,0,st,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),Re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Y,bt.__webglTexture,0,Me(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Y,bt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(y,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const H=g.depthTexture,Y=H&&H.isDepthTexture?H.type:null,rt=E(g.stencilBuffer,Y),st=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(g),rt,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(g),rt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,rt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,y)}else{const H=g.textures;for(let Y=0;Y<H.length;Y++){const rt=H[Y],st=s.convert(rt.format,rt.colorSpace),Z=s.convert(rt.type),Q=S(rt.internalFormat,st,Z,rt.normalized,rt.colorSpace);Re(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(g),Q,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(g),Q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Q,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(y,g,F){const H=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(i.TEXTURE_CUBE_MAP,g.depthTexture);const at=s.convert(g.depthTexture.format),bt=s.convert(g.depthTexture.type);let ut;g.depthTexture.format===di?ut=i.DEPTH_COMPONENT24:g.depthTexture.format===Gi&&(ut=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ut,g.width,g.height,0,at,bt,null)}}else it(g.depthTexture,0);const rt=Y.__webglTexture,st=Me(g),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Q=g.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===di)Re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,rt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,rt,0);else if(g.depthTexture.format===Gi)Re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,rt,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ht(y){const g=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const H=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=H}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(F)for(let H=0;H<6;H++)De(g.__webglFramebuffer[H],y,H);else{const H=y.texture.mipmaps;H&&H.length>0?De(g.__webglFramebuffer[0],y,0):De(g.__webglFramebuffer,y,0)}else if(F){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),zt(g.__webglDepthbuffer[H],y,!1);else{const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,rt)}}else{const H=y.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),zt(g.__webglDepthbuffer,y,!1);else{const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(y,g,F){const H=n.get(y);g!==void 0&&gt(H.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(y)}function fe(y){const g=y.texture,F=n.get(y),H=n.get(g);y.addEventListener("dispose",x);const Y=y.textures,rt=y.isWebGLCubeRenderTarget===!0,st=Y.length>1;if(st||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,a.memory.textures++),rt){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let Q=0;Q<g.mipmaps.length;Q++)F.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else F.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)F.__webglFramebuffer[Z]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(st)for(let Z=0,Q=Y.length;Z<Q;Z++){const at=n.get(Y[Z]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&Re(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){const Q=Y[Z];F.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);const at=s.convert(Q.format,Q.colorSpace),bt=s.convert(Q.type),ut=S(Q.internalFormat,at,bt,Q.normalized,Q.colorSpace,y.isXRRenderTarget===!0),ot=Me(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ut,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),qt(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)gt(F.__webglFramebuffer[Z][Q],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else gt(F.__webglFramebuffer[Z],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(g)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let Z=0,Q=Y.length;Z<Q;Z++){const at=Y[Z],bt=n.get(at);let ut=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ut=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,bt.__webglTexture),qt(ut,at),gt(F.__webglFramebuffer,y,at,i.COLOR_ATTACHMENT0+Z,ut,0),p(at)&&A(ut)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Z=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,H.__webglTexture),qt(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let Q=0;Q<g.mipmaps.length;Q++)gt(F.__webglFramebuffer[Q],y,g,i.COLOR_ATTACHMENT0,Z,Q);else gt(F.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,Z,0);p(g)&&A(Z),e.unbindTexture()}y.depthBuffer&&Ht(y)}function Vt(y){const g=y.textures;for(let F=0,H=g.length;F<H;F++){const Y=g[F];if(p(Y)){const rt=I(y),st=n.get(Y).__webglTexture;e.bindTexture(rt,st),A(rt),e.unbindTexture()}}}const _e=[],ze=[];function sn(y){if(y.samples>0){if(Re(y)===!1){const g=y.textures,F=y.width,H=y.height;let Y=i.COLOR_BUFFER_BIT;const rt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(y),Z=g.length>1;if(Z)for(let at=0;at<g.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const Q=y.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<g.length;at++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[at]);const bt=n.get(g[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,F,H,0,0,F,H,Y,i.NEAREST),l===!0&&(_e.length=0,ze.length=0,_e.push(i.COLOR_ATTACHMENT0+at),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&(_e.push(rt),ze.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let at=0;at<g.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,st.__webglColorRenderbuffer[at]);const bt=n.get(g[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Me(y){return Math.min(r.maxSamples,y.samples)}function Re(y){const g=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(y){const g=a.render.frame;d.get(y)!==g&&(d.set(y,g),y.update())}function Ye(y,g){const F=y.colorSpace,H=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==js&&F!==Ti&&(Yt.getTransfer(F)===ee?(H!==Rn||Y!==pn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",F)),g}function te(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=$t,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ng(i,t){function e(n,r=Ti){let s;const a=Yt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===Jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===au)return i.BYTE;if(n===ou)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===uu)return i.ALPHA;if(n===hu)return i.RGB;if(n===Rn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===du)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===tl)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===uo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===fo||n===po||n===mo||n===go||n===Js||n===_o)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ho||n===fo)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===po)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return s.COMPRESSED_R11_EAC;if(n===go)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Js)return s.COMPRESSED_RG11_EAC;if(n===_o)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xo||n===vo||n===Mo||n===So||n===yo||n===Eo||n===bo||n===To||n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Do)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ao)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Io||n===Uo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Lo)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Fo||n===Qs||n===Oo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===No)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:Fg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends Ui{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Bg,p={},A=e.getContextAttributes();let I=null,S=null;const E=[],b=[],w=new Rt;let x=null,T=null;const P=new An;P.viewport=new ye;const N=new An;N.viewport=new ye;const O=[P,N],G=new Xd;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=E[K];return j===void 0&&(j=new wa,E[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=E[K];return j===void 0&&(j=new wa,E[K]=j),j.getGripSpace()},this.getHand=function(K){let j=E[K];return j===void 0&&(j=new wa,E[K]=j),j.getHandSpace()};function $(K){const j=b.indexOf(K.inputSource);if(j===-1)return;const xt=E[j];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",it);for(let K=0;K<E.length;K++){const j=b[K];j!==null&&(b[K]=null,E[K].disconnect(j))}U=null,k=null,m.reset();for(const K in p)delete p[K];if(t.setRenderTarget(I),f=null,h=null,u=null,r=null,S=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(w.width,w.height,!1),T!==null){const K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(I=t.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",X),r.addEventListener("inputsourceschange",it),A.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(w),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ut=null,gt=null;A.depth&&(gt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=A.stencil?Gi:di,Ut=A.stencil?jr:Yn);const zt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(zt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Dn(h.textureWidth,h.textureHeight,{format:Rn,type:pn,depthTexture:new ns(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const xt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,e,xt),r.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Dn(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Jt.setContext(r),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(K){for(let j=0;j<K.removed.length;j++){const xt=K.removed[j],Ut=b.indexOf(xt);Ut>=0&&(b[Ut]=null,E[Ut].disconnect(xt))}for(let j=0;j<K.added.length;j++){const xt=K.added[j];let Ut=b.indexOf(xt);if(Ut===-1){for(let zt=0;zt<E.length;zt++)if(zt>=b.length){b.push(xt),Ut=zt;break}else if(b[zt]===null){b[zt]=xt,Ut=zt;break}if(Ut===-1)break}const gt=E[Ut];gt&&gt.connect(xt)}}const q=new R,tt=new R;function nt(K,j,xt){q.setFromMatrixPosition(j.matrixWorld),tt.setFromMatrixPosition(xt.matrixWorld);const Ut=q.distanceTo(tt),gt=j.projectionMatrix.elements,zt=xt.projectionMatrix.elements,De=gt[14]/(gt[10]-1),Ht=gt[14]/(gt[10]+1),$t=(gt[9]+1)/gt[5],fe=(gt[9]-1)/gt[5],Vt=(gt[8]-1)/gt[0],_e=(zt[8]+1)/zt[0],ze=De*Vt,sn=De*_e,Me=Ut/(-Vt+_e),Re=Me*-Vt;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Re),K.translateZ(Me),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),gt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const L=De+Me,Ye=Ht+Me,te=ze-Re,y=sn+(Ut-Re),g=$t*Ht/Ye*L,F=fe*Ht/Ye*L;K.projectionMatrix.makePerspective(te,y,g,F,L,Ye),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let j=K.near,xt=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),G.near=N.near=P.near=j,G.far=N.far=P.far=xt,(U!==G.near||k!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,k=G.far),G.layers.mask=K.layers.mask|6,P.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;const Ut=K.parent,gt=G.cameras;Ct(G,Ut);for(let zt=0;zt<gt.length;zt++)Ct(gt[zt],Ut);gt.length===2?nt(G,P,N):G.projectionMatrix.copy(P.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),At(K,G,Ut)};function At(K,j,xt){xt===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=es*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return p[K]};let de=null;function qt(K,j){if(d=j.getViewerPose(c||a),_=j,d!==null){const xt=d.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Ut=!1;xt.length!==G.cameras.length&&(G.cameras.length=0,Ut=!0);for(let Ht=0;Ht<xt.length;Ht++){const $t=xt[Ht];let fe=null;if(f!==null)fe=f.getViewport($t);else{const _e=u.getViewSubImage(h,$t);fe=_e.viewport,Ht===0&&(t.setRenderTargetTextures(S,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(S))}let Vt=O[Ht];Vt===void 0&&(Vt=new An,Vt.layers.enable(Ht),Vt.viewport=new ye,O[Ht]=Vt),Vt.matrix.fromArray($t.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray($t.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(fe.x,fe.y,fe.width,fe.height),Ht===0&&(G.matrix.copy(Vt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ut===!0&&G.cameras.push(Vt)}const gt=r.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const Ht=u.getDepthInformation(xt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,r.renderState)}if(gt&&gt.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let Ht=0;Ht<xt.length;Ht++){const $t=xt[Ht].camera;if($t){let fe=p[$t];fe||(fe=new bu,p[$t]=fe);const Vt=u.getCameraImage($t);fe.sourceTexture=Vt}}}}for(let xt=0;xt<E.length;xt++){const Ut=b[xt],gt=E[xt];Ut!==null&&gt!==void 0&&gt.update(Ut,j,c||a)}de&&de(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const Jt=new Ru;Jt.setAnimationLoop(qt),this.setAnimationLoop=function(K){de=K},this.dispose=function(){}}}const kg=new Ee,Nu=new Nt;Nu.set(-1,0,0,0,1,0,0,0,1);function Hg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,I,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=t.get(p),I=A.envMap,S=A.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=I*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Gg(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const b=E.program;n.uniformBlockBinding(S,b)}function c(S,E){let b=r[S.id];b===void 0&&(m(S),b=d(S),r[S.id]=b,S.addEventListener("dispose",A));const w=E.program;n.updateUBOMapping(S,w);const x=t.render.frame;s[S.id]!==x&&(h(S),s[S.id]=x)}function d(S){const E=u();S.__bindingPointIndex=E;const b=i.createBuffer(),w=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=r[S.id],b=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let x=0,T=b.length;x<T;x++){const P=b[x];if(Array.isArray(P))for(let N=0,O=P.length;N<O;N++)f(P[N],x,N,w);else f(P,x,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,E,b,w){if(M(S,E,b,w)===!0){const x=S.__offset,T=S.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){const O=T[N],G=p(O);_(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function _(S,E,b){typeof S=="number"||typeof S=="boolean"?E[0]=S:S.isMatrix3?(E[0]=S.elements[0],E[1]=S.elements[1],E[2]=S.elements[2],E[3]=0,E[4]=S.elements[3],E[5]=S.elements[4],E[6]=S.elements[5],E[7]=0,E[8]=S.elements[6],E[9]=S.elements[7],E[10]=S.elements[8],E[11]=0):ArrayBuffer.isView(S)?E.set(new S.constructor(S.buffer,S.byteOffset,E.length)):S.toArray(E,b)}function M(S,E,b,w){const x=S.value,T=E+"_"+b;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{const P=w[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(S){const E=S.uniforms;let b=0;const w=16;for(let T=0,P=E.length;T<P;T++){const N=Array.isArray(E[T])?E[T]:[E[T]];for(let O=0,G=N.length;O<G;O++){const U=N[O],k=Array.isArray(U.value)?U.value:[U.value];for(let $=0,X=k.length;$<X;$++){const it=k[$],q=p(it),tt=b%w,nt=tt%q.boundary,Ct=tt+nt;b+=nt,Ct!==0&&w-Ct<q.storage&&(b+=w-Ct),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=q.storage}}}const x=b%w;return x>0&&(b+=w-x),S.__size=b,S.__cache={},this}function p(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):It("WebGLRenderer: Unsupported uniform value type.",S),E}function A(S){const E=S.target;E.removeEventListener("dispose",A);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function I(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:I}}const Vg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function Wg(){return On===null&&(On=new Pd(Vg,16,16,Zi,qn),On.name="DFG_LUT",On.minFilter=$e,On.magFilter=$e,On.wrapS=ai,On.wrapT=ai,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Xg{constructor(t={}){const{canvas:e=Vh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=pn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const M=f,m=new Set([el,tl,jo]),p=new Set([pn,Yn,Qr,jr,Jo,Qo]),A=new Uint32Array(4),I=new Int32Array(4),S=new R;let E=null,b=null;const w=[],x=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,O=null,G=null,U=null,k=null;this._outputColorSpace=en;let $=0,X=0,it=null,q=-1,tt=null;const nt=new ye,Ct=new ye;let At=null;const de=new Xt(0);let qt=0,Jt=e.width,K=e.height,j=1,xt=null,Ut=null;const gt=new ye(0,0,Jt,K),zt=new ye(0,0,Jt,K);let De=!1;const Ht=new ll;let $t=!1,fe=!1;const Vt=new Ee,_e=new R,ze=new ye,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Re(){return it===null?j:1}let L=n;function Ye(v,C){return e.getContext(v,C)}let te,y,g,F,H,Y,rt,st,Z,Q,at,bt,ut,ot,Tt,Dt,Ft,D,lt,J,ct,pt,et;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ko}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),L===null){const C="webgl2";if(L=Ye(C,v),L===null)throw Ye(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(v){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Zt("WebGLRenderer: "+v.message),v}function wt(){te=new Wm(L),te.init(),ct=new Ng(L,te),y=new Um(L,te,t,ct),g=new Ig(L,te),y.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=L.createFramebuffer(),U=L.createFramebuffer(),k=L.createFramebuffer(),F=new qm(L),H=new vg,Y=new Ug(L,te,g,H,y,ct,F),rt=new Vm(P),st=new Kd(L),pt=new Lm(L,st),Z=new Xm(L,st,F,pt),Q=new Zm(L,Z,st,pt,F),D=new Km(L,y,Y),Tt=new Nm(H),at=new xg(P,rt,te,y,pt,Tt),bt=new Hg(P,H),ut=new Sg,ot=new wg(te),Ft=new Dm(P,rt,g,Q,_,l),Dt=new Lg(P,Q,y),et=new Gg(L,F,y,g),lt=new Im(L,te,F),J=new Ym(L,te,F),F.programs=at.programs,P.capabilities=y,P.extensions=te,P.properties=H,P.renderLists=ut,P.shadowMap=Dt,P.state=g,P.info=F}M!==pn&&(T=new Jm(M,e.width,e.height,o,r,s));const St=new zg(P,L);this.xr=St,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=te.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=te.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(Jt,K,!1))},this.getSize=function(v){return v.set(Jt,K)},this.setSize=function(v,C,V=!0){if(St.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=v,K=C,e.width=Math.floor(v*j),e.height=Math.floor(C*j),V===!0&&(e.style.width=v+"px",e.style.height=C+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(Jt*j,K*j).floor()},this.setDrawingBufferSize=function(v,C,V){Jt=v,K=C,j=V,e.width=Math.floor(v*V),e.height=Math.floor(C*V),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(M===pn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(nt)},this.getViewport=function(v){return v.copy(gt)},this.setViewport=function(v,C,V,B){v.isVector4?gt.set(v.x,v.y,v.z,v.w):gt.set(v,C,V,B),g.viewport(nt.copy(gt).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,C,V,B){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,C,V,B),g.scissor(Ct.copy(zt).multiplyScalar(j).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(v){g.setScissorTest(De=v)},this.setOpaqueSort=function(v){xt=v},this.setTransparentSort=function(v){Ut=v},this.getClearColor=function(v){return v.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,V=!0){let B=0;if(v){let z=!1;if(it!==null){const ft=it.texture.format;z=m.has(ft)}if(z){const ft=it.texture.type,_t=p.has(ft),dt=Ft.getClearColor(),vt=Ft.getClearAlpha(),yt=dt.r,Ot=dt.g,Gt=dt.b;_t?(A[0]=yt,A[1]=Ot,A[2]=Gt,A[3]=vt,L.clearBufferuiv(L.COLOR,0,A)):(I[0]=yt,I[1]=Ot,I[2]=Gt,I[3]=vt,L.clearBufferiv(L.COLOR,0,I))}else B|=L.COLOR_BUFFER_BIT}C&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Ft.dispose(),ut.dispose(),ot.dispose(),H.dispose(),rt.dispose(),Q.dispose(),pt.dispose(),et.dispose(),at.dispose(),St.dispose(),St.removeEventListener("sessionstart",Dl),St.removeEventListener("sessionend",Ll),Ni.stop()};function pe(v){v.preventDefault(),na("WebGLRenderer: Context Lost."),N=!0}function Qt(){na("WebGLRenderer: Context Restored."),N=!1;const v=F.autoReset,C=Dt.enabled,V=Dt.autoUpdate,B=Dt.needsUpdate,z=Dt.type;wt(),F.autoReset=v,Dt.enabled=C,Dt.autoUpdate=V,Dt.needsUpdate=B,Dt.type=z}function Sn(v){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Un(v){const C=v.target;C.removeEventListener("dispose",Un),ih(C)}function ih(v){rh(v),H.remove(v)}function rh(v){const C=H.get(v).programs;C!==void 0&&(C.forEach(function(V){at.releaseProgram(V)}),v.isShaderMaterial&&at.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,V,B,z,ft){C===null&&(C=sn);const _t=z.isMesh&&z.matrixWorld.determinantAffine()<0,dt=oh(v,C,V,B,z);g.setMaterial(B,_t);let vt=V.index,yt=1;if(B.wireframe===!0){if(vt=Z.getWireframeAttribute(V),vt===void 0)return;yt=2}const Ot=V.drawRange,Gt=V.attributes.position;let Mt=Ot.start*yt,jt=(Ot.start+Ot.count)*yt;ft!==null&&(Mt=Math.max(Mt,ft.start*yt),jt=Math.min(jt,(ft.start+ft.count)*yt)),vt!==null?(Mt=Math.max(Mt,0),jt=Math.min(jt,vt.count)):Gt!=null&&(Mt=Math.max(Mt,0),jt=Math.min(jt,Gt.count));const Ce=jt-Mt;if(Ce<0||Ce===1/0)return;pt.setup(z,B,dt,V,vt);let ge,oe=lt;if(vt!==null&&(ge=st.get(vt),oe=J,oe.setIndex(ge)),z.isMesh)B.wireframe===!0?(g.setLineWidth(B.wireframeLinewidth*Re()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(z.isLine){let qe=B.linewidth;qe===void 0&&(qe=1),g.setLineWidth(qe*Re()),z.isLineSegments?oe.setMode(L.LINES):z.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else z.isPoints?oe.setMode(L.POINTS):z.isSprite&&oe.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const qe=z._multiDrawStarts,mt=z._multiDrawCounts,Qe=z._multiDrawCount,Kt=vt?st.get(vt).bytesPerElement:1,gn=H.get(B).currentProgram.getUniforms();for(let Nn=0;Nn<Qe;Nn++)gn.setValue(L,"_gl_DrawID",Nn),oe.render(qe[Nn]/Kt,mt[Nn])}else if(z.isInstancedMesh)oe.renderInstances(Mt,Ce,z.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,mt=Math.min(V.instanceCount,qe);oe.renderInstances(Mt,Ce,mt)}else oe.render(Mt,Ce)};function Pl(v,C,V,B){O!==null&&v.isNodeMaterial&&O.setObject(B,v),$t===!0&&Tt.setState(v,V,!1),v.transparent===!0&&v.side===zn&&v.forceSinglePass===!1?(v.side=cn,v.needsUpdate=!0,ps(v,C,B),v.side=qi,v.needsUpdate=!0,ps(v,C,B),v.side=zn):ps(v,C,B)}this.compile=function(v,C,V=null){V===null&&(V=v),O!==null&&O.renderStart(v,C,V),b=ot.get(V),b.init(C),x.push(b),V.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),v!==V&&v.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),fe=this.localClippingEnabled,$t=Tt.init(this.clippingPlanes,fe),$t===!0&&Tt.setGlobalState(this.clippingPlanes,C),O!==null&&Dt.render(b.state.shadowsArray,V,C);const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let _t=0;_t<ft.length;_t++){const dt=ft[_t];Pl(dt,V,C,z),B.add(dt)}else Pl(ft,V,C,z),B.add(ft)}),b=x.pop(),O!==null&&O.renderEnd(),B},this.compileAsync=function(v,C,V=null){const B=this.compile(v,C,V);return new Promise(z=>{function ft(){if(B.forEach(function(_t){const vt=H.get(_t).currentProgram;(vt===void 0||vt.isReady())&&B.delete(_t)}),B.size===0){z(v);return}setTimeout(ft,10)}te.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ga=null;function sh(v){ga&&ga(v)}function Dl(){Ni.stop()}function Ll(){Ni.start()}const Ni=new Ru;Ni.setAnimationLoop(sh),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(v){ga=v,St.setAnimationLoop(v),v===null?Ni.stop():Ni.start()},St.addEventListener("sessionstart",Dl),St.addEventListener("sessionend",Ll),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(v,C);const V=St.enabled===!0&&St.isPresenting===!0,B=T!==null&&(it===null||V)&&T.begin(P,it);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(C),C=St.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,C,it),b=ot.get(v,x.length),b.init(C),b.state.textureUnits=Y.getTextureUnits(),x.push(b),Vt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Ht.setFromProjectionMatrix(Vt,Hn,C.reversedDepth),fe=this.localClippingEnabled,$t=Tt.init(this.clippingPlanes,fe),E=ut.get(v,w.length),E.init(),w.push(E),St.enabled===!0&&St.isPresenting===!0){const _t=P.xr.getDepthSensingMesh();_t!==null&&_a(_t,C,-1/0,P.sortObjects)}_a(v,C,0,P.sortObjects),E.finish(),O!==null&&O.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(xt,Ut),Me=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Me&&Ft.addToRenderList(E,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Tt.beginShadows();const z=b.state.shadowsArray;if(Dt.render(z,v,C),$t===!0&&Tt.endShadows(),(B&&T.hasRenderPass())===!1){const _t=E.opaque,dt=E.transmissive;if(b.setupLights(),C.isArrayCamera){const vt=C.cameras;if(dt.length>0)for(let yt=0,Ot=vt.length;yt<Ot;yt++){const Gt=vt[yt];Ul(_t,dt,v,Gt)}Me&&Ft.render(v);for(let yt=0,Ot=vt.length;yt<Ot;yt++){const Gt=vt[yt];Il(E,v,Gt,Gt.viewport)}}else dt.length>0&&Ul(_t,dt,v,C),Me&&Ft.render(v),Il(E,v,C)}it!==null&&X===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),B&&T.end(P),v.isScene===!0&&v.onAfterRender(P,v,C),pt.resetDefaultState(),q=-1,tt=null,x.pop(),x.length>0?(b=x[x.length-1],Y.setTextureUnits(b.state.textureUnits),$t===!0&&Tt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,O!==null&&O.renderEnd()};function _a(v,C,V,B){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ht)){B&&ze.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Vt);const _t=Q.update(v),dt=v.material;dt.visible&&E.push(v,_t,dt,V,ze.z,null,C)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ht))){const _t=Q.update(v),dt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ze.copy(v.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ze.copy(_t.boundingSphere.center)),ze.applyMatrix4(v.matrixWorld).applyMatrix4(Vt)),Array.isArray(dt)){const vt=_t.groups;for(let yt=0,Ot=vt.length;yt<Ot;yt++){const Gt=vt[yt],Mt=dt[Gt.materialIndex];Mt&&Mt.visible&&E.push(v,_t,Mt,V,ze.z,Gt,C)}}else dt.visible&&E.push(v,_t,dt,V,ze.z,null,C)}}const ft=v.children;for(let _t=0,dt=ft.length;_t<dt;_t++)_a(ft[_t],C,V,B)}function Il(v,C,V,B){const{opaque:z,transmissive:ft,transparent:_t}=v;b.setupLightsView(V),$t===!0&&Tt.setGlobalState(P.clippingPlanes,V),B&&g.viewport(nt.copy(B)),z.length>0&&fs(z,C,V),ft.length>0&&fs(ft,C,V),_t.length>0&&fs(_t,C,V),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ul(v,C,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[B.id]===void 0){const Mt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[B.id]=new Dn(1,1,{generateMipmaps:!0,type:Mt?qn:pn,minFilter:Hi,samples:Math.max(4,y.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const ft=b.state.transmissionRenderTarget[B.id],_t=B.viewport||nt;ft.setSize(_t.z*P.transmissionResolutionScale,_t.w*P.transmissionResolutionScale);const dt=P.getRenderTarget(),vt=P.getActiveCubeFace(),yt=P.getActiveMipmapLevel();P.setRenderTarget(ft),P.getClearColor(de),qt=P.getClearAlpha(),qt<1&&P.setClearColor(16777215,.5),P.clear(),Me&&Ft.render(V);const Ot=P.toneMapping;P.toneMapping=Vn;const Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),b.setupLightsView(B),$t===!0&&Tt.setGlobalState(P.clippingPlanes,B),fs(v,V,B),Y.updateMultisampleRenderTarget(ft),Y.updateRenderTargetMipmap(ft),te.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let jt=0,Ce=C.length;jt<Ce;jt++){const ge=C[jt],{object:oe,geometry:qe,material:mt,group:Qe}=ge;if(mt.side===zn&&oe.layers.test(B.layers)){const Kt=mt.side;mt.side=cn,mt.needsUpdate=!0,Nl(oe,V,B,qe,mt,Qe),mt.side=Kt,mt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Y.updateMultisampleRenderTarget(ft),Y.updateRenderTargetMipmap(ft))}P.setRenderTarget(dt,vt,yt),P.setClearColor(de,qt),Gt!==void 0&&(B.viewport=Gt),P.toneMapping=Ot}function fs(v,C,V){const B=C.isScene===!0?C.overrideMaterial:null;for(let z=0,ft=v.length;z<ft;z++){const _t=v[z],{object:dt,geometry:vt,group:yt}=_t;let Ot=_t.material;Ot.allowOverride===!0&&B!==null&&(Ot=B),dt.layers.test(V.layers)&&Nl(dt,C,V,vt,Ot,yt)}}function Nl(v,C,V,B,z,ft){O!==null&&z.isNodeMaterial&&O.setObject(v,z),v.onBeforeRender(P,C,V,B,z,ft),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,C,V,B,v,ft),z.transparent===!0&&z.side===zn&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,P.renderBufferDirect(V,C,B,z,v,ft),z.side=qi,z.needsUpdate=!0,P.renderBufferDirect(V,C,B,z,v,ft),z.side=zn):P.renderBufferDirect(V,C,B,z,v,ft),v.onAfterRender(P,C,V,B,z,ft)}function ps(v,C,V){C.isScene!==!0&&(C=sn);const B=H.get(v),z=b.state.lights,ft=b.state.shadowsArray,_t=z.state.version,dt=at.getParameters(v,z.state,ft,C,V,b.state.lightProbeGridArray),vt=at.getProgramCacheKey(dt);let yt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,B.fog=C.fog;const Ot=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=rt.get(v.envMap||B.environment,Ot),B.envMapRotation=B.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,yt===void 0&&(v.addEventListener("dispose",Un),yt=new Map,B.programs=yt);let Gt=yt.get(vt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===_t)return Ol(v,dt),Gt}else dt.uniforms=at.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,V,dt),v.onBeforeCompile(dt,P),Gt=at.acquireProgram(dt,vt),yt.set(vt,Gt),B.uniforms=dt.uniforms;const Mt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Mt.clippingPlanes=Tt.uniform),Ol(v,dt),B.needsLights=ch(v),B.lightsStateVersion=_t,B.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.sunLights.value=z.state.sun,Mt.sunLightShadows.value=z.state.sunShadow,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.sunShadowMatrix.value=z.state.sunShadowMatrix,Mt.sunShadowCascade.value=z.state.sunShadowCascade,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=b.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function Fl(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=Ys.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Ol(v,C){const V=H.get(v);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function ah(v,C){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(C.matrixWorld);for(let V=0,B=v.length;V<B;V++){const z=v[V];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function oh(v,C,V,B,z){C.isScene!==!0&&(C=sn),Y.resetTextureUnits();const ft=C.fog,_t=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?C.environment:null,dt=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Yt.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,yt=rt.get(B.envMap||_t,vt),Ot=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!V.morphAttributes.position,jt=!!V.morphAttributes.normal,Ce=!!V.morphAttributes.color;let ge=Vn;B.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ge=P.toneMapping);const oe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qe=oe!==void 0?oe.length:0,mt=H.get(B),Qe=b.state.lights;if($t===!0&&(fe===!0||v!==tt)){const me=v===tt&&B.id===q;Tt.setState(B,v,me)}let Kt=!1;B.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==Qe.state.version||mt.outputColorSpace!==dt||z.isBatchedMesh&&mt.batching===!1||!z.isBatchedMesh&&mt.batching===!0||z.isBatchedMesh&&mt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&mt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&mt.instancing===!1||!z.isInstancedMesh&&mt.instancing===!0||z.isSkinnedMesh&&mt.skinning===!1||!z.isSkinnedMesh&&mt.skinning===!0||z.isInstancedMesh&&mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&mt.instancingMorph===!1&&z.morphTexture!==null||mt.envMap!==yt||B.fog===!0&&mt.fog!==ft||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==Tt.numPlanes||mt.numIntersection!==Tt.numIntersection)||mt.vertexAlphas!==Ot||mt.vertexTangents!==Gt||mt.morphTargets!==Mt||mt.morphNormals!==jt||mt.morphColors!==Ce||mt.toneMapping!==ge||mt.morphTargetsCount!==qe||!!mt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,mt.__version=B.version);let gn=mt.currentProgram;Kt===!0&&(gn=ps(B,C,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,gn,mt));let Nn=!1,_i=!1,ji=!1;const se=gn.getUniforms(),Te=mt.uniforms;if(g.useProgram(gn.program)&&(Nn=!0,_i=!0,ji=!0),B.id!==q&&(q=B.id,_i=!0),mt.needsLights){const me=ah(b.state.lightProbeGridArray,z);mt.lightProbeGrid!==me&&(mt.lightProbeGrid=me,_i=!0)}if(Nn||tt!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),se.setValue(L,"projectionMatrix",v.projectionMatrix),se.setValue(L,"viewMatrix",v.matrixWorldInverse);const vi=se.map.cameraPosition;vi!==void 0&&vi.setValue(L,_e.setFromMatrixPosition(v.matrixWorld)),y.logarithmicDepthBuffer&&se.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&se.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,_i=!0,ji=!0)}if(mt.needsLights&&(Qe.state.sunShadowMap.length>0&&se.setValue(L,"sunShadowMap",Qe.state.sunShadowMap,Y),Qe.state.directionalShadowMap.length>0&&se.setValue(L,"directionalShadowMap",Qe.state.directionalShadowMap,Y),Qe.state.spotShadowMap.length>0&&se.setValue(L,"spotShadowMap",Qe.state.spotShadowMap,Y),Qe.state.pointShadowMap.length>0&&se.setValue(L,"pointShadowMap",Qe.state.pointShadowMap,Y)),z.isSkinnedMesh){se.setOptional(L,z,"bindMatrix"),se.setOptional(L,z,"bindMatrixInverse");const me=z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),se.setValue(L,"boneTexture",me.boneTexture,Y))}z.isBatchedMesh&&(se.setOptional(L,z,"batchingTexture"),se.setValue(L,"batchingTexture",z._matricesTexture,Y),se.setOptional(L,z,"batchingIdTexture"),se.setValue(L,"batchingIdTexture",z._indirectTexture,Y),se.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&se.setValue(L,"batchingColorTexture",z._colorsTexture,Y));const xi=V.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&D.update(z,V,gn),(_i||mt.receiveShadow!==z.receiveShadow)&&(mt.receiveShadow=z.receiveShadow,se.setValue(L,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&C.environment!==null&&(Te.envMapIntensity.value=C.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=Wg()),_i){if(se.setValue(L,"toneMappingExposure",P.toneMappingExposure),mt.needsLights&&lh(Te,ji),ft&&B.fog===!0&&bt.refreshFogUniforms(Te,ft),bt.refreshMaterialUniforms(Te,B,j,K,b.state.transmissionRenderTarget[v.id]),mt.needsLights&&mt.lightProbeGrid){const me=mt.lightProbeGrid;Te.probesSH.value=me.texture,Te.probesMin.value.copy(me.boundingBox.min),Te.probesMax.value.copy(me.boundingBox.max),Te.probesResolution.value.copy(me.resolution)}Ys.upload(L,Fl(mt),Te,Y)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ys.upload(L,Fl(mt),Te,Y),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&se.setValue(L,"center",z.center),se.setValue(L,"modelViewMatrix",z.modelViewMatrix),se.setValue(L,"normalMatrix",z.normalMatrix),se.setValue(L,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const me=B.uniformsGroups;for(let vi=0,tr=me.length;vi<tr;vi++){const zl=me[vi];et.update(zl,gn),et.bind(zl,gn)}}return gn}function lh(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function ch(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(v,C,V){const B=H.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),H.get(v.texture).__webglTexture=C,H.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const V=H.get(v);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,V=0){it=v,$=C,X=V;let B=null,z=!1,ft=!1;if(v){const dt=H.get(v);if(dt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,dt.__webglFramebuffer),nt.copy(v.viewport),Ct.copy(v.scissor),At=v.scissorTest,g.viewport(nt),g.scissor(Ct),g.setScissorTest(At),q=-1;return}else if(dt.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(dt.__hasExternalTextures)Y.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ot=v.depthTexture;if(dt.__boundDepthTexture!==Ot){if(Ot!==null&&H.has(Ot)&&(v.width!==Ot.image.width||v.height!==Ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}const vt=v.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);const yt=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(yt[C])?B=yt[C][V]:B=yt[C],z=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?B=H.get(v).__webglMultisampledFramebuffer:Array.isArray(yt)?B=yt[V]:B=yt,nt.copy(v.viewport),Ct.copy(v.scissor),At=v.scissorTest}else nt.copy(gt).multiplyScalar(j).floor(),Ct.copy(zt).multiplyScalar(j).floor(),At=De;if(V!==0&&(B=G),g.bindFramebuffer(L.FRAMEBUFFER,B)&&g.drawBuffers(v,B),g.viewport(nt),g.scissor(Ct),g.setScissorTest(At),z){const dt=H.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,dt.__webglTexture,V)}else if(ft){const dt=C;for(let vt=0;vt<v.textures.length;vt++){const yt=H.get(v.textures[vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+vt,yt.__webglTexture,V,dt)}}else if(v!==null&&V!==0){const dt=H.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,V)}q=-1};function Bl(v){const C=H.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=y.textureFormatReadable(v.format),C.__typeReadable=y.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,V,B,z,ft,_t,dt=0){if(!(v&&v.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt){g.bindFramebuffer(L.FRAMEBUFFER,vt);try{const yt=v.textures[dt],Ot=yt.format,Gt=yt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt);const Mt=Bl(yt);if(Mt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-B&&V>=0&&V<=v.height-z&&L.readPixels(C,V,B,z,ct.convert(Ot),ct.convert(Gt),ft)}finally{const yt=it!==null?H.get(it).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(v,C,V,B,z,ft,_t,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(vt=vt[_t]),vt)if(C>=0&&C<=v.width-B&&V>=0&&V<=v.height-z){g.bindFramebuffer(L.FRAMEBUFFER,vt);const yt=v.textures[dt],Ot=yt.format,Gt=yt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt);const Mt=Bl(yt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,jt),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(C,V,B,z,ct.convert(Ot),ct.convert(Gt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ce=it!==null?H.get(it).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ce);const ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wh(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,jt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(jt),L.deleteSync(ge),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,V=0){const B=Math.pow(2,-V),z=Math.floor(v.image.width*B),ft=Math.floor(v.image.height*B),_t=C!==null?C.x:0,dt=C!==null?C.y:0;Y.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,_t,dt,z,ft),g.unbindTexture()},this.copyTextureToTexture=function(v,C,V=null,B=null,z=0,ft=0){let _t,dt,vt,yt,Ot,Gt,Mt,jt,Ce;const ge=v.isCompressedTexture?v.mipmaps[ft]:v.image;if(V!==null)_t=V.max.x-V.min.x,dt=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,yt=V.min.x,Ot=V.min.y,Gt=V.isBox3?V.min.z:0;else{const Te=Math.pow(2,-z);_t=Math.floor(ge.width*Te),dt=Math.floor(ge.height*Te),v.isDataArrayTexture?vt=ge.depth:v.isData3DTexture?vt=Math.floor(ge.depth*Te):vt=1,yt=0,Ot=0,Gt=0}B!==null?(Mt=B.x,jt=B.y,Ce=B.z):(Mt=0,jt=0,Ce=0);const oe=ct.convert(C.format),qe=ct.convert(C.type);let mt;C.isData3DTexture?(Y.setTexture3D(C,0),mt=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Y.setTexture2DArray(C,0),mt=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(C,0),mt=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);const Qe=g.getParameter(L.UNPACK_ROW_LENGTH),Kt=g.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=g.getParameter(L.UNPACK_SKIP_PIXELS),Nn=g.getParameter(L.UNPACK_SKIP_ROWS),_i=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,yt),g.pixelStorei(L.UNPACK_SKIP_ROWS,Ot),g.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);const ji=v.isDataArrayTexture||v.isData3DTexture,se=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const Te=H.get(v),xi=H.get(C),me=H.get(Te.__renderTarget),vi=H.get(xi.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,me.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let tr=0;tr<vt;tr++)ji&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(v).__webglTexture,z,Gt+tr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,H.get(C).__webglTexture,ft,Ce+tr)),L.blitFramebuffer(yt,Ot,_t,dt,Mt,jt,_t,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||H.has(v)){const Te=H.get(v),xi=H.get(C);g.bindFramebuffer(L.READ_FRAMEBUFFER,U),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let me=0;me<vt;me++)ji?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,z,Gt+me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,z),se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xi.__webglTexture,ft,Ce+me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xi.__webglTexture,ft),z!==0?L.blitFramebuffer(yt,Ot,_t,dt,Mt,jt,_t,dt,L.COLOR_BUFFER_BIT,L.NEAREST):se?L.copyTexSubImage3D(mt,ft,Mt,jt,Ce+me,yt,Ot,_t,dt):L.copyTexSubImage2D(mt,ft,Mt,jt,yt,Ot,_t,dt);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else se?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(mt,ft,Mt,jt,Ce,_t,dt,vt,oe,qe,ge.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(mt,ft,Mt,jt,Ce,_t,dt,vt,oe,ge.data):L.texSubImage3D(mt,ft,Mt,jt,Ce,_t,dt,vt,oe,qe,ge):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,Mt,jt,_t,dt,oe,qe,ge.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,Mt,jt,ge.width,ge.height,oe,ge.data):L.texSubImage2D(L.TEXTURE_2D,ft,Mt,jt,_t,dt,oe,qe,ge);g.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Kt),g.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),g.pixelStorei(L.UNPACK_SKIP_ROWS,Nn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,_i),ft===0&&C.generateMipmaps&&L.generateMipmap(mt),g.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){$=0,X=0,it=null,g.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const zc={type:"change"},dl={type:"start"},Fu={type:"end"},ks=new yu,kc=new ri,Yg=Math.cos(70*Ne.DEG2RAD),Le=new R,an=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$a=1e-6;class qg extends Yd{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Sr.ROTATE,MIDDLE:Sr.DOLLY,RIGHT:Sr.PAN},this.touches={ONE:vr.ROTATE,TWO:vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Ci,this._lastTargetPosition=new R,this._quat=new Ci().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pc,this._sphericalDelta=new pc,this._scale=1,this._panOffset=new R,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new R,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zg.bind(this),this._onPointerDown=Kg.bind(this),this._onPointerUp=$g.bind(this),this._onContextMenu=i_.bind(this),this._onMouseWheel=jg.bind(this),this._onKeyDown=t_.bind(this),this._onTouchStart=e_.bind(this),this._onTouchMove=n_.bind(this),this._onMouseDown=Jg.bind(this),this._onMouseMove=Qg.bind(this),this._interceptControlDown=r_.bind(this),this._interceptControlUp=s_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ie.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zc),this.update(),this.state=ie.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),r<-Math.PI?r+=an:r>Math.PI&&(r-=an),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Le.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ks.origin.copy(this.object.position),ks.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ks.direction))<Yg?this.object.lookAt(this.target):(kc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ks.intersectPlane(kc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>$a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$a||this._lastTargetPosition.distanceToSquared(this.target)>$a?(this.dispatchEvent(zc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Le.copy(r).sub(this.target);let s=Le.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Kg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Zg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function $g(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fu),this.state=ie.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Sr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case Sr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case Sr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(dl)}function Qg(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fu))}function t_(i){this.enabled!==!1&&this._handleKeyDown(i)}function e_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(dl)}function n_(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function i_(i){this.enabled!==!1&&i.preventDefault()}function r_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const hs=4,Ou=7,le=.8,a_={base:"Company Yard · West Harbor"},Hc=[{name:"Corduroy Sofa",w:3,d:2,value:230,weight:4,vulnerability:0},{name:"Armchair",w:2,d:2,value:110,weight:2,vulnerability:0},{name:"Television",w:2,d:1,value:270,weight:2,vulnerability:8},{name:"Book Box",w:1,d:1,value:65,weight:3,vulnerability:0},{name:"Houseplant",w:1,d:1,value:85,weight:1,vulnerability:7},{name:"Dresser",w:2,d:1,value:160,weight:4,vulnerability:1},{name:"Floor Lamp",w:1,d:1,value:120,weight:1,vulnerability:11},{name:"Standing Mirror",w:1,d:2,value:310,weight:2,vulnerability:14},{name:"Piano",w:3,d:2,value:620,weight:7,vulnerability:9},{name:"China Box",w:1,d:1,value:390,weight:2,vulnerability:17}];function o_(i){let t=i>>>0;return()=>(t=Math.imul(1664525,t)+1013904223>>>0)/4294967296}function l_(i=0){const t=o_(i*997+41),e=Math.min(6+Math.floor(i/2),9),n=i===0?[0,1,2,3,4,5]:Array.from({length:e},(s,a)=>(a+i*2)%Hc.length);i>=2&&!n.includes(8)&&(n[n.length-1]=8);const r=[];return n.map((s,a)=>{const o=Hc[s],l=o.w*le/2,c=o.d*le/2;let d=-3,u=2;for(let h=0;h<250;h++){const f=-9.75+l+t()*(8.3-l*2),_=-4.75+c+t()*(8.7-c*2),M=(i+1)%2?Math.abs(_+.35)<c+.32:Math.abs(f+5.6)<l+.32,m=r.some(p=>Math.abs(f-p.x)<l+p.hw+.24&&Math.abs(_-p.z)<c+p.hd+.24);if(!M&&!m){d=Math.round(f*10)/10,u=Math.round(_*10)/10;break}}return r.push({x:d,z:u,hw:l,hd:c}),{...o,model:s,id:a,fragile:o.vulnerability>=7,vulnerability:o.vulnerability+Math.min(i*1.5,9),condition:100,secured:!1,fallen:!1,location:"pickup",x:0,z:0,pickupX:d,pickupZ:u,rotated:!1}})}function fl(i=0){const t=["Baumann Family","Mara King","Morning Glow Café","Dr. Hoffman","Sun Deck Hotel","Northern Lights Gallery"],e=["First Apartment Move","Old House, Narrow Doors","Café Grand Opening","Delicate Private Move","Major Hotel Move-In","Premium Art Transport"],n=["Linden District","Old Town","Market Square","Park Avenue","Harbor Quarter","Museum Island"],r=["Sunny Heights","Birch Road","New Town","Lake View","Warehouse District","Culture Yard"],s=l_(i),a=Math.round(s.reduce((o,l)=>o+l.value,0)*(1+Math.min(i,8)*.08));return{client:t[i%t.length],title:e[i%e.length],from:n[i%n.length],to:r[i%r.length],difficulty:i+1,items:s,reward:a}}function Zn(i){return i.rotated?[i.d,i.w]:[i.w,i.d]}function c_(i,t,e,n,r=hs,s=Ou){const[a,o]=Zn(t);return Number.isInteger(e)&&Number.isInteger(n)&&e>=0&&n>=0&&e+a<=r&&n+o<=s&&!i.some(l=>{if(l.id===t.id||l.location!=="truck")return!1;const[c,d]=Zn(l);return e<l.x+c&&e+a>l.x&&n<l.z+d&&n+o>l.z})}function u_(i,t,e=hs,n=Ou){const[r,s]=Zn(t);let a=+(t.x===0)+ +(t.z===0)+ +(t.x+r===e)+ +(t.z+s===n);for(const o of i.filter(l=>l.id!==t.id&&l.location==="truck")){const[l,c]=Zn(o),d=(t.x+r===o.x||o.x+l===t.x)&&t.z<o.z+c&&t.z+s>o.z,u=(t.z+s===o.z||o.z+c===t.z)&&t.x<o.x+l&&t.x+r>o.x;(d||u)&&a++}return Math.min(a,3)}function h_(i){return Math.round(i.reduce((t,e)=>t+e.value*e.condition/100,0))}const Wr=new R;function xn(i,t,e,n,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Wr.copy(t),Wr[n]=0,Wr.normalize();const c=.5*a/(a+o),d=1-Wr.angleTo(i)/l;return Math.sign(Wr[e])===1?d*c:o/(a+o)+c+c*(1-d)}class pl extends mi{constructor(t=1,e=1,n=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new R,c=new R,d=new R(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,_=u.length/6,M=new R,m=.5/a;for(let p=0,A=0;p<u.length;p+=3,A+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=d.x*Math.sign(l.x)+c.x*s,u[p+1]=d.y*Math.sign(l.y)+c.y*s,u[p+2]=d.z*Math.sign(l.z)+c.z*s,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/_)){case 0:M.set(1,0,0),f[A+0]=xn(M,c,"z","y",s,n),f[A+1]=1-xn(M,c,"y","z",s,e);break;case 1:M.set(-1,0,0),f[A+0]=1-xn(M,c,"z","y",s,n),f[A+1]=1-xn(M,c,"y","z",s,e);break;case 2:M.set(0,1,0),f[A+0]=1-xn(M,c,"x","z",s,t),f[A+1]=xn(M,c,"z","x",s,n);break;case 3:M.set(0,-1,0),f[A+0]=1-xn(M,c,"x","z",s,t),f[A+1]=1-xn(M,c,"z","x",s,n);break;case 4:M.set(0,0,1),f[A+0]=1-xn(M,c,"x","y",s,t),f[A+1]=1-xn(M,c,"y","x",s,e);break;case 5:M.set(0,0,-1),f[A+0]=xn(M,c,"x","y",s,t),f[A+1]=1-xn(M,c,"y","x",s,e);break}}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.segments,t.radius)}}function d_(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new hn;let c=0;for(let d=0;d<i.length;++d){const u=i[d];let h=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(e){let d=0;const u=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let _=0;_<f.count;++_)u.push(f.getX(_)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(const d in s){const u=Gc(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in a){const u=a[d][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){const f=[];for(let M=0;M<a[d].length;++M)f.push(a[d][M][h]);const _=Gc(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(_)}}}return l}function Gc(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const d=i[c];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*e}const a=new t(s),o=new Ln(a,e,n);let l=0;for(let c=0;c<i.length;++c){const d=i[c];if(d.isInterleavedBufferAttribute){const u=l/e;for(let h=0,f=d.count;h<f;h++)for(let _=0;_<e;_++){const M=d.getComponent(h,_);o.setComponent(h+u,_,M)}}else a.set(d.array,l);l+=d.count*e}return r!==void 0&&(o.gpuType=r),o}const Ja=new Map;function Wn(i){return Ja.has(i)||Ja.set(i,new ha({color:i,roughness:.85})),Ja.get(i)}function W(i,t,e,n,r,s,a,o,l=!1){const c=new ue(l?new pl(r,s,a,2,Math.min(.09,r/4,s/4,a/4)):new mi(r,s,a),Wn(o));return c.position.set(t,e,n),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Tn(i,t,e,n,r,s,a=[1,1,1]){const o=new ue(new hl(r,12,10),Wn(s));return o.position.set(t,e,n),o.scale.set(...a),o.castShadow=!0,i.add(o),o}function Ho(i){i.material=i.material.clone();const t=i.material;return t.transparent=!0,t.opacity=1,i.userData.dynamic=!0,i}function ii(i,t,e,n,r,s=3,a="#f2c65a"){const o=document.createElement("canvas");o.width=768,o.height=192;const l=o.getContext("2d");l.fillStyle="rgba(26,48,50,.2)",l.beginPath(),l.roundRect(18,22,732,158,30),l.fill(),l.fillStyle=a,l.beginPath(),l.roundRect(10,10,732,158,28),l.fill(),l.lineWidth=7,l.strokeStyle="#fff4c7",l.stroke();const c=Math.min(68,590/Math.max(5,t.length)*2.15);l.fillStyle="#233d42",l.font=`900 ${c}px Barlow, sans-serif`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,376,90);const d=new cl(o);d.colorSpace=en;const u=new Su(new ol({map:d,transparent:!0,depthTest:!0}));return u.position.set(e,n,r),u.scale.set(s,s/4,1),i.add(u),u}function Bu(i,t,e=7391353,n=!1){const r=new He,s=n?1.65:2.35,a=n?1.15:1.55,o=new ha({color:e,emissive:e,emissiveIntensity:.16,transparent:!0,opacity:.86,roughness:.8}),l=new ue(new mi(s,.055,a),o);l.position.y=.04,l.receiveShadow=!0,l.userData.dynamic=!0,r.add(l);const c=(_,M,m,p)=>{W(r,_,.13,M,.38,.18,.12,16314847,!0).rotation.y=p<0?Math.PI:0,W(r,_+m*.13,.13,M+p*.13,.12,.18,.38,16314847,!0)};c(-s/2+.18,-a/2+.12,-1,-1),c(s/2-.18,-a/2+.12,1,-1),c(-s/2+.18,a/2-.12,-1,1),c(s/2-.18,a/2-.12,1,1),W(r,0,.25,0,.66,.31,.5,2506560,!0),W(r,-.16,.47,0,.22,.2,.24,e,!0),W(r,.17,.47,0,.22,.2,.24,15187289,!0);const d=document.createElement("canvas");d.width=640,d.height=230;const u=d.getContext("2d");u.fillStyle="#21363855",u.beginPath(),u.roundRect(25,26,590,178,36),u.fill(),u.fillStyle="#fffaf0",u.beginPath(),u.roundRect(14,14,590,178,34),u.fill(),u.lineWidth=9,u.strokeStyle="#263f40",u.stroke(),u.beginPath(),u.moveTo(278,191),u.lineTo(320,225),u.lineTo(354,191),u.fill(),u.stroke(),u.fillStyle="#344644",u.font="800 38px Barlow, sans-serif",u.textAlign="left",u.fillText(i.toUpperCase(),48,76),u.fillStyle="#182b2b",u.font="900 70px Barlow, sans-serif",u.fillText(t,48,157),u.fillStyle="#50b85c",u.fillRect(482,84,72,47),u.fillStyle="#8ee18b",u.fillRect(500,68,72,47),u.strokeStyle="#263f40",u.lineWidth=7,u.strokeRect(500,68,72,47);const h=new cl(d);h.colorSpace=en;const f=new Su(new ol({map:h,transparent:!0,depthTest:!0}));return f.position.set(0,n?1.45:1.78,0),f.scale.set(n?2.75:3.55,n?.99:1.28,1),r.add(f),r}function f_(i,t,e,n,r,s=2){const a=document.createElement("canvas");a.width=512,a.height=150;const o=a.getContext("2d");o.fillStyle="#e9c65f",o.fillRect(0,0,512,150),o.fillStyle="#263f40",o.font="900 66px Barlow, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(t,256,78);const l=new cl(a);l.colorSpace=en;const c=new ue(new us(s,s*150/512),new cs({map:l}));c.position.set(e,n,r),i.add(c)}function p_(i=14983231,t=0){const e=new He,n=new He;e.add(n);const r=[15119758,10382672,13209191][t%3];W(n,0,1,0,.64,.66,.39,i,!0),W(n,0,.73,.02,.59,.25,.4,3296353,!0),W(n,0,1.08,.215,.08,.43,.025,16377270),W(n,-.18,1.13,.22,.13,.15,.025,16377270),Tn(n,0,1.65,.02,.36,r,[1,1.08,.93]),Tn(n,-.35,1.65,.02,.08,r),Tn(n,.35,1.65,.02,.08,r),Tn(n,0,1.61,.35,.08,r);for(const o of[-.13,.13])Tn(n,o,1.71,.324,.046,2435890),W(n,o,1.81,.32,.11,.035,.03,5323570,!0);W(n,0,1.5,.342,.11,.025,.025,8477001,!0),Tn(n,0,1.91,-.035,.35,t%2?5719095:2506572,[1.04,.43,1.03]),t%2===0&&(W(n,0,1.92,.32,.63,.075,.36,i,!0),W(n,0,1.9,.55,.5,.055,.38,i,!0)),W(n,0,1.18,.225,.43,.34,.025,15721405,!0);for(const o of[-.27,.27])W(n,o,1.18,.233,.07,.55,.025,15721405,!0);const s=[],a=[];for(const o of[-1,1]){const l=new He;l.position.set(o*.18,.7,0),n.add(l),W(l,0,-.25,0,.24,.55,.28,3296353,!0),W(l,0,-.59,.07,.28,.19,.44,2634556,!0),s.push(l);const c=new He;c.position.set(o*.39,1.24,0),n.add(c),W(c,0,-.13,0,.22,.36,.27,i,!0),W(c,0,-.37,0,.18,.27,.2,r,!0),Tn(c,0,-.51,.015,.115,r),a.push(c)}return e.userData.rig={body:n,legs:s,arms:a},{root:e,animate(o,l,c=!1,d=!1){const u=d?13.5:8.4,h=d?.72:.42;n.position.y=l?Math.abs(Math.sin(o*u))*(d?.065:.035):Math.sin(o*1.8)*.008,n.rotation.z=l?Math.sin(o*u/2)*(d?.035:.018):0,n.rotation.x=d?.13:0,s.forEach((f,_)=>f.rotation.x=l?Math.sin(o*u+_*Math.PI)*h:0),a.forEach((f,_)=>f.rotation.x=c?-1.12:l?-Math.sin(o*u+_*Math.PI)*(d?.62:.34):.02)}}}function m_(i){const t=new He;if(i===0||i===1){const e=i===0?2.28:1.44,n=i===0?13400401:6396560;W(t,0,.46,0,e,.5,1.4,n,!0),W(t,0,.95,-.57,e,.83,.24,n,!0);for(const s of[-1,1])W(t,s*(e/2-.12),.73,0,.22,.48,1.4,n,!0),W(t,s*(e/2-.2),.12,.45,.12,.24,.12,6837063);const r=i===0?2:1;for(let s=0;s<r;s++)W(t,(s-(r-1)/2)*.95,.76,.02,i===0?.91:1.05,.17,1.01,i===0?14721135:9287842,!0)}else if(i===2)W(t,0,.76,0,1.45,1.05,.17,2440008,!0),W(t,0,.77,.096,1.29,.89,.02,6655645),W(t,0,.18,0,.14,.3,.14,2440008),W(t,0,.05,0,.6,.1,.5,2440008);else if(i===3)W(t,0,.36,0,.71,.72,.71,12489310,!0),W(t,0,.726,0,.14,.015,.71,15324324),ii(t,"BOOKS",0,.4,.36,.55,"#dab989");else if(i===4){const e=new ue(new fi(.29,.22,.49,12),Wn(14059109));e.position.y=.25,t.add(e);for(let n=0;n<7;n++){const r=n*2.4,s=Tn(t,Math.sin(r)*.18,.8+n%3*.11,Math.cos(r)*.18,.23,n%2?7380055:4424296,[.45,1.6,.55]);s.rotation.z=Math.sin(r)*.65}}else if(i===5){W(t,0,.56,0,1.5,1.08,.72,11040848,!0);for(let e=0;e<3;e++)W(t,0,.24+e*.32,.371,1.36,.27,.035,12950638),W(t,0,.24+e*.32,.403,.3,.04,.04,4608076)}else if(i===6){const e=new ue(new fi(.34,.4,.12,16),Wn(4215382));e.position.y=.06,t.add(e),W(t,0,.83,0,.08,1.55,.08,4215382);const n=new ue(new is(.43,.62,16,1,!0),Wn(15321203));n.position.y=1.55,n.rotation.x=Math.PI,t.add(n)}else if(i===7)W(t,0,1.02,0,.95,1.95,.18,7756355,!0),W(t,0,1.02,.1,.76,1.7,.025,10207944,!0),W(t,0,.08,-.05,1.15,.16,.55,7756355,!0);else if(i===8){W(t,0,.78,0,2.35,1.42,1.22,3159611,!0),W(t,0,1.43,-.23,2.2,.18,.7,2435630,!0),W(t,0,.92,.65,2.15,.13,.48,15526105);for(let e=0;e<10;e++)W(t,-1+e*.22,1.01,.76,.025,.12,.3,3225146);for(const e of[-.9,.9])W(t,e,.25,.2,.17,.5,.17,2435630)}else W(t,0,.42,0,.72,.82,.72,13081188,!0),ii(t,"FRAGILE",0,.45,.38,.72,"#efb36d");return t}const Pt={left:1.4,front:.2,back:5.8,height:.78,right:4.6,rampEnd:8.8,depth:7};function zu(i=7,t=0,e=0){const n=new He,r=Pt.front+i*.8,s=r-Pt.front,a=(r+Pt.front)/2,o=e?15777087:13146951,l=e>1?16052194:e?14935256:13092536;Pt.back=r,Pt.rampEnd=r+2.2,Pt.depth=i,W(n,3,.55,a,3.3,.42,s+.2,3162186,!0),W(n,3,.735,a,3.2,.09,s,13350548),W(n,3,1.9,.15,3.3,2.65,.15,l);for(const f of[1.35,4.65]){W(n,f,.99,a,.1,.4,s+.2,l),W(n,f,2.8,a,.08,.1,s+.2,9808549);for(const _ of[.15,r+.05])W(n,f,1.95,_,.09,1.8,.09,12240831)}W(n,3,1.19,-1.05,3.2,1.65,2.1,o,!0),W(n,3,1.8,-2.12,2.82,.65,.04,6523029),W(n,3,2.03,-1.05,3.3,.14,2.2,16111479,!0),W(n,3,.63,-2.16,3.15,.28,.16,4150615,!0),W(n,3,.91,-2.2,1.05,.2,.05,6517617,!0);for(const f of[1.78,4.22])W(n,f,1.04,-2.23,.48,.24,.05,16770720,!0),W(n,f,1.58,-2.19,.19,.13,.06,14253140,!0);for(const f of[1.25,4.75])W(n,f,1.65,-1.25,.22,.15,.38,3164235,!0);for(const f of[1.37,4.63]){W(n,f,1.78,-1,.025,.55,1.5,6523029);for(const _ of[-1.2,r-.45]){const M=new ue(new fi(.46,.46,.28,16),Wn(2504510));M.rotation.z=Math.PI/2,M.position.set(f,.46,_),M.castShadow=!0,n.add(M);const m=new ue(new fi(.23,.23,.3,12),Wn(10203048));m.rotation.z=Math.PI/2,m.position.copy(M.position),n.add(m)}}for(const f of[1.8,4.2])W(n,f,.95,-2.13,.45,.22,.06,16772529,!0);i<=5&&(W(n,1.34,1.18,1.25,.035,.42,.75,10120780,!0),W(n,4.66,2.18,2.7,.035,.3,.9,11040336,!0),W(n,2.35,2.08,-2.14,.55,.18,.025,9660487,!0));const c=new He;c.position.set(3,.78,r),n.add(c),W(c,0,0,1.15,3.2,.09,2.3,8690328,!0);const d=new He,u=new He;if(d.position.set(1.4,1.75,r+.07),u.position.set(4.6,1.75,r+.07),n.add(d,u),W(d,.8,0,0,1.55,1.9,.08,l),W(u,-.8,0,0,1.55,1.9,.08,l),t){const f=new He;f.name="shelf",W(f,1.7,1.55,1.35,.55,.08,2.1,7047042);for(const _ of[.35,2.35])W(f,1.7,.75,_,.08,1.6,.08,5402218);t>1&&W(f,1.7,2.2,1.35,.55,.08,2.1,7047042),n.add(f)}f_(n,e?"MOVECRAFT":"M • MOVING",3,1.18,-2.205,1.75);const h=Ho(W(n,3,2.83,a,3.32,.09,s,e>1?14862703:10134942,!0));if(e>1)for(const f of[a-s*.32,a+s*.32])W(n,3,2.76,f,2.9,.08,.08,16044905);for(let f=0;f<=4;f++)W(n,1.4+f*.8,.788,a,.018,.008,s,15392707);for(let f=0;f<=i;f++)W(n,3,.79,.2+f*.8,3.2,.008,.018,15392707);return n.userData.rampPivot=c,n.userData.leftDoor=d,n.userData.rightDoor=u,n.userData.roof=h,n}const Vc={x:-5.5,z:1},ra={office:new R(-8,0,-.8),worker:new R(-5.2,0,-3.65),base:new R(-10.7,0,-3.5)};function ml(i,t=0,e=0){const n=new He,r=[],s=[],a=[];W(n,0,-.4,0,150,.6,110,9481336),W(n,0,-.03,12,150,.12,6,6846843),W(n,0,.03,8.4,150,.13,1.1,14210238),W(n,0,.03,15.6,150,.13,1.1,14210238);for(let u=-49;u<50;u+=4)W(n,u,.04,12,1.9,.012,.1,15328456);for(const u of[-1,1]){const h=u*40;W(n,h,1.55,8.72,13,3.1,.55,4215894,!0),W(n,h,.43,15.28,13,.86,.48,5203303,!0);for(const _ of[-5.6,-3.6,-1.6,.4,2.4,4.4,6.2])W(n,h+_,1.62,8.92,.32,3.25,.32,6387063,!0),W(n,h+_,1.62,15.08,.32,3.25,.32,6387063,!0),W(n,h+_,3.18,12,.34,.3,6.45,6387063,!0);W(n,u*33.55,1.75,8.9,.55,3.5,.65,7439493,!0),W(n,u*33.55,1.75,15.1,.55,3.5,.65,7439493,!0),W(n,u*33.55,3.36,12,.58,.35,6.85,7439493,!0);const f=Ho(W(n,h,3.38,12,13,.18,6.5,5400938,!0));a.push({mesh:f,kind:"tunnel",center:h});for(const _ of[-5,-2.5,0,2.5,5])W(n,h+_,2.75,9.03,1.15,.12,.14,16768121,!0),W(n,h+_,.73,15.01,1.15,.12,.14,16768121,!0),W(n,h+_,.08,9.15,.32,.03,.14,14137423),W(n,h+_,.08,14.85,.32,.03,.14,14137423);ii(n,u>0?"CITY TUNNEL →":"← CITY TUNNEL",u*33.2,4.2,8.3,4.1,"#e2c766")}const o=[[14067580,12764323],[12110289,14794138],[13088210,12110757],[14729611,11454401]],l=i==="base"?[9149076,11709856]:o[e%o.length];function c(u,h,f){W(n,u,2,h,6,4,5,f,!0),r.push({x:u,z:h,w:6.3,d:5.3});const _=new ue(new is(4.6,2.4,4),Wn(5859690));_.rotation.y=Math.PI/4,_.position.set(u,4.9,h),_.scale.z=.83,_.castShadow=!0,n.add(_),W(n,u,1.1,h+2.54,1,2.2,.08,7173998);for(const M of[-1.8,1.8])W(n,u+M,2.4,h+2.56,1.12,1.3,.09,8762815),W(n,u+M,2.4,h+2.62,.065,1.3,.03,16313806),W(n,u+M,2.4,h+2.62,1.12,.065,.03,16313806)}if(c(-19,-8,l[0]),c(17,-10,l[1]),c(-19,21,l[1]),c(13,22,l[0]),i==="base"){if(W(n,-3,.04,0,19,.12,16,t?12173491:10985350),t){const u=10+Math.min(t-1,2)*3.5;W(n,-7+Math.min(t-1,2)*.8,2.1,-6.5,u,4.2,4,5402484,!0),r.push({x:-7,z:-6.5,w:u,d:4}),W(n,-7,4.35,-6.5,u+.5,.3,4.5,15253339);for(const h of[-9.5,-5]){W(n,h,1.7,-4.47,3.5,3.3,.05,9874082);for(let f=0;f<6;f++)W(n,h,.5+f*.49,-4.42,3.5,.025,.03,5795692)}ii(n,t>2?"MOVECRAFT • LOGISTICS HUB":"MOVECRAFT • GARAGE",-7,3.7,-4.15,6.5)}else{W(n,-8,1.25,-6.5,5.2,2.5,3.2,6912116,!0),r.push({x:-8,z:-6.5,w:5.4,d:3.4}),W(n,-8,2.62,-6.5,5.8,.16,3.7,9137234),W(n,-8,1.25,-4.86,1.4,2.3,.06,5136478),ii(n,"MOVECRAFT • TEMP YARD",-8,3.25,-5,5.2,"#dec06e");for(let u=0;u<7;u++)W(n,-11.5+u*1.55,.11,-1.8+u%2*3.9,.7,.03,.16,7368546)}W(n,-8,.8,-.8,2.8,.18,1.1,11898466);for(const u of[-9,-7])W(n,u,.4,-.8,.12,.8,.9,5402484);ii(n,"JOB BOARD",-8,1.6,-.8,2.5);for(let u=0;u<4;u++)W(n,-11+u%2,.4+Math.floor(u/2)*.8,3,.85,.8,.8,12097385,!0);for(let u=0;u<t;u++){W(n,7+u*5.2,.04,-2,4.4,.12,8,11450543);for(const h of[5.2+u*5.2,8.8+u*5.2])W(n,h,.11,-2,.08,.03,7,15788233)}if(t>=3){W(n,15,2.2,-7.5,9,4.4,5.5,6323067,!0),W(n,15,4.55,-7.5,9.5,.28,6,14728285,!0),ii(n,t>=4?"FURNITURE WORKS":"FLEET WORKSHOP",15,3.6,-4.7,5.5);for(let u=0;u<(t>=4?3:2);u++){const h=9+u*4.7;W(n,h,.58,3.2,3.1,.42,5.2,3426123,!0),W(n,h,1.45,1.1,3,1.65,1.8,14792519,!0);for(const f of[-1.18,1.18]){const _=new ue(new fi(.39,.39,.25,14),Wn(2504510));_.rotation.z=Math.PI/2,_.position.set(h+f,.43,2.4),n.add(_)}}}}else{W(n,-5.6,.045,-.3,9.4,.14,10.2,14337440);for(let h=0;h<18;h++)W(n,-10+h*.52,.12,-.3,.013,.01,10.2,13020550);W(n,-5.6,1.65,-5.45,9.6,3.3,.17,i==="pickup"?13876142:12045760),W(n,-10.4,.75,-.3,.17,1.5,10.4,12629154),W(n,-.8,.75,-.3,.17,1.5,10.4,12629154),W(n,-8.35,1.2,4.85,4.1,2.4,.17,12629154),W(n,-2.75,1.2,4.85,3.9,2.4,.17,12629154),W(n,-6.42,1.25,4.82,.16,2.5,.3,6648172),W(n,-4.58,1.25,4.82,.16,2.5,.3,6648172),W(n,-5.5,2.42,4.82,2,.16,.3,6648172),W(n,-8.5,.14,1.7,2.4,.025,1.7,12880496),W(n,-3,.14,-2.2,2.6,.025,1.8,7838610),r.push({x:-5.6,z:-5.45,w:9.6,d:.2},{x:-10.4,z:-.3,w:.2,d:10.4},{x:-.8,z:-.3,w:.2,d:10.4},{x:-8.35,z:4.85,w:4.1,d:.2},{x:-2.75,z:4.85,w:3.9,d:.2}),e%2?(W(n,-8.45,.72,-.35,3.9,1.44,.14,12168604),W(n,-2.75,.72,-.35,3.9,1.44,.14,12168604),r.push({x:-8.45,z:-.35,w:3.9,d:.2},{x:-2.75,z:-.35,w:3.9,d:.2})):(W(n,-5.6,.72,-3.2,.14,1.44,4.5,12168604),W(n,-5.6,.72,2.9,.14,1.44,3.9,12168604),r.push({x:-5.6,z:-3.2,w:.2,d:4.5},{x:-5.6,z:2.9,w:.2,d:3.9}));for(const h of[-8,-3])W(n,h,2,-5.33,1.8,1.6,.05,9419973),W(n,h,2,-5.28,.08,1.6,.03,16050380);ii(n,`${i==="pickup"?"PICKUP HOUSE":"DELIVERY HOUSE"} • ${String(e).padStart(2,"0")}`,-5.5,3.15,-5.15,3.8),i==="destination"&&(W(n,-5.5,.125,1,7.5,.01,6.5,10598299),ii(n,"DELIVER HERE",-5.5,1.7,-2.8,3.5));const u=new ue(new is(7.25,2.5,4),Wn(i==="pickup"?7561045:5401445).clone());u.rotation.y=Math.PI/4,u.position.set(-5.6,3.75,-.3),u.scale.set(.93,1,1.04),u.castShadow=!0,Ho(u),n.add(u),a.push({mesh:u,kind:"house"})}for(const u of[-45,45]){W(n,0,-.02,u,150,.1,6,7110015);for(let h=-68;h<=68;h+=11.5){const f=4.5+(Math.abs(Math.round(h))+e*3)%4*1.15,_=[11057328,12953996,9414314,11838651][Math.abs(Math.round(h/4)+e)%4];W(n,h,f/2,u+(u<0?-6:6),8.4,f,7.5,_,!0),W(n,h,f+.12,u+(u<0?-6:6),8.7,.24,7.8,5794668,!0);for(const M of[-2.3,0,2.3])W(n,h+M,Math.min(2.4,f-.8),u+(u<0?-2.21:2.21),1.05,.9,.04,8763586)}}for(const u of[-68,68])for(const h of[-26,-14,27]){const f=4.8+(Math.abs(h)+e)%4;W(n,u,f/2,h,8,f,8,10399143,!0),W(n,u,f+.12,h,8.3,.24,8.3,5400167,!0)}for(let u=0;u<30;u++){const h=u<15?-35+u*4.8:-35+(u-15)*4.8,f=u<15?-24:25;W(n,h,.9,f,.25,1.8,.25,9072725),Tn(n,h,2.35,f,1.2,u%3?7115876:9085029,[1,1.22,1]),Tn(n,h+.45,2.9,f,.75,9085029)}for(const u of[-14,10,23])W(n,u,1.6,8.2,.09,3.2,.09,5401451),Tn(n,u,3.3,8.2,.2,16574128);n.updateMatrixWorld(!0);const d=new Map;n.traverse(u=>{if(u instanceof ue&&u.material instanceof ha){const h=d.get(u.material)??[];h.push(u),d.set(u.material,h)}});for(const[u,h]of d){const f=h.map(m=>m.geometry.clone().applyMatrix4(m.matrixWorld)),_=d_(f);if(f.forEach(m=>m.dispose()),!_)continue;h.forEach(m=>{m.removeFromParent(),m.geometry.dispose()});const M=new ue(_,u);M.castShadow=!0,M.receiveShadow=!0,n.add(M)}return{root:n,obstacles:r,people:s,fadeables:a}}const g_=document.querySelector("#app");g_.innerHTML=`
<div id="world"></div><header><div class="brand"><b>M</b><span>MOVECRAFT<small id="company-level">SCRAPPY STARTUP</small></span></div><div class="place"><span>☀</span><span id="place"></span></div><div class="wallet"><small>COMPANY CASH</small><strong id="money"></strong></div><button id="settings" aria-label="Settings">⚙</button></header>
<aside class="mission collapsed"><button id="mission-toggle"><span><small>JOB <b id="job-no">01</b></small><strong id="mission-summary">Company yard</strong></span><i>⌄</i></button><div class="mission-body"><h1 id="job-title"></h1><p id="job-route"></p><ol id="steps"></ol><div id="objective"></div><div class="cargo-head"><span>CARGO & CONDITION</span><b id="count"></b></div><div id="items"></div><div class="reward"><small>MAX. PAYOUT</small><strong id="job-reward"></strong></div></div></aside>
<div class="scene-caption"><span id="district"></span><strong id="district-title"></strong></div>
<nav class="camera-tools collapsed"><button id="camera-toggle" aria-label="Camera">◉</button><div><button id="follow">◎<small>PLAYER</small></button><button id="truck-view">▦<small>TRUCK</small></button><button id="zoom-in" aria-label="Zoom in">＋</button><button id="zoom-out" aria-label="Zoom out">−</button></div></nav>
<div class="interaction" id="interaction"></div><div class="meters"><div class="meter"><small>SPRINT</small><span><i id="stamina"></i></span></div><div class="strap-count">STRAPS <b id="strap-count">0/3</b></div></div>
<div id="purchase" hidden><strong id="purchase-title"></strong><span><i id="purchase-fill"></i></span><small>STAND STILL TO BUY</small></div>
<footer><button id="action"><b>E</b><span>Interact</span></button><button id="enter"><b>F</b><span>Enter</span></button><button id="rotate"><b>R</b><span>Rotate</span></button><button id="strap"><b>Q</b><span>Secure</span></button><button id="rear"><b>G</b><span>Rear</span></button></footer>
<button class="help-toggle" id="help-toggle">?</button><div class="help collapsed">WASD: move · Shift: sprint · E: pick up/place<br>Q: attach first/second strap end · R: rotate · G: doors & ramp · F: cab<br>Mouse: orbit/zoom camera</div>
<div id="toast" role="status"></div><dialog id="panel"></dialog><div id="drive-hud" hidden><small id="drive-stage">TO THE TUNNEL</small><strong id="drive-target">Drive to the tunnel</strong><span>W/S accelerate & brake · A/D steer gently</span><b id="drive-speed">0 km/h</b></div>
<div class="touch-controls"><button data-key="KeyW">↑</button><button data-key="KeyA">←</button><button data-key="KeyS">↓</button><button data-key="KeyD">→</button></div>`;let ve="base",oi=!1,on=!1,Wi=!1,nn=!1,Xe=!1,$i=450,ku=0,wr=0,he=null,Ai=!1,Rr=!0,hi=0,pi=0,Cr=0,Di=0,Pr=0,$n=0,Xn=0,qs=100,si=1,Li=1,Xr=0,Ks="",Go=!1,Hu="base",sa="departure",be=0,wi=0,gl=0,aa=0,Xi=0,Gu=0,Vo=0,Ue=null,ae=null,Ie=fl(0),ce=Ie.items,br=!0,rs=.45;const Mn=new Map,Yi=new Map,oa=new Map,xe=new Set;let Se=null;const Et=i=>document.querySelector(i),ln=Et("#panel"),we=new Sd;we.background=new Xt(12637648);const gi=new Xg({antialias:!0});gi.setPixelRatio(Math.min(devicePixelRatio,1.6));gi.shadowMap.enabled=!0;gi.shadowMap.type=Zc;gi.toneMapping=Zo;gi.toneMappingExposure=1.2;Et("#world").appendChild(gi.domElement);const Fe=new da(-16,16,12,-12,.1,180);Fe.position.set(19,24,23);const mn=new qg(Fe,gi.domElement);mn.target.set(-1,.5,1);mn.enableDamping=!0;mn.minZoom=.6;mn.maxZoom=4.5;mn.minPolarAngle=.25;mn.maxPolarAngle=1.25;we.add(new kd(16118751,7439479,2.2));const ds=new Vd(16772293,3.2);ds.position.set(-15,30,18);ds.castShadow=!0;ds.shadow.mapSize.set(2048,2048);Object.assign(ds.shadow.camera,{left:-35,right:35,top:35,bottom:-35});we.add(ds);const _l=p_();we.add(_l.root);const Lt=_l.root;Lt.position.set(-8,0,.5);const xl=new ue(new ul(.4,.47,32),new cs({color:16176246,side:zn}));xl.rotation.x=-Math.PI/2;xl.position.y=.025;Lt.add(xl);let re=zu(5,0,0);we.add(re);let Cn=ml(ve,$n,Ie.difficulty),Vi=null;we.add(Cn.root);const ss=new Map,In=new He;W(In,0,.1,0,6.6,.08,4.4,7712376,!0);for(const i of[-3.05,3.05])W(In,i,.17,0,.13,.035,4,15982494);for(const i of[-1.9,1.9])W(In,0,.17,i,6.2,.035,.13,15982494);In.position.set(3,0,4);In.visible=!1;we.add(In);const Ri=Bu("COLLECT","PAYOUT",15187289);Ri.position.set(4,0,-3);Ri.visible=!1;we.add(Ri);const Gn=new ue(new mi(1,.035,1),new cs({color:7589786,transparent:!0,opacity:.65}));we.add(Gn);Gn.visible=!1;const ni=new R,ma=()=>5+Cr*2,Zs=()=>2+Pr*2,Wo=()=>ce.filter(i=>i.location==="truck"&&i.secured).length+(Se?1:0),Ae=new R,Ji=new Map;function Ur(i){i.traverse(t=>{t instanceof ue&&(t.geometry.dispose(),t.userData.dynamic&&t.material.dispose())})}function as(i,t){const e=Fe.position.clone().sub(mn.target);mn.target.copy(i),Fe.position.copy(i).add(e),t&&(Fe.zoom=t,Fe.updateProjectionMatrix())}function rn(i=420,t=.08){if(br)try{const e=new AudioContext,n=e.createOscillator(),r=e.createGain();n.frequency.value=i,n.type="sine",r.gain.setValueAtTime(rs*.08,e.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,e.currentTime+t),n.connect(r).connect(e.destination),n.start(),n.stop(e.currentTime+t)}catch{}}function vl(){const i=re.userData.leftDoor,t=re.userData.rightDoor,e=re.userData.rampPivot,n=a=>a*a*(3-2*a),r=n(Ne.clamp(Li/.72,0,1)),s=n(Ne.clamp((Li-.28)/.72,0,1));i&&(i.rotation.y=r*1.55),t&&(t.rotation.y=-r*1.55),e&&(e.rotation.x=Ne.lerp(-Math.PI/2,Math.atan(.78/2.2),s))}function Wc(i,t,e){const n=i.material;n.opacity=Ne.lerp(n.opacity,t,1-Math.exp(-5.5*e)),n.depthWrite=n.opacity>.55,i.castShadow=n.opacity>.55}function __(i){const t=Pn()&&!nn&&!Xe,e=re.userData.roof;e&&Wc(e,t||Xe?.06:1,i);for(const n of["cargo","gear"]){const r=ss.get(n);r&&(r.visible=t)}for(const n of Cn.fadeables){let r=!1;n.kind==="house"?r=!Xe&&Lt.position.x>-10.3&&Lt.position.x<-.9&&Lt.position.z>-5.4&&Lt.position.z<4.9:r=Xe&&Math.abs(Ae.x-(n.center??0))<7,Wc(n.mesh,r?.055:1,i)}}function Ii(i){return re.worldToLocal(i.clone())}function Dr(i){return re.localToWorld(i.clone())}function Xo(){Se&&(Se.line.removeFromParent(),Se.line.geometry.dispose(),Se.line.material.dispose(),Se=null)}function Ml(){for(const i of ss.values())i.removeFromParent(),Ur(i);ss.clear()}function os(){if(Ml(),ve!=="base")return;const i=(t,e,n,r,s,a=!1)=>{const o=El(t),l=o.level>=o.max?"MAX":`${o.cost.toLocaleString("en-US")} €`,c=Bu(r,l,s,a);c.position.copy(n),e.add(c),ss.set(t,c)};i("base",we,ra.base,"BUILD YARD",13729633),i("worker",we,ra.worker,"TRAIN",7189659),i("truck",re,new R(5.45,.02,-1),"ENGINE",14793039,!0),i("cargo",re,new R(2.18,.82,1.2),"CARGO BAY",7579589,!0),i("gear",re,new R(3.82,.82,1.2),"RACKS + STRAPS",14062680,!0)}function $s(){const i=re,t=i.position.clone(),e=i.rotation.clone();Xo(),re=zu(ma(),Di,pi),re.position.copy(t),re.rotation.copy(e),we.add(re),Ur(i),Li=si,vl(),Qi(),os()}function Qi(){for(const i of ce){let t=Mn.get(i.id);if(t||(t=m_(i.model),Mn.set(i.id,t),we.add(t)),he?.id===i.id)continue;const e=i.location==="truck"&&i.fallen&&!Xe;if(t.removeFromParent(),(i.location==="truck"&&!e?re:we).add(t),t.rotation.set(i.fallen?.4:0,i.rotated?Math.PI/2:0,i.fallen?.75:0),t.visible=i.location===ve||i.location==="truck",i.location==="truck"&&!e){const[n,r]=Zn(i);t.position.set(Pt.left+(i.x+n/2)*le,Pt.height,Pt.front+(i.z+r/2)*le)}else e?t.position.set(6+i.id%2*1.2,.13,4.2+Math.floor(i.id/2)*1.1):t.position.copy(oa.get(i.id)??new R(i.pickupX,.13,i.pickupZ));if(Yi.get(i.id)?.removeFromParent(),Yi.delete(i.id),i.secured&&i.location==="truck"&&!e){const n=new He,[r]=Zn(i),s=i.model===4?1.45:1.38;for(const a of[-1,1])W(n,a*r*le*.47,s/2,0,.05,s,.065,14464836);W(n,0,s,0,r*le,.04,.065,15056973),n.position.copy(t.position),n.userData.belt=!0,re.add(n),Yi.set(i.id,n)}}}function Pn(i=Lt.position){const t=Ii(i);return t.x>Pt.left&&t.x<Pt.right&&t.z>=Pt.front&&t.z<=Pt.back}function Yo(i){const t=Ii(i);if(t.x>Pt.left&&t.x<Pt.right){if(t.z>=Pt.front&&t.z<=Pt.back)return Pt.height;if(Li>.8&&t.z>Pt.back&&t.z<Pt.rampEnd)return Pt.height*(Pt.rampEnd-t.z)/(Pt.rampEnd-Pt.back)}return 0}const Vu=()=>Lt.position.distanceTo(Dr(new R(5.3,0,-1.1)))<2.2,Wu=()=>Lt.position.distanceTo(Dr(new R(3,0,Pt.back+1.25)))<2.4;function Sl(){if(ve!=="base")return null;if(Math.abs(Lt.position.x-ra.office.x)<1.25&&Math.abs(Lt.position.z-ra.office.z)<.85)return"office";for(const[i,t]of ss){if(!t.visible)continue;const e=t.getWorldPosition(new R);if(Math.hypot(Lt.position.x-e.x,Lt.position.z-e.z)<(i==="cargo"||i==="gear"?.72:1.05))return i}return null}function yl(){let i,t=1.8;for(const e of ce){if(e.location!==ve&&e.location!=="truck"||e.location==="destination"||e.location==="truck"&&!e.fallen&&!Pn())continue;const n=Mn.get(e.id).getWorldPosition(new R),r=Math.hypot(Lt.position.x-n.x,Lt.position.z-n.z);r<t&&(i=e,t=r)}return i}function Xu(){if(!he)return null;he.rotated=Ai;const[i,t]=Zn(he),e=new R(0,0,.4+Math.max(i,t)*le/2).applyQuaternion(Lt.quaternion).add(Lt.position),n=Ii(e),r=Ii(Lt.position),s=Math.round((n.x-Pt.left)/le-i/2),a=Math.round((n.z-Pt.front)/le-t/2),o=Pt.left+s*le,l=Pt.front+a*le,c=r.x>o-.15&&r.x<o+i*le+.15&&r.z>l-.15&&r.z<l+t*le+.15;return{x:s,z:a,w:i,d:t,valid:c_(ce,he,s,a,hs,ma())&&!c}}function x_(i){if(i.secured)return Wt("Remove the strap with Q first.");if(i.location==="truck"&&!i.fallen&&!Pn())return Wt("Open the rear and walk up the ramp.");const t=Mn.get(i.id),e=t.getWorldPosition(new R);we.attach(t),Ue={item:i,start:performance.now(),duration:(420+i.weight*360)/(1+Xn*.28),from:e},rn(280,.12),Wt(`${i.name}: ${i.fallen?"recovering it from the road …":i.weight>=4?"heavy — lift carefully …":"lifting …"}`)}function v_(i){Ue=null,he=i,Ai=i.rotated,i.location="hand",i.fallen=!1;const t=Mn.get(i.id);Lt.attach(t),t.position.set(0,.95,.9),t.rotation.set(0,Ai?Math.PI/2:0,0),rn(520,.1),Qi(),un()}function Yu(){if(ln.open||Xe||Ue)return;if(nn)return S_();const i=Sl();if(i==="office")return Qu();if(i)return Wt("Stand still on the pad to purchase the upgrade.");if(!oi)return Wt("Step onto the job pad by the workshop.");if(he){const e=he,n=Mn.get(e.id),r=n.getWorldPosition(new R);if(Pn()){const o=Xu();if(!o.valid)return Wt("It does not fit here. Press R to rotate it; red means blocked.");Object.assign(e,{location:"truck",x:o.x,z:o.z,rotated:Ai}),Wt(`${e.name} loaded. Tight packing protects it; Q uses a strap.`)}else ve==="destination"&&Math.abs(Lt.position.x-Vc.x)<4&&Math.abs(Lt.position.z-Vc.z)<3.7?(e.location="destination",oa.set(e.id,new R(-8+e.id%3*2.4,.13,-1+Math.floor(e.id/3)*3)),Wt(`${e.name} delivered.`)):(e.location=ve,oa.set(e.id,Lt.position.clone().add(new R(0,.13,.9).applyQuaternion(Lt.quaternion))),Wt("Placed down."));he=null,Qi();const s=n.parent,a=n.getWorldPosition(new R);if(we.attach(n),n.position.copy(r),ae={kind:"place",start:performance.now(),duration:520,object:n,from:r,to:a,finalParent:s},rn(360,.1),ce.every(o=>o.location==="destination")&&!on){const o=ce.reduce((c,d)=>c+d.value,0),l=ce.every(c=>c.condition===100);hi=Math.round(h_(ce)*Ie.reward/o*(l?1.1:1)),on=!0,Ri.visible=!0,Wt(l?`Perfect move! Collect ${hi} € including a 10% bonus on the gold pad.`:`Job complete. Collect ${hi} € on the gold pad.`)}un();return}const t=yl();t?x_(t):Wt("Move closer to an item or a rectangular tycoon pad.")}function qu(){if(!Se)return;const i=Ii(Lt.position);i.y+=1.12;const t=i.clone().sub(Se.anchor),e=t.length();Se.line.position.copy(Se.anchor).add(i).multiplyScalar(.5),Se.line.scale.set(1,e,1),Se.line.quaternion.setFromUnitVectors(new R(0,1,0),t.normalize())}function Ku(){if(he||nn||Xe||ln.open||Ue)return;if(Se){const c=ce.find(h=>h.id===Se.itemId),d=Ii(Lt.position);if(!c||c.location!=="truck")return Xo(),Wt("The loose strap was returned.");if(Math.abs(d.x-Se.anchor.x)<1.45)return Wt("Carry the free end to the opposite side of the cargo.");c.secured=!0,Xo(),Qi();const u=Yi.get(c.id);return u&&(u.scale.y=.02),ae={kind:"strap",start:performance.now(),duration:520,object:u},rn(620,.12),un(),Wt(`${c.name} secured from both sides (${Wo()}/${Zs()}).`)}const i=yl();if(!i||i.location!=="truck"||!Pn())return Wt("Stand beside an item inside the cargo bay.");if(i.secured)return i.secured=!1,Qi(),rn(310,.12),un(),Wt(`${i.name}: strap removed.`);if(Wo()>=Zs())return Wt(`All ${Zs()} straps are in use. Upgrade the cargo gear for more.`);const[t,e]=Zn(i),n=Pt.left+(i.x+t/2)*le,r=Pt.front+(i.z+e/2)*le,s=Ii(Lt.position),a=s.x<n?Pt.left+.06:Pt.right-.06,o=new R(a,Pt.height+.18,r),l=new ue(new fi(.045,.045,1,8),new ha({color:14924623,roughness:.68}));l.castShadow=!0,re.add(l),Se={itemId:i.id,anchor:o,line:l},qu(),rn(440,.1),un(),Wt("First side attached. Carry the free end across the cargo bay and press Q again.")}function Zu(){if(!(nn||Xe||he||Ue)){if(!Wu())return Wt("Move to the rear of the truck.");if(Pn()&&si>.5)return Wt("Leave the cargo bay first.");si=si>.5?0:1,rn(si?390:250,.18),Wt(si?"Rear doors opening, ramp lowering …":"Ramp lifting, rear doors closing …")}}function $u(){if(!(he||Xe||ln.open||Ue)){if(nn){nn=!1,Lt.visible=!0,Lt.position.copy(Dr(new R(5.35,0,-1.1))),Rr=!0,as(Lt.position,1.45),rn(330,.08),un();return}if(!Vu())return Wt("The driver door is at the front right.");ae={kind:"upgrade",start:performance.now(),duration:350,object:re},rn(440,.1),nn=!0,Lt.visible=!1,Rr=!1,as(Dr(new R(3,.8,(Pt.front+Pt.back)/2)),1.35),un(),Wt("Cab ready. Press E to start the next route, or F to step out.")}}function Ju(i){ln.innerHTML=`<button class="close">×</button>${i}`,ln.querySelector(".close").onclick=()=>ln.close(),ln.showModal(),xe.clear()}function El(i){return{truck:{level:pi,cost:650*(pi+1),max:4,name:"Truck",desc:"better engine, handling and bodywork"},cargo:{level:Cr,cost:850*(Cr+1),max:3,name:"Cargo Bay",desc:"a longer cargo floor with more packing space"},gear:{level:Math.min(Di,Pr),cost:550*(Math.min(Di,Pr)+1),max:3,name:"Racks & Straps",desc:"more straps, stronger anchors and visible shelving"},worker:{level:Xn,cost:500*(Xn+1),max:4,name:"Strength & Speed",desc:"faster lifting, carrying and sprint recovery"},base:{level:$n,cost:1100*($n+1),max:4,name:"Home Base",desc:"yard, garage, fleet workshop and furniture works"}}[i]}function M_(i){if(i==="office")return Qu();const t=El(i);if(t.level>=t.max)return Wt(`${t.name}: maximum level reached.`);if($i<t.cost)return Wt(`${t.cost} € required — complete more moves first.`);$i-=t.cost,i==="truck"&&(pi++,$s()),i==="cargo"&&(Cr++,$s()),i==="gear"&&(Di++,Pr++,$s()),i==="worker"&&Xn++,i==="base"&&($n++,we.remove(Cn.root),Ur(Cn.root),Cn=ml(ve,$n,Ie.difficulty),we.add(Cn.root),os()),ae={kind:"upgrade",start:performance.now(),duration:650,object:["truck","cargo","gear"].includes(i)?re:Lt},rn(720,.22),la(),os(),un(),Wt(`${t.name} level ${t.level+1}: ${t.desc}.`)}function Qu(){const i=Math.max(wr,Math.floor((pi+Xn+$n)*1.35)),t=oi&&!on?Ie:fl(i);Ju(`<div class="eyebrow">NEW MOVE · LEVEL ${t.difficulty}</div><h2>${t.title}</h2><div class="contract"><span>${t.client.toUpperCase()}</span><strong>${t.from} → ${t.to}</strong><p>${t.items.length} items · up to ${t.reward.toLocaleString("en-US")} €</p><button id="accept" ${oi&&!on?"disabled":""}>${oi&&!on?"Job in progress":"Accept job"}</button></div><p class="fine">As your company grows, houses, cargo and fragility become more demanding in proportion to your upgrades.</p>`),Et("#accept").onclick=()=>{for(const e of Mn.values())e.removeFromParent(),Ur(e);Mn.clear();for(const e of Yi.values())e.removeFromParent();Yi.clear(),Ie=t,ce=Ie.items,oa.clear(),oi=!0,on=Wi=!1,hi=0,he=null,Qi(),ln.close(),un(),Wt("Job accepted. Close the rear, enter the cab and drive to the pickup.")}}function S_(){if(!nn||Xe)return;if(Se)return Wt("Finish attaching the strap before driving.");let i;if(oi&&!on&&ve==="base"?i="pickup":oi&&!on&&ve==="pickup"&&ce.every(t=>t.location==="truck")?i="destination":on&&Wi&&ve==="destination"&&(i="base"),i)return y_(i);Wt(ve==="pickup"?"Load every item before leaving.":ve==="destination"&&!Wi?"Unload everything and collect the payout first.":"Accept a job at the job board first.")}function bl(){re.rotation.y=Xi;const i=new R(3,0,(Pt.back-2.2)/2).applyAxisAngle(new R(0,1,0),Xi);re.position.copy(Ae).sub(i)}function y_(i){if(Li>.08||si>.08)return ln.close(),Wt("The rear is still open. Get out and close it with G.");if(Se)return Wt("Finish attaching the strap before driving.");ln.close(),Ml(),Xe=!0,nn=!0,Hu=i,sa="departure",be=wi=gl=Vo=0,Gu=ce.reduce((e,n)=>e+n.condition,0),Xi=re.rotation.y,xe.clear(),Lt.visible=!1,In.visible=!1;const t=new R(3,0,(Pt.back-2.2)/2).applyAxisAngle(new R(0,1,0),Xi);Ae.copy(re.position).add(t),Vi&&(Ur(Vi.root),Vi=null),Vi=ml(i,$n,Ie.difficulty),Ji.clear();for(const e of ce.filter(n=>n.location==="truck"))Ji.set(e.id,{offset:new R,velocity:new R,lastHit:0});bl(),Et("#drive-hud").hidden=!1,Et("#drive-stage").textContent="TO THE TUNNEL",Et("#drive-target").textContent="Drive through the right-hand city tunnel",Rr=!1,as(Ae,1.18),rn(190,.16)}function Xc(i){if(aa>0)return;aa=.65;const t=ce.filter(r=>r.location==="truck"&&!r.secured);if(!t.length)return;const e=t[Math.floor(gl+i)%t.length],n=Ji.get(e.id);n&&(n.velocity.x+=(Math.random()-.5)*i*.18,n.velocity.z-=i*.1),qo(e,i)}function qo(i,t){const e=performance.now(),n=Ji.get(i.id);if(n&&e-n.lastHit<420)return;n&&(n.lastHit=e);const r=Di+u_(ce,i,hs,ma()),s=Math.max(1,Math.round(t*.72+i.vulnerability*.18-r*1.5));i.condition=Math.max(0,i.condition-s),t>13||i.condition<35?(i.fallen=!0,n&&(n.offset.x+=Math.sign(n.velocity.x||1)*1.5,n.velocity.x*=1.3),Wt(`${i.name} fell out of the truck! −${s}%`)):Wt(`${i.name} hit the cargo wall! −${s}% condition`),rn(120,.18)}function E_(i,t,e){for(const n of ce.filter(r=>r.location==="truck")){const r=Mn.get(n.id);if(!r)continue;const[s,a]=Zn(n),o=new R(Pt.left+(n.x+s/2)*le,Pt.height,Pt.front+(n.z+a/2)*le),l=Ji.get(n.id)??{offset:new R,velocity:new R,lastHit:0};if(Ji.set(n.id,l),n.secured)l.velocity.multiplyScalar(Math.exp(-9*i)),l.offset.lerp(new R,1-Math.exp(-8*i));else{const u=.44+Di*.08;l.velocity.x+=wi*be*be*.055*i,l.velocity.z-=e*.05*i,l.velocity.multiplyScalar(Math.exp(-u*i)),l.offset.addScaledVector(l.velocity,i);const h=(hs-s)*le/2+.12,f=(ma()-a)*le/2+.2;if(Math.abs(l.offset.x)>h){const _=Math.abs(l.velocity.x)*5+Math.abs(be)*.65;l.offset.x=Ne.clamp(l.offset.x,-h-.75,h+.75),l.velocity.x*=-.42,qo(n,_)}if(Math.abs(l.offset.z)>f){const _=Math.abs(l.velocity.z)*5+Math.abs(be)*.55;l.offset.z=Ne.clamp(l.offset.z,-f-.9,f+.9),l.velocity.z*=-.38,qo(n,_)}}r.position.copy(o).add(l.offset),r.position.y=n.fallen?.14:Pt.height;const c=n.secured?.008:Math.min(.28,l.velocity.length()*.08+Math.abs(wi*be)*.012);r.rotation.z=(n.fallen?.85:0)+Math.sin(t/105+n.id)*c,r.rotation.x=(n.fallen?.32:0)+Math.cos(t/135+n.id)*c;const d=Yi.get(n.id);d&&d.position.copy(o)}}function b_(){if(!Vi)return;sa="arrival";const i=Cn,t=Ae.clone();we.remove(i.root),Cn=Vi,Vi=null,we.add(Cn.root),ve=Hu,Ml();for(const n of ce)n.location!=="truck"&&(Mn.get(n.id).visible=n.location===ve);Ae.set(-42,0,12);const e=Ae.clone().sub(t);Fe.position.add(e),mn.target.add(e),bl(),In.visible=!0,Et("#drive-stage").textContent="ARRIVAL",Et("#drive-target").textContent="Leave the tunnel and park on the green bay",un(),window.setTimeout(()=>Ur(i.root),80)}function T_(i,t){if(!Xe)return;const e=Number(xe.has("KeyW")||xe.has("ArrowUp"))-Number(xe.has("KeyS")||xe.has("ArrowDown")),n=Number(xe.has("KeyA")||xe.has("ArrowLeft"))-Number(xe.has("KeyD")||xe.has("ArrowRight")),r=be,s=Ae.clone(),a=6.8+pi*1.25;e?be+=e*(e*be<0?9.5:4.2+pi*.35)*i:be*=Math.exp(-1.15*i),be=Ne.clamp(be,-2.8,a),wi=Ne.lerp(wi,n,1-Math.exp(-4.3*i)),Xi+=wi*(.42+Math.abs(be)*.035)*Math.sign(be||1)*i,Ae.addScaledVector(new R(-Math.sin(Xi),0,-Math.cos(Xi)),be*i);const o=Math.abs(Ae.x)>32&&Ae.z>9&&Ae.z<15,l=!o&&Cn.obstacles.some(f=>Math.abs(Ae.x-f.x)<f.w/2+1.45&&Math.abs(Ae.z-f.z)<f.d/2+1.8),c=Math.abs(Ae.z)>27;(l||c)&&(Ae.copy(s),be*=-.18,Xc(Math.abs(r)+5));const d=(be-Vo)/Math.max(i,.01);Vo=be,bl(),Et("#drive-speed").textContent=`${Math.round(Math.abs(be)*9)} km/h`;const u=Math.abs(wi*be)+Math.max(0,Math.abs(d)-4);gl+=u*i*.07,u>11&&Xc(u*.5),E_(i,t,d);const h=Ae.clone().sub(mn.target);mn.target.copy(Ae),Fe.position.add(h),sa==="departure"&&Ae.x>42&&b_(),sa==="arrival"&&Math.abs(Ae.x-In.position.x)<3.3&&Math.abs(Ae.z-In.position.z)<2.2&&Math.abs(be)<.7&&A_()}function A_(){const i=Math.max(0,Gu-ce.reduce((t,e)=>t+e.condition,0));Xe=!1,be=wi=0,nn=!0,Lt.visible=!1,Et("#drive-hud").hidden=!0,In.visible=!1,si=Li=0,vl(),Ji.clear(),os(),un(),Wt(i?`Parked. The drive cost your cargo ${i} condition points. Press F to step out.`:"Parked smoothly — nothing teleported and the cargo is undamaged. Press F to step out.")}function la(){try{localStorage.setItem("movecraft-career-v5",JSON.stringify({cash:$i,padding:ku,completedJobs:wr,truckLevel:pi,cargoLevel:Cr,shelfLevel:Di,strapLevel:Pr,baseLevel:$n,workerLevel:Xn,soundEnabled:br,soundVolume:rs}))}catch{}}try{const i=JSON.parse(localStorage.getItem("movecraft-career-v5")??localStorage.getItem("movecraft-career-v4")??"null");i&&Number.isFinite(i.cash)&&($i=i.cash,ku=i.padding||0,wr=i.completedJobs||0,pi=i.truckLevel||0,Cr=i.cargoLevel??i.truckLevel??0,Di=i.shelfLevel||0,Pr=i.strapLevel||0,$n=i.baseLevel||0,Xn=i.workerLevel||0,br=i.soundEnabled!==!1,rs=Number.isFinite(i.soundVolume)?i.soundVolume:.45,Ie=fl(wr),ce=Ie.items,$s())}catch{}let Yc=0;function Wt(i){Et("#toast").textContent=i,Et("#toast").classList.add("visible"),clearTimeout(Yc),Yc=window.setTimeout(()=>Et("#toast").classList.remove("visible"),3800)}function ju(){const i=["SCRAPPY STARTUP","LOCAL MOVERS","FLEET COMPANY","LOGISTICS HUB","FURNITURE WORKS"][Math.min(4,$n)];Et("#company-level").textContent=i,Et("#strap span").textContent=Se?"Attach end":"Strap"}function un(){const i=ve==="pickup"?`Pickup · ${Ie.from}`:ve==="destination"?`Delivery · ${Ie.to}`:a_.base;Et("#place").textContent=i,Et("#money").textContent=`${$i.toLocaleString("en-US")} €`,Et("#job-no").textContent=String(wr+1).padStart(2,"0"),Et("#job-title").textContent=Ie.title,Et("#job-route").textContent=`${Ie.client} · ${Ie.from} → ${Ie.to}`,Et("#job-reward").textContent=on&&!Wi?`Collect ${hi.toLocaleString("en-US")} €`:`${Ie.reward.toLocaleString("en-US")} €`;const t=ce.filter(s=>s.location==="truck").length,e=ce.filter(s=>s.location==="destination").length,n=oi?on&&!Wi?4:on?5:ve==="destination"?3:t===ce.length?2:1:0;Et("#steps").innerHTML=["Accept the job","Clear the pickup house","Secure & drive","Furnish the delivery house","Collect payment"].map((s,a)=>`<li class="${a<n?"done":a===n?"current":""}"><span>${a<n?"✓":a+1}</span>${s}</li>`).join("");const r=oi?on&&!Wi?`Step onto the gold pad to collect ${hi.toLocaleString("en-US")} €.`:on?"Drive back to the Home Base.":he?`Carry and place the ${he.name}.`:t===ce.length?"Check the load, attach straps and drive through the tunnel.":ve==="destination"?`${e}/${ce.length} items moved into the house.`:"Enter the house and carry each item outside.":"Step onto the job pad and accept a move.";Et("#objective").textContent=r,Et("#mission-summary").textContent=r,Et("#count").textContent=`${t}/${ce.length} in truck · ${e} delivered`,Et("#items").innerHTML=ce.map(s=>`<div class="item"><span class="status ${s.secured?"secured":""}">${s.fallen?"↯":s.location==="destination"?"✓":s.secured?"▰":s.location==="truck"?"!":"·"}</span><span>${s.name}<small>${s.location==="hand"?"Being carried":s.fallen?"Fell out":s.secured?"Strapped down":s.location==="truck"?"Sliding freely":s.location==="destination"?"Inside destination":s.weight>=6?"Extremely heavy":s.fragile?"Fragile":"Waiting"}</small></span><b class="${s.condition<100?"damaged":""}">${s.condition}%</b></div>`).join(""),Et("#strap-count").textContent=`${Wo()}/${Zs()}`,Et("#stamina").style.width=`${qs}%`,Et("#enter span").textContent=nn?"Exit":"Enter",Et("#district").textContent=ve==="base"?"YOUR COMPANY":ve==="pickup"?"PICKUP HOUSE":"DELIVERY HOUSE",Et("#district-title").textContent=ve==="base"?"West Harbor.":ve==="pickup"?`${Ie.from}.`:`${Ie.to}.`,Et("#rotate").toggleAttribute("disabled",!he),Et("#strap").toggleAttribute("disabled",!!he||!Pn()),Et("#rear").toggleAttribute("disabled",nn||Xe)}function w_(i){if(Math.abs(i.x)>35||Math.abs(i.z)>27||Cn.obstacles.some(e=>Math.abs(i.x-e.x)<e.w/2+.22&&Math.abs(i.z-e.z)<e.d/2+.22))return!1;const t=Ii(i);if(t.x>1.05&&t.x<4.95&&t.z>-2.45&&t.z<.15||t.z>=Pt.front&&t.z<=Pt.back&&(Math.abs(t.x-Pt.left)<.16||Math.abs(t.x-Pt.right)<.16)||Math.abs(Yo(i)-Yo(Lt.position))>.22)return!1;for(const e of ce.filter(n=>n.location==="truck")){const[n,r]=Zn(e),s=Pt.left+e.x*le,a=Pt.front+e.z*le;if(t.x>s-.12&&t.x<s+n*le+.12&&t.z>a-.12&&t.z<a+r*le+.12)return!1}return!0}function R_(i){if(nn||Xe||ln.open||Ue)return Go=!1,ni.multiplyScalar(.7),!1;const t=Number(xe.has("KeyD")||xe.has("ArrowRight"))-Number(xe.has("KeyA")||xe.has("ArrowLeft")),e=Number(xe.has("KeyW")||xe.has("ArrowUp"))-Number(xe.has("KeyS")||xe.has("ArrowDown")),n=Fe.getWorldDirection(new R);n.y=0,n.normalize();const r=new R(-n.z,0,n.x).multiplyScalar(t).addScaledVector(n,e),s=xe.has("ShiftLeft")&&!he&&!Se&&r.lengthSq()>0&&qs>1;Go=s,qs=Ne.clamp(qs+(s?-30:18+Xn*2)*i,0,100);const a=1+Xn*.09,o=1+Xn*.3,l=he?Math.max(1.45,3.45-he.weight*.38/o)*a:Se?3.2*a:s?7.1*a:4.15*a;r.lengthSq()&&r.normalize().multiplyScalar(l),ni.lerp(r,1-Math.exp(-8*i));const c=Lt.position.clone(),d=ni.length()*i,u=ni.clone().normalize(),h=Math.max(1,Math.ceil(d/.07));for(let f=0;f<h;f++)for(const _ of["x","z"]){const M=Lt.position.clone();M[_]+=u[_]*d/h,w_(M)?(Lt.position.copy(M),Lt.position.y=Yo(M)):ni[_]*=.2}if(ni.length()>.1&&(Lt.rotation.y=Ne.lerp(Lt.rotation.y,Math.atan2(ni.x,ni.z),1-Math.exp(-12*i))),Rr){const f=Lt.position.clone().sub(c);Fe.position.add(f),mn.target.add(f)}return c.distanceTo(Lt.position)>.001}function C_(i){let t="";if(Ue){const e=Ne.clamp((i-Ue.start)/Ue.duration,0,1);t=`Lifting ${Ue.item.name} · ${Math.round(e*100)}%`}else if(!ln.open&&!Xe){const e=Sl();if(nn)t="E · Navigation   F · Exit";else if(he)t=Pn()?"E · Place on grid   R · Rotate":ve==="destination"?"E · Place inside house":"Carry it to the ramp";else{const n=yl();t=n?`${n.secured?"Q · Remove strap":"E · Lift "+n.name}`:Wu()?"G · Rear doors & ramp":Vu()?"F · Enter cab":e?e==="office"?"E · View job":"Stand still · Buy upgrade":Pn()?"Walkable cargo bay":"WASD · Move   Shift · Sprint"}}if(Et("#interaction").textContent=t,Gn.visible=!!(he&&Pn()),he&&Pn()){const e=Xu();Gn.scale.set(e.w*le,1,e.d*le),Gn.position.set(Pt.left+(e.x+e.w/2)*le,Pt.height+.025,Pt.front+(e.z+e.d/2)*le),Gn.material.color.set(e.valid?6540444:14969941)}}function th(){if(he){const i=Mn.get(he.id),t=i.rotation.y;Ai=!Ai,he.rotated=Ai,ae={kind:"rotate",start:performance.now(),duration:310,object:i,fromYaw:t,toYaw:Ai?Math.PI/2:0},rn(480,.06)}}function P_(){$i+=hi,Wi=!0,Ri.visible=!1,wr++,Ks="reward",ae={kind:"upgrade",start:performance.now(),duration:700,object:Lt},rn(880,.25),la(),un(),Wt(`${hi.toLocaleString("en-US")} € collected! Enter the truck and return to the Home Base.`)}function D_(i){const t=Sl(),e=Ri.visible&&Math.abs(Lt.position.x-Ri.position.x)<1.9&&Math.abs(Lt.position.z-Ri.position.z)<1.2,n=e?"reward":t&&t!=="office"?t:"";if(!n||nn||Xe||ln.open||Ue||ni.length()>.22){Xr=0,Et("#purchase").hidden=!0,n||(Ks="");return}if(Ks===n){Et("#purchase").hidden=!0;return}let r="";if(n==="reward")r=`JOB PAYOUT · ${hi.toLocaleString("en-US")} €`;else{const s=El(n);r=s.level>=s.max?`${s.name} · MAXIMUM`:$i<s.cost?`${s.name} · NEED ${s.cost.toLocaleString("en-US")} €`:`${s.name} LEVEL ${s.level+1} · ${s.cost.toLocaleString("en-US")} €`}Et("#purchase-title").textContent=r,Et("#purchase").hidden=!1,Xr+=i,Et("#purchase-fill").style.width=`${Math.min(100,Xr/1.35*100)}%`,Xr>=1.35&&(Xr=0,Ks=n,n==="reward"?P_():M_(n))}function L_(i){const t=Lt.userData.rig;if(Ue){const s=Ne.clamp((i-Ue.start)/Ue.duration,0,1),a=Ne.clamp(s/.34,0,1),o=Ne.clamp((s-.28)/.72,0,1),l=o*o*(3-2*o),c=new R(0,.95,.82).applyQuaternion(Lt.quaternion).add(Lt.position);Mn.get(Ue.item.id).position.lerpVectors(Ue.from,c,l),t&&(t.body.position.y-=Math.sin(a*Math.PI)*.13*(1-o),t.body.rotation.x=.28*(1-l),t.legs.forEach((u,h)=>u.rotation.x=(h?-.22:.22)*(1-l)),t.arms.forEach(u=>u.rotation.x=-.75-I_(l)*.38)),s>=1&&(t&&(t.body.rotation.x=0),v_(Ue.item))}if(!ae)return;const e=Ne.clamp((i-ae.start)/ae.duration,0,1),n=e*e*(3-2*e),r=ae.object;ae.kind==="place"&&r&&ae.from&&ae.to?(r.position.lerpVectors(ae.from,ae.to,n),r.position.y+=Math.sin(e*Math.PI)*.035,t&&(t.body.rotation.x=-Math.sin(e*Math.PI)*.08,t.arms.forEach(s=>s.rotation.x=-1.12+n*.7))):ae.kind==="rotate"&&r?r.rotation.y=Ne.lerp(ae.fromYaw??0,ae.toYaw??0,n):ae.kind==="strap"?r?.userData.belt?r.scale.y=Math.max(.02,n):t&&t.arms.forEach((s,a)=>s.rotation.z=(a?-.35:.35)*Math.sin(e*Math.PI)):ae.kind==="upgrade"&&(r===re?re.rotation.z=Math.sin(e*Math.PI*2)*.012*(1-e):t&&t.arms.forEach((s,a)=>s.rotation.z=(a?-.65:.65)*Math.sin(e*Math.PI))),e>=1&&(ae.kind==="place"&&r&&ae.to&&ae.finalParent&&(r.position.copy(ae.to),ae.finalParent.attach(r)),ae.kind==="rotate"&&r&&(r.rotation.y=ae.toYaw??0),r?.userData.belt&&(r.scale.y=1),r===re&&(re.rotation.z=0),t&&(t.body.rotation.x=0,t.arms.forEach(s=>s.rotation.z=0)),ae=null)}function I_(i){return i*i*(3-2*i)}function U_(){Ju(`<div class="eyebrow">GAME SETTINGS</div><h2>Sound & Display</h2><div class="setting"><label><span>Sound effects<small>Actions, money and damage</small></span><input id="sound-enabled" type="checkbox" ${br?"checked":""}></label><label><span>Volume</span><input id="sound-volume" type="range" min="0" max="1" step=".05" value="${rs}"></label></div><p class="fine">Music is intentionally disabled to keep the prototype lightweight and fast.</p>`),Et("#sound-enabled").onchange=i=>{br=i.currentTarget.checked,la(),br&&rn(600,.1)},Et("#sound-volume").oninput=i=>{rs=Number(i.currentTarget.value),la()}}Et("#action").onclick=Yu;Et("#enter").onclick=$u;Et("#strap").onclick=Ku;Et("#rotate").onclick=th;Et("#rear").onclick=Zu;Et("#settings").onclick=U_;Et("#mission-toggle").onclick=()=>Et(".mission").classList.toggle("collapsed");Et("#camera-toggle").onclick=()=>Et(".camera-tools").classList.toggle("collapsed");Et("#help-toggle").onclick=()=>Et(".help").classList.toggle("collapsed");Et("#follow").onclick=()=>{Rr=!0,as(Lt.position,1.55)};Et("#truck-view").onclick=()=>{Rr=!1,as(Dr(new R(3,.8,(Pt.front+Pt.back)/2)),2.45)};for(const[i,t]of[["#zoom-in",1.25],["#zoom-out",.8]])Et(i).onclick=()=>{Fe.zoom=Ne.clamp(Fe.zoom*t,.6,4.5),Fe.updateProjectionMatrix()};window.addEventListener("keydown",i=>{ln.open||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft"].includes(i.code)&&(xe.add(i.code),i.preventDefault()),!i.repeat&&(i.code==="KeyE"&&Yu(),i.code==="KeyF"&&$u(),i.code==="KeyQ"&&Ku(),i.code==="KeyR"&&th(),i.code==="KeyG"&&Zu()))});window.addEventListener("keyup",i=>xe.delete(i.code));window.addEventListener("blur",()=>xe.clear());document.querySelectorAll("[data-key]").forEach(i=>{i.onpointerdown=t=>{i.setPointerCapture(t.pointerId),xe.add(i.dataset.key)},i.onpointerup=i.onpointercancel=()=>xe.delete(i.dataset.key)});function eh(){gi.setSize(innerWidth,innerHeight);const i=innerWidth/innerHeight;Fe.left=-12*i,Fe.right=12*i,Fe.top=12,Fe.bottom=-12,Fe.updateProjectionMatrix()}window.addEventListener("resize",eh);eh();Qi();os();ju();un();let qc=performance.now(),Kc=0;function nh(i){const t=Math.min((i-qc)/1e3,.1);qc=i,Li=Ne.lerp(Li,si,1-Math.exp(-4.8*t)),vl();const e=R_(t);T_(t,i),qu(),_l.animate(i/1e3,e,!!(he||Ue||Se),Go),L_(i),__(t),D_(t),aa=Math.max(0,aa-t),mn.update(),C_(i),Gn.visible&&(Gn.position.copy(Dr(Gn.position)),Gn.rotation.y=re.rotation.y),Se&&(Et("#interaction").textContent="Q · Attach the free end on the opposite side"),i-Kc>180&&(ju(),un(),Kc=i),gi.render(we,Fe),requestAnimationFrame(nh)}requestAnimationFrame(nh);Wt("Welcome to your run-down starter yard. Stand still on rectangular pads to buy upgrades.");
