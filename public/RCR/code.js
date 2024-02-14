import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'
import { getFirestore, collection, doc, updateDoc, getDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
import { getAuth, signInAnonymously } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';


      const firebaseConfig = {
      apiKey: "AIzaSyABuz5qmlW61lG4Xj0sG6Eqc161L9EAfQg",
      authDomain: "rcr-db.firebaseapp.com",
      projectId: "rcr-db",
      storageBucket: "rcr-db.appspot.com",
      messagingSenderId: "738872669722",
      appId: "1:738872669722:web:04e6481f6111bc5cd603a3",
      measurementId: "G-ZXLHXHGMR1"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      const db = getFirestore(app);
      const auth = getAuth(app);

      signInAnonymously(auth)
      .then((userCredential) => {
        console.log('User signed in:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error signing in:', error.message);
      });
     
var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {
    "orderedKeys":[
      "afe271cc-d4d9-41b5-b5d6-667d3f9477c6","344bc444-0c43-45c0-93ef-915cb76ff02d","3cb49619-7fbb-46ef-8cba-52ad5bb1bec9",
      "21d9ef65-dc7e-4c56-a98a-50e1a264a9c3","013812ac-6a06-4c76-a011-d7d1ef7e69c3","b71ee6e8-e10a-46a7-9a88-cd224ec4ddaf",
      "46cdf2d9-30cf-42d7-95c3-5dcf5abf9b76","9ce170cc-f76f-437a-9773-a92604e08791","07667d85-ba38-4294-8ad6-b7c1ebf9d415",
      "11058df7-043b-4ce8-be0b-3bd8dd93cf33","7b5d383d-7ebb-438f-9b84-83912ad6e961","0bc0e360-c223-4cac-8bdb-d8b34572b073",
      "5b71bb13-a15c-4a2f-8977-1db849ad6a2d","b221ac7f-5c06-48c8-ace5-36e3fea16bed","b0322a07-75a6-4d20-9186-a3c02dd16c72",
      "e1d97ae5-f2e8-4aa6-89cb-8d98bab9dbcd","e185a48b-6d8e-400e-9563-dc9b10a69277","54f96f16-bf5b-4c84-a375-ff575427a894",
      "b468ded5-6fc3-4690-81a3-2633ba9d465c","3f2d8dcc-81eb-4c7f-83fd-ae6238750e47","c87bb60e-0cfa-4d1b-8b51-057c9bf18736",
      "c22fa310-11ab-4622-a250-075ea67ab5e8","cba9d44c-a88c-4c4c-9d2a-03cf52748edf","ed4c4484-6b3d-4b0b-96fa-4fd5b7c0df7e",
      "f891f820-7b68-477f-abd8-254c858b3570","9c24e841-3955-4344-97fb-4302a3013965","8d38414a-7beb-4c30-8de2-f1b9beeac5bc",
      "4a783641-db12-4519-9c58-b366f027921d","4a091930-13be-48e0-8a6d-86e7ee6bba62","1768fcab-d36c-47c9-a996-10940d380f79",
      "91b48adf-61c0-4a15-a3f4-a9ca714f32dd","8bab1634-dc29-4c18-bb14-86bf3145583e","aa037579-b6f0-47f3-b34d-3fba1b5cf2ff",
      "bd5c58db-02ff-40be-a545-c501cdd54ec0","81f999c6-4b0b-477d-bbe1-75c6a78c9fbc","57ac1eff-9874-45fb-b941-524ec059988d",
      "de337109-c776-4de1-a178-dc27f80219b2","60ed7408-3f10-4648-b9d9-8e3d2efcc79c","959cb37d-3ebf-44bc-b27a-1a7247381d0b",
      "5a60b1db-5fc0-4730-a088-4ff74ba084da","7797797d-9e94-4258-a501-1ac851063dfa","6d111345-17f1-4027-9878-ba50dc496d8d",
      "7c8ff8b8-95ba-4525-acbf-d3389ed06dd9","1eb8dd06-5dac-4668-ab60-b98b96446685","b79e2e36-d648-4b24-a74d-40ac7befad61",
      "4509fffc-beb2-4581-8216-709417348b3a","f46395c0-171e-4592-af13-10fddd9a0b51","34fb001c-f3e0-41a5-94f7-ab9a660bc3bb",
      "93de2fbe-d2f3-4245-86a6-eb497202de3f","57686bd3-f858-4b88-b62b-043b1b236f96","535e41ff-07c6-41b2-87f9-100b7ee66539",
      "dc22d733-5cd0-452e-abd6-5c65d56b5c3a","cc1f8bc7-da20-4b28-b175-0da3aaab43bf","1b52e645-db1d-4194-a2c5-fe3fb828b657",
      "78fc0417-5634-49f8-901f-c10595d3a0b7","3fa63744-74ab-4e31-a078-578e0b0502f8","b77b3f3d-bd0d-4fd2-a70f-9e966bdde947",
      "1b1b0697-29db-4b9e-acf9-b49889a51c9d","2abd04f5-6dbc-4680-87f7-ef6d1ffb90a1","581a3cea-4243-4c43-8c47-21bc35bd2a38",
      "41303c3e-28a4-4815-8281-42e5aa7cc9f3","59612313-29d0-4da5-b7d4-407e19c022bd","e38436e9-335f-4271-aa21-b54f95dfbbe1",
      "50dc6a80-bc8a-43c1-8ba4-c31e21b5eba6","1664c39f-2ff8-4224-8ee0-2e862a29fac3","8d0099ef-4d20-479c-a26d-75e06da2060f",
      "683a14e1-9bdf-4654-b461-0951a03a9d15","73462c75-ec72-4cda-83ec-cda04ef86ccb","d8a1470f-283d-4974-98e4-07099cc1ea90",
      "47c42bc3-7d1f-407c-b454-6f9abcf2d889","66529aff-5640-4236-941f-0161a985c3e9","80657d93-bfec-452f-91cb-26eaed44f0d9",
      "52383196-15a5-4beb-ad3e-e546d8ed2226","0f233292-188a-4e31-91fb-c132b38c5c96","e65ff04a-2f19-4135-9377-3004b7259c8d",
      "e8264b0c-7c62-478f-ac85-8c9df554356c","1e58f11b-85d8-499d-86dd-9ccc2627c3a7","997f6bc3-6f6d-4e0a-a5dd-daeed6d16b79",
      "e11bea23-b6a2-46da-a3d4-f89aa4fc7d6b","1f65de02-7a3e-4980-9ac8-98b9520db308","5e194aa7-fbf3-4f93-9652-fc4d948dc5b1",
      "efa5359c-4238-4b76-b27e-9f5f9e47d374","64b0479b-b1f7-4444-82aa-bed185ffd518","4d483f2c-e8d7-4d4c-97a1-f8f1700766ac",
      "a82b33f7-6e4c-4061-ac6c-f7cc066d9069","56115a4d-cc98-4362-9b30-429d64b2e49c","10b40db6-b8ee-46dc-87a0-625daca0335e",
      "67b3c9ff-c5d5-459d-b670-b3314dc66e1f","c3be3c5e-a260-4770-8d1c-f3247e8505e8","3f422943-4072-440c-8383-1ddad6546b92",
      "f188ca71-fb2d-42df-8bb7-4e7c8dae1429","57c1b732-5ae1-449a-bd03-748f0c47101b","c8d281e1-d153-4f27-b3b8-9a2ed8646dc3",
      "76d5c142-b0a8-4221-a7cb-570b1d6b1b33","a210b375-016a-4cae-8ae9-476cbdc6e244","6b9cddf6-02cf-4015-986d-62dc16405721",
      "1a3050dd-1e66-4558-97aa-3398e475721e","f59a14fe-5327-46ab-a95b-ff37efd6583f","bf60c54a-0e6c-49bb-9808-0f565532e574",
      "5648a8bb-2a30-4d51-99a7-99ec5694e595","336cbdfe-16f6-4da2-99cd-29df7a15ade2","d1ee625e-cada-4389-835f-6b473661cd8a",
      "84f5d2cd-3141-481a-8198-d6fe5bb5d124","00730915-9ffd-4517-bc1c-3d2840d40606","359d12aa-b0cd-4269-8558-ac2bd552794a",
      "db636b16-4156-430b-b6ac-fec18425dfc0","8398c1f7-5cf1-4977-b062-28d1b6148424","fe93544e-ff85-45f4-b780-12c2e292f58d",
      "6879e917-d6e1-4071-8977-cdfcbf20ddf5","8a8a4c43-a2db-4403-8c6e-b0c920f9517c","9e8e9360-7d40-4ec1-ad49-64158811912d",
      "21e97009-4c8f-49be-aace-581088d18055","65b0bac4-a883-4a4f-b52b-c388936df244","b9cc961e-0cec-4b0c-8091-211d1c0a9e1a",
      "109eb801-755a-4d7a-b70f-34e791d9ac2e","e0ac0681-e52a-40c9-88f5-75252ce16fe9","b7de1c3a-db8b-4b8f-9c05-5fd80dfd9480",
      "f17020da-f458-4088-a44e-03fe153d4311","d5dab271-b804-40b3-a851-79881b1aa54d","193d69c2-22ea-4f9a-93db-8c718228875d",
      "c5d1b989-ff75-4133-89da-b0ab3d9007cf","6c0bf47c-bb0a-4fd1-b3a9-fad9e9d57a15","9cff1d98-4d35-4232-9b4b-39a1292eb39e",
      "12917300-258d-4648-a054-e87231123379","f21ac2ec-c479-45bc-8cd0-25eb1b1c97ea","0ff18517-083a-417b-abba-46c65388d782",
      "7f76c45a-6a0c-4685-b5dc-cee5db4ce7d7","89548dd5-bf71-4bf9-a95b-cd3395ec9874","8ca66367-0eeb-4ba9-9720-db123ce6ff28",
      "1d82a5a7-f6bb-49d3-aed9-3fffb31abd7e","6e1efe65-e499-4d41-84d9-53e298fd7c7b","0c177125-21ff-4d5e-b085-3de73ac2f777",
      "5e23a23b-dc25-4c78-8ca0-d1616bc2bcc4","7eca17d5-2608-4068-b7fb-c63557e47226","86685a82-257b-416d-ab77-dea031eb2fdd",
      "e8f10e37-9ff7-4763-83f7-7dd7ec17229a","a3f48b5d-a674-4262-95e8-7eaf62ef28a0","ff9ee03c-c5fb-4f23-8cbf-91780f6ca380",
      "1244c3b0-5e38-4fc5-8b75-c139aff2143f","4282bb6e-0835-480c-a9c4-caf656308101","136c4820-4051-46f8-912a-9dde22be23d4",
      "e5dc5059-bb4e-4102-a997-8f93634c854b","9ebad13f-dd5a-4e7b-b2e9-e9ac1cef013c","ddc57d50-e0ac-4949-a0e2-6ba0c6bb88b6",
      "3533a13f-7883-4466-b7df-55d64ac86f59","f4298323-ef3a-4607-8533-3aad14f1a510","ad966eee-8291-476c-821e-9a8aacfcfc78",
      "ac1086b7-aa38-4927-95d4-693b190b9019","fceb4109-6ff2-48c6-9a32-ebe769581efa","fae993c7-ff1f-4189-b7b8-6850022be1ee",
      "1c3719ee-8ed3-46a0-a681-90ebe972701d","a1b191c4-e3ed-496c-ba3a-55ba20b67aca","58a26cc5-08d2-40d1-b58d-93f9b9c3a941",
      "fd0aba7f-c294-4316-ad27-e83d219203fd","ecfd1fd2-7dd2-4cda-8b52-3b390b186e5c","36bbb6ae-c47b-4e11-9040-aac922b7abef",
      "89b45ffe-e827-4a84-aa06-161ae192b2cb","a99286f2-38da-411d-a143-20e4323c607f","d6e84699-1b8c-45e8-8d9f-b244023f25f9",
      "7a04884e-b771-44ac-a6eb-7ba74eb8cbee","e0f0c193-74e3-4aca-abb3-b2c504ee5c77","74939083-d23d-47f4-9139-92216cbee23f",
      "f53e7ef6-6729-4433-ad38-69d270321ab6","df85519e-6891-4517-983f-0464c0860b4f","4e3e6f3b-1d68-424e-bce8-ead7578e5f37",
      "5cbcf54f-eee8-438b-8af6-a366c0e509a4","15c2f6d9-aca6-4831-b85f-5af40e946a31","7c8d2900-486f-4dca-a26d-3fb64597edd4",
      "c9f2498c-875a-46a1-9a27-d7ee066e7c16","359d9cf2-252e-4a61-8434-d3e06e6d1818","ac56b816-b38d-4c39-b284-9329956f012b",
      "5268d869-0b57-4d76-8db9-e2b9cb511aef","d4cad440-3f45-4ccc-9099-6fae1dc9c57a","1cee439d-394f-40c4-a79a-063504689c65",
      "0464484a-ad0b-45b8-84fd-e6c073f97b98","04bd5d83-0a30-4913-939f-4a4b06a3afbb","8411690f-6ba2-4775-84e7-88113f5b9306",
      "ca6d4adf-3994-4094-83dd-55e13ae5f22c","d1b63800-73a1-43f5-8410-40f667358252","9a4ca4e1-7118-46ea-a250-808dc121cfe8",
      "12fe7dd2-c49e-4334-b78f-342e63043244","fae5037f-d1cc-4e67-8647-3697bbbcc92d","2935647c-fb5c-44f2-be4d-220a506385bb",
      "faa249fa-d455-4ee8-9941-d9eec75e6ba2","960c2dda-6687-466f-9d6e-2a19deb36716","035b3a17-9bed-4a6f-a4a2-b3fdfd5bf355",
      "ce8fd41d-65be-496d-a97f-c0f98392f6c4","ece69489-57b0-4272-b533-7ab6fc40fb1b","cf41b27f-de4b-4c2e-8e31-88df950a6a56",
      "76ca2a5d-4647-496c-82ea-651af5e3c31e","06ae0f1a-e152-4af7-903f-716c6acf0e31","19b4f098-ffdc-4173-80ab-1c3afbe8e750",
      "16e42528-5b9c-43b4-b705-bc2433e370a6","4b058134-5129-49ab-8b9c-ebf9678afd4d","4490f9c7-baa3-4b20-86fc-4437dfa61558",
      "32880dce-82b0-41cc-8154-6dbbcdca15d6","c4b57627-d0aa-4b3e-9e25-ee2bd86bab15","18879e75-30c4-4595-a693-6d9bff8a5bce",
      "155760e3-dd81-4e81-a491-ccb6bf1e1667","def110de-c1a9-4d72-ae0b-9fadd52df8ff","22fc5cc4-d558-4719-8eea-f7d1e909495c",
      "7d18a641-8a03-42e1-85c3-0260c2e70ae0","dba337a9-5ab1-4dff-9c20-59d224efa696","dc59f0e3-7d39-408c-86fd-67bab79d0425",
      "954c2a2f-98f3-4a9c-a8e5-28a5d79d0eec","ea2d3ee0-4af8-41af-bca7-e8f5445f37bc","thumbUp","thumbDown","steamboat"],
      "propsByKey":{
        "afe271cc-d4d9-41b5-b5d6-667d3f9477c6":{"name":"leftUp","sourceUrl":null,"frameSize":{"x":240,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"fORYRd_8dtCMTf7zXK2kR98Kek6XUA_3","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":384},"rootRelativePath":"assets/afe271cc-d4d9-41b5-b5d6-667d3f9477c6.png"},
        "344bc444-0c43-45c0-93ef-915cb76ff02d":{"name":"leftSide","sourceUrl":null,"frameSize":{"x":384,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"sOHx7oXz2trTC1EE69Z5asHU6rJQYV.C","loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":240},"rootRelativePath":"assets/344bc444-0c43-45c0-93ef-915cb76ff02d.png"},
        "3cb49619-7fbb-46ef-8cba-52ad5bb1bec9":{"name":"leftWalkUp","sourceUrl":null,"frameSize":{"x":240,"y":392},"frameCount":7,"looping":true,"frameDelay":2,"version":"DgH7G8UnbM7LPaHwLU6npH7rI7s51W3_","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1176},"rootRelativePath":"assets/3cb49619-7fbb-46ef-8cba-52ad5bb1bec9.png"},
        "21d9ef65-dc7e-4c56-a98a-50e1a264a9c3":{"name":"leftRunUp","sourceUrl":null,"frameSize":{"x":240,"y":392},"frameCount":7,"looping":true,"frameDelay":1,"version":"yu9bkKmmSQInNFUOFkxgO1QNGrFPhOr0","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1176},"rootRelativePath":"assets/21d9ef65-dc7e-4c56-a98a-50e1a264a9c3.png"},
        "013812ac-6a06-4c76-a011-d7d1ef7e69c3":{"name":"leftDown","sourceUrl":null,"frameSize":{"x":240,"y":392},"frameCount":1,"looping":true,"frameDelay":12,"version":"R9p6Or4RpcPKxFqudnjzGqB9e6hO3VyP","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":392},"rootRelativePath":"assets/013812ac-6a06-4c76-a011-d7d1ef7e69c3.png"},
        "b71ee6e8-e10a-46a7-9a88-cd224ec4ddaf":{"name":"leftHead","sourceUrl":null,"frameSize":{"x":224,"y":185},"frameCount":1,"looping":true,"frameDelay":12,"version":"xhEek7lNlkU7jqMu2pQYzo3FE5pzu0B8","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":185},"rootRelativePath":"assets/b71ee6e8-e10a-46a7-9a88-cd224ec4ddaf.png"},
        "46cdf2d9-30cf-42d7-95c3-5dcf5abf9b76":{"name":"leftWalkDown","sourceUrl":null,"frameSize":{"x":240,"y":400},"frameCount":7,"looping":true,"frameDelay":2,"version":"mN5.WHc1KIfCnGlow3iaWXENdsU93AGz","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1200},"rootRelativePath":"assets/46cdf2d9-30cf-42d7-95c3-5dcf5abf9b76.png"},
        "9ce170cc-f76f-437a-9773-a92604e08791":{"name":"leftRunDown","sourceUrl":null,"frameSize":{"x":240,"y":400},"frameCount":7,"looping":true,"frameDelay":1,"version":"xGpBiRyVeXQtELKpOwJIk48XQ6NWqzqj","loadedFromSource":true,"saved":true,"sourceSize":{"x":720,"y":1200},"rootRelativePath":"assets/9ce170cc-f76f-437a-9773-a92604e08791.png"},
        "07667d85-ba38-4294-8ad6-b7c1ebf9d415":{"name":"leftRight","sourceUrl":null,"frameSize":{"x":168,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"c7kVr7gqUnwq3LlIuRr.65992V5McwPO","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":384},"rootRelativePath":"assets/07667d85-ba38-4294-8ad6-b7c1ebf9d415.png"},
        "11058df7-043b-4ce8-be0b-3bd8dd93cf33":{"name":"leftWalkRight","sourceUrl":null,"frameSize":{"x":232,"y":384},"frameCount":8,"looping":true,"frameDelay":2,"version":"ro4by4K2KgDyEMbtltkk7xGlLn07mi4x","loadedFromSource":true,"saved":true,"sourceSize":{"x":928,"y":768},"rootRelativePath":"assets/11058df7-043b-4ce8-be0b-3bd8dd93cf33.png"},
        "7b5d383d-7ebb-438f-9b84-83912ad6e961":{"name":"leftRunRight","sourceUrl":null,"frameSize":{"x":232,"y":384},"frameCount":8,"looping":true,"frameDelay":1,"version":"6V1H1aagLU8.522zOZo7qrNa0WN6TT1l","loadedFromSource":true,"saved":true,"sourceSize":{"x":928,"y":768},"rootRelativePath":"assets/7b5d383d-7ebb-438f-9b84-83912ad6e961.png"},
        "0bc0e360-c223-4cac-8bdb-d8b34572b073":{"name":"leftLeft","sourceUrl":null,"frameSize":{"x":216,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"oNmk_09Z.y8Wyci3GEL67IJLKK3E21H_","loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":384},"rootRelativePath":"assets/0bc0e360-c223-4cac-8bdb-d8b34572b073.png"},
        "5b71bb13-a15c-4a2f-8977-1db849ad6a2d":{"name":"leftWalkLeft","sourceUrl":null,"frameSize":{"x":248,"y":384},"frameCount":7,"looping":true,"frameDelay":2,"version":"c40DLrSKocryMM97RXonTLMHGItWn0gt","loadedFromSource":true,"saved":true,"sourceSize":{"x":744,"y":1152},"rootRelativePath":"assets/5b71bb13-a15c-4a2f-8977-1db849ad6a2d.png"},
        "b221ac7f-5c06-48c8-ace5-36e3fea16bed":{"name":"leftRunLeft","sourceUrl":null,"frameSize":{"x":248,"y":384},"frameCount":7,"looping":true,"frameDelay":1,"version":"nY7W1qxOnFURE7ozplOHkty07JoVvhPS","loadedFromSource":true,"saved":true,"sourceSize":{"x":744,"y":1152},"rootRelativePath":"assets/b221ac7f-5c06-48c8-ace5-36e3fea16bed.png"},
        "b0322a07-75a6-4d20-9186-a3c02dd16c72":{"name":"rightDown","sourceUrl":null,"frameSize":{"x":224,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"pxGYgtexuzY5xmiw.UaPDBvy03wcIV.v","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":376},"rootRelativePath":"assets/b0322a07-75a6-4d20-9186-a3c02dd16c72.png"},
        "e1d97ae5-f2e8-4aa6-89cb-8d98bab9dbcd":{"name":"rightHead","sourceUrl":null,"frameSize":{"x":200,"y":173},"frameCount":1,"looping":true,"frameDelay":12,"version":"SYv5FnyKLqvffGmxkhH88YdgKgxsjNjK","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":173},"rootRelativePath":"assets/e1d97ae5-f2e8-4aa6-89cb-8d98bab9dbcd.png"},
        "e185a48b-6d8e-400e-9563-dc9b10a69277":{"name":"rightWalkDown","sourceUrl":null,"frameSize":{"x":224,"y":400},"frameCount":8,"looping":true,"frameDelay":2,"version":"yHN7W.P6Os.nopG6_xoTtJGSA8ct97Kj","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":800},"rootRelativePath":"assets/e185a48b-6d8e-400e-9563-dc9b10a69277.png"},
        "54f96f16-bf5b-4c84-a375-ff575427a894":{"name":"rightRunDown","sourceUrl":null,"frameSize":{"x":224,"y":400},"frameCount":8,"looping":true,"frameDelay":1,"version":"kZODsqimgeaZvz75W3aoQjkaCe_axiC6","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":800},"rootRelativePath":"assets/54f96f16-bf5b-4c84-a375-ff575427a894.png"},
        "b468ded5-6fc3-4690-81a3-2633ba9d465c":{"name":"rightLeft","sourceUrl":null,"frameSize":{"x":200,"y":376},"frameCount":1,"looping":true,"frameDelay":10,"version":"nu1HASkxH54HgOesUsKH0ZWUmt0l1qHg","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":376},"rootRelativePath":"assets/b468ded5-6fc3-4690-81a3-2633ba9d465c.png"},
        "3f2d8dcc-81eb-4c7f-83fd-ae6238750e47":{"name":"rightWalkLeft","sourceUrl":null,"frameSize":{"x":224,"y":376},"frameCount":7,"looping":true,"frameDelay":2,"version":"JJjKUxb5EWLsEQAtk2zdlJkJoMmrDgIJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":672,"y":1128},"rootRelativePath":"assets/3f2d8dcc-81eb-4c7f-83fd-ae6238750e47.png"},
        "c87bb60e-0cfa-4d1b-8b51-057c9bf18736":{"name":"rightRunLeft","sourceUrl":null,"frameSize":{"x":224,"y":376},"frameCount":8,"looping":true,"frameDelay":1,"version":"ExeGhlnEnOBM5D78NerFAX6HWw3uZ8yt","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":752},"rootRelativePath":"assets/c87bb60e-0cfa-4d1b-8b51-057c9bf18736.png"},
        "c22fa310-11ab-4622-a250-075ea67ab5e8":{"name":"rightRight","sourceUrl":null,"frameSize":{"x":200,"y":376},"frameCount":1,"looping":true,"frameDelay":12,"version":"Kn93G_dfGtF1mwkvCuRfid3AzH6Tsdzx","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":376},"rootRelativePath":"assets/c22fa310-11ab-4622-a250-075ea67ab5e8.png"},
        "cba9d44c-a88c-4c4c-9d2a-03cf52748edf":{"name":"rightWalkRight","sourceUrl":null,"frameSize":{"x":216,"y":376},"frameCount":8,"looping":true,"frameDelay":2,"version":"g9j7jSbJDnw390V_Mgca54.BVuZmYNqh","loadedFromSource":true,"saved":true,"sourceSize":{"x":864,"y":752},"rootRelativePath":"assets/cba9d44c-a88c-4c4c-9d2a-03cf52748edf.png"},
        "ed4c4484-6b3d-4b0b-96fa-4fd5b7c0df7e":{"name":"rightRunRight","sourceUrl":null,"frameSize":{"x":216,"y":376},"frameCount":8,"looping":true,"frameDelay":1,"version":"bimSH4Cg.yvYJ4VmR7Eg88qJZbc02vQv","loadedFromSource":true,"saved":true,"sourceSize":{"x":864,"y":752},"rootRelativePath":"assets/ed4c4484-6b3d-4b0b-96fa-4fd5b7c0df7e.png"},
        "f891f820-7b68-477f-abd8-254c858b3570":{"name":"rightUp","sourceUrl":null,"frameSize":{"x":224,"y":384},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZT3ItPFPiXRO.j9YxU6gFs.8oxIvlzuq","loadedFromSource":true,"saved":true,"sourceSize":{"x":224,"y":384},"rootRelativePath":"assets/f891f820-7b68-477f-abd8-254c858b3570.png"},
        "9c24e841-3955-4344-97fb-4302a3013965":{"name":"rightSide","sourceUrl":null,"frameSize":{"x":384,"y":224},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZluFw0hopPnl5ZhAwHDX5D0fhnN_mwD3","loadedFromSource":true,"saved":true,"sourceSize":{"x":384,"y":224},"rootRelativePath":"assets/9c24e841-3955-4344-97fb-4302a3013965.png"},
        "8d38414a-7beb-4c30-8de2-f1b9beeac5bc":{"name":"rightWalkUp","sourceUrl":null,"frameSize":{"x":224,"y":392},"frameCount":8,"looping":true,"frameDelay":2,"version":"SOruJyHus73iTp57h.mUPlhgktH05Te8","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":784},"rootRelativePath":"assets/8d38414a-7beb-4c30-8de2-f1b9beeac5bc.png"},
        "4a783641-db12-4519-9c58-b366f027921d":{"name":"rightRunUp","sourceUrl":null,"frameSize":{"x":224,"y":392},"frameCount":8,"looping":true,"frameDelay":1,"version":"SUx96QMX4uEpPPGiGsArAOZCgiX04Oh4","loadedFromSource":true,"saved":true,"sourceSize":{"x":896,"y":784},"rootRelativePath":"assets/4a783641-db12-4519-9c58-b366f027921d.png"},
        "4a091930-13be-48e0-8a6d-86e7ee6bba62":{"name":"noSign","sourceUrl":null,"frameSize":{"x":450,"y":448},"frameCount":1,"looping":true,"frameDelay":12,"version":"j0FedxkDR_LwM35s37feGB21EYZHue7Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":450,"y":448},"rootRelativePath":"assets/4a091930-13be-48e0-8a6d-86e7ee6bba62.png"},
        "1768fcab-d36c-47c9-a996-10940d380f79":{"name":"book","sourceUrl":null,"frameSize":{"x":304,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"tdc0kqJZeMdPdVDG3V_oueUI4DQwXvjc","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":226},"rootRelativePath":"assets/1768fcab-d36c-47c9-a996-10940d380f79.png"},
        "91b48adf-61c0-4a15-a3f4-a9ca714f32dd":{"name":"gradHat","sourceUrl":null,"frameSize":{"x":934,"y":578},"frameCount":1,"looping":true,"frameDelay":12,"version":"qqTiUz5qqxEa2b6x8alriPre0ZTLVoVy","loadedFromSource":true,"saved":true,"sourceSize":{"x":934,"y":578},"rootRelativePath":"assets/91b48adf-61c0-4a15-a3f4-a9ca714f32dd.png"},
        "8bab1634-dc29-4c18-bb14-86bf3145583e":{"name":"dollar","sourceUrl":null,"frameSize":{"x":622,"y":958},"frameCount":1,"looping":true,"frameDelay":12,"version":"QSwSmO.C8QED3knvoloRTdSyWTXUp_ow","loadedFromSource":true,"saved":true,"sourceSize":{"x":622,"y":958},"rootRelativePath":"assets/8bab1634-dc29-4c18-bb14-86bf3145583e.png"},
        "aa037579-b6f0-47f3-b34d-3fba1b5cf2ff":{"name":"streetVert2","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"0i96A7uehl8jCdKkq5M1vA41IQRZ5alN","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/aa037579-b6f0-47f3-b34d-3fba1b5cf2ff.png"},
        "bd5c58db-02ff-40be-a545-c501cdd54ec0":{"name":"streetVert2Flood","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"EAAmFNMzIDcjD0L2Owx0m.AtP8xCxzZ4","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/bd5c58db-02ff-40be-a545-c501cdd54ec0.png"},
        "81f999c6-4b0b-477d-bbe1-75c6a78c9fbc":{"name":"streetVertCon","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"EhOGUTZ6tfCCUu9p10Qsz5k3kB_Oge.t","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/81f999c6-4b0b-477d-bbe1-75c6a78c9fbc.png"},
        "57ac1eff-9874-45fb-b941-524ec059988d":{"name":"bridgeVert2","sourceUrl":null,"frameSize":{"x":138,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"zhDErsWPulT28FAsaK_N8QZMjPjC.Qxv","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":192},"rootRelativePath":"assets/57ac1eff-9874-45fb-b941-524ec059988d.png"},
        "de337109-c776-4de1-a178-dc27f80219b2":{"name":"bridgeVert2Flood","sourceUrl":null,"frameSize":{"x":138,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"zYuHDpX0ufJHCMFH1nxBU5wkzDCF4rLu","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":192},"rootRelativePath":"assets/de337109-c776-4de1-a178-dc27f80219b2.png"},
        "60ed7408-3f10-4648-b9d9-8e3d2efcc79c":{"name":"bridgeVertCon","sourceUrl":null,"frameSize":{"x":138,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"QVPVXx9WvpyRJ2XbazWTfKaClbfTyITM","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":192},"rootRelativePath":"assets/60ed7408-3f10-4648-b9d9-8e3d2efcc79c.png"},
        "959cb37d-3ebf-44bc-b27a-1a7247381d0b":{"name":"streetHoriz2","sourceUrl":null,"frameSize":{"x":192,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"KSWAJwP4zmSD8gDWt9dymO6Oun3e0vpE","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":210},"rootRelativePath":"assets/959cb37d-3ebf-44bc-b27a-1a7247381d0b.png"},
        "5a60b1db-5fc0-4730-a088-4ff74ba084da":{"name":"streetHoriz2Flood","sourceUrl":null,"frameSize":{"x":192,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"PE0WnV87WkFqu342ilW0DZ8AvBgAUQcA","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":210},"rootRelativePath":"assets/5a60b1db-5fc0-4730-a088-4ff74ba084da.png"},
        "7797797d-9e94-4258-a501-1ac851063dfa":{"name":"streetHorizCon","sourceUrl":null,"frameSize":{"x":192,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"z4_AZO5DjOOUTxU7TzBg4VE9J6wiOpmV","loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":210},"rootRelativePath":"assets/7797797d-9e94-4258-a501-1ac851063dfa.png"},
        "6d111345-17f1-4027-9878-ba50dc496d8d":{"name":"streetVert1","sourceUrl":null,"frameSize":{"x":198,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"9BxvXMAHBTq76xdIwimzSGnzYKK8l2sY","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":192},"rootRelativePath":"assets/6d111345-17f1-4027-9878-ba50dc496d8d.png"},
        "7c8ff8b8-95ba-4525-acbf-d3389ed06dd9":{"name":"streetVert1Flood","sourceUrl":null,"frameSize":{"x":198,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"W7OrqfRHaD5gk1qr1Iqun5PzQAcp4Zkc","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":192},"rootRelativePath":"assets/7c8ff8b8-95ba-4525-acbf-d3389ed06dd9.png"},
        "1eb8dd06-5dac-4668-ab60-b98b96446685":{"name":"streetVert3","sourceUrl":null,"frameSize":{"x":198,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"elEGYVs5SiC8lm7y1nY1JsfudX.LNfD8","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":192},"rootRelativePath":"assets/1eb8dd06-5dac-4668-ab60-b98b96446685.png"},
        "b79e2e36-d648-4b24-a74d-40ac7befad61":{"name":"streetVert3Flood","sourceUrl":null,"frameSize":{"x":198,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"zSpz3xoY7zPHO3_QLvMnYecZxaAYv5o1","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":192},"rootRelativePath":"assets/b79e2e36-d648-4b24-a74d-40ac7befad61.png"},
        "4509fffc-beb2-4581-8216-709417348b3a":{"name":"streetVert4","sourceUrl":null,"frameSize":{"x":198,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"0zrFLGtlHPHR66_EmwD7mdHeLio9Fsae","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":192},"rootRelativePath":"assets/4509fffc-beb2-4581-8216-709417348b3a.png"},
        "f46395c0-171e-4592-af13-10fddd9a0b51":{"name":"streetVert4Flood","sourceUrl":null,"frameSize":{"x":198,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"fH2eajT4A9FPjiO8HAjp5E0skyU87uM2","loadedFromSource":true,"saved":true,"sourceSize":{"x":198,"y":192},"rootRelativePath":"assets/f46395c0-171e-4592-af13-10fddd9a0b51.png"},
        "34fb001c-f3e0-41a5-94f7-ab9a660bc3bb":{"name":"bridgeVert1","sourceUrl":null,"frameSize":{"x":138,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"PqMamsL5a6lWC4CkD9D7u4OJsQy_TEKM","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":192},"rootRelativePath":"assets/34fb001c-f3e0-41a5-94f7-ab9a660bc3bb.png"},
        "93de2fbe-d2f3-4245-86a6-eb497202de3f":{"name":"bridgeVert1Flood","sourceUrl":null,"frameSize":{"x":138,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gj1qcVuvPAWo.yQDo7f1cleezYfMMg2E","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":192},"rootRelativePath":"assets/93de2fbe-d2f3-4245-86a6-eb497202de3f.png"},
        "57686bd3-f858-4b88-b62b-043b1b236f96":{"name":"streetHoriz1Flood","sourceUrl":null,"frameSize":{"x":174,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"C1Lr7fSnx__RRQbXVFAHwzAUa_oacy0c","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":210},"rootRelativePath":"assets/57686bd3-f858-4b88-b62b-043b1b236f96.png"},
        "535e41ff-07c6-41b2-87f9-100b7ee66539":{"name":"streetHoriz1","sourceUrl":null,"frameSize":{"x":174,"y":210},"frameCount":1,"looping":true,"frameDelay":12,"version":"UMLiALEEb7VdCSXuhXZmu8o72GPgPpCt","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":210},"rootRelativePath":"assets/535e41ff-07c6-41b2-87f9-100b7ee66539.png"},
        "dc22d733-5cd0-452e-abd6-5c65d56b5c3a":{"name":"streetHWay","sourceUrl":null,"frameSize":{"x":58,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ri9Qlpk4HznadqgnWdnBNwFLu.hBwk5C","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":60},"rootRelativePath":"assets/dc22d733-5cd0-452e-abd6-5c65d56b5c3a.png"},
        "cc1f8bc7-da20-4b28-b175-0da3aaab43bf":{"name":"intersectionRight1","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"3gx3aqP2ewkgEjan_WZEc6yRdtokNbLh","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/cc1f8bc7-da20-4b28-b175-0da3aaab43bf.png"},
        "1b52e645-db1d-4194-a2c5-fe3fb828b657":{"name":"intersectionRight1Flood","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"Nbeat96ZsCHrrSZZGE3y1vscSxt34s.N","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/1b52e645-db1d-4194-a2c5-fe3fb828b657.png"},
        "78fc0417-5634-49f8-901f-c10595d3a0b7":{"name":"intersectionRightCon","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"V8FVBY2LMp9L8nfIU900BlkbO2hafywK","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/78fc0417-5634-49f8-901f-c10595d3a0b7.png"},
        "3fa63744-74ab-4e31-a078-578e0b0502f8":{"name":"intersectionRight2","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"wzNW47qOuA_LsLxhtMf9qbrM_CwZrsAA","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/3fa63744-74ab-4e31-a078-578e0b0502f8.png"},
        "b77b3f3d-bd0d-4fd2-a70f-9e966bdde947":{"name":"intersectionRight2Flood","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lr1T9gswfIDj_ND7edxIo70xYEz8efYY","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/b77b3f3d-bd0d-4fd2-a70f-9e966bdde947.png"},
        "1b1b0697-29db-4b9e-acf9-b49889a51c9d":{"name":"intersectionLeft2","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"n2Uo_de7mFs.NkUi.GBjnDhjzw_TJzU9","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/1b1b0697-29db-4b9e-acf9-b49889a51c9d.png"},
        "2abd04f5-6dbc-4680-87f7-ef6d1ffb90a1":{"name":"intersectionLeft2Flood","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"j9T3m9gbkRJWgKAUYTNwF318T3riF.Uw","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/2abd04f5-6dbc-4680-87f7-ef6d1ffb90a1.png"},
        "581a3cea-4243-4c43-8c47-21bc35bd2a38":{"name":"intersectionLeftCon","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"F8fq9jSBr8IXApz2A_2gaBilSzuEI124","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/581a3cea-4243-4c43-8c47-21bc35bd2a38.png"},
        "41303c3e-28a4-4815-8281-42e5aa7cc9f3":{"name":"intersectionLeft1","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"IAJR_zJ6QRMYHBodLMFjdJDUixGGx3qY","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/41303c3e-28a4-4815-8281-42e5aa7cc9f3.png"},
        "59612313-29d0-4da5-b7d4-407e19c022bd":{"name":"intersectionLeft1Flood","sourceUrl":null,"frameSize":{"x":168,"y":192},"frameCount":1,"looping":true,"frameDelay":12,"version":"OjJglaJxEehkpu5yUBW..h20SpA0bWy5","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":192},"rootRelativePath":"assets/59612313-29d0-4da5-b7d4-407e19c022bd.png"},
        "e38436e9-335f-4271-aa21-b54f95dfbbe1":{"name":"t1BuildingSide0","sourceUrl":null,"frameSize":{"x":86,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"JLqPQUanuSo7.P7ZkLS_6HirOQYzGBeI","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":74},"rootRelativePath":"assets/e38436e9-335f-4271-aa21-b54f95dfbbe1.png"},
        "50dc6a80-bc8a-43c1-8ba4-c31e21b5eba6":{"name":"t1BuildingSide3","sourceUrl":null,"frameSize":{"x":86,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"zXYJv8TYe7Sv6FJsp9l4WnH9j3L1ti_t","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":74},"rootRelativePath":"assets/50dc6a80-bc8a-43c1-8ba4-c31e21b5eba6.png"},
        "1664c39f-2ff8-4224-8ee0-2e862a29fac3":{"name":"t1BuildingSide0_low","sourceUrl":null,"frameSize":{"x":86,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"ofAt0.x7fhMvz5SZD5gbFywjY3Jxmun_","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":94},"rootRelativePath":"assets/1664c39f-2ff8-4224-8ee0-2e862a29fac3.png"},
        "8d0099ef-4d20-479c-a26d-75e06da2060f":{"name":"t1Roof0","sourceUrl":null,"frameSize":{"x":86,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sl7TW73kpW6YFzIWvXJSJEaWfnRKJ.cc","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":47},"rootRelativePath":"assets/8d0099ef-4d20-479c-a26d-75e06da2060f.png"},
        "683a14e1-9bdf-4654-b461-0951a03a9d15":{"name":"t1Roof3","sourceUrl":null,"frameSize":{"x":86,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"cWzHH_xNbcchM3QULFIU2yhNHD4ERZ0Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":47},"rootRelativePath":"assets/683a14e1-9bdf-4654-b461-0951a03a9d15.png"},
        "73462c75-ec72-4cda-83ec-cda04ef86ccb":{"name":"t1Roof0_green","sourceUrl":null,"frameSize":{"x":86,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"dUEdZHT9U42k04d_kVAhIn2c3YCdvay_","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":55},"rootRelativePath":"assets/73462c75-ec72-4cda-83ec-cda04ef86ccb.png"},
        "d8a1470f-283d-4974-98e4-07099cc1ea90":{"name":"t1RuinRoof","sourceUrl":null,"frameSize":{"x":86,"y":39},"frameCount":1,"looping":true,"frameDelay":12,"version":"juzkm00RK_91dChVdLXlZ6uObyb_ZXv5","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":39},"rootRelativePath":"assets/d8a1470f-283d-4974-98e4-07099cc1ea90.png"},
        "47c42bc3-7d1f-407c-b454-6f9abcf2d889":{"name":"t1BuildingRuin","sourceUrl":null,"frameSize":{"x":86,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"pxOQAiUNBjIRGbzZ6AxUEkCoI6TozGOv","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":60},"rootRelativePath":"assets/47c42bc3-7d1f-407c-b454-6f9abcf2d889.png"},
        "66529aff-5640-4236-941f-0161a985c3e9":{"name":"t1FenceRuin","sourceUrl":null,"frameSize":{"x":82,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"G0eB00MBKp4Q49qYnCcy2akjfMl3go7g","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":140},"rootRelativePath":"assets/66529aff-5640-4236-941f-0161a985c3e9.png"},
        "80657d93-bfec-452f-91cb-26eaed44f0d9":{"name":"t1FenceGrass","sourceUrl":null,"frameSize":{"x":82,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"G8WcryUtfVBEap4sQQFcPGYS3MTatHVI","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":140},"rootRelativePath":"assets/80657d93-bfec-452f-91cb-26eaed44f0d9.png"},
        "52383196-15a5-4beb-ad3e-e546d8ed2226":{"name":"t1LandRuin","sourceUrl":null,"frameSize":{"x":82,"y":140},"frameCount":1,"looping":true,"frameDelay":12,"version":"N354JzCfS2ANAuQLXTD1utHDasUUY0Yp","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":140},"rootRelativePath":"assets/52383196-15a5-4beb-ad3e-e546d8ed2226.png"},
        "0f233292-188a-4e31-91fb-c132b38c5c96":{"name":"t2FenceRuin","sourceUrl":null,"frameSize":{"x":162,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"5BWAjvXaWEcTFB1XeRB8HHZzRfT08rXz","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":94},"rootRelativePath":"assets/0f233292-188a-4e31-91fb-c132b38c5c96.png"},
        "e65ff04a-2f19-4135-9377-3004b7259c8d":{"name":"t2FenceGrass","sourceUrl":null,"frameSize":{"x":162,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"puXKhjPjqO05V3X6Zasp4_TUIIOa3Aff","loadedFromSource":true,"saved":true,"sourceSize":{"x":162,"y":94},"rootRelativePath":"assets/e65ff04a-2f19-4135-9377-3004b7259c8d.png"},
        "e8264b0c-7c62-478f-ac85-8c9df554356c":{"name":"t3FenceRuin","sourceUrl":null,"frameSize":{"x":230,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"BRH0LUo2cK1AY9KjLxEvegu0Lf2lz9_.","loadedFromSource":true,"saved":true,"sourceSize":{"x":230,"y":160},"rootRelativePath":"assets/e8264b0c-7c62-478f-ac85-8c9df554356c.png"},
        "1e58f11b-85d8-499d-86dd-9ccc2627c3a7":{"name":"t3FenceGrass","sourceUrl":null,"frameSize":{"x":230,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"oxL_9eCZHd5l53oEsmAErDs5e7OasNRc","loadedFromSource":true,"saved":true,"sourceSize":{"x":230,"y":160},"rootRelativePath":"assets/1e58f11b-85d8-499d-86dd-9ccc2627c3a7.png"},
        "997f6bc3-6f6d-4e0a-a5dd-daeed6d16b79":{"name":"t1BuildingSide1","sourceUrl":null,"frameSize":{"x":86,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"8sY4eGiX0GYPC8iAv7IFvM29orWCemzo","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":74},"rootRelativePath":"assets/997f6bc3-6f6d-4e0a-a5dd-daeed6d16b79.png"},
        "e11bea23-b6a2-46da-a3d4-f89aa4fc7d6b":{"name":"t1Roof1","sourceUrl":null,"frameSize":{"x":86,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"w7i2lMg9L9Pi44FZdMW7Y8Lrh2GZGRGZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":47},"rootRelativePath":"assets/e11bea23-b6a2-46da-a3d4-f89aa4fc7d6b.png"},
        "1f65de02-7a3e-4980-9ac8-98b9520db308":{"name":"t1Roof1_green","sourceUrl":null,"frameSize":{"x":86,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"IZBiZJKoGlv1IQFLscQkNXYlzlNGjJRt","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":55},"rootRelativePath":"assets/1f65de02-7a3e-4980-9ac8-98b9520db308.png"},
        "5e194aa7-fbf3-4f93-9652-fc4d948dc5b1":{"name":"t1BuildingSide2","sourceUrl":null,"frameSize":{"x":86,"y":74},"frameCount":1,"looping":true,"frameDelay":12,"version":"4MWOBAaxw3q.r_Ah1QULrlhHw15jY5eW","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":74},"rootRelativePath":"assets/5e194aa7-fbf3-4f93-9652-fc4d948dc5b1.png"},
        "efa5359c-4238-4b76-b27e-9f5f9e47d374":{"name":"t1BuildingSide2_low","sourceUrl":null,"frameSize":{"x":86,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"c0TINrlnHZT4TWpT0TR2Ppt1Lmb1F_hP","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":94},"rootRelativePath":"assets/efa5359c-4238-4b76-b27e-9f5f9e47d374.png"},
        "64b0479b-b1f7-4444-82aa-bed185ffd518":{"name":"t1Roof2","sourceUrl":null,"frameSize":{"x":86,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"Si0QQe4SOIJOJAfRWjpXaEASucxqkzU0","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":47},"rootRelativePath":"assets/64b0479b-b1f7-4444-82aa-bed185ffd518.png"},
        "4d483f2c-e8d7-4d4c-97a1-f8f1700766ac":{"name":"t1Roof2_green1","sourceUrl":null,"frameSize":{"x":86,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"JSX8RvAeOztIt_qTdvUA9bNcXIKJyOaF","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":47},"rootRelativePath":"assets/4d483f2c-e8d7-4d4c-97a1-f8f1700766ac.png"},
        "a82b33f7-6e4c-4061-ac6c-f7cc066d9069":{"name":"t1Roof2_green","sourceUrl":null,"frameSize":{"x":86,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"iw6UeunIwo5HRM2KCQ1X1Z7Ihe1bj1Un","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":55},"rootRelativePath":"assets/a82b33f7-6e4c-4061-ac6c-f7cc066d9069.png"},
        "56115a4d-cc98-4362-9b30-429d64b2e49c":{"name":"t2BuildingRuin","sourceUrl":null,"frameSize":{"x":178,"y":220},"frameCount":1,"looping":true,"frameDelay":12,"version":"CN4ZMuMisLrVx8TLXkw0My7WOv6hkSJJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":220},"rootRelativePath":"assets/56115a4d-cc98-4362-9b30-429d64b2e49c.png"},
        "10b40db6-b8ee-46dc-87a0-625daca0335e":{"name":"t2BuildingSide","sourceUrl":null,"frameSize":{"x":178,"y":220},"frameCount":6,"looping":true,"frameDelay":12,"version":"1fBeFb0YaUNSsAnntEZ6gHcuWEzfrfDr","loadedFromSource":true,"saved":true,"sourceSize":{"x":534,"y":440},"rootRelativePath":"assets/10b40db6-b8ee-46dc-87a0-625daca0335e.png"},
        "67b3c9ff-c5d5-459d-b670-b3314dc66e1f":{"name":"t2BuildingSide4","sourceUrl":null,"frameSize":{"x":178,"y":220},"frameCount":1,"looping":true,"frameDelay":12,"version":"8xYfIMtWMmSu03sZgUXzUB6EbHaDHa5F","loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":220},"rootRelativePath":"assets/67b3c9ff-c5d5-459d-b670-b3314dc66e1f.png"},
        "c3be3c5e-a260-4770-8d1c-f3247e8505e8":{"name":"t2BuildingSide2","sourceUrl":null,"frameSize":{"x":168,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"B01rhd4U1KFx5S0U_AulPuWXInhMS3xb","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":146},"rootRelativePath":"assets/c3be3c5e-a260-4770-8d1c-f3247e8505e8.png"},
        "3f422943-4072-440c-8383-1ddad6546b92":{"name":"t2BuildingSide3","sourceUrl":null,"frameSize":{"x":168,"y":146},"frameCount":1,"looping":true,"frameDelay":12,"version":"ixrhGsGYDGV3QDc5FkYoyGJPr7RQPUaI","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":146},"rootRelativePath":"assets/3f422943-4072-440c-8383-1ddad6546b92.png"},
        "f188ca71-fb2d-42df-8bb7-4e7c8dae1429":{"name":"t3BuildingSide","sourceUrl":null,"frameSize":{"x":242,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"VxrhUYN2Lo1IAjhigsSab3V2CvjrtnJ4","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":170},"rootRelativePath":"assets/f188ca71-fb2d-42df-8bb7-4e7c8dae1429.png"},
        "57c1b732-5ae1-449a-bd03-748f0c47101b":{"name":"t3BuildingRuin","sourceUrl":null,"frameSize":{"x":242,"y":170},"frameCount":1,"looping":true,"frameDelay":12,"version":"Jj.O39cyiw5JmfqgBflU1Bf2KuoQROFm","loadedFromSource":true,"saved":true,"sourceSize":{"x":242,"y":170},"rootRelativePath":"assets/57c1b732-5ae1-449a-bd03-748f0c47101b.png"},
        "c8d281e1-d153-4f27-b3b8-9a2ed8646dc3":{"name":"t3BuildingSide1","sourceUrl":null,"frameSize":{"x":86,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"zJ40zaiNL9uOixSlBZLI5csfxOaJVQRh","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":72},"rootRelativePath":"assets/c8d281e1-d153-4f27-b3b8-9a2ed8646dc3.png"},
        "76d5c142-b0a8-4221-a7cb-570b1d6b1b33":{"name":"t3BuildingRuin1","sourceUrl":null,"frameSize":{"x":86,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"bw7Wp5pUwbxjj19ti.BafNnEzf3plNq1","loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":72},"rootRelativePath":"assets/76d5c142-b0a8-4221-a7cb-570b1d6b1b33.png"},
        "a210b375-016a-4cae-8ae9-476cbdc6e244":{"name":"carRight","sourceUrl":null,"frameSize":{"x":244,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"6UBw6gnO1dzOu_reJ3ieh7LXZUSWcWRN","loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":120},"rootRelativePath":"assets/a210b375-016a-4cae-8ae9-476cbdc6e244.png"},
        "6b9cddf6-02cf-4015-986d-62dc16405721":{"name":"carLeft","sourceUrl":null,"frameSize":{"x":244,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"v.bd5zbYM0Sm6kjCcEzltETPdOGz4FQd","loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":120},"rootRelativePath":"assets/6b9cddf6-02cf-4015-986d-62dc16405721.png"},
        "1a3050dd-1e66-4558-97aa-3398e475721e":{"name":"groupIcon","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"SmeDINXTL4jQUtEIbWIy9oagvyKBmRuV","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/1a3050dd-1e66-4558-97aa-3398e475721e.png"},
        "f59a14fe-5327-46ab-a95b-ff37efd6583f":{"name":"construction","sourceUrl":null,"frameSize":{"x":180,"y":158},"frameCount":1,"looping":true,"frameDelay":12,"version":"l3Eog6tfLftq3e3fN7uId_vU7oumbtlE","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":158},"rootRelativePath":"assets/f59a14fe-5327-46ab-a95b-ff37efd6583f.png"},
        "bf60c54a-0e6c-49bb-9808-0f565532e574":{"name":"check","sourceUrl":null,"frameSize":{"x":497,"y":497},"frameCount":1,"looping":true,"frameDelay":12,"version":"azorN9bpRZCizWP.F96.6B.Fj9qU9XdI","loadedFromSource":true,"saved":true,"sourceSize":{"x":497,"y":497},"rootRelativePath":"assets/bf60c54a-0e6c-49bb-9808-0f565532e574.png"},
        "5648a8bb-2a30-4d51-99a7-99ec5694e595":{"name":"t3Alleyway1","sourceUrl":null,"frameSize":{"x":50,"y":132},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZDXNukV20i.LdeaFRE8_8ET3elrqVn2l","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":132},"rootRelativePath":"assets/5648a8bb-2a30-4d51-99a7-99ec5694e595.png"},
        "336cbdfe-16f6-4da2-99cd-29df7a15ade2":{"name":"t3Alleyway2","sourceUrl":null,"frameSize":{"x":50,"y":132},"frameCount":1,"looping":true,"frameDelay":12,"version":"XbLTxUkxUmN539RCWLJITY76iuZARq72","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":132},"rootRelativePath":"assets/336cbdfe-16f6-4da2-99cd-29df7a15ade2.png"},
        "d1ee625e-cada-4389-835f-6b473661cd8a":{"name":"t3Park1","sourceUrl":null,"frameSize":{"x":496,"y":156},"frameCount":1,"looping":true,"frameDelay":12,"version":"G1vq4H7dTeqTwIXZ8ccqjFK5DVtsGPOv","loadedFromSource":true,"saved":true,"sourceSize":{"x":496,"y":156},"rootRelativePath":"assets/d1ee625e-cada-4389-835f-6b473661cd8a.png"},
        "84f5d2cd-3141-481a-8198-d6fe5bb5d124":{"name":"t3Park2","sourceUrl":null,"frameSize":{"x":496,"y":116},"frameCount":1,"looping":true,"frameDelay":12,"version":"fgGdNce_2teWFlFlE8sNy0bUBkf7TWE.","loadedFromSource":true,"saved":true,"sourceSize":{"x":496,"y":116},"rootRelativePath":"assets/84f5d2cd-3141-481a-8198-d6fe5bb5d124.png"},
        "00730915-9ffd-4517-bc1c-3d2840d40606":{"name":"river","sourceUrl":null,"frameSize":{"x":780,"y":64},"frameCount":3,"looping":true,"frameDelay":15,"version":"KpKm7wHtYsC1THZ19WM4AbR5y11EYT7Z","loadedFromSource":true,"saved":true,"sourceSize":{"x":780,"y":192},"rootRelativePath":"assets/00730915-9ffd-4517-bc1c-3d2840d40606.png"},
        "359d12aa-b0cd-4269-8558-ac2bd552794a":{"name":"park1","sourceUrl":null,"frameSize":{"x":100,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"LXQ54xqEwC8bCScCiJpu1jIs8VLqQSQm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":106},"rootRelativePath":"assets/359d12aa-b0cd-4269-8558-ac2bd552794a.png"},
        "db636b16-4156-430b-b6ac-fec18425dfc0":{"name":"park2","sourceUrl":null,"frameSize":{"x":100,"y":86},"frameCount":1,"looping":true,"frameDelay":12,"version":"1AvXLF47nptVFNg64E1NuGF8_ltMbaDd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":86},"rootRelativePath":"assets/db636b16-4156-430b-b6ac-fec18425dfc0.png"},
        "8398c1f7-5cf1-4977-b062-28d1b6148424":{"name":"t1Park1","sourceUrl":null,"frameSize":{"x":82,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"uvQyz6HZuD.UN2UxoPBEcXkWOL4djrBa","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":80},"rootRelativePath":"assets/8398c1f7-5cf1-4977-b062-28d1b6148424.png"},
        "fe93544e-ff85-45f4-b780-12c2e292f58d":{"name":"t1Park2","sourceUrl":null,"frameSize":{"x":82,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"7U8CNvHbz4qxt8JkCJ6kABFyJPiEXaLv","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":80},"rootRelativePath":"assets/fe93544e-ff85-45f4-b780-12c2e292f58d.png"},
        "6879e917-d6e1-4071-8977-cdfcbf20ddf5":{"name":"cargoShip","sourceUrl":null,"frameSize":{"x":701,"y":208},"frameCount":1,"looping":true,"frameDelay":12,"version":"aTt4QA3iRLgu3QpHsnVvYxjtQn9Y8iNZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":701,"y":208},"rootRelativePath":"assets/6879e917-d6e1-4071-8977-cdfcbf20ddf5.png"},
        "8a8a4c43-a2db-4403-8c6e-b0c920f9517c":{"name":"cloudsTopLeft","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"2Lgcx_7kLCNJKo6_u1ZfPk2YopRZnqO2","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/8a8a4c43-a2db-4403-8c6e-b0c920f9517c.png"},
        "9e8e9360-7d40-4ec1-ad49-64158811912d":{"name":"cloudsTopRight","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"byfVbmHkImAkaYMB42UC3UBSxMAdickU","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/9e8e9360-7d40-4ec1-ad49-64158811912d.png"},
        "21e97009-4c8f-49be-aace-581088d18055":{"name":"cloudsBotLeft","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"QkG7LsZh54zIKUaGIqvy.e39FsBqsceX","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/21e97009-4c8f-49be-aace-581088d18055.png"},
        "65b0bac4-a883-4a4f-b52b-c388936df244":{"name":"cloudsBotRight","sourceUrl":null,"frameSize":{"x":804,"y":612},"frameCount":1,"looping":true,"frameDelay":12,"version":"81HriOn9.XMhNJBSZDF0Y_ZJ1q2VyuF4","loadedFromSource":true,"saved":true,"sourceSize":{"x":804,"y":612},"rootRelativePath":"assets/65b0bac4-a883-4a4f-b52b-c388936df244.png"},
        "b9cc961e-0cec-4b0c-8091-211d1c0a9e1a":{"name":"bag","sourceUrl":null,"frameSize":{"x":340,"y":463},"frameCount":1,"looping":true,"frameDelay":12,"version":"1hPve8HMWcoOJyUCwCi4ZsCT0J7Nl2zX","loadedFromSource":true,"saved":true,"sourceSize":{"x":340,"y":463},"rootRelativePath":"assets/b9cc961e-0cec-4b0c-8091-211d1c0a9e1a.png"},
        "109eb801-755a-4d7a-b70f-34e791d9ac2e":{"name":"can","sourceUrl":null,"frameSize":{"x":260,"y":476},"frameCount":1,"looping":true,"frameDelay":12,"version":"8MbkNjH9dkNqAS4cKjBA.Q4BiW1sknRH","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":476},"rootRelativePath":"assets/109eb801-755a-4d7a-b70f-34e791d9ac2e.png"},
        "e0ac0681-e52a-40c9-88f5-75252ce16fe9":{"name":"soupCan","sourceUrl":null,"frameSize":{"x":249,"y":373},"frameCount":1,"looping":true,"frameDelay":12,"version":"fFBeEZIy1Jmq_b3TtRYzNKcY2rpR2Ynu","loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":373},"rootRelativePath":"assets/e0ac0681-e52a-40c9-88f5-75252ce16fe9.png"},
        "b7de1c3a-db8b-4b8f-9c05-5fd80dfd9480":{"name":"mouse","sourceUrl":null,"frameSize":{"x":305,"y":474},"frameCount":1,"looping":true,"frameDelay":12,"version":"g9bH_flR9QxBcDLix29wmvZx1tkru7Mf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":305,"y":474},"rootRelativePath":"assets/b7de1c3a-db8b-4b8f-9c05-5fd80dfd9480.png"},
        "f17020da-f458-4088-a44e-03fe153d4311":{"name":"bDown","sourceUrl":null,"frameSize":{"x":78,"y":122},"frameCount":1,"looping":true,"frameDelay":12,"version":"s4OAVRxDmxLC.mUgkYxfLyhHt1lZZhhu","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":122},"rootRelativePath":"assets/f17020da-f458-4088-a44e-03fe153d4311.png"},
        "d5dab271-b804-40b3-a851-79881b1aa54d":{"name":"bHead","sourceUrl":null,"frameSize":{"x":72,"y":57},"frameCount":1,"looping":true,"frameDelay":12,"version":"I3td9ObW.wb8cvBfi5yGD3jo4fruLcQ7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":57},"rootRelativePath":"assets/d5dab271-b804-40b3-a851-79881b1aa54d.png"},
        "193d69c2-22ea-4f9a-93db-8c718228875d":{"name":"bWalkDown","sourceUrl":null,"frameSize":{"x":78,"y":124},"frameCount":8,"looping":true,"frameDelay":2,"version":"K_WAFN45gO7.2VvKkcgpu1pK904cLqS8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":248},"rootRelativePath":"assets/193d69c2-22ea-4f9a-93db-8c718228875d.png"},
        "c5d1b989-ff75-4133-89da-b0ab3d9007cf":{"name":"bRunDown","sourceUrl":null,"frameSize":{"x":78,"y":124},"frameCount":8,"looping":true,"frameDelay":1,"version":"OJ5LCSu3pF2y0L8ICxyfjNDc3T56wFb3","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":248},"rootRelativePath":"assets/c5d1b989-ff75-4133-89da-b0ab3d9007cf.png"},
        "6c0bf47c-bb0a-4fd1-b3a9-fad9e9d57a15":{"name":"bLeft","sourceUrl":null,"frameSize":{"x":54,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"bAkxY.r2kCs.nWADxQqKNHHj0jhFsv4q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":54,"y":125},"rootRelativePath":"assets/6c0bf47c-bb0a-4fd1-b3a9-fad9e9d57a15.png"},
        "9cff1d98-4d35-4232-9b4b-39a1292eb39e":{"name":"bWalkLeft","sourceUrl":null,"frameSize":{"x":73,"y":125},"frameCount":8,"looping":true,"frameDelay":2,"version":"PGb12tUJNQILZylDTZMYyNlkZIKByC1h","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":250},"rootRelativePath":"assets/9cff1d98-4d35-4232-9b4b-39a1292eb39e.png"},
        "12917300-258d-4648-a054-e87231123379":{"name":"bRunLeft","sourceUrl":null,"frameSize":{"x":73,"y":125},"frameCount":8,"looping":true,"frameDelay":1,"version":"QeFoA6_w8fA6uitkY24ev7dWb4bF_K9b","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":250},"rootRelativePath":"assets/12917300-258d-4648-a054-e87231123379.png"},
        "f21ac2ec-c479-45bc-8cd0-25eb1b1c97ea":{"name":"bRight","sourceUrl":null,"frameSize":{"x":55,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"MeXjwA.i6XInvg0GxZrwNvvJXO8w6EoN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":55,"y":125},"rootRelativePath":"assets/f21ac2ec-c479-45bc-8cd0-25eb1b1c97ea.png"},
        "0ff18517-083a-417b-abba-46c65388d782":{"name":"bWalkRight","sourceUrl":null,"frameSize":{"x":75,"y":125},"frameCount":8,"looping":true,"frameDelay":2,"version":"TwDp7qi1d1JSGliJ1CJsZgD85n9XBAKg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":250},"rootRelativePath":"assets/0ff18517-083a-417b-abba-46c65388d782.png"},
        "7f76c45a-6a0c-4685-b5dc-cee5db4ce7d7":{"name":"bRunRight","sourceUrl":null,"frameSize":{"x":75,"y":125},"frameCount":8,"looping":true,"frameDelay":1,"version":"QNrV8tan7iAa6Na9MHMZHy5Rdp21qTdi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":250},"rootRelativePath":"assets/7f76c45a-6a0c-4685-b5dc-cee5db4ce7d7.png"},
        "89548dd5-bf71-4bf9-a95b-cd3395ec9874":{"name":"bUp","sourceUrl":null,"frameSize":{"x":78,"y":119},"frameCount":1,"looping":true,"frameDelay":12,"version":"yywV9KY3N25eK8ETPFowVZcFRNV48ToB","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":119},"rootRelativePath":"assets/89548dd5-bf71-4bf9-a95b-cd3395ec9874.png"},
        "8ca66367-0eeb-4ba9-9720-db123ce6ff28":{"name":"bSide","sourceUrl":null,"frameSize":{"x":119,"y":78},"frameCount":1,"looping":true,"frameDelay":12,"version":"_51Vp0zXomtAzk4sKEIyrHXsGSdPwqdV","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":78},"rootRelativePath":"assets/8ca66367-0eeb-4ba9-9720-db123ce6ff28.png"},
        "1d82a5a7-f6bb-49d3-aed9-3fffb31abd7e":{"name":"bWalkUp","sourceUrl":null,"frameSize":{"x":78,"y":122},"frameCount":8,"looping":true,"frameDelay":2,"version":"hqdW43zeoNUCfTtyPh11xn1zL4FwgbBj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":244},"rootRelativePath":"assets/1d82a5a7-f6bb-49d3-aed9-3fffb31abd7e.png"},
        "6e1efe65-e499-4d41-84d9-53e298fd7c7b":{"name":"bRunUp","sourceUrl":null,"frameSize":{"x":78,"y":122},"frameCount":8,"looping":true,"frameDelay":1,"version":"ROmYLUHknO3ooV887jqeMot1ZShQyyGj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":244},"rootRelativePath":"assets/6e1efe65-e499-4d41-84d9-53e298fd7c7b.png"},
        "0c177125-21ff-4d5e-b085-3de73ac2f777":{"name":"aDown","sourceUrl":null,"frameSize":{"x":80,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"wHAdE9JQ8iBN8bFR7eaSiK0v1MxJOl2d","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":134},"rootRelativePath":"assets/0c177125-21ff-4d5e-b085-3de73ac2f777.png"},
        "5e23a23b-dc25-4c78-8ca0-d1616bc2bcc4":{"name":"aHead","sourceUrl":null,"frameSize":{"x":74,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"G.YvRqR8666KroivGhToLD6FqboWY036","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":68},"rootRelativePath":"assets/5e23a23b-dc25-4c78-8ca0-d1616bc2bcc4.png"},
        "7eca17d5-2608-4068-b7fb-c63557e47226":{"name":"aWalkDown","sourceUrl":null,"frameSize":{"x":80,"y":137},"frameCount":8,"looping":true,"frameDelay":2,"version":"togNK.X9xdPhgiMyX2_zwawLmUv4F02r","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":274},"rootRelativePath":"assets/7eca17d5-2608-4068-b7fb-c63557e47226.png"},
        "86685a82-257b-416d-ab77-dea031eb2fdd":{"name":"aRunDown","sourceUrl":null,"frameSize":{"x":80,"y":137},"frameCount":8,"looping":true,"frameDelay":1,"version":"bgd5flAdkdO3T0G_x_NQgnL4grNo5KV_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":274},"rootRelativePath":"assets/86685a82-257b-416d-ab77-dea031eb2fdd.png"},
        "e8f10e37-9ff7-4763-83f7-7dd7ec17229a":{"name":"aLeft","sourceUrl":null,"frameSize":{"x":65,"y":136},"frameCount":1,"looping":true,"frameDelay":12,"version":"yA1r2YU3_9O9ybvkpImjOR15grJHve_r","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":136},"rootRelativePath":"assets/e8f10e37-9ff7-4763-83f7-7dd7ec17229a.png"},
        "a3f48b5d-a674-4262-95e8-7eaf62ef28a0":{"name":"aWalkLeft","sourceUrl":null,"frameSize":{"x":77,"y":136},"frameCount":8,"looping":true,"frameDelay":2,"version":"aPWDe2JSk6VUzPzUBCtnhkZYkvJgnOC5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":272},"rootRelativePath":"assets/a3f48b5d-a674-4262-95e8-7eaf62ef28a0.png"},
        "ff9ee03c-c5fb-4f23-8cbf-91780f6ca380":{"name":"aRunLeft","sourceUrl":null,"frameSize":{"x":77,"y":136},"frameCount":8,"looping":true,"frameDelay":1,"version":"6G57fzNHUgIupDoQ5RPQFwTca7tS8GFx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":272},"rootRelativePath":"assets/ff9ee03c-c5fb-4f23-8cbf-91780f6ca380.png"},
        "1244c3b0-5e38-4fc5-8b75-c139aff2143f":{"name":"aUp","sourceUrl":null,"frameSize":{"x":80,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"lyXC5DRPfSBCpQG_P9Y9Pf3lQBSybaGf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":131},"rootRelativePath":"assets/1244c3b0-5e38-4fc5-8b75-c139aff2143f.png"},
        "4282bb6e-0835-480c-a9c4-caf656308101":{"name":"aSide","sourceUrl":null,"frameSize":{"x":131,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"lJn0zXS5xSMeMdHDhFb36OHyIZwdhzlC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":131,"y":80},"rootRelativePath":"assets/4282bb6e-0835-480c-a9c4-caf656308101.png"},
        "136c4820-4051-46f8-912a-9dde22be23d4":{"name":"aWalkUp","sourceUrl":null,"frameSize":{"x":80,"y":137},"frameCount":8,"looping":true,"frameDelay":2,"version":"xeyop42skHg2EjDC_3T7U0Kgl5MjwFqo","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":274},"rootRelativePath":"assets/136c4820-4051-46f8-912a-9dde22be23d4.png"},
        "e5dc5059-bb4e-4102-a997-8f93634c854b":{"name":"aRunUp","sourceUrl":null,"frameSize":{"x":80,"y":137},"frameCount":8,"looping":true,"frameDelay":1,"version":"F2SgUvLAx0SUqM0nJMO9wrfHRXd8wK2C","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":274},"rootRelativePath":"assets/e5dc5059-bb4e-4102-a997-8f93634c854b.png"},
        "9ebad13f-dd5a-4e7b-b2e9-e9ac1cef013c":{"name":"aRight","sourceUrl":null,"frameSize":{"x":66,"y":137},"frameCount":1,"looping":true,"frameDelay":12,"version":"Wh.rsEkRI.lWRzyc_96OUJxhVGzym7yC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":137},"rootRelativePath":"assets/9ebad13f-dd5a-4e7b-b2e9-e9ac1cef013c.png"},
        "ddc57d50-e0ac-4949-a0e2-6ba0c6bb88b6":{"name":"aWalkRight","sourceUrl":null,"frameSize":{"x":77,"y":137},"frameCount":8,"looping":true,"frameDelay":2,"version":"OElg10MzJaJIXS9O2t3We.am8UAWkRQH","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":274},"rootRelativePath":"assets/ddc57d50-e0ac-4949-a0e2-6ba0c6bb88b6.png"},
        "3533a13f-7883-4466-b7df-55d64ac86f59":{"name":"aRunRight","sourceUrl":null,"frameSize":{"x":77,"y":137},"frameCount":8,"looping":true,"frameDelay":1,"version":"oKS_eI94L95FM8faMT5EpEyfSOp8ueTS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":274},"rootRelativePath":"assets/3533a13f-7883-4466-b7df-55d64ac86f59.png"},
        "f4298323-ef3a-4607-8533-3aad14f1a510":{"name":"CESJ","sourceUrl":null,"frameSize":{"x":795,"y":424},"frameCount":1,"looping":true,"frameDelay":12,"version":"pMUQJpT93kn5YA060Ei4zOCOje9ppOvJ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":795,"y":424},"rootRelativePath":"assets/f4298323-ef3a-4607-8533-3aad14f1a510.png"},
        "ad966eee-8291-476c-821e-9a8aacfcfc78":{"name":"recycle","sourceUrl":null,"frameSize":{"x":99,"y":95},"frameCount":1,"looping":true,"frameDelay":12,"version":"UkBEAKgTIzsJdqFsJTbzSZmJYAVm77YL","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":95},"rootRelativePath":"assets/ad966eee-8291-476c-821e-9a8aacfcfc78.png"},
        "ac1086b7-aa38-4927-95d4-693b190b9019":{"name":"busRight","sourceUrl":null,"frameSize":{"x":518,"y":174},"frameCount":1,"looping":true,"frameDelay":12,"version":"efLnIRkYuT.vzbpDBrwjq7filOEubuXy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":518,"y":174},"rootRelativePath":"assets/ac1086b7-aa38-4927-95d4-693b190b9019.png"},
        "fceb4109-6ff2-48c6-9a32-ebe769581efa":{"name":"busLeft","sourceUrl":null,"frameSize":{"x":518,"y":174},"frameCount":1,"looping":true,"frameDelay":12,"version":"369.oYOoKxLJGDORyFC21t7mZFC8nKJm","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":518,"y":174},"rootRelativePath":"assets/fceb4109-6ff2-48c6-9a32-ebe769581efa.png"},
        "fae993c7-ff1f-4189-b7b8-6850022be1ee":{"name":"lowerPark","sourceUrl":null,"frameSize":{"x":504,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ioCrYofiZEEMfafQqlWaxmMJuo0SsO53","loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":100},"rootRelativePath":"assets/fae993c7-ff1f-4189-b7b8-6850022be1ee.png"},
        "1c3719ee-8ed3-46a0-a681-90ebe972701d":{"name":"hammer","sourceUrl":null,"frameSize":{"x":1011,"y":982},"frameCount":1,"looping":true,"frameDelay":12,"version":"E6LvM18CBMk732UPjg7qw9El0GcTgWYQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1011,"y":982},"rootRelativePath":"assets/1c3719ee-8ed3-46a0-a681-90ebe972701d.png"},
        "a1b191c4-e3ed-496c-ba3a-55ba20b67aca":{"name":"sapling","sourceUrl":null,"frameSize":{"x":73,"y":111},"frameCount":1,"looping":true,"frameDelay":12,"version":"0DqsfNiDFIM.HPQOre8nKP.gll0vvRSC","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":111},"rootRelativePath":"assets/a1b191c4-e3ed-496c-ba3a-55ba20b67aca.png"},
        "58a26cc5-08d2-40d1-b58d-93f9b9c3a941":{"name":"X mark","sourceUrl":null,"frameSize":{"x":482,"y":497},"frameCount":1,"looping":true,"frameDelay":12,"version":"INamTqhgK3btzesP52EllOVVowlpdsEf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":482,"y":497},"rootRelativePath":"assets/58a26cc5-08d2-40d1-b58d-93f9b9c3a941.png"},
        "fd0aba7f-c294-4316-ad27-e83d219203fd":{"name":"fire","sourceUrl":null,"frameSize":{"x":1000,"y":1250},"frameCount":2,"looping":true,"frameDelay":5,"version":"iY8Uq6ZJiEss93zl4Lg19WmaQ0xCA3EN","loadedFromSource":true,"saved":true,"sourceSize":{"x":2000,"y":1250},"rootRelativePath":"assets/fd0aba7f-c294-4316-ad27-e83d219203fd.png"},
        "ecfd1fd2-7dd2-4cda-8b52-3b390b186e5c":{"name":"no_0","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"M4OLgCvRc8OdGFv2rdwTJyYtLMUMcm5d","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/ecfd1fd2-7dd2-4cda-8b52-3b390b186e5c.png"},
        "36bbb6ae-c47b-4e11-9040-aac922b7abef":{"name":"yes_0","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"1aPI8MpqyxwKXhqUuBhRGo2vZhkCJdRf","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/36bbb6ae-c47b-4e11-9040-aac922b7abef.png"},
        "89b45ffe-e827-4a84-aa06-161ae192b2cb":{"name":"no_2","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"lQTICjVuAOGDySv04Yk9hqLdcu6ReyzD","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/89b45ffe-e827-4a84-aa06-161ae192b2cb.png"},
        "a99286f2-38da-411d-a143-20e4323c607f":{"name":"yes_2","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"xyR94YBNiXdI6t3L7w_9Nj2pKji7bwuc","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/a99286f2-38da-411d-a143-20e4323c607f.png"},
        "d6e84699-1b8c-45e8-8d9f-b244023f25f9":{"name":"no_1","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"O7xkgLS8VJ6MfESsYdlC0NVXvRKPQFtf","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/d6e84699-1b8c-45e8-8d9f-b244023f25f9.png"},
        "7a04884e-b771-44ac-a6eb-7ba74eb8cbee":{"name":"yes_1","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"lKlWyBqGr7McN84UKSyYh2nJWceC7aDh","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/7a04884e-b771-44ac-a6eb-7ba74eb8cbee.png"},
        "e0f0c193-74e3-4aca-abb3-b2c504ee5c77":{"name":"no_3","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZhpSkujIX.8w5T.7bMaltvtooZ9PdekB","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/e0f0c193-74e3-4aca-abb3-b2c504ee5c77.png"},
        "74939083-d23d-47f4-9139-92216cbee23f":{"name":"yes_3","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"WqUXLwDLnbzOHSs4QHuiZwsFsvN8.Ifj","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/74939083-d23d-47f4-9139-92216cbee23f.png"},
        "f53e7ef6-6729-4433-ad38-69d270321ab6":{"name":"bg_rain","sourceUrl":null,"frameSize":{"x":1560,"y":1360},"frameCount":4,"looping":true,"frameDelay":3,"version":"eFIHjGuntsLuay7sIaPxhJgGPBVJ2HiA","loadedFromSource":true,"saved":true,"sourceSize":{"x":3120,"y":2720},"rootRelativePath":"assets/f53e7ef6-6729-4433-ad38-69d270321ab6.png"},
        "df85519e-6891-4517-983f-0464c0860b4f":{"name":"bird","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":8,"looping":true,"frameDelay":3,"version":"6nxjBm7LY_vXvKAXsMqDnOYMJ1iRQ.cF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/df85519e-6891-4517-983f-0464c0860b4f.png"},
        "4e3e6f3b-1d68-424e-bce8-ead7578e5f37":{"name":"lightning","sourceUrl":null,"frameSize":{"x":307,"y":499},"frameCount":1,"looping":true,"frameDelay":12,"version":"qrxoH2n8RwNcoC6PAQGupkQ7UuKSYydF","loadedFromSource":true,"saved":true,"sourceSize":{"x":307,"y":499},"rootRelativePath":"assets/4e3e6f3b-1d68-424e-bce8-ead7578e5f37.png"},
        "5cbcf54f-eee8-438b-8af6-a366c0e509a4":{"name":"flood","sourceUrl":null,"frameSize":{"x":160,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uq190bVx4udnyFXnwDkyGv_WJoW3soun","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/5cbcf54f-eee8-438b-8af6-a366c0e509a4.png"},
        "15c2f6d9-aca6-4831-b85f-5af40e946a31":{"name":"leader0","sourceUrl":null,"frameSize":{"x":112,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"tGXEPsUwUiQ7RCxfIwLuQJ.Nw2lWGhuq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":96},"rootRelativePath":"assets/15c2f6d9-aca6-4831-b85f-5af40e946a31.png"},
        "7c8d2900-486f-4dca-a26d-3fb64597edd4":{"name":"leader1","sourceUrl":null,"frameSize":{"x":112,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"DzhK7Rdu5.giKCRZH3aVRvPbA7k_AD5T","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":104},"rootRelativePath":"assets/7c8d2900-486f-4dca-a26d-3fb64597edd4.png"},
        "c9f2498c-875a-46a1-9a27-d7ee066e7c16":{"name":"leader2","sourceUrl":null,"frameSize":{"x":112,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"ghLv5Wwi00TglxyxpcqFqoYJAydluYWQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":96},"rootRelativePath":"assets/c9f2498c-875a-46a1-9a27-d7ee066e7c16.png"},
        "359d9cf2-252e-4a61-8434-d3e06e6d1818":{"name":"leader3","sourceUrl":null,"frameSize":{"x":96,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"bxatoxzp_1WB9QjTFmlNa3FIFA_H9uC0","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":104},"rootRelativePath":"assets/359d9cf2-252e-4a61-8434-d3e06e6d1818.png"},
        "ac56b816-b38d-4c39-b284-9329956f012b":{"name":"leader4","sourceUrl":null,"frameSize":{"x":96,"y":104},"frameCount":1,"looping":true,"frameDelay":12,"version":"7s2pn7TjvHwHuHI0OIaotn4aZej9bzLG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":104},"rootRelativePath":"assets/ac56b816-b38d-4c39-b284-9329956f012b.png"},
        "5268d869-0b57-4d76-8db9-e2b9cb511aef":{"name":"leader5","sourceUrl":null,"frameSize":{"x":104,"y":108},"frameCount":1,"looping":true,"frameDelay":12,"version":"mRq.LJDAFcs_1GcuQIkw3Y4PCx7IqbIF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":108},"rootRelativePath":"assets/5268d869-0b57-4d76-8db9-e2b9cb511aef.png"},
        "d4cad440-3f45-4ccc-9099-6fae1dc9c57a":{"name":"Election Background","sourceUrl":null,"frameSize":{"x":749,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"77UrGVbtqOp7TDaHtsiqW4NSIZ5MaliO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":749,"y":394},"rootRelativePath":"assets/d4cad440-3f45-4ccc-9099-6fae1dc9c57a.png"},
        "1cee439d-394f-40c4-a79a-063504689c65":{"name":"no_4","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"jlSLtIVVrdbWNXhsEnqRa2cOoca5.GZK","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/1cee439d-394f-40c4-a79a-063504689c65.png"},
        "0464484a-ad0b-45b8-84fd-e6c073f97b98":{"name":"yes_4","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"1oQ.2.SBCZcVwjtj_nrnWGkzLo3bf2Hh","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/0464484a-ad0b-45b8-84fd-e6c073f97b98.png"},
        "04bd5d83-0a30-4913-939f-4a4b06a3afbb":{"name":"no_5","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"kxQORlm9ASkPmp3HB94ckH8L5eWzD48L","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/04bd5d83-0a30-4913-939f-4a4b06a3afbb.png"},
        "8411690f-6ba2-4775-84e7-88113f5b9306":{"name":"yes_5","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"z1g1War_MJK.g9PYllEMEo5V7nDD6g9g","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/8411690f-6ba2-4775-84e7-88113f5b9306.png"},
        "ca6d4adf-3994-4094-83dd-55e13ae5f22c":{"name":"no_6","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"x2dwY7AiMEK1ccwWtYCu9QQIRzWaUa.E","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/ca6d4adf-3994-4094-83dd-55e13ae5f22c.png"},
        "d1b63800-73a1-43f5-8410-40f667358252":{"name":"yes_6","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"G97qPQ9RwvCxzXPQJta4RmFqQ.pUlx_K","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/d1b63800-73a1-43f5-8410-40f667358252.png"},
        "9a4ca4e1-7118-46ea-a250-808dc121cfe8":{"name":"no_7","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"Mq3XtfhXdS2dyglhK16ZYv1s6ggNMMAX","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/9a4ca4e1-7118-46ea-a250-808dc121cfe8.png"},
        "12fe7dd2-c49e-4334-b78f-342e63043244":{"name":"yes_7","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ume7EH54aVuvvFrlw0fQqAx9O6viRlsk","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/12fe7dd2-c49e-4334-b78f-342e63043244.png"},
        "fae5037f-d1cc-4e67-8647-3697bbbcc92d":{"name":"no_8","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"ebRvguHHFJtc6tlJiK9pltMMxHj26Q5R","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/fae5037f-d1cc-4e67-8647-3697bbbcc92d.png"},
        "2935647c-fb5c-44f2-be4d-220a506385bb":{"name":"yes_8","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":".pDplkaFAV3W1a2QVCZO2v1gjdMGsKqb","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/2935647c-fb5c-44f2-be4d-220a506385bb.png"},
        "faa249fa-d455-4ee8-9941-d9eec75e6ba2":{"name":"no_9","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"SuSNH761xHjp9W_S4gmH8uUL3Oc5uFGu","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/faa249fa-d455-4ee8-9941-d9eec75e6ba2.png"},
        "960c2dda-6687-466f-9d6e-2a19deb36716":{"name":"yes_9","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"JKkH7XfgyKdcSwhw5HZtzk.bb.zhDxM7","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/960c2dda-6687-466f-9d6e-2a19deb36716.png"},
        "035b3a17-9bed-4a6f-a4a2-b3fdfd5bf355":{"name":"medal2","sourceUrl":null,"frameSize":{"x":86,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"qGSCdhKLX455r8JVE.M_8rf8TKgB1ch7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":102},"rootRelativePath":"assets/035b3a17-9bed-4a6f-a4a2-b3fdfd5bf355.png"},
        "ce8fd41d-65be-496d-a97f-c0f98392f6c4":{"name":"medal1","sourceUrl":null,"frameSize":{"x":86,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"ewQIGUiEptHkuvm0vR3B1rizI5NWrccl","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":102},"rootRelativePath":"assets/ce8fd41d-65be-496d-a97f-c0f98392f6c4.png"},
        "ece69489-57b0-4272-b533-7ab6fc40fb1b":{"name":"medal0","sourceUrl":null,"frameSize":{"x":86,"y":102},"frameCount":1,"looping":true,"frameDelay":12,"version":"I6neFG2Yp1d.iwvu7Arr.xPFyL5yEzJ8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":86,"y":102},"rootRelativePath":"assets/ece69489-57b0-4272-b533-7ab6fc40fb1b.png"},
        "cf41b27f-de4b-4c2e-8e31-88df950a6a56":{"name":"music","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"T4QheWpgGXMxVqui858tzNok58hKK7Pj","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/cf41b27f-de4b-4c2e-8e31-88df950a6a56.png"},
        "76ca2a5d-4647-496c-82ea-651af5e3c31e":{"name":"music_red","sourceUrl":null,"frameSize":{"x":100,"y":110},"frameCount":1,"looping":true,"frameDelay":12,"version":"L03txRGLcUQ2yH6fsZ2C5f0IIlqolpDP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":110},"rootRelativePath":"assets/76ca2a5d-4647-496c-82ea-651af5e3c31e.png"},
        "06ae0f1a-e152-4af7-903f-716c6acf0e31":{"name":"noMusic","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"YdDxJdMltGyNE03Tl.Iun9v22W5GfTjG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/06ae0f1a-e152-4af7-903f-716c6acf0e31.png"},
        "19b4f098-ffdc-4173-80ab-1c3afbe8e750":{"name":"noMusic_copy_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"smPN776h5r1bxdqtVr3C3ddIl0KLAB5Z","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/19b4f098-ffdc-4173-80ab-1c3afbe8e750.png"},
        "16e42528-5b9c-43b4-b705-bc2433e370a6":{"name":"noMusic_red","sourceUrl":null,"frameSize":{"x":100,"y":110},"frameCount":1,"looping":true,"frameDelay":12,"version":"JdOdkSOumJMs7KJxAGRQbj0wh0qo_7Jz","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":110},"rootRelativePath":"assets/16e42528-5b9c-43b4-b705-bc2433e370a6.png"},
        "4b058134-5129-49ab-8b9c-ebf9678afd4d":{"name":"shocked","sourceUrl":null,"frameSize":{"x":40,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"XkkOW6J0chFhWJEvyeze.4mf2qvmbjAA","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":56},"rootRelativePath":"assets/4b058134-5129-49ab-8b9c-ebf9678afd4d.png"},
        "4490f9c7-baa3-4b20-86fc-4437dfa61558":{"name":"hint","sourceUrl":null,"frameSize":{"x":106,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":"hZU1aNQ3G.VCaEL1TEf1K8JHX5QiJg0c","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":106},"rootRelativePath":"assets/4490f9c7-baa3-4b20-86fc-4437dfa61558.png"},
        "32880dce-82b0-41cc-8154-6dbbcdca15d6":{"name":"noHint","sourceUrl":null,"frameSize":{"x":106,"y":106},"frameCount":1,"looping":true,"frameDelay":12,"version":".XPxH0aL_OT.LpbNvRpDPmCBlNCGMRr.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":106},"rootRelativePath":"assets/32880dce-82b0-41cc-8154-6dbbcdca15d6.png"},
        "c4b57627-d0aa-4b3e-9e25-ee2bd86bab15":{"name":"hint_red","sourceUrl":null,"frameSize":{"x":106,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"GSMPOd7HM..PJXA19g0oixAGFJa_2o2Q","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":120},"rootRelativePath":"assets/c4b57627-d0aa-4b3e-9e25-ee2bd86bab15.png"},
        "18879e75-30c4-4595-a693-6d9bff8a5bce":{"name":"noHint_red","sourceUrl":null,"frameSize":{"x":106,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"smSVqj5kLaebl_QYWLNbC79f_cDxzS3b","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":120},"rootRelativePath":"assets/18879e75-30c4-4595-a693-6d9bff8a5bce.png"},
        "155760e3-dd81-4e81-a491-ccb6bf1e1667":{"name":"mapSC","sourceUrl":null,"frameSize":{"x":718,"y":541},"frameCount":1,"looping":true,"frameDelay":12,"version":"sF3YSzkbtkojbmXTs8LOI8xN8w14QTdh","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":718,"y":541},"rootRelativePath":"assets/155760e3-dd81-4e81-a491-ccb6bf1e1667.png"},
        "def110de-c1a9-4d72-ae0b-9fadd52df8ff":{"name":"mapSC1","sourceUrl":null,"frameSize":{"x":718,"y":541},"frameCount":1,"looping":true,"frameDelay":12,"version":"Fi8CVyXvf0PZoc74bnUhT.frHTUB8Vjk","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":718,"y":541},"rootRelativePath":"assets/def110de-c1a9-4d72-ae0b-9fadd52df8ff.png"},
        "22fc5cc4-d558-4719-8eea-f7d1e909495c":{"name":"mapSC2","sourceUrl":null,"frameSize":{"x":718,"y":541},"frameCount":1,"looping":true,"frameDelay":12,"version":"nX0AVlqFoFz0DbhbeNV2LXH6DYru.EwI","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":718,"y":541},"rootRelativePath":"assets/22fc5cc4-d558-4719-8eea-f7d1e909495c.png"},
        "7d18a641-8a03-42e1-85c3-0260c2e70ae0":{"name":"cone.png_1","sourceUrl":null,"frameSize":{"x":75,"y":89},"frameCount":1,"looping":true,"frameDelay":12,"version":"OX.20NM4nALYAvcv_c1BeXOouPLrGaTw","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":89},"rootRelativePath":"assets/7d18a641-8a03-42e1-85c3-0260c2e70ae0.png"},
        "dba337a9-5ab1-4dff-9c20-59d224efa696":{"name":"confetti","sourceUrl":null,"frameSize":{"x":500,"y":480},"frameCount":27,"looping":false,"frameDelay":2,"version":"Hmj1SCQuzY.zZ4CRl.a1J.KHYMxaMG5.","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":2500,"y":2880},"rootRelativePath":"assets/dba337a9-5ab1-4dff-9c20-59d224efa696.png"},
        "dc59f0e3-7d39-408c-86fd-67bab79d0425":{"name":"gradScreen","sourceUrl":null,"frameSize":{"x":718,"y":421},"frameCount":1,"looping":true,"frameDelay":12,"version":"mCdfsfR3OPRiRrfsm_sAZ40aYyNhwzEb","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":718,"y":421},"rootRelativePath":"assets/dc59f0e3-7d39-408c-86fd-67bab79d0425.png"},
        "954c2a2f-98f3-4a9c-a8e5-28a5d79d0eec":{"sourceSize":{"x":315,"y":315},"frameSize":{"x":315,"y":315},"frameCount":1,"frameDelay":12,"name":"offer","sourceUrl":null,"size":7790,"version":"fAjr2vvAP4vTLC3idAeVmgLe44YeWPb9","categories":[""],"looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/954c2a2f-98f3-4a9c-a8e5-28a5d79d0eec.png"},
        "ea2d3ee0-4af8-41af-bca7-e8f5445f37bc":{"name":"offerSign","sourceUrl":null,"frameSize":{"x":188,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"1dc3sTPM65jYHZOEzXb8kyhnqvbCQ4Zo","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":131},"rootRelativePath":"assets/ea2d3ee0-4af8-41af-bca7-e8f5445f37bc.png"},
        "thumbUp":{"name":"thumbUp","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"1dc3sTPM65jYHZOEzXb8kyhnqvbCQ4Zo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/thumbUp.png"},
        "thumbDown":{"name":"thumbDown","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"1dc3sTPM65jYHZOEzXb8kyhnqvbCQ4Zo","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/thumbDown.png"},
        "steamboat":{"name":"steamboat_willie","sourceUrl":null,"frameSize":{"x":402,"y":336},"frameCount":14,"looping":true,"frameDelay":2,"version":"1dc3sTPM65jYHZOEzXb8kyhnqvbCQ4Zo","loadedFromSource":true,"saved":true,"sourceSize":{"x":1206,"y":1680},"rootRelativePath":"assets/steamboat.png"}
      }};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  
  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

    
 World.frameRate = 30;
    showMobileControls(false, false, false, false);

    //Global Variables{
    var loopCount = 0;
    var totProfits = 0;
    var cLoans = 0;
    var totLoans = 0;
    var cIncome = 0;
    var totIncome = 0;
    var cExpenses = 0;
    var cMult = 1;
    var litterDebuff = 0;
    var offerDebuff = 0;
    var totExpenses = 0;
    var loanRate = 0.05;
    var loanPay = 0;
    var totLoanPay = 0;
    var incomeArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var tipsSheetOpen = false;
    var canAfford = true;

    //update counts
    var cMoneyUpdateCount = -60;
    var loansUpdateCount = -60;
    var cUpdateCount = -3600;
    var loanCapCount = -60;
    var incomeUpdates = [-60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60];
    var roadCooldowns = [-360, -360, -360, -360, -360, -360, -360, -360, -360, -360, -360, -360, -360];
    var charSelectCount = [-360,-360,-360,-360];

    var textStart = [];
    var menuOpen = false;
    var offerOpen = false;
    var level = -1;
    var startPressed = false;
    var tutorialSkipped = false;
    var winLoop = -60;
    var gameplayTime = [0,0,0];
    var gameLoop = -60;
    var songLoop = 0;
    var lastSong=0;
    var randomJobLocationsLeft = [-1, -1];
    var lJobCooldown = -3600;
    var advocacyLoop = [-3600, -3600];
    var advocacyPlayer = [0, 0];
    var jobProgressLeft = 0;
    var dividends = 0;
    var progressMessageLeft = ' ';
    var lTouchingJob = false;
    var educationOpen = false;
    var randomQuestionLeft = randomNumber(0, 19);
    var quizHoverLeft = 1;
    var quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
    var quizStartLoop = -3600;
    var educationProgressLeft = 3;
    var loopAtAnswerLeft = -200;
    var totalQuestionsLeft = 0;
    var rRollLeft;
    var charNum = 1;
    var voteData = ["none", "0", 50];
    var voteLoop = -3600;
    var votingLoop = -3600;
    var votesComplete = [false, false];
    var loopCopy = 0;
    var carsAvailable = [true, true, true, true, true, true];
    var carCooldown = -3600;
    var pedCooldown = -3600;
    var pedAnimations = ["b", "a", "left", "b", "right", "a", "left", "right"];
    var parksCompleted = [false, false];
    var zoomedIn = false;
    var oldPosition = [-1, -1];
    var cleanUpActive = false;
    var trashCollisionNum = -1;
    var trashPoints = 0;
    var trashPickedUp = 0;
    var cleanUpLoop = -3600;
    var ePoints = 0;
    var cPoints = 0;
    var recentPoints = 0;
    var sprintCooldownColors = [rgb(40, 50, 160), "maroon", rgb(225, 90, 230), "purple"];
    var sprint = 170;
    var sprintLock = false;
    var sprinting = false;

    //audioData
    var typingActive = false;
    
    //menu and creds variables
    var muteMusic=false;
    var hintsOn=true;
    var menuPage = 0;
    var xSlide = 0;
    var credsCounter = 0;

    //leaderboard data
    //fetch initial data from the database
    var topTimes = [["",0,0,0],["",0,0,0],["",0,0,0]];
    var highScores = [["",0],["",0],["",0]];
    const timesDoc = doc(db, 'leaderboard', 'fastestTimes');
    const scoresDoc = doc(db, 'leaderboard', 'highScores');

    //set up document listeners for live updates
    onSnapshot(scoresDoc, () => {
      updateScores();
    });
    onSnapshot(timesDoc, () => {
      updateTimes();
    });

    //Annual meeting variables
    var meetingLoop = 7000;
    var meetingControl = 0;
    var reserveRate = 0.05;
    var profitRemaining = 1;
    var meetingYear = 0;
    var totalPayouts = 0;
    var profitHistory = [];
    var maxProfit = -1;
    var leaderNum = randomNumber(0, 5);
    var oppositionNum = randomNumber(0, 5);
    while (oppositionNum == leaderNum) {
      oppositionNum = randomNumber(0, 5);
    }
    var leaderNames = ["Mitchell McGarvie", "Arturo Derouin", "Raymond Stride", "Sara Alvarez", "Connie Lu", "Audrie Teter"];
    var incumbentSelected = true;
    var oppositionPolicies = [randomNumber(3, 10) / 100, randomNumber(3, 10) / 100];
    var incumbentPopularity = 50;
    var proposalDone = false;
    var proposalSelected = 0;

    var scorecardColors = [rgb(110, 185, 110), rgb(255, 229, 153), rgb(255, 229, 153), rgb(110, 185, 110), rgb(255, 229, 153)];

  //intro variables
    var introControl = 0;
    var esopChosen = false;
    var infrastructureChosen = false;
    var introSelection=0;
    var walkthroughLoops = [-1,-1,-1];
    
    //fire data
    var fireLoops = [-3600, -3600, -3600, -3600, -3600];
    var fireLocations = [-1, -1, -1, -1, -1];
    var fireActive = false;
    var fireCollisionNum = -1;

    //rain data
    var isRaining = false;
    var rainCooldown = -3600;
    var lightningCooldown = -360;
    var isFlooded = [false, false, false, false, false, false, false, false, false, false, false, false, false];
    var floodLoops = [-3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600];
    var floodFactor = 200;
    var streetFloodCooldown = -3600;
    var floodActive = false;
    var floodCollisionPlot = -1;
    var shockLoop = -300;
    
    //park data
    var parkLoop = [-3600, -3600];
    var parkHintLoop = [-3600,-3600];
    var parkCollisionNum = -1;

    //clean-up data
    var openCULocations = [
      true, true, true, true, true, true, true,
      true, true, true, true, true, true, true,
      true, true, true, true, true, true, true,
      true, true, true, true, true, true, true,
      true, true, true, true
    ];
    var trashPositions = [
      -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1
    ];

    //Objective data
    var objListCLDC = [
      ["Construct the University Hall", -300, false,false],
      ["Construct the Recycling Center", -300, false,false],
      ["Rebuild All City Roads", -300, false,false],
      ["Develop Both Parks", -300, false,false],
      ["Construct a Commercial Building", -300, false,false],
      ["Develop the Entire City", -300, false,false],
      ["Pay Off More Than $100k in Loans", -300, false,false],
      ["Reach $1,000,000 in Annual Profit", -300, false,false]
    ];
    var curObjListCLDC = ["", "", ""];

    var objListP = [
      ["Do Community Service (20 Points)", -300, false,false],
      ["Advocate For a Land Plot Vote", -300, false,false],
      ["Help Renovate a Park", -300, false,false],
      ["Earn 50 Community Service Points", -300, false,false],
      ["Complete the Ownership Quiz", -300, false,false],
      ["Earn 100 Community Service Points", -300, false,false],
      ["Receive $5k in Dividends", -300, false,false],
      ["Put Out a Fire", -300, false,false],
      ["Stop a Flood", -300, false,false]
    ];
    var curObjListP = ["", ""];

    var objCount = 0;

    //Data of hints
    var hintList = [false,false,false,
                   false,false,false,
                   false,false,false,false,false];
    var univHallLoop = -3600;
    
    //Data of offers
    var offersAvailable = [true, true, true];
    var offerIncome = [0, 0, 0];
    var offerIsConstruction = [false, false, false];
    var offerLocations = [-1, -1, -1];
    var offerBuildCooldowns = [-3600, -3600, -3600];
    var offerRatings = ["", "", ""];
    var ratingColors = ["white", "white", "white"];


    var payMethod = 0;
    var paymentText = ["Pay with CLDC Profits", "Add to CLDC Loans"];
    var pauseMainFunctions = false;
    var gamePaused = false;
  

    //Land data
    var t1PlotIsCompleted = [false, false, false, false, false, false, false, false, false];
    var t2PlotIsCompleted = [false, false, false];
    var t3PlotIsCompleted = [false, false];
    var t1BuildingPlaced = [true, false, false, true,
      false, false, true, false, false];
    var t2BuildingPlaced = [false, false, true];
    var t3BuildingPlaced = [false, false];
    var t1LandIsOpen = [true, true, true, true, true, true, true, true, true];
    var t2LandIsOpen = [true, true, true];
    var t3LandIsOpen = [true, true];
    var initOpent1 = [true, false, false, true, false, false, true, false, false]
    var initOpent2 = [false, false, true];
    var initOpent3 = [false, false];

    //data of street availability
    var streetsOpen = [
      true, true, true, true, true,//left street
      true, true, true, true, true,//right street
      false, true, true, false, true, true,//mid horiz street
    ];
    var streetsFinished = [
      false, false, false, false, false,//left street
      false, false, false, false, false,//right street
      false, false, false, false, false, false,//mid horiz street
    ];

    //Data of shares owned
    var p1CompleteSharesOwned = [0, 0, 0];
    var plotsCompletedLeft = 0;


    //Data of job icon locations
    var jobLocations = [
      -1, -1,
      -1, -1,
      -1, -1,
    ];

    //Text of quiz questions and answer choices
    var vocabQuizText = [
      ["What does the term 'ownership' mean?", 'A. To use something temporarily', 'B. The act or state of possessing something', 'C. To be good at something'],
      ["What does the term 'money' mean?", 'A. A way of measuring the value of goods or services', 'B. Something that can only be earned through labor', 'C. Something inherently valuable'],
      ["What does the term 'economics' mean?", 'A. The movement of stock prices', 'B. The measure of trade between people and entities', "C. The study of wealth's production, consumption, and distribution"],
      ["What does the term 'production' mean?", 'A. The act of using something', 'B. The act of creating goods or services', 'C. The act of learning'],
      ["What does the term 'consumption' mean?", 'A. The act of using something', 'B. The act of creating goods or services', 'C. The act of learning'],
      ["What does the term 'distribution' mean?", 'A. Saving something for future use', 'B. Investing in something to grow your money', 'C. The act of sharing something amongst a group of people'],
      ["What does the term 'investing' mean?", 'A. The expending of money with the expectation of making a profit', 'B. Buying something that will not generate income', 'C. Producing goods or services to earn money'],
      ["What does the term 'collateral' mean?", 'A. An easy way of earning income', 'B. Something pledged as security for the repayment of a loan', 'C. Government subsidies'],
      ["What does the term 'insurance' mean?", 'A. Paying into a system with no expectation for a return', 'B. The act of saving your money for an emergency', 'C. Guaranteed compensation for a loss in return for a premium'],
      ["What does the term 'debt' mean?", 'A. A promise that was not followed through', 'B. The income left over after all expenses have been paid', 'C. Something that is owed or due'],
      ["What does the term 'credit' mean?", 'A. A potential loan', 'B. A way of measuring risk', "C. Something used in place of cash"],
      ["What does the term 'capital assets' mean?", 'A. Rented properties', 'B. Valuable, owned properties', 'C. A consumable item'],
      ["What does the term 'interest' mean?", 'A. Money paid over and above a loan principle', 'B. The total amount someone owes', 'C. The attractiveness of a location for businesses'],
      ["What does the term 'dividends' mean?", 'A. Government subsidies', 'B. Debt that must be paid back', "C. A portion of a company's profits paid regularly to shareholders"],
      ["What does the term 'inflation' mean?", 'A. An imbalance in favor of production over consumption', 'B. An imbalance in favor of consumption over production', 'C. The only indicator of the health of an economy'],
      ["What does the verb 'to finance' mean?", 'A. To provide funding for a project', 'B. To take ownership of a project', 'C. To cut funding from a project'],
      ["What is the Federal Reserve?", 'A. The Central Bank of the United States', 'B. The global entity responsible for regulating trade', 'C. The collection of local state banks'],
      ["What does the term 'paradigm' mean?", 'A. A problem or challenge', 'B. A framework or way of thinking about something', 'C. A question'],
      ["What does justice mean?", 'A. Ensuring everyone has equal success in life', 'B. Fairness -- giving everyone an equal opportunity to be successful', 'C. Giving some people advantages over others'],
      ["What is the meaning of a democracy?", 'A. A government controlled by a select few people', 'B. A government that allows for voting', 'C. A government of the people, by the people, and for the people']
    ];
    var quizText = [
      ['The Heart of America Citizen’s Land Development Coop\n(HOA-CLDC) is …', 'A. A legal trust', 'B. A for-profit cooperative or corporation', 'C. A not-for-profit group', "D. A government agency"],
      ['The purpose of the CLDC is to…', 'A. Develop land and infrastructure in order to attract businesses and\nresidents', 'B. Empower all Missouri residents, starting with the poorest\nSt.Louis neighborhoods',
        'C. Turn every Missouri resident into an owner of income-producing\ncapital (land)', 'D. All of the above'],
      ['Who is eligible for membership in the CLDC?', 'A. Residents who are 18 years old and older', 'B. Low-income families', 'C. All permanent residents, with no exceptions', 'D. People who can afford to invest in the CLDC'],
      ['How will government-owned land acquired by the CLDC be\npaid for?', 'A. It will be transferred free of charge to the CLDC', 'B. The local residents will pool their money to purchase it from the\ngovernment', 'C. Outside investors will acquire it', 'D. The CLDC will pay for it'],
      ['Who will plan the redevelopment of CLDC-owned local land\nand infrastructure?', 'A. The local government', 'B. The Federal government', 'C. A local not-for-profit group', 'D. A private-sector development group working with the CLDC’s\nshareholders'],
      ["Where will the money come from to redevelop the CLDC's\nland & infrastructure?", 'A. From regional Federal Reserve Banks, with insured loans made by\nlocal banks', 'B. Individual residents of this neighborhood',
        'C. Local, state and federal government', 'D. Outside investors'],
      ['Where will the money come from to pay off the bank loans to\nthe CLDC trust?', 'A. Local property taxes paid to the local government', 'B. A special income tax on people earning over $1,000,000',
        "C. Pre-tax profits from leasing fees for using the CLDC's land &\ninfrastructure", 'D. Grants and donations from local not-for-profit groups and charities'],
      ['What happens if the CLDC cannot repay its loans?', 'A. Personal property of the resident-shareholders will be seized by the\nlenders',
        'B. The loan amount defaulted on will be covered by capital credit\ninsurance', 'C. The local government will subsidize the amount that is defaulted on', 'D. The lenders will forgive the CLDC loans that can’t be repaid'],
      ['Once the loans to the CLDC trust are paid off, the future\nprofit stream will be …', 'A. “Retained” in the CLDC to pay for future land development projects',
        'B. Eaten up by inflation', 'C. Paid out to HOA-CLDC resident-shareholders as taxable ownership\nincome', 'D. Paid to the local government by the CLDC as property taxes'],
      ['Which of these statements is true?', 'A. Every resident-shareholder of the HOA-CLDC will have an equal vote', 'B. Every resident-shareholder of the HOA-CLDC will share the dividends\nequally',
        'C. Each resident-shareholder will have an equal, lifetime share in the\nHOA-CLDC', 'D. All of the above'],
      ['As the HOA CLDC project starts to grow the local economy…', 'A. Economic conditions will become less friendly to political democracy', 'B. People will become more dependent on government for their incomes', 'C. The wealth and power gap will get smaller',
        'D. Rising land values will force the original residents to move from their\nhomes'],
    ];
    var t3QuizText = [
      ["Why is a government of the people, by the people, and for\nthe people impossible under conventional capitalism?", "(see the CESJ.org graphic comparison of capitalism, socialism, and JTW)", "A. Because diffused wealth/power undermines a democracy", "B. Because concentrated wealth/power undermines a democracy", "C. Because concentrated wealth dilutes power", "D. Because we the people prefer an oligarchy"],
      ["What is the 'fundamental issue' being addressed by the\nCenter for Economic and Social Justice?", "(CESJ.ORG) (see the basic presentation of Just Third Way)", "A. Inflation", "B. Deflation", "C. Power", "D. Education"],
      ["How does the ownership of property (capital assets) affect\nindividual power?", "(see the basic presentation of the Just Third Way)", "A. Property ownership reduces power", "B. Power follows property", "C. Property ownership and power are unrelated", "D. Property ownership mocks power"],
      ["Who or what owns the land (property) in the HOA CLDC?", "(see CESJ on Citizens Land Development Coop)", "A. Local, individual residents", "B. City fathers", "C. Private investors", "D. The HOA CLDC trust"],
      ["Where does all the money required to purchase and\nredevelop the land in the HOA CLDC project come from?", "(see CESJ on Citizens Land Development Coop)", "A. From local banks with support from the St. Louis Federal Reserve", "B. From private investors", "C. From the state government", "D. From the federal government"],
      ["What kinds of properties will the HOA CLDC expect to\npurchase?", "(see CESJ on Citizens Land Development Coop)", "A. Farmland", "B. Blighted land and properties north of the Delmar Divide in St. Louis", "C. Wetlands", "D. Forested Land"],
      ["Who owns one voting share of the HOA CLDC and receives\ndividends when profits are generated?", "(see CESJ on Citizens Land Development Coop)", "A. Local politicians", "B. All permanent residents who live in neighborhoods north of the\nDelmar Divide", "C. All males who live in the neighborhoods north of the Delmar Divide", "D. All females who live in the neighborhoods north of the Delmar Divide "],
      ["What role does capital credit insurance play in\nguaranteeing loan repayments?", "(see CESJ on Citizens Land Development Coop)", "A. It plays no role in guaranteeing loan repayments", "B. It guarantees nothing", "C. It benefits only the insurance companies", "D. It guarantees loan repayment"],
      ["How much INTEREST will be charged on the HOA CLDC loan?", "(see CESJ on Citizens Land Development Coop)", "A. 10%", "B. 0%", "C. 5%", "D. 2.5%"],
      ["How much tax is collected PRIOR TO loan repayment?", "(see CESJ on Citizens Land Development Coop)", "A. 10%", "B. None", "C. 5%", "D. 2.5%"],
      ["Who pays taxes in the HOA CLDC project?", "(see CESJ on Citizens Land Development Coop)", "A. The HOA CLDC trust", "B. The state government", "C. The local government", "D. Individual HOA members pay taxes on dividends received"],
      ["How does Ownership Power impact freedom, dignity, and\nself-respect of the individual?", "(see the CESJ Website)", "A. Ownership power reduces residents to wage slavery", "B. Ownership power counteracts stress and mental illness", "C. Ownership power rightfully belongs only to the rich", "D. Ownership power should never be shared with average people"]
    ];

    //Data of quiz questions that have been answered already to prevent repeats
    var questionsAnsweredLeft = [
      false, false, false, false,
      false, false, false, false,
      false, false, false
    ];
    var vocabQuestionsAnsweredLeft = [
      false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false,
      false, false, false, false
    ];
    var t3QuestionsAnsweredLeft = [
      false, false, false, false,
      false, false, false, false,
      false, false, false, false
    ];

    //Data of correct quiz answers
    var vocabQuizAnswers = [2, 1, 3, 2, 1, 3, 1, 2, 3, 3, 1, 2, 1, 3, 2, 1, 1, 2, 2, 3];
    var quizAnswers = [2, 4, 3, 1, 4, 1, 3, 2, 3, 4, 3];
    var t3QuizAnswers = [2, 3, 2, 4, 1, 2, 2, 4, 2, 2, 4, 2];

    //menu color data
    var introColor = rgb(190, 190, 190);
    var introScale = 0;
    
    var menuColors = [
      rgb(244, 204, 204), rgb(180, 235, 190), rgb(180, 235, 190), rgb(244, 204, 204),
      rgb(180, 235, 190), rgb(244, 204, 204), rgb(180, 235, 190),
      rgb(244, 204, 204), rgb(244, 204, 204), rgb(244, 204, 204), rgb(244, 204, 204)
    ];
    var objColors = [
      'white', 'white', "white",
      "white", "white", "white"
    ];
    var controlsColors = [
      rgb(207, 226, 243), rgb(207, 226, 243), rgb(207, 226, 243), rgb(207, 226, 243), rgb(207, 226, 243),
      rgb(207, 226, 243), rgb(207, 226, 243), rgb(207, 226, 243), rgb(207, 226, 243)
    ];
    //}

    //sprites{
    //hidden walls for collisions{
    var hiddenWalls = createGroup();
    //left t1 plots
    for (var x = 0; x < 4; x++)(hiddenWalls.add(createSprite(45, 106 + (x * 82), 60, 20)));
    //right t1 plots
    for (var x = 0; x < 4; x++)(hiddenWalls.add(createSprite(755, 106 + (x * 82), 60, 20)));
    //plot 8 (top left tier 1)
    hiddenWalls.add(createSprite(196, 101, 64, 20));
    //top row tier 2 buildings
    for (var x = 1; x < 3; x++)(hiddenWalls.add(createSprite(239.4 + (x * 160.4), 96, 148, 34)));
    //t3 buildings
    hiddenWalls.add(createSprite(269, 270, 212, 35));
    hiddenWalls.add(createSprite(531, 270, 212, 35));
    //river and highway walls
    hiddenWalls.add(createSprite(40, 12, 80, 32));//left river
    hiddenWalls.add(createSprite(400, 12, 484, 32));//middle river
    hiddenWalls.add(createSprite(760, 12, 80, 32));//right river
    hiddenWalls.add(createSprite(400, 470, 800, 20));//highway

    //top of map
    hiddenWalls.add(createSprite(400, -20, 810, 4));

    hiddenWalls.setVisibleEach(false);

    var csHBox = createSprite(641,727,298,40);
    var oeHBox = createSprite(159,727,298,40);
    csHBox.visible=oeHBox.visible=false;
    //}

    //Land, assets, and buildings{
    //river
    var river = createSprite(400, 42);
    river.setAnimation("river");//river.scale=0.5; scale doubles to 1

    //Land plots
    var t1Land = createGroup();
    for (var x = 0; x < 4; x++)(t1Land.add(createSprite(45, 119 + (x * 82), 70, 80)));
    for (var x = 0; x < 4; x++)(t1Land.add(createSprite(755, 119 + (x * 82), 70, 80)));
    t1Land.add(createSprite(196, 119, 70, 80));
    t1Land.setColorEach(rgb(0, 0, 0, 0.1));
    var t2Land = createGroup();
    for (var x = 0; x < 3; x++)(t2Land.add(createSprite(239.4 + (x * 160.4), 119, 160, 80)));
    t2Land.setColorEach(rgb(0, 0, 0, 0.1));
    var t3Land = createGroup();
    t3Land.add(createSprite(269, 294, 216, 84));
    t3Land.add(createSprite(531, 294, 216, 84));
    t3Land.setColorEach(rgb(0, 0, 0, 0.1));
    t1Land[0].visible = t1Land[3].visible = t1Land[6].visible =
      t2Land[0].visible = t2Land[2].visible = false;

      var mainWalls = createGroup();
    mainWalls.add(createSprite(400, 0, 800, 20));
    
    //boat
    var ship = createSprite(0, -100);
    ship.setAnimation("cargoShip");
    ship.scale = 0.2;

    //Streets
    var streets = createGroup();
    //left vertical strip
    streets[0]=createSprite(120, 28); streets[0].setAnimation("bridgeVert2");
    streets.add(createSprite(120, 120)); streets[1].setAnimation("streetVert2");
    streets.add(createSprite(120, 212)); streets[2].setAnimation("intersectionLeft2");
    streets.add(createSprite(120, 304)); streets[3].setAnimation("streetVert2");
    streets.add(createSprite(120, 396)); streets[4].setAnimation("streetVert2");
    //right vertical strip
    streets[5]=createSprite(680, 28); streets[5].setAnimation("bridgeVert2");
    streets.add(createSprite(680, 120)); streets[6].setAnimation("streetVert2");
    streets.add(createSprite(680, 212)); streets[7].setAnimation("intersectionRight2");
    streets.add(createSprite(680, 304)); streets[8].setAnimation("streetVert2");
    streets.add(createSprite(680, 396)); streets[9].setAnimation("streetVert2");
    //center horiz. strip
    for (var x = 0; x < 6; x++) {
      streets.add(createSprite(200 + (x * 80), 212));
      streets[x + 10].setAnimation("streetHoriz2");
    }
    streets.setScaleEach(0.483);

    //decorational park for lower city
    var lowPark = createSprite(400, 650);//635
    lowPark.visible = false;
    lowPark.setAnimation("lowerPark");
    lowPark.scale = 0.95;

    //decorational streets with low priority
    var streetsDec = createGroup();
    streetsDec.add(createSprite(120, 560)); streetsDec[0].setAnimation("streetVert1");
    streetsDec.add(createSprite(680, 560)); streetsDec[1].setAnimation("streetVert1");
    streetsDec.add(createSprite(120, 652)); streetsDec[2].setAnimation("streetVert1");
    streetsDec.add(createSprite(680, 652)); streetsDec[3].setAnimation("streetVert1");
    streetsDec[2].visible = streetsDec[3].visible = false;


    //Land locations array
    var landLocations = [[t1Land[0].x, t1Land[0].y], [t1Land[1].x, t1Land[1].y], [t1Land[2].x, t1Land[2].y],
    [t1Land[3].x, t1Land[3].y], [t1Land[4].x, t1Land[4].y], [t1Land[5].x, t1Land[5].y],
    [t1Land[6].x, t1Land[6].y], [t1Land[7].x, t1Land[7].y], [t1Land[8].x, t1Land[8].y],
    [t2Land[1].x, t2Land[1].y], [t2Land[2].x, t2Land[2].y], [t3Land[0].x, t3Land[0].y],
    [t3Land[1].x, t3Land[1].y]];

    //Buildings
    var t1Buildings = createGroup();
    for (var x = 0; x < 4; x++)(t1Buildings.add(createSprite(45, 121 + (x * 82), 70, 80)));


    for (var x = 0; x < 4; x++)(t1Buildings.add(createSprite(755, 121 + (x * 82), 70, 80)));

    t1Buildings.add(createSprite(194, 123, 70, 80));
    var t2Buildings = createGroup();
    for (var x = 0; x < 3; x++)(t2Buildings.add(createSprite(239.4 + (x * 160.4), 120, 160, 80)));
    t2Buildings[0].visible = false;
    var t3Buildings = createGroup();
    t3Buildings.add(createSprite(269, 294, 216, 84));
    t3Buildings.add(createSprite(531, 294, 216, 84));

    //green spaces
    var green1 = createSprite(274, 119, 92, 87);
    var green2 = createSprite(526, 560);
    green1.setAnimation("park2");
    green1.scale = 0.92;
    green2.setAnimation("park1");
    green2.scale = 0.92;
    var green3 = createSprite(400, 310, 30, 64);
    var green4 = createSprite(400, 390);
    green4.setAnimation("t3Park2");
    green3.setAnimation("t3Alleyway2");
    green3.scale = green4.scale = 1;
    var green5 = createSprite(38, 426);
    var green6 = createSprite(762, 426);
    green5.setAnimation("t1Park2"); green6.setAnimation("t1Park2");

    //flood sprites
    var floods = createGroup();
    for (var floodNum = 0; floodNum < 13; floodNum++) {
      if (floodNum > 10) (floods.add(createSprite(landLocations[floodNum][0], landLocations[floodNum][1] + 15)));
      else (floods.add(createSprite(landLocations[floodNum][0], landLocations[floodNum][1] + 20)));
    }
    floods.setAnimationEach("flood"); floods.setScaleEach(0.63); floods.setVisibleEach(false);

    //fire sprites
    var fires = createGroup();
    for (var fireNum = 0; fireNum < 5; fireNum++) {
      fires.add(createSprite(-50, -50));
    }
    fires.setAnimationEach("fire");
    fires.setScaleEach(0.1);

    //Park sprites
    var northParkSprites = createGroup();
    //north park
    northParkSprites.add(createSprite(260, 150)); northParkSprites[0].setAnimation("hammer");
    northParkSprites.add(createSprite(240, 90)); northParkSprites[1].setAnimation("sapling");
    northParkSprites.add(createSprite(310, 75)); northParkSprites[2].setAnimation("sapling");

    //central park
    var centralParkSprites = createGroup();
    centralParkSprites.add(createSprite(300, 390)); centralParkSprites[0].setAnimation("hammer");
    centralParkSprites.add(createSprite(450, 340)); centralParkSprites[1].setAnimation("sapling");
    centralParkSprites.add(createSprite(580, 410)); centralParkSprites[2].setAnimation("sapling");
    centralParkSprites.add(createSprite(250, 350)); centralParkSprites[3].setAnimation("sapling");
    centralParkSprites.add(createSprite(385, 280)); centralParkSprites[4].setAnimation("sapling");

    northParkSprites[0].scale = centralParkSprites[0].scale = 0.03;
    northParkSprites[1].scale = northParkSprites[2].scale = centralParkSprites[1].scale = centralParkSprites[2].scale = centralParkSprites[3].scale = centralParkSprites[4].scale = 0.4;
    northParkSprites.setVisibleEach(false);
    centralParkSprites.setVisibleEach(false);

    //collision boxes for green1 and green4
    var green1HB = createSprite(green1.x + 1, green1.y, 40, 80);
    var green4HB = createSprite(green4.x, green4.y + 8, 490, 120);
    var green4HB2 = createSprite(green3.x, green3.y, 30, 110);
    green1HB.visible = green4HB.visible = green4HB2.visible = false;
    //}

    //Share sprites{
    var leftBackground = createSprite(610, 768, 360, 44);
    leftBackground.visible = false; leftBackground.shapeColor = 'black';

    //share indicators
    var shareHeader = createSprite(219, 727, 416, 40);
    var offerSign = createSprite(45,727);
    offerSign.visible=false; offerSign.setAnimation("offerSign");
    offerSign.scale = 0.30;
    var paymentBgr = createSprite(219,769,416,42);
    paymentBgr.shapeColor = rgb(255, 242, 204);
    shareHeader.visible = paymentBgr.visible = false;
    var g1Indicator = createSprite(611, 768, 345, 32);
    g1Indicator.visible = false;

    var thumbUp = createSprite(538,768);
    thumbUp.setAnimation("thumbUp");
    thumbUp.scale = 0.12;

    var thumbDown = createSprite(515,768);
    thumbDown.setAnimation("thumbDown");
    thumbDown.scale = 0.12;

    thumbDown.visible=thumbUp.visible=false;
    //}

    //background sprites{
    //trash sprites
    var trash = createGroup();
    for (var xu = 0; xu < 10; xu++) {
      trash.add(createSprite(-50, -50));
      if (xu == 1 || xu == 4 || xu == 7 || xu == 9) {
        trash[xu].setAnimation("bag");
      } else if (xu == 2 || xu == 5 || xu == 8) {
        trash[xu].setAnimation("can");
      } else {
        trash[xu].setAnimation("soupCan");
      }
    }
    trash.setScaleEach(0.06);
    trash[0].scale = trash[3].scale = trash[6].scale = 0.08;

    
    //pedestrian sprites
    var pedestrians = createGroup();
    for (var j = 0; j < 8; j++) {
      pedestrians.add(createSprite(-50, -50));
      pedestrians[j].setAnimation(pedAnimations[j] + "Down");
      switch (pedAnimations[j]) {
        case "left":
          pedestrians[j].scale = 0.075;
          break;
        case "right":
          pedestrians[j].scale = 0.0775;
          break;
        case "b":
          pedestrians[j].scale = 0.25;
          break;
        case "a":
          pedestrians[j].scale = 0.2375;
          break;
      }
    }
    
    
    mainWalls.add(createSprite(0, 400, 20, 800)); 
    mainWalls.add(createSprite(800, 400, 20, 800)); mainWalls.add(createSprite(400, 800, 800, 20));
    
    //}

    //job and offer sprites{    


    var jobSprites = createGroup();
    //advocating sprite
    jobSprites.add(createSprite(-50, -50));
    jobSprites.add(createSprite(-50, -50));
    jobSprites[0].setAnimation("yes_0"); jobSprites[1].setAnimation("yes_0");
    jobSprites[0].scale = jobSprites[1].scale = 0.4;

    //trade offers
    var offer1 = createSprite(-50, -50);
    offer1.setAnimation("offer"); offer1.scale = 0.3;
    var offer2 = createSprite(-50, -50);
    offer2.setAnimation("offer"); offer2.scale = 0.3;
    var offer3 = createSprite(-50, -50);
    offer3.setAnimation("offer"); offer3.scale = 0.3;
    //}

    //character sprites
    var charBoxLeft = createSprite(200, 380, 30, 20);
    var leftChar = createSprite(400, 200);
    leftChar.scale = 0.15; leftChar.setAnimation("leftDown");
    leftChar.visible = charBoxLeft.visible = false;
    var shockChar = createSprite(-50,-50);
    shockChar.scale = 1.2; shockChar.setAnimation("shocked");

    //building roofs {
    var t1Roofs = createGroup();
    for (var x = 0; x < 4; x++)(t1Roofs.add(createSprite(45, 96 + (x * 82), 68, 34)));
    for (var x = 0; x < 4; x++)(t1Roofs.add(createSprite(755, 96 + (x * 82), 68, 34)));
    t1Roofs[0].setAnimation("t1RuinRoof");
    t1Roofs[3].setAnimation("t1RuinRoof");
    t1Roofs[6].setAnimation("t1RuinRoof");
    t1Roofs.add(createSprite(194, 97, 68, 36)); //top left

    var t3Roofs = createGroup();
    //t3Roofs.add(createSprite(199,210,54,28)); t3Roofs.add(createSprite(461,210,54,28));
    t3Roofs.add(createSprite(306.8, 262, 139, 40)); t3Roofs.add(createSprite(568.8, 262, 139, 40));
    t3Roofs.add(createSprite(199, 226)); t3Roofs.add(createSprite(461, 226));
    t3Roofs[2].scale = t3Roofs[3].scale = 0.89;
    t3Roofs.setVisibleEach(false); t3Roofs.setColorEach(rgb(220, 220, 220));
    t3Roofs[2].setAnimation("t3BuildingSide1"); t3Roofs[3].setAnimation("t3BuildingSide1");
    //}

    //Decorational streets making the delmar divide
    for (var x = 0; x < 10; x++) {
      streetsDec.add(createSprite(40 + (x * 80), 476));
      streetsDec[x + 4].setAnimation("streetHWay");
    }
    streetsDec.setScaleEach(1.45);
    streetsDec[0].scale=streetsDec[1].scale=streetsDec[2].scale=streetsDec[3].scale=0.483;

    //car sprites
    var cars = createGroup();
    for (var zy = 0; zy < 6; zy++) {
      cars.add(createSprite(0, -50));
    }
    cars.setScaleEach(0.2);


    //decorational buildings and roofs

    //t1
    t1Buildings.add(createSprite(45, 560, 70, 80));//top left
    t1Buildings.add(createSprite(755, 560, 70, 80));//top right
    t1Buildings.add(createSprite(605, 560, 70, 80));//middle
    t1Buildings.add(createSprite(45, 642, 70, 80));//bot left
    t1Buildings.add(createSprite(755, 642, 70, 80));//bot right

    t1Buildings[9].setAnimation("t1BuildingSide1");
    t1Buildings[10].setAnimation("t1BuildingSide0");
    t1Buildings[11].setAnimation("t1BuildingSide2");
    t1Buildings[12].setAnimation("t1BuildingSide0_low");
    t1Buildings[13].setAnimation("t1BuildingSide2_low");

    t1Roofs.add(createSprite(45, 535, 68, 34));//top left
    t1Roofs.add(createSprite(755, 535, 68, 34));//top right
    t1Roofs.add(createSprite(605, 535, 68, 34));//middle
    t1Roofs.add(createSprite(45, 617, 68, 34));//bot left
    t1Roofs.add(createSprite(755, 617, 68, 34));//bot right

    t1Roofs[9].setAnimation("t1Roof1");
    t1Roofs[10].setAnimation("t1Roof0");
    t1Roofs[11].setAnimation("t1Roof2_green1");
    t1Roofs[12].setAnimation("t1Roof0");
    t1Roofs[13].setAnimation("t1Roof2_green1")
    t1Roofs.setScaleEach(0.82);

    t1Buildings[12].visible = t1Buildings[13].visible = t1Roofs[12].visible = t1Roofs[13].visible = false;

    //t2    
    for (var x = 0; x < 3; x++)(t2Buildings.add(createSprite(239.4 + (x * 160.4), 558, 160, 80)));
    t2Buildings[5].visible = false;
    mainWalls.add(createSprite(400, 605, 800, 14)); mainWalls.setColorEach(rgb(50, 50, 50));

    //birb
    var birds = createGroup();
    birds.add(createSprite(-50, -50)); birds.add(createSprite(-50, -50));
    birds.setAnimationEach("bird"); birds.setScaleEach(0.5);

    //}

    //intro sprites{
    var whiteBackground = createSprite(400, 400, 804, 804);
    whiteBackground.shapeColor = rgb(240, 240, 240, 0.85);
    var leftChar1 = createSprite(465, 695);
    leftChar1.scale = 0.18; leftChar1.setAnimation("leftDown");
    var rightChar1 = createSprite(645, 695);
    rightChar1.scale = 0.18; rightChar1.setAnimation("rightDown");
    var bChar1 = createSprite(555, 695);
    bChar1.scale = 0.58; bChar1.setAnimation("bDown");
    var aChar1 = createSprite(735, 695);
    aChar1.scale = 0.5; aChar1.setAnimation("aDown");

    var tutorialBtn = createSprite(400, 340, 160, 50);
    var startBtn = createSprite(400, 410, 280, 60);
    var leaderBtn = createSprite(290, 480, 210, 50);
    var credsBtn = createSprite(510, 480, 140, 50);
    
    
    var credsBackBtn = createSprite(1255, 740, 160, 60);
    var leaderBackBtn = createSprite(-455, 740, 160, 60);
    var hintsMenuBtn = createSprite(165,665,280,50);
    var musicMenuBtn = createSprite(165,750,280,50);


    credsBackBtn.shapeColor = leaderBackBtn.shapeColor = rgb(180, 200, 255);
    
    hintsMenuBtn.visible=musicMenuBtn.visible=tutorialBtn.visible = startBtn.visible= leaderBtn.visible 
    = credsBtn.visible = credsBackBtn.visible = leaderBackBtn.visible = false;
    
    var rChars = createGroup();
    rChars.add(createSprite(465, 760, 50, 50));
    rChars.add(createSprite(555, 760, 50, 50));
    rChars.add(createSprite(645, 760, 50, 50));
    rChars.add(createSprite(735, 760, 50, 50));
    
    rChars.add(createSprite(465, 760, 40, 40));
    rChars.add(createSprite(555, 760, 40, 40));
    rChars.add(createSprite(645, 760, 40, 40));
    rChars.add(createSprite(735, 760, 40, 40));

    rChars[0].shapeColor = rChars[1].shapeColor =
      rChars[2].shapeColor = rChars[3].shapeColor = "black";
    leftChar1.visible = rightChar1.visible = aChar1.visible = bChar1.visible = false;
    rChars[5].shapeColor = rChars[6].shapeColor = rChars[7].shapeColor = "white";
    rChars[4].shapeColor = "lightGreen";
    
    rChars.add(createSprite(350,655)); rChars[8].setAnimation("hint"); rChars[8].scale = 0.6;
    rChars.add(createSprite(350,745)); rChars[9].setAnimation("music"); rChars[9].scale = 0.6;
    
    rChars.setVisibleEach(false);

    var tutorialSprites = createGroup();
    tutorialSprites.add(createSprite(120, 670, 136, 76));
    tutorialSprites.add(createSprite(260, 670, 136, 76));
    tutorialSprites.add(createSprite(400, 670, 136, 76));
    tutorialSprites.add(createSprite(540, 670, 136, 76));
    tutorialSprites.add(createSprite(680, 670, 136, 76));
    tutorialSprites.add(createSprite(400, 750, 296, 76));
    tutorialSprites.setVisibleEach(false);

    //Menu sprites
    var educationLevelLeft = createSprite(265, 768);
    educationLevelLeft.setAnimation('noSign'); educationLevelLeft.scale = 0.09;
    var charHead = createSprite(340, 730);
    charHead.setAnimation("leftHead"); charHead.scale = 0.22;
    charHead.visible = false;
    var recycleSprites = createGroup();
    recycleSprites.add(createSprite(65, 750, 10, 10));
    recycleSprites.add(createSprite(735, 750, 10, 10));
    recycleSprites.setAnimationEach("recycle"); recycleSprites.setScaleEach(0.8);
    recycleSprites.setVisibleEach(false);
    educationLevelLeft.visible = false;

  var cMedals = createGroup();
    for(var count = 0;count<3;count++){
      cMedals.add(createSprite(690+(count*40),769));
      cMedals[count].setAnimation("medal"+count);
    }
    cMedals.setScaleEach(0.4);
    cMedals.setVisibleEach(false);

    var music = createSprite(466,729);
    music.setAnimation('music'); music.scale=0.4;
    music.visible=false;
    
    //zoom-in sprites
    var greenIntro = createSprite(400, 304, 780, 590);
    var mapSprite2 = createSprite(400,304);
    var mapSprite1 = createSprite(400,304);  
    var mapSprite = createSprite(400, 304);
    mapSprite.setAnimation("mapSC"); mapSprite1.setAnimation("mapSC1"); mapSprite2.setAnimation("mapSC2");
    mapSprite.scale=mapSprite1.scale=mapSprite2.scale=1.08;
    greenIntro.shapeColor = rgb(77, 153, 62);
    mapSprite.visible = mapSprite1.visible = mapSprite2.visible = false;
    
    //clouds
    var clouds = new Group();
    for (var xc = 0; xc < 4; xc++) {
      clouds.add(createSprite(400, 295));
    }
    clouds[0].setAnimation("cloudsTopLeft");
    clouds[1].setAnimation("cloudsTopRight");
    clouds[2].setAnimation("cloudsBotRight");
    clouds[3].setAnimation("cloudsBotLeft");
    clouds.setVisibleEach(false);
    var whiteForeground = createSprite(400, 400, 804, 804);
    whiteForeground.shapeColor = rgb(255, 255, 255, 0.5);

    var blackout = createSprite(400, 400, 804, 804);
    blackout.shapeColor = rgb(0, 0, 0);
    var introBtn = createSprite(800, 520, 200, 80);
    introBtn.shapeColor = rgb(220, 220, 220);
    introBtn.visible=false;
    var cesjLogo = createSprite(400, 400);
    cesjLogo.setAnimation("CESJ"); cesjLogo.visible = false; cesjLogo.scale = 0.5;
    var rain = createSprite(400, 350); rain.visible = false; rain.scale = 0.5; rain.setAnimation("bg_rain");
    var lightning = createSprite(-100, -100);
    lightning.setAnimation("lightning"); lightning.scale = 0.75;

    //}
    //}

    //trash cutscreen sprites
    var cleanUpSprites = createGroup();
    cleanUpSprites.add(createSprite(400, 314, 640, 100));
    cleanUpSprites[0].shapeColor = rgb(255, 255, 255, 0.8);
    cleanUpSprites.add(createSprite(400, 240, 640, 48));
    cleanUpSprites[1].shapeColor = rgb(180, 255, 180, 0.8);
    cleanUpSprites.add(createSprite(160, 316));
    cleanUpSprites[2].setAnimation("groupIcon"); cleanUpSprites[2].scale = 0.12;
    cleanUpSprites.setVisibleEach(false);

    //Annual meeting sprites
    var meetingSprites = createGroup();
    meetingSprites.add(createSprite(400, 350, 780, 680)); meetingSprites[0].shapeColor = rgb(240, 240, 255, 0.85);
    meetingSprites.add(createSprite(200, 535)); meetingSprites[1].setAnimation("groupIcon");
    meetingSprites.add(createSprite(400, 535)); meetingSprites[2].setAnimation("groupIcon");
    meetingSprites.add(createSprite(600, 535)); meetingSprites[3].setAnimation("groupIcon");
    meetingSprites[1].scale = meetingSprites[2].scale = meetingSprites[3].scale = 0.2;

    meetingSprites.add(createSprite(225, 300)); meetingSprites.add(createSprite(575, 300));
    meetingSprites[4].setAnimation("leader" + leaderNum);
    meetingSprites[5].setAnimation("leader" + oppositionNum);
    meetingSprites[4].scale = meetingSprites[5].scale = 1.75;

    meetingSprites.add(createSprite(400, 408)); meetingSprites[6].setAnimation("Election Background");
    meetingSprites[6].scale = 1.041;
    meetingSprites.add(createSprite(400, 650));
    meetingSprites.add(createSprite(400, 505, 780, 250)); meetingSprites[8].shapeColor = rgb(0, 0, 0, 0.4);
    meetingSprites.add(createSprite(200, 280));
    meetingSprites.add(createSprite(600, 280));

    meetingSprites.setVisibleEach(false);

    //meeting buttons
    var meetingBtns = createGroup();
    meetingBtns.add(createSprite(250,335,140,50));
    meetingBtns.add(createSprite(550,335,140,50));
    meetingBtns.add(createSprite(250,370,140,50));
    meetingBtns.add(createSprite(550,370,140,50));
    meetingBtns.add(createSprite(225,568,120,36));
    meetingBtns.add(createSprite(575,568,120,36));
    meetingBtns.setVisibleEach(false);

    //grad screen sprites
    var gradScreen = createSprite(400,350);
    gradScreen.setAnimation("gradScreen");
    gradScreen.scale=1.09;
    gradScreen.visible = false;
    
    var confetti = createSprite(400,300);
    confetti.visible = false; confetti.scale=1.4;
   
    
    /////////////////////////////Draw Starts///////////////////////////////////
    function draw() {
      controlColors();
      if (startPressed && !pauseMainFunctions) {
        loopCount++;
      } else if (level == -1) {
        drawSprites(); textFont('tahoma');
        if (mouseIsOver(introBtn)) {
          introColor = rgb(220, 220, 220);
          introScale=2;
        } else {
          introColor = rgb(190, 190, 190);
          introScale=0;
        }
        if (mousePressedOver(introBtn) || keyWentDown('enter')) {
          startPressed = true;

          cesjLogo.visible = true;
          level = 0;
          playSound("audio/app_interface_button_3.mp3");
        }
      }
      //main menu
      if (level == 0) {
        if (loopCount == 90) {
          playSound("audio/whoosh.mp3");
          //set up zoom-in
          greenIntro.visible = mapSprite.visible = whiteForeground.visible = true;
          clouds.setVisibleEach(true);
          mapSprite.scale = 0.4;
          cesjLogo.visible = false;

          //set animations for buildings
          //tier 1 buildings
          t1Buildings[0].setAnimation("t1BuildingRuin");
          t1Buildings[1].setAnimation("t1FenceRuin"); t1Roofs[1].visible = false;
          t1Buildings[2].setAnimation("t1LandRuin"); t1Roofs[2].visible = false;
          t1Buildings[3].setAnimation("t1BuildingRuin");
          t1Buildings[4].setAnimation("t1LandRuin"); t1Roofs[4].visible = false;
          t1Buildings[5].setAnimation("t1FenceRuin"); t1Roofs[5].visible = false;
          t1Buildings[6].setAnimation("t1BuildingRuin");
          t1Buildings[7].setAnimation("t1LandRuin"); t1Roofs[7].visible = false;
          t1Buildings[8].setAnimation("t1FenceRuin"); t1Roofs[8].visible = false;

          t1Land[1].visible = t1Land[2].visible = t1Land[4].visible = t1Land[5].visible =
            t1Land[7].visible = t1Land[8].visible = true;

          //tier 2 buildings
          t2Buildings[1].setAnimation("t2FenceRuin");
          t2Buildings[2].setAnimation("t2BuildingRuin");
          t2Buildings[3].setAnimation("t2BuildingSide2");
          t2Buildings[4].setAnimation("t2BuildingSide3");

          //tier 3 buildings
          t3Buildings[0].setAnimation("t3FenceRuin");
          t3Buildings[1].setAnimation("t3FenceRuin");

          for (var plot = 0; plot < 14; plot++) {
            t1Buildings[plot].scale = 0.82;
            t1Buildings[plot].y += 14;
          }
          for (var plot1 = 1; plot1 < 5; plot1++) {
            t2Buildings[plot1].scale = 0.96;
            t2Buildings[plot1].y -= 4;
          }
          for (var plot2 = 0; plot2 < 2; plot2++) {
            t3Buildings[plot2].scale = 0.9;
            t3Buildings[plot2].y -= 34;
          }
        } else if (loopCount > 90 && loopCount < 120) {
          var loopSinceStart = loopCount - 90;
          //black fades out
          blackout.shapeColor = rgb(20, 20, 20, 1 - (loopSinceStart * 0.045));
          //map zooms in
          mapSprite.scale = 0.45 + (0.66 * (loopSinceStart / 30));
          //cloud movement

          clouds[0].setVelocity(-8.25, -5.5);
          clouds[1].setVelocity(8.25, -5.5);
          clouds[2].setVelocity(8.25, 5.5);
          clouds[3].setVelocity(-8.25, 5.5);
        } else if (loopCount == 120) {
          blackout.visible = false;
          clouds.setVelocityEach(0, 0);
          clouds.setVisibleEach(false);
          greenIntro.visible = false;
          if(!muteMusic)(playSound("audio/TrackTribe - A Night Alone.mp3",true));
        } else if (loopCount == 130) {
          mapSprite.visible = whiteForeground.visible = false;
          zoomedIn = true;
          leftChar1.visible = rightChar1.visible = aChar1.visible = bChar1.visible = true;
          rChars.setVisibleEach(true);
        }

        background(rgb(175, 138, 103));
        fill("lightGray");
        rect(10, 600, 780, 200);
        stroke(rgb(50, 50, 50));
        fill(rgb(50, 50, 50)); stroke('black'); strokeWeight(6);

        if (loopCount > 90) {
          
          if(menuPage == 0){
          //start sliding from menu to credits
          if (mousePressedOver(credsBtn) && zoomedIn) {
            playSound("audio/swoosh.mp3");
            menuPage = 1;
            credsCounter = 24;
          }
          //start sliding from menu to leaderboard
          if (mousePressedOver(leaderBtn) && zoomedIn) {
            playSound("audio/swoosh.mp3");
            menuPage = 2;
            credsCounter = -24;
          }

          //slide from credits to main menu
          if(xSlide<0){
            xSlide += credsCounter*3;
            credsCounter--;
          }
          //slide from credits to main menu
          if(xSlide>0){
            xSlide += credsCounter*3;
            credsCounter++;
          }
          
          //char select movement
          if (charSelectCount[0] + 1 == loopCount) {
            leftChar1.setAnimation("leftWalkDown");
            rightChar1.setAnimation("rightDown");
            bChar1.setAnimation("bDown");
            aChar1.setAnimation("aDown");
          }else if (charSelectCount[0] + 30 == loopCount){
            leftChar1.setAnimation("leftDown");
          }
          if (charSelectCount[2] + 1 == loopCount) {
            rightChar1.setAnimation("rightWalkDown");
            leftChar1.setAnimation("leftDown");
            bChar1.setAnimation("bDown");
            aChar1.setAnimation("aDown");
          }else if (charSelectCount[2] + 30 == loopCount){
            rightChar1.setAnimation("rightDown");
          }
          if (charSelectCount[1] + 1 == loopCount) {
            bChar1.setAnimation("bWalkDown");
            aChar1.setAnimation("aDown");
            rightChar1.setAnimation("rightDown");
            leftChar1.setAnimation("leftDown");
          }else if (charSelectCount[1] + 30 == loopCount){
            bChar1.setAnimation("bDown");
          }
          if (charSelectCount[3] + 1 == loopCount) {
            aChar1.setAnimation("aWalkDown");
            leftChar1.setAnimation("leftDown");
            rightChar1.setAnimation("rightDown");
            bChar1.setAnimation("bDown");
          }else if (charSelectCount[3] + 30 == loopCount){
            aChar1.setAnimation("aDown");
          }

          //char selection
          if (keyWentDown("r")) {
            playSound("audio/app_menu_button_2.mp3");

            if (charNum == 1) {
              leftChar1.setAnimation("leftDown");
            } else if (charNum == 3) {
              rightChar1.setAnimation("rightDown");
            } else if (charNum == 2) {
              bChar1.setAnimation("bDown");
            } else {
              aChar1.setAnimation("aDown");
            }

            charNum++;
            if (charNum == 5) {
              charNum = 1;
            }

            charSelectCount[charNum-1]=loopCount;
          }


          // ---- start game/tutorial -----

          if ((mousePressedOver(tutorialBtn) || mousePressedOver(startBtn) || keyWentDown('ENTER')) && zoomedIn) {
            playSound("audio/app_interface_button_3.mp3");
            playSound("audio/bgTraffic.mp3",true);
            stopLongSounds(false);
            stopMusic();
              leftChar1.setAnimation("leftDown");
              rightChar1.setAnimation("rightDown");
              bChar1.setAnimation("bDown");
              aChar1.setAnimation("aDown");
                //set starting funds
                var randStart=randomNumber(4000,6000)*5;//1000000;
                totIncome = randStart;
                totProfits=randStart;
            
            menuPage = 0;
            xSlide = 0;
            credsCounter = 0;
            //move main wall down for bottom menu and make bottom streets visible
            streetsDec[2].visible = streetsDec[3].visible = lowPark.visible = t1Buildings[12].visible = t1Buildings[13].visible = t1Roofs[12].visible = t1Roofs[13].visible = true;
            mainWalls[4].y += 95;

            //start cars
            carCooldown = 100;
            //start ship
            ship.x = -80;
            ship.y = 35;
            ship.velocityX = 1;
            //start birds
            birds[0].x = randomNumber(-800, -20);
            birds[0].y = randomNumber(20, 680);
            birds[1].x = randomNumber(-800, -20);
            birds[1].y = randomNumber(20, 680);
            birds.setVelocityXEach(4);
            //start pedestrians
            pedCooldown = 100;

            loopCount = 0;
          whiteBackground.visible = blackout.visible = leftChar1.visible = rightChar1.visible = aChar1.visible = bChar1.visible = false;
            rChars.setVisibleEach(false);
            if (charNum == 1) {
              leftChar.setAnimation("leftDown");
              leftChar.scale = 0.15; charHead.scale = 0.21;
              charHead.setAnimation("leftHead");
              meetingSprites[7].scale = 0.15;

            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
              leftChar.scale = 0.155; charHead.scale = 0.22;
              charHead.setAnimation("rightHead");
              meetingSprites[7].scale = 0.155;
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
              leftChar.scale = 0.5; charHead.scale = 0.7;
              charHead.setAnimation("bHead");
              meetingSprites[7].scale = 0.5;
            } else {
              leftChar.setAnimation("aDown");
              leftChar.scale = 0.475; charHead.scale = 0.6;
              charHead.setAnimation("aHead");
              meetingSprites[7].scale = 0.475;
            }
            incomeArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            cIncome = 0;
            menuColors[0] = menuColors[3] = rgb(180, 235, 190);
            if(mousePressedOver(tutorialBtn)) {
              level = 1;
            }else {
              level = 2;
              tutorialSkipped = educationLevelLeft.visible = leftChar.visible = charHead.visible = music.visible = true;
              //set up main game / skip tutorial
              skipTutorial();
            }
          }
        }else if (menuPage == 1){
          //slide from menu to credits
            if(credsCounter>5){
              xSlide -= credsCounter*3;
              credsCounter--;
            }

          if(mousePressedOver(credsBackBtn)||keyWentDown("backspace")){
            playSound("audio/swoosh.mp3");
            menuPage=0;
            credsCounter=24;
          }
        } else if (menuPage == 2) {
          //slide from menu to leaderboard
          if(credsCounter<-5){
            xSlide -= credsCounter*3;
            credsCounter++;
          }

          if(mousePressedOver(leaderBackBtn)||keyWentDown("backspace")) {
            playSound("audio/swoosh.mp3");
            menuPage=0;
            credsCounter=-24;
          }
        }

        }
        
        if(zoomedIn){
          //update sprite xValues to slide over
          leftChar1.x=465+xSlide;
          rightChar1.x=645+xSlide;
          bChar1.x=555+xSlide;
          aChar1.x=735+xSlide;
          startBtn.x=400+xSlide;
          credsBtn.x=520+xSlide;
          tutorialBtn.x=400+xSlide;
          leaderBtn.x=315+xSlide;
          credsBackBtn.x=1255+xSlide;
          leaderBackBtn.x=-455+xSlide;

          rChars[0].x=rChars[4].x=465+xSlide;
          rChars[1].x=rChars[5].x=555+xSlide;
          rChars[2].x=rChars[6].x=645+xSlide;
          rChars[3].x=rChars[7].x=735+xSlide;
          rChars[8].x=rChars[9].x=350+xSlide;
          musicMenuBtn.x=hintsMenuBtn.x = 165 + xSlide;
        }
        
        drawSprites();
        
        if (zoomedIn) {
          stroke("black");strokeWeight(3);
          if (mouseIsOver(tutorialBtn)) {
            fill(rgb(215, 235, 255));
          } else {
            fill(rgb(200, 215, 255));
          }
          rect(320+xSlide,315,160,50);
          if (mouseIsOver(startBtn)) {
              fill(rgb(180, 255, 200));
          } else {
              fill(rgb(150, 230, 180));
          }
          rect(260+xSlide,380,280,60);
          if (mouseIsOver(leaderBtn)) {
            fill(rgb(250, 200, 200));
          } else {
            fill(rgb(230, 180, 180));
          }  
          rect(210+xSlide,455,210,50);
          if (mouseIsOver(credsBtn)) {
            fill(rgb(210, 180, 255));
          } else {
            fill(rgb(190, 155, 245));
          }
          rect(450+xSlide,455,140,50);
          
          if (mouseIsOver(credsBackBtn)) {
             fill(rgb(200, 170, 255));
          } else {
            fill(rgb(190, 155, 245));
          }
          rect(1175+xSlide,710,160,60);
          
          if (mouseIsOver(leaderBackBtn)) {
            fill(rgb(250, 200, 200));
          } else {
            fill(rgb(230, 180, 180));
          }  
         rect(-535+xSlide,710,160,60);

          fill(rgb(200, 255, 210, 0.4)); 
          strokeWeight(1); stroke("black");
          rect(150+xSlide, 75, 500, 175);
          rect(1145+xSlide, 50, 220, 80);
          rect(-650+xSlide, 50, 390, 80);
          
          textSize(65); fill('black');
          textAlign('center', 'center'); textFont("impact");
          text('River City Reborn', 400+xSlide, 120);
          strokeWeight(0.5); stroke("black");textSize(60);
          text('Credits',1255+xSlide,92);
          text('Leaderboard',-455+xSlide,92);
          textSize(50); strokeWeight(2);textFont("georgia");
          strokeWeight(1);
          text('Start Game', 400+xSlide, 410);
          textSize(34);noStroke();
          text('Tutorial', 400+xSlide, 340);
          text("Leaderboard", 315+xSlide, 480);
          text("Credits", 520+xSlide, 480);

          stroke('black');
          textSize(26); strokeWeight(0.5);
          text("--- [R] Switch Character ---", 600+xSlide, 634);

          strokeWeight(3); 
          line(400+xSlide, 612, 400+xSlide, 788);
          line(13+xSlide, 700, 400+xSlide, 700);
          
          textSize(30); strokeWeight(0.5);
          text('By the Center for Economic\nand Social Justice', 400+xSlide, 200);
          

          //credits screen graphics (add 855 to the x value)
          if (xSlide < 0) {
            var creditColors = [rgb(255,230,220), rgb(212, 240, 255), rgb(220,255,230), rgb(220,230,255)];
            for(var xg=0;xg<4;xg++){
              fill(creditColors[xg]);stroke("black");strokeWeight(3);
              rect(955+xSlide,140+(xg*70),600,50);
            }
            //music background
            fill(rgb(240,245,255));stroke("Black");strokeWeight(3);
            rect(955+xSlide,400,600,290);
            
            fill("black");textSize(30);noStroke();
            text("Game Developer: Andrew Thompson",1255+xSlide,167);
            text("Producer: CESJ",1255+xSlide,237);
            text("Sprites: opengameart.org & pngarts.com",1255+xSlide,307);
            textSize(28);
            text("E's Jammy Jam - Forget Me Not\nE's Jammy Jam - Nighttime Stroll\nE's Jammy Jam - Soul & Mind\nKubbi - Formed by Glaciers\nTrackTribe - A Brand New Start\nTrackTribe - A Night Alone\nTrackTribe - Home For the Holidays\nSilent Partner - Bet On It",1255+xSlide,544);
  
            
            textSize(40);
            text("-- Music --",1255+xSlide,377);
            
            textSize(40); fill("black"); strokeWeight(1);
            text("← Back",1255+xSlide,740);
          }

          //leaderboard screen graphics (subtract 855 from the x value)
          if (xSlide > 0) {
            //FASTEST TIMES
            strokeWeight(1); stroke("black");

            fill(rgb(255,255,255,0.7));
            rect(-770+xSlide,205,630,200);

            fill(rgb(159, 197, 232));
            rect(-770+xSlide,160,630,45);

            var leaderColors=['gold','silver',rgb(176,141,87)];
            textSize(29);
            for(var po=0;po<3;po++){
              strokeWeight(1); stroke("black");
              let yOffset = (po*55);
              fill(leaderColors[po]);
              rect(-755+xSlide,230+yOffset,600,40);
              fill("white");
              rect(-310+xSlide, 230+yOffset, 148, 40);
              fill(rgb(201, 218, 248));
              rect(-755+xSlide,230+yOffset,40,40);
              
              fill("black");noStroke();
              text((po+1)+".",-735+xSlide,252+yOffset); //rank
              textAlign("left","center");
              text(truncateText(topTimes[po][0],390), -705+xSlide, 252+yOffset); //name
              textAlign("center","center");
              let secondsString = (topTimes[po][3] < 10) ? "0"+topTimes[po][3] : topTimes[po][3];
              let minutesString = (topTimes[po][2] < 10) ? "0"+topTimes[po][2] : topTimes[po][2];
              let hoursString = (topTimes[po][1] < 10) ? "0"+topTimes[po][1] : topTimes[po][1];

              text(hoursString+":"+minutesString+":"+secondsString, -236+xSlide, 252+yOffset); //Time in format hours:minutes:seconds
            }
            
          //HIGH SCORES
            strokeWeight(1); stroke("black");

            fill(rgb(255,255,255,0.7));
            rect(-770+xSlide,475,630,200);
            
            
            fill(rgb(190, 155, 245));
            rect(-770+xSlide,430,630,45);

            for(var pu=0; pu<3; pu++){
              strokeWeight(1); stroke("black");
              let yOffset = (pu*55);
              fill(leaderColors[pu]);
              rect(-755+xSlide, 500+yOffset,600,40);
              fill('white');
              rect(-310+xSlide, 500+yOffset, 148, 40);
              fill(rgb(200, 165, 255));
              rect(-755+xSlide,500+yOffset,40,40);

              fill("black");noStroke();
              text((pu+1)+".",-735+xSlide,522+yOffset); // rank

              textAlign("left","center");
              fill("black");
              text(truncateText(highScores[pu][0], 390), -705+xSlide, 522+yOffset); //name
              textAlign("center","center");
              
              if (highScores[pu][1] >= 10000000) {
                text(addCommas(Math.round(highScores[pu][1] / 1000000))+"M", -236+xSlide, 522+yOffset); //Score with commas, 10M or more
              }else {
                text(addCommas(highScores[pu][1]), -236+xSlide, 522+yOffset); //Score with commas
              }
            }
            
            textSize(40); fill("black"); strokeWeight(1);
            text("Fastest Times", -455+xSlide, 183);
            text("High Scores", -455+xSlide, 453);
            text("Back →",leaderBackBtn.x,leaderBackBtn.y);

          }
          
          
          //change the colors of the character selection boxes

          //hover and click for character selection
          for(var xp=0;xp<4;xp++){
            if(mouseIsOver(rChars[xp]) && xp!=charNum-1){
            rChars[xp+4].shapeColor = rgb(200,255,210);
          }else{
              rChars[xp+4].shapeColor = "white";
          }
            if(mousePressedOver(rChars[xp])&&mouseWentDown("leftButton")){
              playSound("audio/app_interface_button_3.mp3");
              charNum = xp+1;
              charSelectCount[xp]=loopCount;
            }
          }
          
          rChars[charNum + 3].shapeColor = "lightGreen";  
        
        //left menu variable text
        //music and tips/hints hover color changes
        var musicColor = ""; 
        if(mouseIsOver(rChars[9]) || mouseIsOver(musicMenuBtn)) {
          musicColor="_red";
          fill(rgb(180, 255, 210, 0.4));
          strokeWeight(3); stroke("black");
          rect(25+xSlide,725,280,50);
        }else {
          fill(rgb(150, 230, 180,0.5));
          strokeWeight(3); stroke("black");
          rect(25+xSlide,725,280,50);
        }

        var hintColor = ""; 
        if(mouseIsOver(rChars[8])||mouseIsOver(hintsMenuBtn)) {
          hintColor="_red";

          fill(rgb(220, 235, 255,0.4));
          strokeWeight(3); stroke("black");
          rect(25+xSlide,640,280,50);
        } else {
          fill(rgb(200, 215, 255,0.5));
          strokeWeight(3); stroke("black");
          rect(25+xSlide,640,280,50);
        }

        
        textSize(35);fill("black");noStroke();textAlign(CENTER,CENTER);
        
        if(hintsOn)(text("Hints are on!",165+xSlide,665));
        else(text("Hints are off!",165+xSlide,665));
        
        if(muteMusic)(text("Music is muted!",165+xSlide,750));
        else(text("Music is playing!",165+xSlide,750));
        textAlign(LEFT,CENTER);

        //Music hover and mute 
        
        if(muteMusic)(rChars[9].setAnimation("noMusic"+musicColor));
        else(rChars[9].setAnimation("music"+musicColor));

        if((mousePressedOver(rChars[9]) || mousePressedOver(musicMenuBtn)) && mouseWentDown("leftButton")){
          playSound("audio/app_interface_button_3.mp3");
          if(muteMusic){
            muteMusic=false;
            playSound("audio/TrackTribe - A Night Alone.mp3",true);
          }else{
            muteMusic=true;
            stopLongSounds(true);
            stopMusic();
          }
        }
        
        //Tips hover and prevent 
        
        if(!hintsOn)(rChars[8].setAnimation("noHint"+hintColor));
        else(rChars[8].setAnimation("hint"+hintColor));

        if((mousePressedOver(rChars[8]) || mousePressedOver(hintsMenuBtn))&&mouseWentDown("leftButton")){
          playSound("audio/app_interface_button_3.mp3");
          hintsOn=!hintsOn;
          if(hintsOn)(hintList=[false,false,false,
                                false,false,false,
                               false,false,false,false,false]);
          else(hintList=[true,true,true,
                        true,true,true,
                        true,true,true,true,true]);
          }
        }
        
        whiteBackground.shapeColor = rgb(255, 255, 255, 0.70 + (Math.abs(30 - (loopCount) % 60) / 320));
      }
      //intro background sprite processes
      else if (level == 1) {
        background(rgb(175, 138, 103));
        stroke(rgb(50, 50, 50));
        fill(rgb(50, 50, 50)); stroke('black'); strokeWeight(6);
        fill("lightGray");
        rect(10, 700, 780, 100);
        //LOWER MENU GRAPHICS
        if (!menuOpen && !offerOpen && introControl>1) {
          textAlign(LEFT, CENTER); textFont("tahoma");
          stroke(rgb(50, 50, 50));
          strokeWeight(3);
          fill(rgb(240, 240, 240));
          rect(10, 700, 300, 100);
          rect(490, 700, 300, 100);
          var lowMenuColors = [rgb(159, 197, 232),rgb(100, 120, 200)];
          fill(lowMenuColors[0]);
          rect(10, 700, 300, 45);
          if(cleanUpActive){
            if(mouseIsOver(csHBox))(fill(lowMenuColors[0]));
            else(fill(lowMenuColors[1]));
          }else{
            if(mouseIsOver(csHBox))(fill(lowMenuColors[1]));
            else(fill(lowMenuColors[0]));
          }
          rect(490, 700, 300, 45);
          fill('black'); textSize(28); strokeWeight(1);
      
          text("[G] Ownership Quiz", 20, 726);
          text("Points: " + ePoints, 20, 765);

          text("[F] Community Service", 500, 726);
          if (cUpdateCount + 2 > loopCount) (text("Points: " + cPoints, 500, 765));
          else (text("Points: " + cPoints, 500, 770));

          //Sprint text & cooldown bar
          noStroke(); textSize(22);
          text("[Sprint Cooldown]", 313, 778);
          textSize(17);
          text("[P] Pause", 368,725);
          fill("white"); stroke("black"); strokeWeight(3);
          rect(315, 751, 171, 14);
          fill(sprintCooldownColors[charNum - 1]); noStroke();
          rect(316, 753, sprint, 11);
        }
        //pause button 
        if(keyWentDown('p')){
          if(gamePaused){
            playSound('audio/correct2.mp3');
            gamePaused=false;
            pauseMainFunctions=false;
            if(isRaining)(playSound("audio/rain.mp3",true));
            else(playSound("audio/bgTraffic.mp3",true));
            if(fireActive)(playSound("audio/fire.mp3"));
            if(floodActive)(playSound("audio/flood.mp3"));
          } else if(!pauseMainFunctions){
              stopLongSounds(true);
              stopMusic();
              playSound('audio/pause.mp3');
              pauseMainFunctions=true;              
              gamePaused=true;
              loopCopy=loopCount+600;
              leftChar.setVelocity(0,0);
              lightning.x = lightning.y = -100;
              if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
          }
        }
        
        //character movement collisions
         charBoxLeft.x = leftChar.x; charBoxLeft.y = leftChar.y + 20;
        //building collisions
        leftChar.collide(hiddenWalls[0])
        leftChar.collide(hiddenWalls[3])
        if(t1BuildingPlaced[4])(leftChar.collide(hiddenWalls[4]));
        leftChar.collide(hiddenWalls[6])
        leftChar.collide(hiddenWalls[10])
        
        //main walls
        leftChar.collide(mainWalls[1]);
        leftChar.collide(mainWalls[2]); leftChar.collide(mainWalls[3]);

        //top of map
        leftChar.collide(hiddenWalls[17]);

        //river
        leftChar.collide(hiddenWalls[13]); leftChar.collide(hiddenWalls[14]); leftChar.collide(hiddenWalls[15]);

        //highway
        leftChar.collide(hiddenWalls[16]);
        
        drawSprites();
        backgroundMovement();
        textAlign('center', 'top'); noStroke(); textSize(30); textFont('tahoma');
          
        fill('black'); textSize(28); textAlign('center', 'top');
        //////intro complete, gameplay begins/////////
      }
      //main game
      else if (level == 2) {
        if(!gamePaused){
          gameLoop++;
          //play bg music
          if(!muteMusic && gameLoop-songLoop==6330){
            playRandomSong();
          }
        }
        
        //add income from land, calculate loans, place offers, place trash{
        if ((loopCount % 10 == 0) && !pauseMainFunctions) {
          //add leasing income from buildings 
          var buildingIndex = (loopCount / 10) % 13;
          var curIncome = incomeArr[buildingIndex];
          incomeUpdates[buildingIndex] = loopCount;
          totIncome += curIncome;
          totProfits += curIncome;
          if (curIncome > 0) {
            playSound("audio/moneyPing.mp3");
            cMoneyUpdateCount = loopCount;
          }
          if (loopCount % 130 == 0) {
            if(!objListCLDC[5][3])(completeEntireCity());
            //add income from investment proposal if cooldown is done
            if(incomeArr[13]%1000!=0)(incomeArr[13]++);
            else{
              curIncome = incomeArr[13];
              totIncome += curIncome;
              totProfits += curIncome;
              if (curIncome > 0) (cMoneyUpdateCount = loopCount);
            }
            
            //randomly place trade offers on completed plots
            rRollLeft = randomNumber(1, 20) * (21 + plotsCompletedLeft);
            if (rRollLeft >= 250 + offerDebuff) {
              //loop through each of the three offers, if one is open use that one
              for (var xa = 0; xa < 3; xa++) {
                if (offersAvailable[xa]) {
                  if (xa == 0) (placeOffer(offer1, xa));
                  else if (xa == 1) (placeOffer(offer2, xa));
                  else if (xa == 2) (placeOffer(offer3, xa));
                  break;
                }
              }
            }
            //spawn trash for clean-up events
            var rRollCU = randomNumber(1, 10 + (plotsCompletedLeft * 2));
            if (rRollCU <= 4) {
              for (var t = 0; t < 10; t++) {
                if (placeTrash(randomNumber(0, 31), t)) {
                  break;
                }
              }
            }
          
            //start a fire rarely if a plot has a building
            var fireChance = 0;
            if(infrastructureChosen)(fireChance = randomNumber(1,110));
            else(fireChance = randomNumber(1, 90));
            if ((fireChance == 1) && !fireActive && !isRaining && !pauseMainFunctions) {
              var plotNum = -1;
              for (var f1 = 0; f1 < 2; f1++) {
                //try to place the fire 2 times at t1
                plotNum = randomNumber(0, 8);
                if (t1BuildingPlaced[plotNum] && t1LandIsOpen[plotNum]) {
                  //start a fire
                  playSound("audio/fire.mp3",true);
                  playSound("audio/fireSiren.mp3");
                  fireLoops[0] = loopCount;
                  fireLocations[0] = plotNum;
                  t1LandIsOpen[plotNum] = false;
                  fires[0].x = landLocations[plotNum][0]; fires[0].y = landLocations[plotNum][1] + 15;
                  fireActive = true;
                  break;
                }
              }
              //try one time to start fire at t2 buildings
              if (!fireActive) {
                plotNum = randomNumber(1, 2);
                if (t2BuildingPlaced[plotNum] && t2LandIsOpen[plotNum]) {
                  //start a fire
                  playSound("audio/fire.mp3",true);
                  playSound("audio/fireSiren.mp3");
                  fireLoops[0] = loopCount;
                  fireLocations[0] = plotNum + 8;
                  t2LandIsOpen[plotNum] = false;
                  fires[0].x = landLocations[plotNum + 8][0]; fires[0].y = landLocations[plotNum + 8][1] + 15;
                  fireActive = true;
                }
              }

              //try one time to start fire at t3 buildings
              if (!fireActive) {
                plotNum = randomNumber(0, 1);
                if (t3BuildingPlaced[plotNum] && t3LandIsOpen[plotNum]) {
                  //start a fire
                  playSound("audio/fire.mp3",true);
                  playSound("audio/fireSiren.mp3");
                  fireLoops[0] = loopCount;
                  fireLocations[0] = plotNum + 11;
                  t3LandIsOpen[plotNum] = false;
                  fires[0].x = landLocations[plotNum + 11][0]; fires[0].y = landLocations[plotNum + 11][1] + 10;
                  fireActive = true;
                }
              }
            }

            //fire spread calculations
            if (fireActive && !pauseMainFunctions) {
              for (var fireNum = 0; fireNum < 5; fireNum++) {
                var fireLocation = fireLocations[fireNum];
                if (fireLocation == -1) {
                  //this fire has not started 
                  break;
                }
                else if (fireLocation < 9) {
                  //fire is in t1
                  if (fireLocation != 3 && fireLocation != 7 && fireLocation != 8) {
                    //fire has a plot below it
                    if (t1BuildingPlaced[fireLocation + 1] && t1LandIsOpen[fireLocation + 1] &&
                      randomNumber(1, 6) == 1) {
                      var newFireNum = findOpenFire();
                      if (newFireNum != -1) {
                        //spread fire below
                        fireLoops[newFireNum] = loopCount;
                        fireLocations[newFireNum] = fireLocation + 1;
                        t1LandIsOpen[fireLocation + 1] = false;
                        fires[newFireNum].x = landLocations[fireLocation + 1][0];
                        fires[newFireNum].y = landLocations[fireLocation + 1][1] + 15;
                      }
                    }
                  }
                  if (fireLocation != 0 && fireLocation != 4 && fireLocation != 8) {
                    //fire has a plot above it
                    if (t1BuildingPlaced[fireLocation - 1] && t1LandIsOpen[fireLocation - 1] &&
                      randomNumber(1, 6) == 1) {
                      var newFireNum = findOpenFire();
                      if (newFireNum != -1) {
                        //spread fire above
                        fireLoops[newFireNum] = loopCount;
                        fireLocations[newFireNum] = fireLocation - 1;
                        t1LandIsOpen[fireLocation - 1] = false;
                        fires[newFireNum].x = landLocations[fireLocation - 1][0];
                        fires[newFireNum].y = landLocations[fireLocation - 1][1] + 15;
                      }
                    }
                  }
                }
                else if (fireLocation < 11) {
                  //fire is in t2
                  if (fireLocation == 9 && t2BuildingPlaced[2] && t2LandIsOpen[2] && randomNumber(1, 6) == 1) {
                    var newFireNum = findOpenFire();
                    if (newFireNum != -1) {
                      //spread to plot 10
                      fireLoops[newFireNum] = loopCount;
                      fireLocations[newFireNum] = 10;
                      t2LandIsOpen[2] = false;
                      fires[newFireNum].x = landLocations[10][0];
                      fires[newFireNum].y = landLocations[10][1] + 15;
                    }
                  }
                  else if (fireLocation == 10 && t2BuildingPlaced[1] && t2LandIsOpen[1] &&
                    randomNumber(1, 6) == 1) {
                    var newFireNum = findOpenFire();
                    if (newFireNum != -1) {
                      //spread to plot 9
                      fireLoops[newFireNum] = loopCount;
                      fireLocations[newFireNum] = 9;
                      t2LandIsOpen[1] = false;
                      fires[newFireNum].x = landLocations[9][0];
                      fires[newFireNum].y = landLocations[9][1] + 15;
                    }
                  }
                }
                //don't spread if it is in t3 or if it is t1 plot 8
              }
            }

            //start rain/storms randomly
            if (!isRaining && rainCooldown < loopCount) {
              playSound("audio/rain.mp3",true);
              stopSound("audio/fire.mp3");
              stopSound("audio/bgTraffic.mp3");
              isRaining = true;
              lightningCooldown = loopCount + randomNumber(100, 300);
              blackout.visible = true;
              blackout.shapeColor = rgb(0, 0, 0, 0.25);
              rain.visible = true;

              //reset fires
              for (var th = 0; th < 5; th++) {
                fires[th].x = -50; fires[th].y = -50;
              }
              fireLoops = [-3600, -3600, -3600, -3600, -3600];
              fireLocations = [-1, -1, -1, -1, -1];
              fireActive = false;
              fireCollisionNum = -1;
            }

            //stop rain
            if (isRaining && rainCooldown + 1800 < loopCount) {
              stopSound("audio/rain.mp3");
              playSound("audio/bgTraffic.mp3",true);
              lightning.x = lightning.y = -100;
              isRaining = false;
              blackout.visible = false;
              rain.visible = false;
              rainCooldown = loopCount + randomNumber(6000, 12000);
              streetFloodCooldown = loopCount;
            }
            //calculations
            loanPay = cLoans * loanRate;
            cExpenses = (p1CompleteSharesOwned[0] * 10) + (p1CompleteSharesOwned[1] * 15) + (p1CompleteSharesOwned[2] * 20) + 50 - (cPoints * cMult);
            if (cExpenses < 0) {
              cExpenses = 0;
            }
            totExpenses += cExpenses;
            totLoanPay += loanPay;
            totProfits = (totIncome - totExpenses - totLoanPay);

            cLoans -= loanPay;

            //Check for objective "pay more than 100k in loans"
            if(totLoanPay>100000 && !objListCLDC[6][3]){
              objListCLDC[6][1] = loopCount;
              objListCLDC[6][3] = true;
              objCount++;
            }
            
            //colors and update counts for menu
            //income colors
            if (totIncome > 0) (menuColors[0] = rgb(180, 235, 190));
            else (menuColors[0] = rgb(244, 204, 204));

            //total loan repayments
            if (totLoanPay <= 0) {
              menuColors[1] = rgb(180, 235, 190);
            } else {
              menuColors[1] = rgb(244, 204, 204);
            }

            //Other Expenses
            if (totExpenses <= 0) (menuColors[2] = rgb(180, 235, 190));
            else (menuColors[2] = rgb(244, 204, 204));

            //profits
            if (totProfits > 0) (menuColors[3] = rgb(180, 235, 190));
            else (menuColors[3] = rgb(244, 204, 204));

            //Loans and loan payment colors
            if (totLoans <= 0) (menuColors[4] = rgb(180, 235, 190));
            else (menuColors[4] = rgb(244, 204, 204));

            if (totLoanPay > 0) (menuColors[5] = rgb(180, 235, 190));
            else (menuColors[5] = rgb(244, 204, 204));

            if ((totLoans - totLoanPay) <= 0) (menuColors[6] = rgb(180, 235, 190));
            else (menuColors[6] = rgb(244, 204, 204));

            //Dividends colors
            if (dividends > 0) (menuColors[7] = rgb(180, 235, 190));
            else (menuColors[7] = rgb(244, 204, 204));

            //Ownership education colors
            if (ePoints > 0) (menuColors[8] = rgb(180, 235, 190));
            else (menuColors[8] = rgb(244, 204, 204));

            //Community service colors
            if (cPoints > 0) (menuColors[9] = rgb(180, 235, 190));
            else (menuColors[9] = rgb(244, 204, 204));
          }
        }
        //}

        background(rgb(175, 138, 103));

        
        if (!pauseMainFunctions) {
          if(shockLoop<loopCount-140){
            //sprite movement
          if (keyWentDown("SHIFT")) {
            sprinting = true;
          } else if (keyWentUp("SHIFT")) {
            sprinting = false;
            sprintLock = false;
          }

          if (sprinting && !sprintLock && sprint > 0) {
            spriteMovement(4, "Run");
            sprint -= 2;
          } else {
            spriteMovement(2, "Walk");
            if (sprint < 170) {
              sprint++;
              if (sprint == 1) (sprintLock = true);
            }
          }
          }else{
            //player is shocked
            var modLoop = loopCount%6;
            if(modLoop==0){
              leftChar.visible=false;
              shockChar.x=leftChar.x;
              shockChar.y=leftChar.y;
            }else if(modLoop==3){
              leftChar.visible=true;
              shockChar.x=-50;
              shockChar.y=-50;
            }
            if(shockLoop==loopCount-140){
              leftChar.visible=true;
              shockChar.x=-50;
              shockChar.y=-50;
              leftChar.setVelocity(0,0);
            }
          }
          //win condition check
          if(plotsCompletedLeft>=24 && objCount >= 10 && objListCLDC[5][3] && objListP[6][3] && winLoop < 0){
            winLoop = loopCount;
          }

        //Payment options
        if (keyWentDown('R') && !offerOpen && menuOpen) {
          playSound("audio/app_menu_button_2.mp3");
          if (payMethod == 0) {
            payMethod = 1;
            paymentBgr.shapeColor = rgb(225, 252, 255);
          } else {
            payMethod = 0;
            paymentBgr.shapeColor = rgb(255, 242, 204);
          }
        }
      }
        //smaller hitbox follows the player
        charBoxLeft.x = leftChar.x; charBoxLeft.y = leftChar.y + 20;

        //display lower background{
        fill("lightGray");
        rect(10, 700, 780, 100);
        if (!menuOpen && !offerOpen) {
          textAlign(LEFT, CENTER); textFont("tahoma");
          stroke(rgb(50, 50, 50));
          strokeWeight(3);
          fill(rgb(240, 240, 240));
          rect(10, 700, 300, 100);
          rect(490, 700, 300, 100);
          var lowMenuColors = [rgb(159, 197, 232),rgb(100, 120, 200)];
          if(educationOpen){
            if(mouseIsOver(oeHBox))(fill(lowMenuColors[0]));
            else(fill(lowMenuColors[1]));
          }else{
            if(mouseIsOver(oeHBox))(fill(lowMenuColors[1]));
            else(fill(lowMenuColors[0]));
          }
          rect(10, 700, 300, 45);
          if(cleanUpActive){
            if(mouseIsOver(csHBox))(fill(lowMenuColors[0]));
            else(fill(lowMenuColors[1]));
          }else{
            if(mouseIsOver(csHBox))(fill(lowMenuColors[1]));
            else(fill(lowMenuColors[0]));
          }
          rect(490, 700, 300, 45);
          fill('black'); textSize(28); strokeWeight(1);

          text("[G] Ownership Quiz", 20, 726);
          text("Points: " + ePoints, 20, 765);

          text("[F] Community Service", 500, 726);
          if (cUpdateCount + 2 > loopCount) (text("Points: " + cPoints, 500, 765));
          else (text("Points: " + cPoints, 500, 770));

          //Sprint text & cooldown bar
          noStroke(); textSize(22);
          text("[Sprint Cooldown]", 313, 778);
          textSize(17);
          text("[P] Pause", 368,725);
          fill("white"); stroke("black"); strokeWeight(3);
          rect(315, 751, 171, 14);
          fill(sprintCooldownColors[charNum - 1]); noStroke();
          rect(316, 753, sprint, 11);
        }
        //}

        noStroke(); textAlign(CENTER, CENTER);
        textFont("tahoma");

        //character collisions{
        //main walls
        leftChar.collide(mainWalls[1]);
        leftChar.collide(mainWalls[2]); leftChar.collide(mainWalls[3]);

        //top of map
        leftChar.collide(hiddenWalls[17]);

        //river
        leftChar.collide(hiddenWalls[13]); leftChar.collide(hiddenWalls[14]); leftChar.collide(hiddenWalls[15]);

        //highway
        leftChar.collide(hiddenWalls[16]);
        
        //buildings
        if (t1BuildingPlaced[0]) (leftChar.collide(hiddenWalls[0]));
        if (t1BuildingPlaced[1]) (leftChar.collide(hiddenWalls[1]));
        if (t1BuildingPlaced[2]) (leftChar.collide(hiddenWalls[2]));
        if (t1BuildingPlaced[3]) (leftChar.collide(hiddenWalls[3]));
        if (t1BuildingPlaced[4]) (leftChar.collide(hiddenWalls[4]));
        if (t1BuildingPlaced[5]) (leftChar.collide(hiddenWalls[5]));
        if (t1BuildingPlaced[6]) (leftChar.collide(hiddenWalls[6]));
        if (t1BuildingPlaced[7]) (leftChar.collide(hiddenWalls[7]));
        if (t1BuildingPlaced[8]) (leftChar.collide(hiddenWalls[8]));

        if (t2BuildingPlaced[1]) (leftChar.collide(hiddenWalls[9]));
        if (t2BuildingPlaced[2]) (leftChar.collide(hiddenWalls[10]));

        if (t3BuildingPlaced[0]) (leftChar.collide(hiddenWalls[11]));
        if (t3BuildingPlaced[1]) (leftChar.collide(hiddenWalls[12]));
        //}

        //Fade to black if a player wins, switch to end screen{
        if (winLoop + 30 > loopCount) {
          if(winLoop+1==loopCount){
            stopMusic();
            playSound("audio/endgame.mp3", true);
          }
          blackout.shapeColor = rgb(0, 0, 0, (loopCount + 1 - winLoop) / 30);
          blackout.visible = true;
        } else if (winLoop + 30 == loopCount) {
          level = 3;
          //calculate game time
            var gameTime = Math.round(gameLoop / 30);

            var seconds = gameTime % 60;
            gameTime -= seconds;
            var minutes = Math.round(gameTime / 60);
            gameTime /= 60;
            var hours = Math.round(gameTime / 60);
            gameplayTime = [hours, minutes, seconds];
            console.log("Gameplay time: "+ gameplayTime);

          loopCount=0;
          resetGame(false);
          blackout.visible=true;
          blackout.shapeColor=rgb(0,0,0);
        }
        //}
        
        drawSprites();
        
        //hint checks
        if(!pauseMainFunctions){
        var floodNum = -1;
        //buildings complete
          if(objListCLDC[5][3] && !hintList[0] && winLoop<0){
            var hintLoop = loopCount-objListCLDC[5][1];
            showHint("Now that the city is fully developed, complete more\nobjectives and receive $10,000 in dividends to win!",hintLoop,25);
            if(hintLoop==280)(hintList[0]=true);
            
          }else if(objListP[5][3] && !hintList[5]){
            //gold medal
            var hintLoop = loopCount-objListP[5][1];
            showHint("Congrats! You've earned a gold medal\nfor reaching 100 community service points!",hintLoop,30);
            if(!menuOpen && !offerOpen && hintLoop>=30)(circle(cMedals[2].x,cMedals[2].y,45,60,"darkRed"));
            if(hintLoop==280)(hintList[5]=true);
            
          }else if(objListP[3][3] && !hintList[4]){
            //silver medal
            var hintLoop = loopCount-objListP[3][1];
            showHint("Congrats! You've earned a silver medal\nfor reaching 50 community service points!",hintLoop,30);
            if(!menuOpen && !offerOpen && hintLoop>=30)(circle(cMedals[1].x,cMedals[1].y,45,60,"darkRed"));
            if(hintLoop==280)(hintList[4]=true);
            
          }else if(objListP[0][3] && !hintList[3]){
            //bronze medal
            var hintLoop = loopCount-objListP[0][1];
            showHint("Congrats! You've earned a bronze medal\nfor reaching 20 community service points!",hintLoop,30);
            if(!menuOpen && !offerOpen && hintLoop>=30)(circle(cMedals[0].x,cMedals[0].y,45,60,"darkRed"));
            if(hintLoop==280)(hintList[3]=true);
            
          }else if(fires[0].x!=-50 && !hintList[7]){
            //fire hint
            var hintLoop = loopCount-fireLoops[0];
            showHint("A fire has started! Put it out quickly\nor the CLDC will lose profit!",hintLoop,30);
            if(hintLoop>=30 && !charBoxLeft.isTouching(fires[0]))(circle(fires[0].x,fires[0].y,45,60,"darkRed"));
            if(hintLoop==280)(hintList[7]=true);
          }else if(((floodNum=findFlood()) >= 0) && !hintList[8]){
            //flood hint
            var hintLoop = loopCount - (floodLoops[floodNum]-900);
            showHint("A flood has started! Stop it quickly\nor the CLDC will lose profit!",hintLoop,30);
            if(hintLoop>=30 && !charBoxLeft.isTouching(floods[floodNum]))(circle(floods[floodNum].x,floods[floodNum].y,60,60,"darkRed"));
            if(hintLoop>=280)(hintList[8]=true);          
          
          }else if((northParkSprites[0].visible || northParkSprites[1].visible || northParkSprites[2].visible ||centralParkSprites[0].visible||centralParkSprites[1].visible||centralParkSprites[2].visible||centralParkSprites[3].visible||centralParkSprites[4].visible) && !hintList[9]){
            //park renovation hint
            
            if(northParkSprites[0].visible || northParkSprites[1].visible || northParkSprites[2].visible){
              var hintLoop = loopCount-parkHintLoop[0];
              
              if(hintLoop<15){
                if(hintLoop==1)(playSound("audio/correct.mp3"));
            //rectangle background drops down
            fill(rgb(220,220,220)); stroke(rgb(220,25,50)); strokeWeight(4);
            rect(12,12,776,hintLoop*2.2);
          }else{
            fill(rgb(220,220,220)); stroke(rgb(220,25,50)); strokeWeight(4);
            rect(12,12,776,33);
            fill("black"); noStroke(); textSize(26);
            text("Press [E] next to these tasks to renovate the park faster!",400,29);
        }
              
              //north park
              if(hintLoop>=15){
                for(var spriteNum = 0;spriteNum<northParkSprites.length;spriteNum++){
                  if(northParkSprites[spriteNum].visible && !charBoxLeft.isTouching(northParkSprites[spriteNum])){
                    circle(northParkSprites[spriteNum].x,northParkSprites[spriteNum].y,45,60,"darkRed");
                  }
                }
              }
              if(hintLoop>=280)(hintList[9]=true);
            }else {
              var hintLoop = loopCount-parkHintLoop[1];
              showHint("Press [E] next to these tasks to\nhelp renovate the park faster!",hintLoop,30);
              //central park
              if(hintLoop>=30){
                for(var spriteNum = 0;spriteNum<centralParkSprites.length;spriteNum++){
                  if(centralParkSprites[spriteNum].visible && !charBoxLeft.isTouching(centralParkSprites[spriteNum])){
                    circle(centralParkSprites[spriteNum].x,centralParkSprites[spriteNum].y,45,60,"darkRed");
                  }
                }
              }
              if(hintLoop>=280)(hintList[9]=true);
            }
            
          }else if((t2BuildingPlaced[1] && !initOpent2[1]) && !hintList[10]){
            //university hall hint
            var hintLoop = loopCount - univHallLoop;
            showHint("You've just unlocked the advanced questions for\nthe ownership quiz! Press [G] to get started!",hintLoop,26);
            if(keyWentDown('g') || hintLoop==280)(hintList[10]=true);
          }
        }
        
        noStroke();
        textAlign(CENTER, CENTER); textSize(40); fill('black');
        //}
        //plot, and job collisions{

        //Fire collisions
        if (fireActive && checkFireCollisions()) {
          //char is contacting a fire sprite
          progressMessageLeft = "[E] Extinguish Fire";
          if (menuOpen || offerOpen) {
            closeMenu();
            shareHeader.visible = offerOpen = offerSign.visible = false;
            educationLevelLeft.visible = charHead.visible = music.visible = true;
            if(cPoints>=20)(cMedals[0].visible=true);
            if(cPoints>=50)(cMedals[1].visible=true);
            if(cPoints>=100)(cMedals[2].visible=true);
          }
          if (!lTouchingJob) {
            jobProgressLeft += 0.01;
            lTouchingJob = true;
            closeMenu();
          }
          if (keyDown("e") && !pauseMainFunctions) {
            jobProgressLeft += 0.02;
          }
          //if the task is done
          if ((jobProgressLeft >= 1)) {
            playSound("audio/extinguish.mp3");
            fires[fireCollisionNum].x = -50; fires[fireCollisionNum].y = -50;
            fireLoops[fireCollisionNum] = -3600;

            var fireLocation = fireLocations[fireCollisionNum];
            if (fireLocation < 9) (t1LandIsOpen[fireLocation] = true);
            else if ((fireLocation > 8) && (fireLocation < 11)) (t2LandIsOpen[fireLocation - 8] = true);
            else (t3LandIsOpen[fireLocation - 11] = true);

            fireLocations[fireCollisionNum] = -1;
            if (isFireActive() == -1) {
              fireActive = false;
              stopSound("audio/fire.mp3");
            }
            cExpenses -= 1;
            recentPoints = 1;
            cPoints += 1;
            
            cUpdateCount = loopCount;
            jobProgressLeft = 0;

            //check for put out fire objective
            if(!objListP[7][3]){
              objListP[7][1]=loopCount;
              objListP[7][3]=true;
              objCount++;
              hintList[7]=true;
            }
          }
        }
        //Flood collisions
        else if (floodActive && checkFloodCollisions()) {
          floodFunctions(floodCollisionPlot);
        }
        else if (t2BuildingPlaced[2] && charBoxLeft.isTouching(t2Land[2]) && !initOpent2[2]) {
          //recycling plant
          if (!menuOpen || !((oldPosition[0] == 2) && (oldPosition[1] == 2))) {
            //visibility statements
            recycleSprites.setVisibleEach(true);
            leftBackground.visible = shareHeader.visible = paymentBgr.visible = offerSign.visible = offerOpen = false;
            g1Indicator.visible =  educationLevelLeft.visible = charHead.visible = music.visible = false;
            thumbDown.visible=thumbUp.visible=false;
            cMedals.setVisibleEach(false);

            menuOpen = true;
            oldPosition = [2, 2];
          }
          fill(rgb(235, 235, 235)); stroke('black'); strokeWeight(4);
          rect(125, 705, 550, 88);
          fill(rgb(180, 235, 190)); strokeWeight(2);
          rect(225, 705, 350, 45);
          fill("black"); noStroke(); textSize(34);
          text("-- Recycling Plant --", 400, 726);
          textSize(24);
          if (cleanUpActive && trashPoints > 0) {
            text("Press [E] to recycle your trash! (" + trashPoints * 2 + " pts)", 400, 768);
          } else {
            text("Recycle your trash for 2x the reward!", 400, 768);
          }
          if (keyWentDown('e') && !pauseMainFunctions) {
            playSound("audio/app_interface_button_3.mp3");
            //recycle the trash
            cleanUpActive = false;
            cleanUpSprites.setVisibleEach(false);
            jobProgressLeft = 0;
            var recyclePoints = trashPoints * 2;
            cPoints += recyclePoints;
            cExpenses -= recyclePoints;
            if (cExpenses < 0) {
              cExpenses = 0;
            }
            if (trashPoints > 0) (cUpdateCount = loopCount);
            recentPoints = recyclePoints;
            //Community service colors
            if (cPoints > 0) (menuColors[9] = rgb(180, 235, 190));
            else (menuColors[9] = rgb(244, 204, 204));
            trashPoints = 0;
            trashPickedUp = 0;
          }
        }
        else if ((charBoxLeft.isTouching(jobSprites[0]))) {
          advocacyFunctions(0);
        } else if ((charBoxLeft.isTouching(jobSprites[1]))) {
          advocacyFunctions(1);
        }

        //Offer collisions
        else if (charBoxLeft.isTouching(offer1)) {
          progressMessageLeft = "[E] Advocate";
          offerMenu(1,true);
        } else if (charBoxLeft.isTouching(offer2)) {
          progressMessageLeft = "[E] Advocate";
          offerMenu(2,true);
        } else if (charBoxLeft.isTouching(offer3)) {
          progressMessageLeft = "[E] Advocate";
          offerMenu(3,true);
        }
        //}
        //Park collisions
        else if ((parkLoop[0] + 660 > loopCount) && (checkParkCollisions(0))) {
          progressMessageLeft = "[E] Renovate Park";
          if (menuOpen) (closeMenu());
          if (!lTouchingJob) {
            jobProgressLeft += 0.01;
            lTouchingJob = true;
            closeMenu();
          }
          if (keyWentDown("e") && !pauseMainFunctions) {
            jobProgressLeft += 0.2;
            //play sound based on object
            if(parkCollisionNum==0){
              playSound("audio/hammer.mp3");
            }else{
              if(randomNumber(0,1)==0)(playSound("audio/dig1.mp3"));
              else(playSound("audio/dig2.mp3"));
            }
          }
          //if the task is done
          if ((jobProgressLeft >= 1)) {
            northParkSprites[parkCollisionNum].visible = false;
            parkLoop[0] -= 150;
            jobProgressLeft = 0;
            cUpdateCount = loopCount;
            var parkPoints = 0;
            if (parkCollisionNum == 0) {
              parkPoints = 4;
            }
            else {
              parkPoints = 2;
            }
            cExpenses -= parkPoints;
            recentPoints = parkPoints;
            cPoints += parkPoints;
            //complete the park if the timer is out
            if (parkLoop[0] + 600 <= loopCount) {
              hintList[9]=true;
              northParkSprites.setVisibleEach(false);
              green1.setAnimation("park1");
              plotsCompletedLeft++;

              //complete both parks objective check
            if(parksCompleted[0] && parksCompleted[1] && !objListCLDC[3][3]){
              objListCLDC[3][1]=loopCount;
              objListCLDC[3][3]=true;
              objCount++;
            }
              completeEntireCity();
            }
            //check objective "help renovate park" completion
            if(!objListP[2][3]){
              objListP[2][1]=loopCount;
              objListP[2][3]=true;
              objCount++;
            }
          }
        }
        else if ((parkLoop[1] + 990 > loopCount) && (checkParkCollisions(1))) {
          progressMessageLeft = "[E] Renovate Park";
          if (menuOpen) (closeMenu());
          if (!lTouchingJob) {
            jobProgressLeft += 0.01;
            lTouchingJob = true;
            closeMenu();
          }
          if (keyWentDown("e")) {
            jobProgressLeft += 0.2;
            //play sound based on object
            if(parkCollisionNum==0){
              playSound("audio/hammer.mp3");
            }else{
              if(randomNumber(0,1)==0)(playSound("audio/dig1.mp3"));
              else(playSound("audio/dig2.mp3"));
            }
          }
          //if the task is done
          if ((jobProgressLeft >= 1)) {
            centralParkSprites[parkCollisionNum].visible = false;
            parkLoop[1] -= 150;
            jobProgressLeft = 0;
            cUpdateCount = loopCount;
            var parkPoints = 0;
            if (parkCollisionNum == 0) {
              parkPoints = 4;
              
            }
            else {
              parkPoints = 2;
              
            }
            cExpenses -= parkPoints;
            recentPoints = parkPoints;
            cPoints += parkPoints;
            //complete the park if the timer is out
            if (parkLoop[1] + 990 <= loopCount) {
              hintList[9]=true;
              centralParkSprites.setVisibleEach(false);
              green4.setAnimation("t3Park1");
              green3.setAnimation("t3Alleyway1");
              plotsCompletedLeft += 2;

              //complete both parks objective check
            if(parksCompleted[0] && parksCompleted[1] && !objListCLDC[3][3]){
              objListCLDC[3][1]=loopCount;
              objListCLDC[3][3]=true;
              objCount++;
            }
              completeEntireCity();
            }

            //check objective "help renovate park" completion
            if(!objListP[2][3]){
              objListP[2][1]=loopCount;
              objListP[2][3]=true;
              objCount++;
            }
          }
        }
        //Trash collisions
        else if ((cleanUpActive && checkTrashCollisions())) {
          progressMessageLeft = "[E] Remove Trash";
          if (menuOpen) (closeMenu());
          if(offerOpen){
            offerOpen=false;
            shareHeader.visible=offerSign.visible=false;
            educationLevelLeft.visible = charHead.visible = music.visible = true;
            if(cPoints>=20)(cMedals[0].visible=true);
            if(cPoints>=50)(cMedals[1].visible=true);
            if(cPoints>=100)(cMedals[2].visible=true);
          }
          //char is contacting a trash sprite and clean up is active
          if (!lTouchingJob) {
            jobProgressLeft += 0.01;
            lTouchingJob = true;
            closeMenu();
          }
          if (keyDown("e") && !pauseMainFunctions) {
            jobProgressLeft += 0.2;
          }
          //if the task is done
          if ((jobProgressLeft >= 1)) {
            trashPickedUp++;
            if (trashCollisionNum == 1 || trashCollisionNum == 4 || trashCollisionNum == 7 || trashCollisionNum == 9) {
              //grocery bag
              playSound("audio/litter_bag.mp3");
              var pPoints = 2 - litterDebuff;
              if (pPoints<1) (pPoints=1);
              trashPoints += pPoints;
            } else if (trashCollisionNum == 2 || trashCollisionNum == 5 || trashCollisionNum == 8) {
              //soda can
              playSound("audio/litter_sodaCan.mp3");
              var pPoints = 4 - litterDebuff;
              if (pPoints<1) (pPoints=1);
              trashPoints += pPoints;
            } else {
              //soup can
              playSound("audio/litter_soupCan.mp3");
              var pPoints = 3 - litterDebuff;
              if (pPoints<1) (pPoints=1);
              trashPoints += pPoints;
            }
            trash[trashCollisionNum].x = -50; trash[trashCollisionNum].y = -50;
            openCULocations[trashPositions[trashCollisionNum]] = true;
            trashPositions[trashCollisionNum] = -1;
            jobProgressLeft = 0;
          }
        }

        //land collisions{
        else if (charBoxLeft.isTouching(green1HB) && (!parksCompleted[0])) {
          if (!pauseMainFunctions) {
            var loansToAdd = calcLoans(20000);
            if (((cLoans + loansToAdd) * loanRate) <= (cIncome - cExpenses)) {
              canAfford = true;
            }else {
              canAfford = false;
            }
          }
          if (canAfford) {
            var colorFactor = ((Math.abs(12 - (loopCount % 24))) * 3);
            g1Indicator.shapeColor = rgb(170 - colorFactor, 170 - colorFactor, 230 + colorFactor, 1);
            fill("black");noStroke();textSize(26);
            text("Feasible",610,769);
            thumbUp.visible=true;
            thumbDown.visible=false;
          }else{
            fill("black");noStroke();textSize(26);
            text("Not Feasible",610,769);
            g1Indicator.shapeColor = "red";
            thumbDown.visible=true;
            thumbUp.visible=false;
          }
          

          investmentDisclaimer();
          
          fill('black'); textSize(34); noStroke(); textAlign(CENTER, CENTER);
          openT4Menu(1);
          //set header to color
          shareHeader.shapeColor = rgb(110, 220, 115);

          text("[E]\tNorth Park\n[R] " + paymentText[payMethod], 215, 750);
          textSize(28);
          text("Development Cost: $20,000", 610, 727);
          stroke(rgb(50, 50, 50));
          strokeWeight(6);
          line(430, 700, 430, 800);
          strokeWeight(3);
          line(10,748,430,748);
          noStroke();

          //check to invest in park
          if (keyWentDown("E") && (!parksCompleted[0]) && !pauseMainFunctions) {
            if (canAfford) {
              playSound("audio/app_interface_button_3.mp3");
              totIncome -= (20000 - loansToAdd);
              totProfits -= (20000 - loansToAdd);
              cLoans += loansToAdd;
              totLoans += loansToAdd;
              if (loansToAdd > 0) (loansUpdateCount = loopCount);

              //Loans and loan payment colors
              if (totLoans <= 0) (menuColors[4] = rgb(180, 235, 190));
              else (menuColors[4] = rgb(244, 204, 204));

              if (totLoanPay > 0) (menuColors[5] = rgb(180, 235, 190));
              else (menuColors[5] = rgb(244, 204, 204));

              if ((totLoans - totLoanPay) <= 0) (menuColors[6] = rgb(180, 235, 190));
              else (menuColors[6] = rgb(244, 204, 204));

              g1Indicator.shapeColor = rgb(100, 100, 220);
              floodFactor += 600;
              parksCompleted[0] = true;
              northParkSprites.setVisibleEach(true);
              parkLoop[0] = loopCount;
              parkHintLoop[0]=loopCount;
            } else {
              playSound("audio/incorrect.mp3");
              loanCapCount = loopCount;
            }
            //update profit color
            if (totProfits > 0) {
              menuColors[3] = rgb(180, 235, 190);
            } else {
              menuColors[3] = rgb(244, 204, 204);
            }
          }
          oldPosition = [4, 1];
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        }
        else if ((charBoxLeft.isTouching(green4HB) || (charBoxLeft.isTouching(green4HB2))) && (!parksCompleted[1])) {
          if (!pauseMainFunctions) {
            var loansToAdd = calcLoans(100000);
            if (((cLoans + loansToAdd) * loanRate) <= (cIncome - cExpenses)) {
              canAfford = true;
            }else {
              canAfford = false;
            }
          }
          if (canAfford) {
            var colorFactor = ((Math.abs(12 - (loopCount % 24))) * 3);
            g1Indicator.shapeColor = rgb(170 - colorFactor, 170 - colorFactor, 230 + colorFactor, 1);
            fill("black");noStroke();textSize(26);
            text("Feasible",610,769);
            thumbUp.visible=true;
            thumbDown.visible=false;
          }else{
            fill("black");noStroke();textSize(26);
            text("Not Feasible",610,769);
            g1Indicator.shapeColor = "red";
            thumbDown.visible=true;
            thumbUp.visible=false;
          }

          investmentDisclaimer();
          
          fill('black'); textSize(34); noStroke(); textAlign(CENTER, CENTER);
          openT4Menu(4);
          //set header to color
          shareHeader.shapeColor = rgb(110, 220, 115);

          text("[E]\tCentral Park\n[R] " + paymentText[payMethod], 215, 750);
          textSize(27);
          text("Development Cost: $100,000", 610, 727);
          stroke(rgb(50, 50, 50));
          strokeWeight(6);
          line(430, 700, 430, 800);
          strokeWeight(3);
          line(10,748,430,748);
          noStroke();

          //check to invest in park
          if (keyWentDown("E") && (!parksCompleted[1]) && !pauseMainFunctions) {
            if (canAfford) {
              playSound("audio/app_interface_button_3.mp3");
              totIncome -= (100000 - loansToAdd);
              totProfits -= (100000 - loansToAdd);
              cLoans += loansToAdd;
              totLoans += loansToAdd;
              if (loansToAdd > 0) (loansUpdateCount = loopCount);

              //Loans and loan payment colors
              if (totLoans <= 0) (menuColors[4] = rgb(180, 235, 190));
              else (menuColors[4] = rgb(244, 204, 204));

              if (totLoanPay > 0) (menuColors[5] = rgb(180, 235, 190));
              else (menuColors[5] = rgb(244, 204, 204));

              if ((totLoans - totLoanPay) <= 0) (menuColors[6] = rgb(180, 235, 190));
              else (menuColors[6] = rgb(244, 204, 204));

              g1Indicator.shapeColor = rgb(100, 100, 220);

              floodFactor +=  1000;
              parksCompleted[1] = true;
              centralParkSprites.setVisibleEach(true);
              parkLoop[1] = loopCount;
              parkHintLoop[1]=loopCount;
            } else {
              playSound("audio/incorrect.mp3");
              loanCapCount = loopCount;
            }
            //update profit color
            if (totProfits > 0) {
              menuColors[3] = rgb(180, 235, 190);
            } else {
              menuColors[3] = rgb(244, 204, 204);
            }
          }
          oldPosition = [4, 4];
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        }
        else if (charBoxLeft.isTouching(t1Land[8]) && !t1PlotIsCompleted[8]) {
          openT1Menu(8);
          t1Functions(8);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[7]) && !t1PlotIsCompleted[7]) {
          openT1Menu(7);
          t1Functions(7);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[6]) && !t1PlotIsCompleted[6]) {
          openT1Menu(6);
          t1Functions(6);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[5]) && !t1PlotIsCompleted[5]) {
          openT1Menu(5);
          t1Functions(5);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[4]) && !t1PlotIsCompleted[4]) {
          openT1Menu(4);
          t1Functions(4);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[3]) && !t1PlotIsCompleted[3]) {
          openT1Menu(3);
          t1Functions(3);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[2]) && !t1PlotIsCompleted[2]) {
          openT1Menu(2);
          t1Functions(2);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[1]) && !t1PlotIsCompleted[1]) {
          openT1Menu(1);
          t1Functions(1);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        } else if (charBoxLeft.isTouching(t1Land[0]) && !t1PlotIsCompleted[0]) {
          openT1Menu(0);
          t1Functions(0);
          if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
        }
        else
          //tier 2 plots
          if (charBoxLeft.isTouching(t2Land[1]) && !t2PlotIsCompleted[1]) {
            openT2Menu(1);
            t2Functions(1);
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
          } else if (charBoxLeft.isTouching(t2Land[2]) && !t2PlotIsCompleted[2]) {
            openT2Menu(2);
            t2Functions(2);
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
          }
          //tier 3 plots
          else if (charBoxLeft.isTouching(t3Land[0]) && !t3PlotIsCompleted[0]) {
            openT3Menu(0);
            t3Functions(0);
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
          } else if (charBoxLeft.isTouching(t3Land[1]) && !t3PlotIsCompleted[1]) {
            openT3Menu(1);
            t3Functions(1);
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
          } else if (menuOpen) {
            closeMenu();
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
          } else if (offerOpen) {
            shareHeader.visible = offerSign.visible = false;
            educationLevelLeft.visible = charHead.visible = music.visible = true;
            if(cPoints>=20)(cMedals[0].visible=true);
            if(cPoints>=50)(cMedals[1].visible=true);
            if(cPoints>=100)(cMedals[2].visible=true);
            offerOpen = false;
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
          }else if (lTouchingJob) {
            lTouchingJob = false; jobProgressLeft = 0;
          }
        //}

        //loan cap warning
        if ((loanCapCount + 45 > loopCount)&&!pauseMainFunctions) {
          if (keyDown('e')) {
            fill(rgb(240, 120, 120, 0.90));
          }
          else {
            fill(rgb(225, 170, 170, 0.80));
          }
          stroke('black');
          strokeWeight(4);
          rect(130, 360, 540, 80);
          fill('black');
          noStroke();
          textAlign(CENTER, CENTER);
          textSize(28);
          text("Weekly CLDC profit cannot be negative!\n→ Reduce expenses or increase revenue!", 400, 400);
        }
        //controls all baackground aesthetic sprites including boats, birds, pedestrians, and highway traffic
        backgroundMovement();
        
        fill("black");
        textFont('tahoma'); textAlign(CENTER, CENTER);
        strokeWeight(1);
        //}
        stroke("Black"); strokeWeight(1);
        //Job progress bar{
        if (jobProgressLeft != 0 && !pauseMainFunctions) {
          rect(50, 536, 300, 50);
          fill('white');
          rect(56, 542, 288, 38);
          fill('lightGreen');
          rect(56, 542, 288 * jobProgressLeft, 38);
          fill('black'); textSize(30);
          text(progressMessageLeft, 200, 562);
        }
        
        if((parkLoop[0] + 660 == loopCount)||(parkLoop[1] + 990 == loopCount)){
          if (parkLoop[0] + 660 == loopCount) {
            northParkSprites.setVisibleEach(false);
            green1.setAnimation("park1");
            plotsCompletedLeft++;
          }
          if (parkLoop[1] + 990 == loopCount) {
            centralParkSprites.setVisibleEach(false);
            green4.setAnimation("t3Park1");
            green3.setAnimation("t3Alleyway1");
            plotsCompletedLeft += 2;
          }

          completeEntireCity();

          //complete both parks objective check
            if(parksCompleted[0] && parksCompleted[1] && !objListCLDC[3][3]){
              objListCLDC[3][1]=loopCount;
              objListCLDC[3][3]=true;
              objCount++;
            }
        }
        
        //}

        //Trash info bar{
        if (cleanUpActive && !pauseMainFunctions) {
          textSize(30);
          strokeWeight(1);
          fill("black");
          rect(400, 536, 380, 50);
          fill("white");
          rect(406, 542, 190, 38);
          fill(rgb(180, 255, 180));
          rect(604, 542, 170, 38);
          fill("black");
          text("[F]: " + trashPickedUp, 474, 562);
          text("-->", 570, 562);
          text(addCommas(trashPoints) + " PTS", 690, 562);
          //clean up message
          if (cleanUpLoop == loopCount - 1) {
            cleanUpSprites.setVisibleEach(true);
          } else if (cleanUpLoop + 60 > loopCount && !pauseMainFunctions) {
            fill("black"); textSize(32);
            text("You Organize a Community Clean-Up Event!", 400, 240);
            text("You can now clear the trash\nlittering your community!", 440, 310);
          } else if (cleanUpLoop + 60 == loopCount) {
            cleanUpSprites.setVisibleEach(false);
          }
        }
        //}

        //Ownership quiz logic
        if(educationOpen){
          loopCopy++;
          if (educationProgressLeft < 0) {
            if (keyWentDown('R') && loopAtAnswerLeft + 16 < loopCopy) {
              playSound("audio/app_menu_button_2.mp3");
              if (quizHoverLeft == 3) {
                quizHoverLeft = 1;
                quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
              } else if (quizHoverLeft == 2) {
                quizHoverLeft = 3;
                quizColorsLeft = ['lightGray', 'lightGray', 'white', 'lightGray'];
              } else {
                quizHoverLeft = 2;
                quizColorsLeft = ['lightGray', 'white', 'lightGray', 'lightGray'];
              }
            }
            if (keyWentDown("e") && quizStartLoop<0) {
              playSound("audio/app_interface_button_3.mp3");
                quizStartLoop = loopCopy;
              }
            else if ((keyWentDown("E")||keyWentDown("Enter")) && loopAtAnswerLeft + 16 < loopCopy) {
              loopAtAnswerLeft = loopCopy;
              totalQuestionsLeft++;
              if (totalQuestionsLeft == 19) {
                vocabQuestionsAnsweredLeft = [
                  false, false, false, false,
                  false, false, false, false,
                  false, false, false, false,
                  false, false, false, false,
                  false, false, false, false
                ];
                totalQuestionsLeft = 1;
              }
              //if answer is correct
              if (quizHoverLeft == vocabQuizAnswers[randomQuestionLeft]) {
                playSound("audio/correct2.mp3");
                quizColorsLeft[quizHoverLeft - 1] = 'lightGreen';
                educationLevelLeft.setAnimation("book");
                educationLevelLeft.scale = 0.18;
                ePoints += 5;
                //Ownership education colors
                if (ePoints > 0) (menuColors[8] = rgb(180, 235, 190));
                else (menuColors[8] = rgb(244, 204, 204));
                recentPoints = 5;
                //if answer is incorrect
              } else {
                playSound("audio/incorrect.mp3");
                quizColorsLeft[quizHoverLeft - 1] = rgb(255, 200, 200);
              }
            }
            //wait half a second to show result, then switch to next question
            if (loopAtAnswerLeft + 15 == loopCopy) {
              if (quizHoverLeft == vocabQuizAnswers[randomQuestionLeft]) (educationProgressLeft += 0.201);
              quizColorsLeft[quizHoverLeft - 1] = 'white';
              vocabQuestionsAnsweredLeft[randomQuestionLeft] = true;
              //find new random question
              randomQuestionLeft = randomNumber(0, 19);
              while (vocabQuestionsAnsweredLeft[randomQuestionLeft]) {
                randomQuestionLeft = randomNumber(0, 19);
              }
              if (educationProgressLeft > 0) {
                quizHoverLeft = 1;
                quizColorsLeft = quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
                randomQuestionLeft = randomNumber(0, 10);
                while (vocabQuestionsAnsweredLeft[randomQuestionLeft]) {
                  randomQuestionLeft = randomNumber(0, 10);
                }
              }
            }
          }
          else if (educationProgressLeft < 1) {
            if (keyWentDown('R') && loopAtAnswerLeft + 16 < loopCopy) {
              playSound("audio/app_menu_button_2.mp3");
              if (quizHoverLeft == 4) {
                quizHoverLeft = 1;
                quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
              } else if (quizHoverLeft == 3) {
                quizHoverLeft = 4;
                quizColorsLeft = ['lightGray', 'lightGray', 'lightGray', 'white'];
              } else if (quizHoverLeft == 2) {
                quizHoverLeft = 3;
                quizColorsLeft = ['lightGray', 'lightGray', 'white', 'lightGray'];
              } else {
                quizHoverLeft = 2;
                quizColorsLeft = ['lightGray', 'white', 'lightGray', 'lightGray'];
              }
            }
            if ((keyWentDown("E")||keyWentDown("Enter")) && loopAtAnswerLeft + 16 < loopCopy) {
              loopAtAnswerLeft = loopCopy;
              totalQuestionsLeft++;
              if (totalQuestionsLeft == 11) {
                questionsAnsweredLeft = [
                  false, false, false, false,
                  false, false, false, false,
                  false, false, false
                ];
                totalQuestionsLeft = 1;
              }
              //if answer is correct
              if (quizHoverLeft == quizAnswers[randomQuestionLeft]) {
                playSound("audio/correct2.mp3");
                quizColorsLeft[quizHoverLeft - 1] = 'lightGreen';
                educationLevelLeft.setAnimation("book");
                educationLevelLeft.scale = 0.18;
                ePoints += 10;
                //Ownership education colors
                if (ePoints > 0) (menuColors[8] = rgb(180, 235, 190));
                else (menuColors[8] = rgb(244, 204, 204));
                recentPoints = 10;
                //if answer is incorrect
              } else {
                playSound("audio/incorrect.mp3");
                quizColorsLeft[quizHoverLeft - 1] = rgb(255, 200, 200);
              }
            }
            //wait half a second to show result, then switch to next question
            if (loopAtAnswerLeft + 15 == loopCopy) {
              if (quizHoverLeft == quizAnswers[randomQuestionLeft]) (educationProgressLeft += 0.201);
              quizColorsLeft[quizHoverLeft - 1] = 'white';
              questionsAnsweredLeft[randomQuestionLeft] = true;
              //find new random question
              randomQuestionLeft = randomNumber(0, 10);
              while (questionsAnsweredLeft[randomQuestionLeft]) {
                randomQuestionLeft = randomNumber(0, 10);
              }
            }
          }
          else if (educationProgressLeft < 2 && t2BuildingPlaced[1] && !initOpent2[1]) {
               if (keyWentDown('R') && loopAtAnswerLeft + 16 < loopCopy) {
                 playSound("audio/app_menu_button_2.mp3");
              if (quizHoverLeft == 4) {
                quizHoverLeft = 1;
                quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
              } else if (quizHoverLeft == 3) {
                quizHoverLeft = 4;
                quizColorsLeft = ['lightGray', 'lightGray', 'lightGray', 'white'];
              } else if (quizHoverLeft == 2) {
                quizHoverLeft = 3;
                quizColorsLeft = ['lightGray', 'lightGray', 'white', 'lightGray'];
              } else {
                quizHoverLeft = 2;
                quizColorsLeft = ['lightGray', 'white', 'lightGray', 'lightGray'];
              }
            }
            if ((keyWentDown("E")||keyWentDown("Enter")) && loopAtAnswerLeft + 16 < loopCopy) {
              loopAtAnswerLeft = loopCopy;
              totalQuestionsLeft++;
              if (totalQuestionsLeft == 12) {
                t3QuestionsAnsweredLeft = [
                  false, false, false, false,
                  false, false, false, false,
                  false, false, false, false
                ];
                totalQuestionsLeft = 1;
              }
              //if answer is correct
              if (quizHoverLeft == t3QuizAnswers[randomQuestionLeft]) {
                playSound("audio/correct2.mp3");
                quizColorsLeft[quizHoverLeft - 1] = 'lightGreen';
                educationLevelLeft.setAnimation("book");
                educationLevelLeft.scale = 0.18;
                ePoints += 20;
                //Ownership education colors
                if (ePoints > 0) (menuColors[8] = rgb(180, 235, 190));
                else (menuColors[8] = rgb(244, 204, 204));
                recentPoints = 20;
                
                //if answer is incorrect
              } else {
                playSound("audio/incorrect.mp3");
                quizColorsLeft[quizHoverLeft - 1] = rgb(255, 200, 200);
              }
            }
            //wait half a second to show result, then switch to next question
            if (loopAtAnswerLeft + 15 == loopCopy) {
              if (quizHoverLeft == t3QuizAnswers[randomQuestionLeft]) (educationProgressLeft += 0.201);
              quizColorsLeft[quizHoverLeft - 1] = 'white';
              t3QuestionsAnsweredLeft[randomQuestionLeft] = true;
              //find new random question
              randomQuestionLeft = randomNumber(0, 11);
              while (t3QuestionsAnsweredLeft[randomQuestionLeft]) {
                randomQuestionLeft = randomNumber(0, 11);
              }
            }
            
          } 
          else if(educationProgressLeft >= 2){
            educationLevelLeft.setAnimation("gradHat");
            educationLevelLeft.scale = 0.07;
            gradScreen.visible=true;
            if (lTouchingJob) { lTouchingJob = false; jobProgressLeft = 0; }
            if(!objListP[4][3]){
              playSound("audio/confetti.mp3");
              confetti.visible = true;
              confetti.setAnimation("confetti");
              objListP[4][1]=loopCount;
              objListP[4][3]=true;
              objCount++;
            }
          }


          
        }
        
        //Ownership quiz visuals
        if (educationOpen) {
          fill(rgb(0,0,0,0.7));
          //rect(8,135,784,450);
          if(educationProgressLeft<2){
            if(menuOpen||offerOpen)(rect(8,8,784,784));
            else(rect(8,8,784,690));
          }else{
            rect(8,8,784,112);
            if(menuOpen||offerOpen){
              rect(8,580,784,215);
              }
              else{
              rect(8,580,784,115);
              }
            }
          
          
          textAlign(CENTER, CENTER); textSize(36);
          
          //return text
          fill("white");stroke("white");strokeWeight(0.8);textSize(34);
          text("Game Paused -- [G] Return to game",400,70);
          if(educationProgressLeft<2){
            //quiz header
          fill(rgb(176, 247, 255)); strokeWeight(2); stroke('black');
          rect(8, 135, 784, 60);
          strokeWeight(1); fill('black');
          text("Ownership Quiz Menu:", 400, 170);
          textSize(20); textAlign(LEFT, CENTER); strokeWeight(0);
          text("[E] Select Answer", 20, 155);
          text("[R] Change Selection", 20, 180);
          }
          
          if (educationProgressLeft < 0) {
            text("Level: 1/3", 630, 155);
            text("+5 Pts/Question", 630, 180);
          } else if (educationProgressLeft < 1) {
            text("Level: 2/3", 630, 155);
            text("+10 Pts/Question", 630, 180);
          } else if (educationProgressLeft < 2) {
            text("Level: 3/3", 630, 155);
            text("+20 Pts/Question", 630, 180);
          }
          if(educationProgressLeft<2){
            strokeWeight(2); textAlign(CENTER, CENTER);
            //Light blue background to the header
            fill(rgb(159, 197, 232));
            rect(8, 195, 784, 80);
          }
          
          if (educationProgressLeft < 0) {
            if (quizStartLoop < 0) {
              fill(rgb(240, 240, 240));
              rect(8, 265, 784, 330);
              fill("black"); noStroke(); textSize(30);
              text("[E] Start the Quiz", 400, 232);
              textSize(26); textAlign(LEFT, CENTER);
              text("- Test your knowledge by taking an Ownership Quiz!\n- All answers can be found on the cesj website.\n- When you finish, you will be more effective at advocating.", 24, 325);
              
            } else {
              //quiz started
              //LEVEL 1
              textAlign(LEFT, CENTER);
              //Darker blue progress bar
              fill(111, 168, 220); noStroke();
              rect(10, 197, 780 * (educationProgressLeft + 1), 76);
              fill('black'); strokeWeight(1); stroke('black');
              //text for the question 
              textSize(28);
              text(vocabQuizText[randomQuestionLeft][0], 20, 240);
              textSize(24); noStroke();
              for (var fg = 1; fg < 5; fg++) {
                stroke('black'); strokeWeight(2);
                fill(quizColorsLeft[fg - 1]);
                rect(8, 273 + ((fg - 1) * 79), 784, 75);
                if (fg != 4) {
                  //text for each answer choice
                  noStroke(); fill('black');
                  text(vocabQuizText[randomQuestionLeft][fg], 16, 313 + ((fg - 1) * 79));
                }
              }
            }
          } 
          else if (educationProgressLeft < 1) {
            //LEVEL 2
            textAlign(LEFT, CENTER);
            //Darker blue progress bar
            fill(111, 168, 220); noStroke();
            rect(10, 197, 780 * (educationProgressLeft), 76);
            fill('black'); strokeWeight(1); stroke('black');
            //text for the question 
            textSize(28);
            text(quizText[randomQuestionLeft][0], 20, 238);
            textSize(24); noStroke();
            for (var f = 1; f < 5; f++) {
              stroke('black'); strokeWeight(2);
              fill(quizColorsLeft[f - 1]);
              rect(8, 273 + ((f - 1) * 79), 784, 75);
              //text for each answer choice
              noStroke(); fill('black');
              text(quizText[randomQuestionLeft][f], 16, 313 + ((f - 1) * 79));
            }
          } 
          else if (educationProgressLeft < 2) {
            //LEVEL 3
            textAlign(LEFT, CENTER);
            //Darker blue progress bar
            fill(111, 168, 220); noStroke();
            rect(10, 197, 780 * (educationProgressLeft - 1), 76);
            fill('black'); strokeWeight(1); stroke('black');
            //text for the question 
            textSize(28);
            text(t3QuizText[randomQuestionLeft][0], 20, 238);
            fill(rgb(220, 225, 255)); strokeWeight(2);
            rect(8, 275, 784, 50);
            textSize(24); noStroke();
            fill('black');
            text(t3QuizText[randomQuestionLeft][1], 20, 300); // move up?
            for (var fz = 1; fz < 5; fz++) {
              stroke('black'); strokeWeight(2);
              fill(quizColorsLeft[fz - 1]);
              rect(8, 320 + ((fz - 1) * 68), 784, 64);
              //text for each answer choice
              noStroke(); fill('black');
              text(t3QuizText[randomQuestionLeft][fz + 1], 16, 355 + ((fz - 1) * 68));
            }
            
            if(!t2BuildingPlaced[1]||initOpent2[1]){
              //advanced questions are locked until university hall is developed
              fill(rgb(240,240,240,0.9));noStroke();
              rect(8,195,784,392);
              fill("black");stroke("black");strokeWeight(1);
              textAlign(CENTER, CENTER);textSize(38);
              text("You must develop the university\nhall first to finish the quiz!",400,360);
            }
          } 
          
        }
        
        //fire cooldown checks
        if (fireActive) {
          for (var fireCount = 0; fireCount < 5; fireCount++) {
            if (fireLoops[fireCount] + 900 == loopCount) {
              playSound("audio/buildingCollapse.mp3");
              //building burns down
              var fireLocation = fireLocations[fireCount];
              //t1
              if (fireLocation < 9) {
                t1Buildings[fireLocation].setAnimation("t1FenceGrass");
                t1Roofs[fireLocation].visible = false;
                t1Land[fireLocation].visible = true;
                t1BuildingPlaced[fireLocation] = false;
                cIncome -= incomeArr[fireLocation];
                if (t1PlotIsCompleted[fireLocation] && !initOpent1[fireLocation]) (incomeArr[fireLocation] = -5000);
                t1LandIsOpen[fireLocation] = true;
                p1CompleteSharesOwned[0] -= 3;
              }
              //t2
              else if ((fireLocation > 8) && (fireLocation < 11)) {
                fireLocation -= 8
                t2Buildings[fireLocation].setAnimation("t2FenceGrass");
                t2Land[fireLocation].visible = true;
                t2BuildingPlaced[fireLocation] = false;
                cIncome -= incomeArr[fireLocation + 8];
                if (t2PlotIsCompleted[fireLocation] && !initOpent2[fireLocation]) (incomeArr[fireLocation + 8] = -10000);
                t2LandIsOpen[fireLocation] = true;
                p1CompleteSharesOwned[1] -= 5;
              }
              //t3
              else {
                fireLocation -= 11
                t3Buildings[fireLocation].setAnimation("t3FenceGrass");
                t3Roofs[fireLocation].visible = t3Roofs[fireLocation + 2].visible = false;
                t3Land[fireLocation].visible = true;
                t3BuildingPlaced[fireLocation] = false;
                cIncome -= incomeArr[fireLocation + 11];
                if (t3PlotIsCompleted[fireLocation] && !initOpent3[fireLocation]) (incomeArr[fireLocation + 11] = -40000);
                t3LandIsOpen[fireLocation] = true;
                p1CompleteSharesOwned[2] -= 7;
              }

              fires[fireCount].x = -50; fires[fireCount].y = -50;
              fireLocations[fireCount] = -1;
              if (isFireActive() == -1) {
                fireActive = false;
                stopSound("audio/fire.mp3");
              }
            }
          }
        }

        //lightning cooldowns and flood checks
        if (isRaining) {
          if (lightningCooldown == loopCount) {
            playSound("audio/thunder.mp3");
            lightning.x = randomNumber(85, 750);
            lightning.y = randomNumber(-100, 460);
            //check for player shock below
            var lightningTip = [lightning.x-110,lightning.y+180];
            if((leftChar.x<lightningTip[0]+20 && leftChar.x>lightningTip[0]-20)&&(leftChar.y<lightningTip[1]+80&&leftChar.y>lightningTip[1]-80)){
              shockLoop=loopCount;
              playSound("audio/shock.mp3");
              if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
              leftChar.setVelocity(0,-0.2);
            }
          } else if (lightningCooldown + 5 == loopCount) {
            lightning.x = lightning.y = -100;
          } else if (lightningCooldown + 6 == loopCount) {
            lightningCooldown = loopCount + randomNumber(150, 900);
          }

          //start floods if rain is at least halfway over 
          if (rainCooldown + 900 < loopCount && !pauseMainFunctions) {
            //try to place t1 floods
            var rPlot = randomNumber(0, 8);
            if (!isFlooded[rPlot] && t1LandIsOpen[rPlot] && !initOpent1[rPlot] && randomNumber(0, floodFactor) == 0) {
              if (t1BuildingPlaced[rPlot] && t1PlotIsCompleted[rPlot] && t1LandIsOpen[rPlot]) {
                buildRoads(1, rPlot, false, true);
                floods[rPlot].visible = true;
                t1LandIsOpen[rPlot] = false;
                isFlooded[rPlot] = true;
                floodLoops[rPlot] = loopCount + 900;
                if(!floodActive)(playSound("audio/flood.mp3",true));
                floodActive = true;
              } else if (!t1BuildingPlaced[rPlot]) {
                t1Land[rPlot].shapeColor = rgb(20, 50, 100);
                isFlooded[rPlot] = true;
                floodLoops[rPlot] = loopCount + 900;
              }
            }
            rPlot = randomNumber(1, 2);

            //try to place t2 floods
            if (!isFlooded[rPlot + 8] && t2LandIsOpen[rPlot] && !initOpent2[rPlot] && randomNumber(0, floodFactor * 2) == 0) {
              if (t2BuildingPlaced[rPlot] && t2PlotIsCompleted[rPlot] && t2LandIsOpen[rPlot]) {
                buildRoads(2, rPlot, false, true);
                floods[rPlot + 8].visible = true;
                t2LandIsOpen[rPlot] = false;
                isFlooded[rPlot + 8] = true;
                floodLoops[rPlot + 8] = loopCount + 900;
                if(!floodActive)(playSound("audio/flood.mp3",true));
                floodActive = true;
              } else if (!t2BuildingPlaced[rPlot]) {
                t2Land[rPlot].shapeColor = rgb(20, 50, 100);
                isFlooded[rPlot + 8] = true;
                floodLoops[rPlot + 8] = loopCount + 900;
              }
            }
            rPlot = randomNumber(0, 1);
            //try to place t3 floods
            if (!isFlooded[rPlot + 11] && t3LandIsOpen[rPlot] && !initOpent3[rPlot] && randomNumber(0, floodFactor * 2) == 0) {
              if (t3BuildingPlaced[rPlot] && t3PlotIsCompleted[rPlot] && t3LandIsOpen[rPlot]) {
                buildRoads(3, rPlot, false, true);
                floods[rPlot + 11].visible = true;
                t3LandIsOpen[rPlot] = false;
                isFlooded[rPlot + 11] = true;
                floodLoops[rPlot + 11] = loopCount + 900;
                if(!floodActive)(playSound("audio/flood.mp3",true));
                floodActive = true;
              } else if (!t3BuildingPlaced[rPlot]) {
                t3Land[rPlot].shapeColor = rgb(20, 50, 100);
                isFlooded[rPlot + 11] = true;
                floodLoops[rPlot + 11] = loopCount + 900;
              }
            }

            //start street floods if roads aren't developed
            var rStreet = randomNumber(0, 15);
            if (!streetsFinished[rStreet] && randomNumber(0, floodFactor) == 0) {
              //Change to the correct street flood animation
              if (rStreet == 0 || rStreet == 5) {
                streets[rStreet].setAnimation("bridgeVert2Flood");
              } else if (rStreet == 1 || rStreet == 3 || rStreet == 4 || rStreet == 6 || rStreet == 8 || rStreet == 9) {
                streets[rStreet].setAnimation("streetVert2Flood");
              } else if (rStreet == 2) {
                streets[rStreet].setAnimation("intersectionLeft2Flood");
              } else if (rStreet == 7) {
                streets[rStreet].setAnimation("intersectionRight2Flood");
              } else {
                streets[rStreet].setAnimation("streetHoriz2Flood");
              }
            }
          }
        }

        //plot flood checks destroying building
        for (var floodPlot = 0; floodPlot < 13; floodPlot++) {
          if (isFlooded[floodPlot] && !isRaining && (floodLoops[floodPlot] <= loopCount)) {
            isFlooded[floodPlot] = false;
            if (!isFloodActive()) {
              floodActive = false;
              stopSound("audio/flood.mp3");
            }
              //split plots by tier
            if (floodPlot < 9) {
              //t1
              if (t1BuildingPlaced[floodPlot]) {
                playSound("audio/buildingCollapse.mp3");
                floods[floodPlot].visible = false;
                t1LandIsOpen[floodPlot] = true;
                cIncome -= incomeArr[floodPlot];
                incomeArr[floodPlot] = -5000;
                buildRoads(1, floodPlot, false, false);
                initOpent1[floodPlot] = true;
                t1Buildings[floodPlot].setAnimation("t1BuildingRuin");
                t1Roofs[floodPlot].setAnimation("t1RuinRoof");
                p1CompleteSharesOwned[0] -= 3;
              } else {
                if (t1PlotIsCompleted[floodPlot]) (t1Land[floodPlot].shapeColor = rgb(20, 100, 20));
                else (t1Land[floodPlot].shapeColor = rgb(0, 0, 0, 0.1));
              }
            } 
            else if (floodPlot < 11) {
              //t2
              if (t2BuildingPlaced[floodPlot - 8]) {
                playSound("audio/buildingCollapse.mp3");
                floods[floodPlot].visible = false;
                t2LandIsOpen[floodPlot - 8] = true;
                cIncome -= incomeArr[floodPlot - 8];
                incomeArr[floodPlot] = -10000;
                buildRoads(2, floodPlot - 8, false, false);
                initOpent2[floodPlot - 8] = true;
                t2Buildings[floodPlot - 8].setAnimation("t2BuildingRuin");
                p1CompleteSharesOwned[1] -= 5;
              } else {
                if (t2PlotIsCompleted[floodPlot - 8]) (t2Land[floodPlot - 8].shapeColor = rgb(20, 100, 20));
                else (t2Land[floodPlot - 8].shapeColor = rgb(0, 0, 0, 0.1));
              }
            }
            else {
              //t3
              if (t3BuildingPlaced[floodPlot - 11]) {
                playSound("audio/buildingCollapse.mp3");
                floods[floodPlot].visible = false;
                t3LandIsOpen[floodPlot - 11] = true;
                cIncome -= incomeArr[floodPlot - 11];
                incomeArr[floodPlot] = -40000;
                buildRoads(3, floodPlot - 11, false, false);
                initOpent3[floodPlot - 11] = true;
                t3Buildings[floodPlot - 11].setAnimation("t3BuildingRuin");
                t3Roofs[floodPlot - 11].shapeColor = rgb(180, 180, 180);
                t3Roofs[floodPlot - 9].setAnimation("t3BuildingRuin1");
                p1CompleteSharesOwned[2] -= 7;
              } else {
                if (t3PlotIsCompleted[floodPlot - 11]) (t3Land[floodPlot - 11].shapeColor = rgb(20, 100, 20));
                else (t3Land[floodPlot - 11].shapeColor = rgb(0, 0, 0, 0.1));
              }
            }
          }
        }

        //reset flooded undeveloped streets 45 seconds after rain stops
        if (streetFloodCooldown + 1350 == loopCount) {
          for (var street = 0; street < 16; street++) {
            if (!streetsFinished[street]) {
              if (street == 0 || street == 5) {
                streets[street].setAnimation("bridgeVert2");
              } else if (street == 1 || street == 3 || street == 4 || street == 6 || street == 8 || street == 9) {
                streets[street].setAnimation("streetVert2");
              } else if (street == 2) {
                streets[street].setAnimation("intersectionLeft2");
              } else if (street == 7) {
                streets[street].setAnimation("intersectionRight2");
              } else {
                streets[street].setAnimation("streetHoriz2");
              }
            }
          }
        }

        //Annual meeting warning and initialization
        var meetingCount = meetingLoop - loopCount;
        if (meetingCount < 115 && meetingControl == 0) {
          //warn the player that the game will pause soon
          if (meetingCount>30 && meetingCount % 16 < 8 && !pauseMainFunctions) {
            fill("white");
            stroke("black");
            strokeWeight(8);
            rect(340, 300, 40, 100);
            rect(420, 300, 40, 100);
            //audio warning
            if(meetingCount%16==0)(playSound("audio/snap.mp3"));
          }
          
          //top and bot black bars
          if (meetingCount < 75) {
            fill("black"); noStroke();
            var countUp = (75 - meetingCount) * 5;
            rect(10, 10, 780, countUp);
            rect(10, 700 - countUp, 780, countUp);
          }
          if (meetingCount == 0) {
            //start the meeting cutscreen
            meetingYear++;
            stopLongSounds(true);
            //update profitHistory and maxProfit
            profitHistory.push(totProfits);
    
            if (profitHistory.length < 11) {
              if (maxProfit < totProfits) (maxProfit = totProfits);
            } else {
              maxProfit = profitHistory[profitHistory.length - 10];
              for (var woop = profitHistory.length - 10; woop < profitHistory.length; woop++) {
                if (maxProfit < profitHistory[woop]) (maxProfit = profitHistory[woop]);
              }
            }
            if(totProfits>(reserveRate*100000))(totalPayouts += totProfits * (1 - reserveRate));
            
            meetingControl = 6;
            loopCopy = 0;
            lightning.x = lightning.y = -100;
            if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
            leftChar.setVelocity(0, 0);
            pauseMainFunctions = true;
          }
        }

        //Vote info bar & clean up initialization{
        if (voteData[0] != "none") {
          //wait one second after finishing to reset sprite
          if (advocacyLoop[0] + 30 == loopCount) {
            votesComplete[0] = false;
            jobSprites[0].x = -50; jobSprites[0].y = -50;
            jobLocations[0] = -1;
            streetsOpen[randomJobLocationsLeft[0]] = true;
          } else if (advocacyLoop[1] + 30 == loopCount) {
            votesComplete[1] = false;
            jobSprites[1].x = -50; jobSprites[1].y = -50;
            jobLocations[1] = -1;
            streetsOpen[randomJobLocationsLeft[1]] = true;
          }

          //spawn voting sprites
          if (lJobCooldown + 120 == loopCount) {
            if (jobLocations[0] == -1) {
              placeVotingSprite(0);
            } else if (jobLocations[1] == -1) {
              placeVotingSprite(1);
            }
          }
          if (!pauseMainFunctions) {
            //graphics
            strokeWeight(1); fill("black"); stroke("black");
            rect(420, 536, 360, 50);
            fill(rgb(255, 170, 170));
            rect(426, 542, 268, 38);
            fill(rgb(170, 255, 170));
            rect(426, 542, 268 * (voteData[2] / 100), 38);
            fill('black'); textSize(30);
            text("For           Against", 560, 562);
            fill("white");
            rect(702, 542, 70, 38);
            fill("black");
            var timeLeft = 30 - Math.round((loopCount - voteLoop) / 30);
            if((loopCount-voteLoop)%30==15)(playSound("audio/app_menu_button_2.mp3"));
            //enter to skip timer
            if (keyWentDown("enter")) {
              playSound("audio/app_interface_button_3.mp3");
              timeLeft = 0;
            }
            text(timeLeft, 736, 562);
            stroke("black"); strokeWeight(6);
            line(560, 542, 560, 547);
            line(560, 580, 560, 574);
          }
          //start the voting cutscreen
          if (timeLeft == 0) {
            //reset voting sprites
            jobLocations = [-1, -1, -1, -1, -1, -1];
            lJobCooldown = loopCount;
            jobSprites[0].x = -50; jobSprites[0].y = -50;
            jobSprites[1].x = -50; jobSprites[1].y = -50;
            streetsOpen = [
              true, true, true, true, true,//left street
              true, true, true, true, true,//right street
              false, true, true, false, true, true,//mid horiz street
            ];
            votesComplete = [false, false];
            lightning.x = lightning.y = -100;
            textStart=[loopCount+20];
            //end the pre-voting period
            voteData[0] = "none";
            votingLoop = loopCount;
            loopCopy = loopCount;
            if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
            leftChar.setVelocity(0, 0);
            pauseMainFunctions = true;
          }
        }
        //listens for f key press and switches to clean up mode
        else if (keyWentDown("f")||(!menuOpen && !offerOpen && mousePressedOver(csHBox) && mouseWentDown("leftButton"))) {
          if (cleanUpActive) {
            playSound("audio/app_menu_button_2.mp3");
            resetCleanUp();
          } else {
            playSound("audio/app_interface_button_3.mp3");
            cleanUpActive = true;
            //begin showing message to start clean up 
            cleanUpLoop = loopCount;
          }
        }
        //}
        //Ownership quiz toggle button
        if(keyWentDown('g')||(!menuOpen && !offerOpen && mousePressedOver(oeHBox) && mouseWentDown("leftButton"))){
          if(educationOpen){
            playSound("audio/app_menu_button_2.mp3");
            if(isRaining)(playSound("audio/rain.mp3",true));
            else(playSound("audio/bgTraffic.mp3",true));
            if(fireActive)(playSound("audio/fire.mp3"));
            if(floodActive)(playSound("audio/flood.mp3"));
            educationOpen=false;
            pauseMainFunctions=false;
            gradScreen.visible=false;
            confetti.visible=false;
            //check to switch to new question
            if((loopAtAnswerLeft <= loopCopy) && (loopAtAnswerLeft>=loopCopy-15)){
              if(educationProgressLeft<0){
                if (quizHoverLeft == vocabQuizAnswers[randomQuestionLeft]) (educationProgressLeft += 0.201);
              quizColorsLeft[quizHoverLeft - 1] = 'white';
              vocabQuestionsAnsweredLeft[randomQuestionLeft] = true;
              //find new random question
              randomQuestionLeft = randomNumber(0, 19);
              while (vocabQuestionsAnsweredLeft[randomQuestionLeft]) {
                randomQuestionLeft = randomNumber(0, 19);
              }
                if (educationProgressLeft > 0) {
                quizHoverLeft = 1;
                quizColorsLeft = quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
                randomQuestionLeft = randomNumber(0, 10);
                while (vocabQuestionsAnsweredLeft[randomQuestionLeft]) {
                  randomQuestionLeft = randomNumber(0, 10);
                }
              }
              }else if(educationProgressLeft<1){
                if (quizHoverLeft == quizAnswers[randomQuestionLeft]) (educationProgressLeft += 0.201);
              quizColorsLeft[quizHoverLeft - 1] = 'white';
              questionsAnsweredLeft[randomQuestionLeft] = true;
              //find new random question
              randomQuestionLeft = randomNumber(0, 10);
              while (questionsAnsweredLeft[randomQuestionLeft]) {
                randomQuestionLeft = randomNumber(0, 10);
              }
              }else if(educationProgressLeft<2){
                 if (quizHoverLeft == t3QuizAnswers[randomQuestionLeft]) (educationProgressLeft += 0.201);
              quizColorsLeft[quizHoverLeft - 1] = 'white';
              t3QuestionsAnsweredLeft[randomQuestionLeft] = true;
              //find new random question
              randomQuestionLeft = randomNumber(0, 11);
              while (t3QuestionsAnsweredLeft[randomQuestionLeft]) {
                randomQuestionLeft = randomNumber(0, 11);
              }
              }
            }
          }else if(!pauseMainFunctions){
            if(educationProgressLeft>=2)(gradScreen.visible=true);
            stopLongSounds(true);
            playSound("audio/app_interface_button_3.mp3");
            loopCopy=loopCount;
            loopAtAnswerLeft=loopCount-15;
            educationOpen=true;
            pauseMainFunctions=true;
            leftChar.setVelocity(0,0);
            if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
          }
        }
        //pause button 
        if(keyWentDown('p')){
          if(gamePaused){
            if(!muteMusic)(playRandomSong());
            playSound('audio/correct2.mp3');
            gamePaused=false;
            pauseMainFunctions=false;
            if(isRaining)(playSound("audio/rain.mp3",true));
            else(playSound("audio/bgTraffic.mp3",true));
            if(fireActive)(playSound("audio/fire.mp3"));
            if(floodActive)(playSound("audio/flood.mp3"));
          } else if(!pauseMainFunctions){
              stopLongSounds(true);
              stopMusic();
              playSound('audio/pause.mp3');
              pauseMainFunctions=true;              
              gamePaused=true;
              textStart=[loopCount+600];
              loopCopy=loopCount+600;
              leftChar.setVelocity(0,0);
              lightning.x = lightning.y = -100;
              if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
          }
        }
        
        textFont('tahoma');
        //dollar sign when money is updated{
        strokeWeight(2); textSize(26);

        for (var za = 0; za < 13; za++) {
          if ((incomeArr[za] != 0) && (incomeUpdates[za] + 20 > loopCount) && !pauseMainFunctions) {
            var moneyText = '';
            if (incomeArr[za] < 0) {
              fill(rgb(220, 0, 0)); stroke(rgb(220, 0, 0));
              moneyText = "-$";
            } else {
              fill(rgb(0, 220, 0)); stroke(rgb(0, 220, 0));
              moneyText = "+$";
            }
            text(moneyText + addCommas(Math.round(incomeArr[za])), landLocations[za][0], landLocations[za][1] + (incomeUpdates[za] - loopCount));
            if ((incomeArr[za] < 0) && (incomeUpdates[za] + 19 == loopCount)) {
              incomeArr[za] = 0;
            }
          }
        }
        //}
        if (!pauseMainFunctions) {
          fill("gold"); stroke("gold");
          if (cUpdateCount + 20 > loopCount) {
            //check for objectives
            if(cPoints>=20 && !objListP[0][3]){
              objListP[0][3]=true;
              objListP[0][1]=loopCount;
              objCount++;
              if(!menuOpen&&!offerOpen)(cMedals[0].visible=true);
            }
            if(cPoints>=50 && !objListP[3][3]){
              objListP[3][3]=true;
              objListP[3][1]=loopCount;
              objCount++;
              if(!menuOpen&&!offerOpen)(cMedals[1].visible=true);
            }    
            if(cPoints>=100 && !objListP[5][3]){
              objListP[5][3]=true;
              objListP[5][1]=loopCount;
              objCount++;
              if(!menuOpen&&!offerOpen)(cMedals[2].visible=true);
            }    
            
            if (recentPoints == 1) (text("+" + recentPoints + " Pt", leftChar.x, leftChar.y - 30 - (loopCount - cUpdateCount)));
            else (text("+" + recentPoints + " Pts", leftChar.x, leftChar.y - 30 - (loopCount - cUpdateCount)));
          }
          
        }
        //finish construction after 3 sec cooldown
        for (var op = 0; op < 3; op++) {
          if (offerBuildCooldowns[op] + 90 == loopCount) {
            var offer;
          if (op == 0) {
            offer = offer1;
          } else if (op == 1) {
            offer = offer2;
          } else if (op == 2) {
            offer = offer3;
          }
          offer.x = -50; offer.y = -50; offer.setAnimation("offer");
          offerIsConstruction[op] = false;
            
            var location = offerLocations[op];
            if (location >= 0 && location <= 11) {
              replaceT1Plot(location);
            } else if (location >= 12 && location <= 17) {
              replaceT2Plot(location - 12);
              if((location-12) == 1 && !objListCLDC[0][3]){
                objListCLDC[0][1]=loopCount;
                objListCLDC[0][3]=true;
                objCount++;
              }else if(!objListCLDC[1][3]){
                objListCLDC[1][1]=loopCount;
                objListCLDC[1][3]=true;
                objCount++;
              }
            } else if (location >= 18 && location <= 19) {
              replaceT3Plot(location - 18);
              //complete objective check for construct t3 building
              if(!objListCLDC[4][3]){
                objListCLDC[4][3]=true;
                objListCLDC[4][1]=loopCount;
                objCount++;
              }
            }
            
            completeEntireCity();

            //save the offer incomes in array for staggered leasing income
            if (location >= 0 && location <= 8) (incomeArr[location] = offerIncome[op]);
            else if (location == 13 || location == 14) (incomeArr[location - 4] = offerIncome[op]);
            else if (location == 18 || location == 19) (incomeArr[location - 7] = offerIncome[op]);
      
            offerLocations[op] = -1;
            cIncome += offerIncome[op];
            offerIncome[op] = 0;
            offersAvailable[op] = true;
          }
        }

        //build roads after 10 second cooldown
        //t1
        for (var oh = 0; oh < 9; oh++) {
          if (roadCooldowns[oh] + 300 == loopCount) {
            buildRoads(1, oh, false, false);
            t1LandIsOpen[oh] = true;
            //check if all roads are finished for objectives
            var roadsCompleted = true;
            for(var xf = 0;xf<streetsFinished.length;xf++){
              if(!streetsFinished[xf]){
                roadsCompleted=false;
              }
            }
            if(roadsCompleted&&!objListCLDC[2][3]){
              objListCLDC[2][1]=loopCount;
              objListCLDC[2][3]=true;
              objCount++;
            }
          }
        }
        //t2
        if((roadCooldowns[9] + 300 == loopCount)||(roadCooldowns[10] + 300 == loopCount)
           ||(roadCooldowns[11] + 300 == loopCount)||(roadCooldowns[12] + 210 == loopCount)){
          if (roadCooldowns[9] + 300 == loopCount) {
          buildRoads(2, 1, false, false);
          t2LandIsOpen[1] = true;
        }
        if (roadCooldowns[10] + 300 == loopCount) {
          buildRoads(2, 2, false, false);
          t2LandIsOpen[2] = true;
        }
        //t3
        if (roadCooldowns[11] + 300 == loopCount) {
          buildRoads(3, 0, false, false);
          t3LandIsOpen[0] = true;
        }
        if (roadCooldowns[12] + 210 == loopCount) {
          buildRoads(3, 1, false, false);
          t3LandIsOpen[1] = true;
        }
        //check if all roads are finished for objectives
            var roadsCompleted = true;
            for(var xf = 0;xf<streetsFinished.length;xf++){
              if(!streetsFinished[xf]){
                roadsCompleted=false;
              }
            }
            if(roadsCompleted&&!objListCLDC[2][3]){
              objListCLDC[2][1]=loopCount;
              objListCLDC[2][3]=true;
              objCount++;
            }
        }
        

        //cutscreens
        //annual meeting cutscreen
        if (meetingControl > 0) {
          fill("black"); noStroke();
          rect(10, 10, 780, 90);
          rect(10, 610, 780, 90);
          //skip text
          var skipFactor = ((Math.abs(15 - (loopCopy % 30))) * 3);
          textSize(25); fill(rgb(230 - skipFactor, 230 - skipFactor, 230 - skipFactor)); noStroke();
          text("Press [ENTER] To Continue", 400, 640);

          //header
          fill(rgb(200, 220, 255)); stroke(rgb(20, 20, 20)); strokeWeight(6);
          rect(25, 100, 750, 60);
          fill(rgb(220, 220, 220)); strokeWeight(3);
          rect(75, 160, 650, 40);
          fill("black"); textSize(42); noStroke();
          text(meetingYear + wordifyNum(meetingYear) + " Annual CLDC Shareholder Meeting", 400, 134);

          switch (meetingControl) {
            //meeting outline
            case 6:
              if(loopCopy==0){
                meetingSprites[0].visible = true;
              }
              if(keyWentDown("ENTER")){
                loopCopy=0;
                meetingControl=1;
              }
              textSize(30);
              text("Meeting Agenda", 400, 182);
              
              if (loopCopy>30) {
                stroke("black");strokeWeight(2);
                var t1 = (loopCopy-30)/15;
                fill(rgb(237, 254, 231, t1));
                rect(150, 240, 500, 40);
                fill(rgb(0,0,0, t1));noStroke();
                text("Item 1: Distributing Profits",400,262);
                if(loopCopy>90) {
                  fill("black");textSize(20);
                  text("↓",400,295);textSize(30);

                  stroke("black");strokeWeight(2);
                  var t2 = (loopCopy-90)/15;
                  fill(rgb(217, 234, 211, t2));
                  rect(150, 310, 500, 40);
                  fill(rgb(0,0,0, t2)); noStroke();
                  text("Item 2: Profit History & Statistics",400,332);
                  if(meetingYear==1){
                    if(loopCopy>150){
                      fill("black");textSize(20);
                      text("↓",400,365);textSize(30);

                      stroke("black");strokeWeight(2);
                      var t3 = (loopCopy-150)/15;
                      fill(rgb(197, 214, 191, t3));
                      rect(150, 380, 500, 40);
                      fill(rgb(0,0,0, t3)); noStroke();
                      text("Item 3: Create Development Plan",400,402);
                      
                      if (loopCopy>210) {
                        fill("black");textSize(20);
                        text("↓",400,435);textSize(30);

                      stroke("black");strokeWeight(2);
                      var t4 = (loopCopy-210)/15;
                      fill(rgb(177, 194, 171, t4));
                      rect(150, 450, 500, 40);
                      fill(rgb(0,0,0, t4)); noStroke();
                      text("Item 4: Vote for a CLDC Leader",400,472);
                      if (loopCopy>270) {
                        fill("black");textSize(20);
                        text("↓",400,505);textSize(30);

                      stroke("black");strokeWeight(2);
                      var t5 = (loopCopy-270)/15;
                      fill(rgb(157, 174, 151, t5));
                      rect(150, 520, 500, 40);
                      fill(rgb(0,0,0, t5)); noStroke();
                      text("Item 5: CLDC Leader Election",400,542);
                      }
                      }
                    }

                  }else{
                    if(loopCopy>150){
                      fill("black");textSize(20);
                      text("↓",400,365);textSize(30);

                      stroke("black");strokeWeight(2);
                      var t3 = (loopCopy-150)/15;
                      fill(rgb(197, 214, 191, t3));
                      rect(150, 380, 500, 40);
                      fill(rgb(0,0,0, t3)); noStroke();
                      text("Item 3: Vote for a CLDC Leader",400,402);
                      
                      if (loopCopy>210) {
                        fill("black");textSize(20);
                        text("↓",400,435);textSize(30);

                      stroke("black");strokeWeight(2);
                      var t4 = (loopCopy-210)/15;
                      fill(rgb(177, 194, 171, t4));
                      rect(150, 450, 500, 40);
                      fill(rgb(0,0,0, t4)); noStroke();
                      text("Item 4: CLDC Leader Election",400,472);

                      }
                    }
                  }
                }
              }


              break;
            //dividend animation
            case 1:
              //initialize sprites and data
              if (loopCopy == 1) {
                meetingSprites[1].visible = meetingSprites[2].visible =
                  meetingSprites[3].visible = true;
                profitRemaining = 1 - reserveRate;
              }
              textSize(30);
              text("Item 1: Distributing Profits", 400, 180);

              //main animation
              fill("white"); strokeWeight(3); stroke("black");
              rect(50, 240, 250, 45); rect(500, 240, 250, 45);
              rect(200, 345, 400, 50);

              fill("black"); noStroke();
              text("Reserve Funds", 175, 223);
              text("Your Dividends", 625, 223);
              text("Remaining Profits", 400, 325);
              
              var reserveFunds = Math.round(totProfits * reserveRate);
              if(reserveFunds<reserveRate*100000)(reserveFunds=reserveRate*100000);
              var divProfits = totProfits-reserveFunds;
              
              if(totProfits>(reserveRate*100000)){
              fill("forestGreen");
              if (loopCopy < 61) {
                text(Math.round(reserveRate*100) + "% of Profits", 175, 265);
                text("0.5% of Profits", 625, 265);
                textSize(40);
                text("$" + addCommas(Math.round(totProfits)), 400, 375);
              } 
              else if (loopCopy < 91) {
                var loopDiff = loopCopy - 60;
                
                //distribute funds to reserve and taxes
                text("$" + addCommas(Math.round(reserveFunds)), 400 - (7.5 * loopDiff), 375 - (3.66 * loopDiff));
                text("$" + addCommas(Math.round(divProfits / 200)), 400 + (7.5 * loopDiff), 375 - (3.66 * loopDiff));
                textSize(40);
                text("$" + addCommas(Math.round(divProfits * 0.995)), 400, 375);
              } 
              else if (loopCopy < 121) {
                
                //wait one second
                text("$" + addCommas(Math.round(reserveFunds)), 175, 265);
                text("$" + addCommas(Math.round(divProfits / 200)), 625, 265);
                textSize(40);
                text("$" + addCommas(Math.round(divProfits * 0.995)), 400, 375);
              } 
              else if (loopCopy < 229) {
               
                //distribute funds to CLDC members as dividends
                text("$" + addCommas(Math.round(reserveFunds)), 175, 265);
                text("$" + addCommas(Math.round(divProfits / 200)), 625, 265);

                var loopDiff = (loopCopy % 10) - 1;
                if (loopDiff == 0) {
                  profitRemaining -= 0.09;
                  if (profitRemaining < 0) (profitRemaining = 0);
                }

                textSize(40);
                text("$" + addCommas(Math.round(divProfits * profitRemaining)), 400, 375);
                textSize(30);
                //distribute 0.5% of profits to each person
                var dividend = divProfits * 0.03;
                text("$" + Math.round(dividend), 400 - (20 * loopDiff), 390 + (12 * loopDiff));
                text("$" + Math.round(dividend), 400, 390 + (12 * loopDiff));
                text("$" + Math.round(dividend), 400 + (20 * loopDiff), 390 + (12 * loopDiff));
              } 
              else {
      
                //wait for player to press enter to continue, with funds distributed
                text("$" + addCommas(Math.round(reserveFunds)), 175, 265);
                text("$" + addCommas(Math.round(divProfits / 200)), 625, 265);
                textSize(40);
                text("$0", 400, 375);
              }
              }
              else{
                fill(rgb(200,70,70));
                var negReserve = '';
                if(totProfits<0)(negReserve='-');
                else(fill("forestGreen"));
                text(negReserve+"$" + addCommas(Math.round(totProfits)), 175, 265);
                fill(rgb(200,70,70));
                text("$0", 625, 265);
                textSize(40);
                text("$0", 400, 375);
                if(loopCopy>30&&totProfits<0){
                fill(rgb(255,190,190,0.95));stroke("black");strokeWeight(3);
                rect(100,410,600,100);
                fill("black");noStroke();textSize(30);
                text("The CLDC had a net loss this year.\nIt is imperative that a net profit is reached.",400,465);  
                  }
              }
              if (keyWentDown("ENTER")) {
                playSound("audio/app_interface_button_3.mp3");
                stopLongSounds(true);
                meetingControl++;
                loopCopy = 0;
                if(totProfits > (reserveRate*100000)) {
                  dividends += divProfits / 200;
                  totProfits =  reserveFunds;
                  totIncome = totProfits + totExpenses + totLoanPay;
                }  
                if (dividends > 0) (menuColors[7] = rgb(180, 235, 190));
                meetingSprites[1].visible = meetingSprites[2].visible =
                  meetingSprites[3].visible = false;
              }
              break;
            //
            case 2:
              textSize(30);
              text("Item 2: Profit History & Statistics", 400, 180);

              //hint text
              if(meetingYear==1&&!hintList[6]){
                showHint("The percent change in profit is from last year to this year.\nThe total dividend payouts is the cumulative CLDC dividends.",loopCopy,22);
              }
              textSize(30);
              //main animation
              fill("white"); stroke("black"); strokeWeight(3);
              rect(75, 250, 650, 250);
              rect(25, 540, 350, 65);
              rect(425, 540, 350, 65);

              fill("black"); noStroke();
              text("Total Annual CLDC Profits Over Time", 400, 225);
              text("Year After CLDC Was Founded", 400, 520); 
              textSize(20);
              text("Yearly Percent Change In Profit:", 200, 553);
              text("Total Dividend Payouts:", 600, 553);

              //fill in graph boxes
              var xVal = 140; stroke("black"); strokeWeight(3);
              for (var lineNum = 0; lineNum < 9; lineNum++) {
                line(xVal, 500, xVal, 490);
                xVal += 65;
              }
              var maxFactor = 225 / maxProfit;


              var historyIndex = 0;
              if (profitHistory.length > 10) {
                historyIndex += profitHistory.length - 10;
              }
              for (var boxNum = 0; boxNum < profitHistory.length; boxNum++) {
                fill(rgb(170, 235, 180)); stroke("black"); strokeWeight(3);
                var boxHeight = profitHistory[historyIndex] * maxFactor;
                if(profitHistory[historyIndex]<0)(boxHeight=0);
              
                rect(75 + (65 * boxNum), 500 - boxHeight, 65, boxHeight);
              
                fill("black"); noStroke();
                var boxText = Math.round(profitHistory[historyIndex] / 1000);
                if(boxText<0){
                  fill(rgb(200,70,70));
                }
                text(boxText, 107.5 + (65 * boxNum), 490 - boxHeight);
                historyIndex++;
              }

              noStroke(); textSize(30); fill("black");
              //rotate text 90 degrees
              translate(200, 200);
              rotate(-90);
              text("Profit (Thousand $)", -175, -150);
              rotate(90);
              translate(-200, -200);

              textSize(40); fill("forestGreen");
              text("$" + addCommas(Math.round(totalPayouts)), 600, 584);

              fill(rgb(230, 180, 80));
              if (meetingYear == 1) {
                text("N/A", 200, 583)
              } else {
                var prevYear = profitHistory[profitHistory.length - 2];
                var curYear = profitHistory[profitHistory.length - 1];
                if(prevYear<0)(prevYear=0);
                if(curYear<0)(curYear=0);
                var percentChange = Math.round((((curYear / prevYear) - 1) * 100));
                if (percentChange > 0) {
                  fill("forestGreen");
                }
                else if (percentChange < 0) {
                  fill(rgb(200, 100, 100));
                }
                text(percentChange + "%", 200, 584);
              }

              if (keyWentDown("ENTER")) {
                playSound("audio/app_interface_button_3.mp3");
                stopLongSounds(true);
                if(meetingYear == 1){
                  meetingControl=5;
                  introSelection=0;
                }else{
                  meetingControl++;
                }
                loopCopy = 0;

                //select opposition leader and policies
                oppositionNum = randomNumber(0, 5);
                while (oppositionNum == leaderNum) {
                  oppositionNum = randomNumber(0, 5);
                }
                meetingSprites[4].setAnimation("leader" + leaderNum);
                meetingSprites[5].setAnimation("leader" + oppositionNum);
                oppositionPolicies = [randomNumber(3, 10) / 100, randomNumber(3, 10) / 100];
                while(oppositionPolicies[0]==loanRate)(oppositionPolicies[0]=randomNumber(3, 10) / 100);
                while(oppositionPolicies[1]==reserveRate)(oppositionPolicies[1]=randomNumber(3, 10) / 100);
                incumbentSelected = true;
              }
              break;
            //
            case 3:
              if (loopCopy == 1) {
                meetingSprites[4].visible = meetingSprites[5].visible = true;
              }
              textSize(30);
              if(meetingYear!=1){
                text("Item 3: Vote for a CLDC Leader", 400, 180);   
              }else {
                text("Item 4: Vote for a CLDC Leader", 400, 180);   
              }
               

              //hint text
              if(meetingYear==1&&!hintList[1]){
                showHint("Loan payment: Accelerated loan repayment from 3%\nContingency fund: CLDC profit saved for emergencies",loopCopy,24);
              }
              
              textSize(30);
              //main animation
              fill("white"); stroke("black"); strokeWeight(3);
              rect(100, 390, 250, 40); rect(450, 390, 250, 40);
              rect(60, 440, 330, 150); rect(410, 440, 330, 150);

              var selectionColors = [];
              if (incumbentSelected) (selectionColors = [rgb(180, 255, 200), "lightgray"]);
              else (selectionColors = ["lightgray", rgb(180, 255, 200)]);

              if(mouseIsOver(meetingBtns[4])){
                selectionColors[0]=rgb(210,255,230);
                incumbentSelected=true;
              }
              if(mouseIsOver(meetingBtns[5])){
                selectionColors[1]=rgb(210,255,230);
                incumbentSelected=false;
              }

              fill(selectionColors[0]);
              rect(165, 550, 120, 35);

              fill(selectionColors[1]);
              rect(515, 550, 120, 35);


              fill("black"); strokeWeight(1);
              text(leaderNames[leaderNum], 225, 414); text(leaderNames[oppositionNum], 575, 414);
              fill("darkGreen"); stroke("darkGreen");
              text("- Incumbent Policies -", 225, 460);
              fill(rgb(200, 60, 60)); stroke(rgb(200, 60, 60));
              text("- Opposition Policies -", 575, 460);
              noStroke(); fill("black");
              text("Loan payment: +" + (Math.round(loanRate * 100)-3) + "%\nContingency Fund: " + Math.round(reserveRate * 100) + "%", 225, 510);
              text("Loan payment: +" + (Math.round(oppositionPolicies[0] * 100)-3) + "%\nContingency Fund: " + Math.round(oppositionPolicies[1] * 100) + "%", 575, 510);
              var xText = 225;
              if(incumbentSelected)(xText=225);
              else(xText=575);
              text("[E] Vote",xText,568);
              textSize(25);
              if(incumbentSelected)(text("[R] ->", 335, 567)); 
              else(text("<- [R]", 465, 567));

              if (keyWentDown("R")) {
                playSound("audio/app_menu_button_2.mp3");
                incumbentSelected = !incumbentSelected;
              }
              if (keyWentDown("ENTER") || keyWentDown('e') || 
              mousePressedOver(meetingBtns[4]) || mousePressedOver(meetingBtns[5])) {
                playSound("audio/app_interface_button_3.mp3");
                loopCopy = 0;
                meetingControl++;
                meetingSprites[4].visible = meetingSprites[5].visible = false;
              }
              break;
            case 4:
              var animationPrefix = "";
              if (charNum == 1) (animationPrefix = "left");
              else if (charNum == 3) (animationPrefix = "right");
              else if (charNum == 2) (animationPrefix = "b");
              else if (charNum == 4) (animationPrefix = "a");

              //initialize sprites
              if (loopCopy == 1) {
                meetingSprites[6].visible = meetingSprites[7].visible = meetingSprites[8].visible = true;
                meetingSprites[7].velocityY = -2;
                meetingSprites[7].setAnimation(animationPrefix + "WalkUp");
                meetingSprites[9].setAnimation("leader" + leaderNum);
                meetingSprites[10].setAnimation("leader" + oppositionNum);

                if (incumbentSelected) (incumbentPopularity = randomNumber(40, 75));
                else (incumbentPopularity = randomNumber(25, 60));
              }
              textSize(30);
              if(meetingYear!=1){
                text("Item 4: CLDC Leader Election", 400, 180);
              }else{
                text("Item 5: CLDC Leader Election", 400, 180);
              }
              rect(10, 160, 85, 50);
              rect(707, 160, 83, 50);


              if (meetingSprites[7].y < 555 && meetingSprites[7].velocityY == -2) {
                meetingSprites[7].setVelocity(2, 0);
                meetingSprites[7].setAnimation(animationPrefix + "WalkRight");
              } else if (meetingSprites[7].x > 500 && meetingSprites[7].velocityX == 2) {
                meetingSprites[7].setVelocity(0, 0);
                meetingSprites[7].setAnimation(animationPrefix + "Up");
              }
              
              //election animation
              if (loopCopy == 135) {
                playSound("audio/typing.mp3");
                meetingSprites[9].visible = meetingSprites[10].visible = true;
                textStart=[140];
              } else if ((loopCopy > 135) && (loopCopy < 295)) {
                stroke("black"); strokeWeight(3);
                fill("forestGreen");
                rect(150, 330, 100, 30);

                fill(rgb(200, 60, 60));
                rect(550, 330, 100, 30);

                if (loopCopy > 140) {
                  typeText("Election Results:", 400, 220,32,0,false,"black",loopCopy);
                  if (loopCopy > 175) {
                    if(loopCopy==176)(stopSound("audio/typing.mp3"));
                    
                    fill(rgb(200, 60, 60)); stroke('black'); strokeWeight(2);
                    arc(400, 310, 130, 130, -90, ((100 - incumbentPopularity) * 3.6) - 90);
                    fill("forestGreen");
                    arc(400, 310, 130, 130, ((100 - incumbentPopularity) * 3.6) - 90, -90);

                    fill("black"); noStroke();
                    text(incumbentPopularity + "%", 300, 270);
                    text(100 - incumbentPopularity + "%", 500, 270);



                    
                    //proposal menu if profit is negative
                    if(!proposalDone && profitHistory[profitHistory.length - 1] < 0){
                      if(!hintList[2]&&loopCopy>185&&loopCopy<215){
                        fill(rgb(220,220,220));stroke(rgb(220,25,50));strokeWeight(4);
                        rect(12,12,600,(loopCopy-185)*2.66);
                      }
                      if(loopCopy==215){
                        if(!hintList[2]){
                          fill(rgb(220,220,220));stroke(rgb(220,25,50));strokeWeight(4);
                          rect(12,12,600,80);
                          fill("black");noStroke();textSize(24);
                          text("Take action to ensure that the CLDC can make a profit\nnext year by selecting one of the four options below!",312,50);
                          if(!typingActive){
                            playSound("audio/correct.mp3");
                            typingActive=true;
                            }
                          }
      
                      loopCopy--;
                      fill(rgb(240,240,240,0.9));stroke("black");strokeWeight(3);
                      rect(150,400,500,200);
                      strokeWeight(4);
                      for(var count = 0; count<4;count++){
                        fill("white");  
                        if(count==proposalSelected)(fill("forestGreen"));
                        rect(255+(count*80),565,60,30);
                      }
                      //text
                      strokeWeight(3);stroke("darkRed");
                      line(200,445,600,445);
                      fill("black");textSize(40);noStroke();
                      text("Profit Action Proposal",400,430);
                      textSize(18);
                      text("[R] Change",202,580);
                      textSize(25);
                      switch(proposalSelected){
                        case 0:
                          //investment opportunity
                          text("1) Investment Opportunity - [E] Select",400, 470);
                          textSize(20);
                          text("The CLDC can invest to raise monthly income.\nPros: Returns $1,000 a month\nCons: Wait 3 months with $5,000 investment cost",400,524);
                          if(keyWentDown("E")){
                            playSound("audio/app_interface_button_3.mp3");
                            proposalDone=true;
                            totProfits-=5000;    
                            incomeArr[13]+=997;
                            hintList[2]=true;
                          }
                          break;
                        case 1:
                          //Community service
                          text("2) Community Service - [E] Select",400, 470);
                          textSize(20);
                          text("The community can reduce the CLDC's expenses.\nPros: Community service reduces more expenses\nCons: Less community service points for clearing litter",400,524);
                          if(keyWentDown("E")){
                            playSound("audio/app_interface_button_3.mp3");
                            proposalDone=true;
                            cMult += 0.5;       
                            litterDebuff += 1;
                            hintList[2]=true;
                          }
                          break;
                        case 2:
                          //Leasing fees
                          text("3) Leasing Fees - [E] Select",400, 470);
                          textSize(20);
                          text("The CLDC can raise leasing fees.\nPros: Raises leasing income by 20% immediately\nCons: Businesses are less likely to invest in the city",400,524);
                          if(keyWentDown("E")){
                            playSound("audio/app_interface_button_3.mp3");
                            proposalDone=true;
                            for(var incNum = 0;incNum<13;incNum++){
                              if(incomeArr[incNum]>0){
                                incomeArr[incNum]*=1.2;
                                offerDebuff+=10;
                                if(offerDebuff>100)(offerDebuff=100);
                              }
                            }  
                            hintList[2]=true;
                          }
                          break;
                        case 3:
                          //Nothing just go broke lmao
                          text("4) Do Nothing - [E] Select",400, 470);
                          textSize(20);
                          text("The CLDC can take no action to raise income.\nPros: None\nCons: The CLDC may continue to go into debt",400,524);
                          if(keyWentDown("E")){
                            playSound("audio/app_interface_button_3.mp3");
                            proposalDone=true;    
                            hintList[2]=true;
                          }
                          break; 
                      }
                      if(keyWentDown("R")){
                        playSound("audio/app_menu_button_2.mp3");
                        proposalSelected++;
                        if(proposalSelected==4)(proposalSelected=0);
                      }
                    }
                    }
                    
                  }
                }
              } else if (loopCopy == 295) {
                  textStart=[355];
                if (incumbentPopularity >= 50) {
                  meetingSprites[10].visible = false;
                  meetingSprites[9].velocityX = 4;
                }
                else {
                  meetingSprites[9].visible = false;
                  meetingSprites[10].velocityX = -4;
                }
              } else if (loopCopy > 295) {
                if(loopCopy==350)(playSound("audio/typing.mp3"));
                if (meetingSprites[9].x == 400 || meetingSprites[10].x == 400) {
                  meetingSprites[9].setVelocity(0, 0); meetingSprites[10].setVelocity(0, 0);
                }
                if (loopCopy > 355) {
                  if (incumbentPopularity >= 50) {
                    fill("forestGreen");stroke("black");strokeWeight(3);
                    rect(95,235,230,70);
                    typeText(leaderNames[leaderNum] + " has won re-election!", 400, 355,30,0,false,"black",loopCopy);
                    textSize(20); 
                    text("Loan payment: +"+(Math.round(loanRate*100)-3) +"%\nContingency Fund: "+Math.round(reserveRate*100)+"%",210,270);
                    
                  } else {
                    fill(rgb(220,100,100));stroke("black");strokeWeight(3);
                    rect(475,235,230,70);
                    typeText(leaderNames[oppositionNum] + " has been elected!", 400, 355,30,0,false,"black",loopCopy);
                    textSize(20); 
                    text("Loan payment: +"+(Math.round(oppositionPolicies[0]*100)-3)+
                         "%\nContingency Fund: "+Math.round(oppositionPolicies[1]*100)+"%",590,270);
                  }
                  if(loopCopy==430)(stopSound("audio/typing.mp3"));
                }
              }


              if (keyWentDown("ENTER")) {
                playSound("audio/app_interface_button_3.mp3");
                meetingControl = 0;
                loopCopy = loopCount + 360;
                meetingLoop += 9000;//default is 9000
                pauseMainFunctions = false;
                meetingSprites.setVisibleEach(false);
                meetingSprites[7].x = 400; meetingSprites[7].y = 650;
                meetingSprites[7].setVelocity(0, 0);
                meetingSprites[9].x=200;meetingSprites[10].x=600;
                meetingSprites[9].velocityX=meetingSprites[10].velocityX=0;
                proposalDone=false;
                proposalSelected=0;
                typingActive=false;
                //check profit history to see if objective "reach $1,000,000 in annual profit" is completed
                if(profitHistory[profitHistory.length-1]>=1000000 && !objListCLDC[7][3]){
                  objListCLDC[7][1]=loopCount;
                  objListCLDC[7][3]=true;
                  objCount++;
                }
                //check for 5k dividends objective
                if(dividends>=5000 && !objListP[6][3]){
                  objListP[6][1]=loopCount;
                  objListP[6][3]=true;
                  objCount++;
                }
                
                if(incumbentPopularity < 50){
                  leaderNum = oppositionNum;
                  loanRate = oppositionPolicies[0];
                  reserveRate = oppositionPolicies[1];
                }
                if(isRaining)(playSound("audio/rain.mp3",true));
                else(playSound("audio/bgTraffic.mp3",true));
                if(fireActive)(playSound("audio/fire.mp3"));
                if(floodActive)(playSound("audio/flood.mp3"));
              }

              break;
            case 5:
              
               textSize(30);fill("black");noStroke();
              text("Item 3: Decision - Create Development Plan", 400, 180);
              //investment choice relocation
              if(introSelection==0){
              //choose esop investment
              textAlign(LEFT,CENTER);
              fill("white");
              rect(100,208,610,86);
              rect(65,383,670,193);
              textSize(35);fill("black");
              text("Encourage Investment by\nEmployee-Owned (ESOP) Companies?",110,250);
              text("Pros: Improves leasing income,\n\t\tkeeps profits in the community\n"+
                   "Cons: Investment offers are less frequent,\n\t\tcost to the CLDC for paid incentives",75,470);
              textAlign(CENTER,CENTER);
              stroke("black");strokeWeight(4);
              if(mouseIsOver(meetingBtns[0])){
                fill(rgb(190,255,210));  
              }else{
                fill(rgb(160,255,180));  
              }
              
              rect(180,310,140,50);//left button
              if(mouseIsOver(meetingBtns[1])){
                fill(rgb(255,180,200)); 
              }else{
                fill(rgb(255,160,180));  
              }
              rect(480,310,140,50);//right button
              fill("black");noStroke();
              text("[E] Yes",250,335);
              text("[R] No",550,335);
                
                

              if(keyWentDown("e") || (mousePressedOver(meetingBtns[0]))){
                playSound("audio/app_interface_button_3.mp3");
                introSelection++;
                esopChosen=true;
                offerDebuff+=10;
                if(offerDebuff>100)(offerDebuff=100);
                
              }else if(keyWentDown("r")|| (mousePressedOver(meetingBtns[1]))){
                playSound("audio/app_interface_button_3.mp3");
                introSelection++;
                esopChosen=false;
              }
            }
              else if(introSelection==1){
              //result from esop choice
              fill("white");noStroke();
              
              stroke("black"); strokeWeight(4);
              if(esopChosen){
                fill(rgb(200,255,220));
                rect(50,228,700,44);
                fill("black"); noStroke(); textSize(35);
                text("Employee-owned investment is encouraged.",400,250);
              }else{
                fill(rgb(255,200,220));
                rect(35,228,730,44);
                fill("black"); noStroke(); textSize(35);
                text("Employee-owned investment isn't encouraged.",400,250);
              }
              
            //Choose infrastructure
                noStroke(); fill("white")
                rect(90,291,620,44);
                rect(53,408,702,94);
            textSize(35);fill("black");
            text("Invest in More Resilient Infrastructure?",400,315);
              text("Pros: Less damage from natural disasters\nCons: Spend more revenue on infrastructure",400,450);
              stroke("black");strokeWeight(4);

              if(mouseIsOver(meetingBtns[2])){
                fill(rgb(190,255,210)); 
              }else{
                fill(rgb(160,255,180));  
              }
              rect(180,345,140,50);//left button
              
              if(mouseIsOver(meetingBtns[3])){
                fill(rgb(255,180,200));
              }else{
                fill(rgb(255,160,180));  
              }
              rect(480,345,140,50);//right button
              
              fill("black");noStroke();
              text("[E] Yes",250,370);
              text("[R] No",550,370);

              if(keyWentDown("e") || (mousePressedOver(meetingBtns[2]) && mouseWentDown("leftButton"))){
                playSound("audio/app_interface_button_3.mp3");
                infrastructureChosen = true;
                introSelection++;
                floodFactor+=150;
                
              }else if(keyWentDown("r") || (mousePressedOver(meetingBtns[3]) && mouseWentDown("leftButton"))){
                playSound("audio/app_interface_button_3.mp3");
                infrastructureChosen = false;
                introSelection++;
                totIncome+=10000;
                totProfits+=10000;
              }
            
            }
              else{
              var esopText = "";
                stroke("black"); strokeWeight(4);
              if(esopChosen){
                fill(rgb(200,255,220));
                rect(50,228,700,44);
                esopText = "Employee-owned investment is encouraged.";
              }else{
                fill(rgb(255,200,220));
                rect(35,228,730,44);
                esopText = "Employee-owned investment isn't encouraged.";
              }
              fill("black");noStroke();textSize(35);
              text(esopText,400,250);
              //show results from infrastructure choice
              stroke("black");strokeWeight(4);
              var infrastructureText = "";
              if(infrastructureChosen){
                fill(rgb(200,255,220));
                rect(110,283,580,44);
                infrastructureText = "Investing in improved infrastructure.";
              }else{
                fill(rgb(255,200,220));
                rect(80,283,640,44);
                infrastructureText = "Not investing in improved infrastructure.";
              }
                noStroke();
                fill("white");
                rect(35, 375, 725, 140);
              fill("black");
              text(infrastructureText,400,305);
              text("Now that the plan for development is created,\nit will come into effect after the CLDC\nelection finishes in the next two steps.",400,445);
            }

              if(keyWentDown('ENTER')){
                meetingControl=3;
                loopCopy=0;
                
                //select opposition leader and policies
                oppositionNum = randomNumber(0, 5);
                while (oppositionNum == leaderNum) {
                  oppositionNum = randomNumber(0, 5);
                }
                meetingSprites[4].setAnimation("leader" + leaderNum);
                meetingSprites[5].setAnimation("leader" + oppositionNum);
                oppositionPolicies = [randomNumber(3, 10) / 100, randomNumber(3, 10) / 100];
                while(oppositionPolicies[0]==loanRate)(oppositionPolicies[0]=randomNumber(3, 10) / 100);
                while(oppositionPolicies[1]==reserveRate)(oppositionPolicies[1]=randomNumber(3, 10) / 100);
                incumbentSelected = true;
              }
              break;
          }
          loopCopy++;
        }
        else {
          //voting cutscreen
          if(loopCopy==votingLoop+15)(playSound("audio/typing.mp3"));
          if(loopCopy==votingLoop+170)(stopSound("audio/typing.mp3"));
          var cutTimeLeft = loopCopy - votingLoop;
          if (cutTimeLeft <= 195) {
            loopCopy++;
            //draw background
            fill(rgb(255, 255, 255, 0.85)); strokeWeight(4); stroke("black");
            rect(20, 90, 760, 390);
            fill(rgb(220, 230, 255)); strokeWeight(2);
            rect(60, 110, 680, 60);
            fill("black"); textSize(44); strokeWeight(0.6);

            text("Voting Results:", 400, 140);
            strokeWeight(2);
            if (cutTimeLeft > 10) {
              fill(rgb(150, 255, 150));
              arc(400, 280, 200, 200, -90, (voteData[2] * 3.6) - 90);
              fill(rgb(255, 150, 150));
              arc(400, 280, 200, 200, (voteData[2] * 3.6) - 90, -90);
              if (cutTimeLeft > 20) {
                fill("forestGreen"); textSize(36); stroke('forestgreen');
                strokeWeight(0.8);
                text("CLDC Members\nin Favor:\n" + voteData[2] + "%", 640, 280);
                fill("darkRed"); stroke('darkred');
                text("CLDC Members\nin Opposition:\n" + (100 - voteData[2]) + "%", 160, 280);

                  if (voteData[2] > 50) {
                    typeText("A majority voted in favor of the offer.\nConstruction will begin shortly.", 400, 430,32,0,false,"forestGreen",loopCopy);
                  } else {
                   typeText("A majority was not in favor of the offer.\nThe plot will remain open to offers.", 400, 430,32,0,false,"darkRed",loopCopy);
                  }
                
              }
            }
            if(keyWentDown("ENTER")&&cutTimeLeft>1){
              playSound("audio/app_interface_button_3.mp3");
              stopSound("audio/typing.mp3");
              votingLoop=loopCopy-194;
            }
            if (cutTimeLeft == 195) {
              offerOpen = false; shareHeader.visible = offerSign.visible = false;
              pauseMainFunctions = false;
              var offer;
              var count;
              if (voteData[1] == "1") {
                offer = offer1;
                count = 0;
              } else if (voteData[1] == "2") {
                offer = offer2;
                count = 1;
              } else if (voteData[1] == "3") {
                offer = offer3;
                count = 2;
              }
              var aLocation = offerLocations[count];
              if (voteData[2] > 50) {
                offer.setAnimation("construction");
                offerIsConstruction[count] = true;
              } else {
                closeMenu();
                offer.x = -50;
                offer.y = -50;
                offerIncome[count] = 0;
                offersAvailable[count] = true;
                if (aLocation >= 0 && aLocation <= 11) {
                  t1LandIsOpen[aLocation] = true;
                } else if (aLocation >= 12 && aLocation <= 17) {
                  t2LandIsOpen[aLocation - 12] = true;
                } else if (aLocation >= 18 && aLocation <= 19) {
                  t3LandIsOpen[aLocation - 18] = true;
                }
                offerLocations[count] = -1;
              }
              offerRatings[count]="";
              voteData = ["none", "0", 50];
            }
          }
        }
       
        //Music hover and mute 
        if(!pauseMainFunctions){
          var musicColor = ""; 
        if(mouseIsOver(music))(musicColor="_red");
        if(muteMusic)(music.setAnimation("noMusic"+musicColor));
        else(music.setAnimation("music"+musicColor));

        if(mousePressedOver(music)&&mouseWentDown("leftButton")){
          playSound("audio/app_interface_button_3.mp3");
          if(muteMusic){
            muteMusic=false;
            playRandomSong();
          }else{
            muteMusic=true;
            stopMusic();
          }
        }
        }
        
        
        //return to main menu if backspace is pressed
        if (keyWentDown("BACKSPACE")) {
          resetGame(true);
          if(!muteMusic)(playSound("audio/TrackTribe - A Night Alone.mp3",true));
        }

  
        //--- DEBUG KEYS ----
        if (keyWentDown("k")) {
          dividends = prompt("Enter dividends for testing");
        }
        //end game for testing        
        if(keyWentDown("v")){
          winLoop=loopCount;
        }
        
        //make player poor for testing only
        if(keyWentDown("z")){
          totProfits=-50000;
          totIncome=-50000;
          totExpenses = 0;
        }
        
        //lightning shocks player for testing only
        if(isRaining && keyWentDown('l')){
          lightningCooldown=loopCount;
          lightning.x=leftChar.x+110;
          lightning.y=leftChar.y-180;
          shockLoop=loopCount;
          playSound("audio/shock.mp3");
          if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
          leftChar.setVelocity(0,-0.2);
        }
        
        //start rain for testing only
        if(keyWentDown('o') && !isRaining){
          rainCooldown=loopCount+15;
        }
        
        //start meeting for testing only
        if(keyWentDown('m')){
          meetingLoop=loopCount+150;
        }
      }


      //end game screen
      else if (level == 3) {
        background(rgb(175, 138, 103));
        drawSprites();
        textAlign('center', 'center');
        if(introControl == 0){
          if(loopCount==1){
            mapSprite.visible=mapSprite1.visible=mapSprite2.visible=true;
          }
          if(loopCount<90){
            if(loopCount!=30)(blackout.shapeColor=rgb(0,0,0,1-((loopCount) / 30)));
          }else if(loopCount<120){
            blackout.shapeColor=rgb(0,0,0,(loopCount-89)/30);
          }else if(loopCount==120){
            mapSprite.visible=false;
            blackout.shapeColor=rgb(0,0,0);
          }else if(loopCount<210){
            if(loopCount!=150)(blackout.shapeColor=rgb(0,0,0,1-((loopCount-120)/30)));
          }else if(loopCount<240){
            blackout.shapeColor=rgb(0,0,0,(loopCount-209)/30);
          }else if(loopCount==240){
            blackout.shapeColor=rgb(0,0,0);
            mapSprite1.visible=false;
          }else if(loopCount<360){
            if(loopCount!=270)(blackout.shapeColor=rgb(0,0,0,1-((loopCount-240)/30)));
          }else if(loopCount<390){
            blackout.shapeColor=rgb(0,0,0,((loopCount-359)/30));
          }else if (loopCount==390){
            introControl++;
            blackout.shapeColor=rgb(210,255,230,0.9);
            confetti.visible = true;
            confetti.setAnimation("confetti");
          }
          
          fill("black");noStroke();
          rect(10,605,780,195);
        }
        else if(introControl == 1){
          textSize(80);
        strokeWeight(8); stroke('black'); 
        fill(190,220,255);
        rect(5, 5, 790, 130);
        
        fill(rgb(210,210,210)); strokeWeight(4);
        rect(5,545,786,250);
        
          fill(190,220,255);
        if (mouseIsOver(tutorialSprites[5])) {
          fill(130, 240, 135);
        }
        strokeWeight(6);
        rect(260, 710, 280, 60);
        fill('black'); noStroke();
        text('Game Complete!', 400, 75);
        textSize(50);
        text('Main Menu', 400, 744);
        
        
        fill('white'); strokeWeight(4); stroke('black');
        rect(60, 563, 685, 62);
        rect(60, 638, 685, 62);
        fill('black'); noStroke();
      
        let secondsString = (gameplayTime[0] < 10) ? "0"+gameplayTime[0] : gameplayTime[0];
        let minutesString = (gameplayTime[1] < 10) ? "0"+gameplayTime[1] : gameplayTime[1];
        let hoursString = (gameplayTime[2] < 10) ? "0"+gameplayTime[2] : gameplayTime[2];
        let totalScore = Number(dividends) + Number(10 * (cPoints + ePoints));
        text('Time Elapsed: ' + secondsString+":"+minutesString+":"+hoursString, 400, 595);
        text('Total Score: ' + addCommas(totalScore) + " pts", 400, 670);

        textAlign('center', 'center'); textSize(30);stroke("black");strokeWeight(0.5);

        text("Thanks to the CLDC, our city is prospering once again.\nThe population has increased,"+
        " more tax revenue is\nbeing generated, and its citizens are now owners.\n\nAs a member of the"+
        "CLDC, you have earned $"+addCommas(Math.round(dividends))+"\nin shareholder dividends and "+
        addCommas(cPoints+ePoints)+" points from\ncommunity service and ownership education.\n\nThe CLDC"+
        " paid a total of $"+addCommas(Math.round(totalPayouts))+" in\ndividends to its members.", 400, 335);

        if (mousePressedOver(tutorialSprites[5])) {
          playSound("audio/app_interface_button_3.mp3");

          //prompt user to enter username for the leaderboard if they qualify
          var timeIndex = -1;
          var myTime = gameplayTime[0]*3600 + gameplayTime[1]*60 + gameplayTime[2];
          var timesSeconds = [topTimes[0][1]*3600 + topTimes[0][2]*60 + topTimes[0][3],
          topTimes[1][1]*3600 + topTimes[1][2]*60 + topTimes[1][3],
          topTimes[2][1]*3600 + topTimes[2][2]*60 + topTimes[2][3]];
          console.log("times: "+myTime + " vs. "+timesSeconds[0] + ", "+timesSeconds[1] + ", "+timesSeconds[2]);
          if (myTime <= timesSeconds[0]) {
            timeIndex = 0;
          } else if (myTime <= timesSeconds[1]) {
            timeIndex = 1;
          } else if (myTime <= timesSeconds[2]) {
            timeIndex = 2;
          }
          var scoreIndex = -1;
          if (totalScore >= highScores[0][1]) {
            scoreIndex = 0;
          } else if (totalScore >= highScores[1][1]) {
            scoreIndex = 1;
          } else if (totalScore >= highScores[2][1]) {
            scoreIndex = 2;
          }
          //prompt for username
          var username = "";
          if ((scoreIndex != -1) || (timeIndex != -1)) {
            username = prompt("Congrats! You placed on the leaderboard!\nEnter a username below, or leave it empty to be unnamed.");
            if ((!username) || (username == "")) {
              username = "<Unnamed>"
            }
            //truncate strings that are too long and wont show anyways
            username = username.substring(0, 50);

            //update the leaderboard and database
            if(scoreIndex != -1){
              var scoresData;
              if (scoreIndex == 0) {
                scoresData = {
                  name1: username,
                  name2: highScores[0][0],
                  name3: highScores[1][0],
                  score1: totalScore,
                  score2: highScores[0][1],
                  score3: highScores[1][1]
                }
              } else if (scoreIndex == 1) {
                scoresData = {
                  name1: highScores[0][0],
                  name2: username,
                  name3: highScores[1][0],
                  score1: highScores[0][1],
                  score2: totalScore,
                  score3: highScores[1][1]
                }
              } else if (scoreIndex == 2){
                scoresData = {
                  name1: highScores[0][0],
                  name2: highScores[1][0],
                  name3: username,
                  score1: highScores[0][1],
                  score2: highScores[1][1],
                  score3: totalScore
                }
              }
  
              updateDoc(scoresDoc, scoresData).then(() => {
                console.log("scoresDoc updated successfully");
              }).catch((error) => {
                console.error("Error updating document: "+error.message);
              });
            }
            if(timeIndex != -1){
              var timesData;
              if (timeIndex == 0) {
                timesData = {
                  name1: username,
                  name2: topTimes[0][0],
                  name3: topTimes[1][0],
                  hours1: gameplayTime[0],
                  minutes1: gameplayTime[1],
                  seconds1: gameplayTime[2],
                  hours2: topTimes[0][1],
                  minutes2: topTimes[0][2],
                  seconds2: topTimes[0][3],
                  hours3: topTimes[1][1],
                  minutes3: topTimes[1][2],
                  seconds3: topTimes[1][3],
                }
              } else if (timeIndex == 1) {
                  timesData = {
                    name1: topTimes[0][0],
                    name2: username,
                    name3: topTimes[1][0],
                    hours1: topTimes[0][1],
                    minutes1: topTimes[0][2],
                    seconds1: topTimes[0][3],
                    hours2: gameplayTime[0],
                    minutes2: gameplayTime[1],
                    seconds2: gameplayTime[2],
                    hours3: topTimes[1][1],
                    minutes3: topTimes[1][2],
                    seconds3: topTimes[1][3],
                  }
              } else if (timeIndex == 2){
                timesData = {
                  name1: topTimes[0][0],
                  name2: topTimes[1][0],
                  name3: username,
                  hours1: topTimes[0][1],
                  minutes1: topTimes[0][2],
                  seconds1: topTimes[0][3],
                  hours2: topTimes[1][1],
                  minutes2: topTimes[1][2],
                  seconds2: topTimes[1][3],
                  hours3: gameplayTime[0],
                  minutes3: gameplayTime[1],
                  seconds3: gameplayTime[2],
                }
              }
  
              updateDoc(timesDoc, timesData).then(() => {
                console.log("fastestTimes updated successfully");
              }).catch((error) => {
                console.error("Error updating document: "+error.message);
              });
            }
            
          }
          resetGame(true);
          if(!muteMusic)(playSound("audio/TrackTribe - A Night Alone.mp3",true));
        }
        }
      }

      if(keyWentDown('T')){
          playSound("audio/app_interface_button_3.mp3");
          tipsSheetOpen=!tipsSheetOpen;
        }
      
      //Right side menu 
      fill(rgb(110,80,40));noStroke();
      rect(800,0,800,800);
      
      //objective logic
      fillObjList();
      
      //middle line
      stroke('black'); strokeWeight(2); textFont('Tahoma');
      line(1200, 0, 1200, 800);
    
      //left header
      fill(rgb(200, 200, 200));
      rect(808, 5, 384, 60);
      //yellow background
      fill(rgb(255, 242, 204));
      rect(808, 66, 384, 260);
      //yellow header
      fill(rgb(255, 229, 153));
      rect(808, 65, 384, 50);
    
        //light blue background
        fill(rgb(225, 252, 255));
        rect(808, 336, 384, 200);
        //light blue header
        fill(rgb(176, 247, 255));
        rect(808, 335, 384, 50);

        //blue background
        fill(rgb(207, 226, 243));
        rect(808, 546, 384, 240);
        //blue header
        fill(rgb(159, 197, 232));
        rect(808, 545, 384, 50);
      

      //right header
      fill(rgb(110, 185, 110));
      rect(1208, 5, 384, 40);
      //green background
      fill(rgb(217, 234, 211));
      rect(1208, 45, 384, 281);
      //Objective subheader
      fill(rgb(110, 185, 110));
      rect(1208, 190, 384, 40);
    
        //controls background
        fill(rgb(72, 72, 72));
        rect(1208, 336, 384, 450);
        //controls header
        fill(rgb(200, 200, 200));
        rect(1208, 335, 384, 45);
        if(!tipsSheetOpen){
          //movement header
          fill(rgb(200, 200, 200));
          rect(1218, 385, 364, 30);
          //movement controls
          for (var x = 0; x < 5; x++) {
            stroke('black');
            //left input box
            fill(controlsColors[x]);
            rect(1218, 421 + (x * 36), 120, 30);
            //right controls box
            fill('white');
            rect(1388, 421 + (x * 36), 194, 30);

            //connecting line and arrow
            stroke(rgb(220, 220, 220)); fill(rgb(220, 220, 220));
            line(1342, 436 + (x * 36), 1384, 436 + (x * 36));
            shape(1384, 436 + (x * 36), 1374, 432 + (x * 36), 1374, 440 + (x * 36));
        }

        //interaction header
        fill(rgb(200, 200, 200)); stroke('black');
        rect(1218, 602, 364, 30);
        //interaction controls
        for (var x = 0; x < 4; x++) {
          stroke('black');
          //left input box
          fill(controlsColors[x + 5]);
          rect(1218, 638 + (x * 36), 120, 30);
          //right controls box
          fill('white');
          rect(1388, 638 + (x * 36), 194, 30);

          //connecting line and arrow
          stroke(rgb(220, 220, 220)); fill(rgb(220, 220, 220));
          line(1342, 653 + (x * 36), 1384, 653 + (x * 36));
          shape(1384, 653 + (x * 36), 1374, 649 + (x * 36), 1374, 657 + (x * 36));
        }
        }
        else{
          fill(rgb(160, 190, 255));
          rect(1218, 385, 364, 30);
          fill("white");
          rect(1218,415,364,190);
          rect(1218,640,364,140);
          fill(rgb(255, 255, 160));
          rect(1218, 610, 364, 30);
          
        }
        
      
      //financials boxes
      //yellow "CLDC Financials"
      stroke(rgb(50, 50, 50)); strokeWeight(4);
      for (var i = 0; i < 3; i++) {
        fill('white');
        rect(818, 126 + (i * 46), 194, 34);
        fill(menuColors[i]);
        rect(1012, 126 + (i * 46), 165, 34);
      }
      line(815, 267, 1180, 267);
      fill(rgb(201, 218, 248));
      rect(818, 280, 194, 34);
      fill(menuColors[3]);
      rect(1012, 280, 165, 34);

        //Light blue "CLDC Loans"
        for (var y = 0; y < 3; y++) {
          fill('white');
          rect(818, 396 + (y * 46), 194, 34);
          fill(menuColors[y + 4]);
          rect(1012, 396 + (y * 46), 165, 34);
        }

        //blue "Your CLDC Scorecard:"
        for (var z = 0; z < 3; z++) {
          fill(scorecardColors[z]);
          rect(818, 605 + (z * 46), 194, 34);
          fill(menuColors[z + 7]);
          rect(1012, 605 + (z * 46), 165, 34);
        }
        //"scores" lowest scorecard box
        fill("white");
        rect(818, 605 + (z * 46), 80, 34);
        fill(scorecardColors[3]);
        rect(898, 605 + (z * 46), 155, 34);
        fill(scorecardColors[4]);
        rect(1053, 605 + (z * 46), 125, 34);
      
      //CLDC objective boxes
      for (var za = 0; za < 3; za++) {
        fill(objColors[za]);
        rect(1223, 56 + (za * 42), 355, 32);
      }
      //Player objective boxes
      for (var za = 0; za < 2; za++) {
        fill(objColors[za + 3]);
        rect(1223, 241 + (za * 42), 355, 32);
      }

      //Menu text
      textSize(34); strokeWeight(1); stroke('black');
      textAlign(CENTER, CENTER); fill('black');
      text("Player Scorecard", 1000, 38);
    
      if(!tipsSheetOpen){
        text("Controls", 1380, 360);
        
        textSize(20);fill(rgb(220,25,50));
        stroke(rgb(220,25,50));strokeWeight(0.5);
        text("[T] Show Tips",1515,365);
        noStroke();
        textSize(24);fill("black");
        text("Movement", 1400, 401);
        text("Interaction", 1400, 618);
      }
      else{
        text("Tips", 1380, 360);
        stroke(rgb(220,25,50));strokeWeight(0.5);
        textSize(20);fill(rgb(220,25,50));
        text("[T] Show Controls",1502,365);
        noStroke();
        textSize(24);fill("black");
        text("Land Development Process", 1400, 401);
        text("Other Information", 1400, 626);
        textSize(18);textAlign(LEFT, CENTER);
        text("1. Develop a land plot: stand on the plot\n    and press [E] to invest in it.\n2. Begin the vote: When an offer appears\n    (sign w/ arrows), press [E] or [R].\n3. Advocate: Make the vote pass or fail\n    by holding [E] on citizens that appear.\n4. Finish construction: If the vote passes,\n    press [E] on the construction site.",1230,510);
        text("• Use the recycling center for double points\n   by bringing litter to it and pressing [E].\n• A clean-up event must be active to pick\n   up litter - press [F] to start one.\n• To complete the game, develop the city\n   and do 10 objectives from the list above.",1230,710);
      }
      
      textAlign(CENTER, CENTER);
      noStroke();
      textSize(28);
      text("CLDC Objectives", 1400, 27);
      text("Citizen-Owner Objectives", 1400, 212);
      text("Annual CLDC Financials:", 1000, 94);

        text("CLDC Loans:", 1000, 364);
        text("Your CLDC Scorecard:", 1000, 574);

        textSize(24);
      if(!tipsSheetOpen){
        //Movement text
        text("W or ↑", 1275, 438); text("Move Up", 1485, 437);
        text("S or ↓", 1275, 473); text("Move Down", 1485, 473);
        text("A or ←", 1275, 509); text("Move Left", 1485, 509);
        text("D or →", 1275, 545); text("Move Right", 1485, 545);
        text("SHIFT", 1275, 581); text("Sprint", 1485, 581);

        //Interaction text
        text("E", 1275, 655); text("Select / Buy", 1485, 655);
        text("ENTER", 1275, 691); text("Skip", 1485, 691);
        text("F", 1275, 727); text("Clear Litter", 1485, 727);
        text("R", 1275, 763); text("Change Selection", 1485, 763);
      }
        
      
      //Yellow ""CLDC Financials" text
      textSize(22); textAlign(LEFT, CENTER);
      text("Revenue", 825, 145);
      text("Loan Repayments", 825, 191);
      text("Other Expenses", 825, 237);
      text("Profits", 825, 299);

        //light blue "CLDC Loans" text
        text("Total Loans", 825, 415);
        text("Loan Repayments", 825, 461);
        text("Loan Balance", 825, 507);
        textSize(22);

        //blue "Your CLDC Scorecard" text
        text("Dividends Earned", 825, 625);
        textSize(19);
        text("Ownership Education", 825, 671);
        textSize(21);
        text("Community Service", 825, 717);
        textSize(22);
        text("Scores", 825, 763);
      
      
      textSize(22);
      //Objective list text
      text(curObjListCLDC[0], 1228, 74);
      text(curObjListCLDC[1], 1228, 116);
      text(curObjListCLDC[2], 1228, 158);
      
      text(curObjListP[0], 1228, 259);
      text(curObjListP[1], 1228, 301);
      
      //Financials number text
      text("$" + addCommas(Math.round(totIncome)), 1020, 145);
      text("$" + addCommas(Math.round(totLoanPay)), 1020, 191);
      text("$" + addCommas(Math.round(totExpenses)), 1020, 237);

      //move money counter after updating it
      var negSign = '';
      if(totProfits<0)(negSign='-');
      if (cMoneyUpdateCount + 2 > loopCount) (text(negSign+"$" + addCommas(Math.round(totProfits)), 1020, 297));
      else (text(negSign+"$" + addCommas(Math.round(totProfits)), 1020, 301));

        //loans number text
        if (loansUpdateCount + 2 > loopCount) (text("$" + addCommas(Math.round(totLoans)), 1020, 410));
        else (text("$" + addCommas(Math.round(totLoans)), 1020, 415));
        text("$" + addCommas(Math.round(totLoanPay)), 1020, 461);
        text("$" + addCommas(Math.round(totLoans - totLoanPay)), 1020, 507);

        //scorecard number text
        text("$" + addCommas(Math.round(dividends)), 1020, 625);
        text(addCommas(ePoints), 1020, 671);
        if (cUpdateCount + 2 > loopCount) (text(addCommas(cPoints), 1020, 712));
        else (text(addCommas(cPoints), 1020, 717));
        text("$"+addCommas(Math.round(dividends)), 905, 763);
        text(addCommas(ePoints + cPoints), 1060, 763);
      
      
      textAlign(CENTER, CENTER);
      //end right side menu

      //hide menu during annual meeting
      if(meetingControl>0){
        spotlight(10,10,780,680);
      }
      
      //Intro animation / tutorial graphics
      if(level == 1){
        textAlign(CENTER,CENTER);
        if(introControl==0){
          
        if(loopCount<380){
          //go back to main menu if backspace is pressed
          if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            resetGame(true);
            if(!muteMusic)(playSound("audio/TrackTribe - A Night Alone.mp3",true));
          }
          if (keyWentDown("ENTER")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=379;
            textStart[0]=15;
          }

          spotlight(0,0,0,0);
          if(loopCount==10)(playSound("audio/typing.mp3"));
          if(loopCount==15){
            textStart.push(15);
          }
          typeText("Welcome!\n    \nAs a long-term member of the community,\nyou know that our city has changed\na lot since you first moved here...",400,350,40,0,false,"white",loopCount);
          if(loopCount==270){
            stopSound("audio/typing.mp3");
            stopMusic();
          }
          if(loopCount==375)(playSound("audio/typing.mp3"));
        }
        else if(loopCount<760){
          if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=0;
          }
          if (keyWentDown("ENTER")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=759;
            textStart=[15,380];
          }
          spotlight(10,10,780,460);
          if(loopCount==380)(textStart.push(380));
          typeText("The north side, your home, has fallen\ninto a state of disrepair and poverty.\nCrime is rampant, and the land is empty.",400,570,40,1,false,"white",loopCount);
          if(loopCount==620)(stopSound("audio/typing.mp3"));
        }
        else if(loopCount<1100){
          if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=379;
          }
          if (keyWentDown("ENTER")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=1095;
            textStart=[15,380,770];
          }
          spotlight(10,500,780,190);
          if(loopCount==765)(playSound("audio/typing.mp3"));
          if(loopCount==770)(textStart.push(770));
          typeText("Meanwhile, the south side has only\ngotten richer and has become a regional\nhub for economic activity." ,400,330,40,2,false,"white",loopCount);
          if(loopCount==970)(stopSound("audio/typing.mp3"));
        }
        else if(loopCount<1880){
          if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=759;
          }
          if (keyWentDown("ENTER")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=1879;
            textStart=[1880];
          }
          
          spotlight(0,0,0,0);
          if(loopCount==1105)(playSound("audio/typing.mp3"));
          if(loopCount==1110)(textStart.push(1110));
          typeText("Fortunately, there is a way to redevelop\nand breathe new life into our city!\n   \nBy forming an organizational tool known as\na Citizen's Land Development Coop (CLDC),\nthe north side can be economically REBORN\nwithout creating government debt!\n   \nThe CLDC works in eight phases...",400,320,35,3,false,"white",loopCount);
          if(loopCount==1680)(stopSound("audio/typing.mp3"));
          if(loopCount==1875){
            playSound("audio/typing.mp3");
            textStart=[1880];
          }
        }
        else {
          if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
            loopCount=1099;
            textStart=[15,380,770];
          }
          if (keyWentDown("ENTER")&&!pauseMainFunctions) {
            stopLongSounds(false);
            stopMusic();
            loopCount=0;
            introControl=1;
            textStart=[];
          }

          spotlight(0,0,0,0);
          fill(rgb(190,200,255));stroke(rgb(200,220,255));strokeWeight(0.25);textSize(30);
          text("Phases of CLDC Development",400,30);
          strokeWeight(3);
          line(200,44,600,44);
          
          textAlign(LEFT,CENTER);
          typeText("1) Form the CLDC - ☑ DONE\n\n2) Get the blighted properties donated to\nthe CLDC by the city - ☑ DONE\n\n3) Create the plan for development - ☑ DONE\n\n4) Introduce the plan to businesses - ☑ DONE\n\n5) Get contracts promising to lease CLDC\nproperties when developed - ☑ DONE\n\n6) Use the contracts to secure the loans\nrequired to implement the plan - ☑ DONE",40,370,35,0,false,"white",loopCount);
          textAlign(CENTER,CENTER);
              if(loopCount == 2560){
                stopSound("audio/typing.mp3");
              }
              if(loopCount==2820){
                  stopLongSounds(false);
                  stopMusic();
                  loopCount=0;
                  introControl=1;
                  textStart=[];
                }
          }
          textSize(30);fill("white");noStroke();
          text('[BACKSPACE] Back   |   [ENTER] Skip   |   [P] Pause', 400, 754);
        }
        else if(introControl==1){
          if(loopCount<600){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              introControl=0;
              loopCount=1879;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=599;
              textStart=[1];
            }
            spotlight(0,0,0,0);
            fill(rgb(190,200,255));stroke(rgb(190,200,255));strokeWeight(0.25);textSize(30);
          text("Phases of CLDC Development",400,30);
          strokeWeight(3);
          line(200,44,600,44);
          if(loopCount==1){
            textStart.push(1);
            playSound("audio/typing.mp3");
          }
            textAlign(LEFT,CENTER);
          typeText("That leaves us with the last two phases!\n  \n7) Develop the land & properties\n\n8) Lease the properties to repay the loans\nand generate dividends for the owners\n\nThese goals are for you to complete --\nLet's get started!",40,350,35,0,false,"white",loopCount);
            textAlign(CENTER,CENTER);
            if(loopCount==455)(stopSound("audio/typing.mp3"));
            if(loopCount==595)(playSound("audio/typing.mp3"));
          }
          else if(loopCount<970){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=0;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=969;
              textStart=[1,600];
            }
            spotlight(800,0,800,800);
            if(loopCount==600)(textStart.push(600));
            typeText("The right half of the screen is where important\ninformation is located, like financials, statistics,\nobjectives, and controls.",400,350,35,1,false,"white",loopCount);
            if(loopCount==850)(stopSound("audio/typing.mp3"));
            if(loopCount==965)(playSound("audio/typing.mp3"));
          }
          else if(loopCount<1490){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=599;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=1489;
              textStart=[1,600,970];
            }
            spotlight(808,66,384,260);
            if(loopCount==970)(textStart.push(970));
            typeText("This area shows the CLDC's cumulative annual\nrevenue, expenses, and profit. Any profits\nexceeding the reserve minimum are distributed\nas dividends to CLDC members\nat the annual shareholder meeting.",400,350,35,2,false,"white",loopCount);
            if(loopCount==1360)(stopSound("audio/typing.mp3"));
            if(loopCount==1455)(playSound("audio/typing.mp3"));
          }
          else if(loopCount<1810){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=969;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=1809;
              textStart=[1,600,970,1490];
            }
            spotlight(808,336,384,200);
            if(loopCount==1490)(textStart.push(1490));
            typeText("This area shows the CLDC's cumulative\nloans, loan repayments, and loan balance\n(the difference).",400,350,35,3,false,"white",loopCount);
            if(loopCount==1680)(stopSound("audio/typing.mp3"));
            if(loopCount==1775)(playSound("audio/typing.mp3"));
          }
          else if(loopCount<2280){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=1489;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=2279;
              textStart=[1,600,970,1490,1810];
            }
            spotlight(808,546,384,240);
            if(loopCount==1810)(textStart.push(1810));
            typeText("This area shows your scores including\ndividends, ownership education points, and\ncommunity service points. These are helpful for\ncompleting objectives and reducing expenses.",400,350,35,4,false,"white",loopCount);
            if(loopCount==2150)(stopSound("audio/typing.mp3"));
            if(loopCount==2245)(playSound("audio/typing.mp3"));
          }
          else if(loopCount<2570){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=1809;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=2569;
              textStart=[1,600,970,1490,1810,2280];
            }
            spotlight(1208,5,384,321);
            if(loopCount==2280)(textStart.push(2280));
            typeText("This area shows some current objectives\nto guide your progress renovating the city.",400,350,35,5,false,"white",loopCount);
            if(loopCount==2440)(stopSound("audio/typing.mp3"));
            if(loopCount==2535)(playSound("audio/typing.mp3"));
          }
          else if(loopCount<2960){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=2279;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              loopCount=2959;
              textStart=[1,600,970,1490,1810,2280];
            }
            spotlight(1208,336,384,450);
            if(loopCount==2570)(textStart.push(2570));
            typeText("This area shows the controls to play the game\nand a tips sheet that can be shown/hidden\nby pressing [T]. Reference this if you\naren't sure what to do.",400,350,35,6,false,"white",loopCount);
            if(loopCount==2780)(stopSound("audio/typing.mp3"));
          }
          else if(loopCount==2960){
            stopLongSounds(false);
            introControl=2;
            loopCount=0;
            introSelection = 0;
            //open menu, place character
            educationLevelLeft.visible = leftChar.visible = charHead.visible = music.visible=true;
            textStart=[1];
          }
          textSize(30);fill("white");
          text('[BACKSPACE] Back   |   [ENTER] Skip   |   [P] Pause', 400, 754);
          if(loopCount>=600){
            fill(rgb(190,255,200));stroke(rgb(200,255,200));strokeWeight(0.25);textSize(30);
          text("Menu Explanation",400,30);
          strokeWeight(3);
          line(275,44,525,44);
          }
        }
        else if(introControl==2){
          noStroke();fill(rgb(0,0,0,0.6));
          rect(40,10,720,50);
          fill("white");textSize(30);
          text('[BACKSPACE] Back   |   [ENTER] Skip   |   [P] Pause', 400,32);
          //gameplay walkthrough
               if(introSelection == 0){
                if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
                  stopSound("audio/typing.mp3");
                  introControl=1;
                  loopCount=2569;
                  introSelection = 0;
                  textStart=[1,600,970,1490,1810,2280];
                  educationLevelLeft.visible = leftChar.visible = charHead.visible = music.visible=false;
                  leftChar.x=400;leftChar.y=200;
                  if (charNum == 1) {
                    leftChar.setAnimation("leftDown");
                  } else if (charNum == 3) {
                    leftChar.setAnimation("rightDown");
                  } else if (charNum == 2) {
                    leftChar.setAnimation("bDown");
                  } else {
                    leftChar.setAnimation("aDown");
                  }
                  walkthroughLoops[0] = -1;
                }
                
                if(keyWentDown("ENTER")&&!pauseMainFunctions){
                  stopSound("audio/typing.mp3");
                  introSelection=1;
                  loopCount=0;
                  textStart.push(1);
                }

                if(loopCount==1)(playSound("audio/typing.mp3"));
            //Explain movement
            typeText("There you are! Use W-A-S-D or the arrow keys to move!",400,380,30,0,true,"white",loopCount);
            if(loopCount==110)(stopSound("audio/typing.mp3"));
            stroke("darkRed");strokeWeight(5);
            line(400,360,leftChar.x,leftChar.y+40);
            circle(leftChar.x,leftChar.y,50,80,"darkRed");
            if((keyWentDown("w")||keyWentDown("a")||keyWentDown("s")||keyWentDown("d")||
              keyWentDown("UP_ARROW")||keyWentDown("LEFT_ARROW")||
              keyWentDown("RIGHT_ARROW")||keyWentDown("DOWN_ARROW")))(walkthroughLoops[0]=loopCount+45);

              if(walkthroughLoops[0]==loopCount){
                introSelection=1;
                loopCount=0;
                textStart.push(1);
                stopSound("audio/typing.mp3");
              }
          }
          else if(introSelection == 1){

            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
                  stopSound("audio/typing.mp3");
                  introSelection = 0;
                  loopCount=0;
                  textStart=[1,1];
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              introSelection=2;
              loopCount=0;
              textStart.push(1);
            }

            if(loopCount==1)(playSound("audio/typing.mp3"));
            //explain sprint
            typeText("Hold [SHIFT] while moving to sprint. Watch the cooldown!",400,380,28,1,true,"white",loopCount);
            if(loopCount==110)(stopSound("audio/typing.mp3"));
            //red circle over sprint cooldown
            if(loopCount>80){
              stroke("darkRed");strokeWeight(5);
              line(400,400,400,740);
              circle(400,760,210,80,"darkRed");
            }
            if(keyWentDown("SHIFT"))(walkthroughLoops[1]=loopCount+45);
            
            if(walkthroughLoops[1]==loopCount){
              introSelection=2;
              loopCount=0;
              textStart.push(1);
              stopSound("audio/typing.mp3");
            }
          }
          else if(introSelection == 2){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              stopSound("audio/typing.mp3");
              introSelection = 1;
              loopCount=0;
              textStart=[1,1,1];
              leftChar.x=400;leftChar.y=200;
          }
          if (keyWentDown("ENTER")&&!pauseMainFunctions) {
            stopSound("audio/typing.mp3");
              leftChar.x=t1Land[4].x; leftChar.y=t1Land[4].y;
              introSelection=3;
              loopCount=0;
              textStart.push(1);
          }

           //Move to top right land plot
            if(loopCount==1)(playSound("audio/typing.mp3"));
            typeText("Move to the top right land plot to develop it!",400,380,30,2,true,"white",loopCount);
            if(loopCount==100)(stopSound("audio/typing.mp3"));
            if(loopCount>80){
              stroke("darkRed");strokeWeight(5);
              line(leftChar.x+15,leftChar.y,landLocations[4][0]-35,landLocations[4][1]+35);
              circle(landLocations[4][0],landLocations[4][1],100,100,"darkRed");
            }
            if(charBoxLeft.isTouching(t1Land[4])){
              stopSound("audio/typing.mp3");
              introSelection=3;
              loopCount=0;
              textStart.push(1);
            }
          }
          else if(introSelection == 3){
          
            //Invest in land plot, place offer, and advocate in vote
            if(plotsCompletedLeft==0){
              if(loopCount==1){
                playSound("audio/typing.mp3");
                typingActive=true;
              }
            //Land functions menu
            if(charBoxLeft.isTouching(t1Land[4]) && !t1PlotIsCompleted[4]){
              openT1Menu(4);
              t1Functions(4);
            }else if(menuOpen){
              closeMenu();
            }
            noStroke();fill(rgb(0,0,0,0.6));
            rect(20,315,750,135);
            typeText("Stand on the land and press [E] for the CLDC to develop\nthe land. Later, you can press [R] to switch between\npaying with profits and loans.",400,380,28,3,false,"white",loopCount);
              if(loopCount==330)(stopSound("audio/typing.mp3"));

              if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
                stopSound("audio/typing.mp3");
                introSelection=2;
                loopCount=0;
                textStart=[1,1,1,1];
                leftChar.x=400;leftChar.y=200;
                closeMenu();
              }
              if (keyWentDown("ENTER")&&!pauseMainFunctions) {
                stopSound("audio/typing.mp3");
                totIncome-=15000;
                totProfits-=15000;
                t1PlotIsCompleted[4]=true;
                plotsCompletedLeft++;
                t1Land[4].shapeColor=rgb(20,100,20);
                t1Buildings[4].setAnimation("t1FenceGrass");
                buildRoads(1,4,false,false);
                t1LandIsOpen[4]=true;
                roadCooldowns[4] = loopCount-149;
                t1Land[4].visible=true;
                t1Roofs[4].visible=initOpent1[4]=t1BuildingPlaced[4]=false;
              }
            }
            else{
            //build roads, place offer
              if(loopCount==roadCooldowns[4]+1&&typingActive){
                stopSound("audio/typing.mp3");
                typingActive=false;
              }
            if(menuOpen)(closeMenu());
             
          if (roadCooldowns[4] + 90 == loopCount) {
            buildRoads(1, 4, false, false);
            t1LandIsOpen[4] = true;
          }else if(roadCooldowns[4] + 150==loopCount){
            offerIncome[0] = (randomNumber(140, 180)) * 5;
            if(esopChosen)(offerIncome[0]=Math.round(offerIncome[0]*1.1));
            offer1.x=landLocations[4][0]; offer1.y=landLocations[4][1];
            textStart[4]=loopCount+1;
            
          }else if(roadCooldowns[4] + 150 < loopCount){
           if(offerOpen){
             shareHeader.visible = offerSign.visible = false;
            educationLevelLeft.visible = charHead.visible = music.visible = true;
            offerOpen = false; 
            }

            noStroke();fill(rgb(0,0,0,0.6));
            rect(25,310,750,135);
            
            if(voteData[0]=="none"&&votingLoop<0){
              var textStartCount = textStart[4]+360;
            if(charBoxLeft.isTouching(offer1)&&(loopCount>textStartCount)){
              if(!typingActive&&loopCount<textStartCount+300){
                typingActive=true;
                playSound("audio/typing.mp3");
              }
              typeText("Here you can see the offer's income and rating.\nNow press [E] to support the offer and initialize\na CLDC vote. Later, you can press [R] to oppose it.",400,380,30,5,false,"white",loopCount);
              if(loopCount==textStartCount+300)(stopSound("audio/typing.mp3"));
              offerMenu(1,false);
              stroke("darkRed");strokeWeight(5);
              line(400,445,400,670);
              circle(400,750,800,150,"darkRed");

              if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
                loopCount=roadCooldowns[4]+149;
              }
              if (keyWentDown("ENTER")&&!pauseMainFunctions) {
                resetCleanUp();
                voteData[0] = "support";
                voteData[1] = 1 + "";
                voteData[2]=randomNumber(204,240)/4
                voteLoop = loopCount;
                //start spawning vote sprites
                lJobCooldown = loopCount - 85;
              }
            }
            else if(loopCount<textStartCount){
              if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
                totIncome+=15000;
                totProfits+=15000;
                t1PlotIsCompleted[4]=false;
                plotsCompletedLeft=0;
                t1Land[4].shapeColor=rgb(0,0,0,0.1);
                t1Buildings[4].setAnimation("t1LandRuin");
                
                //reset street animations
                streets[5].setAnimation("bridgeVert2");
                streets[6].setAnimation("streetVert2");

                t1LandIsOpen[4]=true;
                roadCooldowns[4] = -360;
                offer1.x=offer1.y=-50;
              }
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
                textStart[5]=textStartCount;
                loopCount=textStartCount;
              }

              if(loopCount==textStart[4]+2){
                playSound("audio/typing.mp3");
                typingActive=true;
              }
              typeText("Congrats, this plot is now developed and someone\njust offered to move in and pay leasing fees!\nMove to the offer to see its potential income.",
                         400,380,30,4,false,"white",loopCount);
              if(loopCount==textStartCount-80){
                stopSound("audio/typing.mp3");
                 typingActive = false;
              }
                if(charBoxLeft.isTouching(offer1)){
                textStart[5]=loopCount;
                offerMenu(1,false);
                  if(keyWentDown('e')){
                    stopSound("audio/typing.mp3");
                    typingActive=false;
                  }
              }
              
            }
            else if(loopCount==textStartCount){
              textStart[5]=loopCount;
            }
            else if(loopCount>textStartCount){
              if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
                loopCount=roadCooldowns[4]+149;
              }
              if (keyWentDown("ENTER")&&!pauseMainFunctions) {
                resetCleanUp();
                voteData[0] = "support";
                voteData[1] = 1+"";
                voteData[2]=randomNumber(204,240)/4
                voteLoop = loopCount;
                //start spawning vote sprites
                lJobCooldown = loopCount - 85;
                textStart[6]=loopCount+1;
              }

              stroke("darkRed");strokeWeight(5);
              line(leftChar.x+15,leftChar.y,landLocations[4][0]-30,landLocations[4][1]+30);
              circle(landLocations[4][0],landLocations[4][1],80,80,"darkRed");
              noStroke();
              fill("white");
              text("Move to the investment offer to continue.",400,380);
              stopSound("audio/typing.mp3");
              typingActive = false;
            }
          }
            else{   
          if(charBoxLeft.isTouching(offer1))(offerMenu(1,false));
          if(loopCount==voteLoop+1){
            textStart[6]=voteLoop+1;
            progressMessageLeft = "[E] Advocate";
            //place advocacy sprite
            jobSprites[0].setAnimation("no_" + advocacyPlayer[0]);
            jobSprites[0].visible = true;
            jobSprites[0].x = streets[15].x; jobSprites[0].y = streets[15].y;
          }
          if(leftChar.isTouching(jobSprites[0])){
            noStroke();fill("white");
            text("Hold [E] while next to the voter to improve\nthe chances of the vote passing!",400,380);
            advocacyFunctions(0);
            stopSound("audio/typing.mp3");
            typingActive=false;
            if (jobProgressLeft != 0 && !pauseMainFunctions) {
              fill("black");
          rect(50, 536, 300, 50);
          fill('white');
          rect(56, 542, 288, 38);
          fill('lightGreen');
          rect(56, 542, 288 * jobProgressLeft, 38);
          fill('black'); textSize(30);
          text(progressMessageLeft, 200, 562);
        }
          }else if(jobSprites[0].x != -50){
              if(loopCount==voteLoop+1 || (!typingActive && loopCount<voteLoop+225)) {
                playSound("audio/typing.mp3");
                typingActive=true;
              }
            typeText("The vote has started! See voting information below.\nYou have 30 seconds to talk to voters to pass the\nvote.",400,380,30,6,false,"white",loopCount);
            if(loopCount==voteLoop+225)(stopSound("audio/typing.mp3"));
            stroke("darkRed");strokeWeight(5);
            line(leftChar.x-15,leftChar.y,streets[15].x+40,streets[15].y);
            circle(streets[15].x,streets[15].y,70,70,"darkRed");  
          }


        if(voteData[0]!="none"){
        //wait one second after finishing to reset sprite
          if (advocacyLoop[0] + 30 == loopCount) {
            votesComplete[0] = false;
            jobSprites[0].x = -50; jobSprites[0].y = -50;
            voteLoop=loopCount-870;
            stopSound("audio/typing.mp3");
            typingActive = false;
          }

        if (!pauseMainFunctions) {
            //graphics
            strokeWeight(1); fill("black"); stroke("black");
            rect(420, 536, 360, 50);
            fill(rgb(255, 170, 170));
            rect(426, 542, 268, 38);
            fill(rgb(170, 255, 170));
            rect(426, 542, 268 * (voteData[2] / 100), 38);
            fill('black'); textSize(30);
            text("For           Against", 560, 562);
            fill("white");
            rect(702, 542, 70, 38);
            fill("black");
            var timeLeft = 30 - Math.round((loopCount - voteLoop) / 30);
  
            text(timeLeft, 736, 562);
            stroke("black"); strokeWeight(6);
            line(560, 542, 560, 547);
            line(560, 580, 560, 574);
          }
              
            //start the voting cutscreen
          if (timeLeft == 0) {
            //end the pre-voting period
            voteData[0] = "none";
            votingLoop = loopCount;
            textStart=[loopCount+20];
            loopCopy = loopCount;
            jobSprites[0].x=-50;jobSprites[0].y=-50;
            if (charNum == 1) {
              leftChar.setAnimation("leftDown");
            } else if (charNum == 3) {
              leftChar.setAnimation("rightDown");
            } else if (charNum == 2) {
              leftChar.setAnimation("bDown");
            } else {
              leftChar.setAnimation("aDown");
            }
            leftChar.setVelocity(0, 0);
            pauseMainFunctions = true;
          }
        }
              //voting cutscreen
          var cutTimeLeft = loopCopy - votingLoop;
          if (cutTimeLeft <= 195 && !educationOpen) {
            loopCopy++;
            if(cutTimeLeft==15){
              playSound("audio/typing.mp3");
              typingActive=true;
            }
            else if(cutTimeLeft==170){
              stopSound("audio/typing.mp3");
              typingActive = false;
            }
            //draw background
            fill(rgb(255, 255, 255, 0.85)); strokeWeight(4); stroke("black");
            rect(20, 90, 760, 390);
            fill(rgb(220, 230, 255)); strokeWeight(2);
            rect(60, 110, 680, 60);
            fill("black"); textSize(44); strokeWeight(0.6);

            text("Voting Results:", 400, 140);
            strokeWeight(2);
            if (cutTimeLeft > 10) {
              fill(rgb(150, 255, 150));
              arc(400, 280, 200, 200, -90, (voteData[2] * 3.6) - 90);
              fill(rgb(255, 150, 150));
              arc(400, 280, 200, 200, (voteData[2] * 3.6) - 90, -90);
              if (cutTimeLeft > 20) {
                fill("forestGreen"); textSize(36); stroke('forestgreen');
                strokeWeight(0.8);
                text("CLDC Members\nin Favor:\n" + voteData[2] + "%", 640, 280);
                fill("darkRed"); stroke('darkred');
                text("CLDC Members\nin Opposition:\n" + (100 - voteData[2]) + "%", 160, 280);
                
                  if (voteData[2] > 50) {
                    typeText("A majority voted in favor of the offer.\nConstruction will begin shortly.", 400, 430,32,0,false,"forestGreen",loopCopy);
                  } else {
                   typeText("A majority was not in favor of the offer.\nThe plot will remain open to offers.", 400, 430,32,0,false,"darkRed",loopCopy);
                  }
              }
            }
            if (cutTimeLeft == 195) {
              offerOpen = false; shareHeader.visible = offerSign.visible = false;
              pauseMainFunctions = false;
              if (voteData[2] > 50) {
                offer1.setAnimation("construction");
                offerIsConstruction[0] = true;
              } else {
                offer1.x = -50;
                offer1.y = -50;
                offerIncome[0] = 0;
              }
              offerRatings[0]="";
              voteData = ["none", "0", 50];
              introSelection++;
              loopCount=0;
              textStart=[1];
              cUpdateCount=-3600;
            }
          }
          if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
            textStart=[1,1,1,1,roadCooldowns[4]+361,roadCooldowns[4]+511];
            loopCount=roadCooldowns[4]+721;
            voteData = ["none", "0", 50];
            voteLoop = -3600;
            votingLoop=-3600;
            advocacyLoop=[-3600,-3600];
            lJobCooldown = -3600;
            jobSprites[0].x=-50;jobSprites[0].y=-50;
            cUpdateCount=-3600;
            votesComplete=[false,false];
            pauseMainFunctions=false;
            lTouchingJob=false;

          }
          if(keyWentDown("ENTER")&&!pauseMainFunctions){
            offer1.setAnimation("construction");
            offerIsConstruction[0] = true;
            offerRatings[0]="";
            voteData = ["none", "0", 50];
            introSelection=4;
            loopCount=0;
            textStart=[1];
            jobSprites[0].x=-50;jobSprites[0].y=-50;
            offerSign.visible=false;
            pauseMainFunctions=false;
            voteLoop=-3600;
            votingLoop=-3600;
            advocacyLoop=[-3600,-3600];
            cUpdateCount=-3600;
            votesComplete=[false,false];
            lTouchingJob=false;
          }
          }
          }
          }
            //points text
          fill("gold"); stroke("gold");strokeWeight(2); 
          if (cUpdateCount + 20 > loopCount) {
            text("+" + recentPoints + " Pt", leftChar.x, leftChar.y - 30 - (loopCount - cUpdateCount));
            }
          }
          else if(introSelection == 4){
            //complete construction, explain how buildings provide income to CLDC
            if(charBoxLeft.isTouching(offer1))(offerMenu(1,false));
            else if(offerOpen){
             shareHeader.visible = offerSign.visible = false;
            educationLevelLeft.visible = charHead.visible = music.visible = true;
            offerOpen = false; 
            }
            if (offerBuildCooldowns[0] + 90 == loopCount){
              replaceT1Plot(4);
              incomeArr[4] = offerIncome[0];
              offerLocations[0] = -1;
              cIncome += offerIncome[0];
              offerIncome[0] = 0;
              offersAvailable[0] = true;
              offer1.x = -50; offer1.y = -50; offer1.setAnimation("offer");
              offerIsConstruction[0] = false;
              textStart[1]=loopCount;
            }
            
            if(t1BuildingPlaced[4]){
              if(loopCount==textStart[1]+1)(playSound("audio/typing.mp3"));
              noStroke();fill(rgb(0,0,0,0.6));
              rect(25,310,750,135);
              typeText("Your first building is complete! Leasing income\nwill be generated when the game begins, shown\nby the green numbers above each building.",400,380,30,1,false,"white",loopCount);
              if(loopCount==textStart[1]+260)(stopSound("audio/typing.mp3"));
            if(loopCount==textStart[1]+320){
              introSelection=5;
              loopCount=0;
              textStart=[10];
            }

            //building finished page control
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              t1Land[4].visible=t1Buildings[4].visible=true;
              t1Buildings[4].setAnimation("t1FenceGrass");
              t1Roofs[4].visible=false;
              t1LandIsOpen[4]=false;
              t1BuildingPlaced[4]=false;
              p1CompleteSharesOwned[0]-=3;
              
              incomeArr[4] = 0;
              offerLocations[0] = 4;
              cIncome -= offerIncome[0];
              offerIncome[0] = (randomNumber(140, 180)) * 5;
            if(esopChosen)(offerIncome[0]=Math.round(offerIncome[0]*1.1));
              offer1.x=landLocations[4][0]; offer1.y=landLocations[4][1];
              offersAvailable[0] = false;
              offerIsConstruction[0] = true;
              offer1.setAnimation("construction");
              loopCount=0;
              textStart[0]=1;
              offerBuildCooldowns[0]=-3600;
            }
            
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              introSelection=5;
              loopCount=0;
              textStart=[10];
            }
            }
            else{
              //construction page control
              if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
                offer1.setAnimation("offerSign");
                offerIsConstruction[0] = false;
                introSelection=3;
                progressMessageLeft = "[E] Advocate";
                textStart=[1,1,1,1,roadCooldowns[4]+361,roadCooldowns[4]+511,roadCooldowns[4]+511];
                resetCleanUp();
                voteData[0] = "support";
                voteData[1] = 1 + "";
                voteData[2]=randomNumber(204,240)/4;
                voteLoop = loopCount+361;
                //start spawning vote sprites
                lJobCooldown = loopCount - 85;
                loopCount=roadCooldowns[4]+511;
                //place advocacy sprite
                jobSprites[0].setAnimation("no_" + advocacyPlayer[0]);
                jobSprites[0].visible = true;
                jobSprites[0].x = streets[15].x; jobSprites[0].y = streets[15].y;
              }
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
                offerBuildCooldowns[0] = loopCount-89;
                leftChar.x=680;leftChar.y=140;
              }

              if(loopCount==5){
                playSound("audio/typing.mp3");
                typingActive=true;
              }
              typeText("Finish the construction by pressing [E] on the plot.",400,380,30,0,true,"white",loopCount);
              if(loopCount==120){
                stopSound("audio/typing.mp3");
                typingActive=false;
              }
              if((offer1.x!=-50)&&(!leftChar.isTouching(offer1))){
                stroke("darkRed");strokeWeight(5);
            line(leftChar.x+15,leftChar.y,landLocations[4][0]-35,landLocations[4][1]+35);
            circle(landLocations[4][0],landLocations[4][1],100,100,"darkRed");
              }
            }
          }
          else if(introSelection==5){
            //explain community service points, then make them pick up a piece of litter. Explain university hall and recycling center.
            
            if(loopCount<2830){
              noStroke();fill(rgb(0,0,0,0.6));
              rect(20,310,755,135);
            }
              
            if(loopCount<450){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              introSelection=4;
              offerBuildCooldowns[0]=-3600;
              loopCount=0;
              textStart=[1,1];
            }
            
              typeText("Now we will cover how to improve your score, starting with\ncommunity service points. These points reduce CLDC expenses,\neffectively increasing profit. They can be earned in many ways...",400,380,26,0,false,"white",loopCount);
              if(loopCount==5)(playSound("audio/typing.mp3"));
              if(loopCount==400)(stopSound("audio/typing.mp3"));
              if(loopCount==449)(textStart.push(460));

              if(keyWentDown("ENTER")&&!pauseMainFunctions){
              loopCount=460;
              textStart=[10,460];
            }
            }
            else if(loopCount<950){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              loopCount=10;
              textStart=[10];
            }
            
              typeText("1) Stopping a fire before it destroys a building gives 1 point.\n2) Stopping a flood before it damages a building gives 1 point.\n- If not stopped, you will lose income and must pay a fee.",400,380,26,1,false,"white",loopCount);
              if(loopCount==455)(playSound("audio/typing.mp3"));
              if(loopCount==840)(stopSound("audio/typing.mp3"));
              if(loopCount==949)(textStart.push(960));
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
              loopCount=960;
              textStart=[10,460,960];
            }
            }
            else if(loopCount<1450){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              loopCount=459;
              textStart=[10,460];
            }
            
              typeText("3) Parks can be developed faster by helping with the tasks\nthat appear. These tasks also give community service points.\nWhen developed, parks will reduce the risk of flooding.",400,380,26,2,false,"white",loopCount);
              if(loopCount==955)(playSound("audio/typing.mp3"));
              if(loopCount==1320)(stopSound("audio/typing.mp3"));
              if(loopCount == 1449)(textStart.push(1460));
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
              loopCount=1460;
              textStart=[10,460,960,1460];
            }
            }
            else if(loopCount<1840){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              loopCount=959;
              textStart=[10,460,960];
            }
            
              typeText("4) Advocating for an investment offer during a vote\ngives 1 point each. This can be done more effectively after\nyou complete the ownership education quiz.",400,380,26,3,false,"white",loopCount);
              if(loopCount==1455)(playSound("audio/typing.mp3"));
              if(loopCount==1780)(stopSound("audio/typing.mp3"));
              if(loopCount==1839)(textStart.push(1850));
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
              loopCount=1850;
              textStart=[10,460,960,1460,1850];
            }
            }
            else if(loopCount<2230){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              loopCount=1459;
              textStart=[10,460,960,1460];
            }
            
              typeText("5) Lastly, picking up litter gives 2-4 points, depending\non the object. Using the recycling center once it is developed\nwill double the points you earn.",400,380,26,4,false,"white",loopCount);
              if(loopCount==1845)(playSound("audio/typing.mp3"));
              if(loopCount==2160)(stopSound("audio/typing.mp3"));
              if(loopCount==2229)(textStart.push(2250));
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
              loopCount=2250;
              textStart=[10,460,960,1460,1850,2250];
            }
            }
            else if(loopCount<2830){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              loopCount=1849;
              textStart=[10,460,960,1460,1850];
            }
            
              if(loopCount>2430){
                fill(rgb(255,255,255,0.7));noStroke();
                rect(316,87,166,64);
                circle(landLocations[9][0],landLocations[9][1],190,120,"darkRed");
                fill(rgb(0,0,200)); textSize(21); noStroke();
                text("Site for\nJustice University",t2Land[1].x, t2Land[1].y);
              }
              typeText("The ownership quiz is opened with [G], and taking it gives\nownership education points. Developing the university hall \n(top center) unlocks the advanced questions, which when\ncompleted will make advocating more effective.",400,380,26,5,false,"white",loopCount);
              if(loopCount==2245)(playSound("audio/typing.mp3"));
              if(loopCount==2700)(stopSound("audio/typing.mp3"));
              if(loopCount==2829){
                textStart=[2845];
                //place trash sprite 
                placeTrash(16,0);
              }
              if(keyWentDown("ENTER")&&!pauseMainFunctions){
              loopCount=2845;
              textStart=[2845];
              placeTrash(16,0);
            }
            }
            else{
              noStroke();fill(rgb(0,0,0,0.6));
              rect(25,370,750,115);
              
              if (keyWentDown("f")) {
                if (cleanUpActive&&trash[0].x==-50) {
                  playSound("audio/app_menu_button_2.mp3");
                  resetCleanUp();
                  introControl=3;
                  textStart=[loopCount+15];
                  stopLongSounds(false);
              } else if(!cleanUpActive){
                  playSound("audio/app_interface_button_3.mp3");
                cleanUpActive = true;
                //begin showing message to start clean up 
                cleanUpLoop = loopCount;
              }
            }
              if(trash[0].x!=-50){
                if(loopCount==2840)(playSound("audio/typing.mp3"));
                if(loopCount==3130)(stopSound("audio/typing.mp3"));
              //pick up a piece of litter
              typeText("See that litter by the road? Press [F] to begin a\ncommunity clean-up event, and you can pick it up by\n holding [E] next to it to earn community service points.",400,430,26,0,false,"white",loopCount);
              if(!(charBoxLeft.isTouching(trash[0]))){
                stroke("darkRed");strokeWeight(5);
                line(leftChar.x-15,leftChar.y,trash[0].x+30,trash[0].y);
                circle(trash[0].x,trash[0].y,60,60,"darkRed");
                jobProgressLeft=0;
                lTouchingJob=false;
              }else if(cleanUpActive){
                progressMessageLeft = "[E] Remove Trash";
          if (menuOpen) (closeMenu());
          //char is contacting a trash sprite and clean up is active
          if (!lTouchingJob) {
            jobProgressLeft += 0.01;
            lTouchingJob = true;
            closeMenu();
          }
          if (keyDown("e") && !pauseMainFunctions) {
            jobProgressLeft += 0.06;
          }
          //if the task is done
          if ((jobProgressLeft >= 1)) {
            stopSound("audio/typing.mp3");
            var pPoints = 3 - litterDebuff;
            if (pPoints<1) (pPoints=1);
            trashPoints += pPoints;
            trashPickedUp++;
            trash[0].x = -50; trash[0].y = -50;
            openCULocations[trashPositions[0]] = true;
            trashPositions[0] = -1;
            jobProgressLeft = 0;
            textStart=[2845,loopCount+15];
          }
              }    
              if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
                trashPositions[0]=-1;
                trash[0].x=trash[0].y=-50;
                loopCount=2250;
                textStart=[10,460,960,1460,1850,2250];
                openCULocations[16]=true;
                cleanUpSprites.setVisibleEach(false);
                cleanUpLoop=-3600;
                cleanUpActive=false;
              }
              if(keyWentDown("ENTER")){
                stopSound("audio/typing.mp3");
                var pPoints = 3 - litterDebuff;
                if (pPoints<1) (pPoints=1);
                trashPoints += pPoints;
                trashPickedUp++;
                trash[0].x = -50; trash[0].y = -50;
                openCULocations[trashPositions[0]] = true;
                trashPositions[0] = -1;
                jobProgressLeft = 0;
                textStart=[2845,loopCount+15];
                leftChar.x=360;leftChar.y=180;
                cleanUpActive=true;
                lTouchingJob=false;
                cleanUpSprites.setVisibleEach(false)  ;
                cleanUpLoop=-3600;
              }
              }
              else{
              if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
                leftChar.x=420;leftChar.y=200;
                placeTrash(16,0);
                trashPickedUp--;
                trashPoints=0;
                cleanUpActive=false;
              }
              if(keyWentDown("ENTER")){
                  playSound("audio/app_menu_button_2.mp3");
                  resetCleanUp();
                  introControl=3;
                  textStart=[loopCount+15];
                  stopLongSounds(false);
              }
                if(cleanUpActive){
                  if(loopCount==textStart[1]-5)(playSound("audio/typing.mp3"));
                  if(loopCount==textStart[1]+350)(stopSound("audio/typing.mp3"));
                  fill(rgb(255,255,255,0.7));noStroke();
                  rect(478,87,166,64);
                  
                  circle(landLocations[10][0],landLocations[10][1],190,120,"darkRed");
                  fill(rgb(0,0,200)); textSize(21);noStroke();
                  text("Site for\nRecycling Center",t2Land[2].x, t2Land[2].y);

                  typeText("You picked up the litter! Now press [F] once again to collect\nyour community service points. Once the recycling center is\ndeveloped, press [E] next to it to earn double the points.",400,430,26,1,false,"white",loopCount);
                }
                
                fill("gold"); stroke("gold");strokeWeight(2); 
          if (cUpdateCount + 20 > loopCount) {
            text("+" + recentPoints + " Pts", leftChar.x, leftChar.y - 30 - (loopCount - cUpdateCount));
            }
            }

              if (jobProgressLeft != 0 && !pauseMainFunctions) {
                noStroke();fill("black");
              rect(50, 536, 300, 50);
              fill('white');
              rect(56, 542, 288, 38);
              fill('lightGreen');
              rect(56, 542, 288 * jobProgressLeft, 38);
              fill('black'); textSize(30);
              text(progressMessageLeft, 200, 562);
            }
              if (cleanUpActive && !pauseMainFunctions) {
          textSize(30);stroke("black");
          strokeWeight(1);
          fill("black");
          rect(400, 536, 380, 50);
          fill("white");
          rect(406, 542, 190, 38);
          fill(rgb(180, 255, 180));
          rect(604, 542, 170, 38);
          fill("black");
          text("[F]: " + trashPickedUp, 474, 562);
          text("-->", 570, 562);
          text(addCommas(trashPoints) + " PTS", 690, 562);
            
          //clean up message
          if (cleanUpLoop == loopCount - 1) {
            cleanUpSprites.setVisibleEach(true);
          } else if (cleanUpLoop + 60 > loopCount && !pauseMainFunctions) {
            fill("black"); textSize(32);stroke("black");strokeWeight(1);
            text("A Community Clean-Up Event Has Started!", 400, 240);
            text("You can now clear the trash\nlittering your community!", 440, 310);
          } else if (cleanUpLoop + 60 == loopCount) {
            cleanUpSprites.setVisibleEach(false);
          }
        }
      }                
    }

          //sprite movement
          if (!pauseMainFunctions) {
          if (keyWentDown("SHIFT")) {
            sprinting = true;
          } else if (keyWentUp("SHIFT")) {
            sprinting = false;
            sprintLock = false;
          }

          if (sprinting && !sprintLock && sprint > 0) {
            spriteMovement(4, "Run");
            sprint -= 2;
          } else {
            spriteMovement(2, "Walk");
            if (sprint < 170) {
              sprint++;
              if (sprint == 1) (sprintLock = true);
            }
          }
        }
        }
        else if(introControl==3){
          noStroke();fill(rgb(0,0,0,0.6));
            rect(25,290,750,160);
          if(loopCount<textStart[0]+360){
            if(keyWentDown("BACKSPACE")&&!pauseMainFunctions){
              introControl=2;
              loopCount=2845;
              cleanUpActive=true;
              jobProgressLeft=0;
              cUpdateCount=-3600;
              trashPoints=3;
              trashPickedUp=1;
              textStart=[2845,2845];
              cPoints=0;
            }

            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              loopCount=textStart[0]+360;
              textStart[1]=loopCount;
            }

            if(loopCount==textStart[0]-5)(playSound("audio/typing.mp3"));
            if(loopCount==textStart[0]+200)(stopSound("audio/typing.mp3"));
            typeText("At any point in the game, you can press [BACKSPACE]\nto return to the main menu and [P] to pause. Pressing\n[T] toggles the tip sheet on the right. ",400,370,30,0,false,"white",loopCount);
            if(loopCount==textStart[0]+359)(textStart.push(loopCount));
            if(loopCount==textStart[0]+235)(playSound("audio/typing.mp3"));
          }else if (loopCount<textStart[0]+840){
            if (keyWentDown("BACKSPACE")&&!pauseMainFunctions) {
              loopCount=textStart[0];
              cUpdateCount=-3600;
            }
            if (keyWentDown("ENTER")&&!pauseMainFunctions) {
              loopCount=textStart[0]+840;
            }
            if(loopCount==textStart[0]+630)(stopSound("audio/typing.mp3"));
            typeText("Every year there's a CLDC meeting that distributes\ndividends and elects a leader for the next year. Your\ngoal is to maximize your dividends and complete\nas many objectives as you can! Good luck!",400,370,30,1,false,"white",loopCount);
          }else{
            stopLongSounds(false);
            stopMusic();
            //reset intro and begin the game
            level = 2;
             if(!muteMusic)(playSound("audio/TrackTribe - A Brand New Start.mp3"));
            lastSong = 5;
            
            menuOpen=false;offerOpen=false;
            cUpdateCount = -3600;
            loopCount = 0;
            educationLevelLeft.visible = leftChar.visible = charHead.visible = music.visible = true;
            rainCooldown = loopCount + randomNumber(1000, 6000);
            blackout.shapeColor = rgb(0, 0, 0, 0.25);
            typingActive=false;
            voteLoop = -3600;
            votingLoop=-3600;
            voteData = ["none", "0", 50];
            introControl=0;
            introSelection=0;
            loopCopy=0;
            pauseMainFunctions=false;
            cleanUpLoop=-3600;
          }
          

          
          //points text
          fill("gold"); stroke("gold");strokeWeight(2); 
          if (cUpdateCount + 20 > loopCount) {
            text("+" + recentPoints + " Pts", leftChar.x, leftChar.y - 30 - (loopCount - cUpdateCount));
            }
        }
        
        if (gamePaused) {
          stroke("black");
          strokeWeight(3);
          fill(rgb(255,255,200));
          rect(11,80,400,40);
          fill("black");  noStroke();
          textSize(30);
          text("GAME PAUSED: [P] UNPAUSE",210,102);
        }

      }
      //Start screen graphics with play button
      else if(level == -1){
        fill("black");
        rect(800,0,800,800);
        fill(introColor);
        noStroke();
        rect(700-introScale,480-introScale,200+introScale*2,80+introScale*2);
        fill('black'); textSize(60); textAlign('center', 'center');textFont("georgia");
        text('Play', 800, 520);
        fill("white");textSize(105);textFont("impact");
        text("River City",800,210);
        fill(rgb(150,255,150));
        text("Reborn",800,325);
        textFont("georgia");
      }
      else if (tutorialSkipped && (level == 2) && loopCount < 15) {
        fill(rgb(255, 255, 255, 0.6 - (loopCount / 25)));
        noStroke();
        rect(0,0,800,800);
      }

      
      //mouse coords for graphics
      if(keyDown("q")){
        fill(rgb(0,0,0,0.6));noStroke();
        rect(0,760,800,40);
        fill(rgb(255,50,50));textSize(20);noStroke();textAlign(CENTER,CENTER);
        text(World.mouseX+", "+World.mouseY+" :: "+loopCount+" | "+textStart.toString(),400,780);
        
      }
      if(level == 3 && introControl==0){
      spotlight(10,10,780,595);
      }
      
      //pause button text
      if(level==2 && gamePaused){
          loopCopy++;
          spotlight(0,0,0,0);
          typeText("The game is paused.\nPress [P] to resume!",400,350,36,0,false,"white",loopCopy);
        }
    }
    

    
    //functions{
      // Function to truncate text to fit a given width
      function truncateText(text, maxWidth) {
        let truncatedText = "";
        let currentWidth = 0;

        for (let i = 0; i < text.length; i++) {
          let charWidth = textWidth(text.charAt(i));
          if (currentWidth + charWidth <= maxWidth) {
            truncatedText += text.charAt(i);
            currentWidth += charWidth;
          } else {
            // Break out of the loop if the width is exceeded
            break;
          }
        }

        return truncatedText;
      }

      function updateTimes () {
        getDoc(timesDoc).then((docSnap) => {
          if (docSnap.exists) {
           const tData = docSnap.data();
           console.log("times: ",tData);
           topTimes = [[tData.name1, tData.hours1, tData.minutes1, tData.seconds1],
           [tData.name2, tData.hours2, tData.minutes2, tData.seconds2],
           [tData.name3, tData.hours3, tData.minutes3, tData.seconds3]];
          } else {
            console.log("fastestTimes document does not exist");
          }
        }).catch((error) => {
          console.error("Error getting document: " + error.message);
        });
      }

      function updateScores () {
          getDoc(scoresDoc).then((docSnap) => {
          if (docSnap.exists) {
           const sData = docSnap.data();
           console.log("scores: ",sData);
           highScores = [[sData.name1, sData.score1],
           [sData.name2, sData.score2],
           [sData.name3, sData.score3]];
          } else {
            console.log("highScores document does not exist");
          }
        }).catch((error) => {
          console.error("Error getting document: " + error.message);
        });
      }

    function skipTutorial() {
          level = 2;
          if(!muteMusic)(playSound("audio/TrackTribe - A Brand New Start.mp3"));
          lastSong = 5;
          closeMenu();
          loopCount = 0;
          educationLevelLeft.visible = leftChar.visible=charHead.visible = music.visible = true;
          menuOpen=false;offerOpen=false;
          cUpdateCount = -3600;
          objListP[1][1] = -3600;
          shareHeader.visible=offerSign.visible = false;
          typingActive=false;
          jobSprites[0].x=-50;jobSprites[0].y=-50;
          offer1.x=-50;offer1.y=-50
          offer1.setAnimation("offer");
          offerIsConstruction[0] = false;
          voteLoop = -3600;
          votingLoop=-3600;
          voteData = ["none", "0", 50];
          introControl=0;
          introSelection=0;
          loopCopy=0;
          pauseMainFunctions=false;
          trash[0].x=trash[0].y=-50;
          trashPositions = [
          -1, -1, -1, -1, -1,
          -1, -1, -1, -1, -1
          ];
          cleanUpSprites.setVisibleEach(false);
          cleanUpLoop=-3600;
          
          
          //place the building, add income
          if (!t1PlotIsCompleted[4]) {
            totIncome-=15000;
            totProfits-=15000;
          }
          buildRoads(1, 4, false, false);
          t1LandIsOpen[4] = true;
          t1PlotIsCompleted[4] = true;
          plotsCompletedLeft++;
          //color green before building is placed
          t1Land[4].shapeColor = rgb(20, 100, 20);
          if(!t1BuildingPlaced[4])(replaceT1Plot(4));
          
          var potIncome = 0;
          if(offerIncome[0]!=0)(potIncome = offerIncome[0]);
            else{
            potIncome = randomNumber(140, 180) * 5;
            if(esopChosen)(potIncome*=1.1);
          }
          incomeArr[4]=potIncome;
          offerLocations[0] = -1;
          cIncome += potIncome;
          offerIncome[0] = 0;
          offersAvailable[0] = true;

          
          rainCooldown = loopCount + randomNumber(1000, 6000);
          blackout.shapeColor = rgb(0, 0, 0, 0.25);
    }
    
    function completeEntireCity(){
      //Check for complete entire city objective
            var allBuildingsPlaced = true;
            for(var xa = 0;xa<t1BuildingPlaced.length;xa++){
              if(!t1BuildingPlaced[xa]){
                allBuildingsPlaced = false;
                break;
              }
            }
            if(allBuildingsPlaced){
              if(!(t2BuildingPlaced[1]&&t2BuildingPlaced[2])){
                allBuildingsPlaced = false;
              }
              if(!(t3BuildingPlaced[0]&&t3BuildingPlaced[1])){
                allBuildingsPlaced = false;
              }
              
              if(plotsCompletedLeft>=24 && allBuildingsPlaced){
                objListCLDC[5][1]=loopCount;
                objListCLDC[5][3]=true;
                objCount++;
              }
            }
    }
    
    function playRandomSong(){
      var rSong = randomNumber(0,5);
      while(rSong==lastSong){
        rSong=randomNumber(0,5);
      }
      switch(rSong){
        case 0:
          playSound("audio/E's Jammy Jam - Forget Me Not.mp3");
          break;
        case 1:
          playSound("audio/E's Jammy Jam - Nighttime Stroll.mp3");
          break;
        case 2:
          playSound("audio/E's Jammy Jam - Soul & Mind.mp3");
          break;
        case 3:
          playSound("audio/Silent Partner - Bet On It.mp3");
          break;
        case 4:
          playSound("audio/TrackTribe - Home For the Holidays.mp3");
          break;
        case 5:
          playSound("audio/TrackTribe - A Brand New Start.mp3");
          break;
      }
      lastSong=rSong;
      songLoop=gameLoop;
    }
    
    function stopLongSounds(traffic){
      //sound effects
        stopSound("audio/typing.mp3");
        stopSound("audio/rain.mp3");
        stopSound("audio/fire.mp3");
        stopSound("audio/fireSiren.mp3");
        stopSound("audio/shock.mp3");
        if(traffic)(stopSound("audio/bgTraffic.mp3"));
        stopSound("audio/hammer6x.mp3");
        stopSound("audio/flood.mp3");
    }
    
    function stopMusic(){
      //music
      stopSound("audio/TrackTribe - A Night Alone.mp3");
      stopSound("audio/E's Jammy Jam - Forget Me Not.mp3");
      stopSound("audio/E's Jammy Jam - Nighttime Stroll.mp3");
      stopSound("audio/E's Jammy Jam - Soul & Mind.mp3");
      stopSound("audio/Silent Partner - Bet On It.mp3");
      stopSound("audio/TrackTribe - Home For the Holidays.mp3");
      stopSound("audio/TrackTribe - A Brand New Start.mp3");
      stopSound("audio/endgame.mp3");
    }
    
  function findFlood(){
    for(var xqc=0;xqc<13;xqc++){
      if(floods[xqc].visible){
        return xqc;
      }
    }
    return -1;
  }

    function showHint(textString, loop, size){
        if(loop<30){
            if(loop==1)(playSound("audio/correct.mp3"));
            //rectangle background drops down
            fill(rgb(220,220,220));stroke(rgb(220,25,50));strokeWeight(4);
            rect(188,12,600,loop*2.66);
          }else{
            fill(rgb(220,220,220));stroke(rgb(220,25,50));strokeWeight(4);
            rect(188,12,600,80);
            //"hint" box on the left
            fill(rgb(220,220,220));stroke("black");
            rect(80,12,104,40);
          
            fill("black");noStroke();textSize(size);
            text(textString,488,52);
          
            textSize(34);fill(rgb(220,25,50));stroke(rgb(220,25,50));strokeWeight(0.5);
            text("HINT:",136,34);
            
            
        }
    }
    
    function investmentDisclaimer(){
      fill(rgb(220,220,220));stroke("black");strokeWeight(4);
      rect(145,667,510,30);
      fill("black");textSize(28);noStroke();
      text("- All investment is done by the CLDC -",400,683);
      
      if(isRaining){
        fill(rgb(0,0,0,0.2)); noStroke();
        rect(145,667,510,30);
      }
    }
    
    function circle(x,y,width,height,color){
      fill(0,0,0,0);stroke(color);strokeWeight(6);
      arc(x,y,width,height,0,360);
    }
    
    function typeText(msg,x,y,txtSize,index,showBackground,textColor,loop){
      if(textStart[index]==0)(textStart[index]=loop);
      var numLetters = (loop-textStart[index])/2;
      if(numLetters>msg.length)(numLetters=msg.length);
  
      //background for visibility
      if(showBackground){
        var textLength = Math.round(numLetters*(txtSize/2.1));
        if(textColor=="black")(fill(rgb(245,245,245)));
        else(fill(rgb(0,0,0,0.6)));
        stroke("black");strokeWeight(1);
        rect(x-(textLength/2)-6,y-(txtSize/2)-4,textLength+12,txtSize+8);
      }
  
      //type the text message
      textSize(txtSize);fill(textColor);noStroke();
      text(msg.substring(0,numLetters),x,y);
    }
    
    //calculates and returns the amount of loans needed to invest in a share of land
    function calcLoans(cost) {
      var availableProfits = totProfits * (1 - reserveRate);
      if (totProfits * reserveRate < reserveRate * 100000) (availableProfits = totProfits - reserveRate * 100000);
      if (payMethod == 0) {
        if (availableProfits >= cost) {
          return 0;
        } else {
          var loansToAdd = cost - availableProfits;
          if (loansToAdd > cost) (loansToAdd = cost);
          return loansToAdd;
        }
      } else {
        return cost;
      }
    }

    //fills the curObjListCLDC and curObjListP with strings of the correct objective in priority 
    //based on when it was completed and changes the color of the background to match.
    function fillObjList() {
      //reset all boolean values to false
      for (var p = 0; p < objListCLDC.length; p++) {
        objListCLDC[p][2] = false;
      }
      for (var p = 0; p < objListP.length; p++) {
        objListP[p][2] = false;
      }

      var foundComplete = true;
      var x = 0;
      //first priority -> check for completed objectives that are in cooldown
      while ((x < 3) && foundComplete) {
        foundComplete = false;
        for (var y = 0; y < objListCLDC.length; y++) {
          if ((objListCLDC[y][1] > (loopCount - 90)) && (!objListCLDC[y][2])) {
            foundComplete = true;
            objColors[x] = rgb(110, 185, 110);
            objListCLDC[y][2] = true;
            curObjListCLDC[x] = objListCLDC[y][0];
            x++;
          }
        }
      }
      //Do the same for player objectives
      foundComplete = true;
      var pl = 0;
      while ((pl < 2) && foundComplete) {
        foundComplete = false;
        for (var y = 0; y < objListP.length; y++) {
          if ((objListP[y][1] > (loopCount - 90)) && (!objListP[y][2])) {
            foundComplete = true;
            objColors[pl + 3] = rgb(110, 185, 110);
            objListP[y][2] = true;
            curObjListP[pl] = objListP[y][0];
            pl++;
          }
        }
      }


      //second priority -> check for un-completed objectives
      foundComplete = true;
      while ((x < 3) && foundComplete) {
        foundComplete = false;
        for (var z = 0; z < objListCLDC.length; z++) {
          if ((objListCLDC[z][1] == -300) && (!objListCLDC[z][2]) && (x < 3)) {
            foundComplete = true;
            objColors[x] = "white";
            objListCLDC[z][2] = true;
            curObjListCLDC[x] = objListCLDC[z][0];
            x++;
          }
        }
      }
      //Do the same for player objectives
      foundComplete = true;
      while ((pl < 2) && foundComplete) {
        foundComplete = false;
        for (var z = 0; z < objListP.length; z++) {
          if ((objListP[z][1] == -300) && (!objListP[z][2])) {
            foundComplete = true;
            objColors[pl + 3] = "white";
            objListP[z][2] = true;
            curObjListP[pl] = objListP[z][0];
            pl++;
          }
        }
      }

      //third priority -> fill the rest of the list with blanks
      while (x < 3) {
        curObjListCLDC[x] = "";
        objColors[x] = "white";
        x++;
      }
      //Do the same for player objectives
      while (pl < 2) {
        curObjListP[pl] = "";
        objColors[pl + 3] = "white";
        pl++;
      }
    }

    //if statements for the colors in the menu
    function controlColors() {
      var str = ["w", "s", "a", "d", "SHIFT", "e", "ENTER", "f", "r", "UP_ARROW", "DOWN_ARROW", "LEFT_ARROW", "RIGHT_ARROW"];
      for (var xd = 0; xd < 5; xd++) {
        if (keyDown(str[xd]) || keyDown(str[xd + 9])) {
          controlsColors[xd] = rgb(160, 190, 255);
        } else if (keyWentUp(str[xd]) || keyWentUp(str[xd + 9])) {
          controlsColors[xd] = rgb(207, 226, 243);
        }
      }
      for (var xe = 5; xe < 9; xe++) {
        if (keyDown(str[xe])) {
          controlsColors[xe] = rgb(160, 190, 255);
        } else if (keyWentUp(str[xe])) {
          controlsColors[xe] = rgb(207, 226, 243);
        }
      }
    }

    //sprite movement for both characters with animations
    function spriteMovement(speed, animationSpeed) {
      var sideAnimation = false;
      var character;

      if (charNum == 1) {
        character = "left";
      } else if (charNum == 3) {
        character = "right";
      } else if (charNum == 2) {
        character = "b";
      } else {
        character = "a";
      }

      if (keyDown("a") || keyDown("LEFT_ARROW")) {
        leftChar.velocityX = -speed;
        leftChar.setAnimation(character + animationSpeed + 'Left');
        sideAnimation = true;
      }
      else if (keyDown("d") || keyDown("RIGHT_ARROW")) {
        leftChar.velocityX = speed;
        leftChar.setAnimation(character + animationSpeed + 'Right');
        sideAnimation = true;
      }
      else if (keyWentUp("a") || keyWentUp("LEFT_ARROW")) {
        leftChar.velocityX = 0;
        leftChar.setAnimation(character + 'Left');
        sideAnimation = false;
      }
      else if (keyWentUp("d") || keyWentUp("RIGHT_ARROW")) {
        leftChar.velocityX = 0;
        leftChar.setAnimation(character + 'Right');
        sideAnimation = false;
      }
      if (keyDown("w") || keyDown("UP_ARROW")) {
        leftChar.velocityY = -speed;
        if (!sideAnimation) {
          leftChar.setAnimation(character + animationSpeed + 'Up');
        }
      }
      else if (keyDown("s") || keyDown("DOWN_ARROW")) {
        leftChar.velocityY = speed;
        if (!sideAnimation) {
          leftChar.setAnimation(character + animationSpeed + 'Down');
        }
      }
      else if (keyWentUp("w") || keyWentUp("UP_ARROW")) {
        leftChar.velocityY = 0;
        if (!sideAnimation) {
          leftChar.setAnimation(character + 'Up');
        }
      }
      else if (keyWentUp("s") || keyWentUp("DOWN_ARROW")) {
        leftChar.velocityY = 0;
        if (!sideAnimation) {
          leftChar.setAnimation(character + 'Down');
        }
      }
      //walking sounds
      var gap = 24;
      if(animationSpeed == "Run")(gap = 12);
      if(keyDown("a") || keyDown("LEFT_ARROW") || keyDown("d") || keyDown("RIGHT_ARROW")
        || keyDown("w") || keyDown("UP_ARROW") || keyDown("s") || keyDown("DOWN_ARROW")) {
        if(loopCount % gap == 0){
          playSound("audio/leftStep.mp3");
        }else if(loopCount % gap == gap/2){
          playSound("audio/rightStep.mp3");
        }
      }
    }
    //opens the share-investing menu for t1 plots
    function openT1Menu(plot) {
      if (!menuOpen || !((oldPosition[0] == 1) && (oldPosition[1] == plot))) {
        //visibility statements
        leftBackground.visible = paymentBgr.visible = shareHeader.visible = true;
        offerOpen = offerSign.visible = false;
        educationLevelLeft.visible = charHead.visible = music.visible = false;
        cMedals.setVisibleEach(false);
        g1Indicator.visible = true;
        menuOpen = true;
      }
    }
    //opens the share-investing menu for t2 plots
    function openT2Menu(plot) {
      if (!menuOpen || !((oldPosition[0] == 2) && (oldPosition[1] == plot))) {
        //visibility statements
        if (plot == 1) {
          recycleSprites.setVisibleEach(false);
        }
        leftBackground.visible = paymentBgr.visible = shareHeader.visible = true;
        offerOpen = offerSign.visible = false;
        educationLevelLeft.visible = charHead.visible = music.visible = false;
        cMedals.setVisibleEach(false);
        g1Indicator.visible = true;
        menuOpen = true;
      }
    }
    //opens the share-investing menu for t3 plots
    function openT3Menu(plot) {
      if (!menuOpen || !((oldPosition[0] == 3) && (oldPosition[1] == plot))) {
        //visibility statements
        leftBackground.visible = paymentBgr.visible = shareHeader.visible = true;
        offerOpen = offerSign.visible = false;
        g1Indicator.visible = true;
        educationLevelLeft.visible = charHead.visible = music.visible = false;
        cMedals.setVisibleEach(false);
        
        menuOpen = true;
      }
    }
    //opens the share-investing menu for parks
    function openT4Menu(plot) {
      if (!menuOpen || !((oldPosition[0] == 4) && (oldPosition[1] == plot))) {
        //visibility statements
        leftBackground.visible = paymentBgr.visible = shareHeader.visible = true;
        offerOpen = offerSign.visible = false;
        educationLevelLeft.visible = charHead.visible = music.visible = false;
        cMedals.setVisibleEach(false);
        if (plot == 1 || plot == 4) {
          g1Indicator.visible = true;
        } 
        menuOpen = true;
      }
    }
    //functions for t1 plots
    function t1Functions(plot) {
      if (!pauseMainFunctions) {
        var loansToAdd = calcLoans(15000);
        if (((cLoans + loansToAdd) * loanRate) <= (cIncome - cExpenses)) {
          canAfford = true;
        }else {
          canAfford = false;
        }
      }
      if (canAfford) {
        var colorFactor = ((Math.abs(12 - (loopCount % 24))) * 3);
        g1Indicator.shapeColor = rgb(170 - colorFactor, 170 - colorFactor, 230 + colorFactor, 1);
        fill("black");noStroke();textSize(26);
        text("Feasible",610,769);
        thumbUp.visible=true;
        thumbDown.visible=false;
      }else{
        fill("black");noStroke();textSize(26);
        text("Not Feasible",610,769);
        g1Indicator.shapeColor = "red";
        thumbDown.visible=true;
        thumbUp.visible=false;
      }
      

      investmentDisclaimer();
      
      fill('black'); textSize(34); noStroke(); textAlign(CENTER, CENTER);
      shareHeader.shapeColor = rgb(110, 220, 115);

      text("[E]\tResidential Land Plot\n[R] " + paymentText[payMethod], 215, 750);
      textSize(28);
      text("Development Cost: $15,000", 610, 727);
      stroke(rgb(50, 50, 50));
      strokeWeight(6);
      line(430, 700, 430, 800);
      strokeWeight(3);
      line(10,748,430,748);
      noStroke();
      if (keyWentDown("E") && !pauseMainFunctions) {
        if (!t1PlotIsCompleted[plot]) {
          if (canAfford) {
            playSound("audio/app_interface_button_3.mp3");
            totIncome -= (15000 - loansToAdd);
            totProfits -= (15000 - loansToAdd);
            cLoans += loansToAdd;
            totLoans += loansToAdd;
            if (loansToAdd > 0) (loansUpdateCount = loopCount);

            //Loans and loan payment colors
            if (totLoans <= 0) (menuColors[4] = rgb(180, 235, 190));
            else (menuColors[4] = rgb(244, 204, 204));

            if (totLoanPay > 0) (menuColors[5] = rgb(180, 235, 190));
            else (menuColors[5] = rgb(244, 204, 204));

            if ((totLoans - totLoanPay) <= 0) (menuColors[6] = rgb(180, 235, 190));
            else (menuColors[6] = rgb(244, 204, 204));

  
              t1PlotIsCompleted[plot] = true;
              plotsCompletedLeft++;
              //color green before building is placed
              t1Land[plot].shapeColor = rgb(20, 100, 20);
              t1Buildings[plot].setAnimation("t1FenceGrass");
              //do construction on roads
              buildRoads(1, plot, true, false);
              t1LandIsOpen[plot] = false;
              roadCooldowns[plot] = loopCount;
              //ensure all plots are green
              t1Land[plot].visible = true;
              t1Roofs[plot].visible = initOpent1[plot] = t1BuildingPlaced[plot] = false;
            
          } else {
            playSound("audio/incorrect.mp3");
            loanCapCount = loopCount;
          }
        }
        //update profit color
        if (totProfits > 0) {
          menuColors[3] = rgb(180, 235, 190);
        } else {
          menuColors[3] = rgb(244, 204, 204);
        }
      }
      oldPosition = [1, plot];
    }
    //functions for t2 plots
    function t2Functions(plot) {
      if (!pauseMainFunctions) {
        var loansToAdd = calcLoans(50000);
        if (((cLoans + loansToAdd) * loanRate) <= (cIncome - cExpenses)) {
          canAfford = true;
        }else {
          canAfford = false;
        }
      }
      if (canAfford) {
        var colorFactor = ((Math.abs(12 - (loopCount % 24))) * 3);
        g1Indicator.shapeColor = rgb(170 - colorFactor, 170 - colorFactor, 230 + colorFactor, 1);
        fill("black");noStroke();textSize(26);
        text("Feasible",610,769);
        thumbUp.visible=true;
        thumbDown.visible=false;
      }else{
        fill("black");noStroke();textSize(26);
        text("Not Feasible",610,769);
        g1Indicator.shapeColor = "red";
        thumbDown.visible=true;
        thumbUp.visible=false;
      }

      investmentDisclaimer();
      
      fill('black'); textSize(34); noStroke(); textAlign(CENTER, CENTER);
      shareHeader.shapeColor = rgb(110, 220, 115);

      if (plot == 1) {
        text("[E]\tJustice University Hall\n[R] " + paymentText[payMethod], 215, 750);
      } else if (plot == 2) {
        text("[E]\tRecycling Plant\n[R] " + paymentText[payMethod], 215, 750);
      }
      textSize(28);
      text("Development Cost: $50,000", 610, 727);
      stroke(rgb(50, 50, 50));
      strokeWeight(6);
      line(430, 700, 430, 800);
      strokeWeight(3);
      line(10,748,430,748);
      noStroke();
      if (keyWentDown("E") && !pauseMainFunctions) {
        if (!t2PlotIsCompleted[plot]) {
          if (canAfford) {
            playSound("audio/app_interface_button_3.mp3");
            totIncome -= (50000 - loansToAdd);
            totProfits -= (50000 - loansToAdd);
            cLoans += loansToAdd;
            totLoans += loansToAdd;
            if (loansToAdd > 0) (loansUpdateCount = loopCount);

            //Loans and loan payment colors
            if (totLoans <= 0) (menuColors[4] = rgb(180, 235, 190));
            else (menuColors[4] = rgb(244, 204, 204));

            if (totLoanPay > 0) (menuColors[5] = rgb(180, 235, 190));
            else (menuColors[5] = rgb(244, 204, 204));

            if ((totLoans - totLoanPay) <= 0) (menuColors[6] = rgb(180, 235, 190));
            else (menuColors[6] = rgb(244, 204, 204));

     
              plotsCompletedLeft += 2;
              t2PlotIsCompleted[plot] = true;
              //color green before building is placed
              t2Land[plot].shapeColor = rgb(20, 100, 20);
              t2Buildings[plot].setAnimation("t2FenceGrass");
              //do construction on roads
              buildRoads(2, plot, true, false);
              t2LandIsOpen[plot] = false;
              roadCooldowns[plot + 8] = loopCount;
              //ensure all plots are green
              t2Land[plot].visible = true;
              initOpent2[plot] = t2BuildingPlaced[plot] = false;
            
          } else {
            playSound("audio/incorrect.mp3");
            loanCapCount = loopCount;
          }
        }
        //update profit color
        if (totProfits > 0) {
          menuColors[3] = rgb(180, 235, 190);
        } else {
          menuColors[3] = rgb(244, 204, 204);
        }
      }
      oldPosition = [2, plot];
    }
    //functions for t3 plots
    function t3Functions(plot) {
      if (!pauseMainFunctions) {
        var loansToAdd = calcLoans(280000);
        if (((cLoans + loansToAdd) * loanRate) <= (cIncome - cExpenses)) {
          canAfford = true;
        }else {
          canAfford = false;
        }
      }
      if (canAfford) {
            var colorFactor = ((Math.abs(12 - (loopCount % 24))) * 3);
            g1Indicator.shapeColor = rgb(170 - colorFactor, 170 - colorFactor, 230 + colorFactor, 1);
            fill("black");noStroke();textSize(26);
            text("Feasible",610,769);
            thumbUp.visible=true;
            thumbDown.visible=false;
          }else{
            fill("black");noStroke();textSize(26);
            text("Not Feasible",610,769);
            g1Indicator.shapeColor = "red";
            thumbDown.visible=true;
            thumbUp.visible=false;
          }

      investmentDisclaimer();
      
      fill('black'); textSize(34); noStroke(); textAlign(CENTER, CENTER);
      shareHeader.shapeColor = rgb(110, 220, 115);

      text("[E]\tCommercial Land Plot\n[R] " + paymentText[payMethod], 215, 750);
      textSize(27);
      text("Development Cost: $280,000", 610, 727);
      stroke(rgb(50, 50, 50));
      strokeWeight(6);
      line(430, 700, 430, 800);
      strokeWeight(3);
      line(10,748,430,748);
      noStroke();
      
      if (keyWentDown("E") && !pauseMainFunctions) {
        if (!t3PlotIsCompleted[plot]) {
          if (canAfford) {
            playSound("audio/app_interface_button_3.mp3");
            totIncome -= (280000 - loansToAdd);
            totProfits -= (280000 - loansToAdd);
            cLoans += loansToAdd;
            totLoans += loansToAdd;
            if (loansToAdd > 0) (loansUpdateCount = loopCount);

            //Loans and loan payment colors
            if (totLoans <= 0) (menuColors[4] = rgb(180, 235, 190));
            else (menuColors[4] = rgb(244, 204, 204));

            if (totLoanPay > 0) (menuColors[5] = rgb(180, 235, 190));
            else (menuColors[5] = rgb(244, 204, 204));

            if ((totLoans - totLoanPay) <= 0) (menuColors[6] = rgb(180, 235, 190));
            else (menuColors[6] = rgb(244, 204, 204));

              plotsCompletedLeft += 4;
              t3PlotIsCompleted[plot] = true;
              //color green before building is placed
              t3Land[plot].shapeColor = rgb(20, 100, 20);
              t3Buildings[plot].setAnimation("t3FenceGrass");
              //do construction on roads
              buildRoads(3, plot, true, false);
              t3LandIsOpen[plot] = false;
              roadCooldowns[plot + 11] = loopCount;
            
          } else {
            playSound("audio/incorrect.mp3");
            loanCapCount = loopCount;
          }
        }

        //update profit color
        if (totProfits > 0) {
          menuColors[3] = rgb(180, 235, 190);
        } else {
          menuColors[3] = rgb(244, 204, 204);
        }
      }
      oldPosition = [3, plot];
    }
    //makes roads visible when shares are sold out
    function buildRoads(tier, plot, construction, flood) {
      if (!construction) {
        //add "flood" to animation names if flood is true
        var floodSfx = "";
        if (flood) (floodSfx = "Flood");
        if (tier == 1) {
          if (plot == 0) {
            streets[0].setAnimation("bridgeVert1" + floodSfx); streets[1].setAnimation("streetVert1" + floodSfx);
            streetsFinished[0] = streetsFinished[1] = true;
          } else if (plot == 1) {
            streets[0].setAnimation("bridgeVert1" + floodSfx); streets[1].setAnimation("streetVert1" + floodSfx);
            streets[2].setAnimation("intersectionLeft1" + floodSfx);
            streetsFinished[0] = streetsFinished[1] = streetsFinished[2] = true;
          } else if (plot == 2) {
            streets[3].setAnimation("streetVert1" + floodSfx); streets[4].setAnimation("streetVert3" + floodSfx);
            streetsFinished[3] = streetsFinished[4] = true;
          } else if (plot == 3) {
            streets[4].setAnimation("streetVert3" + floodSfx);
            streetsFinished[4] = true;
            //change t1park animation to look nice
            green5.setAnimation("t1Park1");
          } else if (plot == 4) {
            streets[5].setAnimation("bridgeVert1" + floodSfx); streets[6].setAnimation("streetVert1" + floodSfx);
            streetsFinished[5] = streetsFinished[6] = true;
          } else if (plot == 5) {
            streets[5].setAnimation("bridgeVert1" + floodSfx); streets[6].setAnimation("streetVert1" + floodSfx);
            streets[7].setAnimation("intersectionRight1" + floodSfx);
            streetsFinished[5] = streetsFinished[6] = streetsFinished[7] = true;
          } else if (plot == 6) {
            streets[8].setAnimation("streetVert1" + floodSfx); streets[9].setAnimation("streetVert4" + floodSfx);
            streetsFinished[8] = streetsFinished[9] = true;
          } else if (plot == 7) {
            streets[9].setAnimation("streetVert4" + floodSfx);
            streetsFinished[9] = true;
            //change t1park animation to look nice
            green6.setAnimation("t1Park1");
          } else if (plot == 8) {
            streets[0].setAnimation("bridgeVert1" + floodSfx); streets[1].setAnimation("streetVert1" + floodSfx);
            streets[2].setAnimation("intersectionLeft1" + floodSfx); streets[10].setAnimation("streetHoriz1" + floodSfx);
            streetsFinished[0] = streetsFinished[1] = streetsFinished[2] = streetsFinished[10] = true;
          }
        } else if (tier == 2) {
          if (plot == 1) {
            streets[0].setAnimation("bridgeVert1" + floodSfx); streets[1].setAnimation("streetVert1" + floodSfx);
            streets[2].setAnimation("intersectionLeft1" + floodSfx); streets[10].setAnimation("streetHoriz1" + floodSfx);
            streets[11].setAnimation("streetHoriz1" + floodSfx); streets[12].setAnimation("streetHoriz1" + floodSfx);
            streets[13].setAnimation("streetHoriz1" + floodSfx);
            streetsFinished[0] = streetsFinished[1] = streetsFinished[2] = streetsFinished[10] =
              streetsFinished[11] = streetsFinished[12] = streetsFinished[13] = true;
          } else if (plot == 2) {
            streets[5].setAnimation("bridgeVert1" + floodSfx); streets[6].setAnimation("streetVert1" + floodSfx);
            streets[7].setAnimation("intersectionRight1" + floodSfx); streets[14].setAnimation("streetHoriz1" + floodSfx);
            streets[15].setAnimation("streetHoriz1" + floodSfx);
            streetsFinished[5] = streetsFinished[6] = streetsFinished[7] = streetsFinished[14] =
              streetsFinished[15] = true;
          }
        } else if (tier == 3) {
          if (plot == 0) {
            streets[2].setAnimation("intersectionLeft1" + floodSfx); streets[3].setAnimation("streetVert1" + floodSfx);
            streets[4].setAnimation("streetVert3" + floodSfx); streets[10].setAnimation("streetHoriz1" + floodSfx);
            streets[11].setAnimation("streetHoriz1" + floodSfx); streets[12].setAnimation("streetHoriz1" + floodSfx);
            streetsFinished[2] = streetsFinished[3] = streetsFinished[4] = streetsFinished[10] =
              streetsFinished[11] = streetsFinished[12] = true;
          } else if (plot == 1) {
            streets[7].setAnimation("intersectionRight1" + floodSfx); streets[8].setAnimation("streetVert1" + floodSfx);
            streets[9].setAnimation("streetVert4" + floodSfx); streets[13].setAnimation("streetHoriz1" + floodSfx);
            streets[14].setAnimation("streetHoriz1" + floodSfx); streets[15].setAnimation("streetHoriz1" + floodSfx);
            streetsFinished[7] = streetsFinished[8] = streetsFinished[9] = streetsFinished[13] =
              streetsFinished[14] = streetsFinished[15] = true;
          }
        }
      } else { //for construction
        if (tier == 1) {
          if (plot == 0) {
            if (!streetsFinished[0]) (streets[0].setAnimation("bridgeVertCon"));
            if (!streetsFinished[1]) (streets[1].setAnimation("streetVertCon"));
          } else if (plot == 1) {
            if (!streetsFinished[0]) (streets[0].setAnimation("bridgeVertCon"));
            if (!streetsFinished[1]) (streets[1].setAnimation("streetVertCon"));
            if (!streetsFinished[2]) (streets[2].setAnimation("intersectionLeftCon"));
          } else if (plot == 2) {
            if (!streetsFinished[3]) (streets[3].setAnimation("streetVertCon"));
            if (!streetsFinished[4]) (streets[4].setAnimation("streetVertCon"));
          } else if (plot == 3) {
            if (!streetsFinished[4]) (streets[4].setAnimation("streetVertCon"));
          } else if (plot == 4) {
            if (!streetsFinished[5]) (streets[5].setAnimation("bridgeVertCon"));
            if (!streetsFinished[6]) (streets[6].setAnimation("streetVertCon"));
          } else if (plot == 5) {
            if (!streetsFinished[5]) (streets[5].setAnimation("bridgeVertCon"));
            if (!streetsFinished[6]) (streets[6].setAnimation("streetVertCon"));
            if (!streetsFinished[7]) (streets[7].setAnimation("intersectionRightCon"));
          } else if (plot == 6) {
            if (!streetsFinished[8]) (streets[8].setAnimation("streetVertCon"));
            if (!streetsFinished[9]) (streets[9].setAnimation("streetVertCon"));
          } else if (plot == 7) {
            if (!streetsFinished[9]) (streets[9].setAnimation("streetVertCon"));
          } else if (plot == 8) {
            if (!streetsFinished[0]) (streets[0].setAnimation("bridgeVertCon"));
            if (!streetsFinished[1]) (streets[1].setAnimation("streetVertCon"));
            if (!streetsFinished[2]) (streets[2].setAnimation("intersectionLeftCon"));
            if (!streetsFinished[10]) (streets[10].setAnimation("streetHorizCon"));
          }
        } else if (tier == 2) {
          if (plot == 1) {
            if (!streetsFinished[0]) (streets[0].setAnimation("bridgeVertCon"));
            if (!streetsFinished[1]) (streets[1].setAnimation("streetVertCon"));
            if (!streetsFinished[2]) (streets[2].setAnimation("intersectionLeftCon"));
            if (!streetsFinished[10]) (streets[10].setAnimation("streetHorizCon"));
            if (!streetsFinished[11]) (streets[11].setAnimation("streetHorizCon"));
            if (!streetsFinished[12]) (streets[12].setAnimation("streetHorizCon"));
            if (!streetsFinished[13]) (streets[13].setAnimation("streetHorizCon"));
          } else if (plot == 2) {
            if (!streetsFinished[5]) (streets[5].setAnimation("bridgeVertCon"));
            if (!streetsFinished[6]) (streets[6].setAnimation("streetVertCon"));
            if (!streetsFinished[7]) (streets[7].setAnimation("intersectionRightCon"));
            if (!streetsFinished[14]) (streets[14].setAnimation("streetHorizCon"));
            if (!streetsFinished[15]) (streets[15].setAnimation("streetHorizCon"));
          }
        } else if (tier == 3) {
          if (plot == 0) {
            if (!streetsFinished[2]) (streets[2].setAnimation("intersectionLeftCon"));
            if (!streetsFinished[3]) (streets[3].setAnimation("streetVertCon"));
            if (!streetsFinished[4]) (streets[4].setAnimation("streetVertCon"));
            if (!streetsFinished[10]) (streets[10].setAnimation("streetHorizCon"));
            if (!streetsFinished[11]) (streets[11].setAnimation("streetHorizCon"));
            if (!streetsFinished[12]) (streets[12].setAnimation("streetHorizCon"));
          } else if (plot == 1) {
            if (!streetsFinished[7]) (streets[7].setAnimation("intersectionRightCon"));
            if (!streetsFinished[8]) (streets[8].setAnimation("streetVertCon"));
            if (!streetsFinished[9]) (streets[9].setAnimation("streetVertCon"));
            if (!streetsFinished[13]) (streets[13].setAnimation("streetHorizCon"));
            if (!streetsFinished[14]) (streets[14].setAnimation("streetHorizCon"));
            if (!streetsFinished[15]) (streets[15].setAnimation("streetHorizCon"));
          }
        }
      }
    }
    //closes menu
    function closeMenu() {
      //visibility statements
      recycleSprites.setVisibleEach(false);
      educationLevelLeft.visible = charHead.visible = music.visible = true;
      if(cPoints>=20)(cMedals[0].visible=true);
      if(cPoints>=50)(cMedals[1].visible=true);
      if(cPoints>=100)(cMedals[2].visible=true);
      
      leftBackground.visible = paymentBgr.visible = shareHeader.visible = false;
      g1Indicator.visible = false;
      thumbDown.visible=thumbUp.visible=offerSign.visible=false;
      menuOpen = false;
    }

    //replaces t1 plots with building and roof
    function replaceT1Plot(plot) {
      t1Land[plot].visible = false; t1Buildings[plot].visible = t1Roofs[plot].visible = true;
      isFlooded[plot] = initOpent1[plot] = false;

      //set correct colors and animations
      var rand = randomNumber(0, 2);
      if (plot == 7) (rand = 3);
      t1Buildings[plot].setAnimation("t1BuildingSide" + rand);
      if (plot == 0 || plot == 4 || plot == 8) {
        t1Roofs[plot].setAnimation("t1Roof" + rand + "_green");
      } else {
        t1Roofs[plot].setAnimation("t1Roof" + rand);
      }
      t1BuildingPlaced[plot] = true;
      t1LandIsOpen[plot] = true;
      p1CompleteSharesOwned[0] += 3;
      if (plot == 10) {
        green1.visible = true;
      }
      if (plot == 11) {
        green2.visible = true;
      }
    }

    //replaces t2 plots with building and roof
    function replaceT2Plot(plot) {
      t2Land[plot].visible = false;
      t2Buildings[plot].visible = true;
      isFlooded[plot + 8] = initOpent2[plot] = false;

      //set correct animation
      if (plot == 1) {
        t2Buildings[plot].setAnimation("t2BuildingSide4");
        univHallLoop=loopCount;
      } else if (plot == 2) {
        t2Buildings[plot].setAnimation("t2BuildingSide");
      }

      t2BuildingPlaced[plot] = true;
      t2LandIsOpen[plot] = true;
      p1CompleteSharesOwned[1] += 5;
    }
    //replaces t3 plots with building and roof
    function replaceT3Plot(plot) {
      t3Land[plot].visible = false; t3Buildings[plot].visible =
        t3Roofs[plot].visible = t3Roofs[plot + 2].visible = true;
      
      isFlooded[plot + 11] = initOpent3[plot] = false;
      //set correct colors and animations
      t3Buildings[plot].setAnimation("t3BuildingSide");
      t3Roofs[plot+2].setAnimation("t3BuildingSide1");
      t3Roofs[plot].shapeColor = t3Roofs[plot + 2].shapeColor = rgb(220, 220, 220);

      t3BuildingPlaced[plot] = true;
      t3LandIsOpen[plot] = true;
      p1CompleteSharesOwned[2] += 7;
    }
    //calculations to place offers on map
    function placeOffer(offer, count) {
      var plotWasFound = false;
      var rLocation;
      //try to place the offer 3 times on t1 plots
      for (var o = 0; o < 3; o++) {
        rLocation = randomNumber(0, 8);
        if (t1LandIsOpen[rLocation] && t1PlotIsCompleted[rLocation] && (!t1BuildingPlaced[rLocation] || initOpent1[rLocation])) {
          playSound("audio/stake.mp3");
          if (t1BuildingPlaced[rLocation]) {
            offer.x = t1Land[rLocation].x; offer.y = t1Land[rLocation].y + 20;
          } else {
            offer.x = t1Land[rLocation].x; offer.y = t1Land[rLocation].y;
          }
          offerIncome[count] = (randomNumber(60, 180)) * 5;
          if(esopChosen)(offerIncome[count]=Math.round(offerIncome[count]*1.1));
          offersAvailable[count] = false;
          offerLocations[count] = rLocation;
          t1LandIsOpen[rLocation] = false;
          plotWasFound = true;
          break;
        }
      }

      //try to place the offer 1 time on t2 plots
      if (!plotWasFound) {
        rLocation = randomNumber(1, 2);
        if (t2LandIsOpen[rLocation] && t2PlotIsCompleted[rLocation] && (!t2BuildingPlaced[rLocation] || initOpent2[rLocation])) {
          playSound("audio/stake.mp3");
          if (t2BuildingPlaced[rLocation]) {
            offer.x = t2Land[rLocation].x; offer.y = t2Land[rLocation].y + 20;
          } else {
            offer.x = t2Land[rLocation].x; offer.y = t2Land[rLocation].y;
          }
          offerIncome[count] = (randomNumber(300, 700)) * 5;
          if(esopChosen)(offerIncome[count]=Math.round(offerIncome[count]*1.1));
          offersAvailable[count] = false;
          t2LandIsOpen[rLocation] = false;
          offerLocations[count] = rLocation + 12;
          plotWasFound = true;
        }
      }
      //try to place the offer 1 time on t3 plots
      if (!plotWasFound) {
        rLocation = randomNumber(0, 1);
        if (t3LandIsOpen[rLocation] && t3PlotIsCompleted[rLocation] && (!t3BuildingPlaced[rLocation] || initOpent3[rLocation])) {
          playSound("audio/stake.mp3");
          offer.x = t3Land[rLocation].x;
          if (t3BuildingPlaced[rLocation]) (offer.y = t3Land[rLocation].y + 20);
          else (offer.y = t3Land[rLocation].y);
          offerIncome[count] = (randomNumber(3200, 5200)) * 5;
          if(esopChosen)(offerIncome[count]=Math.round(offerIncome[count]*1.1));
          t3LandIsOpen[rLocation] = false;
          offerLocations[count] = rLocation + 18;
          offersAvailable[count] = false;
        }
      }
    }
    //User interface with offers
    function offerMenu(offerNum, opposeOption) {
      var offerIndex = offerNum - 1;
      if(jobProgressLeft>0){
        jobProgressLeft=0;
        lTouchingJob=false;
      }
      if (!offerOpen) {
        closeMenu();
        shareHeader.visible = true; 
        educationLevelLeft.visible = charHead.visible = music.visible = false;
        offerOpen = true;
        if(!offerIsConstruction[offerIndex])(offerSign.visible = true);
      }
      if (offerIsConstruction[offerIndex]) {
        shareHeader.shapeColor = rgb(255, 255, 50);
        fill(rgb(255, 242, 204));
        strokeWeight(2); stroke("black");
        rect(10, 748, 420, 42);

        fill(rgb(255,255,255));
        rect(428, 705, 362, 85);
  
        textSize(36); fill("black"); noStroke();
        text("-- Construction --", 220, 727);
        if(offerBuildCooldowns[offerNum-1]<loopCount-100){
          textSize(28);
          text("[E] Complete", 220, 770);
          textSize(24);
          text("Building will be completed a\nfew seconds after [E] is pressed.",610,750);
        }else{
          textSize(24);
          text("Construction will finish shortly...",610,750);
        }
        if (keyWentDown("e") && !pauseMainFunctions) {
          playSound("audio/hammer6x.mp3");
          playSound("audio/app_interface_button_3.mp3");
          offerBuildCooldowns[offerNum - 1] = loopCount;
        }

      } else {
        
        if(offerRatings[offerIndex]==""){
          var offerTier;
          //intialize offerTier
        if (offerLocations[offerIndex] < 9) (offerTier = 1);
        else if (offerLocations[offerIndex] == 13 || offerLocations[offerIndex] == 14) (offerTier = 2);
        else if (offerLocations[offerIndex] == 18 || offerLocations[offerIndex] == 19) (offerTier = 3);
         
        //"Rating" the offer
        var curIncome = offerIncome[offerIndex];
        if (offerTier == 1) {
          rateOffer(offerIndex, curIncome, 500, 700, 800);
        } else if (offerTier == 2) {
          rateOffer(offerIndex, curIncome, 2167, 2834, 3167);
        } else if (offerTier == 3) {
          rateOffer(offerIndex, curIncome, 1334, 16668, 21334);
        }
      }
        shareHeader.shapeColor = rgb(150, 155, 240);
        strokeWeight(2); stroke("black");
        fill(rgb(207, 226, 243));
        rect(10, 748, 420, 42);

        fill(rgb(255,255,255));
        rect(428, 705, 362, 85);
        textSize(36); fill("black"); noStroke();
        text("Investment Offer", 220, 727);
        textSize(28);
        text("[E] Support | [R] Oppose", 220, 770);
        if (voteData[0] == "none") {
          text("Proposed Revenue: $" + offerIncome[offerIndex], 613, 728);

          //colored background for rating
          stroke(rgb(20, 20, 20));
          strokeWeight(4);
          fill(ratingColors[offerIndex]);
          rect(610, 750, 160, 36);

          //text output
          fill("black"); noStroke();
          text("Offer Rating:", 520, 770);
          text(offerRatings[offerIndex], 690, 770);

          if (keyWentDown("e") && !pauseMainFunctions) {
            playSound("audio/app_interface_button_3.mp3");
            resetCleanUp();
            voteData[0] = "support";
            voteData[1] = offerNum + "";
            voteData[2] = 60;//randomNumber(160, 240) / 4;
            if(!opposeOption)(voteData[2]=randomNumber(204,240)/4);
            voteLoop = loopCount;
            //start spawning vote sprites
            lJobCooldown = loopCount - 85;
          } else if (keyWentDown("r") && opposeOption && !pauseMainFunctions) {
            playSound("audio/app_interface_button_3.mp3");
            resetCleanUp();
            voteData[0] = "oppose";
            voteData[1] = offerNum + "";
            voteData[2] = 60;//randomNumber(160, 240) / 4;
            voteLoop = loopCount;
            //start spawning vote sprites
            lJobCooldown = loopCount - 85;
          }
        } else if (offerNum + "" != voteData[1]) {
          text("Finish the current vote first!\nAdvocate for support!", 610, 750);
        } else {
          textSize(32);
          if(opposeOption)(text("This vote is in progress!\nPress [ENTER] to skip!", 610, 750));
          else(text("This vote is in progress!\nAdvocate for support!", 610, 750));
          
        }
      }
      if(isRaining){
        noStroke();fill(rgb(0,0,0,0.2));
        rect(10, 748, 420, 42);
        rect(428, 705, 362, 85);
      }
    }
    //resets game and returns to main menu
    function resetGame(data) {
      charSelectCount = [-360,-360,-360,-360];
      cMoneyUpdateCount = -60;
      loansUpdateCount = -60;
      cUpdateCount = -3600;
      loanCapCount = -60;
      offerSign.visible = false;
      gradScreen.visible = false;
      confetti.visible=false;
      stopLongSounds(true);
      menuPage = 0;
      xSlide = 0;
      credsCounter = 0;
      
      //Dont reset: muteMusic=false; hintsOn=true;
      mapSprite.visible=mapSprite1.visible=mapSprite2.visible=false;
      music.setAnimation("music");
      shockChar.x=-50; shockChar.y=-50;
      meetingSprites.setVisibleEach(false);
      meetingSprites[7].x = 400; meetingSprites[7].y = 650;
      meetingSprites[7].setVelocity(0, 0);
      meetingSprites[9].x=200;meetingSprites[10].x=600;
      meetingSprites[9].velocityX=meetingSprites[10].velocityX=0;
       streetsDec[2].visible = streetsDec[3].visible = lowPark.visible = t1Buildings[12].visible = t1Buildings[13].visible = false;
     offer1.x = offer1.y = offer2.x = offer2.y = offer3.x = offer3.y = -50;
      offer1.setAnimation("offer"); offer2.setAnimation("offer");
      offer3.setAnimation("offer");
      offer1.scale = offer2.scale = offer3.scale = 0.3;
      northParkSprites.setVisibleEach(false); centralParkSprites.setVisibleEach(false);
      for (var th = 0; th < 5; th++) {
        fires[th].x = -50; fires[th].y = -50;
      }
      lightning.x = lightning.y = -100;
      blackout.visible = false; blackout.shapeColor = rgb(0, 0, 0, 0.25);
      rain.visible = false;
      floods.setVisibleEach(false);
      leftChar.setVelocity(0, 0);
      cleanUpSprites.setVisibleEach(false);
      for (var pp = 0; pp < 10; pp++) {
        trash[pp].x = -50; trash[pp].y = -50;
      }
      g1Indicator.shapeColor = rgb(255, 255, 255);
      g1Indicator.visible = false;
      thumbDown.visible=thumbUp.visible=false;
      ship.x = 0; ship.y = -50; ship.velocityX = 0;
      birds[0].x = birds[0].y = birds[1].x = birds[1].y = -50;
      birds.setVelocityXEach(0);
      for (var carNumber = 0; carNumber < 6; carNumber++) {
        cars[carNumber].x = 0;
        cars[carNumber].y = -50;
      }
      cars.setVelocityEach(0, 0);
       for (var pe = 0; pe < 8; pe++) {
        pedestrians[pe].x = pedestrians[pe].y = -50;
      }
      pedestrians.setVelocityEach(0, 0);
      t1Roofs[0].setAnimation("t1RuinRoof");
      t1Roofs[3].setAnimation("t1RuinRoof");
      t1Roofs[6].setAnimation("t1RuinRoof");
      t3Roofs.setColorEach(rgb(220, 220, 220));
      t3Roofs.setVisibleEach(false);
      t1Land.setColorEach(rgb(0, 0, 0, 0.1)); t2Land.setColorEach(rgb(0, 0, 0, 0.1)); t3Land.setColorEach(rgb(0, 0, 0, 0.1));
      blackout.visible = educationLevelLeft.visible = charHead.visible =
        leftChar.visible = leftBackground.visible = shareHeader.visible = paymentBgr.visible = music.visible = false;
      cMedals.setVisibleEach(false);
      paymentBgr.shapeColor = rgb(255, 242, 204);
      jobSprites.setVisibleEach(false);
      t1Land.setVisibleEach(false); t2Land.setVisibleEach(false); t3Land.setVisibleEach(false);
       t1Land[1].visible = t1Land[2].visible = t1Land[4].visible = t1Land[5].visible =
        t1Land[7].visible = t1Land[8].visible = true;
      
       recycleSprites.setVisibleEach(false);
       
//tier 1 buildings
      t1Roofs.setVisibleEach(true);
      t1Roofs[12].visible = t1Roofs[13].visible = false;
      t1Buildings[0].setAnimation("t1BuildingRuin");
      t1Buildings[1].setAnimation("t1FenceRuin"); t1Roofs[1].visible = false;
      t1Buildings[2].setAnimation("t1LandRuin"); t1Roofs[2].visible = false;
      t1Buildings[3].setAnimation("t1BuildingRuin");
      t1Buildings[4].setAnimation("t1LandRuin"); t1Roofs[4].visible = false;
      t1Buildings[5].setAnimation("t1FenceRuin"); t1Roofs[5].visible = false;
      t1Buildings[6].setAnimation("t1BuildingRuin");
      t1Buildings[7].setAnimation("t1LandRuin"); t1Roofs[7].visible = false;
      t1Buildings[8].setAnimation("t1FenceRuin"); t1Roofs[8].visible = false;

     

      //tier 2 buildings
      t2Buildings[1].setAnimation("t2FenceRuin"); t2Land[1].visible = true;
      t2Buildings[2].setAnimation("t2BuildingRuin");
      t2Buildings[3].setAnimation("t2BuildingSide2");
      t2Buildings[4].setAnimation("t2BuildingSide3");

      //tier 3 buildings
      t3Buildings[0].setAnimation("t3FenceRuin"); t3Land[0].visible = true;
      t3Buildings[1].setAnimation("t3FenceRuin"); t3Land[1].visible = true;

      //reset green spaces
      green1.setAnimation("park2");
      green2.setAnimation("park1");
      green4.setAnimation("t3Park2");
      green3.setAnimation("t3Alleyway2");
      green5.setAnimation("t1Park2");
      green6.setAnimation("t1Park2");

      leftChar.x = 400; leftChar.y = 200;
      leftChar.setAnimation('leftDown');
      //reset street animations
      streets[0].setAnimation("bridgeVert2");
      streets[1].setAnimation("streetVert2");
      streets[2].setAnimation("intersectionLeft2");
      streets[3].setAnimation("streetVert2");
      streets[4].setAnimation("streetVert2");
      streets[5].setAnimation("bridgeVert2");
      streets[6].setAnimation("streetVert2");
      streets[7].setAnimation("intersectionRight2");
      streets[8].setAnimation("streetVert2");
      streets[9].setAnimation("streetVert2");
      for (var x = 0; x < 6; x++) {
        streets[x + 10].setAnimation("streetHoriz2");
      }

      for (var tg = 0; tg < jobSprites.length; tg++) {
        jobSprites[tg].x = -50; jobSprites[tg].y = -50;
      }
      educationLevelLeft.setAnimation('noSign'); educationLevelLeft.scale = 0.09;

      //reset objective list loopcounts for win screen
      for(var ix = 0;ix<objListCLDC.length;ix++){
        objListCLDC[ix][1]=-300;
      }
      for(var iy = 0;iy<objListP.length;iy++){
        objListP[iy][1]=-300;
      }
      
    //fully resets the game to go back to the main menu
      if(data){
        stopMusic();
        typingActive = false;
        introSelection = 0;
        walkthroughLoops = [-1,-1,-1];
        introControl = 0;
        esopChosen = false;
        infrastructureChosen = false;
      textStart = [];
      proposalDone = false;
      proposalSelected = 0;
      mainWalls[4].y -= 95;
      rChars.setVisibleEach(true);
      
      payMethod=0;
      meetingLoop = 7000;
      meetingControl = 0;
      meetingYear = 0;
      totalPayouts = 0;
      profitHistory = [];
      maxProfit = -1;
      leaderNum = randomNumber(0, 5);
      oppositionNum = randomNumber(0, 5);
      while (oppositionNum == leaderNum) {
        oppositionNum = randomNumber(0, 5);
      }
      reserveRate=0.05;
      loanRate=0.05;
      incumbentSelected = true;
      oppositionPolicies = [randomNumber(3, 10) / 100, randomNumber(3, 10) / 100];
      incumbentPopularity = 50;
      level = 0; dividends = 0; cExpenses = 0;
      cMult = 1;litterDebuff = 0;offerDebuff = 0;
      cLoans = 0; cIncome = 0; offerOpen = false;
      incomeArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      incomeUpdates = [-60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60, -60];
      roadCooldowns = [-360, -360, -360, -360, -360, -360, -360, -360, -360, -360, -360, -360, -360];
      sprint = 170; sprintLock = false; sprinting = false;
      parkLoop = [-3600, -3600];
      parkHintLoop = [-3600,-3600];
      parkCollisionNum = -1;
      fireLoops = [-3600, -3600, -3600, -3600, -3600];
      fireLocations = [-1, -1, -1, -1, -1];
      fireActive = false;
      fireCollisionNum = -1;
      isRaining = false;
      rainCooldown = -3600;
      shockLoop = -300;
      lightningCooldown = -360;
      isFlooded = [false, false, false, false, false, false, false, false, false, false, false, false, false];
      floodLoops = [-3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600, -3600];
      floodFactor = 200;
      streetFloodCooldown = -3600;
      floodActive = false;
      floodCollisionPlot = -1;
      recentPoints = 0;
      totExpenses = 0;
      totIncome = 0;
      totLoanPay = 0;
      totLoans = 0;
      totProfits = 0;
      winLoop = -60; gameplayTime = [0,0,0];
      gameLoop = 0;songLoop = 0;
      tutorialSkipped = false;
      lastSong=0;
      loopCopy = 0;
      advocacyLoop = [-3600, -3600];
      advocacyPlayer = [0, 0];
      quizStartLoop = -3600;
      pauseMainFunctions = false;
      gamePaused = false;
       offerBuildCooldowns = [-3600, -3600, -3600];
      plotsCompletedLeft = 0; voteData = ["none", "0", 50]; voteLoop = -3600; votingLoop = -3600;
      oldPosition = [-1, -1];
      votesComplete = [false, false];
      menuColors = [
        rgb(244, 204, 204), rgb(180, 235, 190), rgb(180, 235, 190), rgb(244, 204, 204),
        rgb(180, 235, 190), rgb(244, 204, 204), rgb(180, 235, 190),
        rgb(244, 204, 204), rgb(244, 204, 204), rgb(244, 204, 204), rgb(244, 204, 204)
      ];

      //clean-up data
      openCULocations = [
        true, true, true, true, true, true, true,
        true, true, true, true, true, true, true,
        true, true, true, true, true, true, true,
        true, true
      ];
      trashPositions = [
        -1, -1, -1, -1, -1,
        -1, -1, -1, -1, -1
      ];
      cleanUpActive = false;
      trashCollisionNum = -1;
      trashPoints = 0;
      trashPickedUp=0;
      cleanUpLoop = -3600;
      
      //reset offers
      offersAvailable = [true, true, true];
      offerIncome = [0, 0, 0]; offerIsConstruction = [false, false, false];
      offerLocations = [-1, -1, -1];
      offerRatings = ["", "", ""];
      ratingColors = ["white", "white", "white"];
      ePoints = 0;
      cPoints = 0;
      //reset objectives 
      objListCLDC = [
       ["Construct the University Hall", -300, false,false],
      ["Construct the Recycling Center", -300, false,false],
      ["Rebuild All City Roads", -300, false,false],
      ["Develop Both Parks", -300, false,false],
      ["Construct a Commercial Building", -300, false,false],
      ["Develop the Entire City", -300, false,false],
      ["Pay Off More Than $100k in Loans", -300, false,false],
      ["Reach $1,000,000 in Annual Profit", -300, false,false]
      ];
      curObjListCLDC = ["", "", ""];

      objListP = [
      ["Earn 20 Community Service Points", -300, false,false],
      ["Advocate For a Land Plot Vote", -300, false,false],
      ["Help Renovate a Park", -300, false,false],
      ["Earn 50 Community Service Points", -300, false,false],
      ["Complete the Ownership Quiz", -300, false,false],
      ["Earn 100 Community Service Points", -300, false,false],
      ["Receive $5k in Dividends", -300, false,false],
      ["Put Out a Fire", -300, false,false],
      ["Stop a Flood", -300, false,false]
    ];
      curObjListP = ["", ""];
      objColors = ['white', 'white', "white",
        "white", "white", "white"];
      objCount = 0;
        
        hintList = [false,false,false];
        univHallLoop = -3600;
        
      //reset parks
      parksCompleted = [false, false];

      //reset ships and cars
      carCooldown = -3600;
      carsAvailable = [true, true, true, true, true, true];
      pedCooldown = -3600;

      //Data if all shares are bought
      t1PlotIsCompleted = [false, false, false, false, false, false, false, false, false];
      t2PlotIsCompleted = [false, false, false];
      t3PlotIsCompleted = [false, false];
      t1BuildingPlaced = [true, false, false, true, false, false, true, false, false];
      t2BuildingPlaced = [false, false, true];
      t3BuildingPlaced = [false, false];
      t1LandIsOpen = [true, true, true, true, true, true, true, true, true];
      t2LandIsOpen = [true, true, true];
      t3LandIsOpen = [true, true];
      initOpent1 = [true, false, false, true, false, false, true, false, false]
      initOpent2 = [false, false, true];
      initOpent3 = [false, false];

      //data of street availability
      streetsOpen = [
        true, true, true, true, true,//left street
        true, true, true, true, true,//right street
        false, true, true, false, true, true,//mid horiz street
      ];
      streetsFinished = [
        false, false, false, false, false,//left street
        false, false, false, false, false,//right street
        false, false, false, false, false, false,//mid horiz street
      ];
      carsAvailable = [true, true, true, true, true, true];

      p1CompleteSharesOwned = [0, 0, 0];
      lJobCooldown = -200;
      randomJobLocationsLeft = [-1, -1];
      jobProgressLeft = 0;
      questionsAnsweredLeft = [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
      ];
      educationOpen = false;
      randomQuestionLeft = randomNumber(0, 19);
      vocabQuestionsAnsweredLeft = [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false
      ];
      t3QuestionsAnsweredLeft = [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false
      ];
      quizHoverLeft = 1;
      quizColorsLeft = ['white', 'lightGray', 'lightGray', 'lightGray'];
      educationProgressLeft = -1;
      loopAtAnswerLeft = -200;
      totalQuestionsLeft = 0;

      jobLocations = [
        -1, -1, -1, -1,
        -1, -1, -1, -1,
        -1, -1, -1, -1,
      ];
        
      loopCount = 130;
      whiteBackground.visible = leftChar1.visible = rightChar1.visible = aChar1.visible = 
      bChar1.visible = true;

      }
    }
    //movement for cars, ships, and pedestrians (decorational)
    function backgroundMovement() {
      //Car movement on highway{
      if (carCooldown - loopCount == 0) {
        for (var loop = 0; loop < 6; loop++) {
          if (carsAvailable[loop]) {
            carsAvailable[loop] = false;
            var currentCar = cars[loop];
            if (randomNumber(0, 1) == 0) {
              currentCar.y = 498;
              currentCar.x = -50;
              if (loop != 2) (currentCar.setAnimation("carRight"));
              else (currentCar.setAnimation("busRight"));
              currentCar.velocityX = 8;
            } else {
              currentCar.y = 462;
              currentCar.x = 850;
              if (loop != 2) (currentCar.setAnimation("carLeft"));
              else (currentCar.setAnimation("busLeft"));
              currentCar.velocityX = -8;
            }
            break;
          }
        }
        //increases frequency with more plots completed
        carCooldown = loopCount + randomNumber(90 - plotsCompletedLeft * 3, 160 - plotsCompletedLeft * 5);
      }
      //control car movement, detect when they reach the end
      for (var carNum = 0; carNum < 6; carNum++) {
        if ((cars[carNum].x < -50) || (cars[carNum].x > 850)) {
          cars[carNum].setVelocity(0, 0);
          cars[carNum].y = -50;
          cars[carNum].x = 0;
          carsAvailable[carNum] = true;
        }
      }
      //}

      

      

      //boat movement on river
      if (ship.x > 880) {
        ship.x = -50;
        ship.y = randomNumber(20, 50);
        if(randomNumber(1,10) == 1){
          ship.setAnimation("steamboat_willie");
          ship.scale = 0.3;
          ship.y=35;
        }else{
          ship.setAnimation("cargoShip");
          ship.scale = 0.2;
        }
      }
      //boat horn
      if(level==2 && ship.x==250 && randomNumber(0,4)==0 && !pauseMainFunctions)(playSound("audio/boatHorn.mp3"));
      
      //bird movement
      if (!isRaining && !pauseMainFunctions) {
        if (birds[0].x > 1000) {
          birds[0].x = randomNumber(-800, -20);
          birds[0].y = randomNumber(20, 680);
        }
        if (birds[1].x > 1000) {
          birds[1].x = randomNumber(-800, -20);
          birds[1].y = randomNumber(20, 680);
        }
      }
      
      //start pedestrian movement on sidewalks
      if (pedCooldown - loopCount == 0) {
        for (var pedNum = 0; pedNum < 8; pedNum++) {
          var curPed = pedestrians[pedNum];
          if (curPed.velocityX == 0 && curPed.velocityY == 0) {
            //curPed is not moving on the screen
            var randStart = randomNumber(0, 3);
            switch (randStart) {
              case 0:
                //walk down on left side
                curPed.setAnimation(pedAnimations[pedNum] + "WalkDown");
                curPed.x = 95; curPed.y = -10; curPed.velocityY = 0.5;
                break;
              case 1:
                //walk up on left side
                curPed.setAnimation(pedAnimations[pedNum] + "WalkUp");
                curPed.x = 145; curPed.y = 680; curPed.velocityY = -0.5;
                break;
              case 2:
                //walk down on right side
                curPed.setAnimation(pedAnimations[pedNum] + "WalkDown");
                curPed.x = 655; curPed.y = -10; curPed.velocityY = 0.5;
                break;
              case 3:
                //walk up on right side
                curPed.setAnimation(pedAnimations[pedNum] + "WalkUp");
                curPed.x = 705; curPed.y = 680; curPed.velocityY = -0.5;
                break;
            }
            break;
          }
        }
        pedCooldown = loopCount + randomNumber(700 - plotsCompletedLeft * 27, 1200 - plotsCompletedLeft * 45);
      }
      //control pedestrian movement
      for (var ped = 0; ped < 8; ped++) {
        var curPed = pedestrians[ped];
        if (curPed.velocityX != 0 || curPed.velocityY != 0) {
          if (curPed.velocityY < 0) {
            //traveling up
            if (curPed.y < 0) {
              curPed.x = curPed.y = -50; curPed.setVelocity(0, 0);
            }
            else if (curPed.y == 175 && curPed.x == 705 && randomNumber(0, 1) == 0) {
              curPed.setVelocity(-0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkLeft");
            } else if (curPed.y == 225 && curPed.x == 145 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkRight");
            } else if (curPed.y == 385 && curPed.x == 145 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkRight");
            } else if (curPed.y == 225 && curPed.x == 400) {
              curPed.setVelocity(0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkRight");
            }
          }
          else if (curPed.velocityY > 0) {
            //traveling down
            if (curPed.y > 685) {
              curPed.x = curPed.y = -50; curPed.setVelocity(0, 0);
            }
            else if (curPed.y == 225 && curPed.x == 95 && randomNumber(0, 1) == 0) {
              curPed.setVelocity(0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkRight");
            }
            else if (curPed.y == 385 && curPed.x == 655 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(-0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkLeft");
            }
            else if (curPed.y == 175 && curPed.x == 655 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(-0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkLeft");
            }
            else if (curPed.y == 385 && curPed.x == 400) {
              if (randomNumber(0, 1) == 0) {
                curPed.setVelocity(-0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkLeft");
              } else {
                curPed.setVelocity(0.5, 0); curPed.setAnimation(pedAnimations[ped] + "WalkRight");
              }
            }
          }
          else if (curPed.velocityX < 0) {
            //traveling left
            if (curPed.x == 145 && randomNumber(0, 1) == 0) {
              curPed.setVelocity(0, -0.5); curPed.setAnimation(pedAnimations[ped] + "WalkUp");
            }
            else if (curPed.x == 400 && curPed.y == 385 && randomNumber(0, 1) == 0) {
              curPed.setVelocity(0, -0.5); curPed.setAnimation(pedAnimations[ped] + "WalkUp");
            }
            else if (curPed.x == 655 && curPed.y == 175 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(0, 0.5); curPed.setAnimation(pedAnimations[ped] + "WalkDown");
            }
            else if (curPed.x == 145 && curPed.y == 385) {
              curPed.setVelocity(0, -0.5); curPed.setAnimation(pedAnimations[ped] + "WalkUp");
            }
            else if (curPed.x == 95) {
              curPed.setVelocity(0, 0.5); curPed.setAnimation(pedAnimations[ped] + "WalkDown");
            }
          }
          else if (curPed.velocityX > 0) {
            //traveling right
            if (curPed.x == 400 && curPed.y == 225 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(0, 0.5); curPed.setAnimation(pedAnimations[ped] + "WalkDown");
            }
            else if (curPed.x == 655 && curPed.y == 225 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(0, 0.5); curPed.setAnimation(pedAnimations[ped] + "WalkDown");
            }
            else if (curPed.x == 400 && curPed.y == 385 && randomNumber(0, 1) == 0) {
              curPed.setVelocity(0, -0.5); curPed.setAnimation(pedAnimations[ped] + "WalkUp");
            }
            else if (curPed.x == 145 && curPed.y == 175 && randomNumber(0, 2) == 0) {
              curPed.setVelocity(0, -0.5); curPed.setAnimation(pedAnimations[ped] + "WalkUp");
            }
            else if (curPed.x == 655 && curPed.y == 385) {
              curPed.setVelocity(0, 0.5); curPed.setAnimation(pedAnimations[ped] + "WalkDown");
            }
            else if (curPed.x == 705) {
              curPed.setVelocity(0, -0.5); curPed.setAnimation(pedAnimations[ped] + "WalkUp");
            }
          }
        }
      }
    }
    //finds an open street and places a voting sprite on it
    function placeVotingSprite(number) {
      //find open street to place vote sprite on
      for (var xj = 0; xj < 3; xj++) {
        randomJobLocationsLeft[number] = randomNumber(0, 15);
        if (streetsOpen[randomJobLocationsLeft[number]]) {
          break;
        }
      }
      
      advocacyPlayer[number] = randomNumber(0, 9);
      while(advocacyPlayer[number]==(charNum-1)){
        advocacyPlayer[number] = randomNumber(0, 9);
      }
      if (voteData[0] == "support") {
        jobSprites[number].setAnimation("no_" + advocacyPlayer[number]);
      } else {
        jobSprites[number].setAnimation("yes_" + advocacyPlayer[number]);
      }
      
      //move vote sprite to chosen location
      jobLocations[number] = randomJobLocationsLeft[number];
      jobSprites[number].visible = true;
      jobSprites[number].x = streets[randomJobLocationsLeft[number]].x; jobSprites[number].y = streets[randomJobLocationsLeft[number]].y;
      streetsOpen[randomJobLocationsLeft[number]] = false;

      lJobCooldown = loopCount;
    }
    //collisions for advocacy sprites and calculations
    function advocacyFunctions(number) {
      if(offerOpen){
             shareHeader.visible = false;
            educationLevelLeft.visible = charHead.visible = music.visible = true;
            offerOpen = false; 
            }
      
      if (!lTouchingJob) {
        jobProgressLeft += 0.01;
        lTouchingJob = true;
        closeMenu(); 
      } if (keyDown("E") && (!votesComplete[number])) {
        jobProgressLeft += 0.04;
      }
      //if the task is done
      if (jobProgressLeft >= 1 && charBoxLeft.isTouching(jobSprites[number])) {
        playSound("audio/write.mp3");
        if (voteData[0] == "support") {
          jobSprites[number].setAnimation("yes_" + advocacyPlayer[number]);
        } else {
          jobSprites[number].setAnimation("no_" + advocacyPlayer[number]);
        }
        votesComplete[number] = true;
        advocacyLoop[number] = loopCount;
        cPoints++;
        cExpenses--;
        if (cExpenses < 0) {
          cExpenses = 0;
        }
        //Community service colors
        if (cPoints > 0) (menuColors[9] = rgb(180, 235, 190));
        else (menuColors[9] = rgb(244, 204, 204));
        recentPoints = 1;
        cUpdateCount = loopCount;
        if (lJobCooldown + 120 <= loopCount) {
          lJobCooldown = loopCount;
        }
        jobProgressLeft = 0;

        //adjust voteData according to position and education level
        if (voteData[0] == "support") {
          if (educationProgressLeft < 1) {
            voteData[2] += randomNumber(1, 8) / 4;
          } else {
            voteData[2] += randomNumber(8, 16) / 4;
          }
          //subtract from supporting votes
        } else if (voteData[0] == "oppose") {
          if (educationProgressLeft < 1) {
            voteData[2] -= randomNumber(1, 8) / 4;
          } else {
            voteData[2] -= randomNumber(8, 16) / 4;
          }
        }

      //check for objective "advocate for a land plot vote" completion
        if(!objListP[1][3]){
          objListP[1][1]=loopCount;
          objListP[1][3]=true;
          objCount++;
        }
      }
    }
    //rates the offer based on three max inputted values
    function rateOffer(offerIndex, curIncome, maxPoor, maxAverage, maxGood) {
      if (curIncome < maxPoor) {
        offerRatings[offerIndex] = "POOR";
        ratingColors[offerIndex] = rgb(255, 220, 225);
      } else if (curIncome < maxAverage) {
        offerRatings[offerIndex] = "AVERAGE";
        ratingColors[offerIndex] = rgb(255, 255, 210);
      } else if (curIncome < maxGood) {
        offerRatings[offerIndex] = "GOOD";
        ratingColors[offerIndex] = rgb(220, 255, 225);
      } else {
        offerRatings[offerIndex] = "EXCELLENT";
        ratingColors[offerIndex] = rgb(225, 220, 255);
      }
    }
    //matches the randomly generated value to a position on the map and places a trash there
    function placeTrash(rValue, trashNum) {
      if (trashPositions[trashNum] == -1) {
        switch (rValue) {
          case 0:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[1].x - 30; trash[trashNum].y = streets[1].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 1:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[2].x - 30; trash[trashNum].y = streets[2].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 2:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[3].x - 30; trash[trashNum].y = streets[3].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 3:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[4].x - 30; trash[trashNum].y = streets[4].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 4:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[1].x + 30; trash[trashNum].y = streets[1].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 5:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[3].x + 30; trash[trashNum].y = streets[3].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 6:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[4].x + 30; trash[trashNum].y = streets[4].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 7:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[6].x - 30; trash[trashNum].y = streets[6].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 8:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[8].x - 30; trash[trashNum].y = streets[8].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 9:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[9].x - 30; trash[trashNum].y = streets[9].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            } return false;
          case 10:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[6].x + 30; trash[trashNum].y = streets[6].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            } return false;
          case 11:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[7].x + 30; trash[trashNum].y = streets[7].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 12:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[8].x + 30; trash[trashNum].y = streets[8].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 13:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[9].x + 30; trash[trashNum].y = streets[9].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 14:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[10].x; trash[trashNum].y = streets[10].y - 30;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 15:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[11].x; trash[trashNum].y = streets[11].y - 30;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 16:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[12].x; trash[trashNum].y = streets[12].y - 30;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 17:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[13].x; trash[trashNum].y = streets[13].y - 30;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 18:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[14].x; trash[trashNum].y = streets[14].y - 30;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 19:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[15].x; trash[trashNum].y = streets[15].y - 30;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 20:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[11].x; trash[trashNum].y = streets[11].y + 20;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 21:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[12].x; trash[trashNum].y = streets[12].y + 20;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 22:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[13].x; trash[trashNum].y = streets[13].y + 20;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 23:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[15].x; trash[trashNum].y = streets[15].y + 20;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 24:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[0].x - 30; trash[trashNum].y = streets[0].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 25:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[0].x + 30; trash[trashNum].y = streets[0].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 26:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[5].x - 30; trash[trashNum].y = streets[5].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 27:
            if (openCULocations[rValue]) {
              trash[trashNum].x = streets[5].x + 30; trash[trashNum].y = streets[5].y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 28:
            if (openCULocations[rValue]) {
              trash[trashNum].x = green4.x + 150; trash[trashNum].y = green4.y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 29:
            if (openCULocations[rValue]) {
              trash[trashNum].x = green4.x - 150; trash[trashNum].y = green4.y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 30:
            if (openCULocations[rValue]) {
              trash[trashNum].x = green4.x; trash[trashNum].y = green4.y - 80;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
          case 31:
            if (openCULocations[rValue]) {
              trash[trashNum].x = green4.x; trash[trashNum].y = green4.y;
              openCULocations[rValue] = false; trashPositions[trashNum] = rValue;
              trash[trashNum].rotation = randomNumber(0, 360);
              return true;
            }
            return false;
        }
      } else {
        return false;
      }


    }
    //determines if the fire progress bar should be open or not
    function checkFireCollisions() {
      for (var fi = 0; fi < 5; fi++) {
        if (charBoxLeft.isTouching(fires[fi])) {
          fireCollisionNum = fi;
          return true;
        }
      }
    }

    //determines if the flood progress bar should be open or not
    function checkFloodCollisions() {
      for (fo = 0; fo < 9; fo++) {
        if (floods[fo].visible && (charBoxLeft.isTouching(t1Land[fo]) || charBoxLeft.isTouching(floods[fo]))) {
          floodCollisionPlot = fo;
          return true;
        }
      }
      if (floods[9].visible && (charBoxLeft.isTouching(t2Land[1]) || charBoxLeft.isTouching(floods[9]))) {
        floodCollisionPlot = 9;
        return true;
      }
      if (floods[10].visible && (charBoxLeft.isTouching(t2Land[2]) || charBoxLeft.isTouching(floods[10]))) {
        floodCollisionPlot = 10;
        return true;
      }
      if (floods[11].visible && (charBoxLeft.isTouching(t3Land[0]) || charBoxLeft.isTouching(floods[11]))) {
        floodCollisionPlot = 11;
        return true;
      }
      if (floods[12].visible && (charBoxLeft.isTouching(t3Land[1]) || charBoxLeft.isTouching(floods[12]))) {
        floodCollisionPlot = 12;
        return true;
      }
    }

    //determines if the trash progress bar should be open or not
    function checkTrashCollisions() {
      for (var fl = 0; fl < 10; fl++) {
        if (charBoxLeft.isTouching(trash[fl])) {
          trashCollisionNum = fl;
          return true;
        }
      }
    }

    //determines if the park progress bar should be open or not
    function checkParkCollisions(parkNum) {
      if (parkNum == 0) {
        for (var fd = 0; fd < 3; fd++) {
          if (charBoxLeft.isTouching(northParkSprites[fd]) && northParkSprites[fd].visible) {
            parkCollisionNum = fd;
            return true;
          }
        }
      } else {
        for (var fe = 0; fe < 5; fe++) {
          if (charBoxLeft.isTouching(centralParkSprites[fe]) && centralParkSprites[fe].visible) {
            parkCollisionNum = fe;
            return true;
          }
        }
      }
      return false;
    }

    //resets the clean up job back to the advocacy settings
    function resetCleanUp() {
      cleanUpActive = false;
      cleanUpSprites.setVisibleEach(false);
      jobProgressLeft = 0;
      cPoints += trashPoints;
      cExpenses -= (trashPoints*cMult);
      if (cExpenses < 0) {
        cExpenses = 0;
      }
      //Community service colors
      if (cPoints > 0) {
        menuColors[9] = rgb(180, 235, 190);
      }
      else (menuColors[9] = rgb(244, 204, 204));
      if (trashPoints > 0) {
        recentPoints = trashPoints;
        cUpdateCount = loopCount;
      }
      trashPoints = 0;
      trashPickedUp=0;
    }
    //}

    function addCommas(num) {
      if (num == 0) {
        return 0;
      }
      var numberString = num.toString();
      var result = '';
      if(num<0){
        numberString = numberString.substring(1);
      }

      for (var i = 0; i < numberString.length; i++) {
        result += numberString[i];

        var remainingDigits = numberString.length - i - 1;
        if (remainingDigits % 3 === 0 && remainingDigits !== 0) {
          result += ',';
        }
      }
      return result;
    }
    //searches through the fire locations. If it finds an open fire, it returns its number. If all the fires are active, it returns -1.
    function findOpenFire() {
      var returnNum = -1;
      for (var x = 0; x < 5; x++) {
        if (fireLocations[x] == -1) {
          returnNum = x;
          break;
        }
      }
      return returnNum;
    }
    //searches the fire locations array, returning -1 if all of them are open and the number of fires if fires are active
    function isFireActive() {
      var returnNum = -1;
      for (var x = 0; x < 5; x++) {
        if (fireLocations[x] != -1) {
          if (returnNum == -1) (returnNum = 1);
          else (returnNum++);
        }
      }
      return returnNum;
    }

    //handles all the flood task functions
    function floodFunctions(plot) {
      //char is contacting a flood plot
      progressMessageLeft = "[E] Stop Flood";
      if (menuOpen || offerOpen) {
        closeMenu();
        shareHeader.visible = offerOpen = false;
        educationLevelLeft.visible = charHead.visible = music.visible = true;
        if(cPoints>=20)(cMedals[0].visible=true);
        if(cPoints>=50)(cMedals[1].visible=true);
        if(cPoints>=100)(cMedals[2].visible=true);
      }
      if (!lTouchingJob) {
        jobProgressLeft += 0.01;
        lTouchingJob = true;
        closeMenu();
      }
      if (keyDown("e") && !pauseMainFunctions) {
        jobProgressLeft += 0.02;
      }
      //if the task is done
      if ((jobProgressLeft >= 1)) {
        playSound("audio/splash.mp3");
        floods[plot].visible = false;
        floodLoops[plot] = -3600;
        isFlooded[plot] = false;
        
        if (!isFloodActive()) {
          floodActive = false;
          stopSound("audio/flood.mp3");
        }
        
        //reset flooded roads
        if (plot < 9) {
          buildRoads(1, plot, false, false);
          t1LandIsOpen[plot] = true;
        }
        else if (plot < 11) {
          buildRoads(2, plot - 8, false, false);
          t2LandIsOpen[plot - 8] = true;
        }
        else {
          buildRoads(3, plot - 11, false, false);
          t3LandIsOpen[plot - 11] = true;
        }
        cExpenses -= 1;
        recentPoints = 1;
        cPoints += 1;
        cUpdateCount = loopCount;
        jobProgressLeft = 0;

        //check for stop flood objective
            if(!objListP[8][3]){
              objListP[8][1]=loopCount;
              objListP[8][3]=true;
              objCount++;
              hintList[8]=true;
            }
      }

    }
    //checks if a flood is active somewhere
    function isFloodActive() {
      for (var plot = 0; plot < 13; plot++) {
        if (floods[plot].visible) {
          return true;
        }
      }
      return false;
    }

    function wordifyNum(num) {
      if (num % 10 == 1 && num % 100 != 11) {
        return "st";
      } else if (num % 10 == 2 && num % 100 != 12) {
        return "nd";
      } else if (num % 10 == 3 && num % 100 != 13) {
        return "rd";
      } else {
        return "th";
      }
    }

    function spotlight(x1,y1,width,height){
      fill(rgb(0,0,0,0.8)); noStroke();
      rect(0,0,1600,y1);
      rect(0,y1,x1,800-y1);
      rect(x1+width,y1,1600-(x1+width),height);
      rect(x1,y1+height,1600-x1,1600-(y1+height));
    }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
