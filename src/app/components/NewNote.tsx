import { MdOutlineKeyboardVoice } from "react-icons/md";
import { Button } from "@/components/ui/button"

export function NewNote(){

  /*const [data, setData] = useState(null);

  /*const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;
  const SpeechRecognitionEvent =
    window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
  let recognition = new SpeechRecognition()

  recognition.lang = 'en-US'
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  function handleClick() {
    recognition.start()
  }

  recognition.onresult = (event:any) => {
    const note = event.results[0][0].transcript;
    setData(note);
  };*/

  function handleClick(){

  }

    return (
      <div className="mt-40 w-[800px] h-10 rounded-full m-3 border-gray-400 border-2 p-2 flex justify-between">
              <div className="flex flex-row justify-between">
                  <div>
                  <MdOutlineKeyboardVoice />
                  </div>
                  <div className="font-extralight ml-[630px]">
                        <Button onClick={handleClick}>Start Recording</Button>
                  <div>
                </div>
              </div>
            </div>
     </div>
    )
  }