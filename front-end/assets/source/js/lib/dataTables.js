import $ from 'jquery';
import 'datatables';

export const dataTables = () => {
  
  $('.table-dataTables').DataTable({
    "language": {
      "url": "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json"
    }
  });  
}
