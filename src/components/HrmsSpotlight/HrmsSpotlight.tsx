import React, { useState } from 'react';
import { HRMS_SPOTLIGHT } from '../../data/portfolioData';
import {
  Layers,
  CheckCircle2,
  ShieldCheck,
  Database,
  Zap,
  Cpu,
  Clock,
  AlertTriangle,
  ArrowRight,
  Heart,
  MessageSquare,
  Sparkles,
  Pin,
  Send
} from 'lucide-react';
import './HrmsSpotlight.scss';

export const HrmsSpotlight: React.FC = () => {
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);

  // 1. Payroll Sandbox state
  const [grossSalary, setGrossSalary] = useState(75000);

  // 2. Directory Sandbox state
  const [searchFilter, setSearchFilter] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');

  // 3. Approval Sandbox state
  const [approvalStep, setApprovalStep] = useState<number>(2); // 1 = Lead, 2 = HR BP, 3 = Finance
  const [approvalStatus, setApprovalStatus] = useState<'pending' | 'approved' | 'rejected' | 'delegated'>('pending');

  // 4. Attendance Sandbox state
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const [checkInTime, setCheckInTime] = useState('09:14 AM');

  // 5. Leave Sandbox state
  const [selectedLeaveType, setSelectedLeaveType] = useState('Casual Leave');
  const [leaveDays, setLeaveDays] = useState(2);
  const [leaveApplied, setLeaveApplied] = useState(false);

  // 8. Social Wall Sandbox state
  const [likesCount, setLikesCount] = useState(24);
  const [isLiked, setIsLiked] = useState(false);
  const [pollVoted, setPollVoted] = useState<string | null>(null);
  const [newPostText, setNewPostText] = useState('');
  const [postSubmitted, setPostSubmitted] = useState(false);

  const activeModule = HRMS_SPOTLIGHT.modules[activeModuleIdx] || HRMS_SPOTLIGHT.modules[0];

  // Payroll math
  const pf = Math.round(grossSalary * 0.12);
  const tax = Math.round(grossSalary * 0.08);
  const net = grossSalary - pf - tax;

  // Mock employee data
  const mockEmployees = [
    { id: '#EMP-1042', name: 'Surendar G', dept: 'Engineering', status: 'Active', role: 'React Developer' },
    { id: '#EMP-1039', name: 'Sophia Chen', dept: 'Design', status: 'Active', role: 'UI/UX Lead' },
    { id: '#EMP-0988', name: 'Marcus Vance', dept: 'HR & Ops', status: 'Active', role: 'HR Business Partner' },
    { id: '#EMP-1102', name: 'Elena Rostova', dept: 'Engineering', status: 'Active', role: 'DevOps Engineer' },
    { id: '#EMP-1215', name: 'Arun Kumar', dept: 'Finance', status: 'Active', role: 'Payroll Specialist' },
  ];

  const filteredEmployees = mockEmployees.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      e.id.toLowerCase().includes(searchFilter.toLowerCase()) ||
      e.role.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesDept = deptFilter === 'All' || e.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;
    setPostSubmitted(true);
    setTimeout(() => {
      setPostSubmitted(false);
      setNewPostText('');
    }, 2500);
  };

  const enterprisePillars = [
    {
      icon: <Database size={22} className="icon-head" />,
      title: "Virtual Data Grids & Caching",
      desc: "Smoothly renders 10,000+ employee records with sub-millisecond pagination, memoized selectors, and client filtering."
    },
    {
      icon: <Zap size={22} className="icon-head" />,
      title: "Optimistic State Mutations",
      desc: "Instant UI feedback on multi-tier approvals, attendance clocking, social feed likes, and salary recalculations."
    },
    {
      icon: <ShieldCheck size={22} className="icon-head" />,
      title: "Role-Based Access (RBAC)",
      desc: "Granular authorization gates for Super Admins, HR Business Partners, Reporting Managers, and Employees."
    },
    {
      icon: <Cpu size={22} className="icon-head" />,
      title: "40+ Reusable Components",
      desc: "Comprehensive design system featuring modal drawers, validation schemas, dynamic tables, and toast engines."
    }
  ];

  return (
    <section id="hrms-spotlight" className="section hrms-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Enterprise Engineering Depth</span>
          </div>
          <h2 className="section-title">
            HRMS Enterprise <span className="gradient-text">Operating System</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive frontend architecture covering 9 core HR domains handling daily workforce operations, complex business logic, social engagement, and resilient REST APIs.
          </p>
        </div>

        {/* Dashboard Console Frame */}
        <div className="dashboard-console-frame">
          {/* Top Console Header */}
          <div className="console-header">
            <div className="console-left">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="console-breadcrumb">
                <span>Enterprise HRMS</span>
                <span className="sep">/</span>
                <span>9 Core Modules</span>
                <span className="sep">/</span>
                <span className="active-crumb">{activeModule.name}</span>
              </div>
            </div>

            <div className="console-telemetry">
              <div className="telemetry-tag">
                <span className="live-pulse"></span>
                <span>Module {activeModuleIdx + 1} of {HRMS_SPOTLIGHT.modules.length} Active</span>
              </div>
            </div>
          </div>

          <div className="console-body-grid">
            {/* Left Module Navigation (9 Modules) */}
            <div className="modules-sidebar">
              <div className="sidebar-title">
                <span>Core Modules Built ({HRMS_SPOTLIGHT.modules.length})</span>
              </div>
              <div className="modules-nav-scroll">
                {HRMS_SPOTLIGHT.modules.map((mod, idx) => (
                  <button
                    key={mod.name}
                    type="button"
                    className={`module-nav-item ${activeModuleIdx === idx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveModuleIdx(idx);
                      setApprovalStatus('pending');
                      setLeaveApplied(false);
                    }}
                  >
                    <div className="mod-icon">{mod.icon}</div>
                    <div className="mod-info">
                      <span className="mod-title">{mod.name}</span>
                      <span className="mod-num">Module 0{idx + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Main Stage */}
            <div className="module-stage">
              <div className="stage-top-banner">
                <div className="banner-info">
                  <div className="banner-badge-row">
                    <span className="module-icon-lg">{activeModule.icon}</span>
                    <span className="module-idx-tag">Module {activeModuleIdx + 1} of {HRMS_SPOTLIGHT.modules.length}</span>
                  </div>
                  <h3 className="active-title">{activeModule.name}</h3>
                  <p className="active-desc">{activeModule.explanation}</p>
                </div>
              </div>

              {/* Key Actions Chips */}
              <div className="key-actions-panel">
                <span className="actions-header-label">Key Actions & Workflows:</span>
                <div className="actions-chips-wrap">
                  {activeModule.keyActions.map((action, aIdx) => (
                    <span key={aIdx} className="action-chip">
                      <span className="chip-bullet">✓</span>
                      <span>{action}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Simulation Sandbox */}
              <div className="simulation-canvas">
                <div className="canvas-toolbar">
                  <span className="canvas-title">Interactive Live State Sandbox</span>
                  <span className="state-live">● Live Interactive Demo</span>
                </div>

                {/* 0. Employee Management */}
                {activeModuleIdx === 0 && (
                  <div className="directory-box">
                    <div className="filter-search-row">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="🔍 Search employee by name, ID (#EMP-1042), or role..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                      />
                      <select
                        className="dept-select"
                        value={deptFilter}
                        onChange={(e) => setDeptFilter(e.target.value)}
                        aria-label="Filter by department"
                      >
                        <option value="All">All Departments</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Design">Design</option>
                        <option value="HR & Ops">HR & Ops</option>
                        <option value="Finance">Finance</option>
                      </select>
                    </div>
                    <div className="styled-table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th>Employee ID</th>
                            <th>Full Name</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredEmployees.map((emp) => (
                            <tr key={emp.id}>
                              <td style={{ fontFamily: 'monospace', color: 'var(--accent-primary)', fontWeight: 600 }}>{emp.id}</td>
                              <td style={{ fontWeight: 700 }}>{emp.name}</td>
                              <td>{emp.dept}</td>
                              <td>{emp.role}</td>
                              <td><span className="status-badge-active">{emp.status}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 1. Policy Management */}
                {activeModuleIdx === 1 && (
                  <div className="policy-box">
                    <div className="policy-row">
                      <div className="policy-left">
                        <span className="policy-tag">Security</span>
                        <span className="policy-name">Information Security & Device Access Policy v2.4</span>
                      </div>
                      <div className="policy-right">
                        <span className="eff-date">Eff: Jan 2026</span>
                        <span className="ack-check"><CheckCircle2 size={14} /> Signed & Verified</span>
                      </div>
                    </div>
                    <div className="policy-row">
                      <div className="policy-left">
                        <span className="policy-tag">Leaves</span>
                        <span className="policy-name">Annual Paid Time-Off & Maternity/Paternity Guidelines</span>
                      </div>
                      <div className="policy-right">
                        <span className="eff-date">Eff: Jan 2026</span>
                        <span className="ack-check"><CheckCircle2 size={14} /> Active Policy</span>
                      </div>
                    </div>
                    <div className="policy-row">
                      <div className="policy-left">
                        <span className="policy-tag">Conduct</span>
                        <span className="policy-name">Workplace Code of Conduct & Anti-Harassment Standards</span>
                      </div>
                      <div className="policy-right">
                        <span className="eff-date">Eff: Aug 2025</span>
                        <span className="ack-check"><CheckCircle2 size={14} /> Signed & Verified</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Payroll & Compensation */}
                {activeModuleIdx === 2 && (
                  <div className="payroll-box">
                    <div className="salary-control-bar">
                      <label htmlFor="gross-range">Adjust Monthly Gross CTC:</label>
                      <span className="gross-amount">₹{grossSalary.toLocaleString()}</span>
                    </div>
                    <div className="range-slider-wrap">
                      <input
                        id="gross-range"
                        type="range"
                        min={30000}
                        max={250000}
                        step={5000}
                        value={grossSalary}
                        onChange={(e) => setGrossSalary(Number(e.target.value))}
                        aria-label="Gross Salary Slider"
                      />
                    </div>
                    <div className="salary-breakdown-grid">
                      <div className="breakdown-card">
                        <span className="lbl">Provident Fund (PF 12%)</span>
                        <span className="val deduct">- ₹{pf.toLocaleString()}</span>
                      </div>
                      <div className="breakdown-card">
                        <span className="lbl">Professional Tax & TDS</span>
                        <span className="val deduct">- ₹{tax.toLocaleString()}</span>
                      </div>
                      <div className="breakdown-card highlight-card">
                        <span className="lbl">Estimated Net Take-Home</span>
                        <span className="val net">₹{net.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Attendance & Time Tracking */}
                {activeModuleIdx === 3 && (
                  <div className="attendance-box">
                    <div className="attendance-status-banner">
                      <div className="status-info">
                        <div className="clock-time">
                          <Clock size={18} className="clock-icon" />
                          <span>Today: <strong>{isCheckedIn ? 'Checked In' : 'Checked Out'}</strong> at {checkInTime}</span>
                        </div>
                        <span className="shift-label">General Shift (09:00 AM – 06:00 PM)</span>
                      </div>
                      <button
                        type="button"
                        className={`btn-clock ${isCheckedIn ? 'btn-clock-out' : 'btn-clock-in'}`}
                        onClick={() => {
                          setIsCheckedIn(!isCheckedIn);
                          setCheckInTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                        }}
                      >
                        {isCheckedIn ? 'Simulate Check-Out' : 'Simulate Check-In'}
                      </button>
                    </div>

                    <div className="weekly-roster-grid">
                      {['Mon (9.2h)', 'Tue (8.8h)', 'Wed (9.0h)', 'Thu (8.5h)', 'Fri (Present)'].map((day, idx) => (
                        <div key={idx} className="roster-day-card">
                          <span className="day-name">{day.split(' ')[0]}</span>
                          <span className="day-badge status-present">{day.split(' ')[1] || 'On-Time'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Leave Management */}
                {activeModuleIdx === 4 && (
                  <div className="leave-box">
                    <div className="leave-balances-grid">
                      <div className="leave-quota-card">
                        <span className="quota-name">Casual Leave</span>
                        <span className="quota-val">8 <small>/ 12 Available</small></span>
                      </div>
                      <div className="leave-quota-card">
                        <span className="quota-name">Sick Leave</span>
                        <span className="quota-val">6 <small>/ 10 Available</small></span>
                      </div>
                      <div className="leave-quota-card">
                        <span className="quota-name">Earned / Privilege</span>
                        <span className="quota-val">14 <small>/ 18 Available</small></span>
                      </div>
                    </div>

                    {leaveApplied ? (
                      <div className="leave-success-msg">
                        <CheckCircle2 size={18} className="text-emerald" />
                        <span>Leave Request for {leaveDays} Days ({selectedLeaveType}) submitted to Reporting Manager!</span>
                        <button type="button" className="btn-reset-link" onClick={() => setLeaveApplied(false)}>
                          Apply Another
                        </button>
                      </div>
                    ) : (
                      <div className="leave-apply-form-strip">
                        <div className="form-item">
                          <label>Leave Type:</label>
                          <select
                            value={selectedLeaveType}
                            onChange={(e) => setSelectedLeaveType(e.target.value)}
                          >
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Earned Leave">Earned Leave</option>
                          </select>
                        </div>
                        <div className="form-item">
                          <label>Duration (Days):</label>
                          <input
                            type="number"
                            min={1}
                            max={10}
                            value={leaveDays}
                            onChange={(e) => setLeaveDays(Number(e.target.value))}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn-apply-leave"
                          onClick={() => setLeaveApplied(true)}
                        >
                          Submit Leave Request
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 5. Approval Workflows & Delegation */}
                {activeModuleIdx === 5 && (
                  <div className="approval-box">
                    <div className="workflow-steps-strip">
                      <div className={`wf-step ${approvalStep >= 1 ? 'completed' : ''}`}>
                        <span className="step-num">1</span>
                        <span>Team Lead</span>
                      </div>
                      <ArrowRight size={14} className="wf-arrow" />
                      <div className={`wf-step ${approvalStep >= 2 ? 'active-step' : ''}`}>
                        <span className="step-num">2</span>
                        <span>HR BP Review</span>
                      </div>
                      <ArrowRight size={14} className="wf-arrow" />
                      <div className={`wf-step ${approvalStep >= 3 ? 'completed' : ''}`}>
                        <span className="step-num">3</span>
                        <span>Finance Clearance</span>
                      </div>
                    </div>

                    <div className="approval-item-card">
                      <div className="req-meta">
                        <div className="req-name">🌴 Multi-Day Leave & Travel Reimbursement #REQ-9921</div>
                        <div className="req-context">Requester: Rahul Sharma • Dept: Engineering • Amount: ₹14,500</div>
                      </div>

                      <div className="action-buttons">
                        {approvalStatus === 'pending' ? (
                          <>
                            <button
                              type="button"
                              className="btn-app"
                              onClick={() => {
                                setApprovalStatus('approved');
                                setApprovalStep(3);
                              }}
                            >
                              ✓ Approve Stage
                            </button>
                            <button
                              type="button"
                              className="btn-rej"
                              onClick={() => setApprovalStatus('rejected')}
                            >
                              ✕ Reject
                            </button>
                            <button
                              type="button"
                              className="btn-del"
                              onClick={() => setApprovalStatus('delegated')}
                            >
                              ↪ Delegate
                            </button>
                          </>
                        ) : (
                          <div className="status-result-row">
                            <span className={`badge ${approvalStatus === 'approved' ? 'badge-emerald' : approvalStatus === 'delegated' ? 'badge-cyan' : 'badge-amber'}`}>
                              {approvalStatus === 'approved' && '✓ Approved & Routed to Stage 3'}
                              {approvalStatus === 'rejected' && '✕ Request Rejected'}
                              {approvalStatus === 'delegated' && '↪ Delegated to Proxy Reviewer'}
                            </span>
                            <button
                              type="button"
                              className="btn-reset-link"
                              onClick={() => {
                                setApprovalStatus('pending');
                                setApprovalStep(2);
                              }}
                            >
                              Reset
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Exit & Separation Management */}
                {activeModuleIdx === 6 && (
                  <div className="exit-box">
                    <div className="pipeline-step">
                      <span className="step-dot completed">✓</span>
                      <div className="step-text">
                        <strong>Resignation & Notice Period</strong>
                        <span>Submitted 30 Days Notice • Waiver Request: 5 Days Approved</span>
                      </div>
                    </div>
                    <div className="pipeline-step">
                      <span className="step-dot completed">✓</span>
                      <div className="step-text">
                        <strong>IT & Infrastructure Clearance</strong>
                        <span>MacBook Pro Serial #MBP-8821 & Access Tokens Revoked</span>
                      </div>
                    </div>
                    <div className="pipeline-step">
                      <span className="step-dot active">2</span>
                      <div className="step-text">
                        <strong>Finance & FnF Settlement</strong>
                        <span>Gratuity, Leave Encashment (14 Days) & Bonus calculated</span>
                      </div>
                    </div>
                    <div className="pipeline-step">
                      <span className="step-dot">3</span>
                      <div className="step-text">
                        <strong>Relieving & Experience Documentation</strong>
                        <span>Auto-generation of Relieving Letter and Service Certificate</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. Asset & Document Management */}
                {activeModuleIdx === 7 && (
                  <div className="asset-box">
                    <div className="asset-items-list">
                      <div className="asset-item-card">
                        <div className="asset-left">
                          <span className="asset-badge">Hardware</span>
                          <span className="asset-title">Apple MacBook Pro 16" (M3 Pro, 36GB)</span>
                          <span className="asset-id">Tag: #AST-2024-8841 • Assigned: Surendar G</span>
                        </div>
                        <span className="asset-status verified">✓ In Custody</span>
                      </div>

                      <div className="asset-item-card">
                        <div className="asset-left">
                          <span className="asset-badge badge-vault">Passport Vault</span>
                          <span className="asset-title">Official Passport & Work Visa Movement Log</span>
                          <span className="asset-id">Passport #Z889102 • Stored in HR Central Safe</span>
                        </div>
                        <span className="asset-status verified">✓ Movement Tracked</span>
                      </div>

                      <div className="asset-item-card alert-card">
                        <div className="asset-left">
                          <span className="asset-badge badge-warn">Document Expiry</span>
                          <span className="asset-title">Statutory Labor Contract & Health Clearance</span>
                          <span className="asset-id">Expires in 42 Days • Renewal Triggered</span>
                        </div>
                        <span className="asset-status warn"><AlertTriangle size={13} /> Action Required</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. Social Wall (Employee Engagement & Community) */}
                {activeModuleIdx === 8 && (
                  <div className="social-wall-box">
                    {/* Pinned Company Announcement */}
                    <div className="pinned-post-card">
                      <div className="post-header-row">
                        <div className="pin-badge">
                          <Pin size={12} />
                          <span>Pinned Announcement</span>
                        </div>
                        <span className="post-time">Today, 10:30 AM</span>
                      </div>
                      <div className="post-content">
                        <strong>🚀 Q3 All-Hands Town Hall & Product Roadmap Release</strong>
                        <p>Join leadership this Friday at 4 PM IST as we unveil our new AI-powered HRMS automation workflows!</p>
                      </div>
                    </div>

                    {/* Peer Recognition & Kudos Post */}
                    <div className="social-feed-card">
                      <div className="feed-author-row">
                        <div className="author-avatar">SC</div>
                        <div className="author-meta">
                          <span className="author-name">Sophia Chen <small>(Product Design Lead)</small></span>
                          <span className="kudos-badge"><Sparkles size={12} /> Gave Kudos to Surendar G</span>
                        </div>
                      </div>

                      <div className="feed-body">
                        "Huge shoutout to <strong>@Surendar G</strong> for engineering the high-performance CRUD tables and multi-tier approval matrix ahead of schedule! Amazing work! 🎉🙌"
                      </div>

                      {/* Interactive Reactions Bar */}
                      <div className="feed-actions-bar">
                        <button
                          type="button"
                          className={`btn-reaction ${isLiked ? 'liked' : ''}`}
                          onClick={handleLikeToggle}
                        >
                          <Heart size={14} className={isLiked ? 'fill-heart' : ''} />
                          <span>{likesCount} Likes</span>
                        </button>

                        <div className="reaction-pills">
                          <span className="reaction-pill">👏 18</span>
                          <span className="reaction-pill">🔥 12</span>
                          <span className="reaction-pill">🚀 15</span>
                        </div>

                        <div className="comment-tag">
                          <MessageSquare size={13} />
                          <span>6 Comments</span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Quick Poll */}
                    <div className="poll-widget-card">
                      <span className="poll-title">📊 Quick Team Poll: Annual Team Building Activity</span>
                      <div className="poll-options">
                        <button
                          type="button"
                          className={`poll-option-btn ${pollVoted === 'retreat' ? 'voted' : ''}`}
                          onClick={() => setPollVoted('retreat')}
                        >
                          <span>🏖️ Weekend Beach Retreat</span>
                          <span className="poll-pct">{pollVoted ? '68%' : 'Vote'}</span>
                        </button>
                        <button
                          type="button"
                          className={`poll-option-btn ${pollVoted === 'arcade' ? 'voted' : ''}`}
                          onClick={() => setPollVoted('arcade')}
                        >
                          <span>🎳 Gaming & Bowling Night</span>
                          <span className="poll-pct">{pollVoted ? '32%' : 'Vote'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Quick Share Form */}
                    <form className="quick-post-form" onSubmit={handlePostSubmit}>
                      <input
                        type="text"
                        placeholder="Share an update, celebrate a teammate, or announce news..."
                        value={newPostText}
                        onChange={(e) => setNewPostText(e.target.value)}
                      />
                      <button type="submit" className="btn-post">
                        <Send size={14} />
                        <span>Post</span>
                      </button>
                    </form>

                    {postSubmitted && (
                      <div className="post-success-toast">
                        <CheckCircle2 size={14} />
                        <span>Your post has been published to the company feed!</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Engineering Specs */}
              <div className="engineering-specs-box">
                <h4>Engineering Implementation Details</h4>
                <div className="specs-grid">
                  {activeModule.engineeringHighlights.map((spec, sIdx) => (
                    <div key={sIdx} className="spec-item">
                      <span className="bullet">✦</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Architecture Standards */}
        <div className="enterprise-standards-strip">
          {enterprisePillars.map((p, idx) => (
            <div key={idx} className="standard-card">
              {p.icon}
              <div className="standard-title">{p.title}</div>
              <p className="standard-text">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
