(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5111)}])},5111:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Ao}});var i=t(5893),a=t(7294),s=t(1664),g=t.n(s),l=t(9029),r=t(1415),h=t(9844),n=t(4855),d=t(5831),c=t(4803),o=t.n(c),u=t(5152),b=t.n(u);let m=b()(()=>t.e(257).then(t.t.bind(t,4210,23)).then(A=>A.default),{loadableGenerated:{webpack:()=>[4210]},ssr:!1}),x=420,p=1920,w=40,E=8e3,U=3e3,f=[];function C(A,e){x=400,p=A,A<1280&&(w=30,x=300,E=6e3,U=2e3),A<600&&(w=20,E=3e3,U=1e3)}class B{move(A){this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>p)&&(this.vx=-1*this.vx),(this.y<0||this.y>x)&&(this.vy=-1*this.vy),this.dia+=this.vd,(this.dia<1||this.dia>7)&&(this.vd=-1*this.vd)}constructor(A,e,t,i,a,s,g){this.dia=A,this.x=e,this.y=t,this.vx=i,this.vy=a,this.vd=s,this.p5=g}}function R(A){let e=(A,e)=>{C(A.windowWidth,A.windowHeight),A.createCanvas(p,x).parent(e);for(let t=f.length;t<w;t++)A.append(f,new B(A.random(1,7),A.random(0,p),A.random(0,x),A.random(-1.5,1.5),A.random(-1.5,1.5),A.random(-.1,.1)))},t=A=>{A.clear();for(let e=0;e<f.length;e++)for(let t=e+1;t<f.length;t++){var i,a,s,g;let l=(i=f[e],a=f[t],A.pow(i.x-a.x,2)+A.pow(i.y-a.y,2));s=f[e],g=f[t],A.stroke(A.color(192,192,192)),l>E||(l<U&&A.strokeWeight(.8),A.line(s.x,s.y,g.x,g.y),A.strokeWeight(.3))}for(let r of f)r.move(A),A.circle(r.x,r.y,r.dia)},a=A=>{A.append(f,new B(A.random(1,7),A.mouseX,A.mouseY,A.random(-1.5,1.5),A.random(-1.5,1.5),A.random(-.1,.1)))},s=A=>{C(A.windowWidth,A.windowHeight),A.resizeCanvas(A.windowWidth,x)};return(0,i.jsx)(m,{setup:e,draw:t,windowResized:s,mouseClicked:a})}var j=t(615),Q=t(5675),N=t.n(Q);function D(A){let{children:e}=A,[t,s]=a.useState(0);return(0,a.useEffect)(()=>{function A(){s(window.innerWidth)}return window.addEventListener("resize",A),A(),()=>window.removeEventListener("resize",A)},[]),(0,a.useEffect)(()=>{console.log(innerWidth)},[t]),(0,i.jsx)(j.lr,{className:"carousel",autoPlay:!0,centerMode:!0,infiniteLoop:!0,showThumbs:!1,centerSlidePercentage:t>1200?40:100,showArrows:!0,showStatus:!1,showIndicators:!1,children:e})}function k(A){let{src:e}=A;return(0,i.jsx)("div",{className:"h-24 w-32",children:(0,i.jsx)(N(),{src:e,placeholder:"blur",alt:"",fill:!0,className:"object-contain"})})}function V(A){let{image:e,title:t,link:a,blank:s}=A;return(0,i.jsx)(g(),{href:a,target:s?"_blank":"",children:(0,i.jsxs)("div",{className:"flex flex-col items-center gap-8 rounded-2xl shadow-lg py-16 min-w-[250px] hover:scale-110 transition-all cursor-pointer bg-white",children:[(0,i.jsx)(N(),{src:e,height:80,width:80,alt:""}),(0,i.jsx)("p",{className:"font-medium tracking-wide uppercase text-2xl text-dc-orange",children:t})]})})}var y={src:"/deepchem.github.io//_next/static/media/atom.cc7660f8.png",height:218,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAf0lEQVR42mNYcmeBbNaK2rzI6dE5TaedNRjQQc3G2qLICW2eDGGV2gwJPXKa+Y3Gynktaqr5Laoqec1aDNnr+vKdK/P0zKML7MwySv2N0ioCTVJKvE2SS1xNU0q9GfL271MPm71d14+BQSbI1UEn2M5ILcDeXM/fycYo1MFUCQAz+ScSgjBaigAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},S={src:"/deepchem.github.io//_next/static/media/bist.330ca1b9.png",height:150,width:457,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAATUlEQVR42mOIFT7SD8Rb44SPiMQKH+YAYi4gnxuEGUAAKHEPyHkNpJOBksZAthUQ2wKxAxDrMwCJw0CJCUAsANXAAhRjAvKZY4WPcAMAjZ8gs8KWvz4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},G={src:"/deepchem.github.io//_next/static/media/csir.696372f6.png",height:113,width:560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGNUjpk77/13pv08Pxm2xRrdZ/j7j4OVifH/P0ZGBua///7/YFSPnTvx3Tfmg+++/bpsznb1Lwsz+38Ghv//QQp+//3/CwAWYCCnH6thPAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},I={src:"/deepchem.github.io//_next/static/media/expedia.d9f3df27.png",height:290,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nGPMjvb9IS3053zVZL5iE5vfz65+ZmT6+5+BhYGBQQaI7zP6ewXMYGVmeLbmAus+IeF/cl//MXD9Z2D4AJTkAuL3AFXsF3907M+zAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},Y={src:"/deepchem.github.io//_next/static/media/firmenich.1668940d.png",height:473,width:1615,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/AeXYh5vJ9xD3hYfDts3MIAMACvzoAAMABAD4AP0ABwATAfvcAGTH9Sj2mcVMuzAO7Q35/AMG8fEEAQ0M/f/7+wEIEsEemYBXU7AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},v={src:"/deepchem.github.io//_next/static/media/german-research-center-for-env-health.4bd33e73.png",height:1042,width:3073,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYUlEQVR42mMIZojtimCIK/NjiE0C0u2hDHFViQxxtVmM8fEZDHGVDGet0+12GaVaHrNIs7pgk65/0jLdfIlGsp4XQ6xoLku8LMP/wLze/0F5+UC6B4jLgOyc/yH5DgxQAABg+SHDW53/qQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},L={src:"/deepchem.github.io//_next/static/media/ghddi.53df4466.png",height:172,width:467,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAYklEQVR42mMAAY+VX1U8Vn+XZGC4wiUfc1tKLuq+rFz0fWm5mMfMDJ5rfrBa9r6PNah94ysb+SBINvL2FNnIO5Nko+51ycU+FQGbIB3xRE4q/Im8fOwDHqCkDNAEGYgJT5gBzT4jV3PGJawAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},J={src:"/deepchem.github.io//_next/static/media/ibm-watson.59289f92.png",height:342,width:1074,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAQklEQVR42i3EsQmAMBAAwN9AVxBEQUt7eysFwS20T+FUGSwr5IoUdxG5TOx0bMwEoJOfhbtZGRlCB4meh8TLF7lcFWdmLNZGNHkFAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},K={src:"/deepchem.github.io//_next/static/media/icms.2af6b519.png",height:286,width:1241,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGO8ePLCm19MLMdNTbclO2UJKH768//7//8M/xgYGD4A8SvGs6euvmFhYjquH7El282NX/jdn/9AwMAClPzNwPD/BwA/pR+RkAnVagAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},M={src:"/deepchem.github.io//_next/static/media/jiangsu.3bc4a934.png",height:122,width:324,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/ASFrUCAB/wUqDA8ByvoN//4JAAgD6/nt/Q4GDQwEAQT3ATN1U2kKBAI65Pj7tBceFN0C/AMN8/rz/ggFCAj+///XATV2VSUJAwA77vsJsh0kGwH4+PgCBwUHAAMBBP9CN1TtBXkkjkRUJ18AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},H={src:"/deepchem.github.io//_next/static/media/mit.23447f4b.png",height:161,width:721,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/AaMSLbD7MiDfAfv95wbBxar9ISYuAf7//QAAAPQAAP/0AaUAEWjzY1YgAfr84majnZijJTdJAPr8AAEAAPL/AADDDuYeH1yJLQ4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},O={src:"/deepchem.github.io//_next/static/media/northwestern.c28b26bf.png",height:237,width:820,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/AaujujoGBwT4T1at42RPIQ39+/7///8B/QD//wL8+/77AaWdtUcGBgT4f1283zpPGBz7+v34AQAACv7+/+n9+v/mjTUldL/43HkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},W={src:"/deepchem.github.io//_next/static/media/riken.497d8a6b.png",height:172,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZElEQVR42mNgspi8j1Fz2noZhl5OC3MdV3NTM3dzM1NHC1MTByDtxsBkPGUbQ2FzqnxWhoyloUEZULAPiMPNTU37gXQNA5PWtHCGpooo4YYsUUtNPQdzczMfoIQ7EOubm5nqAwAIKxlYf9cTzAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},T={src:"/deepchem.github.io//_next/static/media/skoltech.5e48dd52.png",height:155,width:310,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAdElEQVR42mMoLikXqKqq5WAAgqWrmhkZ0EFJSXlFSUlFKxDHlJZV5M1Z6li2ZJ1e8sLVhoULVusUMDQ0NGkBsUFDQ6NpQ32LztwlaXoLlsebz1uWZDJ3SaIeUEEV87w5E5kYgGDtuglAKz4C2SDwH8jexwIAcgEpvtjnFysAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},P={src:"/deepchem.github.io//_next/static/media/sri-international.3b757b77.png",height:113,width:620,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJ0lEQVR4nGNUTpiiwcDAIALEnxkY/jMzMDD+BbI5GBgZ/jD8//8cAGYqCDIvAkxkAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},F={src:"/deepchem.github.io//_next/static/media/strath.27768ab1.png",height:272,width:918,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nAFCAL3/Acqgi6bq//s3rNf+ZqCKfBAmJiYC9fX1+v7+/uYBAQEIAdeTkm7aESEkT4exnC3unCnvBSEK/vz56v///94AAAABwzojA8P7xLwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},z={src:"/deepchem.github.io//_next/static/media/ucf.9ebaca52.png",height:2160,width:3840,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAYklEQVR42mOAgSk5DIwMaEBMTJiRoSiYoS/YmsGOAQg8TRiYgYJMYAkYmFtn+78+zbyXgYFBUk9d0hwoqQvE8kCsBcRCDNHJOX3+odGODAwM3EoqKuJAQQEg5gNicRBmIAQAdgAPcBNHJaAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},Z={src:"/deepchem.github.io//_next/static/media/uni-alberta.2d1ce81e.png",height:656,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAANElEQVR42mNQjzWvV48xDwViZyA7AYiDoHQkUMyXQT3WYiGQkQrEVkDsDMQ+IAVgTbHm/gA9aBFMuKoyiAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},X={src:"/deepchem.github.io//_next/static/media/uni-bristol.206064ba.png",height:1465,width:4850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARklEQVR4nGPcp2e+kImR8e3lzx8n5N67/luDmfXfjb+/WRgYGH4D8X+QgtnMjIxsd75+WZV858pHNWbWP7f+/v4DlAThfwDv9h5GVNiXJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},_={src:"/deepchem.github.io//_next/static/media/uni-catalonia.6ae6d318.png",height:471,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAATElEQVR42iXGsQnCAAAEwPsQg5W7uJVgZe1gtmJr6yw2mnwIgSsuudxO4VE29zSH/Ua8BlzbPmlxLE26iBnnQfuOTOGDL/1pJozivwLJhBzf7ij1owAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},q={src:"/deepchem.github.io//_next/static/media/uni-central-south.dc962c5c.png",height:140,width:513,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nA3LsQ2AMAxFwfcNQtkgVYZgJ1ghw6SkYz6QEAJsUl11KkurAcmk/fk8d+8gTuAQmlXWVgmmwWx73bPAergkxgjSD+u8Fb4iVFxpAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},$={src:"/deepchem.github.io//_next/static/media/uni-east-china.86b8c95b.png",height:358,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AcrQ2jEHBgUjZIuxtMvw+QokCgX+8vz99QABAQUAAAEEAb3F0rr3+PpF09rlS3mn0QcoHw377vv96gAAAQoAAP/sAc3T3Dn5+vwpepWxpMDo+wgsEQb96fr/BAAAAAD++/f2SukyG/vWHugAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},AA={src:"/deepchem.github.io//_next/static/media/uni-geneva.dc44e9d6.png",height:72,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAQElEQVR4nBWKqxGAMBQE92ZQKYIO6IgCqIEm0Qg8FkXcy0btfTY3+wF8UBdkk+Y02eUyhdPyFnkUW8CjVnN3+wdihhMGrrYsyAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},Ae={src:"/deepchem.github.io//_next/static/media/uni-hunan.2551c05d.png",height:150,width:520,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPUlEQVR4nBWKKxZAEQAFr/IeUVOsxSZsXNQpguLIjDRzP6bLByMlSfVIG7dwQEf3vUMkZMoCG/wZFu7weQG9Wg4t8Ln3RgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},At={src:"/deepchem.github.io//_next/static/media/uni-macau.e1dbc3e7.png",height:742,width:2273,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaklEQVR4nGO8c+FE9b+/f7RUjawTGBkZeb28I389fvbhLwMjAwcDA8Nnxsc3L3389e0bH4eErI20pPQXT+9I5ifPP3wBSnIB8SPGj2+fpzMwMqq2ZCTUdB/5Lm6hyM/49fvvn0BJZiB+CwBNpigbUFt1nQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3},Ai={src:"/deepchem.github.io//_next/static/media/uni-shanghai.80a60903.png",height:81,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOUlEQVR4nGOcLyNv+p+BgYGZkfE2kJICYk4gBgl9BmI2kAIbIO8/CyPjHaCAIBD/A+K/jEAaKM4AAI77DQy27zeWAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},Aa={src:"/deepchem.github.io//_next/static/media/uni-taiwan.7e8a5f6b.png",height:210,width:795,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGO8eGztDgYGhrP6VsFzQwI9f9+59YjpLwPDb6AYMyMDAyvjucNr1vxn+H/J2DZ0drmLA8+Xu8/+Mf9n+P2PgYHlPyPDDwCYBhx1zSIRiQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},As={src:"/deepchem.github.io//_next/static/media/uni-tartu.13180dac.png",height:904,width:2671,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAS0lEQVR42mNgCF0hxBC6XJshbAUHkBYGYkEgFgWKizOELWdjAEroATkJQA5IwADINwfyDUGKgGyQguUcQIYgEINoPiBfBKiAkwEKAAaxGABr4GDuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},Ag={src:"/deepchem.github.io//_next/static/media/uni-tokyo.5f1340c3.png",height:1293,width:5e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGP8sZfh4G8Gx8+8zoJ1RrLrRL4zSr779evPbwYGhm//Gf7LMV5Zm5e99omTT33+8QILiU6B1yzyDAx/vn1m+M/wD6iIBQD7zR0PA+376wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},Al={src:"/deepchem.github.io//_next/static/media/uni-vienna.4a3365b4.png",height:1e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAVElEQVR42mMAAdPkGYwMuEBKaoZCRlqij3dKhy5D0kpz9uSl5gxJy0yA2J4heZkiSIE8UIGfT0q7FlCBNVvyUnuGpKUiQAVcQJqdAQTiUouYcNkAAAswFspZ60voAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},Ar={src:"/deepchem.github.io//_next/static/media/uni-zhejiang.351eada0.png",height:1654,width:4961,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR4nBWMMQ5AABAEdxuUolHQeYEPIPE4T/MF8QGdnmaN4jI3ydxZ89ZLLiVdDHtuRZYdOFrTthK0cnaCRfEp5SFo8O4PBqRGDi5oU8GXHwW8P/zWFf0os50HAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},Ah={src:"/deepchem.github.io//_next/static/media/explore-tutorials.2553d8d4.png",height:100,width:101,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAh0lEQVR42n2OQQrCQAxFQ6GJV7AuvYEgeA8rjJvpKqEguHHtLTxtZuMDUVyUDiQ/5L9MIs2ia+ZjU5/Q2jQqOqMlNXrBOKX5K9WHtNgRe+o75o3hrUAfAB7y9wDOABeAQZg4Ajy/Js0NQAG4fn5QXwdI6ytIvyOJpSOjoznSnNCaBPWMlrTo34AoWg836TI8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},An={src:"/deepchem.github.io//_next/static/media/explore-projects.1c5bbca6.png",height:100,width:101,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqElEQVR42j2PvQ3CMBBGbwAEEiAGQTISosaGAMIt4qemgBpHLEDJAHZH4YxAny5DpMsceUmkFM/fO511Z4sJ8adDVhofC1hRK9Jpn53xt1D84QEf7eNdh5iQE1LgIhQ5N79Q4VdyS25oTnEnyAJ5wolVAwP4gYmWVMIxp0jIHQyhvwBKmJAyckauySPNPW7wbgVyQwRGuKVpyXH/SBppI/DCl6BwB+03aw0Md76l0BqcAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},Ad={src:"/deepchem.github.io//_next/static/media/explore-models.9eb9dec8.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42mOAgY0eq+U2uq3hXhe4UhzE7+nt8e7t6dVmAAoyb/RYE7HRfU3oBs/VtVtN1wdP6JggB1SwDqjAlwEo6QfUXbbBe7XuZoe1kbMrZ9p1TuxM6O/sF4IavSZ5g8ea7PW+qyQ3Oa7NnlMx071zQqczUHdxb0+PPUhBHhDrrvdZpbLJaW3TrKoZTp0TukAKinqgCsI2uK8O3uC12hxoQuas6hlWnRO7kiZ09gtCrHBbwwRUEAt0ZAhQUfVWk/XBQElFuCNhYIPHanls3gQAhcRrnm9KYCsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8};let Ac=a.forwardRef(function(A,e){return(0,i.jsx)(r.Z,{elevation:6,ref:e,variant:"filled",...A})});function Ao(){let[A,e]=(0,a.useState)(!1),[t,s]=(0,a.useState)(!1),r="pip install deepchem",c=()=>{e(!0)},[u,b]=(0,a.useState)(!0),m=(A,t)=>{"clickaway"!==t&&e(!1)};return(0,a.useEffect)(()=>{s(!0)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"h-[300px] xl:h-[400px]",style:{background:"linear-gradient(35deg, rgba(0,78,152,1) 0%, rgba(58,110,165,1) 34%, rgba(255,103,0,1) 100%)"},children:(0,i.jsx)(R,{})}),(0,i.jsxs)("section",{className:"flex flex-row py-8 items-center justify-between px-[25px] 2xl:px-[300px] hero",children:[(0,i.jsxs)("div",{className:"flex-1",children:[(0,i.jsx)("p",{className:"text-dc-blue font-medium text-xl lg:text-[30px]",children:"Democratising Deep Learning in"}),(0,i.jsx)("div",{className:"text-3xl lg:text-[36px] pb-4 lg:pb-10 lg:pt-4 font-semibold",children:(0,i.jsx)(h.e,{sequence:["Drug Discovery",1e3,"Material Science",1e3,"Quantum Chemistry",1e3,"Biology",1e3],speed:1,deletionSpeed:60,wrapper:"div",cursor:!1,repeat:1/0,style:{color:"#FF6700"},className:"type-animation"})}),(0,i.jsx)("p",{className:"font-semibold text-[48px] lg:text-[56px] text-dc-gray",children:"DeepChem"})]}),(0,i.jsx)("div",{className:"h-[250px] rotate-[18deg] w-[2px] bg-dc-orange mr-10 hidden lg:flex"}),(0,i.jsxs)("div",{className:"flex-col flex-1 text-dc-gray text-opacity-60 hidden lg:flex",children:[(0,i.jsx)("p",{className:"italic text-lg",children:'"Chemistry itself knows altogether too well that - given the real fear that the scarcity of global resources and energy might threaten the unity of mankind - chemistry is in a position to make a contribution towards securing a true peace on earth."'}),(0,i.jsx)("p",{className:"text-right font-medium mt-2",children:"~ Kenichi Ukui"})]})]}),(0,i.jsxs)("section",{className:"px-4 gap-2 py-8 lg:gap-16 items-center justify-between flex flex-col lg:flex-row lg:py-16 bg-opacity-10 bg-dc-light-gray get-started",children:[(0,i.jsx)("div",{className:" hidden lg:block h-full w-[300px] flex-1"}),(0,i.jsx)("h2",{id:"get-started",children:"Get Started"}),u&&(0,i.jsxs)("div",{className:"flex flex-col max-w-[600px] w-full shadow-xl font-inconsolata rounded-2xl",children:[(0,i.jsxs)("div",{className:"flex flex-row justify-between bg-terminal-header px-8 py-4 rounded-t-2xl",children:[(0,i.jsxs)("div",{className:"flex flex-row gap-2 items-center",children:[(0,i.jsx)("span",{className:"h-4 w-4 bg-terminal-red inline-block rounded-full",onClick(){b(!1)}}),(0,i.jsx)("span",{className:"h-4 w-4 bg-terminal-yellow inline-block rounded-full"}),(0,i.jsx)("span",{className:"h-4 w-4 bg-terminal-green inline-block rounded-full"})]}),(0,i.jsx)("p",{className:"text-lg justify-self-center invisible lg:visible",children:"deepchem -- bash"}),(0,i.jsxs)("div",{className:"flex flex-row gap-2 items-center invisible",children:[(0,i.jsx)("span",{className:"h-3 w-3 lg:h-5 lg:w-5 bg-terminal-red inline-block rounded-full "}),(0,i.jsx)("span",{className:"h-3 w-3 lg:h-5 lg:w-5 bg-terminal-yellow inline-block rounded-full "}),(0,i.jsx)("span",{className:"h-3 w-3 lg:h-5 lg:w-5 bg-terminal-green inline-block rounded-full "})]})]}),(0,i.jsxs)("div",{className:"flex flex-row px-8 bg-white py-4 lg:py-6 rounded-b-2xl text-xl lg:text-2xl items-center",children:[(0,i.jsx)("p",{className:"pr-2 font-extrabold",children:"$"}),(0,i.jsx)("div",{className:"mr-auto",children:(0,i.jsx)("p",{children:r})}),(0,i.jsx)(n.CopyToClipboard,{text:r,children:(0,i.jsx)("i",{className:"p-3 fa-regular fa-copy cursor-pointer text-dc-light-gray hover:bg-dc-gray/[0.06] rounded-full",onClick:c})})]})]}),(0,i.jsx)("div",{className:"hidden lg:block h-full w-[300px] flex-1"})]}),(0,i.jsxs)("section",{className:"supporters py-16 px-[25px] 2xl:px-[300px]",children:[t&&(0,i.jsx)(d.u,{anchorId:"used-by-carousel",place:"top",className:"hidden md:block"}),(0,i.jsxs)("div",{className:" flex flex-row items-start justify-start gap-4 lg:gap-8 mb-8 lg:mb-16",children:[(0,i.jsx)(o(),{left:!0,children:(0,i.jsx)(g(),{href:"https://forum.deepchem.io/t/organizations-using-deepchem/567",target:"_blank",children:(0,i.jsx)("i",{className:"fa-solid fa-circle-info text-[20px] lg:text-[32px] text-terminal-yellow",id:"used-by-carousel","data-tooltip-content":"Click for more info"})})}),(0,i.jsxs)("h2",{className:"uppercase",children:["Used By",(0,i.jsx)("br",{}),"Scientific Leaders"]})]}),(0,i.jsxs)(D,{showArrows:!0,showIndicators:!0,children:[(0,i.jsx)(k,{src:y}),(0,i.jsx)(k,{src:S}),(0,i.jsx)(k,{src:G}),(0,i.jsx)(k,{src:I}),(0,i.jsx)(k,{src:Y}),(0,i.jsx)(k,{src:v}),(0,i.jsx)(k,{src:L}),(0,i.jsx)(k,{src:J}),(0,i.jsx)(k,{src:K}),(0,i.jsx)(k,{src:M}),(0,i.jsx)(k,{src:H}),(0,i.jsx)(k,{src:O}),(0,i.jsx)(k,{src:W}),(0,i.jsx)(k,{src:T}),(0,i.jsx)(k,{src:P}),(0,i.jsx)(k,{src:F}),(0,i.jsx)(k,{src:z}),(0,i.jsx)(k,{src:Z}),(0,i.jsx)(k,{src:X}),(0,i.jsx)(k,{src:_}),(0,i.jsx)(k,{src:q}),(0,i.jsx)(k,{src:$}),(0,i.jsx)(k,{src:AA}),(0,i.jsx)(k,{src:Ae}),(0,i.jsx)(k,{src:At}),(0,i.jsx)(k,{src:Ai}),(0,i.jsx)(k,{src:Aa}),(0,i.jsx)(k,{src:As}),(0,i.jsx)(k,{src:Ag}),(0,i.jsx)(k,{src:Al}),(0,i.jsx)(k,{src:Ar})]})]}),(0,i.jsxs)("section",{className:"explore flex flex-col items-center px-[25px] 2xl:px-[300px] py-16 bg-dc-light-gray bg-opacity-10 gap-4",children:[(0,i.jsx)("h2",{className:"mb-8",children:"Explore"}),(0,i.jsxs)("div",{className:"explore flex flex-wrap lg:flex-row items-center justify-center gap-10",children:[(0,i.jsx)(V,{image:Ad,title:"MODELS",link:"/models"}),(0,i.jsx)(V,{image:An,title:"Projects",link:"https://github.com/deepchem/deepchem/tree/master/examples",blank:!0}),(0,i.jsx)(V,{image:Ah,title:"Tutorials",link:"https://github.com/deepchem/deepchem/tree/master/examples/tutorials",blank:!0})]})]}),(0,i.jsx)(l.Z,{open:A,autoHideDuration:1e3,onClose:m,children:(0,i.jsx)(Ac,{onClose:m,severity:"success",sx:{width:"100%",background:"#252422"},children:"Copied!"})})]})}}},function(A){A.O(0,[717,774,888,179],function(){return A(A.s=5557)}),_N_E=A.O()}]);