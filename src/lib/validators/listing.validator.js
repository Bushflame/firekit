import yup from 'yup';

export default async function validate(formData, edit = false) {
	const schema = yup.object({
		// titles-------------------
		title_1a: yup.string(),
		title_2a: yup.string(),
		title_3a: yup.string(),
		title_4a: yup.string(),
		//paras--------------------
		para_1a: yup.string(),
		para_1b: yup.string(),
		para_1C: yup.string(),

		para_2a: yup.string(),
		para_2b: yup.string(),
		para_2C: yup.string(),

		para_3a: yup.string(),
		para_3b: yup.string(),
		para_3C: yup.string(),

		para_4a: yup.string(),
		para_4b: yup.string(),
		para_4C: yup.string(),
		//lists---------------------
		li_1a: yup.string(),
		li_1b: yup.string(),
		li_1c: yup.string(),
		li_1d: yup.string(),
		li_1e: yup.string(),

		li_2a: yup.string(),
		li_2b: yup.string(),
		li_2c: yup.string(),
		li_2d: yup.string(),
		li_2e: yup.string(),

		li_3a: yup.string(),
		li_3b: yup.string(),
		li_3c: yup.string(),
		li_3d: yup.string(),
		li_3e: yup.string(),

		li_4a: yup.string(),
		li_4b: yup.string(),
		li_4c: yup.string(),
		li_4d: yup.string(),
		li_4e: yup.string(),

		//contact----------------
		name: yup.string(),
		email: yup.string(),
		tel: yup.string(),
		fbook: yup.string(),

		terms: yup.string(),
		//images------------------

		img_1a: yup
			.mixed()
			.nullable()
			.test('fileType', 'The file must be an image', (value) => {
				if (value && value.type) {
					return ['image/png', 'image/jpeg'].includes(value.type);
				}
				return true;
			})
			.test('fileSize', 'The file must be under 4 MB.', (value) => {
				if (value && value.size) {
					return value.size > 6_00;
				}
				return true;
			}),
		img_2a: yup
			.mixed()
			.nullable()
			.test('fileType', 'The file must be an image', (value) => {
				if (value && value.type) {
					return ['image/png', 'image/jpeg'].includes(value.type);
				}
				return true;
			})
			.test('fileSize', 'The file must be under 4 MB.', (value) => {
				if (value && value.size) {
					return value.size > 6_00;
				}
				return true;
			}),
		img_3a: yup
			.mixed()
			.nullable()
			.test('fileType', 'The file must be an image', (value) => {
				if (value && value.type) {
					return ['image/png', 'image/jpeg'].includes(value.type);
				}
				return true;
			})
			.test('fileSize', 'The file must be under 4 MB.', (value) => {
				if (value && value.size) {
					return value.size > 6_00;
				}
				return true;
			}),
		img_4a: yup
			.mixed()
			.nullable()
			.test('fileType', 'The file must be an image', (value) => {
				if (value && value.type) {
					return ['image/png', 'image/jpeg'].includes(value.type);
				}
				return true;
			})
			.test('fileSize', 'The file must be under 4 MB.', (value) => {
				if (value && value.size) {
					return value.size > 6_00;
				}
				return true;
			})
	});
	//------------------------------DATA--------------------------------------------
	const data = {
		//titles-----------------------
		title_1a: formData.get('title_1a'),
		title_2a: formData.get('title_2a'),
		title_3a: formData.get('title_3a'),
		title_4a: formData.get('title_4a'),

		//paras----------------------
		para_1a: formData.get('para_1a'),
		para_1b: formData.get('para_1b'),
		para_1c: formData.get('para_1c'),

		para_2a: formData.get('para_2a'),
		para_2b: formData.get('para_2b'),
		para_2c: formData.get('para_2c'),

		para_3a: formData.get('para_3a'),
		para_3b: formData.get('para_3b'),
		para_3c: formData.get('para_3c'),

		para_4a: formData.get('para_4a'),
		para_4b: formData.get('para_4b'),
		para_4c: formData.get('para_4c'),
		//lists-----------------------
		li_1a: formData.get('li_1a'),
		li_1b: formData.get('li_1b'),
		li_1c: formData.get('li_1c'),
		li_1d: formData.get('li_1d'),
		li_1e: formData.get('li_1e'),

		li_2a: formData.get('li_2a'),
		li_2b: formData.get('li_2b'),
		li_2c: formData.get('li_2c'),
		li_2d: formData.get('li_2d'),
		li_2e: formData.get('li_2e'),

		li_3a: formData.get('li_3a'),
		li_3b: formData.get('li_3b'),
		li_3c: formData.get('li_3c'),
		li_3d: formData.get('li_3d'),
		li_3e: formData.get('li_3e'),

		li_4a: formData.get('li_4a'),
		li_4b: formData.get('li_4b'),
		li_4c: formData.get('li_4c'),
		li_4d: formData.get('li_4d'),
		li_4e: formData.get('li_4e'),

		name: formData.get('name'),
		email: formData.get('email'),
		tel: formData.get('tel'),
		fbook: formData.get('fbook'),
		terms: formData.get('terms'),
		//images----------------------
		img_1a: emptyFileIsNull(formData.get('img_1a')),
		img_2a: emptyFileIsNull(formData.get('img_2a')),
		img_3a: emptyFileIsNull(formData.get('img_3a')),
		img_4a: emptyFileIsNull(formData.get('img_4a'))
	};
	try {
		await schema.validate(data, { abortEarly: false });
		return { success: true, listing: data };
	} catch (error) {
		const errors = error.inner.reduce((agg, e) => {
			if (!agg['error_' + e.path]) {
				agg['error_' + e.path] = e.message;
			}
			return agg;
		}, {});
		delete data.img_1a;
		delete data.img_2a;
		delete data.img_3a;
		delete data.img_4a;
		return { ...errors, ...data, success: false };
	}
}
function emptyFileIsNull(file) {
	if (file) {
		if (file.size === 0) {
			return null;
		}
		return file;
	}
}
