"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const TermsOfService = () => {
  return (
    <motion.div
      className="sma-container py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="w-full max-w-3xl mx-auto flex flex-col gap-4 text-center mb-12"
        variants={childVariants}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter gradient-text">
          Điều khoản Dịch vụ
        </h1>
        <p className="text-gray-400 dark:text-gray-500 text-base font-normal leading-normal">
          Cập nhật lần cuối: 26 tháng 10, 2023
        </p>
      </motion.div>
      <motion.div
        className="max-w-3xl mx-auto w-full flex flex-col gap-10"
        variants={containerVariants}
      >
        <motion.div variants={sectionVariants}>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Chào mừng bạn đến với SMA Solutions. Tài liệu này phác thảo các điều
            khoản và điều kiện chi phối việc bạn sử dụng các dịch vụ của chúng
            tôi. Bằng cách truy cập hoặc sử dụng dịch vụ của chúng tôi, bạn đồng
            ý bị ràng buộc bởi các điều khoản này. Vui lòng đọc kỹ.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            1. Chấp nhận Điều khoản
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Bằng cách sử dụng bất kỳ dịch vụ nào của chúng tôi, bạn xác nhận
            rằng bạn đã đọc, hiểu và đồng ý với tất cả các điều khoản và điều
            kiện có trong thỏa thuận này.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            2. Quyền và Trách nhiệm của Người dùng
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Người dùng có trách nhiệm bảo mật thông tin tài khoản và không được
            sử dụng dịch vụ cho bất kỳ mục đích bất hợp pháp hoặc trái phép nào.
            Bạn đồng ý tuân thủ tất cả các luật lệ và quy định hiện hành khi sử
            dụng dịch vụ.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            3. Quyền và Trách nhiệm của Công ty
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            SMA Solutions cam kết cung cấp dịch vụ ổn định, an toàn và bảo mật
            thông tin khách hàng theo chính sách bảo mật của chúng tôi. Chúng
            tôi có quyền tạm ngừng hoặc chấm dứt dịch vụ nếu phát hiện vi phạm
            điều khoản.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            4. Chính sách Thanh toán và Gia hạn
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Tất cả các khoản phí dịch vụ được quy định rõ trong hợp đồng hoặc
            trên trang báo giá. Việc thanh toán phải được thực hiện đúng hạn để
            đảm bảo dịch vụ không bị gián đoạn. Các gói dịch vụ sẽ tự động gia
            hạn trừ khi có yêu cầu hủy từ phía người dùng.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            5. Chấm dứt Dịch vụ
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Bạn có thể chấm dứt sử dụng dịch vụ của chúng tôi bất cứ lúc nào
            theo hướng dẫn. Chúng tôi cũng có quyền chấm dứt hoặc đình chỉ quyền
            truy cập của bạn vào dịch vụ ngay lập tức, không cần thông báo
            trước, vì bất kỳ lý do gì, bao gồm cả việc bạn vi phạm các Điều
            khoản này.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            6. Giới hạn Trách nhiệm
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Trong mọi trường hợp, SMA Solutions sẽ không chịu trách nhiệm cho
            bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt nào phát sinh từ
            hoặc liên quan đến việc bạn sử dụng hoặc không thể sử dụng dịch vụ
            của chúng tôi.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            7. Giải quyết Tranh chấp
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Mọi tranh chấp phát sinh từ các Điều khoản này sẽ được giải quyết
            thông qua thương lượng hòa giải. Nếu không thể giải quyết, vụ việc
            sẽ được đưa ra tòa án có thẩm quyền tại nơi công ty đăng ký kinh
            doanh.
          </p>
        </motion.div>
        <motion.div variants={sectionVariants}>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5 border-b border-white/10 mb-4">
            8. Quy định Chung
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-base font-normal leading-relaxed">
            Chúng tôi có quyền sửa đổi các điều khoản này bất cứ lúc nào. Phiên
            bản cập nhật sẽ được đăng trên trang web của chúng tôi. Việc bạn
            tiếp tục sử dụng dịch vụ sau khi các thay đổi có hiệu lực đồng nghĩa
            với việc bạn chấp nhận các điều khoản mới.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
