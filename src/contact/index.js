import ContactSummary from "../component/ContactSummary";
import InfoComponent from "../component/InfoComponent";
import ParagraphWithButton from "../component/ParagraphWithButton";

const ContactPage = () => {
    return(
        <div style={{backgroundColor: "rgba(233, 242, 252, 1)"}}>
         <InfoComponent></InfoComponent>
         <ParagraphWithButton></ParagraphWithButton>
         <ContactSummary></ContactSummary>
        </div>
    );
}

export default ContactPage;