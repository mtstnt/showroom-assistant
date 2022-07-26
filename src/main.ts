import Gift from './widgets/gift';

const main = async () => {
  const video = document.querySelector('video');
  if (!video) {
    return;
  }

  document.querySelector('.l-main')!.innerHTML += (new Gift().render());
}

main();
