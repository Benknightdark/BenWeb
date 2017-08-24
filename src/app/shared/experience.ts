export interface ExperienceData {
  imgurl: string;
  place: string;
  name: string;
  duration: string;
  detail: ExperienceDataDetail;

}
export interface ExperienceDataDetail {
  content: string;
  detaildata: DetailData;
}
export interface DetailData {
  name: string;
  detaildatalist: DetailDataList;
}
export interface DetailDataList {
  name: string;
  url: string;
  tip: string;
}
