// noinspection SpellCheckingInspection
/**
 * @see https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&mkt=zh-CN
 * @api
 * @type BingAPIType
 * @readonly
 */

export type BingAPIType = {
    images: BingImage[];
    tooltips: BingTooltips;
};

export type BingImage = {
    startdate: string;
    fullstartdate: string;
    enddate: string;
    url: string;
    urlbase: string;
    copyright: string;
    copyrightlink: string;
    title: string;
    quiz: string;
    wp: boolean;
    hsh: string;
    drk: number;
    top: number;
    bot: number;
    hs: any[];
};

export type BingTooltips = {
    loading: string;
    previous: string;
    next: string;
    walle: string;
    walls: string;
};
