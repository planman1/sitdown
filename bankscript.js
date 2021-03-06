import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";


async function run() {    

    function errHandler(err) {
        console.log("API error", err);
    }

    async function onReady() {
        console.log("API ready");
        try {
          
            viewerApi.enableAnnotations(true);
            const newAnnotation = await viewerApi.addAnnotation({
                label: "A",
                text: "Kernenergie",
                name: "TestName",
                objectName: "1_HRA"
            });
           const newAnnotation2 = await viewerApi.addAnnotation({
                label: "B",
                text: "Kernenergie",
                name: "TestName2",
                objectName: "2_URA"
            });
            const newAnnotation3 = await viewerApi.addAnnotation({
                label: "C",
                text: "Kernenergie",
                name: "TestName",
                objectName: "3_KER"
            });
            const newAnnotation4 = await viewerApi.addAnnotation({
                label: "D",
                text: "Kernenergie",
                name: "TestName",
                objectName: "4_MED"
            });
            const newAnnotation5 = await viewerApi.addAnnotation({
                label: "E",
                text: "Kernenergie",
                name: "TestName",
                objectName: "5_IND"
            });
            const newAnnotation6 = await viewerApi.addAnnotation({
                label: "F",
                text: "Kernenergie",
                name: "TestName",
                objectName: "6_RES"
            });
            const newAnnotation7 = await viewerApi.addAnnotation({
                label: "G",
                text: "Kernenergie",
                name: "TestName",
                objectName: "7_OVE"
            });
            const newAnnotation8 = await viewerApi.addAnnotation({
                label: "H",
                text: "Kernenergie",
                name: "TestName",
                objectName: "8_RKM"
            });
            
            
            console.log("New annotation created", newAnnotation);
            const allSceneObjects = await viewerApi.getObjects();
            console.log("Objects", allSceneObjects); 

            const currentPosition = await viewerApi.getPosition("1_HRA");
            const currentPosition2 = await viewerApi.getPosition("2_URA");
            const currentPosition3 = await viewerApi.getPosition("3_KER");
            const currentPosition4 = await viewerApi.getPosition("5_IND");
            const currentPosition5 = await viewerApi.getPosition("6_RES");
            const currentPosition6 = await viewerApi.getPosition("7_OVE");
            const currentPosition7 = await viewerApi.getPosition("8_RKM");
            console.log("Rocket position:", currentPosition); 
            console.log("Rocket position2:", currentPosition2); 

            function animation() {
              VctrApi.Utils.animate(
                1500,
                "easeOutQuad",
                (timeFraction) => {
                  const position = VctrApi.Utils.lerp(currentPosition, [413.3167572021486, 382.936248779297, -757.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("1_HRA", position);
                  const position2 = VctrApi.Utils.lerp(currentPosition2, [513.3167572021486, 382.936248779297, -657.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("2_URA", position2);
                  const position3 = VctrApi.Utils.lerp(currentPosition3, [563.3167572021486, 382.936248779297, -557.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("3_KER", position3);
                  const position4 = VctrApi.Utils.lerp(currentPosition4, [663.3167572021486, 382.936248779297, -557.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("5_IND", position4);
                  const position5 = VctrApi.Utils.lerp(currentPosition5, [763.3167572021486, 382.936248779297, -607.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("6_RES", position5);
                  const position6 = VctrApi.Utils.lerp(currentPosition6, [763.3167572021486, 382.936248779297, -657.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("7_OVE", position6);
                  const position7 = VctrApi.Utils.lerp(currentPosition7, [763.3167572021486, 382.936248779297, -707.3549995422367], timeFraction);
                  viewerApi.setPositionAbsolute("8_RKM", position7);
                }
              );
            }

            animation();
            
          
        } catch (e) {
            errHandler(e);
        }
    }

    const viewerApi = new VctrApi("76a49300-e485-4351-a116-4d281db171ca", errHandler);

    try {
        await viewerApi.init();        
        onReady();
    } catch (e) {
        errHandler(e);
    }
}

run();
 