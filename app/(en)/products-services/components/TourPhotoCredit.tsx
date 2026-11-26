import type {TourPhoto} from "@/app/data/dt-tour-media";
export default function TourPhotoCredit({photo}:{photo:TourPhoto}){
 return <>{photo.caption}{photo.credit&&<> · {photo.source?<a href={photo.source}>{photo.credit} ↗</a>:photo.credit}</>}{photo.license&&<> · <a href={photo.licenseHref}>{photo.license}</a> · {photo.src.includes("-detail")?"Ảnh cắt và đổi định dạng":"Ảnh đổi kích thước và định dạng"}</>}{photo.rightsNote&&<> · {photo.rightsNote}</>}</>;
}
