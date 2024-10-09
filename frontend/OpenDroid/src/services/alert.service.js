import Swal from 'sweetalert2';

class AlertsService {
  swalAlert(type, message, showConfirmButton = true, timer = 3000) {
    Swal.fire({
      icon: type,
      title: message,
      showConfirmButton: showConfirmButton,
      timer: timer,
    });
  }
}

export default new AlertsService();