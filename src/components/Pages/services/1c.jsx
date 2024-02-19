
import ServiceTemplate from './ServiceTemplate';
import pageContent from "./Models/OneC";

export default function OneCDev() {
    return(
        <ServiceTemplate title={pageContent.title} article={pageContent.article}/>
    )
}