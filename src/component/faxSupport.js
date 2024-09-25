import { FaPlus, FaMinus } from 'react-icons/fa';
import './faxSession.css';
const FaxSupport = ({ text, text1, expanded, toggleExpand }) => {
    return (
        <>
            <div onClick={toggleExpand} className='fax'>
                <div onClick={toggleExpand} className='fax-header'>
                    <p className='fax-text'>{text}</p>
                    <p className='fax-icon'>{expanded ? <FaMinus /> : <FaPlus />}</p>
                </div>
                {expanded && (
                    <div className='fax-content'>
                        <p>{text1}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default FaxSupport;