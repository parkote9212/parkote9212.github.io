import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiAlertCircle, FiCheck, FiGithub, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Formspree 연동
    const formId = import.meta.env.VITE_FORMSPREE_ID;
    
    if (!formId || formId === 'YOUR_FORM_ID') {
      console.error('Formspree Form ID가 설정되지 않았습니다. .env 파일에 VITE_FORMSPREE_ID를 설정해주세요.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  return (
    <section id="contact" className="section bg-secondary-50 dark:bg-secondary-800/50">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            새로운 기회와 협업을 기다립니다
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Introduction */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                  함께 일하고 싶으신가요?
                </h3>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed mb-6">
                  언제든지 연락주세요! 새로운 프로젝트, 협업 기회, 또는 그냥 인사를 나누고 싶으시다면
                  아래 방법으로 연락해주시면 됩니다.
                </p>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <motion.a
                  href="mailto:parkote9212@gmail.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="card p-6 flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-xl group-hover:shadow-lg transition-shadow">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 uppercase mb-1">
                      Email
                    </h4>
                    <p className="text-lg font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      parkote9212@gmail.com
                    </p>
                  </div>
                </motion.a>
              </motion.div>

              {/* GitHub */}
              <motion.div variants={itemVariants}>
                <motion.a
                  href="https://github.com/parkote9212"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="card p-6 flex items-center gap-4 group cursor-pointer"
                >
                  <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-white dark:to-gray-100 text-white dark:text-secondary-900 rounded-xl group-hover:shadow-lg transition-shadow">
                    <FiGithub className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary-500 dark:text-secondary-400 uppercase mb-1">
                      GitHub
                    </h4>
                    <p className="text-lg font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      github.com/parkote9212
                    </p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-lg font-bold text-secondary-900 dark:text-white mb-3">
                  💡 Quick Response
                </h4>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  보통 24시간 이내에 답변 드립니다. 프로젝트 제안, 채용 문의, 기술 관련 질문 등
                  무엇이든 환영합니다!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="card p-8 space-y-6">
                <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                  메시지 보내기
                </h3>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="홍길동"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    메시지
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="무엇을 도와드릴까요?"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${status === 'loading'
                    ? 'bg-secondary-400 cursor-not-allowed'
                    : status === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : status === 'error'
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-gradient-to-r from-primary-600 to-accent-500 hover:shadow-lg'
                    }`}
                >
                  {status === 'loading' && (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      전송 중...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <FiCheck className="w-5 h-5" />
                      전송 완료!
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <FiAlertCircle className="w-5 h-5" />
                      전송 실패. 다시 시도해주세요.
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <FiSend className="w-5 h-5" />
                      메시지 보내기
                    </>
                  )}
                </motion.button>

                {/* Note */}
                <p className="text-sm text-secondary-500 dark:text-secondary-400 text-center">
                  * 또는 직접{' '}
                  <a
                    href="mailto:parkote9212@gmail.com"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                  >
                    parkote9212@gmail.com
                  </a>
                  으로 이메일을 보내주세요
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary-300/10 dark:bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-accent-300/10 dark:bg-accent-600/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Contact;
