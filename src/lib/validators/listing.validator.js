import yup from 'yup';

export default async function validate(formData, edit = false) {
	const schema = yup.object({
		// titles-------------------
		title_1a: yup.string(),
		title_2a: yup.string(),
		title_3a: yup.string(),
		title_4a: yup.string(),
		//intros--------------------
		intro_1a: yup.string(),
		intro_2a: yup.string(),
		intro_3a: yup.string(),
		intro_4a: yup.string(),
		//lists---------------------
		li_1a: yup.string(),
		li_1b: yup.string(),
		li_1c: yup.string(),
		li_1d: yup.string(),

		li_2a: yup.string(),
		li_2b: yup.string(),
		li_2c: yup.string(),
		li_2d: yup.string(),

		li_3a: yup.string(),
		li_3b: yup.string(),
		li_3c: yup.string(),
		li_3d: yup.string(),

		li_4a: yup.string(),
		li_4b: yup.string(),
		li_4c: yup.string(),
		li_4d: yup.string(),

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
					return value.size < 4_000_000;
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
					return value.size < 4_000_000;
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
					return value.size < 4_000_000;
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
					return value.size < 4_000_000;
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

		//intros----------------------
		intro_1a: formData.get('intro_1a'),
		intro_2a: formData.get('intro_2a'),
		intro_3a: formData.get('intro_3a'),
		intro_4a: formData.get('intro_4a'),

		//lists-----------------------
		li_1a: formData.get('li_1a'),
		li_1b: formData.get('li_1b'),
		li_1c: formData.get('li_1c'),
		li_1d: formData.get('li_1d'),

		li_2a: formData.get('li_2a'),
		li_2b: formData.get('li_2b'),
		li_2c: formData.get('li_2c'),
		li_2d: formData.get('li_2d'),

		li_3a: formData.get('li_3a'),
		li_3b: formData.get('li_3b'),
		li_3c: formData.get('li_3c'),
		li_3d: formData.get('li_3d'),
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
