import './App.css';

export function Screenshots({title, imgSrcs}) {
  const images = imgSrcs.map((src) => 
		<img src={src} alt="app index android screenshot" width="232.05" height="490.8" />
	);

  return <div class="screenshots"><h2>{title}</h2><div class="screens">{images}</div></div>
}