import ownPhotos from "./dt-tour-photos.json";
import guideMedia from "./guide-media.json";
export type TourPhoto={src:string;caption:string;source?:string;credit?:string;license?:string;licenseHref?:string};
const page="https://www.facebook.com/dulichphilippinesdttour/";
const guide=(k:keyof typeof guideMedia):TourPhoto=>{
 const v: {src:string;alt:string;source?:string;kind:string}=guideMedia[k];
 return {src:v.src,caption:v.alt,source:v.source,credit:v.kind==="illustration"?"Ảnh minh họa · DT Tour":"Page DT Tour"};
};
const own=(...keys:(keyof typeof ownPhotos)[]):TourPhoto[]=>keys.map(k=>ownPhotos[k]);
const cc=(key:string,caption:string,credit:string,lic:string,href:string,version:string,id="by-sa"):TourPhoto=>({src:"/images/dt-tour/"+key+".webp",caption,credit,license:lic,licenseHref:"https://creativecommons.org/licenses/"+id+"/"+version+"/",source:href});
const el1=cc("el-nido-big-lagoon","Big Lagoon, El Nido","nennnn","CC BY 2.0","https://commons.wikimedia.org/wiki/File:El_Nido_Palawan_Big_Lagoon.jpg","2.0","by");
const el2=cc("el-nido-seven-commandos","Bãi Seven Commandos nhìn từ biển, El Nido","Fabio Achilli","CC BY 2.0","https://commons.wikimedia.org/wiki/File:Seven_Commando_Beach,_El_Nido,_Philippines_(36703369760).jpg","2.0","by");
const el3=cc("el-nido-bacuit-reef","Cảnh san hô trong vịnh Bacuit, El Nido","Vyacheslav Argenberg","CC BY 4.0","https://commons.wikimedia.org/wiki/File:Coral,_Bacuit_Bay,_El_Nido,_Palawan,_Philippines.jpg","4.0","by");
const cor1=cc("coron-kayangan-lake","Cảnh hồ Kayangan và núi đá vôi, Coron","Franz C. Trinidad","CC BY-SA 4.0","https://commons.wikimedia.org/wiki/File:Kayangan_Lake_in_Coron.jpg","4.0");
const cor2=cc("coron-twin-lagoon","Thuyền trong làn nước ở Twin Lagoon, Coron","MikelleBandin","CC BY-SA 4.0","https://commons.wikimedia.org/wiki/File:Twin_Lagoon_of_Coron_Island.jpg","4.0");
const boh=cc("bohol-balicasag-reef","Rạn san hô Balicasag, Bohol","Thomas Brown","CC BY 2.0","https://commons.wikimedia.org/wiki/File:Balicasag_Reef.jpg","2.0","by");
const may=cc("mayon-cagsawa","Tháp Cagsawa và núi Mayon, Albay","Say Bernardo","CC BY-SA 4.0","https://commons.wikimedia.org/wiki/File:Mt.Mayon_with_Cagsawa_Ruins,_Albay_by_Say_Bernardo.jpg","4.0");
const hot=cc("hidden-valley-pools","Các hồ nước trong rừng, Hidden Valley Springs, Laguna","rickyrose27 / Wikimapia","CC BY-SA 3.0","https://manilastay.com/photo-credits/#hidden-valley-laguna","3.0");
const fort=cc("fortune-island-greek-ruins","Hàng cột kiểu Hy Lạp trên Fortune Island, Nasugbu","Alienscream","CC BY-SA 4.0","https://commons.wikimedia.org/wiki/File:RuinsofFortuneIsland_Nasugbu_Batangas_Philippines.jpg","4.0");
const detail=(p:TourPhoto,caption:string):TourPhoto=>({...p,src:p.src.replace(".webp","-detail.webp"),caption});
const skull=guide("cebu-hay-bohol-du-lich-tu-viet-nam");
const under=guide("du-lich-cebu-cho-nguoi-viet-chon-ngay-di-thanh-pho-hay-ngay-nghi-bien");
const cebu=[skull,under,...own("cebu-10","cebu-0","cebu-6","cebu-3")];
const boracay=own("boracay-8","boracay-0","boracay-3");
const nido=[el1,el2,el3];
const coron=[cor1,cor2,detail(cor1,"Chi tiết bờ hồ Kayangan · cắt từ ảnh toàn cảnh")];
const bohol=[guide("tour-bohol-panglao-gia-dinh-tu-viet-nam"),boh,guide("tour-bohol-cho-nhom-co-tre-ngu-trua-dat-lich-rieng-the-nao")];
const manila=[guide("tour-intramuros-cho-nguoi-viet-thich-chup-anh-kien-truc"),guide("lich-manila-nua-ngay-intramuros-khach-viet"),guide("tour-manila-3-ngay-2-dem-tu-viet-nam")];
const tag=[guide("tour-tagaytay-trong-ngay-tu-manila-cho-gia-dinh-viet"),...own("tagaytay-2","tagaytay-5","tagaytay-7")];
const subic=own("subic-0","subic-5","subic-22");
const little=own("little-0","little-5","little-20");
const warm=own("hot-0","hot-19","hot-30");
const sant=own("santorini-1","santorini-8","santorini-38");
const luzon=[little[0],tag[0],subic[0],warm[0],...manila.slice(0,1)];
export const tourMedia:Record<string,TourPhoto[]>={
 "south-cebu":cebu,"manila-boracay":[...boracay,...manila],"boracay-3n2d":boracay,
 "el-nido":nido,"el-nido-3n2d":nido,"coron":coron,"coron-3n2d":coron,
 "luzon":luzon,"bohol":bohol,"tagaytay-trong-ngay":tag,
 "hidden-valley":[hot,detail(hot,"Chi tiết hồ nước ở Hidden Valley Springs · cắt từ ảnh toàn cảnh")],
 "subic-du-thuyen":subic,"santorini-trong-ngay":sant,"little-boracay-batangas":little,
 "suoi-nong-tagaytay":[...warm,tag[0]],"fortune-island":[fort,detail(fort,"Chi tiết hàng cột trên Fortune Island · cắt từ ảnh toàn cảnh")],
};
const general=[guide("tour-philippines-tu-viet-nam-bao-gia-nhom-rieng"),manila[0],boracay[0],tag[0]];
export function journalMedia(p:{slug:string;group:string;tour?:string}):TourPhoto[]{
 const explicit:Record<string,TourPhoto[]>={
 "manila-hay-di-bien":[manila[0],boracay[0],tag[0]],
 "hanh-ly-xach-tay":[guide("di-cebu-roi-noi-chuyen-sang-bohol-nen-dat-xe-tung-chang-the-nao"),...general.slice(0,2)],
 "doi-tien-peso":general,"checklist-di-lan":[boh,under,el3],"cuoi-tuan-cho-nguoi-viet-tai-philippines":[tag[0],subic[0],manila[0]],
 "oslob-ca-map-voi":[skull,under,cebu[2]],"thac-nam-cebu":[cebu[2],skull,under],
 "kawasan-canyoneering-hay-tham-quan":[cebu[2],skull,under],"moalboal-mot-buoi-o-bien":[cebu[2],cebu[4],skull],
 "balicasag-napaling-pamilacan":[boh,bohol[0],bohol[2]],"pamilacan-lan-ong-tho":[bohol[0],boh,bohol[2]],
 "el-nido-hay-coron":[el1,cor1,el2,cor2],"coron-ho-va-dam":coron,
 "parasailing-boracay":[boracay[1],boracay[0],boracay[2]],"manila-ket-hop-boracay":[boracay[0],manila[0],boracay[2]],
 "intramuros-nua-ngay":manila,"tagaytay-ngam-ho-taal":tag,"mayon-tren-to-100-peso":[may,detail(may,"Chi tiết tháp Cagsawa · cắt từ ảnh toàn cảnh")],
 "little-boracay-batangas":little,"subic-hoang-hon-tren-vinh":subic,
 };
 const groupAlt:Record<string,TourPhoto[]>={"Cebu":cebu,"Bohol":bohol,"Palawan":nido,"Boracay":boracay,"Manila và Luzon":luzon};
 return (explicit[p.slug]??groupAlt[p.group]??(p.tour?tourMedia[p.tour]:null)??general).slice(0,4).map(x=>x.credit?x:{...x,source:x.source??page});
}
