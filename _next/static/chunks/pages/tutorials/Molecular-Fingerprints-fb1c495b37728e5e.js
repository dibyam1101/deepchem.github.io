(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2673],{7656:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorials/Molecular-Fingerprints",function(){return a(4819)}])},4819:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var p=a(5893),e=a(2144),l=a(6485),t={html:' <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h1>\n      Molecular Fingerprints\n      <a class="anchor-link" href="#Molecular-Fingerprints">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Molecules can be represented in many ways.  This tutorial introduces a type of representation called a "molecular fingerprint".  It is a very simple representation that often works well for small drug-like molecules.\n     </p>\n     <h2>\n      Colab\n      <a class="anchor-link" href="#Colab">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      This tutorial and the rest in this sequence can be done in Google colab. If you\'d like to open this notebook in colab, you can use the following link.\n     </p>\n     <p>\n      <a href="https://colab.research.google.com/github/deepchem/deepchem/blob/master/examples/tutorials/Molecular_Fingerprints.ipynb">\n       <img alt="Open In Colab" src="https://colab.research.google.com/assets/colab-badge.svg"/>\n      </a>\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="o">!</span>pip install --pre deepchem\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      We can now import the\n      <code>\n       deepchem\n      </code>\n      package to play with.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[1]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="kn">import</span> <span class="nn">deepchem</span> <span class="k">as</span> <span class="nn">dc</span>\n<span class="n">dc</span><span class="o">.</span><span class="n">__version__</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child jp-OutputArea-executeResult">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n      Out[1]:\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">\'2.4.0-rc1.dev\'</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h1>\n      What is a Fingerprint?\n      <a class="anchor-link" href="#What-is-a-Fingerprint?">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Deep learning models almost always take arrays of numbers as their inputs.  If we want to process molecules with them, we somehow need to represent each molecule as one or more arrays of numbers.\n     </p>\n     <p>\n      Many (but not all) types of models require their inputs to have a fixed size.  This can be a challenge for molecules, since different molecules have different numbers of atoms.  If we want to use these types of models, we somehow need to represent variable sized molecules with fixed sized arrays.\n     </p>\n     <p>\n      Fingerprints are designed to address these problems.  A fingerprint is a fixed length array, where different elements indicate the presence of different features in the molecule.  If two molecules have similar fingerprints, that indicates they contain many of the same features, and therefore will likely have similar chemistry.\n     </p>\n     <p>\n      DeepChem supports a particular type of fingerprint called an "Extended Connectivity Fingerprint", or "ECFP" for short.  They also are sometimes called "circular fingerprints".  The ECFP algorithm begins by classifying atoms based only on their direct properties and bonds.  Each unique pattern is a feature.  For example, "carbon atom bonded to two hydrogens and two heavy atoms" would be a feature, and a particular element of the fingerprint is set to 1 for any molecule that contains that feature.  It then iteratively identifies new features by looking at larger circular neighborhoods.  One specific feature bonded to two other specific features becomes a higher level feature, and the corresponding element is set for any molecule that contains it.  This continues for a fixed number of iterations, most often two.\n     </p>\n     <p>\n      Let\'s take a look at a dataset that has been featurized with ECFP.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[2]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">tasks</span><span class="p">,</span> <span class="n">datasets</span><span class="p">,</span> <span class="n">transformers</span> <span class="o">=</span> <span class="n">dc</span><span class="o">.</span><span class="n">molnet</span><span class="o">.</span><span class="n">load_tox21</span><span class="p">(</span><span class="n">featurizer</span><span class="o">=</span><span class="s1">\'ECFP\'</span><span class="p">)</span>\n<span class="n">train_dataset</span><span class="p">,</span> <span class="n">valid_dataset</span><span class="p">,</span> <span class="n">test_dataset</span> <span class="o">=</span> <span class="n">datasets</span>\n<span class="nb">print</span><span class="p">(</span><span class="n">train_dataset</span><span class="p">)</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">&lt;DiskDataset X.shape: (6264, 1024), y.shape: (6264, 12), w.shape: (6264, 12), task_names: [\'NR-AR\' \'NR-AR-LBD\' \'NR-AhR\' ... \'SR-HSE\' \'SR-MMP\' \'SR-p53\']&gt;\n</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      The feature array\n      <code>\n       X\n      </code>\n      has shape (6264, 1024).  That means there are 6264 samples in the training set.  Each one is represented by a fingerprint of length 1024.  Also notice that the label array\n      <code>\n       y\n      </code>\n      has shape (6264, 12): this is a multitask dataset.  Tox21 contains information about the toxicity of molecules.  12 different assays were used to look for signs of toxicity.  The dataset records the results of all 12 assays, each as a different task.\n     </p>\n     <p>\n      Let\'s also take a look at the weights array.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[3]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">train_dataset</span><span class="o">.</span><span class="n">w</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child jp-OutputArea-executeResult">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n      Out[3]:\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">array([[1.0433141624730409, 1.0369942196531792, 8.53921568627451, ...,\n        1.060388945752303, 1.1895710249165168, 1.0700990099009902],\n       [1.0433141624730409, 1.0369942196531792, 1.1326397919375812, ...,\n        0.0, 1.1895710249165168, 1.0700990099009902],\n       [0.0, 0.0, 0.0, ..., 1.060388945752303, 0.0, 0.0],\n       ...,\n       [0.0, 0.0, 0.0, ..., 0.0, 0.0, 0.0],\n       [1.0433141624730409, 1.0369942196531792, 8.53921568627451, ...,\n        1.060388945752303, 0.0, 0.0],\n       [1.0433141624730409, 1.0369942196531792, 1.1326397919375812, ...,\n        1.060388945752303, 1.1895710249165168, 1.0700990099009902]],\n      dtype=object)</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      Notice that some elements are 0.  The weights are being used to indicate missing data.  Not all assays were actually performed on every molecule.  Setting the weight for a sample or sample/task pair to 0 causes it to be ignored during fitting and evaluation.  It will have no effect on the loss function or other metrics.\n     </p>\n     <p>\n      Most of the other weights are close to 1, but not exactly 1.  This is done to balance the overall weight of positive and negative samples on each task.  When training the model, we want each of the 12 tasks to contribute equally, and on each task we want to put equal weight on positive and negative samples.  Otherwise, the model might just learn that most of the training samples are non-toxic, and therefore become biased toward identifying other molecules as non-toxic.\n     </p>\n     <h1>\n      Training a Model on Fingerprints\n      <a class="anchor-link" href="#Training-a-Model-on-Fingerprints">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Let\'s train a model.  In earlier tutorials we use\n      <code>\n       GraphConvModel\n      </code>\n      , which is a fairly complicated architecture that takes a complex set of inputs.  Because fingerprints are so simple, just a single fixed length array, we can use a much simpler type of model.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[4]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="n">model</span> <span class="o">=</span> <span class="n">dc</span><span class="o">.</span><span class="n">models</span><span class="o">.</span><span class="n">MultitaskClassifier</span><span class="p">(</span><span class="n">n_tasks</span><span class="o">=</span><span class="mi">12</span><span class="p">,</span> <span class="n">n_features</span><span class="o">=</span><span class="mi">1024</span><span class="p">,</span> <span class="n">layer_sizes</span><span class="o">=</span><span class="p">[</span><span class="mi">1000</span><span class="p">])</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      <code>\n       MultitaskClassifier\n      </code>\n      is a simple stack of fully connected layers.  In this example we tell it to use a single hidden layer of width 1000.  We also tell it that each input will have 1024 features, and that it should produce predictions for 12 different tasks.\n     </p>\n     <p>\n      Why not train a separate model for each task?  We could do that, but it turns out that training a single model for multiple tasks often works better.  We will see an example of that in a later tutorial.\n     </p>\n     <p>\n      Let\'s train and evaluate the model.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[5]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>\n\n<span class="n">model</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">train_dataset</span><span class="p">,</span> <span class="n">nb_epoch</span><span class="o">=</span><span class="mi">10</span><span class="p">)</span>\n<span class="n">metric</span> <span class="o">=</span> <span class="n">dc</span><span class="o">.</span><span class="n">metrics</span><span class="o">.</span><span class="n">Metric</span><span class="p">(</span><span class="n">dc</span><span class="o">.</span><span class="n">metrics</span><span class="o">.</span><span class="n">roc_auc_score</span><span class="p">)</span>\n<span class="nb">print</span><span class="p">(</span><span class="s1">\'training set score:\'</span><span class="p">,</span> <span class="n">model</span><span class="o">.</span><span class="n">evaluate</span><span class="p">(</span><span class="n">train_dataset</span><span class="p">,</span> <span class="p">[</span><span class="n">metric</span><span class="p">],</span> <span class="n">transformers</span><span class="p">))</span>\n<span class="nb">print</span><span class="p">(</span><span class="s1">\'test set score:\'</span><span class="p">,</span> <span class="n">model</span><span class="o">.</span><span class="n">evaluate</span><span class="p">(</span><span class="n">test_dataset</span><span class="p">,</span> <span class="p">[</span><span class="n">metric</span><span class="p">],</span> <span class="n">transformers</span><span class="p">))</span>\n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n  <div class="jp-Cell-outputWrapper">\n   <div class="jp-Collapser jp-OutputCollapser jp-Cell-outputCollapser">\n   </div>\n   <div class="jp-OutputArea jp-Cell-outputArea">\n    <div class="jp-OutputArea-child">\n     <div class="jp-OutputPrompt jp-OutputArea-prompt">\n     </div>\n     <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">\n      <pre class="overflow-x-scroll">training set score: {\'roc_auc_score\': 0.9550063590563469}\ntest set score: {\'roc_auc_score\': 0.7781819573695475}\n</pre>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <p>\n      Not bad performance for such a simple model and featurization.  More sophisticated models do slightly better on this dataset, but not enormously better.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h1>\n      Congratulations! Time to join the Community!\n      <a class="anchor-link" href="#Congratulations!-Time-to-join-the-Community!">\n       \xb6\n      </a>\n     </h1>\n     <p>\n      Congratulations on completing this tutorial notebook! If you enjoyed working through the tutorial, and want to continue working with DeepChem, we encourage you to finish the rest of the tutorials in this series. You can also help the DeepChem community in the following ways:\n     </p>\n     <h2>\n      Star DeepChem on\n      <a href="https://github.com/deepchem/deepchem">\n       GitHub\n      </a>\n      <a class="anchor-link" href="#Star-DeepChem-on-GitHub">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      This helps build awareness of the DeepChem project and the tools for open source drug discovery that we\'re trying to build.\n     </p>\n     <h2>\n      Join the DeepChem Gitter\n      <a class="anchor-link" href="#Join-the-DeepChem-Gitter">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      The DeepChem\n      <a href="https://gitter.im/deepchem/Lobby">\n       Gitter\n      </a>\n      hosts a number of scientists, developers, and enthusiasts interested in deep learning for the life sciences. Join the conversation!\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-MarkdownCell jp-Notebook-cell">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n    </div>\n    <div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput" data-mime-type="text/markdown">\n     <h2>\n      Citing This Tutorial\n      <a class="anchor-link" href="#Citing-This-Tutorial">\n       \xb6\n      </a>\n     </h2>\n     <p>\n      If you found this tutorial useful please consider citing it using the provided BibTeX.\n     </p>\n    </div>\n   </div>\n  </div>\n </div>\n <div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs">\n  <div class="jp-Cell-inputWrapper">\n   <div class="jp-Collapser jp-InputCollapser jp-Cell-inputCollapser">\n   </div>\n   <div class="jp-InputArea jp-Cell-inputArea">\n    <div class="jp-InputPrompt jp-InputArea-prompt">\n     In\xa0[\xa0]:\n    </div>\n    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">\n     <div class="CodeMirror cm-s-jupyter">\n      <div class="highlight hl-ipython3">\n       <pre class="overflow-x-scroll"><span></span><span class="nd">@manual</span><span class="p">{</span><span class="n">Intro4</span><span class="p">,</span> \n <span class="n">title</span><span class="o">=</span><span class="p">{</span><span class="n">Molecular</span> <span class="n">Fingerprints</span><span class="p">},</span> \n <span class="n">organization</span><span class="o">=</span><span class="p">{</span><span class="n">DeepChem</span><span class="p">},</span>\n <span class="n">author</span><span class="o">=</span><span class="p">{</span><span class="n">Ramsundar</span><span class="p">,</span> <span class="n">Bharath</span><span class="p">},</span> \n <span class="n">howpublished</span> <span class="o">=</span> <span class="p">{</span>\\<span class="n">url</span><span class="p">{</span><span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">github</span><span class="o">.</span><span class="n">com</span><span class="o">/</span><span class="n">deepchem</span><span class="o">/</span><span class="n">deepchem</span><span class="o">/</span><span class="n">blob</span><span class="o">/</span><span class="n">master</span><span class="o">/</span><span class="n">examples</span><span class="o">/</span><span class="n">tutorials</span><span class="o">/</span><span class="n">Molecular_Fingerprints</span><span class="o">.</span><span class="n">ipynb</span><span class="p">}},</span> \n <span class="n">year</span><span class="o">=</span><span class="p">{</span><span class="mi">2021</span><span class="p">},</span> \n<span class="p">}</span> \n</pre>\n      </div>\n     </div>\n    </div>\n   </div>\n  </div>\n </div>\n'},i=a(7294),o=a(7466),r=a.n(o);let d=()=>((0,i.useEffect)(()=>{var n,s;null===(n=document.getElementsByClassName("scroll-nav")[0])||void 0===n||n.remove();let a=document.querySelector(".notebook"),p=document.querySelector(".notebook");p&&a&&r().init(a,{sections:"h1, h2",insertTarget:p,insertLocation:"after"}),null==MathJax||null===(s=MathJax.Hub)||void 0===s||s.Queue(["Typeset",MathJax.Hub])},[]),(0,p.jsx)("div",{className:"overflow-x-scroll",dangerouslySetInnerHTML:{__html:"".concat(t.html," ").concat(l.Z)}}));d.Layout=e.Z;var c=d}},function(n){n.O(0,[8559,9774,2888,179],function(){return n(n.s=7656)}),_N_E=n.O()}]);