import Link from 'next/link';

export function ResumeIntroduce() {
  return (
    <blockquote className="my-10">
      <p>
        저는 성장의 동력을 잃지 않는 <strong>스포츠 선수 같은 개발자</strong>입니다. 문제 해결을 위한 접근과 시도, 그
        과정에서 느낄 수 있는 성취와 몰입에 큰 즐거움을 느끼며 개발자로서의 성장의 보폭을 넓히기 위해 주력하고 있습니다.
      </p>
      <br />
      <p>
        지난 2년간, 총 3개의 교육 과정을 이수하고 7개의 프로젝트에 합류하며 <strong>웹 프론트엔드</strong> 개발에 대한
        전문성을 쌓았습니다. 최근에는{' '}
        <Link href="https://www.sejulbook.com" target="_blank">
          &apos;세 줄 독후감&apos;
        </Link>{' '}
        웹 사이트를 운영하며 자원 최적화, 성능 최적화 등 사용자에게 더 나은 경험을 제공하기 위한 지속적인 유지보수에
        집중하고 있습니다.
      </p>
      <br />
      개발자 커리어의 시작을 웹 프론트엔드로 선택했지만, 분야를 가리지 않고 끊임없이 개발 관심사를 넓혀나가고 싶습니다.
    </blockquote>
  );
}
