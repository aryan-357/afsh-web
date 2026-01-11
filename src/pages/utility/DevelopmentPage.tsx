import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp } from '../../utils/animations';

const ReactLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
);

const ViteLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
    </svg>
);

const TypeScriptLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
);

const StrapiLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.32 0c-3.922 0-5.882 0-7.1 1.219C0 2.438 0 4.399 0 8.32v7.36c0 3.922 0 5.882 1.219 7.101C2.438 24 4.399 24 8.32 24h7.36c3.922 0 5.882 0 7.101-1.219C24 21.562 24 19.601 24 15.68V8.32c0-3.922 0-5.882-1.219-7.101C21.562 0 19.601 0 15.68 0H8.32zm.41 7.28h7.83a.16.16 0 0 1 .16.16v7.83h-3.87v-3.71a.41.41 0 0 0-.313-.398l-.086-.012h-3.72V7.28zm-.5.25v3.87H4.553a.08.08 0 0 1-.057-.136L8.23 7.529zm.25 4.12h3.87v3.87H8.64a.16.16 0 0 1-.16-.16v-3.71zm4.12 4.12h3.87l-3.734 3.734a.08.08 0 0 1-.136-.057V15.77z" />
    </svg>
);

const ReactSpringLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.795 19.34c-2.316.323-2.924-2.618-2.924-2.618-.94-1.99-2.842-2.126-2.842-2.126-1.554-.2-1.77 1.874-1.77 1.874 1.252 2.973 4.295 4.195 6.035 3.195.834-.48 1.156-1.42 1.956-1.524.8-.104.912.44 1.48.514.568.074.88-.363.88-.363.882-1.488-1.57-1.125-2.815.932v-.001c-.001.075.001.121.001.121l-.001-.004zm.775-6.85c-.472-.644.026-1.79.026-1.79.472-1.517 2.115-1.51 2.115-1.51 1.706.126 1.583 2.186 1.583 2.186-.34 3.016-3.725 1.114-3.725 1.114zm1.967-11.23c-1.353-.357-1.764 1.96-1.764 1.96-.346 2.148 1.636 2.106 1.636 2.106 1.58-.088 1.442-2.138 1.442-2.138-.13-2.583-1.314-1.928-1.314-1.928zm4.493 5.304c-1.168-.788-2.645 1.258-2.645 1.258-.85 1.733.916 2.628.916 2.628 2.02.668 3.12-1.815 3.12-1.815.112-2.327-1.391-2.071-1.391-2.071z" />
    </svg>
);

const ReactRouterLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12.118 5.466a2.306 2.306 0 00-.623.08c-.278.067-.702.332-.953.583-.41.423-.49.609-.662 1.469-.08.423.41 1.43.847 1.734.45.317 1.085.502 2.065.608 1.429.16 1.84.636 1.84 2.197 0 1.377-.385 1.747-1.96 1.906-1.707.172-2.58.834-2.765 2.117-.106.781.41 1.76 1.125 2.091 1.627.768 3.15-.198 3.467-2.196.211-1.284.622-1.642 1.998-1.747 1.588-.133 2.409-.675 2.713-1.787.278-1.02-.304-2.157-1.297-2.554-.264-.106-.873-.238-1.35-.291-1.495-.16-1.879-.424-2.038-1.39-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 00-1.613-.73zm-4.785 4.36a2.145 2.145 0 00-.497.048c-1.469.318-2.17 2.051-1.35 3.295 1.178 1.774 3.944.953 3.97-1.177.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 00-.427.052c-2.158.476-2.237 3.626-.106 4.182.53.145.582.145 1.111.013 1.191-.318 1.866-1.456 1.549-2.607-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162-1.39.477-1.866 2.092-.98 3.336.557.794 1.96 1.058 2.82.516 1.416-.874 1.363-3.057-.093-3.746-.38-.186-.663-.271-.963-.268z" />
    </svg>
);

const PostgresLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.1519-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
    </svg>
);

const GoogleDevLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M11.96 0c-1.465 0-2.822.427-3.985 1.157L5.59 2.766l2.13 3.69h8.558l2.13-3.69-2.385-1.609C14.782.427 13.424 0 11.96 0zM5.318 3.236L0 12.425l5.319 9.188 2.384-1.61c.42-.284.927-.435 1.458-.435h5.679c.531 0 1.037.151 1.458.435l2.384 1.61 5.319-9.188-5.319-9.19-2.129 3.692h-8.56l-2.13-3.692z" />
    </svg>
);

const GithubLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const HtmlLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.535 0l1.157 19.34L12 24l9.28-4.66.028-.155L22.465 0H1.535zM17.653 17.9L12 19.86l-5.654-1.96-.549-7.39h11.16l-.271 4.54-4.686 1.48-4.636-1.48-.192-2.58H5.1l.36 4.88 6.54 2.15 6.643-2.15.542-8.83H4.49l-.36-4.87h14.075L17.653 17.9z" />
    </svg>
);

const CssLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.535 0l1.157 19.34L12 24l9.28-4.66.028-.155L22.465 0H1.535zM17.653 17.9L12 19.86l-5.654-1.96-.549-7.39h11.16l-.271 4.54-4.686 1.48-4.636-1.48-.192-2.58H5.1l.36 4.88 6.54 2.15 6.643-2.15.542-8.83H4.49l-.36-4.87h14.075L17.653 17.9z" />
    </svg>
);

const JavascriptLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M24 0v24H0V0h24zm-4.326 21.037c.797 0 1.954-.343 2.809-1.22l-1.354-1.425c-.295.343-.722.617-1.396.617-.985 0-1.666-.69-1.666-1.897V11.66h-2.502v5.6c0 2.27 1.517 3.777 4.109 3.777zM7.568 21.037c1.474 0 2.503-.941 2.503-2.618v-6.759H7.568v6.52c0 .656-.378 1.054-1.073 1.054-.505 0-.843-.274-1.095-.59l-1.474 1.348c.568.865 1.748 1.583 3.642 1.583z" />
    </svg>
);

const NextJsLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M18.665.66c-10.114 0-18.33 8.017-18.33 17.906 0 1.996.326 3.91 1.107 5.642l7.734-11.83 8.356 10.99A17.705 17.705 0 0 0 18.667 24c9.914 0 18.334-8.318 18.334-18.2C36.996 4.793 30.686.66 18.665.66zm8.685 10.126v10.957a16.592 16.592 0 0 1-2.903-1.042V10.786c0-1.657-1.085-2.26-2.03-2.26-1.42 0-2.316 1.04-2.316 2.662v.564l-11.053 14.54a16.522 16.522 0 0 1-5.753-12.72c0-9.284 7.55-16.71 17.004-16.71 8.863 0 16.48 7.375 16.48 16.126l.006.33c0 .03.003-.787.003-2.522l.562-.01z" />
    </svg>
);

const KotlinLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M24 24H0V0h24L12 12Z" />
    </svg>
);

const AndroidLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M17.523 20.306v3.313c0 .178-.145.321-.334.321-.19 0-.335-.143-.335-.321v-3.313H7.076v3.313c0 .178-.146.321-.335.321-.178 0-.323-.143-.323-.321v-3.313C2.859 19.782 0 16.526 0 12.603 0 8.567 2.949 5.258 6.786 4.9V4.686c0-.523.411-.946.935-.946.524 0 .946.423.946.946v.367c2.316-.279 4.706-.279 7.022 0V4.686c0-.523.41-.946.946-.946s.935.423.935.946v.214C21.419 5.258 24 8.567 24 12.603c0 3.923-2.859 7.179-6.477 7.703zM6.92 10.156c-.524 0-.946.423-.946.946s.422.935.946.935c.523 0 .946-.411.946-.935s-.423-.946-.946-.946zm10.024 0c-.523 0-.946.423-.946.946s.423.935.946.935.946-.411.946-.935-.423-.946-.946-.946z" />
    </svg>
);

const ComposeLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M1.328 17.382l5.772-10.038 5.76 10.038H1.328zm6.559-1.576l-2.433-4.238-2.434 4.238h4.867zm5.727-8.324l5.772-10.038 5.76 10.038h-11.532zm6.559-1.576l-2.433-4.238-2.434 4.238h4.867zm-9.39 12.35l5.772-10.038 5.76 10.038H10.783zm6.559-1.576l-2.433-4.238-2.434 4.238h4.867z" />
    </svg>
);

const StudioLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3.56 18.068L5.706 7.644l.87 2.92-3.056 7.42-.058-.049.098.133zm18.397.684L10.871 3.52 7.042 16.7l2.81 9.423 3.57-2.6 3.65 2.585 4.885-7.356zM8.887 18.33l-2.072-6.915-2.083 6.94-1.222.955 3.328 8.441.748-5.32 1.3 4.417 3.328-8.44-1.221-.956h-2.106z" />
    </svg>
);

const LuaLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM12 2.5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5-9.5-4.253-9.5-9.5 4.253-9.5 9.5-9.5zm6.5 6.5A1.5 1.5 0 1 0 17 9a1.5 1.5 0 0 0 1.5-1.5zm-5 5A1.5 1.5 0 1 0 12 14a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
);


const DevelopmentPage: React.FC = () => {
    const developers = [
        {
            name: "Aryan Rajput",
            role: "Lead Full-Stack Developer",
            avatar: "https://picsum.photos/seed/aryan-rajput/400/400",
            bio: "A passionate full-stack developer with expertise in modern web technologies and exceptional leadership skills. Aryan led the technical architecture and full-stack implementation of the entire school website.",
            skills: ["HTML", "CSS", "JS", "React.js", "Next.js", "Kotlin", "Android Dev", "Jetpack Compose", "Android Studio", "Lua", "GitHub"],
            contributions: [
                "Designed and implemented the complete full-stack architecture",
                "Developed responsive frontend layouts and interactive components",
                "Built robust backend APIs and database systems",
                "Integrated modern animations and user interactions",
                "Led the technical decision-making process",
                "Optimized performance and accessibility across the stack"
            ],
            social: {
                github: "https://github.com/aryan-357",
                email: "iamaryan357@gmail.com",
                googleDev: "https://g.dev/Aryan_357"
            }
        },
        {
            name: "Anagh Singh",
            role: "Full-Stack Developer",
            avatar: "https://picsum.photos/seed/anagh-singh/400/400",
            bio: "A creative full-stack developer who excels at both frontend design and backend development. Anagh brought the vision to life through stunning visuals and robust server-side implementation.",
            skills: ["React", "JavaScript", "TypeScript", "Python", "HTML", "CSS", "UI Design", "Figma"],
            contributions: [
                "Created the complete visual design system and frontend components",
                "Developed backend APIs and database schemas",
                "Designed responsive layouts for all screen sizes",
                "Implemented interactive components and animations",
                "Ensured accessibility and usability standards",
                "Crafted the modern aesthetic and brand identity"
            ],
            social: {
                github: "https://github.com/anaghsinghcodingo",
                email: "anaghsingh2013@gmail.com"
            }
        }
    ];

    const techStack = [
        { icon: ReactLogo, name: "React", description: "Modern frontend framework", color: "#61DBFB" },
        { icon: ViteLogo, name: "Vite", description: "Next Generation Frontend Tooling", color: "#646CFF" },
        { icon: TypeScriptLogo, name: "TypeScript", description: "Typed JavaScript at Any Scale", color: "#3178C6" },
        { icon: StrapiLogo, name: "Strapi", description: "Open source Node.js Headless CMS", color: "#4945FF" },
        { icon: ReactSpringLogo, name: "React Spring", description: "Spring-physics based animation library", color: "#FF6D6D" },
        { icon: ReactRouterLogo, name: "React Router", description: "Declarative routing for React", color: "#CA4245" },
        { icon: PostgresLogo, name: "PostgreSQL", description: "Advanced Open Source Relational Database", color: "#336791" },
        { icon: GithubLogo, name: "GitHub", description: "How the world builds software", color: "#1F2328" }
    ];

    return (
        <PageAnimate className="bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Silk Background */}
                <div className="absolute inset-0 z-0">
                    <Silk
                        speed={3}
                        scale={1.5}
                        color="#1a365d"
                        noiseIntensity={1.2}
                        rotation={0}
                        fullScreen={false}
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center pt-20">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="text-af-gold font-bold tracking-[0.5em] text-xs uppercase mb-4 block drop-shadow-lg"
                            variants={fadeInUp}
                            custom={1}
                        >
                            Development Team
                        </motion.span>
                        <motion.h1
                            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl"
                            variants={fadeInUp}
                            custom={2}
                        >
                            Behind the <span className="text-af-gold">Code</span>
                        </motion.h1>
                        <motion.p
                            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium drop-shadow-lg"
                            variants={fadeInUp}
                            custom={3}
                        >
                            Meet the talented developers who brought Air Force School Hindan's digital presence to life.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Developers Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Our <span className="text-af-gold">Developers</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            The brilliant minds behind the development of this modern school website
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {developers.map((developer, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                custom={index}
                                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
                            >
                                {/* Developer Header */}
                                <div className="relative h-48 bg-gradient-to-br from-af-blue to-af-light flex items-center justify-center">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="relative z-10">
                                        <img
                                            src={developer.avatar}
                                            alt={developer.name}
                                            className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Developer Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {developer.name}
                                    </h3>
                                    <p className="text-af-gold font-semibold mb-4">{developer.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        {developer.bio}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technical Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {developer.skills.map((skill, skillIndex) => {
                                                const skillLogos: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
                                                    "React": ReactLogo,
                                                    "React.js": ReactLogo,
                                                    "Vite": ViteLogo,
                                                    "TypeScript": TypeScriptLogo,
                                                    "HTML": HtmlLogo,
                                                    "CSS": CssLogo,
                                                    "JS": JavascriptLogo,
                                                    "JavaScript": JavascriptLogo,
                                                    "Next.js": NextJsLogo,
                                                    "Kotlin": KotlinLogo,
                                                    "Android Dev": AndroidLogo,
                                                    "Jetpack Compose": ComposeLogo,
                                                    "Android Studio": StudioLogo,
                                                    "Lua": LuaLogo,
                                                    "GitHub": GithubLogo,
                                                    "Strapi": StrapiLogo,
                                                    "PostgreSQL": PostgresLogo,
                                                    "React Spring": ReactSpringLogo,
                                                    "React Router": ReactRouterLogo
                                                };

                                                const skillColors: { [key: string]: string } = {
                                                    "React": "#61DBFB",
                                                    "React.js": "#61DBFB",
                                                    "Vite": "#646CFF",
                                                    "TypeScript": "#3178C6",
                                                    "HTML": "#E34F26",
                                                    "CSS": "#1572B6",
                                                    "JS": "#F7DF1E",
                                                    "JavaScript": "#F7DF1E",
                                                    "Next.js": "#000000",
                                                    "Kotlin": "#7F52FF",
                                                    "Android Dev": "#3DDC84",
                                                    "Jetpack Compose": "#4285F4",
                                                    "Android Studio": "#3DDC84",
                                                    "Lua": "#2C2D72",
                                                    "GitHub": "#181717",
                                                    "Strapi": "#4945FF",
                                                    "PostgreSQL": "#336791",
                                                    "React Spring": "#FF6D6D",
                                                    "React Router": "#CA4245"
                                                };

                                                const Logo = skillLogos[skill];
                                                const color = skillColors[skill];

                                                return (
                                                    <span
                                                        key={skillIndex}
                                                        className="px-3 py-1 bg-af-blue/10 text-af-blue dark:bg-af-blue/20 dark:text-af-light text-sm rounded-full flex items-center gap-1.5 hover:bg-af-blue/20 transition-colors"
                                                    >
                                                        {Logo && <Logo className="w-4 h-4" style={{ color: color }} />}
                                                        {skill}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Contributions */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Contributions</h4>
                                        <ul className="space-y-2">
                                            {developer.contributions.map((contribution, contribIndex) => (
                                                <li key={contribIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                                                    <span className="text-af-gold mr-2 mt-1">•</span>
                                                    {contribution}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-4">
                                        <a
                                            href={developer.social.github}
                                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-af-blue/10 dark:hover:bg-af-blue/20 transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <GithubLogo className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                        {'googleDev' in developer.social && (
                                            <a
                                                href={(developer.social as any).googleDev}
                                                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-af-blue/10 dark:hover:bg-af-blue/20 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GoogleDevLogo className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                            </a>
                                        )}
                                        <a
                                            href={`mailto:${developer.social.email}`}
                                            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-af-blue/10 dark:hover:bg-af-blue/20 transition-colors"
                                        >
                                            <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                            Technology <span className="text-af-gold">Stack</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Modern technologies used to build this responsive and interactive website
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                custom={index}
                                className="text-center group"
                            >
                                <div
                                    className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${tech.color}15` }}
                                >
                                    <tech.icon
                                        className="w-10 h-10 transition-colors duration-300"
                                        style={{ color: tech.color }}
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{tech.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Stats */}
            <section className="py-20 bg-gradient-to-r from-af-blue to-af-light text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Project <span className="text-af-gold">Achievements</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: "100%", label: "Responsive Design" },
                            { number: "A+", label: "Performance Grade" },
                            { number: "50+", label: "Components Built" },
                            { number: "2", label: "Weeks Development" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                custom={index}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-af-gold mb-2">{stat.number}</div>
                                <div className="text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageAnimate>
    );
};

export default DevelopmentPage;
