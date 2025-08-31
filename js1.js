const questions = [
    { Number: 1, text: "I wake up at the same time every day.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 2, text: "I drink enough water during the day.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 3, text: "I avoid checking my phone right after waking up.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 4, text: "I exercise or move my body daily.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 5, text: "I plan my tasks before starting the day.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 6, text: "I eat healthy meals regularly.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 7, text: "I read books or learn something new.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 8, text: "I practice gratitude each day.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 9, text: "I sleep 7–8 hours per night.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 10, text: "I save or manage money wisely.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 11, text: "I avoid procrastination on important tasks.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 12, text: "I spend time with family or friends.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 13, text: "I practice meditation or mindfulness.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 14, text: "I avoid junk food or sugary drinks.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 15, text: "I keep my workspace or room organized.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 16, text: "I limit my social media usage.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 17, text: "I write down goals or plans.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 18, text: "I celebrate small wins or progress.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 19, text: "I spend time outdoors or in nature.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 20, text: "I avoid negative self-talk.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 21, text: "I help or support others when I can.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 22, text: "I track my progress on personal goals.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 23, text: "I practice deep breathing or relaxation.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 24, text: "I avoid multitasking and focus on one task.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 25, text: "I stay consistent with my routines.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 26, text: "I listen to positive or educational content.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 27, text: "I spend time on creative hobbies or skills.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 28, text: "I reflect on my day before sleeping.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 29, text: "I forgive myself when I make mistakes.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { Number: 30, text: "I stay disciplined even when I don’t feel motivated.", choices: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] }
];

const laolang = [
    { Number: 1, text: "ຂ້ອຍຕື່ນນອນໃນເວລາດຽວກັນທຸກມື້.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 2, text: "ຂ້ອຍດື່ມນ້ຳພຽງພໍໃນເວລາມື້.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ທຸກມື້"], scores: [0, 1, 2] },
    { Number: 3, text: "ຂ້ອຍຫຼີກລ້ຽງການໃຊ້ໂທລະ​ສ​ານມືຖືຫຼັງຈາກຕື່ນນອນ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 4, text: "ຂ້ອຍອອກກຳລັງກາຍ ຫຼື ຂຽນເນື້ອຫາໃນເວລາມື້.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 5, text: "ຂ້ອຍ​ແນ​ນ​ນາ​ໜ້າ​ທຸກ​ວຽກ​ກ່ອນ​ເລີ່ມ​ຕົ້ນ​ມື້.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 6, text: "ຂ້ອຍກິນອາຫານທີ່ມີປະໂຫຍດເປັນປະຈໍາ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 7, text: "ຂ້ອຍ​ອ່ານ​ປຶ້ມ​ຫຼື​ເພີ່ມ​ພູນ​ຄວາມ​ຮູ້​ໃໝ່​ໆ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 8, text: "ຂ້ອຍເຝືກຄວາມຊື່ສັດຂອງຂອ້ຍ​ທຸກ​ມື້.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 9, text: "ຂ້ອຍນອນ 7-8 ຊົ່ວໂມງຕໍ່ຄືນ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 10, text: "ຂ້ອຍບັນທຶກ ຫຼື ຈັດ​ການ​ເງິນ​ໄດ້​ຢ່າງ​ສະ​ຫຼາດ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 11, text: "ຂ້ອຍໃຫ້ຄວາມສຳຄັນກັບເວລາໃນວຽກທີ່ສຳຄັນ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 12, text: "ຂ້ອຍໃຊ້ເວລາກັບຄອບຄົວ ຫຼື ໝູ່ໆ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 13, text: "ຂ້ອຍເຝືກການຈັກການອາລົມຕົວເອງ ຫຼື ນັ່ງສະມາທິ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 14, text: "ຂ້ອຍຫຼີກລ້ຽງການກີນອາຫານ junk food ໃນປະລິມານທີ່ຫຼາຍເກີນໄປ ຫຼື ນ້ຳນ້ຳຕານ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 15, text: "ຂ້ອຍຮັກສາສະຖານທີ່ເຮັດວຽກ ຫຼື ຫ້ອງນອນໃຫ້ເປັນລະບຽບ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 16, text: "ຂ້ອຍຈຳກັດເວລາໃນການໃຊ້ໂຊເຊຍມິເດຍ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 17, text: "ຂ້ອຍຂຽນເປົ້າໝາຍ ຫຼື ແຜນການກອ່ນການລົງມືເຮັດ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 18, text: "ຂ້ອຍ​ພູມ​ໃຈ​ໃນ​ຄວາມ​ສໍາ​ເລັດ​ນ້ອຍ​ໆ​ ຫຼື​ ຄວາມກ້າວໜ້ານອ້ຍໆ​.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 19, text: "ຂ້ອຍໃຊ້ເວລາຢູ່ນອກບ້ານ ຫຼື ເຫັນຄຸນຄ່າກັບທຳທະຊາດ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 20, text: "ຂ້ອຍຫຼີກລ້ຽງການເວົ້າກັບຕົນເອງໃນທາງລົບ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 21, text: "ຂ້ອຍຊ່ວຍເຫຼືອ ຫຼື ສະໜັບສະໜູນຜູ້ອື່ນເມື່ອຂ້ອຍ​ສາ​ມາດ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 22, text: "ຂ້ອຍຕິດ​ຕາມ​ຄວາມ​ຄືບ​ໜ້າ​ໃນ​ເປົ້າ​ໝາຍ​ສ່ວນ​ຕົວ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 23, text: "ຂ້ອຍເຝືກການຫາຍໃຈລຶກ ຫຼື ການຜ່ອນຄາຍ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫອຼດ"], scores: [0, 1, 2] },
    { Number: 24, text: "ຂ້ອຍຫຼີກລ້ຽງການເຮັດຫຼາຍຢ່າງໃນເວລາດຽວ ແລະ ໂຟກັດຢ່າງໃດຢ່າງໜຶ່ງ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] },
    { Number: 25, text: "ຂ້ອຍຮັກສາຄວາມສະເຫມີສະເຫມອຂອງກິດຈະວັດປະຈໍາວັນ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] },
    { Number: 26, text: "ຂ້ອຍຟັງເນື້ອຫາທີ່ເປັນບວກ ຫຼື ສິ່ງທີ່ເຮັດໃຫ້ໄດ້ຮຽນຮູ້.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] },
    { Number: 27, text: "ຂ້ອຍໃຊ້ເວລາເຮັດສິ່ງສ້າງສັນ ຫຼື ຝຶກທັກສະ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] },
    { Number: 28, text: "ຂ້ອຍທົບທວນວັນຂອງຕົນເອງກ່ອນນອນ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] },
    { Number: 29, text: "ຂ້ອຍອະໄພໃຫ້ຕົນເອງເມື່ອເຮັດຜິດ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] },
    { Number: 30, text: "ຂ້ອຍຮັກສາວິໄນເຖິງແມ່ນວ່າບາງຄັ້ງບໍ່ມີກໍາລັງໃຈ.", choices: ["ບໍ່ເຄີຍ", "ບາງຄັ້ງ", "ຕະຫຼອດ"], scores: [0, 1, 2] }];

const thailang = [
    { Number: 1, text: "ฉันตื่นนอนเวลาเดิมทุกวัน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 2, text: "ฉันดื่มน้ำเพียงพอในแต่ละวัน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 3, text: "ฉันหลีกเลี่ยงการเช็คโทรศัพท์ทันทีหลังตื่นนอน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 4, text: "ฉันออกกำลังกายหรือขยับร่างกายทุกวัน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 5, text: "ฉันวางแผนงานก่อนเริ่มวันใหม่", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 6, text: "ฉันทานอาหารที่มีประโยชน์เป็นประจำ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 7, text: "ฉันอ่านหนังสือหรือเรียนรู้สิ่งใหม่ๆ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 8, text: "ฉันรู้สึกขอบคุณในแต่ละวัน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 9, text: "ฉันนอนหลับ 7–8 ชั่วโมงต่อคืน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 10, text: "ฉันเก็บออมหรือจัดการเงินอย่างชาญฉลาด", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 11, text: "ฉันหลีกเลี่ยงการผัดวันประกันพรุ่งในงานสำคัญ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 3] },
    { Number: 12, text: "ฉันใช้เวลากับครอบครัวหรือเพื่อน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 13, text: "ฉันฝึกสมาธิหรือการมีสติ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 14, text: "ฉันหลีกเลี่ยงอาหารขยะหรือเครื่องดื่มหวาน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 15, text: "ฉันจัดโต๊ะทำงานหรือห้องให้เป็นระเบียบ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 16, text: "ฉันจำกัดเวลาใช้โซเชียลมีเดีย", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 17, text: "ฉันเขียนเป้าหมายหรือแผนงานลงไว้", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 18, text: "ฉันฉลองความสำเร็จเล็กๆ หรือความก้าวหน้า", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 19, text: "ฉันใช้เวลาอยู่กลางแจ้งหรือธรรมชาติ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 20, text: "ฉันหลีกเลี่ยงการพูดกับตัวเองในแง่ลบ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 21, text: "ฉันช่วยเหลือหรือสนับสนุนผู้อื่นเมื่อทำได้", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 22, text: "ฉันติดตามความก้าวหน้าในเป้าหมายส่วนตัว", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 23, text: "ฉันฝึกการหายใจลึกๆ หรือการผ่อนคลาย", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 24, text: "ฉันหลีกเลี่ยงการทำหลายอย่างพร้อมกันและโฟกัสสิ่งเดียว", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 25, text: "ฉันทำกิจวัตรประจำวันอย่างสม่ำเสมอ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 26, text: "ฉันฟังสิ่งที่ให้พลังบวกหรือความรู้ใหม่", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 27, text: "ฉันใช้เวลากับงานอดิเรกหรือทักษะสร้างสรรค์", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 28, text: "ฉันทบทวนสิ่งที่เกิดขึ้นในวันก่อนนอน", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 29, text: "ฉันให้อภัยตัวเองเมื่อทำผิดพลาด", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] },
    { Number: 30, text: "ฉันรักษาวินัยแม้ในวันที่ไม่มีกำลังใจ", choices: ["ไม่เคย", "บางครั้ง", "เสมอ"], scores: [0, 1, 2] }
];

let currentQuestion = document.getElementById('question');
let choice1 = document.getElementById('firstchoice');
let choice2 = document.getElementById('secondchoice');
let choice3 = document.getElementById('thirdchoice');

let textnumberqusetion = questions[0];
let laosnumber = laolang[0];
let thainumber = thailang[0];
console.log("this is the index", textnumberqusetion);
console.log("this is the index laos", laosnumber);
let totalScore = 0;

currentQuestion.innerText = questions[0].Number + " " + questions[0].text;
choice1.innerText = questions[0].choices[0];
choice2.innerText = questions[0].choices[1];
choice3.innerText = questions[0].choices[2];


function LoadToNextQuestion() {
    if (textnumberqusetion != questions[questions.length - 1]) {
        let currentIndex = questions.indexOf(textnumberqusetion);
        textnumberqusetion = questions[currentIndex + 1];
        currentQuestion.innerText = questions[currentIndex + 1].Number + " " + questions[currentIndex + 1].text;
        choice1.innerText = questions[currentIndex + 1].choices[0];
        choice2.innerText = questions[currentIndex + 1].choices[1];
        choice3.innerText = questions[currentIndex + 1].choices[2];
        console.log(" this is the current index", currentIndex);

        let barnumber = document.getElementById("progressnumber");
        barnumber.innerText = questions[currentIndex + 1].Number;
        console.log(" this is the bar number", barnumber);
    }


    else if (questions.length == 30) {
        let choicebox = document.getElementById("choicebox");
        choicebox.style.display = "none";
        let barnb = document.querySelector(".progreesbar")
        barnb.style.display = "none";
        let textresultbox = document.getElementById("textresultbox");
        textresultbox.style.display = "block";
        showresulttext();
        let resultsumary = document.getElementById("question")
        resultsumary.innerText = "Your Score is " + totalScore + ". You have completed the quiz!";
    }
    else {
        let resultsumary = document.getElementById("question")
        resultsumary.innerText = "Your Score is " + totalScore, "You have completed the quiz!";
    }
}
function selectAnswer(score) {
    totalScore += score;
    console.log("Total Score: " + totalScore);
    LoadToNextQuestion();
}

let textresult = {
    verylow: "This score shows that you are just beginning your journey. It’s completely normal to start here—every expert was once a beginner. What matters most is your willingness to learn, not where you are right now. This result is not failure, it is feedback. You have discovered the areas you need to improve, and that’s a powerful first step.Suggestions Start with the basics. Review your notes, watch beginner-friendly tutorials, and practice small exercises daily. Don’t try to rush—focus on building a strong foundation. Set small weekly goals, like understanding one new concept at a time."
    , low: "You have gained some knowledge, but there are still many gaps to fill. The good news is that you’re moving forward, even if slowly. This score shows that you understand a few concepts, but consistency and practice will help you a lot. Don’t be discouraged—progress is built one step at a time Suggestions: Identify the topics you find most difficult and focus on them.Practice with quizzes or exercises that target your weak areas.Try to study in shorter but regular sessions(e.g., 30 minutes a day).Ask questions, join study groups, or use online resources to strengthen your learning."
    , medium: "Well done—you have a decent understanding of the material. This score means you are no longer a beginner, but you still need more practice to reach higher levels. You already have a strong foundation; now it’s about refining your skills and filling in the missing pieces. Think of this as the halfway point—you are making real progress. Suggestions: Revise the topics you missed and practice applying what you know to real-life examples. Take more challenging practice tests to push yourself further. Create a study plan where you focus equally on reviewing old lessons and learning new ones. Teaching someone else what you know can also help you remember better."
    , high: "Great job! Your score shows that you have strong knowledge and a clear understanding of most concepts. You are above average and on the path toward mastery. This is proof of your hard work and consistency. However, there is still room to polish your skills and become even better.Suggestions: Focus on advanced practice and problem-solving. Don’t just memorize—try to understand how concepts connect together. Work on your weak spots, but also challenge yourself with new, more complex exercises. If possible, join discussions, competitions, or projects to apply your skills in practical situations."
    , excellent: "Outstanding! This score shows mastery and deep understanding. You have put in effort and built real confidence in this subject. Not only do you know the concepts, but you can also apply them effectively. You are at a level where others can learn from you.Suggestions: Keep practicing to maintain your level of skill. Challenge yourself with advanced materials or real-world projects. Share your knowledge with others—teaching is a great way to strengthen your mastery. Start setting bigger goals, like certifications, competitions, or leadership roles in learning communities."
}
const feedback = {
    verylow: {
        message: "ຄະແນນນີ້ສະແດງໃຫ້ເຫັນວ່າເຈົ້າກຳລັງເລີ່ມຕົ້ນການເດີນທາງຂອງເຈົ້າ. ມັນເປັນເລື່ອງປົກກະຕິທີ່ຈະເລີ່ມຢູ່ຈຸດນີ້—ຜູ້ຊ່ຽວຊານທຸກຄົນກໍເຄີຍເປັນມືໃໝ່ມາກ່ອນ. ສິ່ງທີ່ສຳຄັນທີ່ສຸດຄືຄວາມຕັ້ງໃຈທີ່ຈະຮຽນຮູ້, ບໍ່ແມ່ນວ່າເຈົ້າຢູ່ຈຸດໃດໃນຕອນນີ້. ຜົນນີ້ບໍ່ແມ່ນຄວາມລົ້ມເຫຼວ, ແຕ່ເປັນຄຳຄິດເຫັນທີ່ຊ່ວຍໃຫ້ເຈົ້າຮູ້ວ່າຕ້ອງປັບປຸງສ່ວນໃດ. ນີ້ຄືກ້າວທຳອິດທີ່ສຳຄັນ!",
        suggestions: [
            "ເລີ່ມຈາກພື້ນຖານກ່ອນ. ທົບທວນບົດຮຽນ, ເບິ່ງວິດີໂອສອນສຳລັບມືໃໝ່, ແລະຝຶກແອບບົດຮຽນນ້ອຍໆທຸກວັນ.",
            "ບໍ່ຕ້ອງຮີບຮ້ອນ—ໃຫ້ຄວາມສຳຄັນກັບການສ້າງພື້ນຖານທີ່ແໜ້ນແຟ້ນ.",
            "ຕັ້ງເປົ້າໝາຍນ້ອຍໆຕໍ່ອາທິດ, ເຊັ່ນ: ເຂົ້າໃຈແນວຄວາມຄິດໃໝ່ໜຶ່ງຕໍ່ຄັ້ງ."
        ]
    },
    low: {
        message: "ເຈົ້າໄດ້ຮຽນຮູ້ບາງຢ່າງແລ້ວ, ແຕ່ຍັງມີຊ່ອງຫວ່າງທີ່ຕ້ອງຕື່ມໃສ່. ຂ່າວດີຄືເຈົ້າກຳລັງກ້າວໄປຂ້າງໜ້າ, ເຖິງວ່າຈະຊ້າກໍຕາມ. ຄະແນນນີ້ສະແດງໃຫ້ເຫັນວ່າເຈົ້າເຂົ້າໃຈບາງແນວຄວາມຄິດ, ແຕ່ການຝຶກຝົນຢ່າງສະໝ່ຳສະເໝີຈະຊ່ວຍໄດ້ຫຼາຍ. ຢ່າທໍ້ໃຈ—ຄວາມກ້າວໜ້າສ້າງຂຶ້ນທีລະກ້າວ!",
        suggestions: [
            "ຄົ້ນຫາຫົວຂໍ້ທີ່ເຈົ້າຮູ້ສຶກຍາກທີ່ສຸດແລະສຸມໃສ່ມັນ.",
            "ຝຶກດ້ວຍແບບທົດສອບຫຼືແບບຝຶກຫັດທີ່ເນັ້ນຈຸດອ່ອນຂອງເຈົ້າ.",
            "ຮຽນເປັນເວລາສັ້ນໆແຕ່ສະໝ່ຳສະເໝີ (ເຊັ່ນ: 30 ນາທີຕໍ່ວັນ).",
            "ຖາມຄຳຖາມ, ເຂົ້າຮ່ວມກຸ່ມຮຽນ, ຫຼືໃຊ້ຊັບພະຍາກອນອອນລາຍເພື່ອເສີມສ້າງການຮຽນຮູ້."
        ]
    },
    medium: {
        message: "ດີຫຼາຍ! ຄະແນນນີ້ສະແດງໃຫ້ເຫັນວ່າເຈົ້າມີຄວາມເຂົ້າໃຈທີ່ດີກ່ຽວກັບເນື້ອຫາ. ເຈົ້າບໍ່ແມ່ນມືໃໝ່ອີກຕໍ່ໄປ, ແຕ່ຍັງຕ້ອງການຝຶກຝົນເພື່ອກ້າວໄປສູ່ລະດັບທີ່ສູງຂຶ້ນ. ເຈົ້າມີພື້ນຖານທີ່ແໜ້ນແຟ້ນແລ້ວ; ຕອນນີ້ແມ່ນເວລາປັບປຸງທັກສະແລະຕື່ມສ່ວນທີ່ຍັງຂາດ. ຄິດວ່ານີ້ແມ່ນຈຸດກາງທາງ—ເຈົ້າກຳລັງກ້າວໜ້າຢ່າງແທ້ຈິງ!",
        suggestions: [
            "ທົບທວນຫົວຂໍ້ທີ່ເຈົ້າຍັງຜິດພາດ ແລະ ຝຶກນຳໃຊ້ສິ່ງທີ່ເຈົ້າຮູ້ກັບຕົວຢ່າງໃນຊີວິດຈິງ.",
            "ລອງເຮັດແບບທົດສອບທີ່ທ້າທາຍຂຶ້ນເພື່ອພັດທະນາຕົວເອງ.",
            "ສ້າງແຜນຮຽນທີ່ສົມດຸນກັບການທົບທວນບົດຮຽນເກົ່າ ແລະ ຮຽນຮູ້ສິ່ງໃໝ່.",
            "ການສອນຄົນອື່ນກ່ຽວກັບສິ່ງທີ່ເຈົ້າຮູ້ກໍສາມາດຊ່ວຍໃຫ້ຈື່ໄດ້ດີຂຶ້ນ."
        ]
    },
    high: {
        message: "ສຸດຍອດ! ຄະແນນນີ້ສະແດງໃຫ້ເຫັນວ່າເຈົ້າມີຄວາມຮູ້ທີ່ແໜ້ນແຟ້ນ ແລະ ເຂົ້າໃຈແນວຄວາມຄິດສ່ວນໃຫຍ່ຢ່າງຈະແຈ້ງ. ເຈົ້າຢູ່ໃນລະດັບທີ່ດີກວ່າຄ່າສະເລ່ຍ ແລະ ກຳລັງເດີນທາງສູ່ຄວາມເປັນມືອາຊີບ. ນີ້ຄືຫຼັກຖານຂອງຄວາມພະຍາຍາມ ແລະ ຄວາມສະໝ່ຳສະເໝີຂອງເຈົ້າ. ແຕ່ຍັງມີຊ່ອງວ່າງໃຫ້ປັບປຸງທັກສະໃຫ້ດີຍິ່ງຂຶ້ນ.",
        suggestions: [
            "ສຸມໃສ່ການຝຶກຝົນລະດັບສູງ ແລະ ການແກ້ບັນຫາທີ່ສັບສົນ.",
            "ບໍ່ພຽງແຕ່ຈື່—ພະຍາຍາມເຂົ້າໃຈວ່າແນວຄວາມຄິດຕ່າງໆເຊື່ອມໂຍງກັນແນວໃດ.",
            "ເຮັດວຽກກັບຈຸດອ່ອນຂອງເຈົ້າ, ແຕ່ກໍທ້າທາຍຕົວເອງດ້ວຍແບບຝຶກຫັດທີ່ສັບສົນກວ່າເກົ່າ.",
            "ເຂົ້າຮ່ວມການສົນທະນາ, ການແຂ່ງຂັນ, ຫຼືໂຄງການຕ່າງໆເພື່ອນຳໃຊ້ທັກສະໃນສະຖານະການຈິງ."
        ]
    },
    excellent: {
        message: "ສຸດຍອດແທ້ໆ! ຄະແນນນີ້ສະແດງໃຫ້ເຫັນວ່າເຈົ້າເປັນຜູ້ຊ່ຽວຊານ ແລະ ມີຄວາມເຂົ້າໃຈຢ່າງເລິກເຊິ່ງ. ເຈົ້າໄດ້ພະຍາຍາມຢ່າງໜັກ ແລະ ສ້າງຄວາມໝັ້ນໃຈໃນວິຊານີ້. ເຈົ້າບໍ່ພຽງແຕ່ຮູ້ແນວຄວາມຄິດ, ແຕ່ຍັງສາມາດນຳໃຊ້ມັນໄດ້ຢ່າງມີປະສິດທິພາບ. ເຈົ້າຢູ່ໃນລະດັບທີ່ຄົນອື່ນສາມາດຮຽນຮູ້ຈາກເຈົ້າໄດ້!",
        suggestions: [
            "ສືບຕໍ່ຝຶກຝົນເພື່ອຮັກສາລະດັບທັກສະຂອງເຈົ້າ.",
            "ທ້າທາຍຕົວເອງດ້ວຍເອກະສານລະດັບສູງ ຫຼື ໂຄງການທີ່ເປັນຈິງ.",
            "ແບ່ງປັນຄວາມຮູ້ຂອງເຈົ້າກັບຄົນອື່ນ—ການສອນເປັນວິທີທີ່ດີທີ່ຈະເສີມສ້າງຄວາມຊ່ຽວຊານ.",
            "ຕັ້ງເປົ້າໝາຍທີ່ໃຫຍ່ຂຶ້ນ, ເຊັ່ນ: ການຮັບໃບຢັ້ງຢືນ, ເຂົ້າຮ່ວມການແຂ່ງຂັນ, ຫຼື ມີບົດບາດນຳໃນກຸ່ມຮຽນຮູ້."
        ]
    }
};

function showresulttext() {
    let textverylow = document.getElementById("textresult");
    if (totalScore <= 20) {
        textverylow.innerText = textresult.verylow;
    }
    else if (totalScore > 20 && totalScore <= 40) {
        textverylow.innerText = textresult.low;
    }
    else if (totalScore > 40 && totalScore <= 60) {
        textverylow.innerText = textresult.medium;
    }
    else if (totalScore > 60 && totalScore <= 80) {
        textverylow.innerText = textresult.high;
    }
    else if (totalScore > 80 && totalScore <= 100) {
        textverylow.innerText = textresult.excellent;
    }
}
showresulttext();

function changebackground() {
    let changebackgoundqtbox = document.getElementById("qusetionbox");
    changebackgoundqtbox.style.backgroundColor = "rgba(255, 20, 224, 0.519)";
    selectAnswer(1)
}
function changebacktored() {
    let changebackgoundqtbox = document.getElementById("qusetionbox");
    changebackgoundqtbox.style.backgroundColor = "rgba(255, 82, 43, 0.76)";
    selectAnswer(2)
}
function changebacktoyellow() {
    let changebackgoundqtbox = document.getElementById("qusetionbox");
    changebackgoundqtbox.style.backgroundColor = "rgba(255, 247, 20, 0.8)";
    selectAnswer(3)
}
// function select
function changeLang(lang) {
    let en = document.getElementById("enl")
    let la = document.getElementById("lao")
    let th = document.getElementById("tha")
    let youqt = document.querySelector(".yourqtion")
    if (lang === "en") {
        en.innerText = "English"
        la.innerText = "lao"
        th.innerText = "Thai"
        youqt.innerText = "Your Question is :"
    }
    else if (lang === "la") {
        en.innerText = "ອັງກີດ"
        la.innerText = "ລາວ"
        th.innerText = "ໄທ"
        youqt.innerText = "ຄຳຖາມຂອງເຈົ້າແມ່ນ :"

    }
    else if (lang === "th") {
        en.innerText = "อังกฤษ"
        la.innerText = "ลาว"
        th.innerText = "ไทย"
        youqt.innerText = "คำถามของคุณคือ :"
    }
}
