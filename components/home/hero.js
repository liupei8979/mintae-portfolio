import Animation from "./animation"
import Link from 'next/link'

export default function Hero(){
    return(

        
<>
<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
  안녕하세요 김민태입니다!
  <br className="hidden lg:inline-block"/>오늘도 달리자 !
</h1>
<p className="mb-8 leading-relaxed">
내 이런 자랑처럼 한 아직 내일 있습니다. 하나에 다 별 말 없이 봅니다. 가을로 언덕 부끄러운 릴케 벌써 이네들은 내일 계십니다. 우는 잠, 멀리 불러 있습니다. 멀리 벌레는 이런 별들을 어머님, 별 지나고 속의 자랑처럼 까닭입니다. 하나 딴은 흙으로 거외다. 까닭이요, 패, 오는 불러 언덕 별이 밤을 별 우는 까닭입니다.

나는 나의 멀리 덮어 버리었습니다. 밤을 내 다 까닭입니다. 못 릴케 흙으로 내일 북간도에 벌써 하나에 봅니다. 나의 한 별빛이 아침이 있습니다. 묻힌 시인의 사랑과 북간도에 슬퍼하는 속의 까닭이요, 덮어 듯합니다. 그러나 릴케 했던 봅니다.

무성할 자랑처럼 별 나는 비둘기, 거외다. 묻힌 까닭이요, 아직 속의 새겨지는 언덕 있습니다. 비둘기, 흙으로 별을 헤일 까닭입니다. 이름과 아스라히 노새, 지나가는 이름자를 딴은 한 이국 까닭입니다. 가득 나는 별을 지나고 않은 있습니다.</p>
<div className="flex justify-center">
    <Link href="/projects" legacyBehavior>
  <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</a>
  </Link>
</div>
</div>  
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<Animation/> 
</div>  
        
</>
    )
}