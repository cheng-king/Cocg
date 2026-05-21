import { motion } from 'framer-motion';
import { BrainCircuit, Database, Sparkles, Send, ShieldCheck } from 'lucide-react';

export default function AIKnowledgeBaseDemo() {
  const faqs = [
    {
      q: '如何接入企业内部文档？',
      a: '系统支持上传 PDF、Word、Markdown 和网页链接，并自动完成向量化处理。'
    },
    {
      q: '是否支持多 Agent 协作？',
      a: '支持。系统可通过 Retrieval Agent、Reasoning Agent 与 Summary Agent 协同完成复杂问答。'
    },
    {
      q: '系统是否支持长链推理？',
      a: '支持复杂上下文推理，可自动拆解问题并结合多份文档生成答案。'
    }
  ];

  const features = [
    {
      title: 'Retrieval Agent',
      desc: '向量检索与知识召回',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Reasoning Agent',
      desc: '多步推理与上下文分析',
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      title: 'Summary Agent',
      desc: '智能总结与答案生成',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Security Layer',
      desc: '权限控制与日志监控',
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-black to-cyan-900/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">
              Next Gen AI Knowledge Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            AI 知识库
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {' '}问答 Agent
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            基于 LLM + RAG + Multi-Agent 构建的企业级知识库平台，支持复杂推理、智能检索与实时问答。
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all shadow-2xl">
              开始体验
            </button>

            <button className="border border-white/20 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
              查看文档
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            ['5000+', '每日问答请求'],
            ['80%', '检索效率提升'],
            ['Multi-Agent', '支持复杂协作']
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {item[0]}
              </h2>
              <p className="text-gray-400 text-lg">{item[1]}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-10 mb-16 shadow-2xl">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-3">系统架构</h2>
              <p className="text-gray-400">
                多 Agent 协同驱动的智能知识处理系统
              </p>
            </div>

            <div className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-4 py-2 rounded-full text-sm">
              Powered by RAG + LLM
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-3xl p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-5 text-cyan-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8">
              在线问答 Demo
            </h2>

            <div className="space-y-5 mb-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-sm text-cyan-300 mb-2">用户提问</p>
                <p className="text-gray-200">
                  系统支持哪些文档格式？
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/10 rounded-2xl p-5">
                <p className="text-sm text-violet-300 mb-2">AI 回复</p>
                <p className="text-gray-200 leading-relaxed">
                  目前支持 PDF、DOCX、Markdown、TXT 以及网页链接内容导入，并自动完成向量化处理与知识索引。
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <input
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition-all"
                placeholder="输入你的问题..."
              />

              <button className="bg-gradient-to-r from-cyan-500 to-violet-500 px-6 rounded-2xl flex items-center justify-center hover:scale-105 transition-all shadow-lg">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8">
              常见问题
            </h2>

            <div className="space-y-5">
              {faqs.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {item.q}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center py-10 border-t border-white/10">
          <p className="text-gray-500">
            AI Knowledge Agent © 2026 · Built with React + Tailwind + Framer Motion
          </p>
        </div>
      </div>
    </div>
  );
}
