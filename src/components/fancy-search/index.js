import './fancy-search'

import { LitElement, html } from '@polymer/lit-element/';

let items = [
{"id":1,"title":"Face to face","icon":"atm"},
{"id":2,"title":"archive","icon":"atm"},
{"id":3,"title":"Expanded","icon":"atm"},
{"id":4,"title":"well-modulated","icon":"atm"},
{"id":5,"title":"Fundamental","icon":"atm"},
{"id":6,"title":"interface","icon":"atm"},
{"id":7,"title":"model","icon":"atm"},
{"id":8,"title":"bottom-line","icon":"atm"},
{"id":9,"title":"Synergistic","icon":"atm"},
{"id":10,"title":"middleware","icon":"atm"},
{"id":11,"title":"Enterprise-wide","icon":"atm"},
{"id":12,"title":"process improvement","icon":"atm"},
{"id":13,"title":"next generation","icon":"atm"},
{"id":14,"title":"Reactive","icon":"atm"},
{"id":15,"title":"core","icon":"atm"},
{"id":16,"title":"Exclusive","icon":"atm"},
{"id":17,"title":"Implemented","icon":"atm"},
{"id":18,"title":"web-enabled","icon":"atm"},
{"id":19,"title":"Configurable","icon":"atm"},
{"id":20,"title":"customer loyalty","icon":"atm"},
{"id":21,"title":"Organized","icon":"atm"},
{"id":22,"title":"zero administration","icon":"atm"},
{"id":23,"title":"systematic","icon":"atm"},
{"id":24,"title":"Decentralized","icon":"atm"},
{"id":25,"title":"implementation","icon":"atm"},
{"id":26,"title":"zero defect","icon":"atm"},
{"id":27,"title":"background","icon":"atm"},
{"id":28,"title":"Phased","icon":"atm"},
{"id":29,"title":"Multi-lateral","icon":"atm"},
{"id":30,"title":"portal","icon":"atm"},
{"id":31,"title":"Open-architected","icon":"atm"},
{"id":32,"title":"even-keeled","icon":"atm"},
{"id":33,"title":"encompassing","icon":"atm"},
{"id":34,"title":"local","icon":"atm"},
{"id":35,"title":"instruction set","icon":"atm"},
{"id":36,"title":"Organic","icon":"atm"},
{"id":37,"title":"24/7","icon":"atm"},
{"id":38,"title":"user-facing","icon":"atm"},
{"id":39,"title":"throughput","icon":"atm"},
{"id":40,"title":"Vision-oriented","icon":"atm"},
{"id":41,"title":"neutral","icon":"atm"},
{"id":42,"title":"concept","icon":"atm"},
{"id":43,"title":"directional","icon":"atm"},
{"id":44,"title":"contextually-based","icon":"atm"},
{"id":45,"title":"even-keeled","icon":"atm"},
{"id":46,"title":"contextually-based","icon":"atm"},
{"id":47,"title":"tertiary","icon":"atm"},
{"id":48,"title":"Distributed","icon":"atm"},
{"id":49,"title":"intermediate","icon":"atm"},
{"id":50,"title":"concept","icon":"atm"},
{"id":51,"title":"Devolved","icon":"atm"},
{"id":52,"title":"tertiary","icon":"atm"},
{"id":53,"title":"24 hour","icon":"atm"},
{"id":54,"title":"bifurcated","icon":"atm"},
{"id":55,"title":"orchestration","icon":"atm"},
{"id":56,"title":"Profit-focused","icon":"atm"},
{"id":57,"title":"user-facing","icon":"atm"},
{"id":58,"title":"Stand-alone","icon":"atm"},
{"id":59,"title":"moderator","icon":"atm"},
{"id":60,"title":"Managed","icon":"atm"},
{"id":61,"title":"intermediate","icon":"atm"},
{"id":62,"title":"emulation","icon":"atm"},
{"id":63,"title":"radical","icon":"atm"},
{"id":64,"title":"neutral","icon":"atm"},
{"id":65,"title":"Exclusive","icon":"atm"},
{"id":66,"title":"customer loyalty","icon":"atm"},
{"id":67,"title":"scalable","icon":"atm"},
{"id":68,"title":"protocol","icon":"atm"},
{"id":69,"title":"Synergistic","icon":"atm"},
{"id":70,"title":"system engine","icon":"atm"},
{"id":71,"title":"flexibility","icon":"atm"},
{"id":72,"title":"human-resource","icon":"atm"},
{"id":73,"title":"scalable","icon":"atm"},
{"id":74,"title":"Digitized","icon":"atm"},
{"id":75,"title":"directional","icon":"atm"},
{"id":76,"title":"Robust","icon":"atm"},
{"id":77,"title":"portal","icon":"atm"},
{"id":78,"title":"framework","icon":"atm"},
{"id":79,"title":"Intuitive","icon":"atm"},
{"id":80,"title":"Focused","icon":"atm"},
{"id":81,"title":"Cross-platform","icon":"atm"},
{"id":82,"title":"protocol","icon":"atm"},
{"id":83,"title":"Down-sized","icon":"atm"},
{"id":84,"title":"Self-enabling","icon":"atm"},
{"id":85,"title":"Digitized","icon":"atm"},
{"id":86,"title":"modular","icon":"atm"},
{"id":87,"title":"project","icon":"atm"},
{"id":88,"title":"3rd generation","icon":"atm"},
{"id":89,"title":"time-frame","icon":"atm"},
{"id":90,"title":"neutral","icon":"atm"},
{"id":91,"title":"intangible","icon":"atm"},
{"id":92,"title":"Future-proofed","icon":"atm"},
{"id":93,"title":"radical","icon":"atm"},
{"id":94,"title":"real-time","icon":"atm"},
{"id":95,"title":"Decentralized","icon":"atm"},
{"id":96,"title":"Balanced","icon":"atm"},
{"id":97,"title":"Customer-focused","icon":"atm"},
{"id":98,"title":"functionalities","icon":"atm"},
{"id":99,"title":"benchmark","icon":"atm"},
{"id":100,"title":"Organic","icon":"atm"},
{"id":101,"title":"firmware","icon":"atm"},
{"id":102,"title":"utilisation","icon":"atm"},
{"id":103,"title":"Streamlined","icon":"atm"},
{"id":104,"title":"flexibility","icon":"atm"},
{"id":105,"title":"Synergistic","icon":"atm"},
{"id":106,"title":"Synergized","icon":"atm"},
{"id":107,"title":"encompassing","icon":"atm"},
{"id":108,"title":"customer loyalty","icon":"atm"},
{"id":109,"title":"artificial intelligence","icon":"atm"},
{"id":110,"title":"Team-oriented","icon":"atm"},
{"id":111,"title":"process improvement","icon":"atm"},
{"id":112,"title":"encryption","icon":"atm"},
{"id":113,"title":"zero defect","icon":"atm"},
{"id":114,"title":"coherent","icon":"atm"},
{"id":115,"title":"interface","icon":"atm"},
{"id":116,"title":"budgetary management","icon":"atm"},
{"id":117,"title":"Centralized","icon":"atm"},
{"id":118,"title":"extranet","icon":"atm"},
{"id":119,"title":"Multi-tiered","icon":"atm"},
{"id":120,"title":"internet solution","icon":"atm"},
{"id":121,"title":"open system","icon":"atm"},
{"id":122,"title":"Optimized","icon":"atm"},
{"id":123,"title":"paradigm","icon":"atm"},
{"id":124,"title":"portal","icon":"atm"},
{"id":125,"title":"needs-based","icon":"atm"},
{"id":126,"title":"User-friendly","icon":"atm"},
{"id":127,"title":"optimal","icon":"atm"},
{"id":128,"title":"asymmetric","icon":"atm"},
{"id":129,"title":"Synergized","icon":"atm"},
{"id":130,"title":"Multi-channelled","icon":"atm"},
{"id":131,"title":"conglomeration","icon":"atm"},
{"id":132,"title":"Digitized","icon":"atm"},
{"id":133,"title":"neutral","icon":"atm"},
{"id":134,"title":"ability","icon":"atm"},
{"id":135,"title":"5th generation","icon":"atm"},
{"id":136,"title":"even-keeled","icon":"atm"},
{"id":137,"title":"toolset","icon":"atm"},
{"id":138,"title":"utilisation","icon":"atm"},
{"id":139,"title":"Secured","icon":"atm"},
{"id":140,"title":"pricing structure","icon":"atm"},
{"id":141,"title":"workforce","icon":"atm"},
{"id":142,"title":"focus group","icon":"atm"},
{"id":143,"title":"Sharable","icon":"atm"},
{"id":144,"title":"Reactive","icon":"atm"},
{"id":145,"title":"collaboration","icon":"atm"},
{"id":146,"title":"intranet","icon":"atm"},
{"id":147,"title":"analyzing","icon":"atm"},
{"id":148,"title":"upward-trending","icon":"atm"},
{"id":149,"title":"stable","icon":"atm"},
{"id":150,"title":"matrices","icon":"atm"},
{"id":151,"title":"empowering","icon":"atm"},
{"id":152,"title":"maximized","icon":"atm"},
{"id":153,"title":"hierarchy","icon":"atm"},
{"id":154,"title":"Implemented","icon":"atm"},
{"id":155,"title":"multimedia","icon":"atm"},
{"id":156,"title":"open system","icon":"atm"},
{"id":157,"title":"context-sensitive","icon":"atm"},
{"id":158,"title":"Proactive","icon":"atm"},
{"id":159,"title":"architecture","icon":"atm"},
{"id":160,"title":"system engine","icon":"atm"},
{"id":161,"title":"Vision-oriented","icon":"atm"},
{"id":162,"title":"Assimilated","icon":"atm"},
{"id":163,"title":"focus group","icon":"atm"},
{"id":164,"title":"Versatile","icon":"atm"},
{"id":165,"title":"clear-thinking","icon":"atm"},
{"id":166,"title":"model","icon":"atm"},
{"id":167,"title":"Polarised","icon":"atm"},
{"id":168,"title":"Managed","icon":"atm"},
{"id":169,"title":"function","icon":"atm"},
{"id":170,"title":"methodology","icon":"atm"},
{"id":171,"title":"Centralized","icon":"atm"},
{"id":172,"title":"paradigm","icon":"atm"},
{"id":173,"title":"local area network","icon":"atm"},
{"id":174,"title":"human-resource","icon":"atm"},
{"id":175,"title":"asynchronous","icon":"atm"},
{"id":176,"title":"demand-driven","icon":"atm"},
{"id":177,"title":"explicit","icon":"atm"},
{"id":178,"title":"hierarchy","icon":"atm"},
{"id":179,"title":"initiative","icon":"atm"},
{"id":180,"title":"dedicated","icon":"atm"},
{"id":181,"title":"Synergized","icon":"atm"},
{"id":182,"title":"hybrid","icon":"atm"},
{"id":183,"title":"project","icon":"atm"},
{"id":184,"title":"impactful","icon":"atm"},
{"id":185,"title":"parallelism","icon":"atm"},
{"id":186,"title":"Cloned","icon":"atm"},
{"id":187,"title":"Team-oriented","icon":"atm"},
{"id":188,"title":"parallelism","icon":"atm"},
{"id":189,"title":"Compatible","icon":"atm"},
{"id":190,"title":"archive","icon":"atm"},
{"id":191,"title":"clear-thinking","icon":"atm"},
{"id":192,"title":"throughput","icon":"atm"},
{"id":193,"title":"structure","icon":"atm"},
{"id":194,"title":"Business-focused","icon":"atm"},
{"id":195,"title":"benchmark","icon":"atm"},
{"id":196,"title":"Business-focused","icon":"atm"},
{"id":197,"title":"human-resource","icon":"atm"},
{"id":198,"title":"Operative","icon":"atm"},
{"id":199,"title":"bottom-line","icon":"atm"},
{"id":200,"title":"background","icon":"atm"},
{"id":201,"title":"multimedia","icon":"atm"},
{"id":202,"title":"homogeneous","icon":"atm"},
{"id":203,"title":"ability","icon":"atm"},
{"id":204,"title":"3rd generation","icon":"atm"},
{"id":205,"title":"holistic","icon":"atm"},
{"id":206,"title":"User-centric","icon":"atm"},
{"id":207,"title":"Monitored","icon":"atm"},
{"id":208,"title":"cohesive","icon":"atm"},
{"id":209,"title":"infrastructure","icon":"atm"},
{"id":210,"title":"monitoring","icon":"atm"},
{"id":211,"title":"Right-sized","icon":"atm"},
{"id":212,"title":"open architecture","icon":"atm"},
{"id":213,"title":"secondary","icon":"atm"},
{"id":214,"title":"Robust","icon":"atm"},
{"id":215,"title":"Object-based","icon":"atm"},
{"id":216,"title":"Exclusive","icon":"atm"},
{"id":217,"title":"matrix","icon":"atm"},
{"id":218,"title":"motivating","icon":"atm"},
{"id":219,"title":"customer loyalty","icon":"atm"},
{"id":220,"title":"application","icon":"atm"},
{"id":221,"title":"structure","icon":"atm"},
{"id":222,"title":"solution-oriented","icon":"atm"},
{"id":223,"title":"logistical","icon":"atm"},
{"id":224,"title":"Fully-configurable","icon":"atm"},
{"id":225,"title":"holistic","icon":"atm"},
{"id":226,"title":"Diverse","icon":"atm"},
{"id":227,"title":"Graphical User Interface","icon":"atm"},
{"id":228,"title":"Streamlined","icon":"atm"},
{"id":229,"title":"Persistent","icon":"atm"},
{"id":230,"title":"Multi-layered","icon":"atm"},
{"id":231,"title":"6th generation","icon":"atm"},
{"id":232,"title":"dynamic","icon":"atm"},
{"id":233,"title":"access","icon":"atm"},
{"id":234,"title":"scalable","icon":"atm"},
{"id":235,"title":"Business-focused","icon":"atm"},
{"id":236,"title":"even-keeled","icon":"atm"},
{"id":237,"title":"Reverse-engineered","icon":"atm"},
{"id":238,"title":"contextually-based","icon":"atm"},
{"id":239,"title":"User-friendly","icon":"atm"},
{"id":240,"title":"web-enabled","icon":"atm"},
{"id":241,"title":"fault-tolerant","icon":"atm"},
{"id":242,"title":"open system","icon":"atm"},
{"id":243,"title":"Stand-alone","icon":"atm"},
{"id":244,"title":"foreground","icon":"atm"},
{"id":245,"title":"Extended","icon":"atm"},
{"id":246,"title":"model","icon":"atm"},
{"id":247,"title":"Assimilated","icon":"atm"},
{"id":248,"title":"leverage","icon":"atm"},
{"id":249,"title":"core","icon":"atm"},
{"id":250,"title":"moderator","icon":"atm"},
{"id":251,"title":"Face to face","icon":"atm"},
{"id":252,"title":"Seamless","icon":"atm"},
{"id":253,"title":"initiative","icon":"atm"},
{"id":254,"title":"Profit-focused","icon":"atm"},
{"id":255,"title":"eco-centric","icon":"atm"},
{"id":256,"title":"Seamless","icon":"atm"},
{"id":257,"title":"Expanded","icon":"atm"},
{"id":258,"title":"Distributed","icon":"atm"},
{"id":259,"title":"neural-net","icon":"atm"},
{"id":260,"title":"Sharable","icon":"atm"},
{"id":261,"title":"Versatile","icon":"atm"},
{"id":262,"title":"scalable","icon":"atm"},
{"id":263,"title":"mobile","icon":"atm"},
{"id":264,"title":"bi-directional","icon":"atm"},
{"id":265,"title":"open system","icon":"atm"},
{"id":266,"title":"Automated","icon":"atm"},
{"id":267,"title":"solution","icon":"atm"},
{"id":268,"title":"orchestration","icon":"atm"},
{"id":269,"title":"support","icon":"atm"},
{"id":270,"title":"bottom-line","icon":"atm"},
{"id":271,"title":"Reduced","icon":"atm"},
{"id":272,"title":"Multi-tiered","icon":"atm"},
{"id":273,"title":"Sharable","icon":"atm"},
{"id":274,"title":"24 hour","icon":"atm"},
{"id":275,"title":"open system","icon":"atm"},
{"id":276,"title":"context-sensitive","icon":"atm"},
{"id":277,"title":"bottom-line","icon":"atm"},
{"id":278,"title":"groupware","icon":"atm"},
{"id":279,"title":"Multi-tiered","icon":"atm"},
{"id":280,"title":"infrastructure","icon":"atm"},
{"id":281,"title":"hybrid","icon":"atm"},
{"id":282,"title":"Horizontal","icon":"atm"},
{"id":283,"title":"Distributed","icon":"atm"},
{"id":284,"title":"Extended","icon":"atm"},
{"id":285,"title":"Synergistic","icon":"atm"},
{"id":286,"title":"executive","icon":"atm"},
{"id":287,"title":"circuit","icon":"atm"},
{"id":288,"title":"Implemented","icon":"atm"},
{"id":289,"title":"ability","icon":"atm"},
{"id":290,"title":"Grass-roots","icon":"atm"},
{"id":291,"title":"5th generation","icon":"atm"},
{"id":292,"title":"success","icon":"atm"},
{"id":293,"title":"fresh-thinking","icon":"atm"},
{"id":294,"title":"motivating","icon":"atm"},
{"id":295,"title":"context-sensitive","icon":"atm"},
{"id":296,"title":"forecast","icon":"atm"},
{"id":297,"title":"intermediate","icon":"atm"},
{"id":298,"title":"upward-trending","icon":"atm"},
{"id":299,"title":"Object-based","icon":"atm"},
{"id":300,"title":"attitude-oriented","icon":"atm"},
{"id":301,"title":"modular","icon":"atm"},
{"id":302,"title":"task-force","icon":"atm"},
{"id":303,"title":"Extended","icon":"atm"},
{"id":304,"title":"actuating","icon":"atm"},
{"id":305,"title":"Grass-roots","icon":"atm"},
{"id":306,"title":"Multi-layered","icon":"atm"},
{"id":307,"title":"object-oriented","icon":"atm"},
{"id":308,"title":"scalable","icon":"atm"},
{"id":309,"title":"Total","icon":"atm"},
{"id":310,"title":"Exclusive","icon":"atm"},
{"id":311,"title":"motivating","icon":"atm"},
{"id":312,"title":"Adaptive","icon":"atm"},
{"id":313,"title":"object-oriented","icon":"atm"},
{"id":314,"title":"optimizing","icon":"atm"},
{"id":315,"title":"executive","icon":"atm"},
{"id":316,"title":"customer loyalty","icon":"atm"},
{"id":317,"title":"Visionary","icon":"atm"},
{"id":318,"title":"Proactive","icon":"atm"},
{"id":319,"title":"approach","icon":"atm"},
{"id":320,"title":"Open-source","icon":"atm"},
{"id":321,"title":"incremental","icon":"atm"},
{"id":322,"title":"executive","icon":"atm"},
{"id":323,"title":"orchestration","icon":"atm"},
{"id":324,"title":"moratorium","icon":"atm"},
{"id":325,"title":"web-enabled","icon":"atm"},
{"id":326,"title":"leading edge","icon":"atm"},
{"id":327,"title":"time-frame","icon":"atm"},
{"id":328,"title":"Customizable","icon":"atm"},
{"id":329,"title":"User-centric","icon":"atm"},
{"id":330,"title":"asynchronous","icon":"atm"},
{"id":331,"title":"website","icon":"atm"},
{"id":332,"title":"system-worthy","icon":"atm"},
{"id":333,"title":"even-keeled","icon":"atm"},
{"id":334,"title":"Multi-tiered","icon":"atm"},
{"id":335,"title":"workforce","icon":"atm"},
{"id":336,"title":"zero defect","icon":"atm"},
{"id":337,"title":"Optional","icon":"atm"},
{"id":338,"title":"orchestration","icon":"atm"},
{"id":339,"title":"user-facing","icon":"atm"},
{"id":340,"title":"client-server","icon":"atm"},
{"id":341,"title":"Distributed","icon":"atm"},
{"id":342,"title":"Synchronised","icon":"atm"},
{"id":343,"title":"Down-sized","icon":"atm"},
{"id":344,"title":"content-based","icon":"atm"},
{"id":345,"title":"Sharable","icon":"atm"},
{"id":346,"title":"concept","icon":"atm"},
{"id":347,"title":"Integrated","icon":"atm"},
{"id":348,"title":"Monitored","icon":"atm"},
{"id":349,"title":"archive","icon":"atm"},
{"id":350,"title":"Sharable","icon":"atm"},
{"id":351,"title":"object-oriented","icon":"atm"},
{"id":352,"title":"Streamlined","icon":"atm"},
{"id":353,"title":"Optimized","icon":"atm"},
{"id":354,"title":"Inverse","icon":"atm"},
{"id":355,"title":"leading edge","icon":"atm"},
{"id":356,"title":"Re-engineered","icon":"atm"},
{"id":357,"title":"impactful","icon":"atm"},
{"id":358,"title":"impactful","icon":"atm"},
{"id":359,"title":"Profit-focused","icon":"atm"},
{"id":360,"title":"core","icon":"atm"},
{"id":361,"title":"Robust","icon":"atm"},
{"id":362,"title":"Pre-emptive","icon":"atm"},
{"id":363,"title":"grid-enabled","icon":"atm"},
{"id":364,"title":"core","icon":"atm"},
{"id":365,"title":"tangible","icon":"atm"},
{"id":366,"title":"Seamless","icon":"atm"},
{"id":367,"title":"human-resource","icon":"atm"},
{"id":368,"title":"architecture","icon":"atm"},
{"id":369,"title":"3rd generation","icon":"atm"},
{"id":370,"title":"Assimilated","icon":"atm"},
{"id":371,"title":"Function-based","icon":"atm"},
{"id":372,"title":"zero administration","icon":"atm"},
{"id":373,"title":"monitoring","icon":"atm"},
{"id":374,"title":"clear-thinking","icon":"atm"},
{"id":375,"title":"array","icon":"atm"},
{"id":376,"title":"Persistent","icon":"atm"},
{"id":377,"title":"Optimized","icon":"atm"},
{"id":378,"title":"scalable","icon":"atm"},
{"id":379,"title":"software","icon":"atm"},
{"id":380,"title":"methodology","icon":"atm"},
{"id":381,"title":"Cross-platform","icon":"atm"},
{"id":382,"title":"product","icon":"atm"},
{"id":383,"title":"Synchronised","icon":"atm"},
{"id":384,"title":"24 hour","icon":"atm"},
{"id":385,"title":"strategy","icon":"atm"},
{"id":386,"title":"Extended","icon":"atm"},
{"id":387,"title":"5th generation","icon":"atm"},
{"id":388,"title":"Total","icon":"atm"},
{"id":389,"title":"asymmetric","icon":"atm"},
{"id":390,"title":"Ameliorated","icon":"atm"},
{"id":391,"title":"Automated","icon":"atm"},
{"id":392,"title":"secured line","icon":"atm"},
{"id":393,"title":"toolset","icon":"atm"},
{"id":394,"title":"contingency","icon":"atm"},
{"id":395,"title":"systematic","icon":"atm"},
{"id":396,"title":"hub","icon":"atm"},
{"id":397,"title":"Open-architected","icon":"atm"},
{"id":398,"title":"6th generation","icon":"atm"},
{"id":399,"title":"model","icon":"atm"},
{"id":400,"title":"Decentralized","icon":"atm"},
{"id":401,"title":"bi-directional","icon":"atm"},
{"id":402,"title":"success","icon":"atm"},
{"id":403,"title":"User-friendly","icon":"atm"},
{"id":404,"title":"framework","icon":"atm"},
{"id":405,"title":"high-level","icon":"atm"},
{"id":406,"title":"neutral","icon":"atm"},
{"id":407,"title":"explicit","icon":"atm"},
{"id":408,"title":"6th generation","icon":"atm"},
{"id":409,"title":"mobile","icon":"atm"},
{"id":410,"title":"hybrid","icon":"atm"},
{"id":411,"title":"intranet","icon":"atm"},
{"id":412,"title":"Graphic Interface","icon":"atm"},
{"id":413,"title":"circuit","icon":"atm"},
{"id":414,"title":"needs-based","icon":"atm"},
{"id":415,"title":"definition","icon":"atm"},
{"id":416,"title":"Business-focused","icon":"atm"},
{"id":417,"title":"Inverse","icon":"atm"},
{"id":418,"title":"installation","icon":"atm"},
{"id":419,"title":"local","icon":"atm"},
{"id":420,"title":"Intuitive","icon":"atm"},
{"id":421,"title":"project","icon":"atm"},
{"id":422,"title":"database","icon":"atm"},
{"id":423,"title":"encompassing","icon":"atm"},
{"id":424,"title":"synergy","icon":"atm"},
{"id":425,"title":"Intuitive","icon":"atm"},
{"id":426,"title":"foreground","icon":"atm"},
{"id":427,"title":"exuding","icon":"atm"},
{"id":428,"title":"solution-oriented","icon":"atm"},
{"id":429,"title":"systemic","icon":"atm"},
{"id":430,"title":"Innovative","icon":"atm"},
{"id":431,"title":"synergy","icon":"atm"},
{"id":432,"title":"moderator","icon":"atm"},
{"id":433,"title":"analyzing","icon":"atm"},
{"id":434,"title":"high-level","icon":"atm"},
{"id":435,"title":"project","icon":"atm"},
{"id":436,"title":"disintermediate","icon":"atm"},
{"id":437,"title":"Realigned","icon":"atm"},
{"id":438,"title":"benchmark","icon":"atm"},
{"id":439,"title":"solution-oriented","icon":"atm"},
{"id":440,"title":"pricing structure","icon":"atm"},
{"id":441,"title":"reciprocal","icon":"atm"},
{"id":442,"title":"architecture","icon":"atm"},
{"id":443,"title":"Progressive","icon":"atm"},
{"id":444,"title":"User-friendly","icon":"atm"},
{"id":445,"title":"interface","icon":"atm"},
{"id":446,"title":"utilisation","icon":"atm"},
{"id":447,"title":"Networked","icon":"atm"},
{"id":448,"title":"Configurable","icon":"atm"},
{"id":449,"title":"User-friendly","icon":"atm"},
{"id":450,"title":"3rd generation","icon":"atm"},
{"id":451,"title":"needs-based","icon":"atm"},
{"id":452,"title":"tertiary","icon":"atm"},
{"id":453,"title":"implementation","icon":"atm"},
{"id":454,"title":"impactful","icon":"atm"},
{"id":455,"title":"systemic","icon":"atm"},
{"id":456,"title":"alliance","icon":"atm"},
{"id":457,"title":"solution","icon":"atm"},
{"id":458,"title":"Digitized","icon":"atm"},
{"id":459,"title":"Decentralized","icon":"atm"},
{"id":460,"title":"contextually-based","icon":"atm"},
{"id":461,"title":"Extended","icon":"atm"},
{"id":462,"title":"Grass-roots","icon":"atm"},
{"id":463,"title":"database","icon":"atm"},
{"id":464,"title":"approach","icon":"atm"},
{"id":465,"title":"bifurcated","icon":"atm"},
{"id":466,"title":"clear-thinking","icon":"atm"},
{"id":467,"title":"Persistent","icon":"atm"},
{"id":468,"title":"secondary","icon":"atm"},
{"id":469,"title":"project","icon":"atm"},
{"id":470,"title":"explicit","icon":"atm"},
{"id":471,"title":"Automated","icon":"atm"},
{"id":472,"title":"leverage","icon":"atm"},
{"id":473,"title":"installation","icon":"atm"},
{"id":474,"title":"encoding","icon":"atm"},
{"id":475,"title":"Multi-lateral","icon":"atm"},
{"id":476,"title":"internet solution","icon":"atm"},
{"id":477,"title":"client-driven","icon":"atm"},
{"id":478,"title":"throughput","icon":"atm"},
{"id":479,"title":"Open-source","icon":"atm"},
{"id":480,"title":"emulation","icon":"atm"},
{"id":481,"title":"modular","icon":"atm"},
{"id":482,"title":"success","icon":"atm"},
{"id":483,"title":"reciprocal","icon":"atm"},
{"id":484,"title":"zero tolerance","icon":"atm"},
{"id":485,"title":"Graphic Interface","icon":"atm"},
{"id":486,"title":"flexibility","icon":"atm"},
{"id":487,"title":"Cross-platform","icon":"atm"},
{"id":488,"title":"strategy","icon":"atm"},
{"id":489,"title":"neutral","icon":"atm"},
{"id":490,"title":"asynchronous","icon":"atm"},
{"id":491,"title":"Front-line","icon":"atm"},
{"id":492,"title":"matrices","icon":"atm"},
{"id":493,"title":"Fundamental","icon":"atm"},
{"id":494,"title":"Face to face","icon":"atm"},
{"id":495,"title":"Public-key","icon":"atm"},
{"id":496,"title":"client-driven","icon":"atm"},
{"id":497,"title":"exuding","icon":"atm"},
{"id":498,"title":"systemic","icon":"atm"},
{"id":499,"title":"budgetary management","icon":"atm"},
{"id":500,"title":"asynchronous","icon":"atm"},
{"id":501,"title":"open architecture","icon":"atm"},
{"id":502,"title":"responsive","icon":"atm"},
{"id":503,"title":"local","icon":"atm"},
{"id":504,"title":"responsive","icon":"atm"},
{"id":505,"title":"productivity","icon":"atm"},
{"id":506,"title":"circuit","icon":"atm"},
{"id":507,"title":"Adaptive","icon":"atm"},
{"id":508,"title":"Multi-layered","icon":"atm"},
{"id":509,"title":"Enterprise-wide","icon":"atm"},
{"id":510,"title":"Quality-focused","icon":"atm"},
{"id":511,"title":"Versatile","icon":"atm"},
{"id":512,"title":"foreground","icon":"atm"},
{"id":513,"title":"core","icon":"atm"},
{"id":514,"title":"Polarised","icon":"atm"},
{"id":515,"title":"function","icon":"atm"},
{"id":516,"title":"system-worthy","icon":"atm"},
{"id":517,"title":"multimedia","icon":"atm"},
{"id":518,"title":"client-server","icon":"atm"},
{"id":519,"title":"reciprocal","icon":"atm"},
{"id":520,"title":"asymmetric","icon":"atm"},
{"id":521,"title":"product","icon":"atm"},
{"id":522,"title":"emulation","icon":"atm"},
{"id":523,"title":"reciprocal","icon":"atm"},
{"id":524,"title":"Mandatory","icon":"atm"},
{"id":525,"title":"Configurable","icon":"atm"},
{"id":526,"title":"intangible","icon":"atm"},
{"id":527,"title":"orchestration","icon":"atm"},
{"id":528,"title":"Visionary","icon":"atm"},
{"id":529,"title":"challenge","icon":"atm"},
{"id":530,"title":"service-desk","icon":"atm"},
{"id":531,"title":"Cross-group","icon":"atm"},
{"id":532,"title":"Integrated","icon":"atm"},
{"id":533,"title":"even-keeled","icon":"atm"},
{"id":534,"title":"approach","icon":"atm"},
{"id":535,"title":"hierarchy","icon":"atm"},
{"id":536,"title":"superstructure","icon":"atm"},
{"id":537,"title":"Inverse","icon":"atm"},
{"id":538,"title":"explicit","icon":"atm"},
{"id":539,"title":"discrete","icon":"atm"},
{"id":540,"title":"web-enabled","icon":"atm"},
{"id":541,"title":"alliance","icon":"atm"},
{"id":542,"title":"Centralized","icon":"atm"},
{"id":543,"title":"pricing structure","icon":"atm"},
{"id":544,"title":"approach","icon":"atm"},
{"id":545,"title":"workforce","icon":"atm"},
{"id":546,"title":"human-resource","icon":"atm"},
{"id":547,"title":"bottom-line","icon":"atm"},
{"id":548,"title":"contingency","icon":"atm"},
{"id":549,"title":"Seamless","icon":"atm"},
{"id":550,"title":"Multi-tiered","icon":"atm"},
{"id":551,"title":"Automated","icon":"atm"},
{"id":552,"title":"Re-contextualized","icon":"atm"},
{"id":553,"title":"Virtual","icon":"atm"},
{"id":554,"title":"Enterprise-wide","icon":"atm"},
{"id":555,"title":"impactful","icon":"atm"},
{"id":556,"title":"Realigned","icon":"atm"},
{"id":557,"title":"capability","icon":"atm"},
{"id":558,"title":"Switchable","icon":"atm"},
{"id":559,"title":"national","icon":"atm"},
{"id":560,"title":"Enterprise-wide","icon":"atm"},
{"id":561,"title":"value-added","icon":"atm"},
{"id":562,"title":"installation","icon":"atm"},
{"id":563,"title":"system-worthy","icon":"atm"},
{"id":564,"title":"budgetary management","icon":"atm"},
{"id":565,"title":"exuding","icon":"atm"},
{"id":566,"title":"Proactive","icon":"atm"},
{"id":567,"title":"Ameliorated","icon":"atm"},
{"id":568,"title":"well-modulated","icon":"atm"},
{"id":569,"title":"Reduced","icon":"atm"},
{"id":570,"title":"Networked","icon":"atm"},
{"id":571,"title":"Secured","icon":"atm"},
{"id":572,"title":"structure","icon":"atm"},
{"id":573,"title":"algorithm","icon":"atm"},
{"id":574,"title":"toolset","icon":"atm"},
{"id":575,"title":"synergy","icon":"atm"},
{"id":576,"title":"Enterprise-wide","icon":"atm"},
{"id":577,"title":"asymmetric","icon":"atm"},
{"id":578,"title":"exuding","icon":"atm"},
{"id":579,"title":"didactic","icon":"atm"},
{"id":580,"title":"secured line","icon":"atm"},
{"id":581,"title":"Compatible","icon":"atm"},
{"id":582,"title":"didactic","icon":"atm"},
{"id":583,"title":"web-enabled","icon":"atm"},
{"id":584,"title":"toolset","icon":"atm"},
{"id":585,"title":"Expanded","icon":"atm"},
{"id":586,"title":"leading edge","icon":"atm"},
{"id":587,"title":"Distributed","icon":"atm"},
{"id":588,"title":"directional","icon":"atm"},
{"id":589,"title":"User-centric","icon":"atm"},
{"id":590,"title":"hierarchy","icon":"atm"},
{"id":591,"title":"Object-based","icon":"atm"},
{"id":592,"title":"emulation","icon":"atm"},
{"id":593,"title":"Customer-focused","icon":"atm"},
{"id":594,"title":"content-based","icon":"atm"},
{"id":595,"title":"Synergized","icon":"atm"},
{"id":596,"title":"knowledge base","icon":"atm"},
{"id":597,"title":"explicit","icon":"atm"},
{"id":598,"title":"Robust","icon":"atm"},
{"id":599,"title":"task-force","icon":"atm"},
{"id":600,"title":"intranet","icon":"atm"},
{"id":601,"title":"logistical","icon":"atm"},
{"id":602,"title":"content-based","icon":"atm"},
{"id":603,"title":"fresh-thinking","icon":"atm"},
{"id":604,"title":"Fundamental","icon":"atm"},
{"id":605,"title":"dedicated","icon":"atm"},
{"id":606,"title":"Reactive","icon":"atm"},
{"id":607,"title":"Secured","icon":"atm"},
{"id":608,"title":"Operative","icon":"atm"},
{"id":609,"title":"function","icon":"atm"},
{"id":610,"title":"system-worthy","icon":"atm"},
{"id":611,"title":"project","icon":"atm"},
{"id":612,"title":"radical","icon":"atm"},
{"id":613,"title":"asynchronous","icon":"atm"},
{"id":614,"title":"full-range","icon":"atm"},
{"id":615,"title":"circuit","icon":"atm"},
{"id":616,"title":"24/7","icon":"atm"},
{"id":617,"title":"array","icon":"atm"},
{"id":618,"title":"analyzing","icon":"atm"},
{"id":619,"title":"Switchable","icon":"atm"},
{"id":620,"title":"global","icon":"atm"},
{"id":621,"title":"foreground","icon":"atm"},
{"id":622,"title":"multi-tasking","icon":"atm"},
{"id":623,"title":"Cross-platform","icon":"atm"},
{"id":624,"title":"coherent","icon":"atm"},
{"id":625,"title":"leverage","icon":"atm"},
{"id":626,"title":"demand-driven","icon":"atm"},
{"id":627,"title":"stable","icon":"atm"},
{"id":628,"title":"methodology","icon":"atm"},
{"id":629,"title":"help-desk","icon":"atm"},
{"id":630,"title":"dynamic","icon":"atm"},
{"id":631,"title":"attitude-oriented","icon":"atm"},
{"id":632,"title":"Proactive","icon":"atm"},
{"id":633,"title":"mobile","icon":"atm"},
{"id":634,"title":"global","icon":"atm"},
{"id":635,"title":"Proactive","icon":"atm"},
{"id":636,"title":"secondary","icon":"atm"},
{"id":637,"title":"Inverse","icon":"atm"},
{"id":638,"title":"hybrid","icon":"atm"},
{"id":639,"title":"time-frame","icon":"atm"},
{"id":640,"title":"Diverse","icon":"atm"},
{"id":641,"title":"Realigned","icon":"atm"},
{"id":642,"title":"conglomeration","icon":"atm"},
{"id":643,"title":"migration","icon":"atm"},
{"id":644,"title":"Re-engineered","icon":"atm"},
{"id":645,"title":"leverage","icon":"atm"},
{"id":646,"title":"tangible","icon":"atm"},
{"id":647,"title":"utilisation","icon":"atm"},
{"id":648,"title":"frame","icon":"atm"},
{"id":649,"title":"Centralized","icon":"atm"},
{"id":650,"title":"artificial intelligence","icon":"atm"},
{"id":651,"title":"Proactive","icon":"atm"},
{"id":652,"title":"artificial intelligence","icon":"atm"},
{"id":653,"title":"leading edge","icon":"atm"},
{"id":654,"title":"functionalities","icon":"atm"},
{"id":655,"title":"projection","icon":"atm"},
{"id":656,"title":"Multi-tiered","icon":"atm"},
{"id":657,"title":"Cross-group","icon":"atm"},
{"id":658,"title":"leading edge","icon":"atm"},
{"id":659,"title":"instruction set","icon":"atm"},
{"id":660,"label":"access","icon":"atm"},
{"id":661,"title":"extranet","icon":"atm"},
{"id":662,"title":"adapter","icon":"atm"},
{"id":663,"title":"bifurcated","icon":"atm"},
{"id":664,"title":"hybrid","icon":"atm"},
{"id":665,"title":"Multi-lateral","icon":"atm"},
{"id":666,"title":"Secured","icon":"atm"},
{"id":667,"title":"array","icon":"atm"},
{"id":668,"title":"support","icon":"atm"},
{"id":669,"title":"portal","icon":"atm"},
{"id":670,"title":"Pre-emptive","icon":"atm"},
{"id":671,"title":"data-warehouse","icon":"atm"},
{"id":672,"title":"utilisation","icon":"atm"},
{"id":673,"title":"directional","icon":"atm"},
{"id":674,"title":"disintermediate","icon":"atm"},
{"id":675,"title":"Ameliorated","icon":"atm"},
{"id":676,"title":"Customer-focused","icon":"atm"},
{"id":677,"title":"paradigm","icon":"atm"},
{"id":678,"title":"Right-sized","icon":"atm"},
{"id":679,"title":"array","icon":"atm"},
{"id":680,"title":"internet solution","icon":"atm"},
{"id":681,"title":"Versatile","icon":"atm"},
{"id":682,"title":"Intuitive","icon":"atm"},
{"id":683,"title":"encompassing","icon":"atm"},
{"id":684,"title":"ability","icon":"atm"},
{"id":685,"title":"Proactive","icon":"atm"},
{"id":686,"title":"Configurable","icon":"atm"},
{"id":687,"title":"local area network","icon":"atm"},
{"id":688,"title":"groupware","icon":"atm"},
{"id":689,"title":"stable","icon":"atm"},
{"id":690,"title":"Configurable","icon":"atm"},
{"id":691,"title":"projection","icon":"atm"},
{"id":692,"title":"orchestration","icon":"atm"},
{"id":693,"title":"complexity","icon":"atm"}
]

let [selected] = items;

class FancySearchDemo extends LitElement {

	_render() {
		return html`
            <style>
                /* Style the element from the outside */
                fancy-search {
                    margin-top: 32px;
                    margin-bottom: 32px;
                    --background-color: lightgray;
                }
                .column {
                    width: 250px;
                    margin: auto;
                }
            </style>
            <div class="column">
            <fancy-search
                items="${items}"
                itemTemplate="icon"
                itemTemplateProps="${{'label': 'title'}}"
                listPXHeight="200"
                open="${false}"
                placeholder="Please select an account"
                searchPlaceholder="Search for an account"
                on-select="${e => console.log("select:", JSON.stringify(e.detail.value))}"
                on-filter="${e => console.log("filter:", e.detail.value)}"
            >
            </fancy-search>
            </div>
		`;
	}
}

customElements.define('fancy-search-demo', FancySearchDemo);
