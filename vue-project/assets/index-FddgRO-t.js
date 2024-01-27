import{l as Fd,m as Bc}from"./index-Fjtc17ZP.js";var Da={};const Ia="126",Bd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nh=0,oa=1,ih=2,Od=3,zd=0,Fa=1,rh=2,mi=3,Ei=0,Qe=1,Cr=2,Ba=1,Ud=2,Jt=0,yi=1,aa=2,ca=3,la=4,sh=5,Pn=100,oh=101,ah=102,ha=103,ua=104,ch=200,lh=201,hh=202,uh=203,Na=204,Oa=205,dh=206,fh=207,ph=208,mh=209,gh=210,yh=0,xh=1,vh=2,Fs=3,_h=4,bh=5,wh=6,Mh=7,Pr=0,Sh=1,Eh=2,Bn=0,Th=1,Ah=2,Lh=3,Rh=4,Ch=5,ro=300,Dr=301,Ir=302,Bs=303,Ns=304,Ti=306,Fr=307,er=1e3,dt=1001,tr=1002,et=1003,Os=1004,Hd=1004,zs=1005,Gd=1005,tt=1006,za=1007,kd=1007,Ai=1008,Vd=1008,Li=1009,Ph=1010,Dh=1011,nr=1012,Ih=1013,Ji=1014,Zt=1015,ir=1016,Fh=1017,Bh=1018,Nh=1019,xi=1020,Oh=1021,un=1022,Mt=1023,zh=1024,Uh=1025,Hh=Mt,Nn=1026,_i=1027,Gh=1028,kh=1029,Vh=1030,Wh=1031,qh=1032,Xh=1033,da=33776,fa=33777,pa=33778,ma=33779,ga=35840,ya=35841,xa=35842,va=35843,jh=36196,_a=37492,ba=37496,Yh=37808,Zh=37809,Jh=37810,$h=37811,Qh=37812,Kh=37813,eu=37814,tu=37815,nu=37816,iu=37817,ru=37818,su=37819,ou=37820,au=37821,cu=36492,lu=37840,hu=37841,uu=37842,du=37843,fu=37844,pu=37845,mu=37846,gu=37847,yu=37848,xu=37849,vu=37850,_u=37851,bu=37852,wu=37853,Mu=2200,Su=2201,Eu=2202,rr=2300,sr=2301,Ds=2302,Dn=2400,In=2401,or=2402,so=2500,Ua=2501,Tu=0,Wd=1,qd=2,ft=3e3,Br=3001,oo=3007,ao=3002,Au=3003,Ha=3004,Ga=3005,ka=3006,Lu=3200,Ru=3201,Vn=0,Cu=1,Xd=0,Is=7680,jd=7681,Yd=7682,Zd=7683,Jd=34055,$d=34056,Qd=5386,Kd=512,ef=513,tf=514,nf=515,rf=516,sf=517,of=518,Pu=519,Nr=35044,On=35048,af=35040,cf=35045,lf=35049,hf=35041,uf=35046,df=35050,ff=35042,pf="100",wa="300 es";function en(){}Object.assign(en.prototype,{addEventListener:function(n,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[n]===void 0&&(t[n]=[]),t[n].indexOf(e)===-1&&t[n].push(e)},hasEventListener:function(n,e){if(this._listeners===void 0)return!1;const t=this._listeners;return t[n]!==void 0&&t[n].indexOf(e)!==-1},removeEventListener:function(n,e){if(this._listeners===void 0)return;const i=this._listeners[n];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}},dispatchEvent:function(n){if(this._listeners===void 0)return;const t=this._listeners[n.type];if(t!==void 0){n.target=this;const i=t.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,n)}}});const ct=[];for(let n=0;n<256;n++)ct[n]=(n<16?"0":"")+n.toString(16);let qr=1234567;const xe={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[i&255]+ct[i>>8&255]+ct[i>>16&255]+ct[i>>24&255]).toUpperCase()},clamp:function(n,e,t){return Math.max(e,Math.min(t,n))},euclideanModulo:function(n,e){return(n%e+e)%e},mapLinear:function(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)},lerp:function(n,e,t){return(1-t)*n+t*e},damp:function(n,e,t,i){return xe.lerp(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(xe.euclideanModulo(n,e*2)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){return n!==void 0&&(qr=n%2147483647),qr=qr*16807%2147483647,(qr-1)/2147483646},degToRad:function(n){return n*xe.DEG2RAD},radToDeg:function(n){return n*xe.RAD2DEG},isPowerOfTwo:function(n){return(n&n-1)===0&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*h,c*d,a*l);break;case"YZY":n.set(c*d,a*u,c*h,a*l);break;case"ZXZ":n.set(c*h,c*d,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*f,a*l);break;case"YXY":n.set(c*f,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class V{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}V.prototype.isVector2=!0;class nt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],y=r[0],x=r[3],g=r[6],p=r[1],w=r[4],_=r[7],S=r[2],v=r[5],A=r[8];return s[0]=o*y+a*p+c*S,s[3]=o*x+a*w+c*v,s[6]=o*g+a*_+c*A,s[1]=l*y+u*p+h*S,s[4]=l*x+u*w+h*v,s[7]=l*g+u*_+h*A,s[2]=d*y+f*p+m*S,s[5]=d*x+f*w+m*v,s[8]=d*g+f*_+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,f=l*s-o*c,m=t*h+i*d+r*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=h*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+i*c,r[3]=t*o+i*l,r[6]=t*a+i*u,r[1]=-i*s+t*c,r[4]=-i*o+t*l,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}nt.prototype.isMatrix3=!0;let Jn;const Wn={getDataURL:function(n){if(/^data:/i.test(n.src)||typeof HTMLCanvasElement>"u")return n.src;let e;if(n instanceof HTMLCanvasElement)e=n;else{Jn===void 0&&(Jn=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Jn.width=n.width,Jn.height=n.height;const t=Jn.getContext("2d");n instanceof ImageData?t.putImageData(n,0,0):t.drawImage(n,0,0,n.width,n.height),e=Jn}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}};let mf=0;class it extends en{constructor(e=it.DEFAULT_IMAGE,t=it.DEFAULT_MAPPING,i=dt,r=dt,s=tt,o=Ai,a=Mt,c=Li,l=1,u=ft){super(),Object.defineProperty(this,"id",{value:mf++}),this.uuid=xe.generateUUID(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=xe.generateUUID()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Eo(r[o].image)):s.push(Eo(r[o]))}else s=Eo(r);e.images[r.uuid]={uuid:r.uuid,url:s}}i.image=r.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ro)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case dt:e.x=e.x<0?0:1;break;case tr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case dt:e.y=e.y<0?0:1;break;case tr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}it.DEFAULT_IMAGE=void 0;it.DEFAULT_MAPPING=ro;it.prototype.isTexture=!0;function Eo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wn.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ie{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],y=c[2],x=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(m+x)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,_=(f+1)/2,S=(g+1)/2,v=(u+d)/4,A=(h+y)/4,P=(m+x)/4;return w>_&&w>S?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=v/i,s=A/i):_>S?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=v/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=P/s),this.set(i,r,s,t),this}let p=Math.sqrt((x-m)*(x-m)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(p)<.001&&(p=1),this.x=(x-m)/p,this.y=(h-y)/p,this.z=(d-u)/p,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}Ie.prototype.isVector4=!0;class $t extends en{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ie(0,0,e,t),this.scissorTest=!1,this.viewport=new Ie(0,0,e,t),i=i||{},this.texture=new it(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:tt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}$t.prototype.isWebGLRenderTarget=!0;class Du extends $t{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Du.prototype.isWebGLMultisampleRenderTarget=!0;class ot{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return i.copy(e).slerp(t,r)}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=y;return}if(h!==y||c!==d||l!==f||u!==m){let x=1-a;const g=c*d+l*f+u*m+h*y,p=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const S=Math.sqrt(w),v=Math.atan2(S,g*p);x=Math.sin(x*v)/S,a=Math.sin(a*v)/S}const _=a*p;if(c=c*x+d*_,l=l*x+f*_,u=u*x+m*_,h=h*x+y*_,x===1-a){const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),d=c(i/2),f=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-6?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe.clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ot.prototype.isQuaternion=!0;class b{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,h=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xe.clamp(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}b.prototype.isVector3=!0;const To=new b,Nc=new ot;class _t{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<i&&(i=h),d<r&&(r=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new b),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox),Ao.applyMatrix4(e.matrixWorld),this.union(Ao));const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new b),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),Xr.subVectors(this.max,zi),$n.subVectors(e.a,zi),Qn.subVectors(e.b,zi),Kn.subVectors(e.c,zi),nn.subVectors(Qn,$n),rn.subVectors(Kn,Qn),wn.subVectors($n,Kn);let t=[0,-nn.z,nn.y,0,-rn.z,rn.y,0,-wn.z,wn.y,nn.z,0,-nn.x,rn.z,0,-rn.x,wn.z,0,-wn.x,-nn.y,nn.x,0,-rn.y,rn.x,0,-wn.y,wn.x,0];return!Lo(t,$n,Qn,Kn,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,$n,Qn,Kn,Xr))?!1:(jr.crossVectors(nn,rn),t=[jr.x,jr.y,jr.z],Lo(t,$n,Qn,Kn,Xr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new b),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Oi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}_t.prototype.isBox3=!0;const Wt=[new b,new b,new b,new b,new b,new b,new b,new b],Oi=new b,Ao=new _t,$n=new b,Qn=new b,Kn=new b,nn=new b,rn=new b,wn=new b,zi=new b,Xr=new b,jr=new b,Mn=new b;function Lo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Mn.fromArray(n,s);const a=r.x*Math.abs(Mn.x)+r.y*Math.abs(Mn.y)+r.z*Math.abs(Mn.z),c=e.dot(Mn),l=t.dot(Mn),u=i.dot(Mn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const gf=new _t;class _n{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gf.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new b),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new _t),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qt=new b,Ro=new b,Yr=new b,sn=new b,Co=new b,Zr=new b,Po=new b;class bn{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new b),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new b),t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.direction).multiplyScalar(t).add(this.origin),qt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ro.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(Ro);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=sn.dot(this.direction),c=-sn.dot(Yr),l=sn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=s*u,h>=0)if(d>=-m)if(d<=m){const y=1/u;h*=y,d*=y,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Yr).multiplyScalar(d).add(Ro),f}intersectSphere(e,t){qt.subVectors(e.center,this.origin);const i=qt.dot(this.direction),r=qt.dot(qt)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,i,r,s){Co.subVectors(t,e),Zr.subVectors(i,e),Po.crossVectors(Co,Zr);let o=this.direction.dot(Po),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);const c=a*this.direction.dot(Zr.crossVectors(sn,Zr));if(c<0)return null;const l=a*this.direction.dot(Co.cross(sn));if(l<0||c+l>o)return null;const u=-a*sn.dot(Po);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,c,l,u,h,d,f,m,y,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ei.setFromMatrixColumn(e,0).length(),s=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,m=a*u,y=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,y=l*h;t[0]=d+y*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,y=l*h;t[0]=d-y*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,m=a*u,y=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,y=a*l;t[0]=c*u,t[4]=y-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-y*h}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,y=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,xf)}lookAt(e,t,i){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),on.crossVectors(i,bt),on.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),on.crossVectors(i,bt)),on.normalize(),Jr.crossVectors(bt,on),r[0]=on.x,r[4]=Jr.x,r[8]=bt.x,r[1]=on.y,r[5]=Jr.y,r[9]=bt.y,r[2]=on.z,r[6]=Jr.z,r[10]=bt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],y=i[6],x=i[10],g=i[14],p=i[3],w=i[7],_=i[11],S=i[15],v=r[0],A=r[4],P=r[8],L=r[12],D=r[1],I=r[5],O=r[9],F=r[13],C=r[2],B=r[6],z=r[10],X=r[14],J=r[3],ee=r[7],ae=r[11],oe=r[15];return s[0]=o*v+a*D+c*C+l*J,s[4]=o*A+a*I+c*B+l*ee,s[8]=o*P+a*O+c*z+l*ae,s[12]=o*L+a*F+c*X+l*oe,s[1]=u*v+h*D+d*C+f*J,s[5]=u*A+h*I+d*B+f*ee,s[9]=u*P+h*O+d*z+f*ae,s[13]=u*L+h*F+d*X+f*oe,s[2]=m*v+y*D+x*C+g*J,s[6]=m*A+y*I+x*B+g*ee,s[10]=m*P+y*O+x*z+g*ae,s[14]=m*L+y*F+x*X+g*oe,s[3]=p*v+w*D+_*C+S*J,s[7]=p*A+w*I+_*B+S*ee,s[11]=p*P+w*O+_*z+S*ae,s[15]=p*L+w*F+_*X+S*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],y=e[7],x=e[11],g=e[15];return m*(+s*c*h-r*l*h-s*a*d+i*l*d+r*a*f-i*c*f)+y*(+t*c*f-t*l*d+s*o*d-r*o*f+r*l*u-s*c*u)+x*(+t*l*h-t*a*f-s*o*h+i*o*f+s*a*u-i*l*u)+g*(-r*a*u-t*c*h+t*a*d+r*o*h-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],y=e[13],x=e[14],g=e[15],p=h*x*l-y*d*l+y*c*f-a*x*f-h*c*g+a*d*g,w=m*d*l-u*x*l-m*c*f+o*x*f+u*c*g-o*d*g,_=u*y*l-m*h*l+m*a*f-o*y*f-u*a*g+o*h*g,S=m*h*c-u*y*c-m*a*d+o*y*d+u*a*x-o*h*x,v=t*p+i*w+r*_+s*S;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=p*A,e[1]=(y*d*s-h*x*s-y*r*f+i*x*f+h*r*g-i*d*g)*A,e[2]=(a*x*s-y*c*s+y*r*l-i*x*l-a*r*g+i*c*g)*A,e[3]=(h*c*s-a*d*s-h*r*l+i*d*l+a*r*f-i*c*f)*A,e[4]=w*A,e[5]=(u*x*s-m*d*s+m*r*f-t*x*f-u*r*g+t*d*g)*A,e[6]=(m*c*s-o*x*s-m*r*l+t*x*l+o*r*g-t*c*g)*A,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*f+t*c*f)*A,e[8]=_*A,e[9]=(m*h*s-u*y*s-m*i*f+t*y*f+u*i*g-t*h*g)*A,e[10]=(o*y*s-m*a*s+m*i*l-t*y*l-o*i*g+t*a*g)*A,e[11]=(u*a*s-o*h*s-u*i*l+t*h*l+o*i*f-t*a*f)*A,e[12]=S*A,e[13]=(u*y*r-m*h*r+m*i*d-t*y*d-u*i*x+t*h*x)*A,e[14]=(m*a*r-o*y*r-m*i*c+t*y*c+o*i*x-t*a*x)*A,e[15]=(o*h*r-u*a*r+u*i*c-t*h*c-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,f=s*u,m=s*h,y=o*u,x=o*h,g=a*h,p=c*l,w=c*u,_=c*h,S=i.x,v=i.y,A=i.z;return r[0]=(1-(y+g))*S,r[1]=(f+_)*S,r[2]=(m-w)*S,r[3]=0,r[4]=(f-_)*v,r[5]=(1-(d+g))*v,r[6]=(x+p)*v,r[7]=0,r[8]=(m+w)*A,r[9]=(x-p)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ei.set(r[0],r[1],r[2]).length();const o=ei.set(r[4],r[5],r[6]).length(),a=ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rt.copy(this);const l=1/s,u=1/o,h=1/a;return Rt.elements[0]*=l,Rt.elements[1]*=l,Rt.elements[2]*=l,Rt.elements[4]*=u,Rt.elements[5]*=u,Rt.elements[6]*=u,Rt.elements[8]*=h,Rt.elements[9]*=h,Rt.elements[10]*=h,t.setFromRotationMatrix(Rt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),h=(t+e)*c,d=(i+r)*l,f=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}ce.prototype.isMatrix4=!0;const ei=new b,Rt=new ce,yf=new b(0,0,0),xf=new b(1,1,1),on=new b,Jr=new b,bt=new b,Oc=new ce,zc=new ot;class qn{constructor(e=0,t=0,i=0,r=qn.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._order=r||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){const r=xe.clamp,s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(r(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-r(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(r(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-r(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(r(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-r(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oc,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}qn.prototype.isEuler=!0;qn.DefaultOrder="XYZ";qn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Va{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let vf=0;const Uc=new b,ti=new ot,Xt=new ce,$r=new b,Ui=new b,_f=new b,bf=new ot,Hc=new b(1,0,0),Gc=new b(0,1,0),kc=new b(0,0,1),wf={type:"added"},Vc={type:"removed"};function me(){Object.defineProperty(this,"id",{value:vf++}),this.uuid=xe.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DefaultUp.clone();const n=new b,e=new qn,t=new ot,i=new b(1,1,1);function r(){t.setFromEuler(e,!1)}function s(){e.setFromQuaternion(t,void 0,!1)}e._onChange(r),t._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:n},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new nt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=me.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}me.DefaultUp=new b(0,1,0);me.DefaultMatrixAutoUpdate=!0;me.prototype=Object.assign(Object.create(en.prototype),{constructor:me,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(n){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(n),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(n){return this.quaternion.premultiply(n),this},setRotationFromAxisAngle:function(n,e){this.quaternion.setFromAxisAngle(n,e)},setRotationFromEuler:function(n){this.quaternion.setFromEuler(n,!0)},setRotationFromMatrix:function(n){this.quaternion.setFromRotationMatrix(n)},setRotationFromQuaternion:function(n){this.quaternion.copy(n)},rotateOnAxis:function(n,e){return ti.setFromAxisAngle(n,e),this.quaternion.multiply(ti),this},rotateOnWorldAxis:function(n,e){return ti.setFromAxisAngle(n,e),this.quaternion.premultiply(ti),this},rotateX:function(n){return this.rotateOnAxis(Hc,n)},rotateY:function(n){return this.rotateOnAxis(Gc,n)},rotateZ:function(n){return this.rotateOnAxis(kc,n)},translateOnAxis:function(n,e){return Uc.copy(n).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(e)),this},translateX:function(n){return this.translateOnAxis(Hc,n)},translateY:function(n){return this.translateOnAxis(Gc,n)},translateZ:function(n){return this.translateOnAxis(kc,n)},localToWorld:function(n){return n.applyMatrix4(this.matrixWorld)},worldToLocal:function(n){return n.applyMatrix4(Xt.copy(this.matrixWorld).invert())},lookAt:function(n,e,t){n.isVector3?$r.copy(n):$r.set(n,e,t);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Ui,$r,this.up):Xt.lookAt($r,Ui,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(Xt),this.quaternion.premultiply(ti.invert()))},add:function(n){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return n===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",n),this):(n&&n.isObject3D?(n.parent!==null&&n.parent.remove(n),n.parent=this,this.children.push(n),n.dispatchEvent(wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",n),this)},remove:function(n){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(n);return e!==-1&&(n.parent=null,this.children.splice(e,1),n.dispatchEvent(Vc)),this},clear:function(){for(let n=0;n<this.children.length;n++){const e=this.children[n];e.parent=null,e.dispatchEvent(Vc)}return this.children.length=0,this},attach:function(n){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),n.parent!==null&&(n.parent.updateWorldMatrix(!0,!1),Xt.multiply(n.parent.matrixWorld)),n.applyMatrix4(Xt),this.add(n),n.updateWorldMatrix(!1,!0),this},getObjectById:function(n){return this.getObjectByProperty("id",n)},getObjectByName:function(n){return this.getObjectByProperty("name",n)},getObjectByProperty:function(n,e){if(this[n]===e)return this;for(let t=0,i=this.children.length;t<i;t++){const s=this.children[t].getObjectByProperty(n,e);if(s!==void 0)return s}},getWorldPosition:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),n=new b),this.updateWorldMatrix(!0,!1),n.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),n=new ot),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,n,_f),n},getWorldScale:function(n){return n===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),n=new b),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,bf,n),n},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),n=new b),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(n){n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(n)},traverseVisible:function(n){if(this.visible===!1)return;n(this);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(n)},traverseAncestors:function(n){const e=this.parent;e!==null&&(n(e),e.traverseAncestors(n))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(n){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,n=!0);const e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(n)},updateWorldMatrix:function(n,e){const t=this.parent;if(n===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}},toJSON:function(n){const e=n===void 0||typeof n=="string",t={};e&&(n={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON());function r(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(n)),a.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(n.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,l=a.length;c<l;c++){const u=a[c];r(n.shapes,u)}else r(n.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(n.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(r(n.materials,this.material[a]));i.material=o}else i.material=r(n.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(n).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(r(n.animations,a))}}if(e){const o=s(n.geometries),a=s(n.materials),c=s(n.textures),l=s(n.images),u=s(n.shapes),h=s(n.skeletons),d=s(n.animations);o.length>0&&(t.geometries=o),a.length>0&&(t.materials=a),c.length>0&&(t.textures=c),l.length>0&&(t.images=l),u.length>0&&(t.shapes=u),h.length>0&&(t.skeletons=h),d.length>0&&(t.animations=d)}return t.object=i,t;function s(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}},clone:function(n){return new this.constructor().copy(this,n)},copy:function(n,e=!0){if(this.name=n.name,this.up.copy(n.up),this.position.copy(n.position),this.rotation.order=n.rotation.order,this.quaternion.copy(n.quaternion),this.scale.copy(n.scale),this.matrix.copy(n.matrix),this.matrixWorld.copy(n.matrixWorld),this.matrixAutoUpdate=n.matrixAutoUpdate,this.matrixWorldNeedsUpdate=n.matrixWorldNeedsUpdate,this.layers.mask=n.layers.mask,this.visible=n.visible,this.castShadow=n.castShadow,this.receiveShadow=n.receiveShadow,this.frustumCulled=n.frustumCulled,this.renderOrder=n.renderOrder,this.userData=JSON.parse(JSON.stringify(n.userData)),e===!0)for(let t=0;t<n.children.length;t++){const i=n.children[t];this.add(i.clone())}return this}});const Do=new b,Mf=new b,Sf=new nt;class It{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Do.subVectors(i,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new b),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new b);const i=e.delta(Do),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):void 0;const s=-(e.start.dot(this.normal)+this.constant)/r;if(!(s<0||s>1))return t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new b),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sf.getNormalMatrix(e),r=this.coplanarPoint(Do).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}It.prototype.isPlane=!0;const Ct=new b,jt=new b,Io=new b,Yt=new b,ni=new b,ii=new b,Wc=new b,Fo=new b,Bo=new b,No=new b;class $e{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),r=new b),r.subVectors(i,t),Ct.subVectors(e,t),r.cross(Ct);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ct.subVectors(r,t),jt.subVectors(i,t),Io.subVectors(e,t);const o=Ct.dot(Ct),a=Ct.dot(jt),c=Ct.dot(Io),l=jt.dot(jt),u=jt.dot(Io),h=o*l-a*a;if(s===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),s=new b),h===0)return s.set(-2,-1,-1);const d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yt),Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Yt),c.set(0,0),c.addScaledVector(s,Yt.x),c.addScaledVector(o,Yt.y),c.addScaledVector(a,Yt.z),c}static isFrontFacing(e,t,i,r){return Ct.subVectors(i,t),jt.subVectors(e,t),Ct.cross(jt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Ct.cross(jt).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new b),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $e.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new It),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $e.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return $e.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return $e.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $e.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new b);const i=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,i),ii.subVectors(s,i),Fo.subVectors(e,i);const c=ni.dot(Fo),l=ii.dot(Fo);if(c<=0&&l<=0)return t.copy(i);Bo.subVectors(e,r);const u=ni.dot(Bo),h=ii.dot(Bo);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ni,o);No.subVectors(e,s);const f=ni.dot(No),m=ii.dot(No);if(m>=0&&f<=m)return t.copy(s);const y=f*l-c*m;if(y<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(ii,a);const x=u*m-f*h;if(x<=0&&h-u>=0&&f-m>=0)return Wc.subVectors(s,r),a=(h-u)/(h-u+(f-m)),t.copy(r).addScaledVector(Wc,a);const g=1/(x+y+d);return o=y*g,a=d*g,t.copy(i).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ef=0;function Ve(){Object.defineProperty(this,"id",{value:Ef++}),this.uuid=xe.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=yi,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Ve.prototype=Object.assign(Object.create(en.prototype),{constructor:Ve,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(const e in n){const t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===Ba;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){const e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,t.reflectivity=this.reflectivity,t.refractionRatio=this.refractionRatio,this.combine!==void 0&&(t.combine=this.combine),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(t.blending=this.blending),this.side!==Ei&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(r){const s=[];for(const o in r){const a=r[o];delete a.metadata,s.push(a)}return s}if(e){const r=i(n.textures),s=i(n.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const e=n.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Ve.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});const Iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pt={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function zo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Uo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class ne{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=xe.euclideanModulo(e,1),t=xe.clamp(t,0,1),i=xe.clamp(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=Oo(s,r,e+1/3),this.g=Oo(s,r,e),this.b=Oo(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,l=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,c,l)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Iu[e];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,i=this.g,r=this.b,s=Math.max(t,i,r),o=Math.min(t,i,r);let a,c;const l=(o+s)/2;if(o===s)a=0,c=0;else{const u=s-o;switch(c=l<=.5?u/(s+o):u/(2-s-o),s){case t:a=(i-r)/u+(i<r?6:0);break;case i:a=(r-t)/u+2;break;case r:a=(t-i)/u+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=i,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(Qr);const i=xe.lerp(Pt.h,Qr.h,t),r=xe.lerp(Pt.s,Qr.s,t),s=xe.lerp(Pt.l,Qr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ne.NAMES=Iu;ne.prototype.isColor=!0;ne.prototype.r=1;ne.prototype.g=1;ne.prototype.b=1;class tn extends Ve{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}tn.prototype.isMeshBasicMaterial=!0;const ze=new b,Kr=new V;function ye(n,e,t){if(Array.isArray(n))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=n,this.itemSize=e,this.count=n!==void 0?n.length/e:0,this.normalized=t===!0,this.usage=Nr,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(ye.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(ye.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.name=n.name,this.array=new n.array.constructor(n.array),this.itemSize=n.itemSize,this.count=n.count,this.normalized=n.normalized,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[n+i]=e.array[t+i];return this},copyArray:function(n){return this.array.set(n),this},copyColorsArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ne),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this},copyVector2sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new V),e[t++]=s.x,e[t++]=s.y}return this},copyVector3sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new b),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this},copyVector4sArray:function(n){const e=this.array;let t=0;for(let i=0,r=n.length;i<r;i++){let s=n[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new Ie),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this},applyMatrix3:function(n){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(n),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(n),this.setXYZ(e,ze.x,ze.y,ze.z);return this},applyMatrix4:function(n){for(let e=0,t=this.count;e<t;e++)ze.x=this.getX(e),ze.y=this.getY(e),ze.z=this.getZ(e),ze.applyMatrix4(n),this.setXYZ(e,ze.x,ze.y,ze.z);return this},applyNormalMatrix:function(n){for(let e=0,t=this.count;e<t;e++)ze.x=this.getX(e),ze.y=this.getY(e),ze.z=this.getZ(e),ze.applyNormalMatrix(n),this.setXYZ(e,ze.x,ze.y,ze.z);return this},transformDirection:function(n){for(let e=0,t=this.count;e<t;e++)ze.x=this.getX(e),ze.y=this.getY(e),ze.z=this.getZ(e),ze.transformDirection(n),this.setXYZ(e,ze.x,ze.y,ze.z);return this},set:function(n,e=0){return this.array.set(n,e),this},getX:function(n){return this.array[n*this.itemSize]},setX:function(n,e){return this.array[n*this.itemSize]=e,this},getY:function(n){return this.array[n*this.itemSize+1]},setY:function(n,e){return this.array[n*this.itemSize+1]=e,this},getZ:function(n){return this.array[n*this.itemSize+2]},setZ:function(n,e){return this.array[n*this.itemSize+2]=e,this},getW:function(n){return this.array[n*this.itemSize+3]},setW:function(n,e){return this.array[n*this.itemSize+3]=e,this},setXY:function(n,e,t){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n*=this.itemSize,this.array[n+0]=e,this.array[n+1]=t,this.array[n+2]=i,this.array[n+3]=r,this},onUpload:function(n){return this.onUploadCallback=n,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function ar(n,e,t){ye.call(this,new Int8Array(n),e,t)}ar.prototype=Object.create(ye.prototype);ar.prototype.constructor=ar;function cr(n,e,t){ye.call(this,new Uint8Array(n),e,t)}cr.prototype=Object.create(ye.prototype);cr.prototype.constructor=cr;function lr(n,e,t){ye.call(this,new Uint8ClampedArray(n),e,t)}lr.prototype=Object.create(ye.prototype);lr.prototype.constructor=lr;function hr(n,e,t){ye.call(this,new Int16Array(n),e,t)}hr.prototype=Object.create(ye.prototype);hr.prototype.constructor=hr;function zn(n,e,t){ye.call(this,new Uint16Array(n),e,t)}zn.prototype=Object.create(ye.prototype);zn.prototype.constructor=zn;function ur(n,e,t){ye.call(this,new Int32Array(n),e,t)}ur.prototype=Object.create(ye.prototype);ur.prototype.constructor=ur;function Un(n,e,t){ye.call(this,new Uint32Array(n),e,t)}Un.prototype=Object.create(ye.prototype);Un.prototype.constructor=Un;function dr(n,e,t){ye.call(this,new Uint16Array(n),e,t)}dr.prototype=Object.create(ye.prototype);dr.prototype.constructor=dr;dr.prototype.isFloat16BufferAttribute=!0;function ie(n,e,t){ye.call(this,new Float32Array(n),e,t)}ie.prototype=Object.create(ye.prototype);ie.prototype.constructor=ie;function fr(n,e,t){ye.call(this,new Float64Array(n),e,t)}fr.prototype=Object.create(ye.prototype);fr.prototype.constructor=fr;function Fu(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}const Tf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Yi(n,e){return new Tf[n](e)}let Af=0;const zt=new ce,Ho=new me,ri=new b,wt=new _t,Hi=new _t,st=new b;function le(){Object.defineProperty(this,"id",{value:Af++}),this.uuid=xe.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}le.prototype=Object.assign(Object.create(en.prototype),{constructor:le,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(n){return Array.isArray(n)?this.index=new(Fu(n)>65535?Un:zn)(n,1):this.index=n,this},getAttribute:function(n){return this.attributes[n]},setAttribute:function(n,e){return this.attributes[n]=e,this},deleteAttribute:function(n){return delete this.attributes[n],this},hasAttribute:function(n){return this.attributes[n]!==void 0},addGroup:function(n,e,t=0){this.groups.push({start:n,count:e,materialIndex:t})},clearGroups:function(){this.groups=[]},setDrawRange:function(n,e){this.drawRange.start=n,this.drawRange.count=e},applyMatrix4:function(n){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(n),e.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const r=new nt().getNormalMatrix(n);t.applyNormalMatrix(r),t.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(n),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(n){return zt.makeRotationX(n),this.applyMatrix4(zt),this},rotateY:function(n){return zt.makeRotationY(n),this.applyMatrix4(zt),this},rotateZ:function(n){return zt.makeRotationZ(n),this.applyMatrix4(zt),this},translate:function(n,e,t){return zt.makeTranslation(n,e,t),this.applyMatrix4(zt),this},scale:function(n,e,t){return zt.makeScale(n,e,t),this.applyMatrix4(zt),this},lookAt:function(n){return Ho.lookAt(n),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this},setFromPoints:function(n){const e=[];for(let t=0,i=n.length;t<i;t++){const r=n[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new _t);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(n!==void 0){if(this.boundingBox.setFromBufferAttribute(n),e)for(let t=0,i=e.length;t<i;t++){const r=e[t];wt.setFromBufferAttribute(r),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,wt.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,wt.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(wt.min),this.boundingBox.expandByPoint(wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new _n);const n=this.attributes.position,e=this.morphAttributes.position;if(n&&n.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(n){const t=this.boundingSphere.center;if(wt.setFromBufferAttribute(n),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(st.addVectors(wt.min,Hi.min),wt.expandByPoint(st),st.addVectors(wt.max,Hi.max),wt.expandByPoint(st)):(wt.expandByPoint(Hi.min),wt.expandByPoint(Hi.max))}wt.getCenter(t);let i=0;for(let r=0,s=n.count;r<s;r++)st.fromBufferAttribute(n,r),i=Math.max(i,t.distanceToSquared(st));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],a=this.morphTargetsRelative;for(let c=0,l=o.count;c<l;c++)st.fromBufferAttribute(o,c),a&&(ri.fromBufferAttribute(n,c),st.add(ri)),i=Math.max(i,t.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeTangents:function(){const n=this.index,e=this.attributes;if(n===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const t=n.array,i=e.position.array,r=e.normal.array,s=e.uv.array,o=i.length/3;e.tangent===void 0&&this.setAttribute("tangent",new ye(new Float32Array(4*o),4));const a=e.tangent.array,c=[],l=[];for(let L=0;L<o;L++)c[L]=new b,l[L]=new b;const u=new b,h=new b,d=new b,f=new V,m=new V,y=new V,x=new b,g=new b;function p(L,D,I){u.fromArray(i,L*3),h.fromArray(i,D*3),d.fromArray(i,I*3),f.fromArray(s,L*2),m.fromArray(s,D*2),y.fromArray(s,I*2),h.sub(u),d.sub(u),m.sub(f),y.sub(f);const O=1/(m.x*y.y-y.x*m.y);isFinite(O)&&(x.copy(h).multiplyScalar(y.y).addScaledVector(d,-m.y).multiplyScalar(O),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-y.x).multiplyScalar(O),c[L].add(x),c[D].add(x),c[I].add(x),l[L].add(g),l[D].add(g),l[I].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.length}]);for(let L=0,D=w.length;L<D;++L){const I=w[L],O=I.start,F=I.count;for(let C=O,B=O+F;C<B;C+=3)p(t[C+0],t[C+1],t[C+2])}const _=new b,S=new b,v=new b,A=new b;function P(L){v.fromArray(r,L*3),A.copy(v);const D=c[L];_.copy(D),_.sub(v.multiplyScalar(v.dot(D))).normalize(),S.crossVectors(A,D);const O=S.dot(l[L])<0?-1:1;a[L*4]=_.x,a[L*4+1]=_.y,a[L*4+2]=_.z,a[L*4+3]=O}for(let L=0,D=w.length;L<D;++L){const I=w[L],O=I.start,F=I.count;for(let C=O,B=O+F;C<B;C+=3)P(t[C+0]),P(t[C+1]),P(t[C+2])}},computeVertexNormals:function(){const n=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new ye(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let h=0,d=t.count;h<d;h++)t.setXYZ(h,0,0,0);const i=new b,r=new b,s=new b,o=new b,a=new b,c=new b,l=new b,u=new b;if(n)for(let h=0,d=n.count;h<d;h+=3){const f=n.getX(h+0),m=n.getX(h+1),y=n.getX(h+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,y),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),o.fromBufferAttribute(t,f),a.fromBufferAttribute(t,m),c.fromBufferAttribute(t,y),o.add(l),a.add(l),c.add(l),t.setXYZ(f,o.x,o.y,o.z),t.setXYZ(m,a.x,a.y,a.z),t.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),s.fromBufferAttribute(e,h+2),l.subVectors(s,r),u.subVectors(i,r),l.cross(u),t.setXYZ(h+0,l.x,l.y,l.z),t.setXYZ(h+1,l.x,l.y,l.z),t.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),t.needsUpdate=!0}},merge:function(n,e){if(!(n&&n.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",n);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const t=this.attributes;for(const i in t){if(n.attributes[i]===void 0)continue;const s=t[i].array,o=n.attributes[i],a=o.array,c=o.itemSize*e,l=Math.min(a.length,s.length-c);for(let u=0,h=c;u<l;u++,h++)s[h]=a[u]}return this},normalizeNormals:function(){const n=this.attributes.normal;for(let e=0,t=n.count;e<t;e++)st.fromBufferAttribute(n,e),st.normalize(),n.setXYZ(e,st.x,st.y,st.z)},toNonIndexed:function(){function n(o,a){const c=o.array,l=o.itemSize,u=o.normalized,h=new c.constructor(a.length*l);let d=0,f=0;for(let m=0,y=a.length;m<y;m++){d=a[m]*l;for(let x=0;x<l;x++)h[f++]=c[d++]}return new ye(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,t=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=n(a,t);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const a=[],c=r[o];for(let l=0,u=c.length;l<u;l++){const h=c[l],d=n(h,t);a.push(d)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,a=s.length;o<a;o++){const c=s[o];e.addGroup(c.start,c.count,c.materialIndex)}return e},toJSON:function(){const n={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),Object.keys(this.userData).length>0&&(n.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(n[c]=a[c]);return n}n.data={attributes:{}};const e=this.index;e!==null&&(n.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const t=this.attributes;for(const a in t){const c=t[a],l=c.toJSON(n.data);c.name!==""&&(l.name=c.name),n.data.attributes[a]=l}const i={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],l=[];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=d.toJSON(n.data);d.name!==""&&(f.name=d.name),l.push(f)}l.length>0&&(i[a]=l,r=!0)}r&&(n.data.morphAttributes=i,n.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(n.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(n.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),n},clone:function(){return new le().copy(this)},copy:function(n){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=n.name;const t=n.index;t!==null&&this.setIndex(t.clone(e));const i=n.attributes;for(const c in i){const l=i[c];this.setAttribute(c,l.clone(e))}const r=n.morphAttributes;for(const c in r){const l=[],u=r[c];for(let h=0,d=u.length;h<d;h++)l.push(u[h].clone(e));this.morphAttributes[c]=l}this.morphTargetsRelative=n.morphTargetsRelative;const s=n.groups;for(let c=0,l=s.length;c<l;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=n.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=n.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=n.drawRange.start,this.drawRange.count=n.drawRange.count,this.userData=n.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const qc=new ce,si=new bn,Go=new _n,an=new b,cn=new b,ln=new b,ko=new b,Vo=new b,Wo=new b,es=new b,ts=new b,ns=new b,is=new V,rs=new V,ss=new V,qo=new b,os=new b;function Ue(n=new le,e=new tn){me.call(this),this.type="Mesh",this.geometry=n,this.material=e,this.updateMorphTargets()}Ue.prototype=Object.assign(Object.create(me.prototype),{constructor:Ue,isMesh:!0,copy:function(n){return me.prototype.copy.call(this,n),n.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=n.morphTargetInfluences.slice()),n.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},n.morphTargetDictionary)),this.material=n.material,this.geometry=n.geometry,this},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(n,e){const t=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),Go.copy(t.boundingSphere),Go.applyMatrix4(r),n.ray.intersectsSphere(Go)===!1)||(qc.copy(r).invert(),si.copy(n.ray).applyMatrix4(qc),t.boundingBox!==null&&si.intersectsBox(t.boundingBox)===!1))return;let s;if(t.isBufferGeometry){const o=t.index,a=t.attributes.position,c=t.morphAttributes.position,l=t.morphTargetsRelative,u=t.attributes.uv,h=t.attributes.uv2,d=t.groups,f=t.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,y=d.length;m<y;m++){const x=d[m],g=i[x.materialIndex],p=Math.max(x.start,f.start),w=Math.min(x.start+x.count,f.start+f.count);for(let _=p,S=w;_<S;_+=3){const v=o.getX(_),A=o.getX(_+1),P=o.getX(_+2);s=as(this,g,n,si,a,c,l,u,h,v,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let x=m,g=y;x<g;x+=3){const p=o.getX(x),w=o.getX(x+1),_=o.getX(x+2);s=as(this,i,n,si,a,c,l,u,h,p,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,y=d.length;m<y;m++){const x=d[m],g=i[x.materialIndex],p=Math.max(x.start,f.start),w=Math.min(x.start+x.count,f.start+f.count);for(let _=p,S=w;_<S;_+=3){const v=_,A=_+1,P=_+2;s=as(this,g,n,si,a,c,l,u,h,v,A,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let x=m,g=y;x<g;x+=3){const p=x,w=x+1,_=x+2;s=as(this,i,n,si,a,c,l,u,h,p,w,_),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}else t.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}});function Lf(n,e,t,i,r,s,o,a){let c;if(e.side===Qe?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side!==Cr,a),c===null)return null;os.copy(a),os.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(os);return l<t.near||l>t.far?null:{distance:l,point:os.clone(),object:n}}function as(n,e,t,i,r,s,o,a,c,l,u,h){an.fromBufferAttribute(r,l),cn.fromBufferAttribute(r,u),ln.fromBufferAttribute(r,h);const d=n.morphTargetInfluences;if(e.morphTargets&&s&&d){es.set(0,0,0),ts.set(0,0,0),ns.set(0,0,0);for(let m=0,y=s.length;m<y;m++){const x=d[m],g=s[m];x!==0&&(ko.fromBufferAttribute(g,l),Vo.fromBufferAttribute(g,u),Wo.fromBufferAttribute(g,h),o?(es.addScaledVector(ko,x),ts.addScaledVector(Vo,x),ns.addScaledVector(Wo,x)):(es.addScaledVector(ko.sub(an),x),ts.addScaledVector(Vo.sub(cn),x),ns.addScaledVector(Wo.sub(ln),x)))}an.add(es),cn.add(ts),ln.add(ns)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(l,an),n.boneTransform(u,cn),n.boneTransform(h,ln));const f=Lf(n,e,t,i,an,cn,ln,qo);if(f){a&&(is.fromBufferAttribute(a,l),rs.fromBufferAttribute(a,u),ss.fromBufferAttribute(a,h),f.uv=$e.getUV(qo,an,cn,ln,is,rs,ss,new V)),c&&(is.fromBufferAttribute(c,l),rs.fromBufferAttribute(c,u),ss.fromBufferAttribute(c,h),f.uv2=$e.getUV(qo,an,cn,ln,is,rs,ss,new V));const m={a:l,b:u,c:h,normal:new b,materialIndex:0};$e.getNormal(an,cn,ln,m.normal),f.face=m}return f}class Hn extends le{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(h,2));function m(y,x,g,p,w,_,S,v,A,P,L){const D=_/A,I=S/P,O=_/2,F=S/2,C=v/2,B=A+1,z=P+1;let X=0,J=0;const ee=new b;for(let ae=0;ae<z;ae++){const oe=ae*I-F;for(let Te=0;Te<B;Te++){const be=Te*D-O;ee[y]=be*p,ee[x]=oe*w,ee[g]=C,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[x]=0,ee[g]=v>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Te/A),h.push(1-ae/P),X+=1}}for(let ae=0;ae<P;ae++)for(let oe=0;oe<A;oe++){const Te=d+oe+B*ae,be=d+oe+B*(ae+1),Be=d+(oe+1)+B*(ae+1),Re=d+(oe+1)+B*ae;c.push(Te,be,Re),c.push(be,Be,Re),J+=6}a.addGroup(f,J,L),f+=J,d+=X}}}function bi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function lt(n){const e={};for(let t=0;t<n.length;t++){const i=bi(n[t]);for(const r in i)e[r]=i[r]}return e}const Bu={clone:bi,merge:lt};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function vt(n){Ve.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,n!==void 0&&(n.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(n))}vt.prototype=Object.create(Ve.prototype);vt.prototype.constructor=vt;vt.prototype.isShaderMaterial=!0;vt.prototype.copy=function(n){return Ve.prototype.copy.call(this,n),this.fragmentShader=n.fragmentShader,this.vertexShader=n.vertexShader,this.uniforms=bi(n.uniforms),this.defines=Object.assign({},n.defines),this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.lights=n.lights,this.clipping=n.clipping,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.extensions=Object.assign({},n.extensions),this.glslVersion=n.glslVersion,this};vt.prototype.toJSON=function(n){const e=Ve.prototype.toJSON.call(this,n);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(n).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e};function mn(){me.call(this),this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce}mn.prototype=Object.assign(Object.create(me.prototype),{constructor:mn,isCamera:!0,copy:function(n,e){return me.prototype.copy.call(this,n,e),this.matrixWorldInverse.copy(n.matrixWorldInverse),this.projectionMatrix.copy(n.projectionMatrix),this.projectionMatrixInverse.copy(n.projectionMatrixInverse),this},getWorldDirection:function(n){n===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),n=new b),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return n.set(-e[8],-e[9],-e[10]).normalize()},updateMatrixWorld:function(n){me.prototype.updateMatrixWorld.call(this,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()},updateWorldMatrix:function(n,e){me.prototype.updateWorldMatrix.call(this,n,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()},clone:function(){return new this.constructor().copy(this)}});function Ke(n=50,e=1,t=.1,i=2e3){mn.call(this),this.type="PerspectiveCamera",this.fov=n,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ke.prototype=Object.assign(Object.create(mn.prototype),{constructor:Ke,isPerspectiveCamera:!0,copy:function(n,e){return mn.prototype.copy.call(this,n,e),this.fov=n.fov,this.zoom=n.zoom,this.near=n.near,this.far=n.far,this.focus=n.focus,this.aspect=n.aspect,this.view=n.view===null?null:Object.assign({},n.view),this.filmGauge=n.filmGauge,this.filmOffset=n.filmOffset,this},setFocalLength:function(n){const e=.5*this.getFilmHeight()/n;this.fov=xe.RAD2DEG*2*Math.atan(e),this.updateProjectionMatrix()},getFocalLength:function(){const n=Math.tan(xe.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/n},getEffectiveFOV:function(){return xe.RAD2DEG*2*Math.atan(Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(n,e,t,i,r,s){this.aspect=n/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=n,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const n=this.near;let e=n*Math.tan(xe.DEG2RAD*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const a=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/c,i*=s.width/a,t*=s.height/c}const o=this.filmOffset;o!==0&&(r+=n*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,n,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()},toJSON:function(n){const e=me.prototype.toJSON.call(this,n);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}});const oi=90,ai=1;class co extends me{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Ke(oi,ai,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(1,0,0)),this.add(r);const s=new Ke(oi,ai,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new b(-1,0,0)),this.add(s);const o=new Ke(oi,ai,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new b(0,1,0)),this.add(o);const a=new Ke(oi,ai,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new b(0,-1,0)),this.add(a);const c=new Ke(oi,ai,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,1)),this.add(c);const l=new Ke(oi,ai,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(h),e.xr.enabled=u}}class Ri extends it{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Dr,a=a!==void 0?a:un,super(e,t,i,r,s,o,a,c,l,u),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ri.prototype.isCubeTexture=!0;class lo extends $t{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Ri(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hn(5,5,5),s=new vt({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Jt});s.uniforms.tEquirect.value=t;const o=new Ue(r,s),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=tt),new co(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}lo.prototype.isWebGLCubeRenderTarget=!0;class wi extends it{constructor(e,t,i,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=l!==void 0?l:et,this.minFilter=u!==void 0?u:et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}wi.prototype.isDataTexture=!0;const ci=new _n,cs=new b;class Or{constructor(e=new It,t=new It,i=new It,r=new It,s=new It,o=new It){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],d=i[8],f=i[9],m=i[10],y=i[11],x=i[12],g=i[13],p=i[14],w=i[15];return t[0].setComponents(a-r,h-c,y-d,w-x).normalize(),t[1].setComponents(a+r,h+c,y+d,w+x).normalize(),t[2].setComponents(a+s,h+l,y+f,w+g).normalize(),t[3].setComponents(a-s,h-l,y-f,w-g).normalize(),t[4].setComponents(a-o,h-u,y-m,w-p).normalize(),t[5].setComponents(a+o,h+u,y+m,w+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSprite(e){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nu(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Pf(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const h=l.array,d=l.usage,f=n.createBuffer();n.bindBuffer(u,f),n.bufferData(u,h,d),l.onUploadCallback();let m=5126;return h instanceof Float32Array?m=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?l.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:h instanceof Int16Array?m=5122:h instanceof Uint32Array?m=5125:h instanceof Int32Array?m=5124:h instanceof Int8Array?m=5120:h instanceof Uint8Array&&(m=5121),{buffer:f,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,f=u.updateRange;n.bindBuffer(h,l),f.count===-1?n.bufferSubData(h,0,d):(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,r(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class pr extends le{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],y=[],x=[];for(let g=0;g<u;g++){const p=g*d-o;for(let w=0;w<l;w++){const _=w*h-s;m.push(_,-p,0),y.push(0,0,1),x.push(w/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let p=0;p<a;p++){const w=p+l*g,_=p+l*(g+1),S=p+1+l*(g+1),v=p+1+l*g;f.push(w,_,v),f.push(_,S,v)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(x,2))}}var Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Nf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of="vec3 transformed = vec3( position );",zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Hf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Xf=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor.xyz *= color.xyz;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,pp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,xp=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wp=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,Sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dp=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Up=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Wp=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nm=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,fm=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,pm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ym=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,vm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Am=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,Vm=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jm=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const Ee={alphamap_fragment:Df,alphamap_pars_fragment:If,alphatest_fragment:Ff,aomap_fragment:Bf,aomap_pars_fragment:Nf,begin_vertex:Of,beginnormal_vertex:zf,bsdfs:Uf,bumpmap_pars_fragment:Hf,clipping_planes_fragment:Gf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:qf,color_pars_fragment:Xf,color_pars_vertex:jf,color_vertex:Yf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Qf,displacementmap_vertex:Kf,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,encodings_fragment:np,encodings_pars_fragment:ip,envmap_fragment:rp,envmap_common_pars_fragment:sp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_vertex:gp,lights_pars_begin:yp,lights_toon_fragment:vp,lights_toon_pars_fragment:_p,lights_phong_fragment:bp,lights_phong_pars_fragment:wp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Pp,map_fragment:Dp,map_pars_fragment:Ip,map_particle_fragment:Fp,map_particle_pars_fragment:Bp,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Op,morphnormal_vertex:zp,morphtarget_pars_vertex:Up,morphtarget_vertex:Hp,normal_fragment_begin:Gp,normal_fragment_maps:kp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Xp,packing:jp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Qp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:rm,skinning_pars_vertex:sm,skinning_vertex:om,skinnormal_vertex:am,specularmap_fragment:cm,specularmap_pars_fragment:lm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmissionmap_fragment:dm,transmissionmap_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,uv2_pars_fragment:ym,uv2_pars_vertex:xm,uv2_vertex:vm,worldpos_vertex:_m,background_frag:bm,background_vert:wm,cube_frag:Mm,cube_vert:Sm,depth_frag:Em,depth_vert:Tm,distanceRGBA_frag:Am,distanceRGBA_vert:Lm,equirect_frag:Rm,equirect_vert:Cm,linedashed_frag:Pm,linedashed_vert:Dm,meshbasic_frag:Im,meshbasic_vert:Fm,meshlambert_frag:Bm,meshlambert_vert:Nm,meshmatcap_frag:Om,meshmatcap_vert:zm,meshtoon_frag:Um,meshtoon_vert:Hm,meshphong_frag:Gm,meshphong_vert:km,meshphysical_frag:Vm,meshphysical_vert:Wm,normal_frag:qm,normal_vert:Xm,points_frag:jm,points_vert:Ym,shadow_frag:Zm,shadow_vert:Jm,sprite_frag:$m,sprite_vert:Qm},$={common:{diffuse:{value:new ne(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new nt},uv2Transform:{value:new nt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new nt}},sprite:{diffuse:{value:new ne(15658734)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new nt}}},Ft={basic:{uniforms:lt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:lt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.fog,$.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:lt([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:lt([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:lt([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new ne(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:lt([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:lt([$.points,$.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:lt([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:lt([$.common,$.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:lt([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.normal_vert,fragmentShader:Ee.normal_frag},sprite:{uniforms:lt([$.sprite,$.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:lt([$.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:lt([$.common,$.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:lt([$.lights,$.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ft.physical={uniforms:lt([Ft.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new V(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new ne(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function Km(n,e,t,i,r){const s=new ne(0);let o=0,a,c,l=null,u=0,h=null;function d(m,y,x,g){let p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=e.get(p));const w=n.xr,_=w.getSession&&w.getSession();_&&_.environmentBlendMode==="additive"&&(p=null),p===null?f(s,o):p&&p.isColor&&(f(p,1),g=!0),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===Ti)?(c===void 0&&(c=new Ue(new Hn(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:bi(Ft.cube.uniforms),vertexShader:Ft.cube.vertexShader,fragmentShader:Ft.cube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),p.isWebGLCubeRenderTarget&&(p=p.texture),c.material.uniforms.envMap.value=p,c.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p._needsFlipEnvMap?-1:1,(l!==p||u!==p.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,l=p,u=p.version,h=n.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Ue(new pr(2,2),new vt({name:"BackgroundMaterial",uniforms:bi(Ft.background.uniforms),vertexShader:Ft.background.vertexShader,fragmentShader:Ft.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(l!==p||u!==p.version||h!==n.toneMapping)&&(a.material.needsUpdate=!0,l=p,u=p.version,h=n.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,y){t.buffers.color.setClear(m.r,m.g,m.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(m,y=1){s.set(m),o=y,f(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,f(s,o)},render:d}}function eg(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=y(null);let l=c;function u(F,C,B,z,X){let J=!1;if(o){const ee=m(z,B,C);l!==ee&&(l=ee,d(l.object)),J=x(z,X),J&&g(z,X)}else{const ee=C.wireframe===!0;(l.geometry!==z.id||l.program!==B.id||l.wireframe!==ee)&&(l.geometry=z.id,l.program=B.id,l.wireframe=ee,J=!0)}F.isInstancedMesh===!0&&(J=!0),X!==null&&t.update(X,34963),J&&(A(F,C,B,z),X!==null&&n.bindBuffer(34963,t.get(X).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function f(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,C,B){const z=B.wireframe===!0;let X=a[F.id];X===void 0&&(X={},a[F.id]=X);let J=X[C.id];J===void 0&&(J={},X[C.id]=J);let ee=J[z];return ee===void 0&&(ee=y(h()),J[z]=ee),ee}function y(F){const C=[],B=[],z=[];for(let X=0;X<r;X++)C[X]=0,B[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:z,object:F,attributes:{},index:null}}function x(F,C){const B=l.attributes,z=F.attributes;let X=0;for(const J in z){const ee=B[J],ae=z[J];if(ee===void 0||ee.attribute!==ae||ee.data!==ae.data)return!0;X++}return l.attributesNum!==X||l.index!==C}function g(F,C){const B={},z=F.attributes;let X=0;for(const J in z){const ee=z[J],ae={};ae.attribute=ee,ee.data&&(ae.data=ee.data),B[J]=ae,X++}l.attributes=B,l.attributesNum=X,l.index=C}function p(){const F=l.newAttributes;for(let C=0,B=F.length;C<B;C++)F[C]=0}function w(F){_(F,0)}function _(F,C){const B=l.newAttributes,z=l.enabledAttributes,X=l.attributeDivisors;B[F]=1,z[F]===0&&(n.enableVertexAttribArray(F),z[F]=1),X[F]!==C&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,C),X[F]=C)}function S(){const F=l.newAttributes,C=l.enabledAttributes;for(let B=0,z=C.length;B<z;B++)C[B]!==F[B]&&(n.disableVertexAttribArray(B),C[B]=0)}function v(F,C,B,z,X,J){i.isWebGL2===!0&&(B===5124||B===5125)?n.vertexAttribIPointer(F,C,B,X,J):n.vertexAttribPointer(F,C,B,z,X,J)}function A(F,C,B,z){if(i.isWebGL2===!1&&(F.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const X=z.attributes,J=B.getAttributes(),ee=C.defaultAttributeValues;for(const ae in J){const oe=J[ae];if(oe>=0){const Te=X[ae];if(Te!==void 0){const be=Te.normalized,Be=Te.itemSize,Re=t.get(Te);if(Re===void 0)continue;const G=Re.buffer,He=Re.type,Le=Re.bytesPerElement;if(Te.isInterleavedBufferAttribute){const Ce=Te.data,_e=Ce.stride,Pe=Te.offset;Ce&&Ce.isInstancedInterleavedBuffer?(_(oe,Ce.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ce.meshPerAttribute*Ce.count)):w(oe),n.bindBuffer(34962,G),v(oe,Be,He,be,_e*Le,Pe*Le)}else Te.isInstancedBufferAttribute?(_(oe,Te.meshPerAttribute),z._maxInstanceCount===void 0&&(z._maxInstanceCount=Te.meshPerAttribute*Te.count)):w(oe),n.bindBuffer(34962,G),v(oe,Be,He,be,0,0)}else if(ae==="instanceMatrix"){const be=t.get(F.instanceMatrix);if(be===void 0)continue;const Be=be.buffer,Re=be.type;_(oe+0,1),_(oe+1,1),_(oe+2,1),_(oe+3,1),n.bindBuffer(34962,Be),n.vertexAttribPointer(oe+0,4,Re,!1,64,0),n.vertexAttribPointer(oe+1,4,Re,!1,64,16),n.vertexAttribPointer(oe+2,4,Re,!1,64,32),n.vertexAttribPointer(oe+3,4,Re,!1,64,48)}else if(ae==="instanceColor"){const be=t.get(F.instanceColor);if(be===void 0)continue;const Be=be.buffer,Re=be.type;_(oe,1),n.bindBuffer(34962,Be),n.vertexAttribPointer(oe,3,Re,!1,12,0)}else if(ee!==void 0){const be=ee[ae];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(oe,be);break;case 3:n.vertexAttrib3fv(oe,be);break;case 4:n.vertexAttrib4fv(oe,be);break;default:n.vertexAttrib1fv(oe,be)}}}}S()}function P(){I();for(const F in a){const C=a[F];for(const B in C){const z=C[B];for(const X in z)f(z[X].object),delete z[X];delete C[B]}delete a[F]}}function L(F){if(a[F.id]===void 0)return;const C=a[F.id];for(const B in C){const z=C[B];for(const X in z)f(z[X].object),delete z[X];delete C[B]}delete a[F.id]}function D(F){for(const C in a){const B=a[C];if(B[F.id]===void 0)continue;const z=B[F.id];for(const X in z)f(z[X].object),delete z[X];delete B[F.id]}}function I(){O(),l!==c&&(l=c,d(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:I,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:p,enableAttribute:w,disableUnusedAttributes:S}}function tg(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,f;if(r)d=n,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function ng(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(v){if(v==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),f=n.getParameter(34076),m=n.getParameter(34921),y=n.getParameter(36347),x=n.getParameter(36348),g=n.getParameter(36349),p=h>0,w=o||e.has("OES_texture_float"),_=p&&w,S=o?n.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:p,floatFragmentTextures:w,floatVertexTextures:_,maxSamples:S}}function ig(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new It,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,f){const m=h.length!==0||d||i!==0||r;return r=d,t=u(h,f,0),i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,f){const m=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,g=n.get(h);if(!r||m===null||m.length===0||s&&!x)s?u(null):l();else{const p=s?0:i,w=p*4;let _=g.clippingState||null;c.value=_,_=u(m,d,w,f);for(let S=0;S!==w;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,m){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=c.value,m!==!0||x===null){const g=f+y*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,_=f;w!==y;++w,_+=4)o.copy(h[w]).applyMatrix4(p,a),o.normal.toArray(x,_),x[_+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function rg(n){let e=new WeakMap;function t(o,a){return a===Bs?o.mapping=Dr:a===Ns&&(o.mapping=Ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bs||a===Ns)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=n.getRenderTarget(),u=new lo(c.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),n.setRenderTarget(l),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function sg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function og(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const m in d)e.update(d[m],34962);const f=h.morphAttributes;for(const m in f){const y=f[m];for(let x=0,g=y.length;x<g;x++)e.update(y[x],34962)}}function l(h){const d=[],f=h.index,m=h.attributes.position;let y=0;if(f!==null){const p=f.array;y=f.version;for(let w=0,_=p.length;w<_;w+=3){const S=p[w+0],v=p[w+1],A=p[w+2];d.push(S,v,v,A,A,S)}}else{const p=m.array;y=m.version;for(let w=0,_=p.length/3-1;w<_;w+=3){const S=w+0,v=w+1,A=w+2;d.push(S,v,v,A,A,S)}}const x=new(Fu(d)>65535?Un:zn)(d,1);x.version=y;const g=s.get(h);g&&e.remove(g),s.set(h,x)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ag(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,f){n.drawElements(s,f,a,d*c),t.update(f,s,1)}function h(d,f,m){if(m===0)return;let y,x;if(r)y=n,x="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[x](s,f,a,d*c,m),t.update(f,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function cg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lg(n,e){return n[0]-e[0]}function hg(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ug(n){const e={},t=new Float32Array(8),i=[];for(let s=0;s<8;s++)i[s]=[s,0];function r(s,o,a,c){const l=s.morphTargetInfluences,u=l===void 0?0:l.length;let h=e[o.id];if(h===void 0){h=[];for(let x=0;x<u;x++)h[x]=[x,0];e[o.id]=h}for(let x=0;x<u;x++){const g=h[x];g[0]=x,g[1]=l[x]}h.sort(hg);for(let x=0;x<8;x++)x<u&&h[x][1]?(i[x][0]=h[x][0],i[x][1]=h[x][1]):(i[x][0]=Number.MAX_SAFE_INTEGER,i[x][1]=0);i.sort(lg);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let m=0;for(let x=0;x<8;x++){const g=i[x],p=g[0],w=g[1];p!==Number.MAX_SAFE_INTEGER&&w?(d&&o.getAttribute("morphTarget"+x)!==d[p]&&o.setAttribute("morphTarget"+x,d[p]),f&&o.getAttribute("morphNormal"+x)!==f[p]&&o.setAttribute("morphNormal"+x,f[p]),t[x]=w,m+=w):(d&&o.hasAttribute("morphTarget"+x)===!0&&o.deleteAttribute("morphTarget"+x),f&&o.hasAttribute("morphNormal"+x)===!0&&o.deleteAttribute("morphNormal"+x),t[x]=0)}const y=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",y),c.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:r}}function dg(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);return r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Wa extends it{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=et,this.minFilter=et,this.wrapR=dt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}Wa.prototype.isDataTexture2DArray=!0;class qa extends it{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=et,this.minFilter=et,this.wrapR=dt,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}}qa.prototype.isDataTexture3D=!0;const Ou=new it,fg=new Wa,pg=new qa,zu=new Ri,Xc=[],jc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Ci(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xc[r];if(s===void 0&&(s=new Float32Array(r),Xc[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Uu(n,e){let t=jc[e];t===void 0&&(t=new Int32Array(e),jc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Jc.set(i),n.uniformMatrix2fv(this.addr,!1,Jc),Et(t,i)}}function _g(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Zc.set(i),n.uniformMatrix3fv(this.addr,!1,Zc),Et(t,i)}}function bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Tt(t,i))return;Yc.set(i),n.uniformMatrix4fv(this.addr,!1,Yc),Et(t,i)}}function wg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Ou,r)}function Mg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fg,r)}function Sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pg,r)}function Eg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||zu,r)}function Tg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ag(n,e){const t=this.cache;Tt(t,e)||(n.uniform2iv(this.addr,e),Et(t,e))}function Lg(n,e){const t=this.cache;Tt(t,e)||(n.uniform3iv(this.addr,e),Et(t,e))}function Rg(n,e){const t=this.cache;Tt(t,e)||(n.uniform4iv(this.addr,e),Et(t,e))}function Cg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Pg(n){switch(n){case 5126:return mg;case 35664:return gg;case 35665:return yg;case 35666:return xg;case 35674:return vg;case 35675:return _g;case 35676:return bg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Lg;case 35669:case 35673:return Rg;case 5125:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Mg}}function Dg(n,e){n.uniform1fv(this.addr,e)}function Ig(n,e){n.uniform1iv(this.addr,e)}function Fg(n,e){n.uniform2iv(this.addr,e)}function Bg(n,e){n.uniform3iv(this.addr,e)}function Ng(n,e){n.uniform4iv(this.addr,e)}function Og(n,e){const t=Ci(e,this.size,2);n.uniform2fv(this.addr,t)}function zg(n,e){const t=Ci(e,this.size,3);n.uniform3fv(this.addr,t)}function Ug(n,e){const t=Ci(e,this.size,4);n.uniform4fv(this.addr,t)}function Hg(n,e){const t=Ci(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Gg(n,e){const t=Ci(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kg(n,e){const t=Ci(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vg(n,e,t){const i=e.length,r=Uu(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTexture2D(e[s]||Ou,r[s])}function Wg(n,e,t){const i=e.length,r=Uu(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.safeSetTextureCube(e[s]||zu,r[s])}function qg(n){switch(n){case 5126:return Dg;case 35664:return Og;case 35665:return zg;case 35666:return Ug;case 35674:return Hg;case 35675:return Gg;case 35676:return kg;case 5124:case 35670:return Ig;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg}}function Xg(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=Pg(e.type)}function Hu(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=qg(e.type)}Hu.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),Et(e,n)};function Gu(n){this.id=n,this.seq=[],this.map={}}Gu.prototype.setValue=function(n,e,t){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(n,e[o.id],t)}};const Xo=/(\w+)(\])?(\[|\.)?/g;function $c(n,e){n.seq.push(e),n.map[e.id]=e}function jg(n,e,t){const i=n.name,r=i.length;for(Xo.lastIndex=0;;){const s=Xo.exec(i),o=Xo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){$c(t,l===void 0?new Xg(a,n,e):new Hu(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Gu(a),$c(t,h)),t=h}}}function dn(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=n.getActiveUniform(e,i),s=n.getUniformLocation(e,r.name);jg(r,s,this)}}dn.prototype.setValue=function(n,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(n,t,i)};dn.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};dn.upload=function(n,e,t,i){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(n,a.value,i)}};dn.seqWithValue=function(n,e){const t=[];for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.id in e&&t.push(s)}return t};function Qc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let Yg=0;function Zg(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function ku(n){switch(n){case ft:return["Linear","( value )"];case Br:return["sRGB","( value )"];case ao:return["RGBE","( value )"];case Ha:return["RGBM","( value, 7.0 )"];case Ga:return["RGBM","( value, 16.0 )"];case ka:return["RGBD","( value, 256.0 )"];case oo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Au:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Kc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+r+Zg(s)}function Gi(n,e){const t=ku(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Jg(n,e){const t=ku(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $g(n,e){let t;switch(e){case Th:t="Linear";break;case Ah:t="Reinhard";break;case Lh:t="OptimizedCineon";break;case Rh:t="ACESFilmic";break;case Ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qg(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Kg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ey(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r).name;t[o]=n.getAttribLocation(e,o)}return t}function Zi(n){return n!==""}function el(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(n){return n.replace(ty,ny)}function ny(n,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ma(t)}const iy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(n){return n.replace(ry,Vu).replace(iy,sy)}function sy(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Vu(n,e,t,i)}function Vu(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function il(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fa?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function ay(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Dr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Ti:case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ir:case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function ly(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pr:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case Eh:e="ENVMAP_BLENDING_ADD";break}return e}function hy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=oy(t),l=ay(t),u=cy(t),h=ly(t),d=n.gammaFactor>0?n.gammaFactor:1,f=t.isWebGL2?"":Qg(t),m=Kg(s),y=r.createProgram();let x,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[m].filter(Zi).join(`
`),x.length>0&&(x+=`
`),g=[f,m].filter(Zi).join(`
`),g.length>0&&(g+=`
`)):(x=[il(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),g=[f,il(t),"#define SHADER_NAME "+t.shaderName,m,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Bn?$g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ee.encodings_pars_fragment,t.map?Gi("mapTexelToLinear",t.mapEncoding):"",t.matcap?Gi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Gi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Gi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Gi("lightMapTexelToLinear",t.lightMapEncoding):"",Jg("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Ma(o),o=el(o,t),o=tl(o,t),a=Ma(a),a=el(a,t),a=tl(a,t),o=nl(o),a=nl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===wa?"":"out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=p+x+o,_=p+g+a,S=Qc(r,35633,w),v=Qc(r,35632,_);if(r.attachShader(y,S),r.attachShader(y,v),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),n.debug.checkShaderErrors){const L=r.getProgramInfoLog(y).trim(),D=r.getShaderInfoLog(S).trim(),I=r.getShaderInfoLog(v).trim();let O=!0,F=!0;if(r.getProgramParameter(y,35714)===!1){O=!1;const C=Kc(r,S,"vertex"),B=Kc(r,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",r.getError(),"35715",r.getProgramParameter(y,35715),"gl.getProgramInfoLog",L,C,B)}else L!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",L):(D===""||I==="")&&(F=!1);F&&(this.diagnostics={runnable:O,programLog:L,vertexShader:{log:D,prefix:x},fragmentShader:{log:I,prefix:g}})}r.deleteShader(S),r.deleteShader(v);let A;this.getUniforms=function(){return A===void 0&&(A=new dn(r,y)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=ey(r,y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=v,this}function uy(n,e,t,i,r,s){const o=[],a=i.isWebGL2,c=i.logarithmicDepthBuffer,l=i.floatVertexTextures,u=i.maxVertexUniforms,h=i.vertexTextures;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},m=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function y(v){const P=v.skeleton.bones;if(l)return 1024;{const D=Math.floor((u-20)/4),I=Math.min(D,P.length);return I<P.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+P.length+" bones. This GPU supports "+I+"."),0):I}}function x(v){let A;return v&&v.isTexture?A=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=v.texture.encoding):A=ft,A}function g(v,A,P,L,D){const I=L.fog,O=v.isMeshStandardMaterial?L.environment:null,F=e.get(v.envMap||O),C=f[v.type],B=D.isSkinnedMesh?y(D):0;v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let z,X;if(C){const ae=Ft[C];z=ae.vertexShader,X=ae.fragmentShader}else z=v.vertexShader,X=v.fragmentShader;const J=n.getRenderTarget();return{isWebGL2:a,shaderID:C,shaderName:v.type,vertexShader:z,fragmentShader:X,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:D.isInstancedMesh===!0,instancingColor:D.isInstancedMesh===!0&&D.instanceColor!==null,supportsVertexTextures:h,outputEncoding:J!==null?x(J.texture):n.outputEncoding,map:!!v.map,mapEncoding:x(v.map),matcap:!!v.matcap,matcapEncoding:x(v.matcap),envMap:!!F,envMapMode:F&&F.mapping,envMapEncoding:x(F),envMapCubeUV:!!F&&(F.mapping===Ti||F.mapping===Fr),lightMap:!!v.lightMap,lightMapEncoding:x(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:x(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Cu,tangentSpaceNormalMap:v.normalMapType===Vn,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.transmissionMap)&&!!v.displacementMap,fog:!!I,useFog:v.fog,fogExp2:I&&I.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:v.skinning&&B>0,maxBones:B,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,maxMorphTargets:n.maxMorphTargets,maxMorphNormals:n.maxMorphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:v.toneMapped?n.toneMapping:Bn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Cr,flipSided:v.side===Qe,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.fragmentShader),A.push(v.vertexShader)),v.defines!==void 0)for(const P in v.defines)A.push(P),A.push(v.defines[P]);if(v.isRawShaderMaterial===!1){for(let P=0;P<m.length;P++)A.push(v[m[P]]);A.push(n.outputEncoding),A.push(n.gammaFactor)}return A.push(v.customProgramCacheKey),A.join()}function w(v){const A=f[v.type];let P;if(A){const L=Ft[A];P=Bu.clone(L.uniforms)}else P=v.uniforms;return P}function _(v,A){let P;for(let L=0,D=o.length;L<D;L++){const I=o[L];if(I.cacheKey===A){P=I,++P.usedTimes;break}}return P===void 0&&(P=new hy(n,A,v,r),o.push(P)),P}function S(v){if(--v.usedTimes===0){const A=o.indexOf(v);o[A]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:_,releaseProgram:S,programs:o}}function dy(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function fy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function py(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rl(n){const e=[];let t=0;const i=[],r=[],s={id:-1};function o(){t=0,i.length=0,r.length=0}function a(d,f,m,y,x,g){let p=e[t];const w=n.get(m);return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,program:w.program||s,groupOrder:y,renderOrder:d.renderOrder,z:x,group:g},e[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.program=w.program||s,p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function c(d,f,m,y,x,g){const p=a(d,f,m,y,x,g);(m.transparent===!0?r:i).push(p)}function l(d,f,m,y,x,g){const p=a(d,f,m,y,x,g);(m.transparent===!0?r:i).unshift(p)}function u(d,f){i.length>1&&i.sort(d||fy),r.length>1&&r.sort(f||py)}function h(){for(let d=t,f=e.length;d<f;d++){const m=e[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function my(n){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new rl(n),e.set(r,[o])):s>=e.get(r).length?(o=new rl(n),e.get(r).push(o)):o=e.get(r)[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function gy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ne};break;case"SpotLight":t={position:new b,direction:new b,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":t={color:new ne,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function yy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xy=0;function vy(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function _y(n,e){const t=new gy,i=yy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new b);const s=new b,o=new ce,a=new ce;function c(u){let h=0,d=0,f=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let m=0,y=0,x=0,g=0,p=0,w=0,_=0,S=0;u.sort(vy);for(let A=0,P=u.length;A<P;A++){const L=u[A],D=L.color,I=L.intensity,O=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*I,d+=D.g*I,f+=D.b*I;else if(L.isLightProbe)for(let C=0;C<9;C++)r.probe[C].addScaledVector(L.sh.coefficients[C],I);else if(L.isDirectionalLight){const C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,z=i.get(L);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,r.directionalShadow[m]=z,r.directionalShadowMap[m]=F,r.directionalShadowMatrix[m]=L.shadow.matrix,w++}r.directional[m]=C,m++}else if(L.isSpotLight){const C=t.get(L);if(C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(D).multiplyScalar(I),C.distance=O,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,L.castShadow){const B=L.shadow,z=i.get(L);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,r.spotShadow[x]=z,r.spotShadowMap[x]=F,r.spotShadowMatrix[x]=L.shadow.matrix,S++}r.spot[x]=C,x++}else if(L.isRectAreaLight){const C=t.get(L);C.color.copy(D).multiplyScalar(I),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=C,g++}else if(L.isPointLight){const C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){const B=L.shadow,z=i.get(L);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,r.pointShadow[y]=z,r.pointShadowMap[y]=F,r.pointShadowMatrix[y]=L.shadow.matrix,_++}r.point[y]=C,y++}else if(L.isHemisphereLight){const C=t.get(L);C.skyColor.copy(L.color).multiplyScalar(I),C.groundColor.copy(L.groundColor).multiplyScalar(I),r.hemi[p]=C,p++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=f;const v=r.hash;(v.directionalLength!==m||v.pointLength!==y||v.spotLength!==x||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==w||v.numPointShadows!==_||v.numSpotShadows!==S)&&(r.directional.length=m,r.spot.length=x,r.rectArea.length=g,r.point.length=y,r.hemi.length=p,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=_,r.pointShadowMap.length=_,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=_,r.spotShadowMatrix.length=S,v.directionalLength=m,v.pointLength=y,v.spotLength=x,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=w,v.numPointShadows=_,v.numSpotShadows=S,r.version=xy++)}function l(u,h){let d=0,f=0,m=0,y=0,x=0;const g=h.matrixWorldInverse;for(let p=0,w=u.length;p<w;p++){const _=u[p];if(_.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(_.isSpotLight){const S=r.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(_.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const S=r.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),S.direction.normalize(),x++}}}return{setup:c,setupView:l,state:r}}function sl(n,e){const t=new _y(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function c(){t.setup(i)}function l(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function by(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new sl(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new sl(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class ho extends Ve{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Lu,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}ho.prototype.isMeshDepthMaterial=!0;class uo extends Ve{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}uo.prototype.isMeshDistanceMaterial=!0;var wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Wu(n,e,t){let i=new Or;const r=new V,s=new V,o=new Ie,a=[],c=[],l={},u={0:Qe,1:Ei,2:Cr},h=new vt({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:My,fragmentShader:wy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const f=new le;f.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ue(f,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa,this.render=function(S,v,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||S.length===0)return;const P=n.getRenderTarget(),L=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Jt),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let O=0,F=S.length;O<F;O++){const C=S[O],B=C.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const z=B.getFrameExtents();if(r.multiply(z),s.copy(B.mapSize),(r.x>t||r.y>t)&&(r.x>t&&(s.x=Math.floor(t/z.x),r.x=s.x*z.x,B.mapSize.x=s.x),r.y>t&&(s.y=Math.floor(t/z.y),r.y=s.y*z.y,B.mapSize.y=s.y)),B.map===null&&!B.isPointLightShadow&&this.type===mi){const J={minFilter:tt,magFilter:tt,format:Mt};B.map=new $t(r.x,r.y,J),B.map.texture.name=C.name+".shadowMap",B.mapPass=new $t(r.x,r.y,J),B.camera.updateProjectionMatrix()}if(B.map===null){const J={minFilter:et,magFilter:et,format:Mt};B.map=new $t(r.x,r.y,J),B.map.texture.name=C.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const X=B.getViewportCount();for(let J=0;J<X;J++){const ee=B.getViewport(J);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),I.viewport(o),B.updateMatrices(C,J),i=B.getFrustum(),_(v,A,B.camera,C,this.type)}!B.isPointLightShadow&&this.type===mi&&x(B,A),B.needsUpdate=!1}y.needsUpdate=!1,n.setRenderTarget(P,L,D)};function x(S,v){const A=e.update(m);h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(v,null,A,h,m,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(v,null,A,d,m,null)}function g(S,v,A){const P=S<<0|v<<1|A<<2;let L=a[P];return L===void 0&&(L=new ho({depthPacking:Ru,morphTargets:S,skinning:v}),a[P]=L),L}function p(S,v,A){const P=S<<0|v<<1|A<<2;let L=c[P];return L===void 0&&(L=new uo({morphTargets:S,skinning:v}),c[P]=L),L}function w(S,v,A,P,L,D,I){let O=null,F=g,C=S.customDepthMaterial;if(P.isPointLight===!0&&(F=p,C=S.customDistanceMaterial),C===void 0){let B=!1;A.morphTargets===!0&&(B=v.morphAttributes&&v.morphAttributes.position&&v.morphAttributes.position.length>0);let z=!1;S.isSkinnedMesh===!0&&(A.skinning===!0?z=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",S));const X=S.isInstancedMesh===!0;O=F(B,z,X)}else O=C;if(n.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0){const B=O.uuid,z=A.uuid;let X=l[B];X===void 0&&(X={},l[B]=X);let J=X[z];J===void 0&&(J=O.clone(),X[z]=J),O=J}return O.visible=A.visible,O.wireframe=A.wireframe,I===mi?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:u[A.side],O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,P.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(P.matrixWorld),O.nearDistance=L,O.farDistance=D),O}function _(S,v,A,P,L){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===mi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const O=e.update(S),F=S.material;if(Array.isArray(F)){const C=O.groups;for(let B=0,z=C.length;B<z;B++){const X=C[B],J=F[X.materialIndex];if(J&&J.visible){const ee=w(S,O,J,P,A.near,A.far,L);n.renderBufferDirect(A,null,O,ee,S,X)}}}else if(F.visible){const C=w(S,O,F,P,A.near,A.far,L);n.renderBufferDirect(A,null,O,C,S,null)}}const I=S.children;for(let O=0,F=I.length;O<F;O++)_(I[O],v,A,P,L)}}function Sy(n,e,t){const i=t.isWebGL2;function r(){let R=!1;const Y=new Ie;let te=null;const se=new Ie(0,0,0,0);return{setMask:function(j){te!==j&&!R&&(n.colorMask(j,j,j,j),te=j)},setLocked:function(j){R=j},setClear:function(j,pe,ge,he,de){de===!0&&(j*=he,pe*=he,ge*=he),Y.set(j,pe,ge,he),se.equals(Y)===!1&&(n.clearColor(j,pe,ge,he),se.copy(Y))},reset:function(){R=!1,te=null,se.set(-1,0,0,0)}}}function s(){let R=!1,Y=null,te=null,se=null;return{setTest:function(j){j?ae(2929):oe(2929)},setMask:function(j){Y!==j&&!R&&(n.depthMask(j),Y=j)},setFunc:function(j){if(te!==j){if(j)switch(j){case yh:n.depthFunc(512);break;case xh:n.depthFunc(519);break;case vh:n.depthFunc(513);break;case Fs:n.depthFunc(515);break;case _h:n.depthFunc(514);break;case bh:n.depthFunc(518);break;case wh:n.depthFunc(516);break;case Mh:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);te=j}},setLocked:function(j){R=j},setClear:function(j){se!==j&&(n.clearDepth(j),se=j)},reset:function(){R=!1,Y=null,te=null,se=null}}}function o(){let R=!1,Y=null,te=null,se=null,j=null,pe=null,ge=null,he=null,de=null;return{setTest:function(fe){R||(fe?ae(2960):oe(2960))},setMask:function(fe){Y!==fe&&!R&&(n.stencilMask(fe),Y=fe)},setFunc:function(fe,We,gt){(te!==fe||se!==We||j!==gt)&&(n.stencilFunc(fe,We,gt),te=fe,se=We,j=gt)},setOp:function(fe,We,gt){(pe!==fe||ge!==We||he!==gt)&&(n.stencilOp(fe,We,gt),pe=fe,ge=We,he=gt)},setLocked:function(fe){R=fe},setClear:function(fe){de!==fe&&(n.clearStencil(fe),de=fe)},reset:function(){R=!1,Y=null,te=null,se=null,j=null,pe=null,ge=null,he=null,de=null}}}const a=new r,c=new s,l=new o;let u={},h=null,d=!1,f=null,m=null,y=null,x=null,g=null,p=null,w=null,_=!1,S=null,v=null,A=null,P=null,L=null;const D=n.getParameter(35661);let I=!1,O=0;const F=n.getParameter(7938);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=O>=2);let C=null,B={};const z=new Ie,X=new Ie;function J(R,Y,te){const se=new Uint8Array(4),j=n.createTexture();n.bindTexture(R,j),n.texParameteri(R,10241,9728),n.texParameteri(R,10240,9728);for(let pe=0;pe<te;pe++)n.texImage2D(Y+pe,0,6408,1,1,0,6408,5121,se);return j}const ee={};ee[3553]=J(3553,3553,1),ee[34067]=J(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ae(2929),c.setFunc(Fs),He(!1),Le(oa),ae(2884),Re(Jt);function ae(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function oe(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Te(R){return h!==R?(n.useProgram(R),h=R,!0):!1}const be={[Pn]:32774,[oh]:32778,[ah]:32779};if(i)be[ha]=32775,be[ua]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(be[ha]=R.MIN_EXT,be[ua]=R.MAX_EXT)}const Be={[ch]:0,[lh]:1,[hh]:768,[Na]:770,[gh]:776,[ph]:774,[dh]:772,[uh]:769,[Oa]:771,[mh]:775,[fh]:773};function Re(R,Y,te,se,j,pe,ge,he){if(R===Jt){d===!0&&(oe(3042),d=!1);return}if(d===!1&&(ae(3042),d=!0),R!==sh){if(R!==f||he!==_){if((m!==Pn||g!==Pn)&&(n.blendEquation(32774),m=Pn,g=Pn),he)switch(R){case yi:n.blendFuncSeparate(1,771,1,771);break;case aa:n.blendFunc(1,1);break;case ca:n.blendFuncSeparate(0,0,769,771);break;case la:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case yi:n.blendFuncSeparate(770,771,1,771);break;case aa:n.blendFunc(770,1);break;case ca:n.blendFunc(0,769);break;case la:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}y=null,x=null,p=null,w=null,f=R,_=he}return}j=j||Y,pe=pe||te,ge=ge||se,(Y!==m||j!==g)&&(n.blendEquationSeparate(be[Y],be[j]),m=Y,g=j),(te!==y||se!==x||pe!==p||ge!==w)&&(n.blendFuncSeparate(Be[te],Be[se],Be[pe],Be[ge]),y=te,x=se,p=pe,w=ge),f=R,_=null}function G(R,Y){R.side===Cr?oe(2884):ae(2884);let te=R.side===Qe;Y&&(te=!te),He(te),R.blending===yi&&R.transparent===!1?Re(Jt):Re(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),c.setFunc(R.depthFunc),c.setTest(R.depthTest),c.setMask(R.depthWrite),a.setMask(R.colorWrite);const se=R.stencilWrite;l.setTest(se),se&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits)}function He(R){S!==R&&(R?n.frontFace(2304):n.frontFace(2305),S=R)}function Le(R){R!==nh?(ae(2884),R!==v&&(R===oa?n.cullFace(1029):R===ih?n.cullFace(1028):n.cullFace(1032))):oe(2884),v=R}function Ce(R){R!==A&&(I&&n.lineWidth(R),A=R)}function _e(R,Y,te){R?(ae(32823),(P!==Y||L!==te)&&(n.polygonOffset(Y,te),P=Y,L=te)):oe(32823)}function Pe(R){R?ae(3089):oe(3089)}function q(R){R===void 0&&(R=33984+D-1),C!==R&&(n.activeTexture(R),C=R)}function Z(R,Y){C===null&&q();let te=B[C];te===void 0&&(te={type:void 0,texture:void 0},B[C]=te),(te.type!==R||te.texture!==Y)&&(n.bindTexture(R,Y||ee[R]),te.type=R,te.texture=Y)}function Q(){const R=B[C];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function T(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(R){z.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),z.copy(R))}function k(R){X.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function W(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},C=null,B={},h=null,d=!1,f=null,m=null,y=null,x=null,g=null,p=null,w=null,_=!1,S=null,v=null,A=null,P=null,L=null,a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ae,disable:oe,useProgram:Te,setBlending:Re,setMaterial:G,setFlipSided:He,setCullFace:Le,setLineWidth:Ce,setPolygonOffset:_e,setScissorTest:Pe,activeTexture:q,bindTexture:Z,unbindTexture:Q,compressedTexImage2D:ue,texImage2D:re,texImage3D:T,scissor:E,viewport:k,reset:W}}function Ey(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=new WeakMap;let f,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,E){return m?new OffscreenCanvas(T,E):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function x(T,E,k,W){let R=1;if((T.width>W||T.height>W)&&(R=W/Math.max(T.width,T.height)),R<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Y=E?xe.floorPowerOfTwo:Math.floor,te=Y(R*T.width),se=Y(R*T.height);f===void 0&&(f=y(te,se));const j=k?y(te,se):f;return j.width=te,j.height=se,j.getContext("2d").drawImage(T,0,0,te,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+te+"x"+se+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function g(T){return xe.isPowerOfTwo(T.width)&&xe.isPowerOfTwo(T.height)}function p(T){return a?!1:T.wrapS!==dt||T.wrapT!==dt||T.minFilter!==et&&T.minFilter!==tt}function w(T,E){return T.generateMipmaps&&E&&T.minFilter!==et&&T.minFilter!==tt}function _(T,E,k,W){n.generateMipmap(T);const R=i.get(E);R.__maxMipLevel=Math.log2(Math.max(k,W))}function S(T,E,k){if(a===!1)return E;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=E;return E===6403&&(k===5126&&(W=33326),k===5131&&(W=33325),k===5121&&(W=33321)),E===6407&&(k===5126&&(W=34837),k===5131&&(W=34843),k===5121&&(W=32849)),E===6408&&(k===5126&&(W=34836),k===5131&&(W=34842),k===5121&&(W=32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function v(T){return T===et||T===Os||T===zs?9728:9729}function A(T){const E=T.target;E.removeEventListener("dispose",A),L(E),E.isVideoTexture&&d.delete(E),o.memory.textures--}function P(T){const E=T.target;E.removeEventListener("dispose",P),D(E),o.memory.textures--}function L(T){const E=i.get(T);E.__webglInit!==void 0&&(n.deleteTexture(E.__webglTexture),i.remove(T))}function D(T){const E=T.texture,k=i.get(T),W=i.get(E);if(T){if(W.__webglTexture!==void 0&&n.deleteTexture(W.__webglTexture),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let R=0;R<6;R++)n.deleteFramebuffer(k.__webglFramebuffer[R]),k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[R]);else n.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer&&n.deleteRenderbuffer(k.__webglColorRenderbuffer),k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer);i.remove(E),i.remove(T)}}let I=0;function O(){I=0}function F(){const T=I;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),I+=1,T}function C(T,E){const k=i.get(T);if(T.isVideoTexture&&q(T),T.version>0&&k.__version!==T.version){const W=T.image;if(W===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,T,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,k.__webglTexture)}function B(T,E){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Te(k,T,E);return}t.activeTexture(33984+E),t.bindTexture(35866,k.__webglTexture)}function z(T,E){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Te(k,T,E);return}t.activeTexture(33984+E),t.bindTexture(32879,k.__webglTexture)}function X(T,E){const k=i.get(T);if(T.version>0&&k.__version!==T.version){be(k,T,E);return}t.activeTexture(33984+E),t.bindTexture(34067,k.__webglTexture)}const J={[er]:10497,[dt]:33071,[tr]:33648},ee={[et]:9728,[Os]:9984,[zs]:9986,[tt]:9729,[za]:9985,[Ai]:9987};function ae(T,E,k){if(k?(n.texParameteri(T,10242,J[E.wrapS]),n.texParameteri(T,10243,J[E.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,J[E.wrapR]),n.texParameteri(T,10240,ee[E.magFilter]),n.texParameteri(T,10241,ee[E.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(E.wrapS!==dt||E.wrapT!==dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,v(E.magFilter)),n.texParameteri(T,10241,v(E.minFilter)),E.minFilter!==et&&E.minFilter!==tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");if(E.type===Zt&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ir&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function oe(T,E){T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",A),T.__webglTexture=n.createTexture(),o.memory.textures++)}function Te(T,E,k){let W=3553;E.isDataTexture2DArray&&(W=35866),E.isDataTexture3D&&(W=32879),oe(T,E),t.activeTexture(33984+k),t.bindTexture(W,T.__webglTexture),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const R=p(E)&&g(E.image)===!1,Y=x(E.image,R,!1,u),te=g(Y)||a,se=s.convert(E.format);let j=s.convert(E.type),pe=S(E.internalFormat,se,j);ae(W,E,te);let ge;const he=E.mipmaps;if(E.isDepthTexture)pe=6402,a?E.type===Zt?pe=36012:E.type===Ji?pe=33190:E.type===xi?pe=35056:pe=33189:E.type===Zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Nn&&pe===6402&&E.type!==nr&&E.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=nr,j=s.convert(E.type)),E.format===_i&&pe===6402&&(pe=34041,E.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=xi,j=s.convert(E.type))),t.texImage2D(3553,0,pe,Y.width,Y.height,0,se,j,null);else if(E.isDataTexture)if(he.length>0&&te){for(let de=0,fe=he.length;de<fe;de++)ge=he[de],t.texImage2D(3553,de,pe,ge.width,ge.height,0,se,j,ge.data);E.generateMipmaps=!1,T.__maxMipLevel=he.length-1}else t.texImage2D(3553,0,pe,Y.width,Y.height,0,se,j,Y.data),T.__maxMipLevel=0;else if(E.isCompressedTexture){for(let de=0,fe=he.length;de<fe;de++)ge=he[de],E.format!==Mt&&E.format!==un?se!==null?t.compressedTexImage2D(3553,de,pe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,de,pe,ge.width,ge.height,0,se,j,ge.data);T.__maxMipLevel=he.length-1}else if(E.isDataTexture2DArray)t.texImage3D(35866,0,pe,Y.width,Y.height,Y.depth,0,se,j,Y.data),T.__maxMipLevel=0;else if(E.isDataTexture3D)t.texImage3D(32879,0,pe,Y.width,Y.height,Y.depth,0,se,j,Y.data),T.__maxMipLevel=0;else if(he.length>0&&te){for(let de=0,fe=he.length;de<fe;de++)ge=he[de],t.texImage2D(3553,de,pe,se,j,ge);E.generateMipmaps=!1,T.__maxMipLevel=he.length-1}else t.texImage2D(3553,0,pe,se,j,Y),T.__maxMipLevel=0;w(E,te)&&_(W,E,Y.width,Y.height),T.__version=E.version,E.onUpdate&&E.onUpdate(E)}function be(T,E,k){if(E.image.length!==6)return;oe(T,E),t.activeTexture(33984+k),t.bindTexture(34067,T.__webglTexture),n.pixelStorei(37440,E.flipY),n.pixelStorei(37441,E.premultiplyAlpha),n.pixelStorei(3317,E.unpackAlignment),n.pixelStorei(37443,0);const W=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),R=E.image[0]&&E.image[0].isDataTexture,Y=[];for(let de=0;de<6;de++)!W&&!R?Y[de]=x(E.image[de],!1,!0,l):Y[de]=R?E.image[de].image:E.image[de];const te=Y[0],se=g(te)||a,j=s.convert(E.format),pe=s.convert(E.type),ge=S(E.internalFormat,j,pe);ae(34067,E,se);let he;if(W){for(let de=0;de<6;de++){he=Y[de].mipmaps;for(let fe=0;fe<he.length;fe++){const We=he[fe];E.format!==Mt&&E.format!==un?j!==null?t.compressedTexImage2D(34069+de,fe,ge,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+de,fe,ge,We.width,We.height,0,j,pe,We.data)}}T.__maxMipLevel=he.length-1}else{he=E.mipmaps;for(let de=0;de<6;de++)if(R){t.texImage2D(34069+de,0,ge,Y[de].width,Y[de].height,0,j,pe,Y[de].data);for(let fe=0;fe<he.length;fe++){const gt=he[fe].image[de].image;t.texImage2D(34069+de,fe+1,ge,gt.width,gt.height,0,j,pe,gt.data)}}else{t.texImage2D(34069+de,0,ge,j,pe,Y[de]);for(let fe=0;fe<he.length;fe++){const We=he[fe];t.texImage2D(34069+de,fe+1,ge,j,pe,We.image[de])}}T.__maxMipLevel=he.length}w(E,se)&&_(34067,E,te.width,te.height),T.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Be(T,E,k,W){const R=E.texture,Y=s.convert(R.format),te=s.convert(R.type),se=S(R.internalFormat,Y,te);W===32879||W===35866?t.texImage3D(W,0,se,E.width,E.height,E.depth,0,Y,te,null):t.texImage2D(W,0,se,E.width,E.height,0,Y,te,null),n.bindFramebuffer(36160,T),n.framebufferTexture2D(36160,k,W,i.get(R).__webglTexture,0),n.bindFramebuffer(36160,null)}function Re(T,E,k){if(n.bindRenderbuffer(36161,T),E.depthBuffer&&!E.stencilBuffer){let W=33189;if(k){const R=E.depthTexture;R&&R.isDepthTexture&&(R.type===Zt?W=36012:R.type===Ji&&(W=33190));const Y=Pe(E);n.renderbufferStorageMultisample(36161,Y,W,E.width,E.height)}else n.renderbufferStorage(36161,W,E.width,E.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(E.depthBuffer&&E.stencilBuffer){if(k){const W=Pe(E);n.renderbufferStorageMultisample(36161,W,35056,E.width,E.height)}else n.renderbufferStorage(36161,34041,E.width,E.height);n.framebufferRenderbuffer(36160,33306,36161,T)}else{const W=E.texture,R=s.convert(W.format),Y=s.convert(W.type),te=S(W.internalFormat,R,Y);if(k){const se=Pe(E);n.renderbufferStorageMultisample(36161,se,te,E.width,E.height)}else n.renderbufferStorage(36161,te,E.width,E.height)}n.bindRenderbuffer(36161,null)}function G(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),C(E.depthTexture,0);const W=i.get(E.depthTexture).__webglTexture;if(E.depthTexture.format===Nn)n.framebufferTexture2D(36160,36096,3553,W,0);else if(E.depthTexture.format===_i)n.framebufferTexture2D(36160,33306,3553,W,0);else throw new Error("Unknown depthTexture format")}function He(T){const E=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");G(E.__webglFramebuffer,T)}else if(k){E.__webglDepthbuffer=[];for(let W=0;W<6;W++)n.bindFramebuffer(36160,E.__webglFramebuffer[W]),E.__webglDepthbuffer[W]=n.createRenderbuffer(),Re(E.__webglDepthbuffer[W],T,!1)}else n.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Re(E.__webglDepthbuffer,T,!1);n.bindFramebuffer(36160,null)}function Le(T){const E=T.texture,k=i.get(T),W=i.get(E);T.addEventListener("dispose",P),W.__webglTexture=n.createTexture(),o.memory.textures++;const R=T.isWebGLCubeRenderTarget===!0,Y=T.isWebGLMultisampleRenderTarget===!0,te=E.isDataTexture3D||E.isDataTexture2DArray,se=g(T)||a;if(a&&E.format===un&&(E.type===Zt||E.type===ir)&&(E.format=Mt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),R){k.__webglFramebuffer=[];for(let j=0;j<6;j++)k.__webglFramebuffer[j]=n.createFramebuffer()}else if(k.__webglFramebuffer=n.createFramebuffer(),Y)if(a){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,k.__webglColorRenderbuffer);const j=s.convert(E.format),pe=s.convert(E.type),ge=S(E.internalFormat,j,pe),he=Pe(T);n.renderbufferStorageMultisample(36161,he,ge,T.width,T.height),n.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(R){t.bindTexture(34067,W.__webglTexture),ae(34067,E,se);for(let j=0;j<6;j++)Be(k.__webglFramebuffer[j],T,36064,34069+j);w(E,se)&&_(34067,E,T.width,T.height),t.bindTexture(34067,null)}else{let j=3553;te&&(a?j=E.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(j,W.__webglTexture),ae(j,E,se),Be(k.__webglFramebuffer,T,36064,j),w(E,se)&&_(3553,E,T.width,T.height),t.bindTexture(3553,null)}T.depthBuffer&&He(T)}function Ce(T){const E=T.texture,k=g(T)||a;if(w(E,k)){const W=T.isWebGLCubeRenderTarget?34067:3553,R=i.get(E).__webglTexture;t.bindTexture(W,R),_(W,E,T.width,T.height),t.bindTexture(W,null)}}function _e(T){if(T.isWebGLMultisampleRenderTarget)if(a){const E=i.get(T);n.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,E.__webglFramebuffer);const k=T.width,W=T.height;let R=16384;T.depthBuffer&&(R|=256),T.stencilBuffer&&(R|=1024),n.blitFramebuffer(0,0,k,W,0,0,k,W,R,9728),n.bindFramebuffer(36160,E.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Pe(T){return a&&T.isWebGLMultisampleRenderTarget?Math.min(h,T.samples):0}function q(T){const E=o.render.frame;d.get(T)!==E&&(d.set(T,E),T.update())}let Z=!1,Q=!1;function ue(T,E){T&&T.isWebGLRenderTarget&&(Z===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Z=!0),T=T.texture),C(T,E)}function re(T,E){T&&T.isWebGLCubeRenderTarget&&(Q===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Q=!0),T=T.texture),X(T,E)}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=C,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=X,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=_e,this.safeSetTexture2D=ue,this.safeSetTextureCube=re}function qu(n,e,t){const i=t.isWebGL2;function r(s){let o;if(s===Li)return 5121;if(s===Fh)return 32819;if(s===Bh)return 32820;if(s===Nh)return 33635;if(s===Ph)return 5120;if(s===Dh)return 5122;if(s===nr)return 5123;if(s===Ih)return 5124;if(s===Ji)return 5125;if(s===Zt)return 5126;if(s===ir)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Oh)return 6406;if(s===un)return 6407;if(s===Mt)return 6408;if(s===zh)return 6409;if(s===Uh)return 6410;if(s===Nn)return 6402;if(s===_i)return 34041;if(s===Gh)return 6403;if(s===kh)return 36244;if(s===Vh)return 33319;if(s===Wh)return 33320;if(s===qh)return 36248;if(s===Xh)return 36249;if(s===da||s===fa||s===pa||s===ma)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===da)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ga||s===ya||s===xa||s===va)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ga)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===_a||s===ba)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===_a)return o.COMPRESSED_RGB8_ETC2;if(s===ba)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Yh||s===Zh||s===Jh||s===$h||s===Qh||s===Kh||s===eu||s===tu||s===nu||s===iu||s===ru||s===su||s===ou||s===au||s===lu||s===hu||s===uu||s===du||s===fu||s===pu||s===mu||s===gu||s===yu||s===xu||s===vu||s===_u||s===bu||s===wu)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===cu)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===xi)return i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}function Us(n=[]){Ke.call(this),this.cameras=n}Us.prototype=Object.assign(Object.create(Ke.prototype),{constructor:Us,isArrayCamera:!0});class Fn extends me{constructor(){super(),this.type="Group"}}Fn.prototype.isGroup=!0;function $i(){this._targetRay=null,this._grip=null,this._hand=null}Object.assign($i.prototype,{constructor:$i,getHandSpace:function(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand},getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this},disconnect:function(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this},update:function(n,e,t){let i=null,r=null,s=null;const o=this._targetRay,a=this._grip,c=this._hand;if(n&&e.session.visibilityState!=="visible-blurred")if(c&&n.hand){s=!0;for(const m of n.hand.values()){const y=e.getJointPose(m,t);if(c.joints[m.jointName]===void 0){const g=new Fn;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[m.jointName]=g,c.add(g)}const x=c.joints[m.jointName];y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=y.radius),x.visible=y!==null}const l=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=l.position.distanceTo(u.position),d=.02,f=.005;c.inputState.pinching&&h>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&h<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else o!==null&&(i=e.getPose(n.targetRaySpace,t),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale))),a!==null&&n.gripSpace&&(r=e.getPose(n.gripSpace,t),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale)));return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),this}});function Xu(n,e){const t=this;let i=null,r=1,s=null,o="local-floor",a=null;const c=[],l=new Map,u=new Ke;u.layers.enable(1),u.viewport=new Ie;const h=new Ke;h.layers.enable(2),h.viewport=new Ie;const d=[u,h],f=new Us;f.layers.enable(1),f.layers.enable(2);let m=null,y=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let I=c[D];return I===void 0&&(I=new $i,c[D]=I),I.getTargetRaySpace()},this.getControllerGrip=function(D){let I=c[D];return I===void 0&&(I=new $i,c[D]=I),I.getGripSpace()},this.getHand=function(D){let I=c[D];return I===void 0&&(I=new $i,c[D]=I),I.getHandSpace()};function x(D){const I=l.get(D.inputSource);I&&I.dispatchEvent({type:D.type,data:D.inputSource})}function g(){l.forEach(function(D,I){D.disconnect(I)}),l.clear(),m=null,y=null,n.setFramebuffer(null),n.setRenderTarget(n.getRenderTarget()),L.stop(),t.isPresenting=!1,t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){i.addEventListener("select",x),i.addEventListener("selectstart",x),i.addEventListener("selectend",x),i.addEventListener("squeeze",x),i.addEventListener("squeezestart",x),i.addEventListener("squeezeend",x),i.addEventListener("end",g),i.addEventListener("inputsourceschange",p);const I=e.getContextAttributes();I.xrCompatible!==!0&&await e.makeXRCompatible();const O={antialias:I.antialias,alpha:I.alpha,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:r},F=new XRWebGLLayer(i,e,O);i.updateRenderState({baseLayer:F}),s=await i.requestReferenceSpace(o),L.setContext(i),L.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}};function p(D){const I=i.inputSources;for(let O=0;O<c.length;O++)l.set(I[O],c[O]);for(let O=0;O<D.removed.length;O++){const F=D.removed[O],C=l.get(F);C&&(C.dispatchEvent({type:"disconnected",data:F}),l.delete(F))}for(let O=0;O<D.added.length;O++){const F=D.added[O],C=l.get(F);C&&C.dispatchEvent({type:"connected",data:F})}}const w=new b,_=new b;function S(D,I,O){w.setFromMatrixPosition(I.matrixWorld),_.setFromMatrixPosition(O.matrixWorld);const F=w.distanceTo(_),C=I.projectionMatrix.elements,B=O.projectionMatrix.elements,z=C[14]/(C[10]-1),X=C[14]/(C[10]+1),J=(C[9]+1)/C[5],ee=(C[9]-1)/C[5],ae=(C[8]-1)/C[0],oe=(B[8]+1)/B[0],Te=z*ae,be=z*oe,Be=F/(-ae+oe),Re=Be*-ae;I.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Re),D.translateZ(Be),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const G=z+Be,He=X+Be,Le=Te-Re,Ce=be+(F-Re),_e=J*X/He*G,Pe=ee*X/He*G;D.projectionMatrix.makePerspective(Le,Ce,_e,Pe,G,He)}function v(D,I){I===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(I.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.getCamera=function(D){f.near=h.near=u.near=D.near,f.far=h.far=u.far=D.far,(m!==f.near||y!==f.far)&&(i.updateRenderState({depthNear:f.near,depthFar:f.far}),m=f.near,y=f.far);const I=D.parent,O=f.cameras;v(f,I);for(let C=0;C<O.length;C++)v(O[C],I);D.matrixWorld.copy(f.matrixWorld),D.matrix.copy(f.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale);const F=D.children;for(let C=0,B=F.length;C<B;C++)F[C].updateMatrixWorld(!0);return O.length===2?S(f,u,h):f.projectionMatrix.copy(u.projectionMatrix),f};let A=null;function P(D,I){if(a=I.getViewerPose(s),a!==null){const F=a.views,C=i.renderState.baseLayer;n.setFramebuffer(C.framebuffer);let B=!1;F.length!==f.cameras.length&&(f.cameras.length=0,B=!0);for(let z=0;z<F.length;z++){const X=F[z],J=C.getViewport(X),ee=d[z];ee.matrix.fromArray(X.transform.matrix),ee.projectionMatrix.fromArray(X.projectionMatrix),ee.viewport.set(J.x,J.y,J.width,J.height),z===0&&f.matrix.copy(ee.matrix),B===!0&&f.cameras.push(ee)}}const O=i.inputSources;for(let F=0;F<c.length;F++){const C=c[F],B=O[F];C.update(B,I,s)}A&&A(D,I)}const L=new Nu;L.setAnimationLoop(P),this.setAnimationLoop=function(D){A=D},this.dispose=function(){}}Object.assign(Xu.prototype,en.prototype);function Ty(n){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function t(g,p,w,_){p.isMeshBasicMaterial?i(g,p):p.isMeshLambertMaterial?(i(g,p),c(g,p)):p.isMeshToonMaterial?(i(g,p),u(g,p)):p.isMeshPhongMaterial?(i(g,p),l(g,p)):p.isMeshStandardMaterial?(i(g,p),p.isMeshPhysicalMaterial?d(g,p):h(g,p)):p.isMeshMatcapMaterial?(i(g,p),f(g,p)):p.isMeshDepthMaterial?(i(g,p),m(g,p)):p.isMeshDistanceMaterial?(i(g,p),y(g,p)):p.isMeshNormalMaterial?(i(g,p),x(g,p)):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?o(g,p,w,_):p.isSpriteMaterial?a(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.specularMap&&(g.specularMap.value=p.specularMap);const w=n.get(p).envMap;if(w){g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w._needsFlipEnvMap?-1:1,g.reflectivity.value=p.reflectivity,g.refractionRatio.value=p.refractionRatio;const v=n.get(w).__maxMipLevel;v!==void 0&&(g.maxMipLevel.value=v)}p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap&&(_=p.clearcoatRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uv2Transform.value.copy(S.matrix))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,w,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=_*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function c(g,p){p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap)}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function h(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),n.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p){h(g,p),g.reflectivity.value=p.reflectivity,g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.sheen&&g.sheen.value.copy(p.sheen),p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Qe&&g.clearcoatNormalScale.value.negate()),g.transmission.value=p.transmission,p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function m(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}function y(g,p){p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}function x(g,p){p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Ay(){const n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function Fe(n){n=n||{};const e=n.canvas!==void 0?n.canvas:Ay(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,r=n.depth!==void 0?n.depth:!0,s=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,c=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let h=null,d=null;const f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ft,this.physicallyCorrectLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const y=this;let x=!1,g=null,p=0,w=0,_=null,S=null,v=-1,A=null;const P=new Ie,L=new Ie;let D=null,I=e.width,O=e.height,F=1,C=null,B=null;const z=new Ie(0,0,I,O),X=new Ie(0,0,I,O);let J=!1;const ee=new Or;let ae=!1,oe=!1;const Te=new ce,be=new b,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return _===null?F:1}let G=t;function He(M,U){for(let N=0;N<M.length;N++){const H=M[N],K=e.getContext(H,U);if(K!==null)return K}return null}try{const M={alpha:i,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Lc,!1),G===null){const U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),G=He(U,M),G===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Le,Ce,_e,Pe,q,Z,Q,ue,re,T,E,k,W,R,Y,te,se,j,pe,ge,he;function de(){Le=new sg(G),Ce=new ng(G,Le,n),Le.init(Ce),ge=new qu(G,Le,Ce),_e=new Sy(G,Le,Ce),_e.scissor(L.copy(X).multiplyScalar(F).floor()),_e.viewport(P.copy(z).multiplyScalar(F).floor()),Pe=new cg,q=new dy,Z=new Ey(G,Le,_e,q,Ce,ge,Pe),Q=new rg(y),ue=new Pf(G,Ce),he=new eg(G,Le,ue,Ce),re=new og(G,ue,Pe,he),T=new dg(G,re,ue,Pe),se=new ug(G),Y=new ig(q),E=new uy(y,Q,Le,Ce,he,Y),k=new Ty(q),W=new my(q),R=new by(Le,Ce),te=new Km(y,Q,_e,T,a),j=new tg(G,Le,Pe,Ce),pe=new ag(G,Le,Pe,Ce),Pe.programs=E.programs,y.capabilities=Ce,y.extensions=Le,y.properties=q,y.renderLists=W,y.state=_e,y.info=Pe}de();const fe=new Xu(y,G);this.xr=fe;const We=new Wu(y,T,Ce.maxTextureSize);this.shadowMap=We,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(I,O,!1))},this.getSize=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),M=new V),M.set(I,O)},this.setSize=function(M,U,N){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=M,O=U,e.width=Math.floor(M*F),e.height=Math.floor(U*F),N!==!1&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),M=new V),M.set(I*F,O*F).floor()},this.setDrawingBufferSize=function(M,U,N){I=M,O=U,F=N,e.width=Math.floor(M*N),e.height=Math.floor(U*N),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),M=new Ie),M.copy(P)},this.getViewport=function(M){return M.copy(z)},this.setViewport=function(M,U,N,H){M.isVector4?z.set(M.x,M.y,M.z,M.w):z.set(M,U,N,H),_e.viewport(P.copy(z).multiplyScalar(F).floor())},this.getScissor=function(M){return M.copy(X)},this.setScissor=function(M,U,N,H){M.isVector4?X.set(M.x,M.y,M.z,M.w):X.set(M,U,N,H),_e.scissor(L.copy(X).multiplyScalar(F).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(M){_e.setScissorTest(J=M)},this.setOpaqueSort=function(M){C=M},this.setTransparentSort=function(M){B=M},this.getClearColor=function(M){return M===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),M=new ne),M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(M,U,N){let H=0;(M===void 0||M)&&(H|=16384),(U===void 0||U)&&(H|=256),(N===void 0||N)&&(H|=1024),G.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Lc,!1),W.dispose(),R.dispose(),q.dispose(),Q.dispose(),T.dispose(),he.dispose(),fe.dispose(),Fi.stop()};function gt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Lc(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1,de()}function Rc(M){const U=M.target;U.removeEventListener("dispose",Rc),Rd(U)}function Rd(M){Cc(M),q.remove(M)}function Cc(M){const U=q.get(M).program;U!==void 0&&E.releaseProgram(U)}function Cd(M,U){M.render(function(N){y.renderBufferImmediate(N,U)})}this.renderBufferImmediate=function(M,U){he.initAttributes();const N=q.get(M);M.hasPositions&&!N.position&&(N.position=G.createBuffer()),M.hasNormals&&!N.normal&&(N.normal=G.createBuffer()),M.hasUvs&&!N.uv&&(N.uv=G.createBuffer()),M.hasColors&&!N.color&&(N.color=G.createBuffer());const H=U.getAttributes();M.hasPositions&&(G.bindBuffer(34962,N.position),G.bufferData(34962,M.positionArray,35048),he.enableAttribute(H.position),G.vertexAttribPointer(H.position,3,5126,!1,0,0)),M.hasNormals&&(G.bindBuffer(34962,N.normal),G.bufferData(34962,M.normalArray,35048),he.enableAttribute(H.normal),G.vertexAttribPointer(H.normal,3,5126,!1,0,0)),M.hasUvs&&(G.bindBuffer(34962,N.uv),G.bufferData(34962,M.uvArray,35048),he.enableAttribute(H.uv),G.vertexAttribPointer(H.uv,2,5126,!1,0,0)),M.hasColors&&(G.bindBuffer(34962,N.color),G.bufferData(34962,M.colorArray,35048),he.enableAttribute(H.color),G.vertexAttribPointer(H.color,3,5126,!1,0,0)),he.disableUnusedAttributes(),G.drawArrays(4,0,M.count),M.count=0},this.renderBufferDirect=function(M,U,N,H,K,Ae){U===null&&(U=Be);const ve=K.isMesh&&K.matrixWorld.determinant()<0,Me=Fc(M,U,H,K);_e.setMaterial(H,ve);let Se=N.index;const je=N.attributes.position;if(Se===null){if(je===void 0||je.count===0)return}else if(Se.count===0)return;let Ne=1;H.wireframe===!0&&(Se=re.getWireframeAttribute(N),Ne=2),(H.morphTargets||H.morphNormals)&&se.update(K,N,H,Me),he.setup(K,H,Me,N,Se);let we,De=j;Se!==null&&(we=ue.get(Se),De=pe,De.setIndex(we));const Lt=Se!==null?Se.count:je.count,Oe=N.drawRange.start*Ne,Vt=N.drawRange.count*Ne,rt=Ae!==null?Ae.start*Ne:0,So=Ae!==null?Ae.count*Ne:1/0,yt=Math.max(Oe,rt),Bi=Math.min(Lt,Oe+Vt,rt+So)-1,Zn=Math.max(0,Bi-yt+1);if(Zn!==0){if(K.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Re()),De.setMode(1)):De.setMode(4);else if(K.isLine){let Ni=H.linewidth;Ni===void 0&&(Ni=1),_e.setLineWidth(Ni*Re()),K.isLineSegments?De.setMode(1):K.isLineLoop?De.setMode(2):De.setMode(3)}else K.isPoints?De.setMode(0):K.isSprite&&De.setMode(4);if(K.isInstancedMesh)De.renderInstances(yt,Zn,K.count);else if(N.isInstancedBufferGeometry){const Ni=Math.min(N.instanceCount,N._maxInstanceCount);De.renderInstances(yt,Zn,Ni)}else De.render(yt,Zn)}},this.compile=function(M,U){d=R.get(M),d.init(),M.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const N=new WeakMap;M.traverse(function(H){const K=H.material;if(K)if(Array.isArray(K))for(let Ae=0;Ae<K.length;Ae++){const ve=K[Ae];N.has(ve)===!1&&(kt(ve,M,H),N.set(ve))}else N.has(K)===!1&&(kt(K,M,H),N.set(K))})};let Mo=null;function Pd(M){fe.isPresenting||Mo&&Mo(M)}const Fi=new Nu;Fi.setAnimationLoop(Pd),typeof window<"u"&&Fi.setContext(window),this.setAnimationLoop=function(M){Mo=M,fe.setAnimationLoop(M),M===null?Fi.stop():Fi.start()},this.render=function(M,U){let N,H;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),N=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),H=arguments[3]),U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;he.resetDefaultState(),v=-1,A=null,M.autoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(U=fe.getCamera(U)),M.isScene===!0&&M.onBeforeRender(y,M,U,N||_),d=R.get(M,m.length),d.init(),m.push(d),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(Te),oe=this.localClippingEnabled,ae=Y.init(this.clippingPlanes,oe,U),h=W.get(M,f.length),h.init(),f.push(h),Pc(M,U,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(C,B),ae===!0&&Y.beginShadows();const K=d.state.shadowsArray;We.render(K,M,U),d.setupLights(),d.setupLightsView(U),ae===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),N!==void 0&&this.setRenderTarget(N),te.render(h,M,U,H);const Ae=h.opaque,ve=h.transparent;Ae.length>0&&Dc(Ae,M,U),ve.length>0&&Dc(ve,M,U),M.isScene===!0&&M.onAfterRender(y,M,U),_!==null&&(Z.updateRenderTargetMipmap(_),Z.updateMultisampleRenderTarget(_)),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1),m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?h=f[f.length-1]:h=null};function Pc(M,U,N,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ee.intersectsSprite(M)){H&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const ve=T.update(M),Me=M.material;Me.visible&&h.push(M,ve,Me,N,be.z,null)}}else if(M.isImmediateRenderObject)H&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te),h.push(M,null,M.material,N,be.z,null);else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Pe.render.frame&&(M.skeleton.update(),M.skeleton.frame=Pe.render.frame),!M.frustumCulled||ee.intersectsObject(M))){H&&be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const ve=T.update(M),Me=M.material;if(Array.isArray(Me)){const Se=ve.groups;for(let je=0,Ne=Se.length;je<Ne;je++){const we=Se[je],De=Me[we.materialIndex];De&&De.visible&&h.push(M,ve,De,N,be.z,we)}}else Me.visible&&h.push(M,ve,Me,N,be.z,null)}}const Ae=M.children;for(let ve=0,Me=Ae.length;ve<Me;ve++)Pc(Ae[ve],U,N,H)}function Dc(M,U,N){const H=U.isScene===!0?U.overrideMaterial:null;for(let K=0,Ae=M.length;K<Ae;K++){const ve=M[K],Me=ve.object,Se=ve.geometry,je=H===null?ve.material:H,Ne=ve.group;if(N.isArrayCamera){const we=N.cameras;for(let De=0,Lt=we.length;De<Lt;De++){const Oe=we[De];Me.layers.test(Oe.layers)&&(_e.viewport(P.copy(Oe.viewport)),d.setupLightsView(Oe),Ic(Me,U,Oe,Se,je,Ne))}}else Ic(Me,U,N,Se,je,Ne)}}function Ic(M,U,N,H,K,Ae){if(M.onBeforeRender(y,U,N,H,K,Ae),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),M.isImmediateRenderObject){const ve=Fc(N,U,K,M);_e.setMaterial(K),he.reset(),Cd(M,ve)}else y.renderBufferDirect(N,U,H,K,M,Ae);M.onAfterRender(y,U,N,H,K,Ae)}function kt(M,U,N){U.isScene!==!0&&(U=Be);const H=q.get(M),K=d.state.lights,Ae=d.state.shadowsArray,ve=K.state.version,Me=E.getParameters(M,K.state,Ae,U,N),Se=E.getProgramCacheKey(Me);let je=H.program,Ne=!0;if(H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=Q.get(M.envMap||H.environment),je===void 0)M.addEventListener("dispose",Rc);else if(je.cacheKey!==Se)Cc(M);else if(H.lightsStateVersion!==ve)Ne=!1;else{if(Me.shaderID!==void 0)return;Ne=!1}Ne&&(Me.uniforms=E.getUniforms(M),M.onBeforeCompile(Me,y),je=E.acquireProgram(Me,Se),H.program=je,H.uniforms=Me.uniforms,H.outputEncoding=Me.outputEncoding);const we=H.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(H.numClippingPlanes=Y.numPlanes,H.numIntersection=Y.numIntersection,we.clippingPlanes=Y.uniform),H.needsLights=Id(M),H.lightsStateVersion=ve,H.needsLights&&(we.ambientLightColor.value=K.state.ambient,we.lightProbe.value=K.state.probe,we.directionalLights.value=K.state.directional,we.directionalLightShadows.value=K.state.directionalShadow,we.spotLights.value=K.state.spot,we.spotLightShadows.value=K.state.spotShadow,we.rectAreaLights.value=K.state.rectArea,we.ltc_1.value=K.state.rectAreaLTC1,we.ltc_2.value=K.state.rectAreaLTC2,we.pointLights.value=K.state.point,we.pointLightShadows.value=K.state.pointShadow,we.hemisphereLights.value=K.state.hemi,we.directionalShadowMap.value=K.state.directionalShadowMap,we.directionalShadowMatrix.value=K.state.directionalShadowMatrix,we.spotShadowMap.value=K.state.spotShadowMap,we.spotShadowMatrix.value=K.state.spotShadowMatrix,we.pointShadowMap.value=K.state.pointShadowMap,we.pointShadowMatrix.value=K.state.pointShadowMatrix);const De=H.program.getUniforms(),Lt=dn.seqWithValue(De.seq,we);H.uniformsList=Lt}function Fc(M,U,N,H){U.isScene!==!0&&(U=Be),Z.resetTextureUnits();const K=U.fog,Ae=N.isMeshStandardMaterial?U.environment:null,ve=_===null?y.outputEncoding:_.texture.encoding,Me=Q.get(N.envMap||Ae),Se=q.get(N),je=d.state.lights;if(ae===!0&&(oe===!0||M!==A)){const rt=M===A&&N.id===v;Y.setState(N,M,rt)}N.version===Se.__version?(N.fog&&Se.fog!==K||Se.environment!==Ae||Se.needsLights&&Se.lightsStateVersion!==je.state.version||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Y.numPlanes||Se.numIntersection!==Y.numIntersection)||Se.outputEncoding!==ve||Se.envMap!==Me)&&kt(N,U,H):(kt(N,U,H),Se.__version=N.version);let Ne=!1,we=!1,De=!1;const Lt=Se.program,Oe=Lt.getUniforms(),Vt=Se.uniforms;if(_e.useProgram(Lt.program)&&(Ne=!0,we=!0,De=!0),N.id!==v&&(v=N.id,we=!0),Ne||A!==M){if(Oe.setValue(G,"projectionMatrix",M.projectionMatrix),Ce.logarithmicDepthBuffer&&Oe.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),A!==M&&(A=M,we=!0,De=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const rt=Oe.map.cameraPosition;rt!==void 0&&rt.setValue(G,be.setFromMatrixPosition(M.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Oe.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||N.skinning)&&Oe.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(N.skinning){Oe.setOptional(G,H,"bindMatrix"),Oe.setOptional(G,H,"bindMatrixInverse");const rt=H.skeleton;if(rt){const So=rt.bones;if(Ce.floatVertexTextures){if(rt.boneTexture===null){let yt=Math.sqrt(So.length*4);yt=xe.ceilPowerOfTwo(yt),yt=Math.max(yt,4);const Bi=new Float32Array(yt*yt*4);Bi.set(rt.boneMatrices);const Zn=new wi(Bi,yt,yt,Mt,Zt);rt.boneMatrices=Bi,rt.boneTexture=Zn,rt.boneTextureSize=yt}Oe.setValue(G,"boneTexture",rt.boneTexture,Z),Oe.setValue(G,"boneTextureSize",rt.boneTextureSize)}else Oe.setOptional(G,rt,"boneMatrices")}}return(we||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,Oe.setValue(G,"receiveShadow",H.receiveShadow)),we&&(Oe.setValue(G,"toneMappingExposure",y.toneMappingExposure),Se.needsLights&&Dd(Vt,De),K&&N.fog&&k.refreshFogUniforms(Vt,K),k.refreshMaterialUniforms(Vt,N,F,O),dn.upload(G,Se.uniformsList,Vt,Z)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(dn.upload(G,Se.uniformsList,Vt,Z),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Oe.setValue(G,"center",H.center),Oe.setValue(G,"modelViewMatrix",H.modelViewMatrix),Oe.setValue(G,"normalMatrix",H.normalMatrix),Oe.setValue(G,"modelMatrix",H.matrixWorld),Lt}function Dd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Id(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.setFramebuffer=function(M){g!==M&&_===null&&G.bindFramebuffer(36160,M),g=M},this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return _},this.setRenderTarget=function(M,U=0,N=0){_=M,p=U,w=N,M&&q.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M);let H=g,K=!1,Ae=!1;if(M){const ve=M.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(Ae=!0);const Me=q.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=Me[U],K=!0):M.isWebGLMultisampleRenderTarget?H=q.get(M).__webglMultisampledFramebuffer:H=Me,P.copy(M.viewport),L.copy(M.scissor),D=M.scissorTest}else P.copy(z).multiplyScalar(F).floor(),L.copy(X).multiplyScalar(F).floor(),D=J;if(S!==H&&(G.bindFramebuffer(36160,H),S=H),_e.viewport(P),_e.scissor(L),_e.setScissorTest(D),K){const ve=q.get(M.texture);G.framebufferTexture2D(36160,36064,34069+U,ve.__webglTexture,N)}else if(Ae){const ve=q.get(M.texture),Me=U||0;G.framebufferTextureLayer(36160,36064,ve.__webglTexture,N||0,Me)}},this.readRenderTargetPixels=function(M,U,N,H,K,Ae,ve){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=q.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){let Se=!1;Me!==S&&(G.bindFramebuffer(36160,Me),Se=!0);try{const je=M.texture,Ne=je.format,we=je.type;if(Ne!==Mt&&ge.convert(Ne)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=we===ir&&(Le.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Le.has("EXT_color_buffer_float"));if(we!==Li&&ge.convert(we)!==G.getParameter(35738)&&!(we===Zt&&(Ce.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?U>=0&&U<=M.width-H&&N>=0&&N<=M.height-K&&G.readPixels(U,N,H,K,ge.convert(Ne),ge.convert(we),Ae):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Se&&G.bindFramebuffer(36160,S)}}},this.copyFramebufferToTexture=function(M,U,N=0){const H=Math.pow(2,-N),K=Math.floor(U.image.width*H),Ae=Math.floor(U.image.height*H),ve=ge.convert(U.format);Z.setTexture2D(U,0),G.copyTexImage2D(3553,N,ve,M.x,M.y,K,Ae,0),_e.unbindTexture()},this.copyTextureToTexture=function(M,U,N,H=0){const K=U.image.width,Ae=U.image.height,ve=ge.convert(N.format),Me=ge.convert(N.type);Z.setTexture2D(N,0),G.pixelStorei(37440,N.flipY),G.pixelStorei(37441,N.premultiplyAlpha),G.pixelStorei(3317,N.unpackAlignment),U.isDataTexture?G.texSubImage2D(3553,H,M.x,M.y,K,Ae,ve,Me,U.image.data):U.isCompressedTexture?G.compressedTexSubImage2D(3553,H,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):G.texSubImage2D(3553,H,M.x,M.y,ve,Me,U.image),H===0&&N.generateMipmaps&&G.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(M,U,N,H,K=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ae,height:ve,data:Me}=N.image,Se=ge.convert(H.format),je=ge.convert(H.type);let Ne;if(H.isDataTexture3D)Z.setTexture3D(H,0),Ne=32879;else if(H.isDataTexture2DArray)Z.setTexture2DArray(H,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment);const we=G.getParameter(3314),De=G.getParameter(32878),Lt=G.getParameter(3316),Oe=G.getParameter(3315),Vt=G.getParameter(32877);G.pixelStorei(3314,Ae),G.pixelStorei(32878,ve),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),G.texSubImage3D(Ne,K,U.x,U.y,U.z,M.max.x-M.min.x+1,M.max.y-M.min.y+1,M.max.z-M.min.z+1,Se,je,Me),G.pixelStorei(3314,we),G.pixelStorei(32878,De),G.pixelStorei(3316,Lt),G.pixelStorei(3315,Oe),G.pixelStorei(32877,Vt),K===0&&H.generateMipmaps&&G.generateMipmap(Ne),_e.unbindTexture()},this.initTexture=function(M){Z.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ju extends Fe{}ju.prototype.isWebGL1Renderer=!0;class zr{constructor(e,t){this.name="",this.color=new ne(e),this.density=t!==void 0?t:25e-5}clone(){return new zr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}zr.prototype.isFogExp2=!0;class Ur{constructor(e,t,i){this.name="",this.color=new ne(e),this.near=t!==void 0?t:1,this.far=i!==void 0?i:1e3}clone(){return new Ur(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Ur.prototype.isFog=!0;class fo extends me{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}fo.prototype.isScene=!0;function xt(n,e){this.array=n,this.stride=e,this.count=n!==void 0?n.length/e:0,this.usage=Nr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xe.generateUUID()}Object.defineProperty(xt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(xt.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(n){return this.usage=n,this},copy:function(n){return this.array=new n.array.constructor(n.array),this.count=n.count,this.stride=n.stride,this.usage=n.usage,this},copyAt:function(n,e,t){n*=this.stride,t*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[n+i]=e.array[t+i];return this},set:function(n,e=0){return this.array.set(n,e),this},clone:function(n){n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(n.arrayBuffers[this.array.buffer._uuid]),t=new xt(e,this.stride);return t.setUsage(this.usage),t},onUpload:function(n){return this.onUploadCallback=n,this},toJSON:function(n){return n.arrayBuffers===void 0&&(n.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xe.generateUUID()),n.arrayBuffers[this.array.buffer._uuid]===void 0&&(n.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Sn=new b;function gn(n,e,t,i){this.name="",this.data=n,this.itemSize=e,this.offset=t,this.normalized=i===!0}Object.defineProperties(gn.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}},needsUpdate:{set:function(n){this.data.needsUpdate=n}}});Object.assign(gn.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(n){for(let e=0,t=this.data.count;e<t;e++)Sn.x=this.getX(e),Sn.y=this.getY(e),Sn.z=this.getZ(e),Sn.applyMatrix4(n),this.setXYZ(e,Sn.x,Sn.y,Sn.z);return this},setX:function(n,e){return this.data.array[n*this.data.stride+this.offset]=e,this},setY:function(n,e){return this.data.array[n*this.data.stride+this.offset+1]=e,this},setZ:function(n,e){return this.data.array[n*this.data.stride+this.offset+2]=e,this},setW:function(n,e){return this.data.array[n*this.data.stride+this.offset+3]=e,this},getX:function(n){return this.data.array[n*this.data.stride+this.offset]},getY:function(n){return this.data.array[n*this.data.stride+this.offset+1]},getZ:function(n){return this.data.array[n*this.data.stride+this.offset+2]},getW:function(n){return this.data.array[n*this.data.stride+this.offset+3]},setXY:function(n,e,t){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this},setXYZ:function(n,e,t,i){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this},setXYZW:function(n,e,t,i,r){return n=n*this.data.stride+this.offset,this.data.array[n+0]=e,this.data.array[n+1]=t,this.data.array[n+2]=i,this.data.array[n+3]=r,this},clone:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.clone(n)),new gn(n.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(n){if(n===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const i=t*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return n.interleavedBuffers===void 0&&(n.interleavedBuffers={}),n.interleavedBuffers[this.data.uuid]===void 0&&(n.interleavedBuffers[this.data.uuid]=this.data.toJSON(n)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});class po extends Ve{constructor(e){super(),this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}po.prototype.isSpriteMaterial=!0;let li;const ki=new b,hi=new b,ui=new b,di=new V,Vi=new V,Yu=new ce,ls=new b,Wi=new b,hs=new b,ol=new V,jo=new V,al=new V;class mo extends me{constructor(e){if(super(),this.type="Sprite",li===void 0){li=new le;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new xt(t,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new gn(i,3,0,!1)),li.setAttribute("uv",new gn(i,2,3,!1))}this.geometry=li,this.material=e!==void 0?e:new po,this.center=new V(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),Yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ui.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;us(ls.set(-.5,-.5,0),ui,o,hi,r,s),us(Wi.set(.5,-.5,0),ui,o,hi,r,s),us(hs.set(.5,.5,0),ui,o,hi,r,s),ol.set(0,0),jo.set(1,0),al.set(1,1);let a=e.ray.intersectTriangle(ls,Wi,hs,!1,ki);if(a===null&&(us(Wi.set(-.5,.5,0),ui,o,hi,r,s),jo.set(0,1),a=e.ray.intersectTriangle(ls,hs,Wi,!1,ki),a===null))return;const c=e.ray.origin.distanceTo(ki);c<e.near||c>e.far||t.push({distance:c,point:ki.clone(),uv:$e.getUV(ki,ls,Wi,hs,ol,jo,al,new V),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}mo.prototype.isSprite=!0;function us(n,e,t,i,r,s){di.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Vi.x=s*di.x-r*di.y,Vi.y=r*di.x+s*di.y):Vi.copy(di),n.copy(e),n.x+=Vi.x,n.y+=Vi.y,n.applyMatrix4(Yu)}const ds=new b,cl=new b;class Xa extends me{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const s=t[i];this.addLevel(s.object.clone(),s.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r&&!(e<t[i].distance);i++);return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){ds.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(ds);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){ds.setFromMatrixPosition(e.matrixWorld),cl.setFromMatrixPosition(this.matrixWorld);const i=ds.distanceTo(cl)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s&&i>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,s=i.length;r<s;r++){const o=i[r];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}}const ll=new b,hl=new Ie,ul=new Ie,Ly=new b,dl=new ce;function mr(n,e){Ue.call(this,n,e),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ce,this.bindMatrixInverse=new ce}mr.prototype=Object.assign(Object.create(Ue.prototype),{constructor:mr,isSkinnedMesh:!0,copy:function(n){return Ue.prototype.copy.call(this,n),this.bindMode=n.bindMode,this.bindMatrix.copy(n.bindMatrix),this.bindMatrixInverse.copy(n.bindMatrixInverse),this.skeleton=n.skeleton,this},bind:function(n,e){this.skeleton=n,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const n=new Ie,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){n.x=e.getX(t),n.y=e.getY(t),n.z=e.getZ(t),n.w=e.getW(t);const r=1/n.manhattanLength();r!==1/0?n.multiplyScalar(r):n.set(1,0,0,0),e.setXYZW(t,n.x,n.y,n.z,n.w)}},updateMatrixWorld:function(n){Ue.prototype.updateMatrixWorld.call(this,n),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(n,e){const t=this.skeleton,i=this.geometry;hl.fromBufferAttribute(i.attributes.skinIndex,n),ul.fromBufferAttribute(i.attributes.skinWeight,n),ll.fromBufferAttribute(i.attributes.position,n).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const s=ul.getComponent(r);if(s!==0){const o=hl.getComponent(r);dl.multiplyMatrices(t.bones[o].matrixWorld,t.boneInverses[o]),e.addScaledVector(Ly.copy(ll).applyMatrix4(dl),s)}}return e.applyMatrix4(this.bindMatrixInverse)}});function gr(){me.call(this),this.type="Bone"}gr.prototype=Object.assign(Object.create(me.prototype),{constructor:gr,isBone:!0});const fl=new ce,Ry=new ce;class Hr{constructor(e=[],t=[]){this.uuid=xe.generateUUID(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ry;fl.multiplyMatrices(a,t[s]),fl.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Hr(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new gr),this.bones.push(o),this.boneInverses.push(new ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}const pl=new ce,ml=new ce,fs=[],qi=new Ue;function Hs(n,e,t){Ue.call(this,n,e),this.instanceMatrix=new ye(new Float32Array(t*16),16),this.instanceColor=null,this.count=t,this.frustumCulled=!1}Hs.prototype=Object.assign(Object.create(Ue.prototype),{constructor:Hs,isInstancedMesh:!0,copy:function(n){return Ue.prototype.copy.call(this,n),this.instanceMatrix.copy(n.instanceMatrix),n.instanceColor!==null&&(this.instanceColor=n.instanceColor.clone()),this.count=n.count,this},getColorAt:function(n,e){e.fromArray(this.instanceColor.array,n*3)},getMatrixAt:function(n,e){e.fromArray(this.instanceMatrix.array,n*16)},raycast:function(n,e){const t=this.matrixWorld,i=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,pl),ml.multiplyMatrices(t,pl),qi.matrixWorld=ml,qi.raycast(n,fs);for(let s=0,o=fs.length;s<o;s++){const a=fs[s];a.instanceId=r,a.object=this,e.push(a)}fs.length=0}},setColorAt:function(n,e){this.instanceColor===null&&(this.instanceColor=new ye(new Float32Array(this.count*3),3)),e.toArray(this.instanceColor.array,n*3)},setMatrixAt:function(n,e){e.toArray(this.instanceMatrix.array,n*16)},updateMorphTargets:function(){},dispose:function(){this.dispatchEvent({type:"dispose"})}});class at extends Ve{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}at.prototype.isLineBasicMaterial=!0;const gl=new b,yl=new b,xl=new ce,Yo=new bn,ps=new _n;function Bt(n=new le,e=new at){me.call(this),this.type="Line",this.geometry=n,this.material=e,this.updateMorphTargets()}Bt.prototype=Object.assign(Object.create(me.prototype),{constructor:Bt,isLine:!0,copy:function(n){return me.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[0];for(let i=1,r=e.count;i<r;i++)gl.fromBufferAttribute(e,i-1),yl.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=gl.distanceTo(yl);n.setAttribute("lineDistance",new ie(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Line.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere),ps.applyMatrix4(i),ps.radius+=r,n.ray.intersectsSphere(ps)===!1)return;xl.copy(i).invert(),Yo.copy(n.ray).applyMatrix4(xl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,a=new b,c=new b,l=new b,u=new b,h=this.isLineSegments?2:1;if(t.isBufferGeometry){const d=t.index,m=t.attributes.position;if(d!==null){const y=d.array;for(let x=0,g=y.length-1;x<g;x+=h){const p=y[x],w=y[x+1];if(a.fromBufferAttribute(m,p),c.fromBufferAttribute(m,w),Yo.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const S=n.ray.origin.distanceTo(u);S<n.near||S>n.far||e.push({distance:S,point:l.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else for(let y=0,x=m.count-1;y<x;y+=h){if(a.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),Yo.distanceSqToSegment(a,c,u,l)>o)continue;u.applyMatrix4(this.matrixWorld);const p=n.ray.origin.distanceTo(u);p<n.near||p>n.far||e.push({distance:p,point:l.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else t.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const vl=new b,_l=new b;function pt(n,e){Bt.call(this,n,e),this.type="LineSegments"}pt.prototype=Object.assign(Object.create(Bt.prototype),{constructor:pt,isLineSegments:!0,computeLineDistances:function(){const n=this.geometry;if(n.isBufferGeometry)if(n.index===null){const e=n.attributes.position,t=[];for(let i=0,r=e.count;i<r;i+=2)vl.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+vl.distanceTo(_l);n.setAttribute("lineDistance",new ie(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else n.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}});class ja extends Bt{constructor(e,t){super(e,t),this.type="LineLoop"}}ja.prototype.isLineLoop=!0;class Xn extends Ve{constructor(e){super(),this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}Xn.prototype.isPointsMaterial=!0;const bl=new ce,Sa=new bn,ms=new _n,gs=new b;function Mi(n=new le,e=new Xn){me.call(this),this.type="Points",this.geometry=n,this.material=e,this.updateMorphTargets()}Mi.prototype=Object.assign(Object.create(me.prototype),{constructor:Mi,isPoints:!0,copy:function(n){return me.prototype.copy.call(this,n),this.material=n.material,this.geometry=n.geometry,this},raycast:function(n,e){const t=this.geometry,i=this.matrixWorld,r=n.params.Points.threshold;if(t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere),ms.applyMatrix4(i),ms.radius+=r,n.ray.intersectsSphere(ms)===!1)return;bl.copy(i).invert(),Sa.copy(n.ray).applyMatrix4(bl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s;if(t.isBufferGeometry){const a=t.index,l=t.attributes.position;if(a!==null){const u=a.array;for(let h=0,d=u.length;h<d;h++){const f=u[h];gs.fromBufferAttribute(l,f),wl(gs,f,o,i,n,e,this)}}else for(let u=0,h=l.count;u<h;u++)gs.fromBufferAttribute(l,u),wl(gs,u,o,i,n,e,this)}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},updateMorphTargets:function(){const n=this.geometry;if(n.isBufferGeometry){const e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}else{const e=n.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function wl(n,e,t,i,r,s,o){const a=Sa.distanceSqToPoint(n);if(a<t){const c=new b;Sa.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Zu extends it{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.format=a!==void 0?a:un,this.minFilter=o!==void 0?o:tt,this.magFilter=s!==void 0?s:tt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Zu.prototype.isVideoTexture=!0;class Ya extends it{constructor(e,t,i,r,s,o,a,c,l,u,h,d){super(null,o,a,c,l,u,r,s,h,d),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Ya.prototype.isCompressedTexture=!0;class Ju extends it{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.needsUpdate=!0}}Ju.prototype.isCanvasTexture=!0;class $u extends it{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Nn,u!==Nn&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nn&&(i=nr),i===void 0&&u===_i&&(i=xi),super(null,r,s,o,a,c,u,i,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:et,this.minFilter=c!==void 0?c:et,this.flipY=!1,this.generateMipmaps=!1}}$u.prototype.isDepthTexture=!0;class Gs extends le{constructor(e=1,t=8,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,u=new V;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(c,2))}}class Si extends le{constructor(e=1,t=1,i=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const y=[],x=i/2;let g=0;p(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function p(){const _=new b,S=new b;let v=0;const A=(t-e)/i;for(let P=0;P<=s;P++){const L=[],D=P/s,I=D*(t-e)+e;for(let O=0;O<=r;O++){const F=O/r,C=F*c+a,B=Math.sin(C),z=Math.cos(C);S.x=I*B,S.y=-D*i+x,S.z=I*z,h.push(S.x,S.y,S.z),_.set(B,A,z).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-D),L.push(m++)}y.push(L)}for(let P=0;P<r;P++)for(let L=0;L<s;L++){const D=y[L][P],I=y[L+1][P],O=y[L+1][P+1],F=y[L][P+1];u.push(D,I,F),u.push(I,O,F),v+=6}l.addGroup(g,v,0),g+=v}function w(_){const S=m,v=new V,A=new b;let P=0;const L=_===!0?e:t,D=_===!0?1:-1;for(let O=1;O<=r;O++)h.push(0,x*D,0),d.push(0,D,0),f.push(.5,.5),m++;const I=m;for(let O=0;O<=r;O++){const C=O/r*c+a,B=Math.cos(C),z=Math.sin(C);A.x=L*z,A.y=x*D,A.z=L*B,h.push(A.x,A.y,A.z),d.push(0,D,0),v.x=B*.5+.5,v.y=z*.5*D+.5,f.push(v.x,v.y),m++}for(let O=0;O<r;O++){const F=S+O,C=I+O;_===!0?u.push(C,C+1,F):u.push(C+1,C,F),P+=3}l.addGroup(g,P,_===!0?1:2),g+=P}}}class ks extends Si{constructor(e=1,t=1,i=8,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}}class yn extends le{constructor(e,t,i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),l(i),u(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const w=new b,_=new b,S=new b;for(let v=0;v<t.length;v+=3)f(t[v+0],w),f(t[v+1],_),f(t[v+2],S),c(w,_,S,p)}function c(p,w,_,S){const v=S+1,A=[];for(let P=0;P<=v;P++){A[P]=[];const L=p.clone().lerp(_,P/v),D=w.clone().lerp(_,P/v),I=v-P;for(let O=0;O<=I;O++)O===0&&P===v?A[P][O]=L:A[P][O]=L.clone().lerp(D,O/I)}for(let P=0;P<v;P++)for(let L=0;L<2*(v-P)-1;L++){const D=Math.floor(L/2);L%2===0?(d(A[P][D+1]),d(A[P+1][D]),d(A[P][D])):(d(A[P][D+1]),d(A[P+1][D+1]),d(A[P+1][D]))}}function l(p){const w=new b;for(let _=0;_<s.length;_+=3)w.x=s[_+0],w.y=s[_+1],w.z=s[_+2],w.normalize().multiplyScalar(p),s[_+0]=w.x,s[_+1]=w.y,s[_+2]=w.z}function u(){const p=new b;for(let w=0;w<s.length;w+=3){p.x=s[w+0],p.y=s[w+1],p.z=s[w+2];const _=x(p)/2/Math.PI+.5,S=g(p)/Math.PI+.5;o.push(_,1-S)}m(),h()}function h(){for(let p=0;p<o.length;p+=6){const w=o[p+0],_=o[p+2],S=o[p+4],v=Math.max(w,_,S),A=Math.min(w,_,S);v>.9&&A<.1&&(w<.2&&(o[p+0]+=1),_<.2&&(o[p+2]+=1),S<.2&&(o[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function f(p,w){const _=p*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function m(){const p=new b,w=new b,_=new b,S=new b,v=new V,A=new V,P=new V;for(let L=0,D=0;L<s.length;L+=9,D+=6){p.set(s[L+0],s[L+1],s[L+2]),w.set(s[L+3],s[L+4],s[L+5]),_.set(s[L+6],s[L+7],s[L+8]),v.set(o[D+0],o[D+1]),A.set(o[D+2],o[D+3]),P.set(o[D+4],o[D+5]),S.copy(p).add(w).add(_).divideScalar(3);const I=x(S);y(v,D+0,p,I),y(A,D+2,w,I),y(P,D+4,_,I)}}function y(p,w,_,S){S<0&&p.x===1&&(o[w]=p.x-1),_.x===0&&_.z===0&&(o[w]=S/2/Math.PI+.5)}function x(p){return Math.atan2(p.z,-p.x)}function g(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}}class Vs extends yn{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}}const ys=new b,xs=new b,Zo=new b,vs=new $e;class Za extends le{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const r=Math.pow(10,4),s=Math.cos(xe.DEG2RAD*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:y,b:x,c:g}=vs;if(y.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),vs.getNormal(Zo),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,h[2]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let p=0;p<3;p++){const w=(p+1)%3,_=h[p],S=h[w],v=vs[u[p]],A=vs[u[w]],P=`${_}_${S}`,L=`${S}_${_}`;L in d&&d[L]?(Zo.dot(d[L].normal)<=s&&(f.push(v.x,v.y,v.z),f.push(A.x,A.y,A.z)),d[L]=null):P in d||(d[P]={index0:l[p],index1:l[w],normal:Zo.clone()})}}for(const m in d)if(d[m]){const{index0:y,index1:x}=d[m];ys.fromBufferAttribute(a,y),xs.fromBufferAttribute(a,x),f.push(ys.x,ys.y,ys.z),f.push(xs.x,xs.y,xs.z)}this.setAttribute("position",new ie(f,3))}}const Cy={triangulate:function(n,e,t){t=t||2;const i=e&&e.length,r=i?e[0]*t:n.length;let s=Qu(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,u,h,d,f;if(i&&(s=By(n,e,s,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let m=t;m<r;m+=t)h=n[m],d=n[m+1],h<a&&(a=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);f=Math.max(l-a,u-c),f=f!==0?1/f:0}return yr(s,o,t,a,c,f),o}};function Qu(n,e,t,i,r){let s,o;if(r===Xy(n,e,t,i)>0)for(s=e;s<t;s+=i)o=Ml(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=Ml(s,n[s],n[s+1],o);return o&&go(o,o.next)&&(vr(o),o=o.next),o}function xn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(go(t,t.next)||Xe(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yr(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Hy(n,i,r,s);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,s?Dy(n,i,r,s):Py(n)){e.push(c.i/t),e.push(n.i/t),e.push(l.i/t),vr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Iy(xn(n),e,t),yr(n,e,t,i,r,s,2)):o===2&&Fy(n,e,t,i,r,s):yr(xn(n),e,t,i,r,s,1);break}}}function Py(n){const e=n.prev,t=n,i=n.next;if(Xe(e,t,i)>=0)return!1;let r=n.next.next;for(;r!==n.prev;){if(gi(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Xe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function Dy(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Xe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,c=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,l=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Ea(a,c,e,t,i),d=Ea(l,u,e,t,i);let f=n.prevZ,m=n.nextZ;for(;f&&f.z>=h&&m&&m.z<=d;){if(f!==n.prev&&f!==n.next&&gi(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0||(f=f.prevZ,m!==n.prev&&m!==n.next&&gi(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Xe(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=h;){if(f!==n.prev&&f!==n.next&&gi(r.x,r.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Xe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==n.prev&&m!==n.next&&gi(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Iy(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!go(r,s)&&Ku(r,i,i.next,s)&&xr(r,s)&&xr(s,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(s.i/t),vr(i),vr(i.next),i=n=s),i=i.next}while(i!==n);return xn(i)}function Fy(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vy(o,a)){let c=ed(o,a);o=xn(o,o.next),c=xn(c,c.next),yr(o,e,t,i,r,s),yr(c,e,t,i,r,s);return}a=a.next}o=o.next}while(o!==n)}function By(n,e,t,i){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,l=Qu(n,a,c,i,!1),l===l.next&&(l.steiner=!0),r.push(ky(l));for(r.sort(Ny),s=0;s<r.length;s++)Oy(r[s],t),t=xn(t,t.next);return t}function Ny(n,e){return n.x-e.x}function Oy(n,e){if(e=zy(n,e),e){const t=ed(e,n);xn(e,e.next),xn(t,t.next)}}function zy(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s){if(s=d,d===i){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(i===s)return o;const a=o,c=o.x,l=o.y;let u=1/0,h;t=o;do i>=t.x&&t.x>=c&&i!==t.x&&gi(r<l?i:s,r,c,l,r<l?s:i,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(i-t.x),xr(t,n)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Uy(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Uy(n,e){return Xe(n.prev,n,e.prev)<0&&Xe(e.next,n,n.next)<0}function Hy(n,e,t,i){let r=n;do r.z===null&&(r.z=Ea(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Gy(r)}function Gy(n){let e,t,i,r,s,o,a,c,l=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,l*=2}while(o>1);return n}function Ea(n,e,t,i,r){return n=32767*(n-t)*r,e=32767*(e-i)*r,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ky(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gi(n,e,t,i,r,s,o,a){return(r-o)*(e-a)-(n-o)*(s-a)>=0&&(n-o)*(i-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(i-a)>=0}function Vy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Wy(n,e)&&(xr(n,e)&&xr(e,n)&&qy(n,e)&&(Xe(n.prev,n,e.prev)||Xe(n,e.prev,e))||go(n,e)&&Xe(n.prev,n,n.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function go(n,e){return n.x===e.x&&n.y===e.y}function Ku(n,e,t,i){const r=bs(Xe(n,e,t)),s=bs(Xe(n,e,i)),o=bs(Xe(t,i,n)),a=bs(Xe(t,i,e));return!!(r!==s&&o!==a||r===0&&_s(n,t,e)||s===0&&_s(n,i,e)||o===0&&_s(t,n,i)||a===0&&_s(t,e,i))}function _s(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bs(n){return n>0?1:n<0?-1:0}function Wy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ku(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function xr(n,e){return Xe(n.prev,n,n.next)<0?Xe(n,e,n.next)>=0&&Xe(n,n.prev,e)>=0:Xe(n,e,n.prev)<0||Xe(n,n.next,e)<0}function qy(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ed(n,e){const t=new Ta(n.i,n.x,n.y),i=new Ta(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ml(n,e,t,i){const r=new Ta(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ta(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xy(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}const Qt={area:function(n){const e=n.length;let t=0;for(let i=e-1,r=0;r<e;i=r++)t+=n[i].x*n[r].y-n[r].x*n[i].y;return t*.5},isClockWise:function(n){return Qt.area(n)<0},triangulateShape:function(n,e){const t=[],i=[],r=[];Sl(n),El(t,n);let s=n.length;e.forEach(Sl);for(let a=0;a<e.length;a++)i.push(s),s+=e[a].length,El(t,e[a]);const o=Cy.triangulate(t,i);for(let a=0;a<o.length;a+=3)r.push(o.slice(a,a+3));return r}};function Sl(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function El(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Kt extends le{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ie(r,3)),this.setAttribute("uv",new ie(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,m=t.bevelSize!==void 0?t.bevelSize:f-2,y=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:jy;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let w,_=!1,S,v,A,P;g&&(w=g.getSpacedPoints(u),_=!0,d=!1,S=g.computeFrenetFrames(u,!1),v=new b,A=new b,P=new b),d||(x=0,f=0,m=0,y=0);const L=a.extractPoints(l);let D=L.shape;const I=L.holes;if(!Qt.isClockWise(D)){D=D.reverse();for(let q=0,Z=I.length;q<Z;q++){const Q=I[q];Qt.isClockWise(Q)&&(I[q]=Q.reverse())}}const F=Qt.triangulateShape(D,I),C=D;for(let q=0,Z=I.length;q<Z;q++){const Q=I[q];D=D.concat(Q)}function B(q,Z,Q){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(Q).add(q)}const z=D.length,X=F.length;function J(q,Z,Q){let ue,re,T;const E=q.x-Z.x,k=q.y-Z.y,W=Q.x-q.x,R=Q.y-q.y,Y=E*E+k*k,te=E*R-k*W;if(Math.abs(te)>Number.EPSILON){const se=Math.sqrt(Y),j=Math.sqrt(W*W+R*R),pe=Z.x-k/se,ge=Z.y+E/se,he=Q.x-R/j,de=Q.y+W/j,fe=((he-pe)*R-(de-ge)*W)/(E*R-k*W);ue=pe+E*fe-q.x,re=ge+k*fe-q.y;const We=ue*ue+re*re;if(We<=2)return new V(ue,re);T=Math.sqrt(We/2)}else{let se=!1;E>Number.EPSILON?W>Number.EPSILON&&(se=!0):E<-Number.EPSILON?W<-Number.EPSILON&&(se=!0):Math.sign(k)===Math.sign(R)&&(se=!0),se?(ue=-k,re=E,T=Math.sqrt(Y)):(ue=E,re=k,T=Math.sqrt(Y/2))}return new V(ue/T,re/T)}const ee=[];for(let q=0,Z=C.length,Q=Z-1,ue=q+1;q<Z;q++,Q++,ue++)Q===Z&&(Q=0),ue===Z&&(ue=0),ee[q]=J(C[q],C[Q],C[ue]);const ae=[];let oe,Te=ee.concat();for(let q=0,Z=I.length;q<Z;q++){const Q=I[q];oe=[];for(let ue=0,re=Q.length,T=re-1,E=ue+1;ue<re;ue++,T++,E++)T===re&&(T=0),E===re&&(E=0),oe[ue]=J(Q[ue],Q[T],Q[E]);ae.push(oe),Te=Te.concat(oe)}for(let q=0;q<x;q++){const Z=q/x,Q=f*Math.cos(Z*Math.PI/2),ue=m*Math.sin(Z*Math.PI/2)+y;for(let re=0,T=C.length;re<T;re++){const E=B(C[re],ee[re],ue);He(E.x,E.y,-Q)}for(let re=0,T=I.length;re<T;re++){const E=I[re];oe=ae[re];for(let k=0,W=E.length;k<W;k++){const R=B(E[k],oe[k],ue);He(R.x,R.y,-Q)}}}const be=m+y;for(let q=0;q<z;q++){const Z=d?B(D[q],Te[q],be):D[q];_?(A.copy(S.normals[0]).multiplyScalar(Z.x),v.copy(S.binormals[0]).multiplyScalar(Z.y),P.copy(w[0]).add(A).add(v),He(P.x,P.y,P.z)):He(Z.x,Z.y,0)}for(let q=1;q<=u;q++)for(let Z=0;Z<z;Z++){const Q=d?B(D[Z],Te[Z],be):D[Z];_?(A.copy(S.normals[q]).multiplyScalar(Q.x),v.copy(S.binormals[q]).multiplyScalar(Q.y),P.copy(w[q]).add(A).add(v),He(P.x,P.y,P.z)):He(Q.x,Q.y,h/u*q)}for(let q=x-1;q>=0;q--){const Z=q/x,Q=f*Math.cos(Z*Math.PI/2),ue=m*Math.sin(Z*Math.PI/2)+y;for(let re=0,T=C.length;re<T;re++){const E=B(C[re],ee[re],ue);He(E.x,E.y,h+Q)}for(let re=0,T=I.length;re<T;re++){const E=I[re];oe=ae[re];for(let k=0,W=E.length;k<W;k++){const R=B(E[k],oe[k],ue);_?He(R.x,R.y+w[u-1].y,w[u-1].x+Q):He(R.x,R.y,h+Q)}}}Be(),Re();function Be(){const q=r.length/3;if(d){let Z=0,Q=z*Z;for(let ue=0;ue<X;ue++){const re=F[ue];Le(re[2]+Q,re[1]+Q,re[0]+Q)}Z=u+x*2,Q=z*Z;for(let ue=0;ue<X;ue++){const re=F[ue];Le(re[0]+Q,re[1]+Q,re[2]+Q)}}else{for(let Z=0;Z<X;Z++){const Q=F[Z];Le(Q[2],Q[1],Q[0])}for(let Z=0;Z<X;Z++){const Q=F[Z];Le(Q[0]+z*u,Q[1]+z*u,Q[2]+z*u)}}i.addGroup(q,r.length/3-q,0)}function Re(){const q=r.length/3;let Z=0;G(C,Z),Z+=C.length;for(let Q=0,ue=I.length;Q<ue;Q++){const re=I[Q];G(re,Z),Z+=re.length}i.addGroup(q,r.length/3-q,1)}function G(q,Z){let Q=q.length;for(;--Q>=0;){const ue=Q;let re=Q-1;re<0&&(re=q.length-1);for(let T=0,E=u+x*2;T<E;T++){const k=z*T,W=z*(T+1),R=Z+ue+k,Y=Z+re+k,te=Z+re+W,se=Z+ue+W;Ce(R,Y,te,se)}}}function He(q,Z,Q){c.push(q),c.push(Z),c.push(Q)}function Le(q,Z,Q){_e(q),_e(Z),_e(Q);const ue=r.length/3,re=p.generateTopUV(i,r,ue-3,ue-2,ue-1);Pe(re[0]),Pe(re[1]),Pe(re[2])}function Ce(q,Z,Q,ue){_e(q),_e(Z),_e(ue),_e(Z),_e(Q),_e(ue);const re=r.length/3,T=p.generateSideWallUV(i,r,re-6,re-3,re-2,re-1);Pe(T[0]),Pe(T[1]),Pe(T[3]),Pe(T[1]),Pe(T[2]),Pe(T[3])}function _e(q){r.push(c[q*3+0]),r.push(c[q*3+1]),r.push(c[q*3+2])}function Pe(q){s.push(q.x),s.push(q.y)}}}toJSON(){const e=le.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return Yy(t,i,e)}}const jy={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],u=e[r*3+1];return[new V(s,o),new V(a,c),new V(l,u)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],h=e[i*3+2],d=e[r*3],f=e[r*3+1],m=e[r*3+2],y=e[s*3],x=e[s*3+1],g=e[s*3+2];return Math.abs(a-u)<.01?[new V(o,1-c),new V(l,1-h),new V(d,1-m),new V(y,1-g)]:[new V(a,1-c),new V(u,1-h),new V(f,1-m),new V(x,1-g)]}};function Yy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ws extends yn{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}}class qs extends le{constructor(e,t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=xe.clamp(r,0,Math.PI*2);const s=[],o=[],a=[],c=1/t,l=new b,u=new V;for(let h=0;h<=t;h++){const d=i+h*c*r,f=Math.sin(d),m=Math.cos(d);for(let y=0;y<=e.length-1;y++)l.x=e[y].x*f,l.y=e[y].y,l.z=e[y].x*m,o.push(l.x,l.y,l.z),u.x=h/t,u.y=y/(e.length-1),a.push(u.x,u.y)}for(let h=0;h<t;h++)for(let d=0;d<e.length-1;d++){const f=d+h*e.length,m=f,y=f+e.length,x=f+e.length+1,g=f+1;s.push(m,y,g),s.push(y,x,g)}if(this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("uv",new ie(a,2)),this.computeVertexNormals(),r===Math.PI*2){const h=this.attributes.normal.array,d=new b,f=new b,m=new b,y=t*e.length*3;for(let x=0,g=0;x<e.length;x++,g+=3)d.x=h[g+0],d.y=h[g+1],d.z=h[g+2],f.x=h[y+g+0],f.y=h[y+g+1],f.z=h[y+g+2],m.addVectors(d,f).normalize(),h[g+0]=h[y+g+0]=m.x,h[g+1]=h[y+g+1]=m.y,h[g+2]=h[y+g+2]=m.z}}}class _r extends yn{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}}function Gn(n,e,t){le.call(this),this.type="ParametricGeometry",this.parameters={func:n,slices:e,stacks:t};const i=[],r=[],s=[],o=[],a=1e-5,c=new b,l=new b,u=new b,h=new b,d=new b;n.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const f=e+1;for(let m=0;m<=t;m++){const y=m/t;for(let x=0;x<=e;x++){const g=x/e;n(g,y,l),r.push(l.x,l.y,l.z),g-a>=0?(n(g-a,y,u),h.subVectors(l,u)):(n(g+a,y,u),h.subVectors(u,l)),y-a>=0?(n(g,y-a,u),d.subVectors(l,u)):(n(g,y+a,u),d.subVectors(u,l)),c.crossVectors(h,d).normalize(),s.push(c.x,c.y,c.z),o.push(g,y)}}for(let m=0;m<t;m++)for(let y=0;y<e;y++){const x=m*f+y,g=m*f+y+1,p=(m+1)*f+y+1,w=(m+1)*f+y;i.push(x,g,w),i.push(g,p,w)}this.setIndex(i),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(s,3)),this.setAttribute("uv",new ie(o,2))}Gn.prototype=Object.create(le.prototype);Gn.prototype.constructor=Gn;class Xs extends le{constructor(e=.5,t=1,i=8,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new b,m=new V;for(let y=0;y<=r;y++){for(let x=0;x<=i;x++){const g=s+x/i*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let y=0;y<r;y++){const x=y*(i+1);for(let g=0;g<i;g++){const p=g+x,w=p,_=p+i+1,S=p+i+2,v=p+1;a.push(w,_,v),a.push(_,S,v)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2))}}class br extends le{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(s,3)),this.setAttribute("uv",new ie(o,2));function l(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;Qt.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,g=m.length;x<g;x++){const p=m[x];Qt.isClockWise(p)===!0&&(m[x]=p.reverse())}const y=Qt.triangulateShape(f,m);for(let x=0,g=m.length;x<g;x++){const p=m[x];f=f.concat(p)}for(let x=0,g=f.length;x<g;x++){const p=f[x];r.push(p.x,p.y,0),s.push(0,0,1),o.push(p.x,p.y)}for(let x=0,g=y.length;x<g;x++){const p=y[x],w=p[0]+h,_=p[1]+h,S=p[2]+h;i.push(w,_,S),c+=3}}}toJSON(){const e=le.prototype.toJSON.call(this),t=this.parameters.shapes;return Zy(t,e)}}function Zy(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class wr extends le{constructor(e=1,t=8,i=6,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new b,d=new b,f=[],m=[],y=[],x=[];for(let g=0;g<=i;g++){const p=[],w=g/i;let _=0;g==0&&o==0?_=.5/t:g==i&&c==Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const v=S/t;h.x=-e*Math.cos(r+v*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(r+v*s)*Math.sin(o+w*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),x.push(v+_,1-w),p.push(l++)}u.push(p)}for(let g=0;g<i;g++)for(let p=0;p<t;p++){const w=u[g][p+1],_=u[g][p],S=u[g+1][p],v=u[g+1][p+1];(g!==0||o>0)&&f.push(w,_,v),(g!==i-1||c<Math.PI)&&f.push(_,S,v)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(y,3)),this.setAttribute("uv",new ie(x,2))}}class js extends yn{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}}class Ys extends Kt{constructor(e,t={}){const i=t.font;if(!(i&&i.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new le;const r=i.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t),this.type="TextGeometry"}}class Zs extends le{constructor(e=1,t=.4,i=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new b,h=new b,d=new b;for(let f=0;f<=i;f++)for(let m=0;m<=r;m++){const y=m/r*s,x=f/i*Math.PI*2;h.x=(e+t*Math.cos(x))*Math.cos(y),h.y=(e+t*Math.cos(x))*Math.sin(y),h.z=t*Math.sin(x),a.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=r;m++){const y=(r+1)*f+m-1,x=(r+1)*(f-1)+m-1,g=(r+1)*(f-1)+m,p=(r+1)*f+m;o.push(y,x,p),o.push(x,g,p)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}}class Js extends le{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],c=[],l=[],u=[],h=new b,d=new b,f=new b,m=new b,y=new b,x=new b,g=new b;for(let w=0;w<=i;++w){const _=w/i*s*Math.PI*2;p(_,s,o,e,f),p(_+.01,s,o,e,m),x.subVectors(m,f),g.addVectors(m,f),y.crossVectors(x,g),g.crossVectors(y,x),y.normalize(),g.normalize();for(let S=0;S<=r;++S){const v=S/r*Math.PI*2,A=-t*Math.cos(v),P=t*Math.sin(v);h.x=f.x+(A*g.x+P*y.x),h.y=f.y+(A*g.y+P*y.y),h.z=f.z+(A*g.z+P*y.z),c.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),u.push(w/i),u.push(S/r)}}for(let w=1;w<=i;w++)for(let _=1;_<=r;_++){const S=(r+1)*(w-1)+(_-1),v=(r+1)*w+(_-1),A=(r+1)*w+_,P=(r+1)*(w-1)+_;a.push(S,v,P),a.push(v,A,P)}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(u,2));function p(w,_,S,v,A){const P=Math.cos(w),L=Math.sin(w),D=S/_*w,I=Math.cos(D);A.x=v*(2+I)*.5*P,A.y=v*(2+I)*L*.5,A.z=v*Math.sin(D)*.5}}}class $s extends le{constructor(e,t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,c=new b,l=new V;let u=new b;const h=[],d=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function y(){for(let w=0;w<t;w++)x(w);x(s===!1?t:0),p(),g()}function x(w){u=e.getPointAt(w/t,u);const _=o.normals[w],S=o.binormals[w];for(let v=0;v<=r;v++){const A=v/r*Math.PI*2,P=Math.sin(A),L=-Math.cos(A);c.x=L*_.x+P*S.x,c.y=L*_.y+P*S.y,c.z=L*_.z+P*S.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+i*c.x,a.y=u.y+i*c.y,a.z=u.z+i*c.z,h.push(a.x,a.y,a.z)}}function g(){for(let w=1;w<=t;w++)for(let _=1;_<=r;_++){const S=(r+1)*(w-1)+(_-1),v=(r+1)*w+(_-1),A=(r+1)*w+_,P=(r+1)*(w-1)+_;m.push(S,v,P),m.push(v,A,P)}}function p(){for(let w=0;w<=t;w++)for(let _=0;_<=r;_++)l.x=w/t,l.y=_/r,f.push(l.x,l.y)}}toJSON(){const e=le.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class Ja extends le{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const t=[],i=[0,0],r={},s=new b;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,f=h.count;for(let m=d,y=d+f;m<y;m+=3)for(let x=0;x<3;x++){const g=a.getX(m+x),p=a.getX(m+(x+1)%3);i[0]=Math.min(g,p),i[1]=Math.max(g,p);const w=i[0]+","+i[1];r[w]===void 0&&(r[w]={index1:i[0],index2:i[1]})}}for(const l in r){const u=r[l];s.fromBufferAttribute(o,u.index1),t.push(s.x,s.y,s.z),s.fromBufferAttribute(o,u.index2),t.push(s.x,s.y,s.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l;s.fromBufferAttribute(o,u),t.push(s.x,s.y,s.z);const h=3*a+(l+1)%3;s.fromBufferAttribute(o,h),t.push(s.x,s.y,s.z)}}this.setAttribute("position",new ie(t,3))}}var ut=Object.freeze({__proto__:null,BoxGeometry:Hn,BoxBufferGeometry:Hn,CircleGeometry:Gs,CircleBufferGeometry:Gs,ConeGeometry:ks,ConeBufferGeometry:ks,CylinderGeometry:Si,CylinderBufferGeometry:Si,DodecahedronGeometry:Vs,DodecahedronBufferGeometry:Vs,EdgesGeometry:Za,ExtrudeGeometry:Kt,ExtrudeBufferGeometry:Kt,IcosahedronGeometry:Ws,IcosahedronBufferGeometry:Ws,LatheGeometry:qs,LatheBufferGeometry:qs,OctahedronGeometry:_r,OctahedronBufferGeometry:_r,ParametricGeometry:Gn,ParametricBufferGeometry:Gn,PlaneGeometry:pr,PlaneBufferGeometry:pr,PolyhedronGeometry:yn,PolyhedronBufferGeometry:yn,RingGeometry:Xs,RingBufferGeometry:Xs,ShapeGeometry:br,ShapeBufferGeometry:br,SphereGeometry:wr,SphereBufferGeometry:wr,TetrahedronGeometry:js,TetrahedronBufferGeometry:js,TextGeometry:Ys,TextBufferGeometry:Ys,TorusGeometry:Zs,TorusBufferGeometry:Zs,TorusKnotGeometry:Js,TorusKnotBufferGeometry:Js,TubeGeometry:$s,TubeBufferGeometry:$s,WireframeGeometry:Ja});class $a extends Ve{constructor(e){super(),this.type="ShadowMaterial",this.color=new ne(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}$a.prototype.isShadowMaterial=!0;class Pi extends vt{constructor(e){super(e),this.type="RawShaderMaterial"}}Pi.prototype.isRawShaderMaterial=!0;function Gt(n){Ve.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(n)}Gt.prototype=Object.create(Ve.prototype);Gt.prototype.constructor=Gt;Gt.prototype.isMeshStandardMaterial=!0;Gt.prototype.copy=function(n){return Ve.prototype.copy.call(this,n),this.defines={STANDARD:""},this.color.copy(n.color),this.roughness=n.roughness,this.metalness=n.metalness,this.map=n.map,this.lightMap=n.lightMap,this.lightMapIntensity=n.lightMapIntensity,this.aoMap=n.aoMap,this.aoMapIntensity=n.aoMapIntensity,this.emissive.copy(n.emissive),this.emissiveMap=n.emissiveMap,this.emissiveIntensity=n.emissiveIntensity,this.bumpMap=n.bumpMap,this.bumpScale=n.bumpScale,this.normalMap=n.normalMap,this.normalMapType=n.normalMapType,this.normalScale.copy(n.normalScale),this.displacementMap=n.displacementMap,this.displacementScale=n.displacementScale,this.displacementBias=n.displacementBias,this.roughnessMap=n.roughnessMap,this.metalnessMap=n.metalnessMap,this.alphaMap=n.alphaMap,this.envMap=n.envMap,this.envMapIntensity=n.envMapIntensity,this.refractionRatio=n.refractionRatio,this.wireframe=n.wireframe,this.wireframeLinewidth=n.wireframeLinewidth,this.wireframeLinecap=n.wireframeLinecap,this.wireframeLinejoin=n.wireframeLinejoin,this.skinning=n.skinning,this.morphTargets=n.morphTargets,this.morphNormals=n.morphNormals,this.flatShading=n.flatShading,this.vertexTangents=n.vertexTangents,this};function vn(n){Gt.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(e){this.reflectivity=xe.clamp(2.5*(e-1)/(e+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(n)}vn.prototype=Object.create(Gt.prototype);vn.prototype.constructor=vn;vn.prototype.isMeshPhysicalMaterial=!0;vn.prototype.copy=function(n){return Gt.prototype.copy.call(this,n),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=n.clearcoat,this.clearcoatMap=n.clearcoatMap,this.clearcoatRoughness=n.clearcoatRoughness,this.clearcoatRoughnessMap=n.clearcoatRoughnessMap,this.clearcoatNormalMap=n.clearcoatNormalMap,this.clearcoatNormalScale.copy(n.clearcoatNormalScale),this.reflectivity=n.reflectivity,n.sheen?this.sheen=(this.sheen||new ne).copy(n.sheen):this.sheen=null,this.transmission=n.transmission,this.transmissionMap=n.transmissionMap,this};class yo extends Ve{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ne(16777215),this.specular=new ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}yo.prototype.isMeshPhongMaterial=!0;class Qa extends Ve{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Qa.prototype.isMeshToonMaterial=!0;class Ka extends Ve{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Ka.prototype.isMeshNormalMaterial=!0;class ec extends Ve{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}ec.prototype.isMeshLambertMaterial=!0;class tc extends Ve{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vn,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}tc.prototype.isMeshMatcapMaterial=!0;class nc extends at{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}nc.prototype.isLineDashedMaterial=!0;var Jy=Object.freeze({__proto__:null,ShadowMaterial:$a,SpriteMaterial:po,RawShaderMaterial:Pi,ShaderMaterial:vt,PointsMaterial:Xn,MeshPhysicalMaterial:vn,MeshStandardMaterial:Gt,MeshPhongMaterial:yo,MeshToonMaterial:Qa,MeshNormalMaterial:Ka,MeshLambertMaterial:ec,MeshDepthMaterial:ho,MeshDistanceMaterial:uo,MeshBasicMaterial:tn,MeshMatcapMaterial:tc,LineDashedMaterial:nc,LineBasicMaterial:at,Material:Ve});const ke={arraySlice:function(n,e,t){return ke.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r},flattenJSON:function(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)},subclip:function(n,e,t,i,r=30){const s=n.clone();s.name=e;const o=[];for(let c=0;c<s.tracks.length;++c){const l=s.tracks[c],u=l.getValueSize(),h=[],d=[];for(let f=0;f<l.times.length;++f){const m=l.times[f]*r;if(!(m<t||m>=i)){h.push(l.times[f]);for(let y=0;y<u;++y)d.push(l.values[f*u+y])}}h.length!==0&&(l.times=ke.convertArray(h,l.times.constructor),l.values=ke.convertArray(d,l.values.constructor),o.push(l))}s.tracks=o;let a=1/0;for(let c=0;c<s.tracks.length;++c)a>s.tracks[c].times[0]&&(a=s.tracks[c].times[0]);for(let c=0;c<s.tracks.length;++c)s.tracks[c].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const r=t.tracks.length,s=e/i;for(let o=0;o<r;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=n.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let y;if(s<=a.times[0]){const g=u,p=h-u;y=ke.arraySlice(a.values,g,p)}else if(s>=a.times[m]){const g=m*h+u,p=g+h-u;y=ke.arraySlice(a.values,g,p)}else{const g=a.createInterpolant(),p=u,w=h-u;g.evaluate(s),y=ke.arraySlice(g.resultBuffer,p,w)}c==="quaternion"&&new ot().fromArray(y).normalize().conjugate().toArray(y);const x=l.times.length;for(let g=0;g<x;++g){const p=g*f+d;if(c==="quaternion")ot.multiplyQuaternionsFlat(l.values,p,y,0,l.values,p);else{const w=f-d*2;for(let _=0;_<w;++_)l.values[p+_]-=y[_]}}}return n.blendMode=Ua,n}};function St(n,e,t,i){this.parameterPositions=n,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t}Object.assign(St.prototype,{evaluate:function(n){const e=this.parameterPositions;let t=this._cachedIndex,i=e[t],r=e[t-1];e:{t:{let s;n:{i:if(!(n<i)){for(let o=t+2;;){if(i===void 0){if(n<r)break i;return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,n,r)}if(t===o)break;if(r=i,i=e[++t],n<i)break t}s=e.length;break n}if(!(n>=r)){const o=e[1];n<o&&(t=2,r=o);for(let a=t-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(t===a)break;if(i=r,r=e[--t-1],n>=r)break t}s=t,t=0;break n}break e}for(;t<s;){const o=t+s>>>1;n<e[o]?s=o:t=o+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,n,i);if(i===void 0)return t=e.length,this._cachedIndex=t,this.afterEnd_(t-1,r,n)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,n,i)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(n){const e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=n*i;for(let s=0;s!==i;++s)e[s]=t[r+s];return e},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(St.prototype,{beforeStart_:St.prototype.copySampleValue_,afterEnd_:St.prototype.copySampleValue_});function Qs(n,e,t,i){St.call(this,n,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Qs.prototype=Object.assign(Object.create(St.prototype),{constructor:Qs,DefaultSettings_:{endingStart:Dn,endingEnd:Dn},intervalChanged_:function(n,e,t){const i=this.parameterPositions;let r=n-2,s=n+1,o=i[r],a=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case In:r=n,o=2*e-t;break;case or:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=n,o=t}if(a===void 0)switch(this.getSettings_().endingEnd){case In:s=n,a=2*t-e;break;case or:s=1,a=t+i[1]-i[0];break;default:s=n-1,a=e}const c=(t-e)*.5,l=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(a-t),this._offsetPrev=r*l,this._offsetNext=s*l},interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(t-e)/(i-e),m=f*f,y=m*f,x=-h*y+2*h*m-h*f,g=(1+h)*y+(-1.5-2*h)*m+(-.5+h)*f+1,p=(-1-d)*y+(1.5+d)*m+.5*f,w=d*y-d*m;for(let _=0;_!==o;++_)r[_]=x*s[l+_]+g*s[c+_]+p*s[a+_]+w*s[u+_];return r}});function Mr(n,e,t,i){St.call(this,n,e,t,i)}Mr.prototype=Object.assign(Object.create(St.prototype),{constructor:Mr,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=n*o,c=a-o,l=(t-e)/(i-e),u=1-l;for(let h=0;h!==o;++h)r[h]=s[c+h]*u+s[a+h]*l;return r}});function Ks(n,e,t,i){St.call(this,n,e,t,i)}Ks.prototype=Object.assign(Object.create(St.prototype),{constructor:Ks,interpolate_:function(n){return this.copySampleValue_(n-1)}});class Ot{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ke.convertArray(t,this.TimeBufferType),this.values=ke.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ke.convertArray(e.times,Array),values:ke.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ks(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qs(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Ds:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Ds}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ke.arraySlice(i,s,o),this.values=ke.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&ke.isTypedArray(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=ke.arraySlice(this.times),t=ke.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===Ds,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const h=a*i,d=h-i,f=h+i;for(let m=0;m!==i;++m){const y=t[h+m];if(y!==t[d+m]||y!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=ke.arraySlice(e,0,o),this.values=ke.arraySlice(t,0,o*i)):(this.times=e,this.values=t),this}clone(){const e=ke.arraySlice(this.times,0),t=ke.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Ot.prototype.TimeBufferType=Float32Array;Ot.prototype.ValueBufferType=Float32Array;Ot.prototype.DefaultInterpolation=sr;class jn extends Ot{}jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=rr;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;class ic extends Ot{}ic.prototype.ValueTypeName="color";class Sr extends Ot{}Sr.prototype.ValueTypeName="number";function eo(n,e,t,i){St.call(this,n,e,t,i)}eo.prototype=Object.assign(Object.create(St.prototype),{constructor:eo,interpolate_:function(n,e,t,i){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=(t-e)/(i-e);let c=n*o;for(let l=c+o;c!==l;c+=4)ot.slerpFlat(r,0,s,c-o,s,c,a);return r}});class Di extends Ot{InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}}Di.prototype.ValueTypeName="quaternion";Di.prototype.DefaultInterpolation=sr;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Yn extends Ot{}Yn.prototype.ValueTypeName="string";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=rr;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends Ot{}Er.prototype.ValueTypeName="vector";class Tr{constructor(e,t=-1,i,r=so){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=xe.generateUUID(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Qy(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Ot.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=ke.getKeyframeOrder(c);c=ke.sortedArray(c,1,u),l=ke.sortedArray(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Sr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,m,y){if(f.length!==0){const x=[],g=[];ke.flattenJSON(f,x,g,m),x.length!==0&&y.push(new h(d,x,g))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let y=0;y<d[m].morphTargets.length;y++)f[d[m].morphTargets[y]]=-1;for(const y in f){const x=[],g=[];for(let p=0;p!==d[m].morphTargets.length;++p){const w=d[m];x.push(w.time),g.push(w.morphTarget===y?1:0)}r.push(new Sr(".morphTargetInfluence["+y+"]",x,g))}c=f.length*(o||1)}else{const f=".bones["+t[h].name+"]";i(Er,f+".position",d,"pos",r),i(Di,f+".quaternion",d,"rot",r),i(Er,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function $y(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return ic;case"quaternion":return Di;case"bool":case"boolean":return jn;case"string":return Yn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Qy(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$y(n.type);if(n.times===void 0){const t=[],i=[];ke.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const kn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function rc(n,e,t){const i=this;let r=!1,s=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=n,this.onProgress=e,this.onError=t,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return a?a(l):l},this.setURLModifier=function(l){return a=l,this},this.addHandler=function(l,u){return c.push(l,u),this},this.removeHandler=function(l){const u=c.indexOf(l);return u!==-1&&c.splice(u,2),this},this.getHandler=function(l){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],f=c[u+1];if(d.global&&(d.lastIndex=0),d.test(l))return f}return null}}const td=new rc;function Ze(n){this.manager=n!==void 0?n:td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ze.prototype,{load:function(){},loadAsync:function(n,e){const t=this;return new Promise(function(i,r){t.load(n,i,e,r)})},parse:function(){},setCrossOrigin:function(n){return this.crossOrigin=n,this},setWithCredentials:function(n){return this.withCredentials=n,this},setPath:function(n){return this.path=n,this},setResourcePath:function(n){return this.resourcePath=n,this},setRequestHeader:function(n){return this.requestHeader=n,this}});const Dt={};function At(n){Ze.call(this,n)}At.prototype=Object.assign(Object.create(Ze.prototype),{constructor:At,load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=kn.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;if(Dt[n]!==void 0){Dt[n].push({onLoad:e,onProgress:t,onError:i});return}const o=/^data:(.*?)(;base64)?,(.*)$/,a=n.match(o);let c;if(a){const l=a[1],u=!!a[2];let h=a[3];h=decodeURIComponent(h),u&&(h=atob(h));try{let d;const f=(this.responseType||"").toLowerCase();switch(f){case"arraybuffer":case"blob":const m=new Uint8Array(h.length);for(let x=0;x<h.length;x++)m[x]=h.charCodeAt(x);f==="blob"?d=new Blob([m.buffer],{type:l}):d=m.buffer;break;case"document":d=new DOMParser().parseFromString(h,l);break;case"json":d=JSON.parse(h);break;default:d=h;break}setTimeout(function(){e&&e(d),r.manager.itemEnd(n)},0)}catch(d){setTimeout(function(){i&&i(d),r.manager.itemError(n),r.manager.itemEnd(n)},0)}}else{Dt[n]=[],Dt[n].push({onLoad:e,onProgress:t,onError:i}),c=new XMLHttpRequest,c.open("GET",n,!0),c.addEventListener("load",function(l){const u=this.response,h=Dt[n];if(delete Dt[n],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),kn.add(n,u);for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onLoad&&m.onLoad(u)}r.manager.itemEnd(n)}else{for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onError&&m.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)}},!1),c.addEventListener("progress",function(l){const u=Dt[n];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onProgress&&f.onProgress(l)}},!1),c.addEventListener("error",function(l){const u=Dt[n];delete Dt[n];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),c.addEventListener("abort",function(l){const u=Dt[n];delete Dt[n];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}r.manager.itemError(n),r.manager.itemEnd(n)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const l in this.requestHeader)c.setRequestHeader(l,this.requestHeader[l]);c.send(null)}return r.manager.itemStart(n),c},setResponseType:function(n){return this.responseType=n,this},setMimeType:function(n){return this.mimeType=n,this}});class Ky extends Ze{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new At(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=Tr.parse(e[i]);t.push(r)}return t}}function Aa(n){Ze.call(this,n)}Aa.prototype=Object.assign(Object.create(Ze.prototype),{constructor:Aa,load:function(n,e,t,i){const r=this,s=[],o=new Ya,a=new At(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(r.withCredentials);let c=0;function l(u){a.load(n[u],function(h){const d=r.parse(h,!0);s[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=tt),o.image=s,o.format=d.format,o.needsUpdate=!0,e&&e(o))},t,i)}if(Array.isArray(n))for(let u=0,h=n.length;u<h;++u)l(u);else a.load(n,function(u){const h=r.parse(u,!0);if(h.isCubemap){const d=h.mipmaps.length/h.mipmapCount;for(let f=0;f<d;f++){s[f]={mipmaps:[]};for(let m=0;m<h.mipmapCount;m++)s[f].mipmaps.push(h.mipmaps[f*h.mipmapCount+m]),s[f].format=h.format,s[f].width=h.width,s[f].height=h.height}o.image=s}else o.image.width=h.width,o.image.height=h.height,o.mipmaps=h.mipmaps;h.mipmapCount===1&&(o.minFilter=tt),o.format=h.format,o.needsUpdate=!0,e&&e(o)},t,i);return o}});class xo extends Ze{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),kn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nd extends Ze{constructor(e){super(e)}load(e,t,i,r){const s=new Ri,o=new xo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}}function to(n){Ze.call(this,n)}to.prototype=Object.assign(Object.create(Ze.prototype),{constructor:to,load:function(n,e,t,i){const r=this,s=new wi,o=new At(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(n,function(a){const c=r.parse(a);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:dt,s.wrapT=c.wrapT!==void 0?c.wrapT:dt,s.magFilter=c.magFilter!==void 0?c.magFilter:tt,s.minFilter=c.minFilter!==void 0?c.minFilter:tt,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Ai),c.mipmapCount===1&&(s.minFilter=tt),s.needsUpdate=!0,e&&e(s,c))},t,i),s}});function no(n){Ze.call(this,n)}no.prototype=Object.assign(Object.create(Ze.prototype),{constructor:no,load:function(n,e,t,i){const r=new it,s=new xo(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(n,function(o){r.image=o;const a=n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0;r.format=a?un:Mt,r.needsUpdate=!0,e!==void 0&&e(r)},t,i),r}});function mt(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(mt.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(n,e){const t=this.getUtoTmapping(n);return this.getPoint(t,e)},getPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPoint(t/n));return e},getSpacedPoints:function(n=5){const e=[];for(let t=0;t<=n;t++)e.push(this.getPointAt(t/n));return e},getLength:function(){const n=this.getLengths();return n[n.length-1]},getLengths:function(n){if(n===void 0&&(n=this.arcLengthDivisions),this.cacheArcLengths&&this.cacheArcLengths.length===n+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let t,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=n;s++)t=this.getPoint(s/n),r+=t.distanceTo(i),e.push(r),i=t;return this.cacheArcLengths=e,e},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(n,e){const t=this.getLengths();let i=0;const r=t.length;let s;e?s=e:s=n*t[r-1];let o=0,a=r-1,c;for(;o<=a;)if(i=Math.floor(o+(a-o)/2),c=t[i]-s,c<0)o=i+1;else if(c>0)a=i-1;else{a=i;break}if(i=a,t[i]===s)return i/(r-1);const l=t[i],h=t[i+1]-l,d=(s-l)/h;return(i+d)/(r-1)},getTangent:function(n,e){let i=n-1e-4,r=n+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),a=e||(s.isVector2?new V:new b);return a.copy(o).sub(s).normalize(),a},getTangentAt:function(n,e){const t=this.getUtoTmapping(n);return this.getTangent(t,e)},computeFrenetFrames:function(n,e){const t=new b,i=[],r=[],s=[],o=new b,a=new ce;for(let d=0;d<=n;d++){const f=d/n;i[d]=this.getTangentAt(f,new b),i[d].normalize()}r[0]=new b,s[0]=new b;let c=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);l<=c&&(c=l,t.set(1,0,0)),u<=c&&(c=u,t.set(0,1,0)),h<=c&&t.set(0,0,1),o.crossVectors(i[0],t).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let d=1;d<=n;d++){if(r[d]=r[d-1].clone(),s[d]=s[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const f=Math.acos(xe.clamp(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(a.makeRotationAxis(o,f))}s[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(xe.clamp(r[0].dot(r[n]),-1,1));d/=n,i[0].dot(o.crossVectors(r[0],r[n]))>0&&(d=-d);for(let f=1;f<=n;f++)r[f].applyMatrix4(a.makeRotationAxis(i[f],d*f)),s[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:s}},clone:function(){return new this.constructor().copy(this)},copy:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this},toJSON:function(){const n={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return n.arcLengthDivisions=this.arcLengthDivisions,n.type=this.type,n},fromJSON:function(n){return this.arcLengthDivisions=n.arcLengthDivisions,this}});class Gr extends mt{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new V,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Gr.prototype.isEllipseCurve=!0;class sc extends Gr{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.type="ArcCurve"}}sc.prototype.isArcCurve=!0;function oc(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let d=(o-s)/l-(a-s)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ws=new b,Jo=new oc,$o=new oc,Qo=new oc;class ac extends mt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(ws.subVectors(r[0],r[1]).add(r[0]),l=ws);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ws.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),m<1e-4&&(m=y),x<1e-4&&(x=y),Jo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,y,x),$o.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,y,x),Qo.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,y,x)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),$o.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Qo.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return i.set(Jo.calc(c),$o.calc(c),Qo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}ac.prototype.isCatmullRomCurve3=!0;function Tl(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function ex(n,e){const t=1-n;return t*t*e}function tx(n,e){return 2*(1-n)*n*e}function nx(n,e){return n*n*e}function Qi(n,e,t,i){return ex(n,e)+tx(n,t)+nx(n,i)}function ix(n,e){const t=1-n;return t*t*t*e}function rx(n,e){const t=1-n;return 3*t*t*n*e}function sx(n,e){return 3*(1-n)*n*n*e}function ox(n,e){return n*n*n*e}function Ki(n,e,t,i,r){return ix(n,e)+rx(n,t)+sx(n,i)+ox(n,r)}class vo extends mt{constructor(e=new V,t=new V,i=new V,r=new V){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new V){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ki(e,r.x,s.x,o.x,a.x),Ki(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}vo.prototype.isCubicBezierCurve=!0;class cc extends mt{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ki(e,r.x,s.x,o.x,a.x),Ki(e,r.y,s.y,o.y,a.y),Ki(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}cc.prototype.isCubicBezierCurve3=!0;class kr extends mt{constructor(e=new V,t=new V){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new V;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}kr.prototype.isLineCurve=!0;class id extends mt{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _o extends mt{constructor(e=new V,t=new V,i=new V){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qi(e,r.x,s.x,o.x),Qi(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_o.prototype.isQuadraticBezierCurve=!0;class lc extends mt{constructor(e=new b,t=new b,i=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qi(e,r.x,s.x,o.x),Qi(e,r.y,s.y,o.y),Qi(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}lc.prototype.isQuadraticBezierCurve3=!0;class bo extends mt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new V){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Tl(a,c.x,l.x,u.x,h.x),Tl(a,c.y,l.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new V().fromArray(r))}return this}}bo.prototype.isSplineCurve=!0;var La=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:ac,CubicBezierCurve:vo,CubicBezierCurve3:cc,EllipseCurve:Gr,LineCurve:kr,LineCurve3:id,QuadraticBezierCurve:_o,QuadraticBezierCurve3:lc,SplineCurve:bo});class rd extends mt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new kr(t,e))}getPoint(e){const t=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=t){const s=i[r]-t,o=this.curves[r],a=o.getLength(),c=a===0?0:1-s/a;return o.getPointAt(c)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new La[r.type]().fromJSON(r))}return this}}class Ar extends rd{constructor(e){super(),this.type="Path",this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new kr(this.currentPoint.clone(),new V(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new _o(this.currentPoint.clone(),new V(e,t),new V(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new vo(this.currentPoint.clone(),new V(e,t),new V(i,r),new V(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new bo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const l=new Gr(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fn extends Ar{constructor(e){super(e),this.uuid=xe.generateUUID(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ar().fromJSON(r))}return this}}class Nt extends me{constructor(e,t=1){super(),this.type="Light",this.color=new ne(e),this.intensity=t}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Nt.prototype.isLight=!0;class hc extends Nt{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(me.DefaultUp),this.updateMatrix(),this.groundColor=new ne(t)}copy(e){return Nt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}hc.prototype.isHemisphereLight=!0;const Al=new ce,Ll=new b,Rl=new b;class uc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new V(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ll.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ll),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),Al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sd extends uc{constructor(){super(new Ke(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=xe.RAD2DEG*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}}sd.prototype.isSpotLightShadow=!0;class dc extends Nt{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(me.DefaultUp),this.updateMatrix(),this.target=new me,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new sd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}dc.prototype.isSpotLight=!0;const Cl=new ce,Xi=new b,Ko=new b;class od extends uc{constructor(){super(new Ke(90,1,.5,500)),this._frameExtents=new V(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix;Xi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Xi),Ko.copy(i.position),Ko.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ko),i.updateMatrixWorld(),r.makeTranslation(-Xi.x,-Xi.y,-Xi.z),Cl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}od.prototype.isPointLightShadow=!0;class fc extends Nt{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new od}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}fc.prototype.isPointLight=!0;class Vr extends mn{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=me.prototype.toJSON.call(this,e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Vr.prototype.isOrthographicCamera=!0;class ad extends uc{constructor(){super(new Vr(-5,5,5,-5,.5,500))}}ad.prototype.isDirectionalLightShadow=!0;class pc extends Nt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(me.DefaultUp),this.updateMatrix(),this.target=new me,this.shadow=new ad}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}pc.prototype.isDirectionalLight=!0;class mc extends Nt{constructor(e,t){super(e,t),this.type="AmbientLight"}}mc.prototype.isAmbientLight=!0;class gc extends Nt{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}gc.prototype.isRectAreaLight=!0;class yc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*i),t.addScaledVector(o[4],1.092548*(i*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(i*s)),t.addScaledVector(o[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*i),t.addScaledVector(o[4],2*.429043*i*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*i*s),t.addScaledVector(o[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-r*r)}}yc.prototype.isSphericalHarmonics3=!0;class Wr extends Nt{constructor(e=new yc,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Wr.prototype.isLightProbe=!0;class cd extends Ze{constructor(e){super(e),this.textures={}}load(e,t,i,r){const s=this,o=new At(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=new Jy[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=new ne().setHex(e.sheen)),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(r.skinning=e.skinning),e.morphTargets!==void 0&&(r.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(r.morphNormals=e.morphNormals),e.dithering!==void 0&&(r.dithering=e.dithering),e.vertexTangents!==void 0&&(r.vertexTangents=e.vertexTangents),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(r.uniforms[s]={},o.type){case"t":r.uniforms[s].value=i(o.value);break;case"c":r.uniforms[s].value=new ne().setHex(o.value);break;case"v2":r.uniforms[s].value=new V().fromArray(o.value);break;case"v3":r.uniforms[s].value=new b().fromArray(o.value);break;case"v4":r.uniforms[s].value=new Ie().fromArray(o.value);break;case"m3":r.uniforms[s].value=new nt().fromArray(o.value);break;case"m4":r.uniforms[s].value=new ce().fromArray(o.value);break;default:r.uniforms[s].value=o.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new V().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(r.transmission=e.transmission),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),r}setTextures(e){return this.textures=e,this}}const xc={decodeText:function(n){if(typeof TextDecoder<"u")return new TextDecoder().decode(n);let e="";for(let t=0,i=n.length;t<i;t++)e+=String.fromCharCode(n[t]);try{return decodeURIComponent(escape(e))}catch{return e}},extractUrlBase:function(n){const e=n.lastIndexOf("/");return e===-1?"./":n.substr(0,e+1)}};function Lr(){le.call(this),this.type="InstancedBufferGeometry",this.instanceCount=1/0}Lr.prototype=Object.assign(Object.create(le.prototype),{constructor:Lr,isInstancedBufferGeometry:!0,copy:function(n){return le.prototype.copy.call(this,n),this.instanceCount=n.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const n=le.prototype.toJSON.call(this);return n.instanceCount=this.instanceCount,n.isInstancedBufferGeometry=!0,n}});function io(n,e,t,i){typeof t=="number"&&(i=t,t=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),ye.call(this,n,e,t),this.meshPerAttribute=i||1}io.prototype=Object.assign(Object.create(ye.prototype),{constructor:io,isInstancedBufferAttribute:!0,copy:function(n){return ye.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},toJSON:function(){const n=ye.prototype.toJSON.call(this);return n.meshPerAttribute=this.meshPerAttribute,n.isInstancedBufferAttribute=!0,n}});class ld extends Ze{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new At(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(JSON.parse(a)))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(f,m){if(t[m]!==void 0)return t[m];const x=f.interleavedBuffers[m],g=s(f,x.buffer),p=Yi(x.type,g),w=new xt(p,x.stride);return w.uuid=x.uuid,t[m]=w,w}function s(f,m){if(i[m]!==void 0)return i[m];const x=f.arrayBuffers[m],g=new Uint32Array(x).buffer;return i[m]=g,g}const o=e.isInstancedBufferGeometry?new Lr:new le,a=e.data.index;if(a!==void 0){const f=Yi(a.type,a.array);o.setIndex(new ye(f,1))}const c=e.data.attributes;for(const f in c){const m=c[f];let y;if(m.isInterleavedBufferAttribute){const x=r(e.data,m.data);y=new gn(x,m.itemSize,m.offset,m.normalized)}else{const x=Yi(m.type,m.array),g=m.isInstancedBufferAttribute?io:ye;y=new g(x,m.itemSize,m.normalized)}m.name!==void 0&&(y.name=m.name),o.setAttribute(f,y)}const l=e.data.morphAttributes;if(l)for(const f in l){const m=l[f],y=[];for(let x=0,g=m.length;x<g;x++){const p=m[x];let w;if(p.isInterleavedBufferAttribute){const _=r(e.data,p.data);w=new gn(_,p.itemSize,p.offset,p.normalized)}else{const _=Yi(p.type,p.array);w=new ye(_,p.itemSize,p.normalized)}p.name!==void 0&&(w.name=p.name),y.push(w)}o.morphAttributes[f]=y}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,m=h.length;f!==m;++f){const y=h[f];o.addGroup(y.start,y.count,y.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new b;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new _n(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class ax extends Ze{constructor(e){super(e)}load(e,t,i,r){const s=this,o=this.path===""?xc.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new At(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=l.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(l,t)},i,r)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,c,i),u=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,u),t!==void 0){let h=!1;for(const d in o)if(o[d]instanceof HTMLImageElement){h=!0;break}h===!1&&t(l)}return l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const s=new fn().fromJSON(e[i]);t[s.uuid]=s}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=new Hr().fromJSON(e[s],r);i[a.uuid]=a}return i}parseGeometries(e,t){const i={};let r;if(e!==void 0){const s=new ld;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new ut[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":c=new ut[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new ut[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new ut[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new ut[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new ut[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new ut[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new ut[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new ut[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new ut[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new ut[l.type](new La[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new ut[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new ut[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":r=[];for(let h=0,d=l.shapes.length;h<d;h++){const f=t[l.shapes[h]];r.push(f)}c=new ut[l.type](r,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":r=[];for(let h=0,d=l.shapes.length;h<d;h++){const f=t[l.shapes[h]];r.push(f)}const u=l.options.extrudePath;u!==void 0&&(l.options.extrudePath=new La[u.type]().fromJSON(u)),c=new ut[l.type](r,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=s.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),i[l.uuid]=c}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const s=new cd;s.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let u=0;u<c.materials.length;u++){const h=c.materials[u];i[h.uuid]===void 0&&(i[h.uuid]=s.parse(h)),l.push(i[h.uuid])}r[c.uuid]=l}else i[c.uuid]===void 0&&(i[c.uuid]=s.parse(c)),r[c.uuid]=i[c.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],s=Tr.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const i=this,r={};let s;function o(c){return i.manager.itemStart(c),s.load(c,function(){i.manager.itemEnd(c)},void 0,function(){i.manager.itemError(c),i.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:i.resourcePath+l;return o(u)}else return c.data?{data:Yi(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new rc(t);s=new xo(c),s.setCrossOrigin(this.crossOrigin);for(let l=0,u=e.length;l<u;l++){const h=e[l],d=h.url;if(Array.isArray(d)){r[h.uuid]=[];for(let f=0,m=d.length;f<m;f++){const y=d[f],x=a(y);x!==null&&(x instanceof HTMLImageElement?r[h.uuid].push(x):r[h.uuid].push(new wi(x.data,x.width,x.height)))}}else{const f=a(h.url);f!==null&&(r[h.uuid]=f)}}}return r}parseTextures(e,t){function i(s,o){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}const r={};if(e!==void 0)for(let s=0,o=e.length;s<o;s++){const a=e[s];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;const l=t[a.image];Array.isArray(l)?(c=new Ri(l),l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new wi(l.data,l.width,l.height):c=new it(l),l&&(c.needsUpdate=!0)),c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=i(a.mapping,cx)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=i(a.wrap[0],Pl),c.wrapT=i(a.wrap[1],Pl)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=i(a.minFilter,Dl)),a.magFilter!==void 0&&(c.magFilter=i(a.magFilter,Dl)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),r[a.uuid]=c}return r}parseObject(e,t,i,r){let s;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function a(u){if(u!==void 0){if(Array.isArray(u)){const h=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),h.push(i[m])}return h}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}let c,l;switch(e.type){case"Scene":s=new fo,e.background!==void 0&&Number.isInteger(e.background)&&(s.background=new ne(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Ur(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new zr(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new Ke(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Vr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new mc(e.color,e.intensity);break;case"DirectionalLight":s=new pc(e.color,e.intensity);break;case"PointLight":s=new fc(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new gc(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new dc(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new hc(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new Wr().fromJSON(e);break;case"SkinnedMesh":c=o(e.geometry),l=a(e.material),s=new mr(c,l),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":c=o(e.geometry),l=a(e.material),s=new Ue(c,l);break;case"InstancedMesh":c=o(e.geometry),l=a(e.material);const u=e.count,h=e.instanceMatrix;s=new Hs(c,l,u),s.instanceMatrix=new ye(new Float32Array(h.array),16);break;case"LOD":s=new Xa;break;case"Line":s=new Bt(o(e.geometry),a(e.material));break;case"LineLoop":s=new ja(o(e.geometry),a(e.material));break;case"LineSegments":s=new pt(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":s=new Mi(o(e.geometry),a(e.material));break;case"Sprite":s=new mo(a(e.material));break;case"Group":s=new Fn;break;case"Bone":s=new gr;break;default:s=new me}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let h=0;h<u.length;h++)s.add(this.parseObject(u[h],t,i,r))}if(e.animations!==void 0){const u=e.animations;for(let h=0;h<u.length;h++){const d=u[h];s.animations.push(r[d])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const u=e.levels;for(let h=0;h<u.length;h++){const d=u[h],f=s.getObjectByProperty("uuid",d.object);f!==void 0&&s.addLevel(f,d.distance)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const cx={UVMapping:ro,CubeReflectionMapping:Dr,CubeRefractionMapping:Ir,EquirectangularReflectionMapping:Bs,EquirectangularRefractionMapping:Ns,CubeUVReflectionMapping:Ti,CubeUVRefractionMapping:Fr},Pl={RepeatWrapping:er,ClampToEdgeWrapping:dt,MirroredRepeatWrapping:tr},Dl={NearestFilter:et,NearestMipmapNearestFilter:Os,NearestMipmapLinearFilter:zs,LinearFilter:tt,LinearMipmapNearestFilter:za,LinearMipmapLinearFilter:Ai};function Ra(n){typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ze.call(this,n),this.options={premultiplyAlpha:"none"}}Ra.prototype=Object.assign(Object.create(Ze.prototype),{constructor:Ra,isImageBitmapLoader:!0,setOptions:function(e){return this.options=e,this},load:function(n,e,t,i){n===void 0&&(n=""),this.path!==void 0&&(n=this.path+n),n=this.manager.resolveURL(n);const r=this,s=kn.get(n);if(s!==void 0)return r.manager.itemStart(n),setTimeout(function(){e&&e(s),r.manager.itemEnd(n)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(n,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(a){kn.add(n,a),e&&e(a),r.manager.itemEnd(n)}).catch(function(a){i&&i(a),r.manager.itemError(n),r.manager.itemEnd(n)}),r.manager.itemStart(n)}});class hd{constructor(){this.type="ShapePath",this.color=new ne,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ar,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(p){const w=[];for(let _=0,S=p.length;_<S;_++){const v=p[_],A=new fn;A.curves=v.curves,w.push(A)}return w}function r(p,w){const _=w.length;let S=!1;for(let v=_-1,A=0;A<_;v=A++){let P=w[v],L=w[A],D=L.x-P.x,I=L.y-P.y;if(Math.abs(I)>Number.EPSILON){if(I<0&&(P=w[A],D=-D,L=w[v],I=-I),p.y<P.y||p.y>L.y)continue;if(p.y===P.y){if(p.x===P.x)return!0}else{const O=I*(p.x-P.x)-D*(p.y-P.y);if(O===0)return!0;if(O<0)continue;S=!S}}else{if(p.y!==P.y)continue;if(L.x<=p.x&&p.x<=P.x||P.x<=p.x&&p.x<=L.x)return!0}}return S}const s=Qt.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return i(o);let a,c,l;const u=[];if(o.length===1)return c=o[0],l=new fn,l.curves=c.curves,u.push(l),u;let h=!s(o[0].getPoints());h=e?!h:h;const d=[],f=[];let m=[],y=0,x;f[y]=void 0,m[y]=[];for(let p=0,w=o.length;p<w;p++)c=o[p],x=c.getPoints(),a=s(x),a=e?!a:a,a?(!h&&f[y]&&y++,f[y]={s:new fn,p:x},f[y].s.curves=c.curves,h&&y++,m[y]=[]):m[y].push({h:c,p:x[0]});if(!f[0])return i(o);if(f.length>1){let p=!1;const w=[];for(let _=0,S=f.length;_<S;_++)d[_]=[];for(let _=0,S=f.length;_<S;_++){const v=m[_];for(let A=0;A<v.length;A++){const P=v[A];let L=!0;for(let D=0;D<f.length;D++)r(P.p,f[D].p)&&(_!==D&&w.push({froms:_,tos:D,hole:A}),L?(L=!1,d[D].push(P)):p=!0);L&&d[_].push(P)}}w.length>0&&(p||(m=d))}let g;for(let p=0,w=f.length;p<w;p++){l=f[p].s,u.push(l),g=m[p];for(let _=0,S=g.length;_<S;_++)l.holes.push(g[_].h)}return u}}class vc{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=lx(e,t,this.data);for(let s=0,o=r.length;s<o;s++)Array.prototype.push.apply(i,r[s].toShapes());return i}}function lx(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<i.length;l++){const u=i[l];if(u===`
`)a=0,c-=s;else{const h=hx(u,r,a,c,t);a+=h.offsetX,o.push(h.path)}}return o}function hx(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new hd;let a,c,l,u,h,d,f,m;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,g=y.length;x<g;)switch(y[x++]){case"m":a=y[x++]*e+t,c=y[x++]*e+i,o.moveTo(a,c);break;case"l":a=y[x++]*e+t,c=y[x++]*e+i,o.lineTo(a,c);break;case"q":l=y[x++]*e+t,u=y[x++]*e+i,h=y[x++]*e+t,d=y[x++]*e+i,o.quadraticCurveTo(h,d,l,u);break;case"b":l=y[x++]*e+t,u=y[x++]*e+i,h=y[x++]*e+t,d=y[x++]*e+i,f=y[x++]*e+t,m=y[x++]*e+i,o.bezierCurveTo(h,d,f,m,l,u);break}}return{offsetX:s.ha*e,path:o}}vc.prototype.isFont=!0;class ux extends Ze{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new At(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){let c;try{c=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}const l=s.parse(c);t&&t(l)},i,r)}parse(e){return new vc(e)}}let Ms;const _c={getContext:function(){return Ms===void 0&&(Ms=new(window.AudioContext||window.webkitAudioContext)),Ms},setContext:function(n){Ms=n}};class ud extends Ze{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new At(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const c=a.slice(0);_c.getContext().decodeAudioData(c,function(u){t(u)})}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}}class dd extends Wr{constructor(e,t,i=1){super(void 0,i);const r=new ne().set(e),s=new ne().set(t),o=new b(r.r,r.g,r.b),a=new b(s.r,s.g,s.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}dd.prototype.isHemisphereLightProbe=!0;class fd extends Wr{constructor(e,t=1){super(void 0,t);const i=new ne().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}fd.prototype.isAmbientLightProbe=!0;const Il=new ce,Fl=new ce;class dx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ke,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ke,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const r=e.projectionMatrix.clone(),s=t.eyeSep/2,o=s*t.near/t.focus,a=t.near*Math.tan(xe.DEG2RAD*t.fov*.5)/t.zoom;let c,l;Fl.elements[12]=-s,Il.elements[12]=s,c=-a*t.aspect+o,l=a*t.aspect+o,r.elements[0]=2*t.near/(l-c),r.elements[8]=(l+c)/(l-c),this.cameraL.projectionMatrix.copy(r),c=-a*t.aspect-o,l=a*t.aspect-o,r.elements[0]=2*t.near/(l-c),r.elements[8]=(l+c)/(l-c),this.cameraR.projectionMatrix.copy(r)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Fl),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Il)}}class pd{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bl(){return(typeof performance>"u"?Date:performance).now()}const En=new b,Nl=new ot,fx=new b,Tn=new b;class px extends me{constructor(){super(),this.type="AudioListener",this.context=_c.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new pd}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(En,Nl,fx),Tn.set(0,0,-1).applyQuaternion(Nl),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(En.x,r),t.positionY.linearRampToValueAtTime(En.y,r),t.positionZ.linearRampToValueAtTime(En.z,r),t.forwardX.linearRampToValueAtTime(Tn.x,r),t.forwardY.linearRampToValueAtTime(Tn.y,r),t.forwardZ.linearRampToValueAtTime(Tn.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(En.x,En.y,En.z),t.setOrientation(Tn.x,Tn.y,Tn.z,i.x,i.y,i.z)}}class bc extends me{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const An=new b,Ol=new ot,mx=new b,Ln=new b;class gx extends bc{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(An,Ol,mx),Ln.set(0,0,1).applyQuaternion(Ol);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(An.x,i),t.positionY.linearRampToValueAtTime(An.y,i),t.positionZ.linearRampToValueAtTime(An.z,i),t.orientationX.linearRampToValueAtTime(Ln.x,i),t.orientationY.linearRampToValueAtTime(Ln.y,i),t.orientationZ.linearRampToValueAtTime(Ln.z,i)}else t.setPosition(An.x,An.y,An.z),t.setOrientation(Ln.x,Ln.y,Ln.z)}}class md{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class gd{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)i[s+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(i,r,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let s=i,o=r;s!==o;++s)t[s]=t[r+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[i+o]}_slerp(e,t,i,r){ot.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,s){const o=this._workIndex*s;ot.multiplyQuaternionsFlat(e,o,e,t,e,i),ot.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,i,r,s){const o=1-r;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*r}}_lerpAdditive(e,t,i,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[i+o]*r}}}const wc="\\[\\]\\.:\\/",yx=new RegExp("["+wc+"]","g"),Mc="[^"+wc+"]",xx="[^"+wc.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",Mc),_x=/(WCOD+)?/.source.replace("WCOD",xx),bx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),Mx=new RegExp("^"+vx+_x+bx+wx+"$"),Sx=["material","materials","bones"];function yd(n,e,t){const i=t||ht.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}Object.assign(yd.prototype,{getValue:function(n,e){this.bind();const t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)},setValue:function(n,e){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(n,e)},bind:function(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()},unbind:function(){const n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}});function ht(n,e,t){this.path=e,this.parsedPath=t||ht.parseTrackName(e),this.node=ht.findNode(n,this.parsedPath.nodeName)||n,this.rootNode=n}Object.assign(ht,{Composite:yd,create:function(n,e,t){return n&&n.isAnimationObjectGroup?new ht.Composite(n,e,t):new ht(n,e,t)},sanitizeNodeName:function(n){return n.replace(/\s/g,"_").replace(yx,"")},parseTrackName:function(n){const e=Mx.exec(n);if(!e)throw new Error("PropertyBinding: Cannot parse trackName: "+n);const t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=t.nodeName.substring(i+1);Sx.indexOf(r)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=r)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+n);return t},findNode:function(n,e){if(!e||e===""||e==="."||e===-1||e===n.name||e===n.uuid)return n;if(n.skeleton){const t=n.skeleton.getBoneByName(e);if(t!==void 0)return t}if(n.children){const t=function(r){for(let s=0;s<r.length;s++){const o=r[s];if(o.name===e||o.uuid===e)return o;const a=t(o.children);if(a)return a}return null},i=t(n.children);if(i)return i}return null}});Object.assign(ht.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(e,t){e[t]=this.node[this.propertyName]},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]},function(e,t){e[t]=this.resolvedProperty[this.propertyIndex]},function(e,t){this.resolvedProperty.toArray(e,t)}],SetterByBindingTypeAndVersioning:[[function(e,t){this.targetObject[this.propertyName]=e[t]},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0},function(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty[this.propertyIndex]=e[t]},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}],[function(e,t){this.resolvedProperty.fromArray(e,t)},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0},function(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(e,t){this.bind(),this.getValue(e,t)},setValue:function(e,t){this.bind(),this.setValue(e,t)},bind:function(){let n=this.node;const e=this.parsedPath,t=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(n||(n=ht.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=n),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!n){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(t){let c=e.objectIndex;switch(t){case"materials":if(!n.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!n.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}n=n.material.materials;break;case"bones":if(!n.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}n=n.skeleton.bones;for(let l=0;l<n.length;l++)if(n[l].name===c){c=l;break}break;default:if(n[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}n=n[t]}if(c!==void 0){if(n[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,n);return}n=n[c]}}const s=n[i];if(s===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",n);return}let o=this.Versioning.None;this.targetObject=n,n.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:n.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!n.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(n.geometry.isBufferGeometry){if(!n.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}n.morphTargetDictionary[r]!==void 0&&(r=n.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}a=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(a=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(ht.prototype,{_getValue_unbound:ht.prototype.getValue,_setValue_unbound:ht.prototype.setValue});class xd{constructor(){this.uuid=xe.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,s=this._bindings,o=s.length;let a,c=e.length,l=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let y=0,x=o;y!==x;++y)s[y].push(new ht(d,i[y],r[y]))}else if(m<l){a=e[m];const y=--l,x=e[y];t[x.uuid]=m,e[m]=x,t[f]=y,e[y]=d;for(let g=0,p=o;g!==p;++g){const w=s[g],_=w[y];let S=w[m];w[m]=_,S===void 0&&(S=new ht(d,i[g],r[g])),w[y]=S}}else e[m]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,u=t[l];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[l]=h,e[h]=c;for(let f=0,m=r;f!==m;++f){const y=i[f],x=y[h],g=y[u];y[u]=x,y[h]=g}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let s=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],u=l.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],m=--o,y=e[m];t[f.uuid]=h,e[h]=f,t[y.uuid]=d,e[d]=y,e.pop();for(let x=0,g=r;x!==g;++x){const p=i[x],w=p[d],_=p[m];p[h]=w,p[d]=_,p.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let m=0,y=r;m!==y;++m){const x=i[m];x[h]=x[d],x.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const s=this._bindings;if(r!==void 0)return s[r];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,u=this.nCachedObjects_,h=new Array(l);r=s.length,i[e]=r,o.push(e),a.push(t),s.push(h);for(let d=u,f=c.length;d!==f;++d){const m=c[d];h[d]=new ht(m,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=i,o[i]=c,o.pop(),s[i]=s[a],s.pop(),r[i]=r[a],r.pop()}}}xd.prototype.isAnimationObjectGroup=!0;class Ex{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Dn,endingEnd:Dn};for(let l=0;l!==o;++l){const u=s[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Su,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*i;if(c<0||i===0)return;this._startTime=null,t=i*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ua:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case so:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,s=this._loopCount;const o=i===Eu;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(i===Mu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=In,r.endingEnd=In):(e?r.endingStart=this.zeroSlopeAtStart?In:Dn:r.endingStart=or,t?r.endingEnd=this.zeroSlopeAtEnd?In:Dn:r.endingEnd=or)}_scheduleFading(e,t,i){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=i,this}}class vd extends en{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let m=u[f];if(m!==void 0)o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;m=new gd(ht.create(i,f,y),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,s=i.path,o=this._bindingsByRootAndName,a=o[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Mr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Tr.findByName(r,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=so),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===i)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const u=new Ex(this,o,t,i);return this._bindAction(u,l),this._addInactiveAction(u,a,s),u}existingAction(e,t){const i=t||this._root,r=i.uuid,s=typeof e=="string"?Tr.findByName(i,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(r,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,s=r[i];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}vd.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class wo{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new wo(this.value.clone===void 0?this.value:this.value.clone())}}function Ca(n,e,t){xt.call(this,n,e),this.meshPerAttribute=t||1}Ca.prototype=Object.assign(Object.create(xt.prototype),{constructor:Ca,isInstancedInterleavedBuffer:!0,copy:function(n){return xt.prototype.copy.call(this,n),this.meshPerAttribute=n.meshPerAttribute,this},clone:function(n){const e=xt.prototype.clone.call(this,n);return e.meshPerAttribute=this.meshPerAttribute,e},toJSON:function(n){const e=xt.prototype.toJSON.call(this,n);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}});function Sc(n,e,t,i,r){this.buffer=n,this.type=e,this.itemSize=t,this.elementSize=i,this.count=r,this.version=0}Object.defineProperty(Sc.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});Object.assign(Sc.prototype,{isGLBufferAttribute:!0,setBuffer:function(n){return this.buffer=n,this},setType:function(n,e){return this.type=n,this.elementSize=e,this},setItemSize:function(n){return this.itemSize=n,this},setCount:function(n){return this.count=n,this}});function Ec(n,e,t=0,i=1/0){this.ray=new bn(n,e),this.near=t,this.far=i,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function zl(n,e){return n.distance-e.distance}function Pa(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Pa(r[s],e,t,!0)}}Object.assign(Ec.prototype,{set:function(n,e){this.ray.set(n,e)},setFromCamera:function(n,e){e&&e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(n.x,n.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e&&e.isOrthographicCamera?(this.ray.origin.set(n.x,n.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)},intersectObject:function(n,e=!1,t=[]){return Pa(n,this,t,e),t.sort(zl),t},intersectObjects:function(n,e=!1,t=[]){for(let i=0,r=n.length;i<r;i++)Pa(n[i],this,t,e);return t.sort(zl),t}});class Tx{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(xe.clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ax{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}const Ul=new V;class Ii{constructor(e=new V(1/0,1/0),t=new V(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ul.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new V),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new V),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new V),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ul.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Ii.prototype.isBox2=!0;const Hl=new b,Ss=new b;class _d{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new b),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new b),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new b),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Hl.subVectors(e,this.start),Ss.subVectors(this.end,this.start);const i=Ss.dot(Ss);let s=Ss.dot(Hl)/i;return t&&(s=xe.clamp(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return i===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),i=new b),this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Rr(n){me.call(this),this.material=n,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Rr.prototype=Object.create(me.prototype);Rr.prototype.constructor=Rr;Rr.prototype.isImmediateRenderObject=!0;const Gl=new b;class Lx extends me{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const i=new le,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,u=a/c*Math.PI*2;r.push(Math.cos(l),Math.sin(l),1,Math.cos(u),Math.sin(u),1)}i.setAttribute("position",new ie(r,3));const s=new at({fog:!1,toneMapped:!1});this.cone=new pt(i,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Gl.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Gl),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const hn=new b,Es=new ce,ea=new ce;class bd extends pt{constructor(e){const t=wd(e),i=new le,r=[],s=[],o=new ne(0,0,1),a=new ne(0,1,0);for(let l=0;l<t.length;l++){const u=t[l];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}i.setAttribute("position",new ie(r,3)),i.setAttribute("color",new ie(s,3));const c=new at({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");ea.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Es.multiplyMatrices(ea,a.matrixWorld),hn.setFromMatrixPosition(Es),r.setXYZ(o,hn.x,hn.y,hn.z),Es.multiplyMatrices(ea,a.parent.matrixWorld),hn.setFromMatrixPosition(Es),r.setXYZ(o+1,hn.x,hn.y,hn.z),o+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function wd(n){const e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,wd(n.children[t]));return e}class Rx extends Ue{constructor(e,t,i){const r=new wr(t,4,2),s=new tn({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Cx=new b,kl=new ne,Vl=new ne;class Px extends me{constructor(e,t,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;const r=new _r(t);r.rotateY(Math.PI*.5),this.material=new tn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),o=new Float32Array(s.count*3);r.setAttribute("color",new ye(o,3)),this.add(new Ue(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");kl.copy(this.light.color),Vl.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const s=i<r/2?kl:Vl;t.setXYZ(i,s.r,s.g,s.b)}t.needsUpdate=!0}e.lookAt(Cx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Md extends pt{constructor(e=10,t=10,i=4473924,r=8947848){i=new ne(i),r=new ne(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const y=d===s?i:r;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}const u=new le;u.setAttribute("position",new ie(c,3)),u.setAttribute("color",new ie(l,3));const h=new at({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}class Dx extends pt{constructor(e=10,t=16,i=8,r=64,s=4473924,o=8947848){s=new ne(s),o=new ne(o);const a=[],c=[];for(let h=0;h<=t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,m);const y=h&1?s:o;c.push(y.r,y.g,y.b),c.push(y.r,y.g,y.b)}for(let h=0;h<=i;h++){const d=h&1?s:o,f=e-e/i*h;for(let m=0;m<r;m++){let y=m/r*(Math.PI*2),x=Math.sin(y)*f,g=Math.cos(y)*f;a.push(x,0,g),c.push(d.r,d.g,d.b),y=(m+1)/r*(Math.PI*2),x=Math.sin(y)*f,g=Math.cos(y)*f,a.push(x,0,g),c.push(d.r,d.g,d.b)}}const l=new le;l.setAttribute("position",new ie(a,3)),l.setAttribute("color",new ie(c,3));const u=new at({vertexColors:!0,toneMapped:!1});super(l,u),this.type="PolarGridHelper"}}const Wl=new b,Ts=new b,ql=new b;class Ix extends me{constructor(e,t,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,t===void 0&&(t=1);let r=new le;r.setAttribute("position",new ie([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new at({fog:!1,toneMapped:!1});this.lightPlane=new Bt(r,s),this.add(this.lightPlane),r=new le,r.setAttribute("position",new ie([0,0,0,0,0,1],3)),this.targetLine=new Bt(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Wl.setFromMatrixPosition(this.light.matrixWorld),Ts.setFromMatrixPosition(this.light.target.matrixWorld),ql.subVectors(Ts,Wl),this.lightPlane.lookAt(Ts),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ts),this.targetLine.scale.z=ql.length()}}const As=new b,Ye=new mn;class Fx extends pt{constructor(e){const t=new le,i=new at({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={},a=new ne(16755200),c=new ne(16711680),l=new ne(43775),u=new ne(16777215),h=new ne(3355443);d("n1","n2",a),d("n2","n4",a),d("n4","n3",a),d("n3","n1",a),d("f1","f2",a),d("f2","f4",a),d("f4","f3",a),d("f3","f1",a),d("n1","f1",a),d("n2","f2",a),d("n3","f3",a),d("n4","f4",a),d("p","n1",c),d("p","n2",c),d("p","n3",c),d("p","n4",c),d("u1","u2",l),d("u2","u3",l),d("u3","u1",l),d("c","t",u),d("p","c",h),d("cn1","cn2",h),d("cn3","cn4",h),d("cf1","cf2",h),d("cf3","cf4",h);function d(m,y,x){f(m,x),f(y,x)}function f(m,y){r.push(0,0,0),s.push(y.r,y.g,y.b),o[m]===void 0&&(o[m]=[]),o[m].push(r.length/3-1)}t.setAttribute("position",new ie(r,3)),t.setAttribute("color",new ie(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;Ye.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Je("c",t,e,Ye,0,0,-1),Je("t",t,e,Ye,0,0,1),Je("n1",t,e,Ye,-i,-r,-1),Je("n2",t,e,Ye,i,-r,-1),Je("n3",t,e,Ye,-i,r,-1),Je("n4",t,e,Ye,i,r,-1),Je("f1",t,e,Ye,-i,-r,1),Je("f2",t,e,Ye,i,-r,1),Je("f3",t,e,Ye,-i,r,1),Je("f4",t,e,Ye,i,r,1),Je("u1",t,e,Ye,i*.7,r*1.1,-1),Je("u2",t,e,Ye,-i*.7,r*1.1,-1),Je("u3",t,e,Ye,0,r*2,-1),Je("cf1",t,e,Ye,-i,0,1),Je("cf2",t,e,Ye,i,0,1),Je("cf3",t,e,Ye,0,-r,1),Je("cf4",t,e,Ye,0,r,1),Je("cn1",t,e,Ye,-i,0,-1),Je("cn2",t,e,Ye,i,0,-1),Je("cn3",t,e,Ye,0,-r,-1),Je("cn4",t,e,Ye,0,r,-1),e.getAttribute("position").needsUpdate=!0}}function Je(n,e,t,i,r,s,o){As.set(r,s,o).unproject(i);const a=e[n];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],As.x,As.y,As.z)}}const Ls=new _t;class Sd extends pt{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new le;s.setIndex(new ye(i,1)),s.setAttribute("position",new ye(r,3)),super(s,new at({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ls.setFromObject(this.object),Ls.isEmpty())return;const t=Ls.min,i=Ls.max,r=this.geometry.attributes.position,s=r.array;s[0]=i.x,s[1]=i.y,s[2]=i.z,s[3]=t.x,s[4]=i.y,s[5]=i.z,s[6]=t.x,s[7]=t.y,s[8]=i.z,s[9]=i.x,s[10]=t.y,s[11]=i.z,s[12]=i.x,s[13]=i.y,s[14]=t.z,s[15]=t.x,s[16]=i.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=i.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return pt.prototype.copy.call(this,e),this.object=e.object,this}}class Bx extends pt{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new le;s.setIndex(new ye(i,1)),s.setAttribute("position",new ie(r,3)),super(s,new at({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class Nx extends Bt{constructor(e,t=1,i=16776960){const r=i,s=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new le;o.setAttribute("position",new ie(s,3)),o.computeBoundingSphere(),super(o,new at({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new le;c.setAttribute("position",new ie(a,3)),c.computeBoundingSphere(),this.add(new Ue(c,new tn({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?Qe:Ei,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const Xl=new b;let Rs,ta;class Ox extends me{constructor(e=new b(0,0,1),t=new b(0,0,0),i=1,r=16776960,s=i*.2,o=s*.2){super(),this.type="ArrowHelper",Rs===void 0&&(Rs=new le,Rs.setAttribute("position",new ie([0,0,0,0,1,0],3)),ta=new Si(0,.5,1,5,1),ta.translate(0,-.5,0)),this.position.copy(t),this.line=new Bt(Rs,new at({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ue(ta,new tn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Xl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Xl,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class Ed extends pt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new le;r.setAttribute("position",new ie(t,3)),r.setAttribute("color",new ie(i,3));const s=new at({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}}const Td=new Float32Array(1),zx=new Int32Array(Td.buffer),Ux={toHalfFloat:function(n){Td[0]=n;const e=zx[0];let t=e>>16&32768,i=e>>12&2047;const r=e>>23&255;return r<103?t:r>142?(t|=31744,t|=(r==255?0:1)&&e&8388607,t):r<113?(i|=2048,t|=(i>>114-r)+(i>>113-r&1),t):(t|=r-112<<10|i>>1,t+=i&1,t)}},vi=4,pn=8,Ut=Math.pow(2,pn),Ad=[.125,.215,.35,.446,.526,.582],Ld=pn-vi+1+Ad.length,fi=20,Ht={[ft]:0,[Br]:1,[ao]:2,[Ha]:3,[Ga]:4,[ka]:5,[oo]:6},Rn=new tn({side:Qe,depthWrite:!1,depthTest:!1}),Hx=new Ue(new Hn,Rn),na=new Vr,{_lodPlanes:ji,_sizeLods:jl,_sigmas:Cs}=Vx(),Yl=new ne;let ia=null;const Cn=(1+Math.sqrt(5))/2,pi=1/Cn,Zl=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Cn,pi),new b(0,Cn,-pi),new b(pi,0,Cn),new b(-pi,0,Cn),new b(Cn,pi,0),new b(-Cn,pi,0)];function Jl(n){const e=Math.max(n.r,n.g,n.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return n.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class Gx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Wx(fi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ia=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Kl(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Ql(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<ji.length;e++)ji[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ia),e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e){ia=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:et,minFilter:et,generateMipmaps:!1,type:Li,format:Hh,encoding:kx(e)?e.encoding:ao,depthBuffer:!1},i=$l(t);return i.depthBuffer=!e,this._pingPongRenderTarget=$l(t),i}_compileMaterial(e){const t=new Ue(ji[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,i,r){const a=new Ke(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.outputEncoding,f=u.toneMapping;u.getClearColor(Yl),u.toneMapping=Bn,u.outputEncoding=ft,u.autoClear=!1;let m=!1;const y=e.background;if(y){if(y.isColor){Rn.color.copy(y).convertSRGBToLinear(),e.background=null;const x=Jl(Rn.color);Rn.opacity=x,m=!0}}else{Rn.color.copy(Yl).convertSRGBToLinear();const x=Jl(Rn.color);Rn.opacity=x,m=!0}for(let x=0;x<6;x++){const g=x%3;g==0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):g==1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x])),Ps(r,g*Ut,x>2?Ut:0,Ut,Ut),u.setRenderTarget(r),m&&u.render(Hx,a),u.render(e,a)}u.toneMapping=f,u.outputEncoding=d,u.autoClear=h}_textureToCubeUV(e,t){const i=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Kl()):this._equirectShader==null&&(this._equirectShader=Ql());const r=e.isCubeTexture?this._cubemapShader:this._equirectShader,s=new Ue(ji[0],r),o=r.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Ht[e.encoding],o.outputEncoding.value=Ht[t.texture.encoding],Ps(t,0,0,3*Ut,2*Ut),i.setRenderTarget(t),i.render(s,na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<Ld;r++){const s=Math.sqrt(Cs[r]*Cs[r]-Cs[r-1]*Cs[r-1]),o=Zl[(r-1)%Zl.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ue(ji[r],l),d=l.uniforms,f=jl[i]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fi-1),y=s/m,x=isFinite(s)?1+Math.floor(u*y):fi;x>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${fi}`);const g=[];let p=0;for(let v=0;v<fi;++v){const A=v/y,P=Math.exp(-A*A/2);g.push(P),v==0?p+=P:v<x&&(p+=2*P)}for(let v=0;v<g.length;v++)g[v]=g[v]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=m,d.mipInt.value=pn-i,d.inputEncoding.value=Ht[e.texture.encoding],d.outputEncoding.value=Ht[e.texture.encoding];const w=jl[r],_=3*Math.max(0,Ut-2*w),S=(r===0?0:2*Ut)+2*w*(r>pn-vi?r-pn+vi:0);Ps(t,_,S,3*w,2*w),c.setRenderTarget(t),c.render(h,na)}}function kx(n){return n===void 0||n.type!==Li?!1:n.encoding===ft||n.encoding===Br||n.encoding===oo}function Vx(){const n=[],e=[],t=[];let i=pn;for(let r=0;r<Ld;r++){const s=Math.pow(2,i);e.push(s);let o=1/s;r>pn-vi?o=Ad[r-pn+vi-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),c=-a/2,l=1+a/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,m=2,y=1,x=new Float32Array(f*d*h),g=new Float32Array(m*d*h),p=new Float32Array(y*d*h);for(let _=0;_<h;_++){const S=_%3*2/3-1,v=_>2?0:-1,A=[S,v,0,S+2/3,v,0,S+2/3,v+1,0,S,v,0,S+2/3,v+1,0,S,v+1,0];x.set(A,f*d*_),g.set(u,m*d*_);const P=[_,_,_,_,_,_];p.set(P,y*d*_)}const w=new le;w.setAttribute("position",new ye(x,f)),w.setAttribute("uv",new ye(g,m)),w.setAttribute("faceIndex",new ye(p,y)),n.push(w),i>vi&&i--}return{_lodPlanes:n,_sizeLods:e,_sigmas:t}}function $l(n){const e=new $t(3*Ut,3*Ut,n);return e.texture.mapping=Ti,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Wx(n){const e=new Float32Array(n),t=new b(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Ht[ft]},outputEncoding:{value:Ht[ft]}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Ac()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Ql(){const n=new V(1,1);return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:n},inputEncoding:{value:Ht[ft]},outputEncoding:{value:Ht[ft]}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Ac()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Kl(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Ht[ft]},outputEncoding:{value:Ht[ft]}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Ac()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ac(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}const qx=0,Xx=1,jx=0,Yx=1,Zx=2;function Jx(n){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),n}function $x(n=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),n.isMultiMaterial=!0,n.materials=n,n.clone=function(){return n.slice()},n}function Qx(n,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Mi(n,e)}function Kx(n){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new mo(n)}function ev(n,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Mi(n,e)}function tv(n){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Xn(n)}function nv(n){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Xn(n)}function iv(n){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Xn(n)}function rv(n,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new b(n,e,t)}function sv(n,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new ye(n,e).setUsage(On)}function ov(n,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new ar(n,e)}function av(n,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new cr(n,e)}function cv(n,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new lr(n,e)}function lv(n,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new hr(n,e)}function hv(n,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new zn(n,e)}function uv(n,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new ur(n,e)}function dv(n,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new Un(n,e)}function fv(n,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new ie(n,e)}function pv(n,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new fr(n,e)}mt.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(mt.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};Ar.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};function mv(n){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Ed(n)}function gv(n,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Sd(n,e)}function yv(n,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new pt(new Za(n.geometry),new at({color:e!==void 0?e:16777215}))}Md.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};bd.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function xv(n,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new pt(new Ja(n.geometry),new at({color:e!==void 0?e:16777215}))}Ze.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),xc.extractUrlBase(n)};Ze.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function vv(n){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new At(n)}function _v(n){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new to(n)}Ii.prototype.center=function(n){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(n)};Ii.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ii.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Ii.prototype.size=function(n){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(n)};_t.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};_t.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};_t.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};_t.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};_t.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};_n.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Or.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};_d.prototype.center=function(n){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(n)};xe.random16=function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()};xe.nearestPowerOfTwo=function(n){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),xe.floorPowerOfTwo(n)};xe.nextPowerOfTwo=function(n){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),xe.ceilPowerOfTwo(n)};nt.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};nt.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};nt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};nt.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};nt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};nt.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};ce.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};ce.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)};ce.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};ce.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ce.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};ce.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};ce.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};ce.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};ce.prototype.makeFrustum=function(n,e,t,i,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,r,s)};ce.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};It.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};ot.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};ot.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};bn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};bn.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};bn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};$e.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};$e.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};$e.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};$e.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};$e.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};$e.barycoordFromPoint=function(n,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),$e.getBarycoord(n,e,t,i,r)};$e.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),$e.getNormal(n,e,t,i)};fn.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};fn.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Kt(this,n)};fn.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new br(this,n)};V.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};V.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};V.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};b.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};b.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};b.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};b.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};b.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};b.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ie.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};Ie.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};me.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};me.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};me.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};me.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};me.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(me.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ue.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ue.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Tu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Xa.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Hr.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});mr.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(mt.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(n){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=n}});Ke.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(Nt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(ye.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===On},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(On)}}});ye.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?On:Nr),this};ye.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ye.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};le.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};le.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new ye(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};le.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};le.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};le.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};le.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};le.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(le.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Lr.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(n){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=n}}});Object.defineProperties(Ec.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(n){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=n}}});Object.defineProperties(xt.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===On},set:function(n){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(n)}}});xt.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?On:Nr),this};xt.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Kt.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Kt.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Kt.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};fo.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(wo.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(Ve.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ne}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ba}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(yo.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(vn.prototype,{transparency:{get:function(){return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission},set:function(n){console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."),this.transmission=n}}});Object.defineProperties(vt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});Fe.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};Fe.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};Fe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Fe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Fe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Fe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Fe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Fe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Fe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Fe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Fe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Fe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Fe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Fe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Fe.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};Fe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Fe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Fe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Fe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Fe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Fe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Fe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Fe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Fe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Fe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Fe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?Br:ft}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Wu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function bv(n,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new lo(n,t)}Object.defineProperties($t.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});Object.defineProperties(bc.prototype,{load:{value:function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new ud().load(n,function(i){e.setBuffer(i)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});md.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};co.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};co.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Wn.crossOrigin=void 0;Wn.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new no;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Wn.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new nd;r.setCrossOrigin(this.crossOrigin);const s=r.load(n,t,void 0,i);return e&&(s.mapping=e),s};Wn.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Wn.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function wv(){console.error("THREE.CanvasRenderer has been removed")}function Mv(){console.error("THREE.JSONLoader has been removed.")}const Sv={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function Ev(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);const Tv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Rh,AddEquation:Pn,AddOperation:Eh,AdditiveAnimationBlendMode:Ua,AdditiveBlending:aa,AlphaFormat:Oh,AlwaysDepth:xh,AlwaysStencilFunc:Pu,AmbientLight:mc,AmbientLightProbe:fd,AnimationClip:Tr,AnimationLoader:Ky,AnimationMixer:vd,AnimationObjectGroup:xd,AnimationUtils:ke,ArcCurve:sc,ArrayCamera:Us,ArrowHelper:Ox,Audio:bc,AudioAnalyser:md,AudioContext:_c,AudioListener:px,AudioLoader:ud,AxesHelper:Ed,AxisHelper:mv,BackSide:Qe,BasicDepthPacking:Lu,BasicShadowMap:zd,BinaryTextureLoader:_v,Bone:gr,BooleanKeyframeTrack:jn,BoundingBoxHelper:gv,Box2:Ii,Box3:_t,Box3Helper:Bx,BoxBufferGeometry:Hn,BoxGeometry:Hn,BoxHelper:Sd,BufferAttribute:ye,BufferGeometry:le,BufferGeometryLoader:ld,ByteType:Ph,Cache:kn,Camera:mn,CameraHelper:Fx,CanvasRenderer:wv,CanvasTexture:Ju,CatmullRomCurve3:ac,CineonToneMapping:Lh,CircleBufferGeometry:Gs,CircleGeometry:Gs,ClampToEdgeWrapping:dt,Clock:pd,Color:ne,ColorKeyframeTrack:ic,CompressedTexture:Ya,CompressedTextureLoader:Aa,ConeBufferGeometry:ks,ConeGeometry:ks,CubeCamera:co,CubeReflectionMapping:Dr,CubeRefractionMapping:Ir,CubeTexture:Ri,CubeTextureLoader:nd,CubeUVReflectionMapping:Ti,CubeUVRefractionMapping:Fr,CubicBezierCurve:vo,CubicBezierCurve3:cc,CubicInterpolant:Qs,CullFaceBack:oa,CullFaceFront:ih,CullFaceFrontBack:Od,CullFaceNone:nh,Curve:mt,CurvePath:rd,CustomBlending:sh,CustomToneMapping:Ch,CylinderBufferGeometry:Si,CylinderGeometry:Si,Cylindrical:Ax,DataTexture:wi,DataTexture2DArray:Wa,DataTexture3D:qa,DataTextureLoader:to,DataUtils:Ux,DecrementStencilOp:Zd,DecrementWrapStencilOp:$d,DefaultLoadingManager:td,DepthFormat:Nn,DepthStencilFormat:_i,DepthTexture:$u,DirectionalLight:pc,DirectionalLightHelper:Ix,DiscreteInterpolant:Ks,DodecahedronBufferGeometry:Vs,DodecahedronGeometry:Vs,DoubleSide:Cr,DstAlphaFactor:dh,DstColorFactor:ph,DynamicBufferAttribute:sv,DynamicCopyUsage:df,DynamicDrawUsage:On,DynamicReadUsage:lf,EdgesGeometry:Za,EdgesHelper:yv,EllipseCurve:Gr,EqualDepth:_h,EqualStencilFunc:tf,EquirectangularReflectionMapping:Bs,EquirectangularRefractionMapping:Ns,Euler:qn,EventDispatcher:en,ExtrudeBufferGeometry:Kt,ExtrudeGeometry:Kt,FaceColors:Yx,FileLoader:At,FlatShading:Ba,Float16BufferAttribute:dr,Float32Attribute:fv,Float32BufferAttribute:ie,Float64Attribute:pv,Float64BufferAttribute:fr,FloatType:Zt,Fog:Ur,FogExp2:zr,Font:vc,FontLoader:ux,FrontSide:Ei,Frustum:Or,GLBufferAttribute:Sc,GLSL1:pf,GLSL3:wa,GammaEncoding:oo,GreaterDepth:wh,GreaterEqualDepth:bh,GreaterEqualStencilFunc:of,GreaterStencilFunc:rf,GridHelper:Md,Group:Fn,HalfFloatType:ir,HemisphereLight:hc,HemisphereLightHelper:Px,HemisphereLightProbe:dd,IcosahedronBufferGeometry:Ws,IcosahedronGeometry:Ws,ImageBitmapLoader:Ra,ImageLoader:xo,ImageUtils:Wn,ImmediateRenderObject:Rr,IncrementStencilOp:Yd,IncrementWrapStencilOp:Jd,InstancedBufferAttribute:io,InstancedBufferGeometry:Lr,InstancedInterleavedBuffer:Ca,InstancedMesh:Hs,Int16Attribute:lv,Int16BufferAttribute:hr,Int32Attribute:uv,Int32BufferAttribute:ur,Int8Attribute:ov,Int8BufferAttribute:ar,IntType:Ih,InterleavedBuffer:xt,InterleavedBufferAttribute:gn,Interpolant:St,InterpolateDiscrete:rr,InterpolateLinear:sr,InterpolateSmooth:Ds,InvertStencilOp:Qd,JSONLoader:Mv,KeepStencilOp:Is,KeyframeTrack:Ot,LOD:Xa,LatheBufferGeometry:qs,LatheGeometry:qs,Layers:Va,LensFlare:Ev,LessDepth:vh,LessEqualDepth:Fs,LessEqualStencilFunc:nf,LessStencilFunc:ef,Light:Nt,LightProbe:Wr,Line:Bt,Line3:_d,LineBasicMaterial:at,LineCurve:kr,LineCurve3:id,LineDashedMaterial:nc,LineLoop:ja,LinePieces:Xx,LineSegments:pt,LineStrip:qx,LinearEncoding:ft,LinearFilter:tt,LinearInterpolant:Mr,LinearMipMapLinearFilter:Vd,LinearMipMapNearestFilter:kd,LinearMipmapLinearFilter:Ai,LinearMipmapNearestFilter:za,LinearToneMapping:Th,Loader:Ze,LoaderUtils:xc,LoadingManager:rc,LogLuvEncoding:Au,LoopOnce:Mu,LoopPingPong:Eu,LoopRepeat:Su,LuminanceAlphaFormat:Uh,LuminanceFormat:zh,MOUSE:Bd,Material:Ve,MaterialLoader:cd,Math:xe,MathUtils:xe,Matrix3:nt,Matrix4:ce,MaxEquation:ua,Mesh:Ue,MeshBasicMaterial:tn,MeshDepthMaterial:ho,MeshDistanceMaterial:uo,MeshFaceMaterial:Jx,MeshLambertMaterial:ec,MeshMatcapMaterial:tc,MeshNormalMaterial:Ka,MeshPhongMaterial:yo,MeshPhysicalMaterial:vn,MeshStandardMaterial:Gt,MeshToonMaterial:Qa,MinEquation:ha,MirroredRepeatWrapping:tr,MixOperation:Sh,MultiMaterial:$x,MultiplyBlending:la,MultiplyOperation:Pr,NearestFilter:et,NearestMipMapLinearFilter:Gd,NearestMipMapNearestFilter:Hd,NearestMipmapLinearFilter:zs,NearestMipmapNearestFilter:Os,NeverDepth:yh,NeverStencilFunc:Kd,NoBlending:Jt,NoColors:jx,NoToneMapping:Bn,NormalAnimationBlendMode:so,NormalBlending:yi,NotEqualDepth:Mh,NotEqualStencilFunc:sf,NumberKeyframeTrack:Sr,Object3D:me,ObjectLoader:ax,ObjectSpaceNormalMap:Cu,OctahedronBufferGeometry:_r,OctahedronGeometry:_r,OneFactor:lh,OneMinusDstAlphaFactor:fh,OneMinusDstColorFactor:mh,OneMinusSrcAlphaFactor:Oa,OneMinusSrcColorFactor:uh,OrthographicCamera:Vr,PCFShadowMap:Fa,PCFSoftShadowMap:rh,PMREMGenerator:Gx,ParametricBufferGeometry:Gn,ParametricGeometry:Gn,Particle:Kx,ParticleBasicMaterial:nv,ParticleSystem:ev,ParticleSystemMaterial:iv,Path:Ar,PerspectiveCamera:Ke,Plane:It,PlaneBufferGeometry:pr,PlaneGeometry:pr,PlaneHelper:Nx,PointCloud:Qx,PointCloudMaterial:tv,PointLight:fc,PointLightHelper:Rx,Points:Mi,PointsMaterial:Xn,PolarGridHelper:Dx,PolyhedronBufferGeometry:yn,PolyhedronGeometry:yn,PositionalAudio:gx,PropertyBinding:ht,PropertyMixer:gd,QuadraticBezierCurve:_o,QuadraticBezierCurve3:lc,Quaternion:ot,QuaternionKeyframeTrack:Di,QuaternionLinearInterpolant:eo,REVISION:Ia,RGBADepthPacking:Ru,RGBAFormat:Mt,RGBAIntegerFormat:Xh,RGBA_ASTC_10x10_Format:su,RGBA_ASTC_10x5_Format:nu,RGBA_ASTC_10x6_Format:iu,RGBA_ASTC_10x8_Format:ru,RGBA_ASTC_12x10_Format:ou,RGBA_ASTC_12x12_Format:au,RGBA_ASTC_4x4_Format:Yh,RGBA_ASTC_5x4_Format:Zh,RGBA_ASTC_5x5_Format:Jh,RGBA_ASTC_6x5_Format:$h,RGBA_ASTC_6x6_Format:Qh,RGBA_ASTC_8x5_Format:Kh,RGBA_ASTC_8x6_Format:eu,RGBA_ASTC_8x8_Format:tu,RGBA_BPTC_Format:cu,RGBA_ETC2_EAC_Format:ba,RGBA_PVRTC_2BPPV1_Format:va,RGBA_PVRTC_4BPPV1_Format:xa,RGBA_S3TC_DXT1_Format:fa,RGBA_S3TC_DXT3_Format:pa,RGBA_S3TC_DXT5_Format:ma,RGBDEncoding:ka,RGBEEncoding:ao,RGBEFormat:Hh,RGBFormat:un,RGBIntegerFormat:qh,RGBM16Encoding:Ga,RGBM7Encoding:Ha,RGB_ETC1_Format:jh,RGB_ETC2_Format:_a,RGB_PVRTC_2BPPV1_Format:ya,RGB_PVRTC_4BPPV1_Format:ga,RGB_S3TC_DXT1_Format:da,RGFormat:Vh,RGIntegerFormat:Wh,RawShaderMaterial:Pi,Ray:bn,Raycaster:Ec,RectAreaLight:gc,RedFormat:Gh,RedIntegerFormat:kh,ReinhardToneMapping:Ah,RepeatWrapping:er,ReplaceStencilOp:jd,ReverseSubtractEquation:ah,RingBufferGeometry:Xs,RingGeometry:Xs,SRGB8_ALPHA8_ASTC_10x10_Format:_u,SRGB8_ALPHA8_ASTC_10x5_Format:yu,SRGB8_ALPHA8_ASTC_10x6_Format:xu,SRGB8_ALPHA8_ASTC_10x8_Format:vu,SRGB8_ALPHA8_ASTC_12x10_Format:bu,SRGB8_ALPHA8_ASTC_12x12_Format:wu,SRGB8_ALPHA8_ASTC_4x4_Format:lu,SRGB8_ALPHA8_ASTC_5x4_Format:hu,SRGB8_ALPHA8_ASTC_5x5_Format:uu,SRGB8_ALPHA8_ASTC_6x5_Format:du,SRGB8_ALPHA8_ASTC_6x6_Format:fu,SRGB8_ALPHA8_ASTC_8x5_Format:pu,SRGB8_ALPHA8_ASTC_8x6_Format:mu,SRGB8_ALPHA8_ASTC_8x8_Format:gu,Scene:fo,SceneUtils:Sv,ShaderChunk:Ee,ShaderLib:Ft,ShaderMaterial:vt,ShadowMaterial:$a,Shape:fn,ShapeBufferGeometry:br,ShapeGeometry:br,ShapePath:hd,ShapeUtils:Qt,ShortType:Dh,Skeleton:Hr,SkeletonHelper:bd,SkinnedMesh:mr,SmoothShading:Ud,Sphere:_n,SphereBufferGeometry:wr,SphereGeometry:wr,Spherical:Tx,SphericalHarmonics3:yc,SplineCurve:bo,SpotLight:dc,SpotLightHelper:Lx,Sprite:mo,SpriteMaterial:po,SrcAlphaFactor:Na,SrcAlphaSaturateFactor:gh,SrcColorFactor:hh,StaticCopyUsage:uf,StaticDrawUsage:Nr,StaticReadUsage:cf,StereoCamera:dx,StreamCopyUsage:ff,StreamDrawUsage:af,StreamReadUsage:hf,StringKeyframeTrack:Yn,SubtractEquation:oh,SubtractiveBlending:ca,TOUCH:Nd,TangentSpaceNormalMap:Vn,TetrahedronBufferGeometry:js,TetrahedronGeometry:js,TextBufferGeometry:Ys,TextGeometry:Ys,Texture:it,TextureLoader:no,TorusBufferGeometry:Zs,TorusGeometry:Zs,TorusKnotBufferGeometry:Js,TorusKnotGeometry:Js,Triangle:$e,TriangleFanDrawMode:qd,TriangleStripDrawMode:Wd,TrianglesDrawMode:Tu,TubeBufferGeometry:$s,TubeGeometry:$s,UVMapping:ro,Uint16Attribute:hv,Uint16BufferAttribute:zn,Uint32Attribute:dv,Uint32BufferAttribute:Un,Uint8Attribute:av,Uint8BufferAttribute:cr,Uint8ClampedAttribute:cv,Uint8ClampedBufferAttribute:lr,Uniform:wo,UniformsLib:$,UniformsUtils:Bu,UnsignedByteType:Li,UnsignedInt248Type:xi,UnsignedIntType:Ji,UnsignedShort4444Type:Fh,UnsignedShort5551Type:Bh,UnsignedShort565Type:Nh,UnsignedShortType:nr,VSMShadowMap:mi,Vector2:V,Vector3:b,Vector4:Ie,VectorKeyframeTrack:Er,Vertex:rv,VertexColors:Zx,VideoTexture:Zu,WebGL1Renderer:ju,WebGLCubeRenderTarget:lo,WebGLMultisampleRenderTarget:Du,WebGLRenderTarget:$t,WebGLRenderTargetCube:bv,WebGLRenderer:Fe,WebGLUtils:qu,WireframeGeometry:Ja,WireframeHelper:xv,WrapAroundEnding:or,XHRLoader:vv,ZeroCurvatureEnding:Dn,ZeroFactor:ch,ZeroSlopeEnding:In,ZeroStencilOp:Xd,sRGBEncoding:Br},Symbol.toStringTag,{value:"Module"})),Av=Fd(Tv);var Lv=Bc&&Bc.__extends||function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(Da,"__esModule",{value:!0});var Rv=Da.OrbitControls=void 0,Ge=Av,qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},eh={type:"change"},ra={type:"start"},sa={type:"end"},th=1e-6,Cv=function(n){Lv(e,n);function e(t,i,r){var s=n.call(this)||this;return s.object=t,s.domElement=i!==void 0?i:document,s.window=r!==void 0?r:window,s.enabled=!0,s.target=new Ge.Vector3,s.minDistance=0,s.maxDistance=1/0,s.minZoom=0,s.maxZoom=1/0,s.minPolarAngle=0,s.maxPolarAngle=Math.PI,s.minAzimuthAngle=-1/0,s.maxAzimuthAngle=1/0,s.enableDamping=!1,s.dampingFactor=.25,s.enableZoom=!0,s.zoomSpeed=1,s.enableRotate=!0,s.rotateSpeed=1,s.enablePan=!0,s.keyPanSpeed=7,s.autoRotate=!1,s.autoRotateSpeed=2,s.enableKeys=!0,s.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},s.mouseButtons={ORBIT:Ge.MOUSE.LEFT,ZOOM:Ge.MOUSE.MIDDLE,PAN:Ge.MOUSE.RIGHT},s.target0=s.target.clone(),s.position0=s.object.position.clone(),s.zoom0=s.object.zoom,s.updateOffset=new Ge.Vector3,s.updateQuat=new Ge.Quaternion().setFromUnitVectors(t.up,new Ge.Vector3(0,1,0)),s.updateQuatInverse=s.updateQuat.clone().invert(),s.updateLastPosition=new Ge.Vector3,s.updateLastQuaternion=new Ge.Quaternion,s.state=qe.NONE,s.scale=1,s.spherical=new Ge.Spherical,s.sphericalDelta=new Ge.Spherical,s.panOffset=new Ge.Vector3,s.zoomChanged=!1,s.rotateStart=new Ge.Vector2,s.rotateEnd=new Ge.Vector2,s.rotateDelta=new Ge.Vector2,s.panStart=new Ge.Vector2,s.panEnd=new Ge.Vector2,s.panDelta=new Ge.Vector2,s.dollyStart=new Ge.Vector2,s.dollyEnd=new Ge.Vector2,s.dollyDelta=new Ge.Vector2,s.panLeftV=new Ge.Vector3,s.panUpV=new Ge.Vector3,s.panInternalOffset=new Ge.Vector3,s.onMouseDown=function(o){if(s.enabled!==!1){if(o.preventDefault(),o.button===s.mouseButtons.ORBIT){if(s.enableRotate===!1)return;s.rotateStart.set(o.clientX,o.clientY),s.state=qe.ROTATE}else if(o.button===s.mouseButtons.ZOOM){if(s.enableZoom===!1)return;s.dollyStart.set(o.clientX,o.clientY),s.state=qe.DOLLY}else if(o.button===s.mouseButtons.PAN){if(s.enablePan===!1)return;s.panStart.set(o.clientX,o.clientY),s.state=qe.PAN}s.state!==qe.NONE&&(document.addEventListener("mousemove",s.onMouseMove,!1),document.addEventListener("mouseup",s.onMouseUp,!1),s.dispatchEvent(ra))}},s.onMouseMove=function(o){if(s.enabled!==!1){if(o.preventDefault(),s.state===qe.ROTATE){if(s.enableRotate===!1)return;s.rotateEnd.set(o.clientX,o.clientY),s.rotateDelta.subVectors(s.rotateEnd,s.rotateStart);var a=s.domElement===document?s.domElement.body:s.domElement;s.rotateLeft(2*Math.PI*s.rotateDelta.x/a.clientWidth*s.rotateSpeed),s.rotateUp(2*Math.PI*s.rotateDelta.y/a.clientHeight*s.rotateSpeed),s.rotateStart.copy(s.rotateEnd),s.update()}else if(s.state===qe.DOLLY){if(s.enableZoom===!1)return;s.dollyEnd.set(o.clientX,o.clientY),s.dollyDelta.subVectors(s.dollyEnd,s.dollyStart),s.dollyDelta.y>0?s.dollyIn(s.getZoomScale()):s.dollyDelta.y<0&&s.dollyOut(s.getZoomScale()),s.dollyStart.copy(s.dollyEnd),s.update()}else if(s.state===qe.PAN){if(s.enablePan===!1)return;s.panEnd.set(o.clientX,o.clientY),s.panDelta.subVectors(s.panEnd,s.panStart),s.pan(s.panDelta.x,s.panDelta.y),s.panStart.copy(s.panEnd),s.update()}}},s.onMouseUp=function(o){s.enabled!==!1&&(document.removeEventListener("mousemove",s.onMouseMove,!1),document.removeEventListener("mouseup",s.onMouseUp,!1),s.dispatchEvent(sa),s.state=qe.NONE)},s.onMouseWheel=function(o){s.enabled===!1||s.enableZoom===!1||s.state!==qe.NONE&&s.state!==qe.ROTATE||(o.preventDefault(),o.stopPropagation(),o.deltaY<0?s.dollyOut(s.getZoomScale()):o.deltaY>0&&s.dollyIn(s.getZoomScale()),s.update(),s.dispatchEvent(ra),s.dispatchEvent(sa))},s.onKeyDown=function(o){if(!(s.enabled===!1||s.enableKeys===!1||s.enablePan===!1))switch(o.keyCode){case s.keys.UP:s.pan(0,s.keyPanSpeed),s.update();break;case s.keys.BOTTOM:s.pan(0,-s.keyPanSpeed),s.update();break;case s.keys.LEFT:s.pan(s.keyPanSpeed,0),s.update();break;case s.keys.RIGHT:s.pan(-s.keyPanSpeed,0),s.update();break}},s.onTouchStart=function(o){if(s.enabled!==!1){switch(o.touches.length){case 1:{if(s.enableRotate===!1)return;s.rotateStart.set(o.touches[0].pageX,o.touches[0].pageY),s.state=qe.TOUCH_ROTATE}break;case 2:{if(s.enableZoom===!1)return;var a=o.touches[0].pageX-o.touches[1].pageX,c=o.touches[0].pageY-o.touches[1].pageY,l=Math.sqrt(a*a+c*c);s.dollyStart.set(0,l),s.state=qe.TOUCH_DOLLY}break;case 3:{if(s.enablePan===!1)return;s.panStart.set(o.touches[0].pageX,o.touches[0].pageY),s.state=qe.TOUCH_PAN}break;default:s.state=qe.NONE}s.state!==qe.NONE&&s.dispatchEvent(ra)}},s.onTouchMove=function(o){if(s.enabled!==!1)switch(o.preventDefault(),o.stopPropagation(),o.touches.length){case 1:{if(s.enableRotate===!1||s.state!==qe.TOUCH_ROTATE)return;s.rotateEnd.set(o.touches[0].pageX,o.touches[0].pageY),s.rotateDelta.subVectors(s.rotateEnd,s.rotateStart);var a=s.domElement===document?s.domElement.body:s.domElement;s.rotateLeft(2*Math.PI*s.rotateDelta.x/a.clientWidth*s.rotateSpeed),s.rotateUp(2*Math.PI*s.rotateDelta.y/a.clientHeight*s.rotateSpeed),s.rotateStart.copy(s.rotateEnd),s.update()}break;case 2:{if(s.enableZoom===!1||s.state!==qe.TOUCH_DOLLY)return;var c=o.touches[0].pageX-o.touches[1].pageX,l=o.touches[0].pageY-o.touches[1].pageY,u=Math.sqrt(c*c+l*l);s.dollyEnd.set(0,u),s.dollyDelta.subVectors(s.dollyEnd,s.dollyStart),s.dollyDelta.y>0?s.dollyOut(s.getZoomScale()):s.dollyDelta.y<0&&s.dollyIn(s.getZoomScale()),s.dollyStart.copy(s.dollyEnd),s.update()}break;case 3:{if(s.enablePan===!1||s.state!==qe.TOUCH_PAN)return;s.panEnd.set(o.touches[0].pageX,o.touches[0].pageY),s.panDelta.subVectors(s.panEnd,s.panStart),s.pan(s.panDelta.x,s.panDelta.y),s.panStart.copy(s.panEnd),s.update()}break;default:s.state=qe.NONE}},s.onTouchEnd=function(o){s.enabled!==!1&&(s.dispatchEvent(sa),s.state=qe.NONE)},s.onContextMenu=function(o){o.preventDefault()},s.domElement.addEventListener("contextmenu",s.onContextMenu,!1),s.domElement.addEventListener("mousedown",s.onMouseDown,!1),s.domElement.addEventListener("wheel",s.onMouseWheel,!1),s.domElement.addEventListener("touchstart",s.onTouchStart,!1),s.domElement.addEventListener("touchend",s.onTouchEnd,!1),s.domElement.addEventListener("touchmove",s.onTouchMove,!1),s.window.addEventListener("keydown",s.onKeyDown,!1),s.update(),s}return e.prototype.update=function(){var t=this.object.position;return this.updateOffset.copy(t).sub(this.target),this.updateOffset.applyQuaternion(this.updateQuat),this.spherical.setFromVector3(this.updateOffset),this.autoRotate&&this.state===qe.NONE&&this.rotateLeft(this.getAutoRotationAngle()),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.target.add(this.panOffset),this.updateOffset.setFromSpherical(this.spherical),this.updateOffset.applyQuaternion(this.updateQuatInverse),t.copy(this.target).add(this.updateOffset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor):this.sphericalDelta.set(0,0,0),this.scale=1,this.panOffset.set(0,0,0),this.zoomChanged||this.updateLastPosition.distanceToSquared(this.object.position)>th||8*(1-this.updateLastQuaternion.dot(this.object.quaternion))>th?(this.dispatchEvent(eh),this.updateLastPosition.copy(this.object.position),this.updateLastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):!1},e.prototype.panLeft=function(t,i){this.panLeftV.setFromMatrixColumn(i,0),this.panLeftV.multiplyScalar(-t),this.panOffset.add(this.panLeftV)},e.prototype.panUp=function(t,i){this.panUpV.setFromMatrixColumn(i,1),this.panUpV.multiplyScalar(t),this.panOffset.add(this.panUpV)},e.prototype.pan=function(t,i){var r=this.domElement===document?this.domElement.body:this.domElement;if(this._checkPerspectiveCamera(this.object)){var s=this.object.position;this.panInternalOffset.copy(s).sub(this.target);var o=this.panInternalOffset.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*t*o/r.clientHeight,this.object.matrix),this.panUp(2*i*o/r.clientHeight,this.object.matrix)}else this._checkOrthographicCamera(this.object)?(this.panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this.panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)},e.prototype.dollyIn=function(t){this._checkPerspectiveCamera(this.object)?this.scale/=t:this._checkOrthographicCamera(this.object)?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom*t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},e.prototype.dollyOut=function(t){this._checkPerspectiveCamera(this.object)?this.scale*=t:this._checkOrthographicCamera(this.object)?(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/t)),this.object.updateProjectionMatrix(),this.zoomChanged=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)},e.prototype.getAutoRotationAngle=function(){return 2*Math.PI/60/60*this.autoRotateSpeed},e.prototype.getZoomScale=function(){return Math.pow(.95,this.zoomSpeed)},e.prototype.rotateLeft=function(t){this.sphericalDelta.theta-=t},e.prototype.rotateUp=function(t){this.sphericalDelta.phi-=t},e.prototype.getPolarAngle=function(){return this.spherical.phi},e.prototype.getAzimuthalAngle=function(){return this.spherical.theta},e.prototype.dispose=function(){this.domElement.removeEventListener("contextmenu",this.onContextMenu,!1),this.domElement.removeEventListener("mousedown",this.onMouseDown,!1),this.domElement.removeEventListener("wheel",this.onMouseWheel,!1),this.domElement.removeEventListener("touchstart",this.onTouchStart,!1),this.domElement.removeEventListener("touchend",this.onTouchEnd,!1),this.domElement.removeEventListener("touchmove",this.onTouchMove,!1),document.removeEventListener("mousemove",this.onMouseMove,!1),document.removeEventListener("mouseup",this.onMouseUp,!1),this.window.removeEventListener("keydown",this.onKeyDown,!1)},e.prototype.reset=function(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eh),this.update(),this.state=qe.NONE},e.prototype.saveState=function(){this.target0.copy(this.target),this.position0.copy(this.object.position),(this._checkOrthographicCamera(this.object)||this._checkPerspectiveCamera(this.object))&&(this.zoom0=this.object.zoom)},Object.defineProperty(e.prototype,"center",{get:function(){return console.warn("Three.OrbitControls: .center has been renamed to .target"),this.target},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noZoom",{get:function(){return console.warn("Three.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(t){console.warn("Three.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!t},enumerable:!1,configurable:!0}),e.prototype._checkPerspectiveCamera=function(t){return t.isPerspectiveCamera},e.prototype._checkOrthographicCamera=function(t){return t.isOrthographicCamera},e}(Ge.EventDispatcher);Rv=Da.OrbitControls=Cv;export{Rv as O};
