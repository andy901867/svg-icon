import SelectMode from './page-components/SelectMode.vue';
import Download from './page-components/DownloadMode.vue';

export default[
    {
        path: "/",
        component: SelectMode
    },
    {
        path: "/select",
        component: SelectMode
    },
    {
        path:"/download",
        component:Download
    }
]