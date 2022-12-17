(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{8184:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorials/The_Basic_Tools_of_the_Deep_Life_Sciences",function(){return a(858)}])},858:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var e=a(5893),p=a(2144),l=a(6485),t={html:' <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h1>\n      The Basic Tools of the Deep Life Sciences\n      <a class="anchor-link" href="#The-Basic-Tools-of-the-Deep-Life-Sciences">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Welcome to DeepChem\'s introductory tutorial for the deep life sciences. This series of notebooks is a step-by-step guide for you to get to know the new tools and techniques needed to do deep learning for the life sciences. We\'ll start from the basics, assuming that you\'re new to machine learning and the life sciences, and build up a repertoire of tools and techniques that you can use to do meaningful work in the life sciences.\n     </p>\n     <p>\n      <strong>\n       Scope:\n      </strong>\n      This tutorial will encompass both the machine learning and data handling needed to build systems for the deep life sciences.\n     </p>\n     <h2>\n      Colab\n      <a class="anchor-link" href="#Colab">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      This tutorial and the rest in the sequences are designed to be done in Google colab. If you\'d like to open this notebook in colab, you can use the following link.\n     </p>\n     <p>\n      <a href="https://colab.research.google.com/github/deepchem/deepchem/blob/master/examples/tutorials/The_Basic_Tools_of_the_Deep_Life_Sciences.ipynb">\n       <img alt="Open In Colab" src="https://colab.research.google.com/assets/colab-badge.svg"/>\n      </a>\n     </p>\n     <h2>\n      Why do the DeepChem Tutorial?\n      <a class="anchor-link" href="#Why-do-the-DeepChem-Tutorial?">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      <strong>\n       1) Career Advancement:\n      </strong>\n      Applying AI in the life sciences is a booming\nindustry at present. There are a host of newly funded startups and initiatives\nat large pharmaceutical and biotech companies centered around AI. Learning and\nmastering DeepChem will bring you to the forefront of this field and will\nprepare you to enter a career in this field.\n     </p>\n     <p>\n      <strong>\n       2) Humanitarian Considerations:\n      </strong>\n      Disease is the oldest cause of human\nsuffering. From the dawn of human civilization, humans have suffered from pathogens,\ncancers, and neurological conditions. One of the greatest achievements of\nthe last few centuries has been the development of effective treatments for\nmany diseases. By mastering the skills in this tutorial, you will be able to\nstand on the shoulders of the giants of the past to help develop new\nmedicine.\n     </p>\n     <p>\n      <strong>\n       3) Lowering the Cost of Medicine:\n      </strong>\n      The art of developing new medicine is\ncurrently an elite skill that can only be practiced by a small core of expert\npractitioners. By enabling the growth of open source tools for drug discovery,\nyou can help democratize these skills and open up drug discovery to more\ncompetition. Increased competition can help drive down the cost of medicine.\n     </p>\n     <h2>\n      Getting Extra Credit\n      <a class="anchor-link" href="#Getting-Extra-Credit">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      If you\'re excited about DeepChem and want to get more involved, there are some things that you can do right now:\n     </p>\n     <ul>\n      <li>\n       Star DeepChem on GitHub! -\n       <a href="https://github.com/deepchem/deepchem">\n        https://github.com/deepchem/deepchem\n       </a>\n      </li>\n      <li>\n       Join the DeepChem forums and introduce yourself! -\n       <a href="https://forum.deepchem.io">\n        https://forum.deepchem.io\n       </a>\n      </li>\n      <li>\n       Say hi on the DeepChem gitter -\n       <a href="https://gitter.im/deepchem/Lobby">\n        https://gitter.im/deepchem/Lobby\n       </a>\n      </li>\n      <li>\n       Make a YouTube video teaching the contents of this notebook.\n      </li>\n     </ul>\n     <h2>\n      Prerequisites\n      <a class="anchor-link" href="#Prerequisites">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      This tutorial sequence will assume some basic familiarity with the Python data science ecosystem. We will assume that you have familiarity with libraries such as Numpy, Pandas, and TensorFlow. We\'ll provide some brief refreshers on basics through the tutorial so don\'t worry if you\'re not an expert.\n     </p>\n     <h2>\n      Setup\n      <a class="anchor-link" href="#Setup">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      The first step is to get DeepChem up and running. We recommend using Google Colab to work through this tutorial series. You\'ll also need to run the following commands to get DeepChem installed on your colab notebook. We are going to use a model based on tensorflow, because of that we\'ve added [tensorflow] to the pip install command to ensure the necessary dependencies are also installed\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="o">!</span>pip install --pre deepchem<span class="o">[</span>tensorflow<span class="o">]</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      You can of course run this tutorial locally if you prefer. In this case, don\'t run the above cell since it will download and install Anaconda on your local machine. In either case, we can now import the\n      <code>\n       deepchem\n      </code>\n      package to play with.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="kn">import</span> <span class="nn">deepchem</span> <span class="k">as</span> <span class="nn">dc</span>\n<span class="n">dc</span><span class="o">.</span><span class="n">__version__</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child jp-OutputArea-executeResult">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n      Out[\xa0]:\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">\'2.5.0.dev\'</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h1>\n      Training a Model with DeepChem: A First Example\n      <a class="anchor-link" href="#Training-a-Model-with-DeepChem:-A-First-Example">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Deep learning can be used to solve many sorts of problems, but the basic workflow is usually the same.  Here are the typical steps you follow.\n     </p>\n     <ol>\n      <li>\n       Select the data set you will train your model on (or create a new data set if there isn\'t an existing suitable one).\n      </li>\n      <li>\n       Create the model.\n      </li>\n      <li>\n       Train the model on the data.\n      </li>\n      <li>\n       Evaluate the model on an independent test set to see how well it works.\n      </li>\n      <li>\n       Use the model to make predictions about new data.\n      </li>\n     </ol>\n     <p>\n      With DeepChem, each of these steps can be as little as one or two lines of Python code.  In this tutorial we will walk through a basic example showing the complete workflow to solve a real world scientific problem.\n     </p>\n     <p>\n      The problem we will solve is predicting the solubility of small molecules given their chemical formulas.  This is a very important property in drug development: if a proposed drug isn\'t soluble enough, you probably won\'t be able to get enough into the patient\'s bloodstream to have a therapeutic effect.  The first thing we need is a data set of measured solubilities for real molecules.  One of the core components of DeepChem is MoleculeNet, a diverse collection of chemical and molecular data sets.  For this tutorial, we can use the Delaney solubility data set. The property of solubility in this data set is reported in log(solubility) where solubility is measured in moles/liter.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">tasks</span><span class="p">,</span> <span class="n">datasets</span><span class="p">,</span> <span class="n">transformers</span> <span class="o">=</span> <span class="n">dc</span><span class="o">.</span><span class="n">molnet</span><span class="o">.</span><span class="n">load_delaney</span><span class="p">(</span><span class="n">featurizer</span><span class="o">=</span><span class="s1">\'GraphConv\'</span><span class="p">)</span>\n<span class="n">train_dataset</span><span class="p">,</span> <span class="n">valid_dataset</span><span class="p">,</span> <span class="n">test_dataset</span> <span class="o">=</span> <span class="n">datasets</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      I won\'t say too much about this code right now.  We will see many similar examples in later tutorials.  There are two details I do want to draw your attention to.  First, notice the\n      <code>\n       featurizer\n      </code>\n      argument passed to the\n      <code>\n       load_delaney()\n      </code>\n      function.  Molecules can be represented in many ways.  We therefore tell it which representation we want to use, or in more technical language, how to "featurize" the data.  Second, notice that we actually get three different data sets: a training set, a validation set, and a test set.  Each of these serves a different function in the standard deep learning workflow.\n     </p>\n     <p>\n      Now that we have our data, the next step is to create a model.  We will use a particular kind of model called a "graph convolutional network", or "graphconv" for short.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">dc</span><span class="o">.</span><span class="n">models</span><span class="o">.</span><span class="n">GraphConvModel</span><span class="p">(</span><span class="n">n_tasks</span><span class="o">=</span><span class="mi">1</span><span class="p">,</span> <span class="n">mode</span><span class="o">=</span><span class="s1">\'regression\'</span><span class="p">,</span> <span class="n">dropout</span><span class="o">=</span><span class="mf">0.2</span><span class="p">)</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      Here again I will not say much about the code.  Later tutorials will give lots more information about\n      <code>\n       GraphConvModel\n      </code>\n      , as well as other types of models provided by DeepChem.\n     </p>\n     <p>\n      We now need to train the model on the data set.  We simply give it the data set and tell it how many epochs of training to perform (that is, how many complete passes through the data to make).\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">train_dataset</span><span class="p">,</span> <span class="n">nb_epoch</span><span class="o">=</span><span class="mi">100</span><span class="p">)</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      If everything has gone well, we should now have a fully trained model!  But do we?  To find out, we must evaluate the model on the test set.  We do that by selecting an evaluation metric and calling\n      <code>\n       evaluate()\n      </code>\n      on the model.  For this example, let\'s use the Pearson correlation, also known as r\n      <sup>\n       2\n      </sup>\n      , as our metric.  We can evaluate it on both the training set and test set.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">metric</span> <span class="o">=</span> <span class="n">dc</span><span class="o">.</span><span class="n">metrics</span><span class="o">.</span><span class="n">Metric</span><span class="p">(</span><span class="n">dc</span><span class="o">.</span><span class="n">metrics</span><span class="o">.</span><span class="n">pearson_r2_score</span><span class="p">)</span>\n<span class="nb">print</span><span class="p">(</span><span class="s2">"Training set score:"</span><span class="p">,</span> <span class="n">model</span><span class="o">.</span><span class="n">evaluate</span><span class="p">(</span><span class="n">train_dataset</span><span class="p">,</span> <span class="p">[</span><span class="n">metric</span><span class="p">],</span> <span class="n">transformers</span><span class="p">))</span>\n<span class="nb">print</span><span class="p">(</span><span class="s2">"Test set score:"</span><span class="p">,</span> <span class="n">model</span><span class="o">.</span><span class="n">evaluate</span><span class="p">(</span><span class="n">test_dataset</span><span class="p">,</span> <span class="p">[</span><span class="n">metric</span><span class="p">],</span> <span class="n">transformers</span><span class="p">))</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">Training set score: {\'pearson_r2_score\': 0.9323622956442351}\nTest set score: {\'pearson_r2_score\': 0.6898768897014962}\n</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      Notice that it has a higher score on the training set than the test set.  Models usually perform better on the particular data they were trained on than they do on similar but independent data.  This is called "overfitting", and it is the reason it is essential to evaluate your model on an independent test set.\n     </p>\n     <p>\n      Our model still has quite respectable performance on the test set.  For comparison, a model that produced totally random outputs would have a correlation of 0, while one that made perfect predictions would have a correlation of 1.  Our model does quite well, so now we can use it to make predictions about other molecules we care about.\n     </p>\n     <p>\n      Since this is just a tutorial and we don\'t have any other molecules we specifically want to predict, let\'s just use the first ten molecules from the test set.  For each one we print out the chemical structure (represented as a SMILES string) and the predicted log(solubility). To put these predictions in \ncontext, we print out the log(solubility) values from the test set as well.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">solubilities</span> <span class="o">=</span> <span class="n">model</span><span class="o">.</span><span class="n">predict_on_batch</span><span class="p">(</span><span class="n">test_dataset</span><span class="o">.</span><span class="n">X</span><span class="p">[:</span><span class="mi">10</span><span class="p">])</span>\n<span class="k">for</span> <span class="n">molecule</span><span class="p">,</span> <span class="n">solubility</span><span class="p">,</span> <span class="n">test_solubility</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">test_dataset</span><span class="o">.</span><span class="n">ids</span><span class="p">,</span> <span class="n">solubilities</span><span class="p">,</span> <span class="n">test_dataset</span><span class="o">.</span><span class="n">y</span><span class="p">):</span>\n    <span class="nb">print</span><span class="p">(</span><span class="n">solubility</span><span class="p">,</span> <span class="n">test_solubility</span><span class="p">,</span> <span class="n">molecule</span><span class="p">)</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">[-1.8629359] [-1.60114461] c1cc2ccc3cccc4ccc(c1)c2c34\n[0.6617248] [0.20848251] Cc1cc(=O)[nH]c(=S)[nH]1\n[-0.5705674] [-0.01602738] Oc1ccc(cc1)C2(OC(=O)c3ccccc23)c4ccc(O)cc4 \n[-2.0929456] [-2.82191713] c1ccc2c(c1)cc3ccc4cccc5ccc2c3c45\n[-1.4962314] [-0.52891635] C1=Cc2cccc3cccc1c23\n[1.8620405] [1.10168349] CC1CO1\n[-0.5858227] [-0.88987406] CCN2c1ccccc1N(C)C(=S)c3cccnc23 \n[-0.9799993] [-0.52649706] CC12CCC3C(CCc4cc(O)ccc34)C2CCC1=O\n[-1.0176951] [-0.76358725] Cn2cc(c1ccccc1)c(=O)c(c2)c3cccc(c3)C(F)(F)F\n[0.05622783] [-0.64020358] ClC(Cl)(Cl)C(NC=O)N1C=CN(C=C1)C(NC=O)C(Cl)(Cl)Cl \n</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h1>\n      Congratulations! Time to join the Community!\n      <a class="anchor-link" href="#Congratulations!-Time-to-join-the-Community!">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Congratulations on completing this tutorial notebook! If you enjoyed working through the tutorial, and want to continue working with DeepChem, we encourage you to finish the rest of the tutorials in this series. You can also help the DeepChem community in the following ways:\n     </p>\n     <h2>\n      Star DeepChem on\n      <a href="https://github.com/deepchem/deepchem">\n       GitHub\n      </a>\n      <a class="anchor-link" href="#Star-DeepChem-on-GitHub">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      This helps build awareness of the DeepChem project and the tools for open source drug discovery that we\'re trying to build.\n     </p>\n     <h2>\n      Join the DeepChem Gitter\n      <a class="anchor-link" href="#Join-the-DeepChem-Gitter">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      The DeepChem\n      <a href="https://gitter.im/deepchem/Lobby">\n       Gitter\n      </a>\n      hosts a number of scientists, developers, and enthusiasts interested in deep learning for the life sciences. Join the conversation!\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h2>\n      Citing This Tutorial\n      <a class="anchor-link" href="#Citing-This-Tutorial">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      If you found this tutorial useful please consider citing it using the provided BibTeX.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="nd">@manual</span><span class="p">{</span><span class="n">Intro1</span><span class="p">,</span> \n <span class="n">title</span><span class="o">=</span><span class="p">{</span><span class="n">The</span> <span class="n">Basic</span> <span class="n">Tools</span> <span class="n">of</span> <span class="n">the</span> <span class="n">Deep</span> <span class="n">Life</span> <span class="n">Sciences</span><span class="p">},</span> \n <span class="n">organization</span><span class="o">=</span><span class="p">{</span><span class="n">DeepChem</span><span class="p">},</span>\n <span class="n">author</span><span class="o">=</span><span class="p">{</span><span class="n">Ramsundar</span><span class="p">,</span> <span class="n">Bharath</span><span class="p">},</span> \n <span class="n">howpublished</span> <span class="o">=</span> <span class="p">{</span>\\<span class="n">url</span><span class="p">{</span><span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">github</span><span class="o">.</span><span class="n">com</span><span class="o">/</span><span class="n">deepchem</span><span class="o">/</span><span class="n">deepchem</span><span class="o">/</span><span class="n">blob</span><span class="o">/</span><span class="n">master</span><span class="o">/</span><span class="n">examples</span><span class="o">/</span><span class="n">tutorials</span><span class="o">/</span><span class="n">The_Basic_Tools_of_the_Deep_Life_Sciences</span><span class="o">.</span><span class="n">ipynb</span><span class="p">}},</span> \n <span class="n">year</span><span class="o">=</span><span class="p">{</span><span class="mi">2021</span><span class="p">},</span> \n<span class="p">}</span> \n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n'},o=a(7294),i=a(7466),r=a.n(i);let c=()=>((0,o.useEffect)(()=>{var n,s;null===(n=document.getElementsByClassName("scroll-nav")[0])||void 0===n||n.remove();let a=document.querySelector(".notebook"),e=document.querySelector(".notebook");e&&a&&r().init(a,{sections:"h1, h2",insertTarget:e,insertLocation:"after"}),null==MathJax||null===(s=MathJax.Hub)||void 0===s||s.Queue(["Typeset",MathJax.Hub])},[]),(0,e.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(t.html," ").concat(l.Z)}}));c.Layout=p.Z;var d=c}},function(n){n.O(0,[850,9774,2888,179],function(){return n(n.s=8184)}),_N_E=n.O()}]);