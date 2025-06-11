import React, { PureComponent } from "react";
import children from "../assets/img/offers/children.jpeg";
import diamond from "../assets/img/offers/diamond.jpeg";
import student from "../assets/img/offers/student.jpeg";
import Indo from "../assets/img/offers/Indo.jpeg";
import happy from "../assets/img/offers/happy.jpeg";
import grab from "../assets/img/offers/grab.jpeg";
const Offers = [
  {
    id: 1,
    img: Indo,
    title: "Indo Korean Spicy Noodle",
    date_time: "May 09, 2025",
    discreption:
      "Spicy Deal Alert! 🔥 Get a FREE Indomie Korean Spicy Ramyeon with every Korean Spicy Noodles Combo at Legend Cinemas! Limited stock only – grab yours order today!",
  },
  {
    id: 2,
    img: children,
    title: "Children Day Movie Magic",
    date_time: " May 30, 2025",
    discreption: `✨តស់ៗ ម៉ាក់ៗប៉ាៗចុងសប្ដាហ៍នេះមិនទាន់មានគម្រោងនាំកូនៗទៅណាមែនទេ? អេតមីនចង់ប្រាប់ថារោងភាពយន្ដ លេជេននឹងមានកម្មវិធី 🪄 Children's Day Movie Magic 🪄 ដើម្បីអ្នកទាំងអស់គ្នាអាចនាំមនុស្សជាទីស្រឡាញ់មកលេងកម្សាន្ដ រួមទាំងទស្សនារឿងសប្បាយៗជុំគ្នា បង្កេីនភាពស្និទ្ធស្នាល និងអនុស្សាវរីយ៍ជាមួយគ្នានៅរោងភាពយន្ត លេជេន 🤩


🗓 កម្មវិធី Children's Day Movie Magic នឹងធ្វើឡេីងនៅថ្ងៃទី 30-31 ខែឧសភា និង ថ្ងៃទី 1 ខែមិថុនា ឆ្នាំ2025 មានកម្មវិធីជាច្រេីនដូចជា៖

- ឱកាសឈ្នះរង្វាន់សម្រាប់ក្មេង ដោយឆ្លើយសំណួរងាយៗ 🎁

- Mascot Tour (សម្រាប់អ្នកចូលរួមអាចថតរូបលេងកម្សាន្ដ) 🐨

- ការចែកប៉េងប៉ោងសម្រាប់អូនៗតូចៗទៀតផង🎈

សម្រាប់តម្លៃសំបុត្រក្នុងការចូលរួម៖

- ក្មេងអាយុ 12 ឆ្នាំចុះក្រោមមានតម្លៃ 1.5$ (ត្រូវមកទិញនៅបញ្ជរលក់សំបុត្រផ្ទាល់)

- មនុស្សធំមានតម្លៃ 2.50$


📽 រឿងដែលនឹងចាក់បញ្ចាំងមានដូចជា៖

- Despicable 4

🎟 កក់សំបុត្រ និងម៉ោងចាក់បញ្ចាំង https://www.legend.com.kh/movies/HO00001615

- The Wild Robot

🎟 កក់សំបុត្រ និងម៉ោងចាក់បញ្ចាំង https://www.legend.com.kh/movies/HO00001741

- Sonic the Hedgehog

🎟 កក់សំបុត្រ និងម៉ោងចាក់បញ្ចាំង https://www.legend.com.kh/movies/HO00001762


📍ទីតាំងមានដូចជា (Locations)៖

- LEGEND CINEMA EDEN GRADEN

- LEGEND CINEMA TK

- LEGEND CINEMA OLYMPIA

- LEGEND CINEMA KMALL

- LEGEND CINEMA SIEM REAP

- LEGEND CINEMA SIHANOUKVILLE

- LEGEND CINEMA SMC

- LEGEND CINEMA MIDTOWN

- LEGEND CINEMA 271

- LEGEND CINEMA SENSOK

- LEGEND CINEMA EXCHANGE SQUARE


📮 ព័ត៌មានរឿង & ប្រូម៉ូសិនថ្មីៗ https://t.me/legendcinemas

📥 ទាញយកកម្មវិធី Legend Cinema https://onelink.to/bv3hkm`,
  },
  {
    id: 3,
    img: grab,
    title:
      "Grab Your Ohana with a special movie bundle on Event Family Fun Day",
    date_time: "May 22, 2025",
    discreption: `Grab Your Ohana with a special movie bundle on Event Family Fun Day 

Event Information: 

Event title: Family Fun Day
Location: Legend Cinema Olympia
Date: Sunday-25-May-2025
Activities time: 2:00pm 
Screening time: 3:00pm 

Tickets price: 

_ $12.00 : get 3 tickets and popcorn regular (any flavor)
_ $16.00: get 4 tickets and popcorn bucket (any flavor) 

Mechanic: 

- This exclusive event only for family have kid at least child 12 years or below.
- Available for booking with bundle offer package and at counter 
- Tickets available for all platforms 
- This promotion not combine with other promotion
- Join Activities have a chance to win mystery premium items  
- All Kids get 4 coins to play claw machine `,
  },
  {
    id: 4,
    img: diamond,
    title:
      "ក្លាយជាសមាជិក Diamond Member ដើម្បីទទួលបានអត្ថប្រយោជន៏ផ្តាច់មុខនិងសិទ្ធិពិសេសជាច្រើនលើសគេ",
    date_time: "Dec 31, 2024",
    discreption: `ក្លាយជាសមាជិក Diamond Member

ដើម្បីទទួលបានអត្ថប្រយោជន៏ផ្តាច់មុខនិងសិទ្ធិពិសេសជាច្រើនលើសគេ

 

5% បន្ថែមរាល់ពេលបញ្ចូលទឹកប្រាក់:

រីករាយជាមួយទឹកប្រាក់បន្ថែម 5%លើរាល់ការបញ្ចូលទឹកប្រាក់ ដែលធ្វើឱ្យប្រាក់របស់អ្នកកាន់តែកើនឡើងនិងចំណេញ។

10% បញ្ចុះតម្លៃលើសំបុត្រកុនអាហារសម្រន់ និងភេសជ្ជៈ:

ក្នុងនាមជាសមាជិក Diamond អ្នកនឹងទទួលបានការបញ្ចុះតម្លៃ10% លើការទិញសំបុត្រ អាហារ និងភេសជ្ជៈ។

 

មានសិទ្ធប្រើប្រាស់កន្លែងរង់ចាំ VIP (Gold & Diamond Lounge):

រីករាយជាមួយការចូលប្រើផ្តាច់មុខកន្លែងទទួលភ្ញៀវ VIP និងសេវាកម្មជាពិសេស។

 

ទទួលបាន Welcome Drink

ទទួលបានភេសជ្ជៈស្វាគមន៍ចំនួន 4 កែវរៀងរាល់ខែ រៀបចំជាពិសេសសម្រាប់អ្នក។

 

កាដូថ្ងៃខួបកំណើត:

ទទួលបានកាដូថ្ងៃកំណើតពិសេសដើម្បីធ្វើឱ្យថ្ងៃពិសេសរបស់អ្នកកាន់តែចងចាំ។

 

10%ទឹកប្រាក់ត្រឡប់ទៅរិញរាល់ការចំំណាយ:

ទទួលបានទឹកប្រាក់ 10% ត្រឡប់ទៅវិញរាល់ការចំណាយ 50ដុល្លារក្នងមួយវិក័យប័ត្រ។

 

សិទ្ធក្នុងការចូលរួមកម្មវិធីពិសេស:

ទទួលបានសិទ្ធក្នុងការចូលរួមកម្មវិធីពិសេសដូចជាកម្មវិធីសម្ពោធរឿង និងកម្មវិធីផ្សេងៗ 1 ដងក្នុងមួយឆ្នាំ។`,
  },
  {
    id: 5,
    img: happy,
    title: "តោះមករីករាយជាមួយតម្លៃពិសេសពីរោងភាពយន្ត លេជេន ទួលគោក!",
    date_time: "Jul 26, 2024",
    discreption: `តោះ! រីករាយជាមួយតម្លៃពិសេសពីរោងភាពយន្ត លេជេន ទួលគោក!
សម្រាប់ថ្ងៃច័ន្ទ-ព្រហស្បតិ៍៖  
សំបុត្រ 2D តម្លៃ $2.5 
សំបុត្រ 3D តម្លៃ $3.5
សម្រាប់ថ្ងៃសុក្រ-អាទិត្យ៖ 
សំបុត្រ 2D តម្លៃ $3.5
សំបុត្រ 3D តម្លៃ $4
សុពលភាពចាប់ពីថ្ងៃនេះតទៅ!`,
  },
  {
    id: 6,
    img: student,
    title: `
ការផ្តល់ជូនតម្លៃពិសេសតែម្តង "សម្រាប់សិស្ស និង មនុស្សវ័យចំណាស់ ជារៀងរាល់ថ្ងៃ ពីថ្ងៃច័ន្ទ ដល់ ថ្ងៃអាទិត្យ និងថ្ងៃបុណ្យទាន" 😜`,
    date_time: "Feb 26, 2024",
    discreption: `លក្ខខណ្ឌ៖
- ចំពោះសិស្ស តម្រូវឱ្យបង្ហាញកាតសិស្ស (មានសុពលភាពសម្រាប់សិស្សត្រឹម ថ្នាក់ទី 12 ចុះក្រោម)
- ចំពោះមនុស្សវ័យចំណាស់ តម្រូវឱ្យបង្ហាញអត្តសញ្ញាណប័ណ្ណ (មានសុពលភាពសម្រាប់អាយុចាប់ពី 60 ឆ្នាំឡើងទៅ)
-ការផ្តល់ជូននេះ មិនមានសម្រាប់សាល Screen X, Gold Class & Diamond Class នោះទេ
-ការផ្តល់ជូននេះ សុពលភាពចាប់ពី ថ្ងៃទី 15 កុម្ភៈ ឆ្នាំ 2024 តទៅ
-ការផ្តល់ជូននេះ សម្រាប់មនុស្សម្នាក់អាចទិញសំបុត្របានមួយ ក្នុងមួយថ្ងៃ
-តម្លៃនេះនឹងប្រែប្រួលទៅតាមភាពយន្តខ្នាតធំ និង format មួយចំនួន

📍ការផ្តល់ជូននេះចាប់ផ្តើមពីថ្ងៃនេះតទៅនិងមាននៅគ្រប់សាខាទាំងអស់របស់រោងភាពយន្ត លេជេន លេជេន ព្រីមៀម និង  លេជេន បាយ អាយស៍។`,
  },
];
export default Offers;
