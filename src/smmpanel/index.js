import SmmPanelImage from "../component/SmmPanelImage";
import SmmPanelLinks from "../component/SmmPanelLinks";
import SMMPanelText from "../component/SMMPanelText";

const SmmPanel = () => {
    return(
        <div style={{backgroundColor: "rgba(233, 242, 252, 1)", margin: "0px"}}>
        <SMMPanelText></SMMPanelText>
        <SmmPanelImage></SmmPanelImage>
        <SmmPanelLinks></SmmPanelLinks>
        </div>
    );
}

export default SmmPanel;