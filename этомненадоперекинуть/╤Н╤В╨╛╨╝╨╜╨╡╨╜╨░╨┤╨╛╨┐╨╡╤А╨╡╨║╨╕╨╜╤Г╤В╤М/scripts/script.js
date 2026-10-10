// Создаем текст:
function createTagText({ text = '', color = '#ffffff', id = '', pos = { x: 0, y: 0, z: 0 }, rot = { x: 0, y: 0, z: 0 }, scl = { x: 0, y: 0, z: 0} }) {
    return `<a-entity text="value: ${text}; color: ${color}; align: center;" id="${id}" scale="1 1 1" position="${pos.x} ${pos.y} ${pos.z}" rotation="${rot.x} ${rot.y} ${rot.z}" scale="${scl.x} ${scl.y} ${scl.z}"></a-entity>`
}
function createImage({src = '', id = '', pos = { x:0, y: 0, z: 0}, rot = { x:0, y:0, z:0}, scl = { x: 0, y: 0, z: 0}}) {
    return `<a-image src="${src}" position="${pos.x} ${pos.y} ${pos.z}" id="${id}" rotation="${rot.x} ${rot.y} ${rot.z}" scale="${scl.x} ${scl.y} ${scl.z}"></a-image>`
}
function createVideo({ src = '', id = '', pos = { x: 0, y: 0, z: 0 }, rot = { x: 0, y: 0, z: 0 }, scl = { x: 1, y: 1, z: 1 }, autoplay = true, loop = true, muted = true}) {
return `<a-video src="${src}" id="${id}" position="${pos.x} ${pos.y} ${pos.z}" rotation="${rot.x} ${rot.y} ${rot.z}" scale="${scl.x} ${scl.y} ${scl.z}" autoplay="${autoplay}" loop="${loop}" muted="${muted}></a-video>`;
}

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    let moving = 0;
    AFRAME.registerComponent('touch-mover', {
    tick: function () {
        if (moving !== 0){
            const rig = document.querySelector('#rig');
            const cam = document.querySelector('[camera]');
            if(!rig || !cam) return;
            const dir = new THREE.Vector3();
            cam.object3D.getWorldDirection(dir);
            dir.y = 0;
            dir.normalize();

            rig.object3D.position.addScaledVector(dir, moving * 0.05);
        }
    }
});

    document.addEventListener('DOMContentLoaded', () =>{
        const rigEntity = document.querySelector('#rig');
        if (rigEntity) {
            rigEntity.setAttribute('touch-mover', '');
        }

        window.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            moving = 1;
        }else if (e.touches.length >= 1) {
            moving = -1;
        }
    });
    window.addEventListener('touchend', (e) => {
        if (e.touches.length === 0){
            moving = 0;
        }else if (e.touches.length === 1){
            moving = 1;
        }
    });
});
     

document.querySelector('#rig').setAttribute('touch-mover', '');


// const TestVideo = createVideo({
//     src = '.img/test.mp4', 
//     id = 'Test1Video', 
//     pos = { x: 0, y: 0, z: 0 }, 
//     rot = { x: 0, y: 0, z: 0 }, 
//     scl = { x: 1, y: 1, z: 1 }
// })
const ImgMiniPod1 = createImage({
    src: './img/mpodany.jpg',
    id: 'Img_mPod1',
    pos: { x: -2.717, y: -1.74, z: -1.509 },
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgMiniPod2 = createImage({
    src: './img/mpodany.jpg',
    id: 'Img_mPod2',
    pos: { x: -0.535, y: -1.74, z: 1.194 },
    rot: { x: 0, y: 180, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgHospital2 = createImage({
    src: './img/hospital.jpg',
    id: 'Img_heal2',
    pos: { x: -1.270, y: -1.74, z: -1.509 },
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgHospital1 = createImage({
    src: './img/hospital.jpg',
    id: 'Img_heal1',
    pos: { x: 7.409, y: -1.74, z: 1.165 },
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgSolarBat1 = createImage({
    src: './img/solarbat.jpg',
    id: 'Img_solB1',
    pos: { x: -2.20, y: -1.74, z: 1.19},
    rot: { x: 0, y: 180, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgSolarBat2 = createImage({
    src: './img/solarbat.jpg',
    id: 'Img_solB2',
    pos: { x: 12.5, y: -1.74, z: -1.553},
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgMiniWindGen = createImage({
    src: './img/mwindg.jpg',
    id: 'Img_MWindG',
    pos: { x: 9.661, y: -1.74, z: 1.165},
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgFactory2 = createImage({
    src: './img/factoryany.jpg',
    id: 'Img_Factory2',
    pos: { x: 10, y: -1.74, z: -1.648},
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
const ImgFactory1 = createImage({
    src: './img/factoryany.jpg',
    id: 'Img_Factory1',
    pos: { x: 1, y: -1.74, z: 1.194},
    rot: { x: 0, y: 180, z: 0 },
    scl: { x: 0.3, y: 0.2, z: 0.3 },
})
// Находим тег "a-scene":
const scene = document.getElementById('a-scene');




const textMiniPod1Kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_mPodSt1kilowat',
    pos: { x: -2.718, y: -1.603, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});

const textMiniPod1Kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_mPodSt1kilowat1',
    pos: { x: -2.718, y: -1.543, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});

const textMiniPod1Title = createTagText({
    text: 'Mini Podstation No.1',
    color: '#ffffff',
    id: 'text_mPodSt1Nickname',
    pos: { x: -2.718, y: -1.443, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 },
    scl: { x: 0.5, y: 0.5, z: 0.5 }
});

const textMiniPod1Status = createTagText({
    text: '',
    color: '',
    id: 'text_mPodSt1Active',
    pos: { x: -2.718, y: -1.880, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});
//-------------------------------------------
const TextHospital2Kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Heal2kilowat',
    pos: { x: -1.270, y: -1.543, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});
const TextHospital2Kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Heal2kilowat1',
    pos: { x: -1.270, y: -1.603, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});
const TextHospital2Title = createTagText({
    text: 'Hospital No.2',
    color: '#ffffff',
    id: 'text_Heal2Nickname',
    pos: { x: -1.270, y: -1.443, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});
const TextHospital2Status = createTagText({
    text: '',
    color: '',
    id: 'text_Heal2Active',
    pos: { x: -1.270, y: -1.880, z: -1.510 },
    rot: { x: 0, y: 0, z: 0 }
});
//---------------------------------------------------------
const TextSolarBattary1Kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Sol1kilowat',
    pos: { x: -2.20, y: -1.543, z: 1.19},
    rot: { x: 0, y: 180, z: 0 }
});
const TextSolarBattary1Kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Sol1kilowat1',
    pos: { x: -2.20, y: -1.603, z: 1.19},
    rot: { x: 0, y: 180, z: 0 }
});
const TextSolarBattary1Title = createTagText({
    text: 'Solar Battary No.1',
    color: '#ffffff',
    id: 'text_Sol1Nickname',
    pos: { x: -2.20, y: -1.443, z: 1.19},
    rot: { x: 0, y: 180, z: 0 }
});
const TextSolarBattary1Status = createTagText({
    text: '',
    color: '',
    id: 'text_Sol1Active',
    pos: { x: -2.20, y: -1.880, z: 1.19},
    rot: { x: 0, y: 180, z: 0 }
});
//--------------------------------
const TextSolarBattary2Kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Sol2kilowat',
    pos: { x: 12.5, y: -1.543, z: -1.554},
    rot: { x: 0, y: 0, z: 0 }
});
const TextSolarBattary2Kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Sol2kilowat1',
    pos: { x: 12.5, y: -1.603, z: -1.554},
    rot: { x: 0, y: 0, z: 0 }
});
const TextSolarBattary2Title = createTagText({
    text: 'Solar Battary No.2',
    color: '#ffffff',
    id: 'text_Sol2Nickname',
    pos: { x: 12.5, y: -1.443, z: -1.554},
    rot: { x: 0, y: 0, z: 0 }
});
const TextSolarBattary2Status = createTagText({
    text: '',
    color: '',
    id: 'text_Sol2Active',
    pos: { x: 12.5, y: -1.880, z: -1.554},
    rot: { x: 0, y: 0, z: 0 }
});
//-------------------------------------------------
const TextMiniWindGeneratorKilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_MWindGkilowat',
    pos: { x: 9.661, y: -1.543, z: 1.166},
    rot: { x: 0, y: 180, z: 0 }
});
const TextMiniWindGeneratorKilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_MWindGkilowat1',
    pos: { x: 9.661, y: -1.603, z: 1.166},
    rot: { x: 0, y: 180, z: 0 }
});
const TextMiniWindGeneratorTitle = createTagText({
    text: 'Solar Battary No.2',
    color: '#ffffff',
    id: 'text_MWindGNickname',
    pos: { x: 9.661, y: -1.443, z: 1.166},
    rot: { x: 0, y: 180, z: 0 }
});
const TextMiniWindGeneratorStatus = createTagText({
    text: '',
    color: '',
    id: 'text_MWindGActive',
    pos: { x: 9.661, y: -1.880, z: 1.166},
    rot: { x: 0, y: 180, z: 0 }
});
//---------------------------------------------------------
const textMiniPod2Kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_mPodSt2kilowat',
    pos: { x: -0.535, y: -1.603, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
});
const textMiniPod2Kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_mPodSt2kilowat1',
    pos: { x: -0.535, y: -1.543, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
});
const textMiniPod2Title = createTagText({
    text: 'Mini Podstation No.2',
    color: '#ffffff',
    id: 'text_mPodSt2Nickname',
    pos: { x: -0.535, y: -1.443, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 },
    scl: { x: 0.5, y: 0.5, z: 0.5 }
});
const textMiniPod2Status = createTagText({
    text: '',
    color: '',
    id: 'text_mPodSt2Active',
    pos: { x: -0.535, y: -1.880, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
});
//----------------------------------------------
const textFactory2kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Factory2kilowat',
    pos: { x: 10, y: -1.603, z: -1.649 },
    rot: { x: 0, y: 0, z: 0 }
})
const textFactory2kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Factory2kilowat1',
    pos: { x: 10, y: -1.543, z: -1.649 },
    rot: { x: 0, y: 0, z: 0 }
})
const textFactory2Title = createTagText({
    text: 'Factory No.2',
    color: '#ffffff',
    id: 'text_Factory2Nickname',
    pos: { x: 10, y: -1.443, z: -1.649 },
    rot: { x: 0, y: 0, z: 0 }
})
const textFactory2Status = createTagText({
    text: '',
    color: '',
    id: 'text_Factory2Active',
    pos: { x: 10, y: -1.880, z: -1.649 },
    rot: { x: 0, y: 0, z: 0 }
});
//-------------------------------------------
const TextHospital1Kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Heal1kilowat',
    pos: { x: 7.409, y: -1.543, z: 1.166 },
    rot: { x: 0, y: 180, z: 0 }
});
const TextHospital1Kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Heal1kilowat1',
    pos: { x: 7.409, y: -1.603, z: 1.166 },
    rot: { x: 0, y: 180, z: 0 }
});
const TextHospital1Title = createTagText({
    text: 'Hospital No.1',
    color: '#ffffff',
    id: 'text_Heal1Nickname',
    pos: { x: 7.409, y: -1.443, z: 1.166 },
    rot: { x: 0, y: 180, z: 0 }
});
const TextHospital1Status = createTagText({
    text: '',
    color: '',
    id: 'text_Heal1Active',
    pos: { x: 7.409, y: -1.880, z: 1.166 },
    rot: { x: 0, y: 180, z: 0 }
});
//---------------------------------------------
const textFactory1kilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Factory1kilowat',
    pos: { x: 1, y: -1.603, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
})
const textFactory1kilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Factory1kilowat1',
    pos: { x: 1, y: -1.543, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
})
const textFactory1Title = createTagText({
    text: 'Factory No.1',
    color: '#ffffff',
    id: 'text_Factory1Nickname',
    pos: { x: 1, y: -1.443, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
})
const textFactory1Status = createTagText({
    text: '',
    color: '',
    id: 'text_Factory1Active',
    pos: { x: 1, y: -1.880, z: 1.195 },
    rot: { x: 0, y: 180, z: 0 }
});
//---------------------------------------------
const textSubkilowat1 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Subkilowat',
    pos: { x: -3.18, y: -1.603, z: -0.28 },
    rot: { x: 0, y: 90, z: 0 }
})
const textSubkilowat2 = createTagText({
    text: '0/100 kWt',
    color: '#ffffff',
    id: 'text_Subkilowat1',
    pos: { x: -3.18, y: -1.543, z: -0.28 },
    rot: { x: 0, y: 90, z: 0 }
})
const textSubTitle = createTagText({
    text: 'Factory No.1',
    color: '#ffffff',
    id: 'text_SubNickname',
    pos: { x: -3.18, y: -1.443, z: -0.28 },
    rot: { x: 0, y: 90, z: 0 }
})
const textSubStatus = createTagText({
    text: '',
    color: '',
    id: 'text_SubActive',
    pos: { x: -3.18, y: -1.880, z: -0.28 },
    rot: { x: 0, y: 90, z: 0 }
});

scene.insertAdjacentHTML('beforeend', textSubkilowat1);
scene.insertAdjacentHTML('beforeend', textSubkilowat2);
scene.insertAdjacentHTML('beforeend', textSubTitle);
scene.insertAdjacentHTML('beforeend', textSubStatus);
scene.insertAdjacentHTML('beforeend', textMiniPod1Kilowat1);
scene.insertAdjacentHTML('beforeend', textMiniPod1Kilowat2);
scene.insertAdjacentHTML('beforeend', textMiniPod1Title);
scene.insertAdjacentHTML('beforeend', textMiniPod1Status);
scene.insertAdjacentHTML('beforeend', textMiniPod2Kilowat1);
scene.insertAdjacentHTML('beforeend', textMiniPod2Kilowat2);
scene.insertAdjacentHTML('beforeend', textMiniPod2Title);
scene.insertAdjacentHTML('beforeend', textMiniPod2Status);
scene.insertAdjacentHTML('beforeend', TextHospital2Kilowat1);
scene.insertAdjacentHTML('beforeend', TextHospital2Kilowat2);
scene.insertAdjacentHTML('beforeend', TextHospital2Title);
scene.insertAdjacentHTML('beforeend', TextHospital2Status);
scene.insertAdjacentHTML('beforeend', TextHospital1Kilowat1);
scene.insertAdjacentHTML('beforeend', TextHospital1Kilowat2);
scene.insertAdjacentHTML('beforeend', TextHospital1Title);
scene.insertAdjacentHTML('beforeend', TextHospital1Status);
scene.insertAdjacentHTML('beforeend', TextSolarBattary1Kilowat1);
scene.insertAdjacentHTML('beforeend', TextSolarBattary1Kilowat2);
scene.insertAdjacentHTML('beforeend', TextSolarBattary1Title);
scene.insertAdjacentHTML('beforeend', TextSolarBattary1Status);
scene.insertAdjacentHTML('beforeend', TextSolarBattary2Kilowat1);
scene.insertAdjacentHTML('beforeend', TextSolarBattary2Kilowat2);
scene.insertAdjacentHTML('beforeend', TextSolarBattary2Title);
scene.insertAdjacentHTML('beforeend', TextSolarBattary2Status);
scene.insertAdjacentHTML('beforeend', TextMiniWindGeneratorKilowat1);
scene.insertAdjacentHTML('beforeend', TextMiniWindGeneratorKilowat2);
scene.insertAdjacentHTML('beforeend', TextMiniWindGeneratorTitle);
scene.insertAdjacentHTML('beforeend', TextMiniWindGeneratorStatus);
scene.insertAdjacentHTML('beforeend', textFactory2kilowat1);
scene.insertAdjacentHTML('beforeend', textFactory2kilowat2);
scene.insertAdjacentHTML('beforeend', textFactory2Title);
scene.insertAdjacentHTML('beforeend', textFactory2Status);
scene.insertAdjacentHTML('beforeend', textFactory1kilowat1);
scene.insertAdjacentHTML('beforeend', textFactory1kilowat2);
scene.insertAdjacentHTML('beforeend', textFactory1Title);
scene.insertAdjacentHTML('beforeend', textFactory1Status);
scene.insertAdjacentHTML('beforeend', ImgMiniPod1);
scene.insertAdjacentHTML('beforeend', ImgMiniPod2);
scene.insertAdjacentHTML('beforeend', ImgHospital2);
scene.insertAdjacentHTML('beforeend', ImgHospital1);
scene.insertAdjacentHTML('beforeend', ImgSolarBat1);
scene.insertAdjacentHTML('beforeend', ImgSolarBat2);
scene.insertAdjacentHTML('beforeend', ImgMiniWindGen);
scene.insertAdjacentHTML('beforeend', ImgFactory2);
scene.insertAdjacentHTML('beforeend', ImgFactory1);
// scene.insertAdjacentHTML('beforeend', TestVideo);

const textMiniPod1_1 = document.getElementById('text_mPodSt1kilowat');
const textMiniPod1_2 = document.getElementById('text_mPodSt1kilowat1');
const textMiniPod2_1 = document.getElementById('text_mPodSt2kilowat');
const textMiniPod2_2 = document.getElementById('text_mPodSt2kilowat1');
const textHospital2_1 = document.getElementById('text_Heal2kilowat');
const textHospital2_2 = document.getElementById('text_Heal2kilowat1');
const textHospital1_1 = document.getElementById('text_Heal1kilowat');
const textHospital1_2 = document.getElementById('text_Heal1kilowat1');
const textSolarBat1_1 = document.getElementById('text_Sol1kilowat');
const textSolarBat1_2 = document.getElementById('text_Sol1kilowat1');
const textSolarBat2_1 = document.getElementById('text_Sol2kilowat');
const textSolarBat2_2 = document.getElementById('text_Sol2kilowat1');
const textMWindGen_1 = document.getElementById('text_MWindGkilowat');
const textMWindGen_2 = document.getElementById('text_MWindGkilowat1');
const textFactory2_1 = document.getElementById('text_Factory2kilowat');
const textFactory2_2 = document.getElementById('text_Factory2kilowat1');
const textFactory1_1 = document.getElementById('text_Factory1kilowat');
const textFactory1_2 = document.getElementById('text_Factory1kilowat1');
const textSub1_1 = document.getElementById('text_Subkilowat');
const textSub1_2 = document.getElementById('text_Subkilowat1');
const textSub2_1 = document.getElementById('text_Subkilowat');
const textSub2_2 = document.getElementById('text_Subkilowat1');
setInterval(function () {
    const randomKilowat1 = getRandomInt(0, 100);
    const randomKilowat2 = getRandomInt(0, 100);
    textMiniPod1_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textMiniPod1_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textMiniPod2_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textMiniPod2_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textHospital2_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textHospital2_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textHospital1_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textHospital1_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textSolarBat1_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textSolarBat1_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textSolarBat2_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textSolarBat2_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textMWindGen_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    //кста я здесь увидел как 95/100 два раза выпало, шанс 0.01*0.01
    textMWindGen_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textFactory2_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textFactory2_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textFactory1_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textFactory1_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textSub2_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textSub2_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
    textSub1_1.setAttribute('text', `value: ${randomKilowat1}/100 kWt; color: #ffffff; align: center;`);
    textSub1_2.setAttribute('text', `value: ${randomKilowat2}/100 kWt; color: #ffffff; align: center;`);
}, 1000);

const statusSolarBat1 = document.getElementById('text_Sol1Active');
const statusSolarBat2 = document.getElementById('text_Sol2Active');
const statusHeal2 = document.getElementById('text_Heal2Active');
const statusHeal1 = document.getElementById('text_Heal1Active');
const statusmPod1 = document.getElementById('text_mPodSt1Active');
const statusmPod2 = document.getElementById('text_mPodSt2Active');
const statusMWindG = document.getElementById('text_MWindGActive');
const statusFactory2 = document.getElementById('text_Factory2Active');
const statusFactory1 = document.getElementById('text_Factory1Active');
const statusSub = document.getElementById('text_SubActive');
let lastNum = null;
setInterval(function () {
  do {randomNum = getRandomInt(1, 2);
    } while (randomNum === lastNum);
  let statusText = '';
  lastNum = randomNum;

  if (randomNum === 1) {
    statusSolarBat1.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusSolarBat2.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusHeal2.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusHeal1.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusmPod1.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusmPod2.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusMWindG.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusFactory2.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusFactory1.setAttribute('text', 'value: offline; color: #ff0000; align:center');
    statusSub.setAttribute('text', 'value: offline; color: #ff0000; align:center');
  } 
  else {
    statusSolarBat1.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusSolarBat2.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusHeal2.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusHeal1.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusmPod1.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusmPod2.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusMWindG.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusFactory2.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusFactory1.setAttribute('text', 'value: online; color: #00ff00; align:center');
    statusSub.setAttribute('text', 'value: online; color: #00ff00; align:center');
  }


}, 1000);
const connection = {
    broker: '91.229.10.143',
    port: 9001,
    topic: 'daniil_dybka',
    qos: 0,
    clientId: `client_${Math.random() * 100}_${new Date().getTime()}`,
    user: {
        name: 'daniil',
        password: '12345678990'
    }
}

//
// Производим подключение
//

const client = new Paho.MQTT.Client(
    connection.broker,
    connection.port,
    connection.clientId
);

//
// При потере подключения
//

client.onConnectionLost = (responseObject) => {
    if (responseObject.errorCode !== 0) {
        console.log(`Соединение потеряно: ${responseObject.errorMessage}`);
        setTimeout(() => {
            connect();
        }, 3000);
    }
}

//
// При получении сообщения
//

client.onMessageArrived = (message) => {
    console.log(`Пришло сообщение: ${message.payloadString}`);
}

//
// При успешном подключении
//

console.log("Пытаемся подключиться...");
connect();

function connect() {
    client.connect({
        userName: connection.user.name,
        password: connection.user.password,
        onSuccess: () => {
            console.log("Подключение к MQTT брокеру успешно!");

            client.subscribe(
                connection.topic,
                {
                    qos: connection.qos,
                    timeout: 5,
                    onSuccess: () => {
                        onSuccess();
                    },
                    onFailure: (error) => {
                        console.log("Ошибка подключения: " + error.errorMessage);
                    }
                }
            );
        }
    });
}

const vse = [

]

//
// Отправка сообщения в топик
//

function sendMessage(text = '') {
    const message = new Paho.MQTT.Message(text);
    message.destinationName = connection.topic;
    client.send(message);
}

//
// Отправка текущего состояния всех текстов в MQTT
//

function sendAllStates() {
    if (!client.isConnected()) return;

    document.querySelectorAll('a-entity[id^="text_"]').forEach(el => {
        if (el.id.endsWith('Nickname')) return; // заголовки не отправляем

        const name = el.id.replace(/^text_/, '');    // text_mPodSt1kilowat -> mPodSt1kilowat
        const value = el.getAttribute('text').value; // например "42/100 kWt"
        sendMessage(`${name} - ${value}`);
    });
}

// отправляем состояние раз в секунду
setInterval(sendAllStates, 1000);

//
// После успешного подключения
//

function onSuccess() {
    console.log('Успех!');
    sendMessage();
}
