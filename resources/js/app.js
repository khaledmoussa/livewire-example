import './bootstrap';
import Alpine from 'alpinejs';
import chartComponent from './components/chartComponent';

window.Alpine = Alpine
Alpine.data('chartComponent', chartComponent)
Alpine.start()