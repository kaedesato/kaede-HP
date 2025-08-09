import ogs from 'open-graph-scraper';
import type { PageServerLoad } from './$types';

export const prerender = true;

const affiliateLinks = [
	'https://amzn.to/4osCZ8n'
	// 他のおすすめ商品リンクをここに追加できます
];

export const load: PageServerLoad = async () => {
	const results = await Promise.all(
		affiliateLinks.map(async (url) => {
			try {
				const { result } = await ogs({ url });
				return {
					...result,
					requestUrl: url, // 元のリンクも渡す
					success: true
				};
			} catch (error: any) {
				console.error(`Error fetching OGP for ${url}:`, error);
				return {
					ogTitle: '取得エラー',
					ogDescription: `OGP情報の取得中にエラーが発生しました: ${error.message}`,
					requestUrl: url,
					success: false
				};
			}
		})
	);

	return {
		products: results
	};
};
