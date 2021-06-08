import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelope, faPhone, faMapMarkerAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
    return library.add(fab, faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faEnvelope, faPhone, faMapMarkerAlt, faLock, faGithub, faLinkedin);
}

export default Icons;
