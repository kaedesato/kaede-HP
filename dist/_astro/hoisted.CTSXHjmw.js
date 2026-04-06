import"./hoisted.DuxWs173.js";function h(t){return/^[a-zA-Z0-9_-]+$/.test(t)}async function x(t){if(!h(t))return console.warn("Invalid channel ID provided:",t),{isLive:!1,latestVideo:null};let n=null;try{const e=`https://www.youtube.com/channel/${t}/streams`,s=`https://corsproxy.io/?${encodeURIComponent(e)}`,a=await fetch(s);if(a.ok){const o=(await a.text()).match(/var ytInitialData = ({.*?});/);if(o&&o[1]){const c=JSON.parse(o[1]).contents?.twoColumnBrowseResultsRenderer?.tabs?.find(d=>d.tabRenderer?.selected);if(c){const d=c.tabRenderer.content?.richGridRenderer?.contents;if(d&&d.length>0){const i=d.find(p=>p.richItemRenderer?.content?.videoRenderer)?.richItemRenderer?.content?.videoRenderer;if(i){const p=i.videoId,v=i.title?.runs[0]?.text||"",g=`https://i.ytimg.com/vi/${p}/maxresdefault.jpg`,u=i.thumbnailOverlays?.some(f=>f.thumbnailOverlayTimeStatusRenderer?.style==="LIVE"||f.thumbnailOverlayTimeStatusRenderer?.text?.simpleText==="LIVE");let m=new Date().toISOString();i.upcomingEventData&&i.upcomingEventData.startTime&&(m=new Date(parseInt(i.upcomingEventData.startTime)*1e3).toISOString()),n={isLive:u,latestVideo:{title:v,link:`https://www.youtube.com/watch?v=${p}`,thumbnail:g,pubDate:m,isLive:u}}}}}}}}catch(e){console.warn("Failed to scrape streams page:",e)}if(n)return n;try{const e=`https://www.youtube.com/feeds/videos.xml?channel_id=${t}`,s=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(e)}`,r=await(await fetch(s)).json();let o=null;if(r.items&&r.items.length>0){const l=r.items[0],c=`https://i.ytimg.com/vi/${l.guid.split(":")[2]}/maxresdefault.jpg`;o={title:l.title,link:l.link,thumbnail:c,pubDate:l.pubDate}}return{isLive:!1,latestVideo:o}}catch(e){return console.error("Error fetching YouTube data:",e),{isLive:!1,latestVideo:null}}}document.addEventListener("DOMContentLoaded",async()=>{try{const t=await x("UCOl7immiG7B_KWFfeywmRWQ"),n=document.getElementById("live-badge-container"),e=document.getElementById("youtube-link"),s=document.getElementById("latest-video-container");if(n&&(t.isLive?(n.innerHTML=`
            <div class="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(255,122,112,0.15)]">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span class="text-primary text-[10px] font-black tracking-[0.2em]">LIVE NOW</span>
            </div>
          `,e&&e.setAttribute("href","https://www.youtube.com/channel/UCOl7immiG7B_KWFfeywmRWQ/live")):n.innerHTML=`
            <div class="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-5 py-2 rounded-full">
                <span class="relative flex h-2 w-2">
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
                </span>
                <span class="text-slate-400 text-[10px] font-black tracking-[0.2em]">OFFLINE</span>
            </div>
          `),s&&t.latestVideo){const a=t.latestVideo,r=new Date(a.pubDate).toLocaleDateString("ja-JP");s.innerHTML=`
          <a href="${a.link}" target="_blank" rel="noopener noreferrer" class="block relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer bg-bg-card">
              <img
                  alt="${a.title.replace(/"/g,"&quot;")}"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="${a.thumbnail}"
                  loading="lazy"
                  decoding="async"
              />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                  <div class="size-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                      <span class="material-symbols-outlined text-5xl fill-1 text-white">play_arrow</span>
                  </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-bg-dark via-bg-dark/90 to-transparent">
                  <p class="text-xl font-black truncate text-white">${a.title}</p>
                  <div class="flex items-center gap-3 mt-3">
                      <span class="text-xs bg-primary text-white px-2 py-0.5 rounded font-black">NEW</span>
                      <p class="text-xs text-white/50 font-bold">${r} • Latest</p>
                  </div>
              </div>
          </a>
        `}else s&&(s.innerHTML=`
            <div class="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-bg-card flex items-center justify-center">
                <span class="text-white/20 font-bold">Failed to load stream data</span>
            </div>
        `)}catch(t){console.error("Error fetching YouTube data:",t);const n=document.getElementById("live-badge-container"),e=document.getElementById("latest-video-container");n&&(n.innerHTML=`
            <div class="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 px-5 py-2 rounded-full">
                <span class="text-slate-400 text-[10px] font-black tracking-[0.2em]">ERROR</span>
            </div>
        `),e&&(e.innerHTML=`
            <div class="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-bg-card flex items-center justify-center">
                <span class="text-white/20 font-bold">Failed to load stream data</span>
            </div>
        `)}});
