var KTLogin = function() {
    var register = function(e) {
        var form = KTUtil.getById('form-register');

        FormValidation.formValidation(
			form,
			{
				fields: {
					fullname: {
						validators: {
							notEmpty: {
								message: 'Username is required'
							}
						}
					},
					email: {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					},
                    password: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required'
                            }
                        }
                    },
                    cpassword: {
                        validators: {
                            notEmpty: {
                                message: 'The password confirmation is required'
                            },
                            identical: {
                                compare: function() {
                                    return form.querySelector('[name="password"]').value;
                                },
                                message: 'The password and its confirm are not the same'
                            }
                        }
                    },
                    agree: {
                        validators: {
                            notEmpty: {
                                message: 'You must accept the terms and conditions'
                            }
                        }
                    },
				},
				plugins: {
					// trigger: new FormValidation.plugins.Trigger(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
					bootstrap: new FormValidation.plugins.Bootstrap()
				}
			}
		);
    }

    return {
        init: function() {
            register();
        }
    };
}();

jQuery(document).ready(function() {
    KTLogin.init();
});
