import type { EncodeOptions } from './codecs/mozjpeg_enc';
import { MozJpegColorSpace } from './codecs/mozjpeg_types';

export { MozJpegColorSpace };

export const label = 'MozJPEG';
export const mimeType = 'image/jpeg';
export const extension = 'jpg';
export const defaultOptions: EncodeOptions = {
	quality: 75,
	baseline: false,
	arithmetic: false,
	progressive: true,
	optimize_coding: true,
	smoothing: 0,
	color_space: MozJpegColorSpace.YCbCr,
	quant_table: 3,
	trellis_multipass: false,
	trellis_opt_zero: false,
	trellis_opt_table: false,
	trellis_loops: 1,
	auto_subsample: true,
	chroma_subsample: 2,
	separate_chroma_quality: false,
	chroma_quality: 75
};
